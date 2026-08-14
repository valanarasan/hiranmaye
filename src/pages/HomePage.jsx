import React from 'react';
import { ArrowRight, Target, TrendingUp, Cpu, Palette, Search, Share2, Layout, Zap, Bot, Briefcase, Layers, FileText } from 'lucide-react';
import { companyDetails, processSteps, servicesData, industriesServed } from '../data/siteData';
import Hero3DCanvas from '../components/Hero3DCanvas';
import Tilt3DCard from '../components/Tilt3DCard';
import Process3DPipeline from '../components/Process3DPipeline';
import ROICalculator3D from '../components/ROICalculator3D';
import Industry3DGrid from '../components/Industry3DGrid';

const iconComponents = {
  Target, TrendingUp, Cpu, Palette, Search, Share2, Layout, Zap, Bot, Briefcase, Layers, FileText
};

// Short service labels for the minimal card grid
const serviceShortLabels = {
  'digital-strategy': { label: 'Strategy', icon: 'Target' },
  'social-media': { label: 'Social Media', icon: 'Share2' },
  'web-development': { label: 'Web Design', icon: 'Layout' },
  'branding-design': { label: 'Branding', icon: 'Palette' },
  'content-marketing': { label: 'Content', icon: 'FileText' },
  'performance-marketing': { label: 'Performance', icon: 'Zap' },
  'ai-marketing': { label: 'AI Marketing', icon: 'Bot' },
  'seo-aeo-geo': { label: 'SEO · AEO · GEO', icon: 'Search' },
  'meta-google-ads': { label: 'Paid Ads', icon: 'Target' },
  'business-consulting': { label: 'Consulting', icon: 'Briefcase' },
  'outdoor-branding': { label: 'Outdoor', icon: 'Layers' }
};

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
          3. SERVICES — Horizontal scrolling cards
          ============================================ */}
      <section className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 relative">
        <div className="glow-accent -left-40 top-1/2 -translate-y-1/2" />
        
        <div className="reveal text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            What We Do
          </h2>
        </div>

        <div className="reveal overflow-x-auto scrollbar-none pb-4 -mx-4 px-4">
          <div className="stagger-children flex space-x-4 min-w-max">
            {servicesData.slice(0, 8).map((srv) => {
              const shortInfo = serviceShortLabels[srv.id] || { label: srv.title, icon: 'Target' };
              const IconComp = iconComponents[shortInfo.icon] || Target;
              return (
                <Tilt3DCard key={srv.id} maxTilt={10}>
                  <div
                    onClick={() => { setActivePage('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="w-40 sm:w-48 h-52 sm:h-60 rounded-2xl glass-dark glass-dark-hover border-white/[0.04] p-5 sm:p-6 flex flex-col justify-between cursor-pointer group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/[0.04] text-zinc-500 flex items-center justify-center group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-all">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                        {shortInfo.label}
                      </h3>
                      <div className="flex items-center space-x-1 text-[10px] text-zinc-600 mt-1 group-hover:text-purple-400/60 transition-colors">
                        <span>Explore</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Tilt3DCard>
              );
            })}
          </div>
        </div>

        <div className="reveal text-center mt-8">
          <button
            onClick={() => { setActivePage('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="btn-ghost px-6 py-3 text-xs uppercase tracking-wider font-medium inline-flex items-center space-x-2"
          >
            <span>View All 11 Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
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
          6. INDUSTRIES — Icon grid
          ============================================ */}
      <section className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 relative">
        <div className="reveal text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Industries We Serve
          </h2>
        </div>
        <div className="reveal">
          <Industry3DGrid industries={industriesServed} />
        </div>
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
