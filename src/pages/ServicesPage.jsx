import React, { useState } from 'react';
import { 
  Sparkles, ArrowRight, CheckCircle2, Compass, Share2, Layout, 
  Palette, FileText, Zap, Bot, Search, Target, Briefcase, Layers
} from 'lucide-react';
import { servicesData, seoPageMeta } from '../data/siteData';
import Tilt3DCard from '../components/Tilt3DCard';

const iconComponents = {
  Compass, Share2, Layout, Palette, FileText, Zap, Bot, Search, Target, Briefcase, Layers
};

export default function ServicesPage({ onOpenConsultation }) {
  const [selectedService, setSelectedService] = useState('digital-strategy');

  const scrollToService = (id) => {
    setSelectedService(id);
    const elem = document.getElementById(`service-${id}`);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="space-y-24 pt-32 pb-20 w-full px-4 sm:px-8 lg:px-12 2xl:px-16 relative">
      
      {/* Ambient Light Glow */}
      <div className="ambient-glow-top-light" />

      {/* PAGE INTRO */}
      <section className="text-center space-y-6 max-w-4xl mx-auto z-10 relative">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel-light border border-purple-200 text-purple-900 text-xs font-extrabold uppercase tracking-widest shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-fuchsia-600 animate-pulse" />
          <span>Full-Spectrum Digital Growth Services</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          Strategic Digital Solutions That Drive <span className="gradient-text-plum">Measurable Business Growth</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          At HIRANMAYE DIGITAL, we don't believe in one-size-fits-all marketing. Every business is unique, and so are its challenges. Our services are designed to help organizations strengthen their digital presence, generate qualified leads, build lasting customer relationships, and achieve sustainable growth through strategy, creativity, technology, and data-driven execution.
        </p>
      </section>

      {/* STICKY SERVICE JUMP NAVIGATOR */}
      <div className="sticky top-20 z-30 bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-purple-100 shadow-md overflow-x-auto scrollbar-none">
        <div className="flex items-center space-x-2 min-w-max">
          {servicesData.map((srv) => (
            <button
              key={srv.id}
              onClick={() => scrollToService(srv.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedService === srv.id
                  ? 'bg-gradient-to-r from-purple-800 to-fuchsia-600 text-white shadow-md'
                  : 'bg-slate-50 text-slate-600 hover:bg-purple-50 hover:text-purple-900'
              }`}
            >
              {srv.title}
            </button>
          ))}
        </div>
      </div>

      {/* 11 DETAILED SERVICE SECTIONS */}
      <section className="space-y-16 z-10 relative">
        {servicesData.map((srv, idx) => {
          const IconComp = iconComponents[srv.icon] || Compass;
          return (
            <Tilt3DCard key={srv.id} maxTilt={4}>
              <div
                id={`service-${srv.id}`}
                className="glass-panel-light rounded-3xl p-8 sm:p-12 border-purple-200 shadow-xl space-y-8 scroll-mt-32"
              >
                {/* Section Header */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-purple-100 pb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-700 to-fuchsia-500 text-white flex items-center justify-center shadow-lg shadow-fuchsia-500/20 shrink-0">
                      <IconComp className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-widest text-fuchsia-700 font-extrabold">
                        Service 0{idx + 1} of 11
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-black text-slate-900">{srv.title}</h2>
                    </div>
                  </div>

                  <button
                    onClick={onOpenConsultation}
                    className="btn-glow-plum px-6 py-3 text-xs uppercase tracking-wider font-bold flex items-center space-x-2 shrink-0 shadow-md"
                  >
                    <span>{srv.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Sub-heading & Description */}
                <div className="space-y-3">
                  <h3 className="text-xl font-extrabold text-purple-900">{srv.subHeading}</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{srv.fullDesc}</p>
                </div>

                {/* SPECIAL FEATURE HIGHLIGHT: SEO | AEO | GEO PILLARS */}
                {srv.pillars && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    {srv.pillars.map((pil) => (
                      <div key={pil.name} className="p-5 rounded-2xl bg-purple-50/70 border border-purple-100 space-y-2">
                        <h4 className="text-base font-extrabold text-purple-900">{pil.name}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{pil.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* OFFERS CHECKLIST & SPECIFIC METRICS */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-2">
                  <div className="md:col-span-7 space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 border-l-2 border-fuchsia-600 pl-3">
                      What We Offer
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800 font-medium">
                      {srv.offers.map((offer) => (
                        <div key={offer} className="flex items-center space-x-2 p-2.5 rounded-xl bg-white border border-purple-100 shadow-2xs">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{offer}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-5 space-y-4">
                    {/* Ideal For */}
                    {srv.idealFor && (
                      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
                        <span className="text-xs uppercase tracking-wider text-slate-500 font-extrabold block">Ideal For</span>
                        <div className="flex flex-wrap gap-2">
                          {srv.idealFor.map((item) => (
                            <span key={item} className="px-3 py-1 rounded-full bg-white text-xs font-bold text-slate-700 border border-slate-200">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Platforms */}
                    {srv.platforms && (
                      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
                        <span className="text-xs uppercase tracking-wider text-slate-500 font-extrabold block">Platforms Managed</span>
                        <div className="flex flex-wrap gap-2">
                          {srv.platforms.map((p) => (
                            <span key={p} className="px-3 py-1 rounded-full bg-purple-100 text-xs text-purple-900 font-extrabold border border-purple-200">
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Features */}
                    {srv.features && (
                      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
                        <span className="text-xs uppercase tracking-wider text-slate-500 font-extrabold block">Core Features</span>
                        <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 font-semibold">
                          {srv.features.map((f) => (
                            <span key={f}>• {f}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Benefits */}
                    {srv.benefits && (
                      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
                        <span className="text-xs uppercase tracking-wider text-slate-500 font-extrabold block">Key Benefits</span>
                        <div className="grid grid-cols-2 gap-2 text-xs text-emerald-700 font-bold">
                          {srv.benefits.map((b) => (
                            <span key={b}>✓ {b}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Why It Matters / Outcomes */}
                    {(srv.whyItMatters || srv.outcomes) && (
                      <div className="bg-purple-50 p-5 rounded-2xl border border-purple-200 space-y-2 text-xs text-purple-950">
                        <span className="text-xs uppercase tracking-wider text-fuchsia-700 font-extrabold block">Strategic Business Impact</span>
                        <p className="leading-relaxed font-medium">{srv.whyItMatters || srv.outcomes?.join(' • ')}</p>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </Tilt3DCard>
          );
        })}
      </section>

      {/* CLOSING SECTION */}
      <section className="z-10 relative">
        <Tilt3DCard maxTilt={5}>
          <div className="glass-panel-light rounded-3xl p-10 sm:p-14 border-2 border-purple-300 text-center space-y-6 bg-gradient-to-tr from-purple-900 via-fuchsia-950 to-slate-900 text-white shadow-2xl">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Strategy. Creativity. Technology. Results.
            </h2>
            <p className="text-sm sm:text-base text-purple-200 max-w-3xl mx-auto leading-relaxed">
              At HIRANMAYE DIGITAL, we combine strategic thinking, creative excellence, AI-powered innovation, and performance-driven execution to deliver digital solutions that create real business impact. Every project is guided by data, tailored to your goals, and focused on generating measurable results.
            </p>
            <div className="pt-4">
              <button
                onClick={onOpenConsultation}
                className="btn-glow-plum px-8 py-4 text-xs uppercase tracking-wider font-bold inline-flex items-center space-x-2 shadow-xl"
              >
                <span>Book a Free Strategy Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Tilt3DCard>
      </section>

      {/* SEO META */}
      <section className="text-xs text-slate-400 space-y-1 border-t border-purple-100 pt-6">
        <p><strong className="text-slate-600">SEO Title:</strong> {seoPageMeta.services.title}</p>
        <p><strong className="text-slate-600">Meta Description:</strong> {seoPageMeta.services.description}</p>
        <p><strong className="text-slate-600">Primary Keywords:</strong> {seoPageMeta.services.keywords.join(' • ')}</p>
      </section>

    </div>
  );
}
