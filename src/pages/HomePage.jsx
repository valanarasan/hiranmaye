import React from 'react';
import { 
  ArrowRight, Sparkles, Target, TrendingUp, Cpu, Palette, MessageSquare, 
  Handshake, ChevronRight, Compass, Share2, Layout, FileText, 
  Zap, Bot, Search, Layers, Briefcase, Award, Users, ShieldCheck, CheckCircle2
} from 'lucide-react';
import { companyDetails, whyChooseCards, processSteps, servicesData, industriesServed, seoPageMeta } from '../data/siteData';
import Hero3DCanvas from '../components/Hero3DCanvas';
import Tilt3DCard from '../components/Tilt3DCard';
import Process3DPipeline from '../components/Process3DPipeline';
import ROICalculator3D from '../components/ROICalculator3D';
import Industry3DGrid from '../components/Industry3DGrid';

const iconComponents = {
  Target, TrendingUp, Cpu, Palette, MessageSquare, Handshake,
  Compass, Share2, Layout, FileText, Zap, Bot, Search, Layers, Briefcase
};

export default function HomePage({ setActivePage, onOpenConsultation }) {
  return (
    <div className="space-y-24 pb-20 relative w-full">
      
      {/* Top Ambient Light Glow */}
      <div className="ambient-glow-top-light" />

      {/* 1. HERO SECTION WITH 3D WEBGL CANVAS */}
      <section className="relative pt-28 lg:pt-36 px-4 sm:px-8 lg:px-12 2xl:px-16 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full glass-panel-light border border-purple-200 shadow-sm animate-float-slow">
              <Sparkles className="w-4 h-4 text-fuchsia-600 animate-pulse" />
              <span className="text-xs uppercase tracking-wider font-extrabold text-purple-950">
                HIRANMAYE DIGITAL • Bangalore's Premier Digital Growth Agency
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl 2xl:text-7xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Transforming Businesses into Market Leaders Through <span className="gradient-text-plum">Strategic Digital Growth</span>
            </h1>

            {/* Sub Heading */}
            <p className="text-base sm:text-lg 2xl:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl">
              {companyDetails.heroSubHeading}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenConsultation}
                className="btn-glow-plum px-8 py-4 text-sm uppercase tracking-wider font-bold flex items-center justify-center space-x-3 cursor-pointer shadow-xl shadow-purple-900/20"
              >
                <span>Book a Free Strategy Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => {
                  setActivePage('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn-outline-light px-7 py-4 text-sm uppercase tracking-wider font-bold flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>View Our Work & Services</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Trust Strip */}
            <div className="pt-8 border-t border-purple-100 space-y-3">
              <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">
                Trusted by Ambitious Brands Across Key Sectors:
              </p>
              <div className="flex flex-wrap items-center gap-2.5">
                {companyDetails.trustStrip.map((item) => (
                  <span 
                    key={item}
                    className="px-4 py-2 rounded-full bg-white border border-purple-100 text-xs font-bold text-slate-700 shadow-2xs hover:border-purple-300 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive WebGL Canvas Visualizer */}
          <div className="lg:col-span-5 relative h-[450px] sm:h-[540px] rounded-3xl overflow-hidden glass-panel-light border-purple-200/80 shadow-2xl shadow-purple-900/5">
            <Hero3DCanvas />
          </div>

        </div>

        {/* Statistics Bar with 3D Tilt */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-12">
          {companyDetails.stats.map((stat, idx) => (
            <Tilt3DCard key={idx} maxTilt={8}>
              <div className="glass-panel-light rounded-2xl p-6 border-purple-100 text-center shadow-sm hover:shadow-md">
                <div className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-fuchsia-600 to-sky-500">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-500 mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </Tilt3DCard>
          ))}
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <section className="w-full px-4 sm:px-8 lg:px-12 2xl:px-16 z-10 relative">
        <Tilt3DCard maxTilt={3} className="w-full">
          <div className="glass-panel-light rounded-3xl p-8 sm:p-14 border-purple-200 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 text-fuchsia-700 text-xs font-bold uppercase tracking-widest bg-fuchsia-50 px-3.5 py-1.5 rounded-full border border-fuchsia-200">
                  <Users className="w-4 h-4" />
                  <span>Who We Are</span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                  Your Strategic Partner for <span className="gradient-text-plum">Sustainable Digital Growth</span>
                </h2>

                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    <strong>HIRANMAYE DIGITAL</strong> is a full-service digital marketing agency based in Bangalore, dedicated to helping businesses grow through strategic marketing, powerful branding, intelligent automation, and measurable performance.
                  </p>
                  <p>
                    We don't believe in generic marketing campaigns. Every strategy we develop is tailored to your business objectives, target audience, industry landscape, and growth ambitions.
                  </p>
                  <p>
                    By combining creativity, technology, analytics, and AI-driven insights, we create marketing systems that generate real business outcomes — not just impressions or clicks.
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap gap-4">
                  <button
                    onClick={() => {
                      setActivePage('about');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="btn-glow-plum px-7 py-3.5 text-xs uppercase tracking-wider font-bold flex items-center space-x-2 shadow-lg"
                  >
                    <span>Learn More About Our Team</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="bg-gradient-to-br from-purple-50 via-fuchsia-50/50 to-white rounded-3xl p-8 border border-purple-200 space-y-6 shadow-sm">
                  <h4 className="text-slate-900 font-extrabold text-xl border-b border-purple-200 pb-3 flex items-center space-x-2">
                    <ShieldCheck className="w-6 h-6 text-fuchsia-600" />
                    <span>The HIRANMAYE Promise</span>
                  </h4>
                  
                  <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 font-semibold">
                    <li className="flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Tailored Growth Roadmaps (No Copy-Paste Campaigns)</span>
                    </li>
                    <li className="flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Multi-Channel Integration (SEO, AEO, GEO, Meta & Google)</span>
                    </li>
                    <li className="flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>AI Automation Workflows to Lower CPA</span>
                    </li>
                    <li className="flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Transparent Weekly & Monthly Analytics Reporting</span>
                    </li>
                  </ul>

                  <div className="p-4 rounded-2xl bg-white border border-purple-100 text-center shadow-xs">
                    <span className="text-xs text-slate-500 block font-bold uppercase tracking-wider">Headquartered in Bangalore</span>
                    <span className="text-base font-extrabold text-purple-900">Serving Ambitious Brands Worldwide</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Tilt3DCard>
      </section>

      {/* 3. WHY CHOOSE HIRANMAYE DIGITAL */}
      <section className="w-full px-4 sm:px-8 lg:px-12 2xl:px-16 space-y-12 z-10 relative">
        <div className="text-center space-y-3 max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-fuchsia-700 text-xs font-bold uppercase tracking-widest bg-fuchsia-50 px-3 py-1 rounded-full border border-fuchsia-200">
            <Award className="w-4 h-4" />
            <span>Why Partner With Us</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            More Than a Marketing Agency — Your Business Growth Partner
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            We align creativity and technology directly with bottom-line revenue outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-6">
          {whyChooseCards.map((card) => {
            const IconComp = iconComponents[card.icon] || Target;
            return (
              <Tilt3DCard key={card.id} maxTilt={8}>
                <div className="glass-panel-light glass-panel-light-hover rounded-2xl p-7 border-purple-100 space-y-4 group h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-700 to-fuchsia-500 p-0.5 shadow-md text-white flex items-center justify-center">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-800 transition-colors">
                      {card.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </Tilt3DCard>
            );
          })}
        </div>
      </section>

      {/* 4. OUR SERVICES (10+ CARDS SUMMARY) */}
      <section className="w-full px-4 sm:px-8 lg:px-12 2xl:px-16 space-y-12 z-10 relative">
        <div className="text-center space-y-3 max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-purple-800 text-xs font-bold uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
            <Compass className="w-4 h-4" />
            <span>End-To-End Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Comprehensive Digital Solutions Designed for Growth
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            From strategic planning to execution and optimization, we offer end-to-end digital marketing services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-6">
          {servicesData.map((srv) => {
            const IconComponent = iconComponents[srv.icon] || Compass;
            return (
              <Tilt3DCard key={srv.id} maxTilt={8}>
                <div
                  onClick={() => {
                    setActivePage('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="glass-panel-light glass-panel-light-hover rounded-2xl p-6 border-purple-100 flex flex-col justify-between cursor-pointer group h-full"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center group-hover:bg-purple-800 group-hover:text-white transition-colors shadow-sm">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] uppercase tracking-wider text-purple-700 font-extrabold px-2.5 py-1 bg-purple-50 rounded-full border border-purple-200">
                        Detailed Guide →
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-800 transition-colors">
                      {srv.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {srv.shortDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-purple-100 mt-4 flex items-center justify-between text-xs font-bold text-purple-800">
                    <span>Explore Strategy</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform text-fuchsia-600" />
                  </div>
                </div>
              </Tilt3DCard>
            );
          })}
        </div>

        <div className="text-center pt-2">
          <button
            onClick={() => {
              setActivePage('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn-outline-light px-8 py-3.5 text-xs uppercase tracking-wider font-bold inline-flex items-center space-x-2"
          >
            <span>Explore Full Breakdown for All 11 Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 5. 3D INTERACTIVE ROI CALCULATOR */}
      <section className="w-full px-4 sm:px-8 lg:px-12 2xl:px-16 z-10 relative">
        <ROICalculator3D onOpenConsultation={onOpenConsultation} />
      </section>

      {/* 6. 3D INTERACTIVE PROCESS PIPELINE */}
      <section className="w-full px-4 sm:px-8 lg:px-12 2xl:px-16 space-y-10 z-10 relative">
        <div className="text-center space-y-3 max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-fuchsia-700 text-xs font-bold uppercase tracking-widest bg-fuchsia-50 px-3 py-1 rounded-full border border-fuchsia-200">
            <TrendingUp className="w-4 h-4" />
            <span>Execution Model</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Our Proven Growth Framework
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Click through the 3D pipeline stages to see how we discover, strategize, execute, optimize, and scale.
          </p>
        </div>

        <Process3DPipeline processSteps={processSteps} />
      </section>

      {/* 7. INDUSTRIES WE SERVE GRID */}
      <section className="w-full px-4 sm:px-8 lg:px-12 2xl:px-16 space-y-10 z-10 relative">
        <div className="text-center space-y-3 max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-purple-800 text-xs font-bold uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
            <Users className="w-4 h-4" />
            <span>Target Sectors & Search Platforms</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Industries We Serve
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Tailored digital marketing systems engineered specifically for specialized domain requirements.
          </p>
        </div>

        <Industry3DGrid industries={industriesServed} />
      </section>

      {/* 8. FINAL CTA SECTION */}
      <section className="w-full px-4 sm:px-8 lg:px-12 2xl:px-16 z-10 relative">
        <Tilt3DCard maxTilt={3}>
          <div className="glass-panel-light rounded-3xl p-10 sm:p-16 border-2 border-purple-300 text-center space-y-6 bg-gradient-to-br from-purple-900 via-fuchsia-950 to-slate-900 text-white relative overflow-hidden shadow-2xl">
            
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-fuchsia-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Transform Your Market Presence</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight max-w-3xl mx-auto">
              Ready to Grow Your Business?
            </h2>

            <p className="text-base sm:text-lg text-purple-200 max-w-2xl mx-auto leading-relaxed">
              Let's build a digital strategy that delivers measurable results, strengthens your brand, and drives sustainable growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={onOpenConsultation}
                className="btn-glow-plum px-8 py-4 text-sm uppercase tracking-wider font-bold flex items-center justify-center space-x-3 w-full sm:w-auto shadow-xl shadow-fuchsia-900/40"
              >
                <span>Book a Free Strategy Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => {
                  setActivePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white text-sm uppercase tracking-wider font-bold flex items-center justify-center space-x-2 w-full sm:w-auto transition-all"
              >
                <span>Talk to Our Experts</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Tilt3DCard>
      </section>

      {/* SEO FOUNDATION FOOTNOTE */}
      <section className="w-full px-4 sm:px-8 lg:px-12 2xl:px-16 text-xs text-slate-400 space-y-1 border-t border-purple-100 pt-6">
        <p><strong className="text-slate-600">SEO Title:</strong> {seoPageMeta.home.title}</p>
        <p><strong className="text-slate-600">Meta Description:</strong> {seoPageMeta.home.description}</p>
        <p><strong className="text-slate-600">Focus Keywords:</strong> {seoPageMeta.home.keywords.join(' • ')}</p>
      </section>

    </div>
  );
}
