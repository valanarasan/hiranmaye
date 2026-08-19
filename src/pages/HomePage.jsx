import React from 'react';
import { 
  ArrowRight, Target, Palette, Sparkles, 
  TrendingUp, Cpu, MessageSquare, Handshake, 
  MessageCircle, Check
} from 'lucide-react';

import { companyDetails, whyChooseCards } from '../data/siteData';
import Hero3DCanvas from '../components/Hero3DCanvas';
import Tilt3DCard from '../components/Tilt3DCard';
import GrowthCrossroadsInteractive from '../components/GrowthCrossroadsInteractive';
import StoryProcessTimeline from '../components/StoryProcessTimeline';

const whyChooseIconMap = {
  'strategy-first': Target,
  'performance-driven': TrendingUp,
  'ai-powered': Cpu,
  'creative-excellence': Palette,
  'transparent-comm': MessageSquare,
  'long-term-partner': Handshake
};

export default function HomePage({ setActivePage, onOpenConsultation }) {
  return (
    <div className="relative w-full overflow-hidden bg-white selection:bg-orange-500 selection:text-white">
      
      {/* =========================================================================
          HERO SECTION: Ambition & Vision
          ========================================================================= */}
      {/* =========================================================================
          HERO SECTION: Ambition & Vision
          ========================================================================= */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-center items-center pt-24 pb-12 sm:pb-16 px-4 sm:px-8 overflow-hidden">
        {/* 3D Dynamic Ambient Canvas */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Hero3DCanvas />
        </div>

        {/* Ambient Top Glow */}
        <div className="glow-top pointer-events-none" />

        {/* Hero Narrative Core - Strictly Center Aligned in front of 3D render */}
        <div className="relative z-10 text-center max-w-4xl mx-auto my-auto space-y-6 pt-4 flex flex-col items-center justify-center">
          
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] select-none text-center">
            <span className="text-zinc-900">We Make Brands</span>
            <br />
            <span className="gradient-text-hero">Unforgettable</span>
          </h1>

          {/* Clean, punchy sub-copy */}
          <p className="text-base sm:text-lg text-zinc-600 max-w-lg mx-auto leading-relaxed font-normal text-center">
            Strategy, creativity, and AI-powered performance marketing designed for measurable growth.
          </p>

          {/* Clean CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={onOpenConsultation}
              className="btn-glow px-8 py-4 text-xs uppercase tracking-wider font-bold flex items-center space-x-2.5 shadow-xl shadow-orange-500/20 cursor-pointer"
            >
              <span>Start Growing</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActivePage('services')}
              className="btn-ghost px-7 py-4 text-xs uppercase tracking-wider font-semibold flex items-center space-x-2 cursor-pointer"
            >
              <span>Our Work</span>
            </button>
          </div>
        </div>

        {/* Scroll Journey Indicator - Centered at Bottom */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center space-y-1.5 pointer-events-none z-10">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
            Scroll to explore
          </span>
          <div className="w-4 h-7 rounded-full border border-zinc-300 flex items-start justify-center p-1">
            <div className="w-1.5 h-2 rounded-full bg-orange-500 animate-pulse" />
          </div>
        </div>

        {/* Metrics Badge - Positioned to the Right */}
        <div className="relative mt-8 sm:mt-0 sm:absolute sm:bottom-8 sm:right-8 lg:bottom-10 lg:right-12 z-10">
          <div className="flex items-center gap-4 sm:gap-5 px-5 py-3.5 rounded-2xl bg-white/90 backdrop-blur-xl border border-zinc-200/90 shadow-xl shadow-black/5 hover:border-orange-500/30 transition-all">
            {companyDetails.stats.slice(-2).map((stat, idx) => (
              <div key={idx} className="text-center px-1 first:border-r border-zinc-200/80 first:pr-4 sm:first:pr-5">
                <div className="text-xl sm:text-2xl font-black gradient-text-hero">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-[11px] text-zinc-600 font-bold uppercase tracking-wider whitespace-nowrap mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          NARRATIVE TRANSITION: Marketing Stuck / Journey Comparison
          ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 border-y border-zinc-800/80 bg-[#0e0f12] text-white relative">
        <div className="reveal">
          <GrowthCrossroadsInteractive onOpenConsultation={onOpenConsultation} />
        </div>
      </section>

      {/* =========================================================================
          PHILOSOPHY & MINDSET SECTION
          ========================================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 relative">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Section Header */}
          <div className="text-center space-y-3 max-w-3xl mx-auto reveal">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-700 text-xs font-bold uppercase tracking-wider">
              <span>Our Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 tracking-tight leading-tight">
              Strategy Before Spend. Outcomes Before Vanity Metrics.
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              We founded <strong className="text-zinc-900">HIRANMAYE DIGITAL</strong> on a singular conviction: businesses don't need more random marketing activity; they need a coherent growth architecture that converts every marketing rupee into quantifiable enterprise value.
            </p>
          </div>

          {/* 3 Core Pillars of Transformation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal">
            
            <Tilt3DCard maxTilt={6}>
              <div className="bg-white rounded-3xl p-7 border border-zinc-200/90 shadow-sm h-full flex flex-col justify-between group hover:border-orange-500/40 hover:shadow-xl hover:shadow-orange-500/5 transition-all">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-600 flex items-center justify-center mb-5 group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <Target className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest">Pillar I</span>
                  <h3 className="text-lg font-bold text-zinc-900 mt-1 mb-2 group-hover:text-orange-600 transition-colors">
                    Forensic Market Intelligence
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    We dissect competitor weaknesses, map high-intent buying queries, and engineer messaging that addresses the exact pain points of your dream clients.
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-100 flex items-center text-xs font-bold text-orange-600">
                  <span>Zero Guesswork</span>
                </div>
              </div>
            </Tilt3DCard>

            <Tilt3DCard maxTilt={6}>
              <div className="bg-white rounded-3xl p-7 border border-zinc-200/90 shadow-sm h-full flex flex-col justify-between group hover:border-orange-500/40 hover:shadow-xl hover:shadow-orange-500/5 transition-all">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-600 flex items-center justify-center mb-5 group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <Palette className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest">Pillar II</span>
                  <h3 className="text-lg font-bold text-zinc-900 mt-1 mb-2 group-hover:text-orange-600 transition-colors">
                    Scroll-Stopping Brand Identity
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    Premium creative design, high-converting copy, and modern visual assets that establish immediate authority and differentiate you from noisy competitors.
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-100 flex items-center text-xs font-bold text-orange-600">
                  <span>Unforgettable Presence</span>
                </div>
              </div>
            </Tilt3DCard>

            <Tilt3DCard maxTilt={6}>
              <div className="bg-white rounded-3xl p-7 border border-zinc-200/90 shadow-sm h-full flex flex-col justify-between group hover:border-orange-500/40 hover:shadow-xl hover:shadow-orange-500/5 transition-all">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-600 flex items-center justify-center mb-5 group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest">Pillar III</span>
                  <h3 className="text-lg font-bold text-zinc-900 mt-1 mb-2 group-hover:text-orange-600 transition-colors">
                    AI-Driven Funnel Precision
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    Automated lead capture, machine-learning bid optimizations, server-side attribution, and continuous multivariate testing to continually drive down acquisition costs.
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-100 flex items-center text-xs font-bold text-orange-600">
                  <span>Predictable Scaling</span>
                </div>
              </div>
            </Tilt3DCard>

          </div>

          {/* Why Choose Us Grid */}
          <div className="pt-8 border-t border-zinc-200/80 reveal">
            <div className="text-center mb-10 space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black text-zinc-900">
                Why Industry Leaders Partner With Us
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500">
                Built for founders, CMOs, and business owners who value transparency and measurable growth.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {whyChooseCards.map((card) => {
                const IconComp = whyChooseIconMap[card.id] || Sparkles;
                return (
                  <div
                    key={card.id}
                    className="p-6 rounded-2xl bg-zinc-50/80 border border-zinc-200/80 hover:bg-white hover:border-orange-500/30 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors shrink-0">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-zinc-900 group-hover:text-orange-600 transition-colors">
                        {card.title}
                      </h4>
                    </div>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          BLUEPRINT / PROCESS TIMELINE SECTION
          ========================================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-zinc-50/70 border-y border-zinc-200/80 relative">
        <div className="reveal">
          <StoryProcessTimeline onOpenConsultation={onOpenConsultation} />
        </div>
      </section>

      {/* =========================================================================
          FINAL CONVERSION CTA SECTION: High-Impact Grand Finale
          ========================================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-8 relative bg-zinc-950 text-white overflow-hidden border-t border-zinc-800">
        {/* Cinematic Ambient Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_-10%,rgba(234,88,12,0.22),rgba(0,0,0,0))] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-orange-500/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full border border-white/[0.04] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10 reveal">
          
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 text-xs font-bold uppercase tracking-wider shadow-lg shadow-orange-500/10">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>Start Growing Today</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] drop-shadow-sm">
            Your Story of Market Dominance{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-200">
              Begins Today
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed font-normal">
            The next 12 months will either be another cycle of unpredictable marketing, or the year your business commands its market. Let's engineer your growth machine together.
          </p>

          {/* Action Gateway */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm uppercase tracking-wider font-extrabold flex items-center justify-center space-x-3 shadow-2xl shadow-orange-500/40 transition-all hover:scale-105 cursor-pointer"
            >
              <span>Book 1-on-1 Strategy Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/${companyDetails.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Hiranmaye%20Digital%2C%20I%27d%20like%20to%20discuss%20our%20growth%20strategy`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm uppercase tracking-wider font-bold flex items-center justify-center space-x-2.5 transition-all cursor-pointer backdrop-blur-md hover:border-white/30"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Direct WhatsApp Fast-Track</span>
            </a>
          </div>

          {/* Transparency & Credibility Ribbon */}
          <div className="pt-8 border-t border-zinc-800/90 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-zinc-300">
            <span className="flex items-center space-x-2 font-medium">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Complimentary 45-Min Growth Deep Dive</span>
            </span>
            <span className="flex items-center space-x-2 font-medium">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Competitor & Keyword Intelligence Report Included</span>
            </span>
            <span className="flex items-center space-x-2 font-medium">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Bangalore Headquarters & Global Reach</span>
            </span>
          </div>

        </div>
      </section>

    </div>
  );
}
