import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, ArrowRight, CheckCircle2, Send, Share2, MessageCircle } from 'lucide-react';
import { companyDetails, servicesData } from '../data/siteData';

export default function Footer({ setActivePage, onOpenConsultation }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  const navTo = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 text-slate-300 pt-16 pb-12 overflow-hidden border-t border-purple-900/30">
      {/* Top Ambient Light Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-r from-fuchsia-600/20 to-purple-600/10 blur-[100px] pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 2xl:px-16 relative z-10">
        
        {/* Top Newsletter Strip */}
        <div className="bg-gradient-to-r from-purple-900/90 via-fuchsia-950 to-slate-900 rounded-3xl p-6 sm:p-10 mb-16 border border-purple-500/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-fuchsia-400">
                Growth Insights Newsletter
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Stay Ahead of AI & Digital Marketing Trends
              </h3>
              <p className="text-sm text-purple-200/80 leading-relaxed">
                Subscribe to receive expert insights, practical growth strategies, and AEO/GEO search playbooks delivered directly to your inbox.
              </p>
            </div>
            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 p-4 rounded-2xl flex items-center space-x-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Thank you for subscribing! You will receive our latest insights soon.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your business email"
                    required
                    className="flex-1 bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-sm text-white placeholder-purple-200/50 focus:outline-none focus:border-fuchsia-400"
                  />
                  <button
                    type="submit"
                    className="btn-glow-plum px-6 py-3 text-xs uppercase tracking-wider font-bold whitespace-nowrap flex items-center justify-center space-x-2"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Contact Info */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-700 to-fuchsia-500 p-0.5 shadow-md">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                  <span className="font-black text-purple-800 text-lg">H</span>
                </div>
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                HIRANMAYE <span className="text-fuchsia-400">DIGITAL</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Full-service digital marketing agency headquartered in Bangalore. Combining strategy, creativity, AI marketing, and performance advertising to transform ambitious businesses into market leaders.
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-fuchsia-400 shrink-0 mt-1" />
                <span>{companyDetails.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                <span>{companyDetails.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-fuchsia-400 shrink-0" />
                <span>{companyDetails.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{companyDetails.website}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide border-l-2 border-fuchsia-500 pl-3">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => navTo('home')} className="hover:text-fuchsia-400 transition-colors">
                  Home Page
                </button>
              </li>
              <li>
                <button onClick={() => navTo('about')} className="hover:text-fuchsia-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => navTo('services')} className="hover:text-fuchsia-400 transition-colors">
                  Services (11)
                </button>
              </li>
              <li>
                <button onClick={() => navTo('blog')} className="hover:text-fuchsia-400 transition-colors">
                  Blog / Insights
                </button>
              </li>
              <li>
                <button onClick={() => navTo('contact')} className="hover:text-fuchsia-400 transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Directory */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide border-l-2 border-purple-500 pl-3">
              Services Directory
            </h4>
            <ul className="space-y-2 text-xs">
              {servicesData.slice(0, 8).map((srv) => (
                <li key={srv.id}>
                  <button 
                    onClick={() => navTo('services')}
                    className="hover:text-fuchsia-400 transition-colors text-left flex items-center space-x-1.5"
                  >
                    <span className="text-fuchsia-500">•</span>
                    <span>{srv.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Business Hours & Booking */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide border-l-2 border-fuchsia-500 pl-3">
              Bangalore HQ Hours
            </h4>
            <div className="text-xs space-y-2 text-slate-300 bg-white/5 p-4 rounded-2xl border border-white/10">
              <p><strong className="text-white">Weekdays:</strong> {companyDetails.hours.weekdays}</p>
              <p><strong className="text-white">Saturday:</strong> {companyDetails.hours.saturday}</p>
              <p><strong className="text-white">Sunday:</strong> {companyDetails.hours.sunday}</p>
            </div>

            <button
              onClick={onOpenConsultation}
              className="w-full btn-glow-plum py-3 text-xs uppercase tracking-wider font-bold flex items-center justify-center space-x-2 mt-4 shadow-lg"
            >
              <span>Book Strategy Session</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} HIRANMAYE DIGITAL. All Rights Reserved. HQ: Bangalore, Karnataka, India.</p>
          <div className="flex items-center space-x-3">
            <a href="#" aria-label="Website" className="p-2 bg-white/5 hover:bg-white/15 rounded-full transition-colors">
              <Globe className="w-4 h-4 text-slate-300" />
            </a>
            <a href="#" aria-label="Social Share" className="p-2 bg-white/5 hover:bg-white/15 rounded-full transition-colors">
              <Share2 className="w-4 h-4 text-slate-300" />
            </a>
            <a href="#" aria-label="Message" className="p-2 bg-white/5 hover:bg-white/15 rounded-full transition-colors">
              <MessageCircle className="w-4 h-4 text-slate-300" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
