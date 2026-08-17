import React from 'react';
import { ArrowRight, Mail, MapPin } from 'lucide-react';
import { companyDetails } from '../data/siteData';

export default function Footer({ setActivePage, onOpenConsultation }) {
  const navTo = (pageId) => {
    setActivePage(pageId);
  };

  return (
    <footer className="relative border-t border-zinc-200 pt-16 pb-10">
      {/* Ambient top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

      <div className="w-full px-4 sm:px-8 lg:px-16 2xl:px-20">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-orange-600 to-orange-500 flex items-center justify-center">
                <span className="font-black text-white text-sm">H</span>
              </div>
              <span className="text-lg font-extrabold text-zinc-900 tracking-tight">HIRANMAYE</span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
              Digital growth agency. Strategy, AI, and performance marketing.
            </p>
            <div className="flex items-center space-x-2 text-xs text-zinc-500">
              <MapPin className="w-3.5 h-3.5 text-orange-650" />
              <span>{companyDetails.address}</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-zinc-500">
              <Mail className="w-3.5 h-3.5 text-orange-650" />
              <span>{companyDetails.email}</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Navigate</h4>
            <ul className="space-y-2.5 text-sm text-zinc-500">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'services', label: 'Services' },
                { id: 'blog', label: 'Insights' },
                { id: 'contact', label: 'Contact' }
              ].map(l => (
                <li key={l.id}>
                  <button onClick={() => navTo(l.id)} className="hover:text-orange-600 transition-colors cursor-pointer">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Ready to grow?</h4>
            <p className="text-sm text-zinc-500">
              Book a free strategy session.
            </p>
            <button
              onClick={onOpenConsultation}
              className="btn-glow px-6 py-3 text-xs font-bold uppercase tracking-wider flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-200 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-600 gap-3">
          <p>© {new Date().getFullYear()} HIRANMAYE DIGITAL. Bangalore, India.</p>
          <p className="text-zinc-700">Strategy · AI · Performance</p>
        </div>
      </div>
    </footer>
  );
}
