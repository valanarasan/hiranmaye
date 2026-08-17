import React from 'react';
import { ArrowRight, Target, Palette, Search, Zap } from 'lucide-react';
import { companyDetails, processSteps, industriesServed } from '../data/siteData';
import Hero3DCanvas from '../components/Hero3DCanvas';
import Tilt3DCard from '../components/Tilt3DCard';
import Process3DPipeline from '../components/Process3DPipeline';
import ROICalculator3D from '../components/ROICalculator3D';



export default function HomePage({ setActivePage, onOpenConsultation }) {
  return (
    <div className="relative w-full">
      
      {/* ============================================
          1. HERO — Full viewport, dramatic headline
          ============================================ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Canvas Background */}
        <div className="absolute inset-0 z-0">
          <Hero3DCanvas />
        </div>

        {/* Top ambient glow */}
        <div className="glow-top" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-8 max-w-5xl mx-auto space-y-8">
          
          {/* Tagline pill */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm animate-float-gentle">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Digital Growth Agency · Bangalore</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95]">
            <span className="text-white">We Make Brands</span>
            <br />
            <span className="gradient-text-hero">Unforgettable</span>
          </h1>

          {/* Single CTA */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="btn-glow px-8 py-4 text-sm uppercase tracking-wider font-bold flex items-center space-x-3"
            >
              <span>Start Growing</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => { setActivePage('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="btn-ghost px-7 py-4 text-sm uppercase tracking-wider font-medium flex items-center space-x-2"
            >
              <span>Our Work</span>
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 animate-float-slow">
          <div className="w-5 h-8 rounded-full border border-white/[0.15] flex items-start justify-center p-1.5">
            <div className="w-1 h-2 rounded-full bg-purple-400 animate-pulse" />
          </div>
        </div>
      </section>

      {/* ============================================
          2. STATS — Big animated counters
          ============================================ */}
      <section className="section-cinematic">
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 w-full max-w-5xl mx-auto px-4 sm:px-8">
          {companyDetails.stats.map((stat, idx) => (
            <Tilt3DCard key={idx} maxTilt={8}>
              <div className="text-center py-8 sm:py-12 px-4 rounded-2xl glass-dark glass-dark-hover border-white/[0.04] group">
                <div className="text-4xl sm:text-6xl lg:text-7xl font-black gradient-text-hero">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-zinc-600 font-medium mt-2 uppercase tracking-wider group-hover:text-zinc-400 transition-colors">
                  {stat.label}
                </div>
              </div>
            </Tilt3DCard>
          ))}
        </div>
      </section>

      {/* ============================================
          3. SERVICES — 4 Pillar Cards
          ============================================ */}
      <section className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 relative">
        <div className="glow-accent -left-40 top-1/2 -translate-y-1/2" />
        
        <div className="reveal text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            What We Do
          </h2>
        </div>

        <div className="stagger-children grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-6xl mx-auto">
          {[
            {
              title: 'Strategy & Growth',
              icon: Target,
              gradient: 'from-violet-600 to-purple-500',
              shadowColor: 'shadow-violet-500/20',
              services: ['Digital Strategy', 'Consulting', 'Market Analysis']
            },
            {
              title: 'Search & AI',
              icon: Search,
              gradient: 'from-purple-600 to-fuchsia-500',
              shadowColor: 'shadow-purple-500/20',
              services: ['SEO · AEO · GEO', 'AI Marketing', 'Content Strategy']
            },
            {
              title: 'Creative & Brand',
              icon: Palette,
              gradient: 'from-fuchsia-600 to-rose-500',
              shadowColor: 'shadow-fuchsia-500/20',
              services: ['Branding', 'Web Design', 'Outdoor Media']
            },
            {
              title: 'Performance',
              icon: Zap,
              gradient: 'from-cyan-500 to-blue-500',
              shadowColor: 'shadow-cyan-500/20',
              services: ['Meta & Google Ads', 'Social Media', 'Performance Marketing']
            }
          ].map((pillar) => {
            const IconComp = pillar.icon;
            return (
              <Tilt3DCard key={pillar.title} maxTilt={8}>
                <div
                  onClick={() => { setActivePage('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="glass-dark glass-dark-hover rounded-2xl p-6 sm:p-8 border-white/[0.04] cursor-pointer group h-full flex flex-col"
                >
                  {/* Icon with gradient bg */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-5 shadow-lg ${pillar.shadowColor} group-hover:scale-110 transition-transform`}>
                    <IconComp className="w-5 h-5 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Sub-services list */}
                  <ul className="space-y-2 flex-grow">
                    {pillar.services.map(s => (
                      <li key={s} className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors flex items-center space-x-2">
                        <span className="w-1 h-1 rounded-full bg-purple-500/50 shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Arrow */}
                  <div className="flex items-center space-x-1 text-[10px] text-zinc-600 mt-5 group-hover:text-purple-400 transition-colors">
                    <span>Explore</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </Tilt3DCard>
            );
          })}
        </div>
      </section>

      {/* ============================================
          4. PROCESS — Vertical storytelling pipeline
          ============================================ */}
      <section className="section-cinematic px-4 sm:px-8">
        <div className="reveal text-center mb-8">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            How We Work
          </h2>
        </div>
        <div className="reveal">
          <Process3DPipeline processSteps={processSteps} />
        </div>
      </section>

      {/* ============================================
          5. ROI — Dramatic stat
          ============================================ */}
      <section className="section-cinematic px-4 sm:px-8">
        <div className="reveal">
          <ROICalculator3D onOpenConsultation={onOpenConsultation} />
        </div>
      </section>

      {/* ============================================
          6. INDUSTRIES — Auto-scrolling marquee
          ============================================ */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="reveal text-center mb-12 px-4 sm:px-8">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Industries We Serve
          </h2>
        </div>

        {/* Marquee Row 1 — scrolls left */}
        <div className="relative mb-4">
          <div className="flex animate-marquee-left">
            {[...industriesServed, ...industriesServed].map((ind, idx) => (
              <div
                key={`r1-${idx}`}
                className="shrink-0 mx-2 px-6 py-3 rounded-full border border-white/[0.06] bg-white/[0.02] text-sm font-medium text-zinc-400 hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300 cursor-default whitespace-nowrap"
              >
                {ind.name}
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Row 2 — scrolls right */}
        <div className="relative">
          <div className="flex animate-marquee-right">
            {[...industriesServed.slice().reverse(), ...industriesServed.slice().reverse()].map((ind, idx) => (
              <div
                key={`r2-${idx}`}
                className="shrink-0 mx-2 px-6 py-3 rounded-full border border-white/[0.06] bg-white/[0.02] text-sm font-medium text-zinc-400 hover:text-white hover:border-fuchsia-500/40 hover:bg-fuchsia-500/10 transition-all duration-300 cursor-default whitespace-nowrap"
              >
                {ind.name}
              </div>
            ))}
          </div>
        </div>

        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#09090B] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#09090B] to-transparent z-10 pointer-events-none" />
      </section>

      {/* ============================================
          7. FINAL CTA — "Ready?" 
          ============================================ */}
      <section className="section-cinematic px-4 sm:px-8 relative">
        <div className="glow-accent left-1/2 -translate-x-1/2 top-0" />
        
        <div className="reveal text-center space-y-8 max-w-3xl mx-auto relative z-10">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight">
            Ready?
          </h2>
          <p className="text-base sm:text-lg text-zinc-500 max-w-md mx-auto">
            Let's build something extraordinary together.
          </p>
          <button
            onClick={onOpenConsultation}
            className="btn-glow px-10 py-5 text-sm uppercase tracking-wider font-bold inline-flex items-center space-x-3"
          >
            <span>Start Your Growth</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

    </div>
  );
}
