import React, { useState } from 'react';
import { ArrowRight, X, CheckCircle2, Target, Search, Share2, Layout, Palette, FileText, Zap, Bot, Briefcase, Layers } from 'lucide-react';
import { servicesData } from '../data/siteData';
import Tilt3DCard from '../components/Tilt3DCard';

const iconComponents = {
  Compass: Target, Share2, Layout, Palette, FileText, Zap, Bot, Search, Target, Briefcase, Layers
};

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
          1. HERO
          ============================================ */}
      <section className="section-cinematic min-h-[60vh] px-4 sm:px-8 relative pt-32 pb-16">
        <div className="glow-top" />
        <div className="reveal text-center space-y-4 relative z-10">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-zinc-900">
            What We Do
          </h1>
          <p className="text-base text-zinc-500 max-w-md mx-auto">
            11 services. One goal — your growth.
          </p>
        </div>
      </section>

      {/* ============================================
          2. SERVICES GRID
          ============================================ */}
      <section className="py-8 sm:py-12 px-4 sm:px-8 lg:px-16">
        <div className="stagger-children grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {servicesData.map((srv, idx) => {
            const IconComp = iconMap[srv.id] || Target;

            return (
              <Tilt3DCard key={srv.id} maxTilt={8}>
                <div
                  onClick={() => setExpandedService(srv)}
                  className="glass-dark glass-dark-hover rounded-2xl p-5 sm:p-6 border-zinc-200 cursor-pointer group h-full flex flex-col justify-between min-h-[180px]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-black/[0.02] border border-zinc-100 text-zinc-500 flex items-center justify-center group-hover:bg-orange-500/10 group-hover:text-orange-600 group-hover:border-orange-500/20 transition-all">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] text-zinc-700 font-mono">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-zinc-900 group-hover:text-orange-600 transition-colors leading-tight">
                      {srv.title}
                    </h3>
                  </div>

                  <div className="flex items-center space-x-1 text-[10px] text-zinc-600 mt-3 group-hover:text-orange-600/70 transition-colors">
                    <span>Details</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Tilt3DCard>
            );
          })}
        </div>
      </section>

      {/* ============================================
          3. SERVICE DETAIL OVERLAY
          ============================================ */}
      {expandedService && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl max-h-[85vh] glass-dark rounded-2xl p-6 sm:p-8 border-zinc-200 shadow-2xl overflow-y-auto">

            {/* Close */}
            <button
              onClick={() => setExpandedService(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/[0.06] text-zinc-400 hover:text-zinc-900 border border-zinc-200 cursor-pointer z-10"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-2 pr-10">
                <div className="w-12 h-12 rounded-xl bg-orange-500/15 text-orange-600 flex items-center justify-center mb-3">
                  {(() => { const IC = iconMap[expandedService.id] || Target; return <IC className="w-6 h-6" />; })()}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">{expandedService.title}</h2>
                <p className="text-sm text-zinc-400">{expandedService.subHeading}</p>
              </div>

              {/* Description */}
              <p className="text-sm text-zinc-500 leading-relaxed">
                {expandedService.fullDesc}
              </p>

              {/* Pillars (SEO/AEO/GEO) */}
              {expandedService.pillars && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {expandedService.pillars.map((pil) => (
                    <div key={pil.name} className="p-4 rounded-xl bg-black/[0.02] border border-zinc-150 space-y-1">
                      <h4 className="text-xs font-bold text-orange-600">{pil.name}</h4>
                      <p className="text-[10px] text-zinc-500 leading-relaxed">{pil.desc}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Offers */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">What We Offer</h4>
                <div className="grid grid-cols-2 gap-2">
                  {expandedService.offers.map((offer) => (
                    <div key={offer} className="flex items-center space-x-2 text-xs text-zinc-550">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-650 shrink-0" />
                      <span>{offer}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {(expandedService.platforms || expandedService.features || expandedService.idealFor || []).flat().slice(0, 6).map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-[10px] text-zinc-500 font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={() => { setExpandedService(null); onOpenConsultation(); }}
                className="w-full btn-glow py-3 text-xs uppercase tracking-wider font-bold flex items-center justify-center space-x-2"
              >
                <span>{expandedService.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================
          4. BOTTOM CTA
          ============================================ */}
      <section className="section-cinematic px-4 sm:px-8">
        <div className="reveal text-center space-y-6">
          <h2 className="text-4xl sm:text-6xl font-black text-zinc-900 tracking-tight">
            Strategy. AI. Results.
          </h2>
          <button
            onClick={onOpenConsultation}
            className="btn-glow px-8 py-4 text-sm uppercase tracking-wider font-bold inline-flex items-center space-x-2"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
}
