import React from 'react';
import { ArrowRight, Eye, Rocket } from 'lucide-react';
import { aboutContent } from '../data/siteData';
import Tilt3DCard from '../components/Tilt3DCard';

const valueIcons = ['✦', '◈', '◆', '▲', '●', '◎'];

export default function AboutPage({ setActivePage, onOpenConsultation }) {
  return (
    <div className="relative w-full">

      {/* ============================================
          1. HERO
          ============================================ */}
      <section className="section-cinematic min-h-[70vh] px-4 sm:px-8 relative pt-32 pb-16">
        <div className="glow-top" />
        <div className="reveal text-center space-y-6 max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95]">
            <span className="text-zinc-900">Our</span>{' '}
            <span className="gradient-text-hero">Story</span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-500 max-w-lg mx-auto">
            Strategy, creativity, and AI — combined to drive real business growth.
          </p>
          <button
            onClick={onOpenConsultation}
            className="btn-glow px-7 py-3.5 text-xs uppercase tracking-wider font-bold inline-flex items-center space-x-2"
          >
            <span>Work With Us</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ============================================
          2. VISION + MISSION — Two glass cards
          ============================================ */}
      <section className="py-12 sm:py-18 px-4 sm:px-8 lg:px-16">
        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Tilt3DCard maxTilt={8}>
            <div className="glass-dark glass-dark-hover rounded-2xl p-8 sm:p-10 border-zinc-200 h-full space-y-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500/15 text-orange-600 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900">Vision</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                India's most trusted digital growth partner.
              </p>
            </div>
          </Tilt3DCard>

          <Tilt3DCard maxTilt={8}>
            <div className="glass-dark glass-dark-hover rounded-2xl p-8 sm:p-10 border-zinc-200 h-full space-y-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500/15 text-orange-600 flex items-center justify-center">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900">Mission</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Unlock business potential through digital excellence.
              </p>
            </div>
          </Tilt3DCard>
        </div>
      </section>

      {/* ============================================
          3. VALUES — Minimal icon cards
          ============================================ */}
      <section className="py-12 sm:py-18 px-4 sm:px-8 lg:px-16">
        <div className="reveal text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 tracking-tight">
            Our Values
          </h2>
        </div>

        <div className="stagger-children grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {aboutContent.coreValues.map((val, idx) => (
            <Tilt3DCard key={val.title} maxTilt={10}>
              <div className="glass-dark glass-dark-hover rounded-2xl p-5 sm:p-6 border-zinc-200 text-center h-full group">
                <div className="text-2xl mb-3 text-orange-500 group-hover:scale-110 transition-transform">
                  {valueIcons[idx] || '◆'}
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-zinc-900">
                  {val.title}
                </h4>
              </div>
            </Tilt3DCard>
          ))}
        </div>
      </section>

      {/* ============================================
          4. CTA — "Let's Talk"
          ============================================ */}
      <section className="section-cinematic px-4 sm:px-8 relative">
        <div className="glow-accent left-1/2 -translate-x-1/2 top-0" />
        <div className="reveal text-center space-y-6 relative z-10">
          <h2 className="text-5xl sm:text-7xl font-black text-zinc-900 tracking-tight">
            Let's Talk
          </h2>
          <p className="text-sm text-zinc-500">
            Your growth story starts with a conversation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenConsultation}
              className="btn-glow px-8 py-4 text-sm uppercase tracking-wider font-bold inline-flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => { setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="btn-ghost px-7 py-4 text-sm uppercase tracking-wider font-medium"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
