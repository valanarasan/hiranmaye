import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, onOpenConsultation }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'blog', label: 'Insights' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300 py-4 bg-transparent"
      style={{ transform: 'translate3d(0, 0, 0)', WebkitTransform: 'translate3d(0, 0, 0)' }}
    >
      <div className="w-full px-4 sm:px-8 lg:px-16 2xl:px-20">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
              <span className="font-black text-white text-lg">H</span>
            </div>
            <span className="text-lg font-extrabold tracking-tight text-zinc-900 group-hover:text-orange-600 transition-colors">
              HIRANMAYE
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1 px-2 py-1 rounded-full border border-zinc-200 bg-white/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-zinc-950 text-white shadow-sm'
                      : 'text-zinc-650 hover:text-zinc-950 hover:bg-zinc-200/80'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <button
              onClick={onOpenConsultation}
              className="btn-glow px-5 py-2.5 text-xs font-bold uppercase tracking-wider flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onOpenConsultation}
              className="px-3 py-1.5 rounded-lg bg-orange-500/15 text-orange-700 border border-orange-500/30 cursor-pointer"
            >
              Start
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-black/[0.02] text-zinc-700 border border-zinc-200 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-dark border-t border-zinc-200 px-4 pt-4 pb-6 mt-2 space-y-1 animate-fade-in">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium cursor-pointer ${
                activePage === link.id
                  ? 'bg-zinc-950 text-white'
                  : 'text-zinc-650 hover:text-zinc-950 hover:bg-zinc-200/80'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenConsultation(); }}
              className="w-full btn-glow py-3 text-center text-sm font-bold uppercase tracking-wider"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
