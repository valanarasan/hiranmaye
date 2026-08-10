import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, onOpenConsultation }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services (11)' },
    { id: 'blog', label: 'Blog / Insights' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav-light py-3 shadow-md' : 'bg-transparent py-5'}`}>
      <div className="w-full px-4 sm:px-8 lg:px-12 2xl:px-16">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-700 via-fuchsia-600 to-sky-500 p-0.5 shadow-md shadow-purple-900/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-fuchsia-600 text-xl">H</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight text-slate-900 group-hover:text-purple-700 transition-colors">
                HIRANMAYE <span className="gradient-text-plum">DIGITAL</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                Strategic Growth Agency
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-purple-100 shadow-sm">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-800 to-fuchsia-600 text-white shadow-md shadow-purple-900/20'
                      : 'text-slate-600 hover:text-purple-900 hover:bg-purple-50/70'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Primary Action Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={onOpenConsultation}
              className="btn-glow-plum px-5 py-2.5 text-xs font-bold uppercase tracking-wider flex items-center space-x-2 cursor-pointer shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-fuchsia-200 animate-pulse" />
              <span>Free Consultation</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onOpenConsultation}
              className="px-3 py-1.5 rounded-lg bg-purple-100 text-purple-800 text-xs font-bold border border-purple-200"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white text-slate-700 border border-purple-100 shadow-sm focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-purple-800" /> : <Menu className="w-6 h-6 text-slate-700" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel-light border-b border-purple-100 px-4 pt-4 pb-6 mt-3 space-y-2 shadow-2xl animate-fadeIn">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-base font-bold flex items-center justify-between ${
                activePage === link.id
                  ? 'bg-purple-100 text-purple-900 border border-purple-200'
                  : 'text-slate-700 hover:bg-purple-50'
              }`}
            >
              <span>{link.label}</span>
              {activePage === link.id && <ArrowRight className="w-4 h-4 text-purple-800" />}
            </button>
          ))}
          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full btn-glow-plum py-3 text-center text-sm font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-fuchsia-200" />
              <span>Book Free Strategy Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
