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
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-zinc-200 bg-black/[0.02] backdrop-blur-sm animate-float-gentle">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Digital Growth Agency · Bangalore</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95]">
            <span className="text-zinc-900">We Make Brands</span>
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
          <div className="w-5 h-8 rounded-full border border-zinc-300 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 rounded-full bg-orange-500 animate-pulse" />
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
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-zinc-900 tracking-tight">
            What We Do
          </h2>
        </div>

        <div className="stagger-children grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-6xl mx-auto">
          {[
            {
              title: 'Strategy & Growth',
              icon: Target,
              gradient: 'from-zinc-950 to-zinc-800',
              shadowColor: 'shadow-zinc-950/10',
              services: ['Digital Strategy', 'Consulting', 'Market Analysis']
            },
            {
              title: 'Search & AI',
              icon: Search,
              gradient: 'from-orange-600 to-orange-500',
              shadowColor: 'shadow-orange-500/10',
              services: ['SEO · AEO · GEO', 'AI Marketing', 'Content Strategy']
            },
            {
              title: 'Creative & Brand',
              icon: Palette,
              gradient: 'from-zinc-900 to-zinc-800',
              shadowColor: 'shadow-zinc-900/10',
              services: ['Branding', 'Web Design', 'Outdoor Media']
            },
            {
              title: 'Performance',
              icon: Zap,
              gradient: 'from-orange-700 to-orange-600',
              shadowColor: 'shadow-orange-600/10',
              services: ['Meta & Google Ads', 'Social Media', 'Performance Marketing']
            }
          ].map((pillar) => {
            const IconComp = pillar.icon;
            return (
              <Tilt3DCard key={pillar.title} maxTilt={8}>
                <div
                  onClick={() => { setActivePage('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="glass-dark glass-dark-hover rounded-2xl p-6 sm:p-8 border-zinc-200 cursor-pointer group h-full flex flex-col"
                >
                  {/* Icon with gradient bg */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-5 shadow-lg ${pillar.shadowColor} group-hover:scale-110 transition-transform`}>
                    <IconComp className="w-5 h-5 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 mb-4 group-hover:text-orange-600 transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Sub-services list */}
                  <ul className="space-y-2 flex-grow">
                    {pillar.services.map(s => (
                      <li key={s} className="text-xs text-zinc-500 group-hover:text-zinc-650 transition-colors flex items-center space-x-2">
                        <span className="w-1 h-1 rounded-full bg-orange-500/50 shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Arrow */}
                  <div className="flex items-center space-x-1 text-[10px] text-zinc-600 mt-5 group-hover:text-orange-600 transition-colors">
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
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 tracking-tight">
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
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 tracking-tight">
            Industries We Serve
          </h2>
        </div>

        {/* Marquee Row 1 — scrolls left */}
        <div className="relative mb-4">
          <div className="flex animate-marquee-left">
            {[...industriesServed, ...industriesServed].map((ind, idx) => (
              <div
                key={`r1-${idx}`}
                className="shrink-0 mx-2 px-6 py-3 rounded-full border border-zinc-200 bg-white/70 text-sm font-medium text-zinc-650 hover:text-orange-600 hover:border-orange-500/40 hover:bg-orange-500/10 transition-all duration-300 cursor-default whitespace-nowrap shadow-sm"
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
                className="shrink-0 mx-2 px-6 py-3 rounded-full border border-zinc-200 bg-white/70 text-sm font-medium text-zinc-650 hover:text-orange-600 hover:border-orange-500/40 hover:bg-orange-500/10 transition-all duration-300 cursor-default whitespace-nowrap shadow-sm"
              >
                {ind.name}
              </div>
            ))}
          </div>
        </div>

        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#FFFFFF] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#FFFFFF] to-transparent z-10 pointer-events-none" />
      </section>

      {/* ============================================
          7. FINAL CTA — "Ready?" 
          ============================================ */}
      <section className="section-cinematic px-4 sm:px-8 relative">
        <div className="glow-accent left-1/2 -translate-x-1/2 top-0" />

        <div className="reveal text-center space-y-8 max-w-3xl mx-auto relative z-10">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black text-zinc-900 tracking-tight">
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
