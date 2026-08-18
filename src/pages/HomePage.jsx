import React from 'react';
import { 
  ArrowRight, Target, Palette, Sparkles, 
  TrendingUp, Cpu, MessageSquare, Handshake, 
  Check
} from 'lucide-react';


import { companyDetails, whyChooseCards, industriesServed } from '../data/siteData';
import Hero3DCanvas from '../components/Hero3DCanvas';
import Tilt3DCard from '../components/Tilt3DCard';
import StoryChapterNav from '../components/StoryChapterNav';
import GrowthCrossroadsInteractive from '../components/GrowthCrossroadsInteractive';
import StoryProcessTimeline from '../components/StoryProcessTimeline';
import InteractiveROISimulator from '../components/InteractiveROISimulator';
import StoryTestimonials from '../components/StoryTestimonials';

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
      
      {/* Floating Story Navigator & Reading Tracker */}
      <StoryChapterNav />

      {/* =========================================================================
          CHAPTER 01 / THE SPARK: Ambition & Vision (Hero Section)
          ========================================================================= */}
      <section id="chapter-1" className="relative min-h-[92vh] flex flex-col justify-center items-center pt-24 pb-16 px-4 sm:px-8">
        {/* 3D Dynamic Ambient Canvas */}
        <div className="absolute inset-0 z-0">
          <Hero3DCanvas />
        </div>

        {/* Ambient Top Glow */}
        <div className="glow-top" />

        {/* Hero Narrative Core */}
        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6 pt-4">
          
          {/* Story Chapter Indicator Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-700 text-xs font-mono font-bold tracking-wider animate-fade-in shadow-xs">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span>CHAPTER 01 &bull; THE SPARK</span>
          </div>

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


        {/* Scroll Journey Indicator */}
        <div className="pt-12 pb-4 flex flex-col items-center space-y-2 pointer-events-none z-10">
          <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
            Scroll to follow the journey
          </span>
          <div className="w-5 h-8 rounded-full border border-zinc-300 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
          </div>
        </div>

        {/* Living Stats Strip */}
        <div className="w-full max-w-5xl mx-auto pt-6 z-10">
          <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 rounded-3xl bg-white/80 backdrop-blur-md border border-zinc-200/80 shadow-lg shadow-black/5">
            {companyDetails.stats.map((stat, idx) => (
              <div key={idx} className="text-center py-3 px-2 border-r last:border-r-0 border-zinc-100">
                <div className="text-2xl sm:text-4xl font-black gradient-text-hero">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs text-zinc-600 font-bold mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* =========================================================================
          NARRATIVE TRANSITION: The Growth Crossroads (Interactive Before vs After)
          ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 border-y border-zinc-100 bg-zinc-50/70 relative">
        <div className="reveal">
          <GrowthCrossroadsInteractive onOpenConsultation={onOpenConsultation} />
        </div>
      </section>

      {/* =========================================================================
          CHAPTER 02 / THE SHIFT: The Philosophy & Mindset
          ========================================================================= */}
      <section id="chapter-2" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 relative">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Chapter Header */}
          <div className="text-center space-y-3 max-w-3xl mx-auto reveal">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-700 text-xs font-mono font-bold tracking-wider">
              <span>CHAPTER 02 &bull; THE SHIFT</span>
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
          CHAPTER 03 / THE BLUEPRINT: The 5-Stage Transformation Journey
          ========================================================================= */}
      <section id="chapter-3" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-zinc-50/70 border-y border-zinc-200/80 relative">
        <div className="reveal">
          <StoryProcessTimeline onOpenConsultation={onOpenConsultation} />
        </div>
      </section>

      {/* =========================================================================
          CHAPTER 04 / THE PROOF: Interactive ROI Simulator & Success Chronicles
          ========================================================================= */}
      <section id="chapter-4" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 relative">
        <div className="max-w-6xl mx-auto space-y-20">
          
          {/* Chapter Header */}
          <div className="text-center space-y-3 max-w-3xl mx-auto reveal">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-700 text-xs font-mono font-bold tracking-wider">
              <span>CHAPTER 04 &bull; THE PROOF</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 tracking-tight">
              Measurable Business Outcomes, Not Vanity Metrics
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              We hold ourselves accountable to pipeline velocity, conversion volume, and revenue generated. Test our growth simulator below.
            </p>
          </div>

          {/* Interactive ROI Simulator */}
          <div className="reveal">
            <InteractiveROISimulator onOpenConsultation={onOpenConsultation} />
          </div>

          {/* Real-World Transformation Case Chronicles */}
          <div className="reveal pt-4 border-t border-zinc-200/80">
            <StoryTestimonials />
          </div>

        </div>
      </section>

      {/* =========================================================================
          CHAPTER 05 / THE HORIZON: Industries We Accelerate
          ========================================================================= */}
      <section id="chapter-5" className="py-20 sm:py-24 relative overflow-hidden bg-zinc-50/70 border-t border-zinc-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 mb-12 text-center space-y-3 reveal">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-700 text-xs font-mono font-bold tracking-wider">
            <span>CHAPTER 05 &bull; THE HORIZON</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 tracking-tight">
            Tailored Playbooks for High-Growth Sectors
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 max-w-2xl mx-auto">
            From industrial B2B giants to luxury real estate developers and multi-speciality healthcare networks, we tailor our systems to each domain's buying cycle.
          </p>
        </div>

        {/* Dual Direction Ticker */}
        <div className="relative mb-4">
          <div className="flex animate-marquee-left">
            {[...industriesServed, ...industriesServed].map((ind, idx) => (
              <div
                key={`r1-${idx}`}
                className="shrink-0 mx-2 px-6 py-3.5 rounded-2xl border border-zinc-200 bg-white text-xs sm:text-sm font-bold text-zinc-800 hover:text-orange-600 hover:border-orange-500/40 hover:shadow-md transition-all duration-300 cursor-default whitespace-nowrap shadow-xs"
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
                className="shrink-0 mx-2 px-6 py-3.5 rounded-2xl border border-zinc-200 bg-white text-xs sm:text-sm font-bold text-zinc-800 hover:text-orange-600 hover:border-orange-500/40 hover:shadow-md transition-all duration-300 cursor-default whitespace-nowrap shadow-xs"
              >
                {ind.name}
              </div>
            ))}
          </div>
        </div>

        {/* Edge Gradients */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-50 to-transparent z-10 pointer-events-none" />
      </section>

      {/* =========================================================================
          CHAPTER 06 / THE NEXT CHAPTER: Your Breakthrough (Final CTA Gateway)
          ========================================================================= */}
      <section id="chapter-6" className="py-20 sm:py-28 px-4 sm:px-8 relative bg-zinc-950 text-white overflow-hidden">
        {/* Cinematic Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10 reveal">
          
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-300 text-xs font-mono font-bold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping" />
            <span>CHAPTER 06 &bull; THE NEXT CHAPTER</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]">
            Your Story of Market Dominance{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-200">
              Begins Today
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            The next 12 months will either be another cycle of unpredictable marketing, or the year your business commands its market. Let's write that next chapter together.
          </p>

          {/* Action Gateway */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm uppercase tracking-wider font-extrabold flex items-center justify-center space-x-3 shadow-2xl shadow-orange-500/30 transition-all hover:scale-105 cursor-pointer"
            >
              <span>Book 1-on-1 Strategy Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/${companyDetails.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Hiranmaye%20Digital%2C%20I%27d%20like%20to%20discuss%20our%20growth%20strategy`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm uppercase tracking-wider font-bold flex items-center justify-center space-x-2 transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Direct WhatsApp Fast-Track</span>
            </a>
          </div>

          {/* Transparency & Credibility Ribbon */}
          <div className="pt-8 border-t border-zinc-800 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
            <span className="flex items-center space-x-1.5">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Complimentary 45-Min Growth Deep Dive</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Competitor & Keyword Intelligence Report Included</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Bangalore Headquarters & Global Reach</span>
            </span>
          </div>

        </div>
      </section>

    </div>
  );
}
