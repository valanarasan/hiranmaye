import React from 'react';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { companyDetails } from '../data/siteData';
import Logo from './Logo';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './SocialIcons';

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
            <div onClick={() => navTo('home')} className="cursor-pointer">
              <Logo variant="horizontal" showTagline={true} />
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
              Digital growth agency. Strategy, AI, and performance marketing.
            </p>
            <div className="space-y-2 text-xs text-zinc-500">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-orange-650 shrink-0" />
                <span>{companyDetails.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-orange-650 shrink-0" />
                <a href={`tel:${companyDetails.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-orange-600 transition-colors">
                  {companyDetails.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-orange-650 shrink-0" />
                <a href={`mailto:${companyDetails.email}`} className="hover:text-orange-600 transition-colors">
                  {companyDetails.email}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={companyDetails.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-black/[0.02] border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-orange-600 hover:border-orange-500/30 transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={companyDetails.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-black/[0.02] border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-orange-600 hover:border-orange-500/30 transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={companyDetails.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-black/[0.02] border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-orange-600 hover:border-orange-500/30 transition-all"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={companyDetails.socials.maps}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-black/[0.02] border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-orange-600 hover:border-orange-500/30 transition-all"
                aria-label="Google Maps Location"
              >
                <MapPin className="w-4 h-4" />
              </a>
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
