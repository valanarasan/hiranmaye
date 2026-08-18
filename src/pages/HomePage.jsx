import React from 'react';
import { ArrowRight, Target, Palette, Search, Zap, CheckCircle2, Shield, Sparkles, TrendingUp, Cpu, MessageSquare, Handshake, Compass, Share2, Layout, FileText, Bot, Briefcase, Layers } from 'lucide-react';
import { companyDetails, processSteps, whyChooseCards, servicesData, industriesServed } from '../data/siteData';
import Hero3DCanvas from '../components/Hero3DCanvas';
import Tilt3DCard from '../components/Tilt3DCard';
import Process3DPipeline from '../components/Process3DPipeline';
import ROICalculator3D from '../components/ROICalculator3D';

const serviceIconMap = {
  'digital-strategy': Compass,
  'social-media': Share2,
  'web-development': Layout,
  'branding-design': Palette,
  'content-marketing': FileText,
  'performance-marketing': Zap,
  'ai-marketing': Bot,
  'seo-aeo-geo': Search,
  'meta-google-ads': Target,
  'business-consulting': Briefcase,
  'outdoor-branding': Layers
};

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
    <div className="relative w-full">

      {/* ============================================
          1. HERO SECTION
          ============================================ */}
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-24 pb-16">
        {/* 3D Canvas Background */}
        <div className="absolute inset-0 z-0">
          <Hero3DCanvas />
        </div>

        {/* Top ambient glow */}
        <div className="glow-top" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-8 max-w-4xl mx-auto space-y-6">

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] select-none">
            <span className="text-zinc-900">We Make Brands</span>
            <br />
            <span className="gradient-text-hero">Unforgettable</span>
          </h1>

          {/* Clean, punchy sub-copy */}
          <p className="text-base sm:text-lg text-zinc-600 max-w-lg mx-auto leading-relaxed font-normal">
            Strategy, creativity, and AI-powered performance marketing designed for measurable growth.
          </p>

          {/* Clean CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={onOpenConsultation}
              className="btn-glow px-8 py-4 text-xs uppercase tracking-wider font-bold flex items-center space-x-2.5 shadow-xl shadow-orange-500/20"
            >
              <span>Start Growing</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActivePage('services')}
              className="btn-ghost px-7 py-4 text-xs uppercase tracking-wider font-semibold flex items-center space-x-2"
            >
              <span>Our Work</span>
            </button>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 pointer-events-none">
          <div className="w-5 h-8 rounded-full border border-zinc-300 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 rounded-full bg-orange-500 animate-pulse" />
          </div>
        </div>
      </section>

      {/* ============================================
          TRUST STRIP & STATS
          ============================================ */}
      <section className="py-12 px-4 sm:px-8 border-y border-zinc-100 bg-zinc-50/60">
        <div className="max-w-5xl mx-auto space-y-10">
          
          {/* Trust Strip */}
          <div className="text-center space-y-3">
            <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
              Trusted by Ambitious Brands Across
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {companyDetails.trustStrip.map((item) => (
                <span
                  key={item}
                  className="px-4 py-1.5 rounded-full text-xs font-medium bg-white text-zinc-700 border border-zinc-200/80 shadow-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Stats Counters */}
          <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-4 border-t border-zinc-200/60">
            {companyDetails.stats.map((stat, idx) => (
              <Tilt3DCard key={idx} maxTilt={8}>
                <div className="text-center py-6 px-4 rounded-2xl glass-dark glass-dark-hover border-zinc-200/80 group shadow-sm">
                  <div className="text-3xl sm:text-5xl font-black gradient-text-hero">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-zinc-600 font-semibold mt-2 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </Tilt3DCard>
            ))}
          </div>

        </div>
      </section>


      {/* ============================================
          2. WHO WE ARE
          ============================================ */}
      <section className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4 reveal">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-700 text-xs font-bold uppercase tracking-wider">
                <span>Who We Are</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 tracking-tight leading-tight">
                Your Strategic Partner for Sustainable Digital Growth
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-4 text-zinc-600 leading-relaxed text-sm sm:text-base reveal">
              <p>
                <strong className="text-zinc-900">HIRANMAYE DIGITAL</strong> is a full-service digital marketing agency based in Bangalore, dedicated to helping businesses grow through strategic marketing, powerful branding, intelligent automation, and measurable performance.
              </p>
              <p>
                We don't believe in generic marketing campaigns. Every strategy we develop is tailored to your business objectives, target audience, industry landscape, and growth ambitions.
              </p>
              <p>
                By combining creativity, technology, analytics, and AI-driven insights, we create marketing systems that generate real business outcomes, not just impressions or clicks.
              </p>
              <p>
                Whether you're a startup looking to establish your presence or an established business aiming to scale, we partner with you to build sustainable digital growth.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setActivePage('about')}
                  className="text-orange-600 hover:text-orange-700 font-bold text-sm inline-flex items-center space-x-2 transition-colors cursor-pointer"
                >
                  <span>Learn more about our vision & approach</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================
          3. WHY CHOOSE HIRANMAYE DIGITAL?
          ============================================ */}
      <section className="py-20 sm:py-24 px-4 sm:px-8 lg:px-16 bg-zinc-50/60 border-y border-zinc-200/70 relative">
        <div className="max-w-6xl mx-auto">
          
          <div className="reveal text-center space-y-3 max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-700 text-xs font-bold uppercase tracking-wider">
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 tracking-tight">
              More Than a Marketing Agency — Your Business Growth Partner
            </h2>
          </div>

          <div className="stagger-children grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseCards.map((card) => {
              const IconComp = whyChooseIconMap[card.id] || Sparkles;
              return (
                <Tilt3DCard key={card.id} maxTilt={6}>
                  <div className="glass-dark glass-dark-hover rounded-2xl p-7 border-zinc-200/80 h-full flex flex-col justify-between group shadow-sm">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-zinc-900 mb-2 group-hover:text-orange-600 transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </Tilt3DCard>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================================
          4. OUR SERVICES (10 + 1 Services Grid)
          ============================================ */}
      <section className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 relative">
        <div className="max-w-6xl mx-auto">
          
          <div className="reveal text-center space-y-4 max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-700 text-xs font-bold uppercase tracking-wider">
              <span>Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 tracking-tight">
              Comprehensive Digital Solutions Designed for Business Growth
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              From strategic planning to execution and optimization, we offer end-to-end digital marketing services that help businesses attract customers, increase visibility, and accelerate growth.
            </p>
          </div>

          <div className="stagger-children grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicesData.map((srv, idx) => {
              const IconComp = serviceIconMap[srv.id] || Compass;
              return (
                <Tilt3DCard key={srv.id} maxTilt={6}>
                  <div
                    onClick={() => setActivePage('services')}
                    className="glass-dark glass-dark-hover rounded-2xl p-6 sm:p-7 border-zinc-200/80 cursor-pointer group h-full flex flex-col justify-between shadow-sm"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-600 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono text-zinc-400 font-bold">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-zinc-900 group-hover:text-orange-600 transition-colors mb-2">
                        {srv.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                        {srv.shortDesc}
                      </p>
                    </div>

                    <div className="flex items-center space-x-1.5 text-xs font-bold text-orange-600 mt-5 pt-3 border-t border-zinc-100 group-hover:translate-x-1 transition-transform">
                      <span>View details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Tilt3DCard>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================================
          5. OUR PROCESS — 5 Steps
          ============================================ */}
      <section className="py-20 sm:py-24 px-4 sm:px-8 lg:px-16 bg-zinc-50/60 border-y border-zinc-200/70">
        <div className="max-w-5xl mx-auto">
          <div className="reveal text-center space-y-3 mb-12">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-700 text-xs font-bold uppercase tracking-wider">
              <span>Our Process</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 tracking-tight">
              Our Proven Growth Framework
            </h2>
          </div>
          <div className="reveal">
            <Process3DPipeline processSteps={processSteps} />
          </div>
        </div>
      </section>

      {/* ============================================
          ROI CALCULATOR
          ============================================ */}
      <section className="section-cinematic px-4 sm:px-8">
        <div className="reveal">
          <ROICalculator3D onOpenConsultation={onOpenConsultation} />
        </div>
      </section>

      {/* ============================================
          6. INDUSTRIES MARQUEE
          ============================================ */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        <div className="reveal text-center mb-10 px-4 sm:px-8">
          <h2 className="text-2xl sm:text-4xl font-black text-zinc-900 tracking-tight">
            Industries We Accelerate
          </h2>
        </div>

        <div className="relative mb-3">
          <div className="flex animate-marquee-left">
            {[...industriesServed, ...industriesServed].map((ind, idx) => (
              <div
                key={`r1-${idx}`}
                className="shrink-0 mx-2 px-6 py-3 rounded-full border border-zinc-200 bg-white text-sm font-semibold text-zinc-700 hover:text-orange-600 hover:border-orange-500/40 hover:bg-orange-50 transition-all duration-300 cursor-default whitespace-nowrap shadow-sm"
              >
                {ind.name}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="flex animate-marquee-right">
            {[...industriesServed.slice().reverse(), ...industriesServed.slice().reverse()].map((ind, idx) => (
              <div
                key={`r2-${idx}`}
                className="shrink-0 mx-2 px-6 py-3 rounded-full border border-zinc-200 bg-white text-sm font-semibold text-zinc-700 hover:text-orange-600 hover:border-orange-500/40 hover:bg-orange-50 transition-all duration-300 cursor-default whitespace-nowrap shadow-sm"
              >
                {ind.name}
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </section>

      {/* ============================================
          7. FINAL CTA SECTION
          ============================================ */}
      <section className="section-cinematic px-4 sm:px-8 relative pb-20">
        <div className="glow-accent left-1/2 -translate-x-1/2 top-0" />

        <div className="reveal text-center space-y-6 max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-zinc-900 tracking-tight">
            Ready to Grow Your Business?
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 max-w-xl mx-auto leading-relaxed">
            Let's build a digital strategy that delivers measurable results, strengthens your brand, and drives sustainable growth.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="btn-glow px-8 py-4 text-xs uppercase tracking-wider font-bold inline-flex items-center space-x-3 shadow-xl shadow-orange-500/20"
            >
              <span>Book a Free Strategy Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`https://wa.me/${companyDetails.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Hiranmaye%20Digital%2C%20I%27d%20like%20to%20talk%20to%20your%20experts`}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost px-7 py-4 text-xs uppercase tracking-wider font-bold inline-flex items-center space-x-2"
            >
              <span>Talk to Our Experts</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
