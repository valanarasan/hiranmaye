import React, { useState } from 'react';
import { ArrowRight, X, CheckCircle2, Target, Search, Share2, Layout, Palette, FileText, Zap, Bot, Briefcase, Layers, Sparkles } from 'lucide-react';
import { servicesData } from '../data/siteData';
import Tilt3DCard from '../components/Tilt3DCard';

const iconMap = {
  'digital-strategy': Target,
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

export default function ServicesPage({ setActivePage, onOpenConsultation }) {
  const [expandedService, setExpandedService] = useState(null);

  return (
    <div className="relative w-full">

      {/* ============================================
          1. HERO SECTION
          ============================================ */}
      <section className="section-cinematic min-h-[50vh] px-4 sm:px-8 relative pt-28 sm:pt-32 pb-14 sm:pb-16">
        <div className="glow-top" />
        <div className="reveal text-center space-y-5 max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-700 text-xs font-bold uppercase tracking-wider">
            <span>Our Services</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight text-zinc-950 leading-[1.08] font-heading">
            Strategic Digital Solutions That Drive{' '}
            <span className="gradient-text-hero">Measurable Business Growth</span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-zinc-600 max-w-3xl mx-auto leading-relaxed">
            At <strong className="text-zinc-900">HIRANMAYE DIGITAL</strong>, we don't believe in one-size-fits-all marketing. Every business is unique, and so are its challenges. Our services are designed to help organizations strengthen their digital presence, generate qualified leads, build lasting customer relationships, and achieve sustainable growth through strategy, creativity, technology, and data-driven execution.
          </p>
        </div>
      </section>

      {/* ============================================
          2. SERVICES GRID
          ============================================ */}
      <section className="py-10 sm:py-20 px-3.5 sm:px-8 lg:px-16 border-t border-zinc-100 bg-zinc-50/50">
        <div className="stagger-children grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {servicesData.map((srv, idx) => {
            const IconComp = iconMap[srv.id] || Target;

            return (
              <Tilt3DCard key={srv.id} maxTilt={6}>
                <div
                  onClick={() => setExpandedService(srv)}
                  className="glass-dark glass-dark-hover rounded-2xl p-6 sm:p-7 border-zinc-200/80 cursor-pointer group h-full flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4 sm:mb-5">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-600 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                        <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-xs text-zinc-400 font-mono font-bold">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-zinc-900 group-hover:text-orange-600 transition-colors leading-tight mb-1.5">
                      {srv.title}
                    </h3>

                    <h4 className="text-xs font-semibold text-orange-600 uppercase tracking-wider mb-2.5">
                      {srv.subHeading}
                    </h4>

                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4">
                      {srv.shortDesc || srv.fullDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-orange-600 group-hover:text-orange-700 transition-colors flex items-center space-x-1.5">
                      <span>{srv.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Tilt3DCard>
            );
          })}
        </div>
      </section>

      {/* ============================================
          3. SERVICE DETAIL MODAL / POPUP
          ============================================ */}
      {expandedService && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl max-h-[90vh] glass-dark rounded-2xl p-5 sm:p-8 border-zinc-200 shadow-2xl overflow-y-auto">

            {/* Close */}
            <button
              onClick={() => setExpandedService(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/[0.03] text-zinc-500 hover:text-zinc-900 border border-zinc-200 cursor-pointer z-10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-2 pr-8">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-700 text-xs font-bold border border-orange-500/20">
                  <span>Service Overview</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-zinc-900">
                  {expandedService.title}
                </h2>
                <p className="text-sm font-semibold text-orange-600">
                  {expandedService.subHeading}
                </p>
              </div>

              {/* Full Description */}
              <p className="text-sm text-zinc-700 leading-relaxed">
                {expandedService.fullDesc}
              </p>

              {/* SEO | AEO | GEO Pillars */}
              {expandedService.pillars && (
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900">Search Framework</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {expandedService.pillars.map((pillar) => (
                      <div key={pillar.name} className="p-3.5 rounded-xl bg-orange-500/5 border border-orange-500/15">
                        <h5 className="text-xs font-bold text-orange-800 mb-1">{pillar.name}</h5>
                        <p className="text-xs text-zinc-600 leading-relaxed">{pillar.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Deliverables */}
              {expandedService.offers && (
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900">What We Deliver</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {expandedService.offers.map((offer) => (
                      <div key={offer} className="flex items-center space-x-2 text-xs text-zinc-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                        <span>{offer}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Why It Matters */}
              {expandedService.whyItMatters && (
                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                  <h5 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Why It Matters</h5>
                  <p className="text-xs text-zinc-600 leading-relaxed">{expandedService.whyItMatters}</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={() => setExpandedService(null)}
                  className="text-xs font-semibold text-zinc-500 hover:text-zinc-900 cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setExpandedService(null);
                    onOpenConsultation();
                  }}
                  className="btn-glow w-full sm:w-auto px-6 py-3 text-xs uppercase tracking-wider font-bold flex items-center justify-center space-x-2"
                >
                  <span>{expandedService.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ============================================
          4. CTA BOTTOM
          ============================================ */}
      <section className="section-cinematic px-4 sm:px-8 relative pb-20">
        <div className="glow-accent left-1/2 -translate-x-1/2 top-0" />

        <div className="reveal text-center space-y-6 max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl sm:text-6xl font-black text-zinc-900 tracking-tight">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-base text-zinc-600 max-w-xl mx-auto leading-relaxed">
            Let's design a customized digital marketing roadmap that delivers measurable ROI for your business.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenConsultation}
              className="btn-glow px-8 py-4 text-xs uppercase tracking-wider font-bold inline-flex items-center space-x-3 shadow-xl shadow-orange-500/20"
            >
              <span>Book a Free Strategy Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
