import React from 'react';
import { Sparkles, ArrowRight, Eye, Rocket, BookOpen, CheckCircle2, Users } from 'lucide-react';
import { aboutContent, seoPageMeta } from '../data/siteData';
import Tilt3DCard from '../components/Tilt3DCard';

export default function AboutPage({ setActivePage, onOpenConsultation }) {
  return (
    <div className="space-y-24 pt-32 pb-20 w-full px-4 sm:px-8 lg:px-12 2xl:px-16 relative">
      
      {/* Ambient Light Glow */}
      <div className="ambient-glow-top-light" />

      {/* HERO SECTION */}
      <section className="text-center space-y-6 max-w-4xl mx-auto z-10 relative">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel-light border border-purple-200 text-purple-900 text-xs font-extrabold uppercase tracking-widest shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-fuchsia-600 animate-pulse" />
          <span>{aboutContent.hero.eyebrow}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          Empowering Businesses with <span className="gradient-text-plum">Strategy, Creativity, and Innovation</span>
        </h1>

        <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
          {aboutContent.hero.content}
        </p>

        <div className="pt-4">
          <button
            onClick={onOpenConsultation}
            className="btn-glow-plum px-8 py-4 text-xs uppercase tracking-wider font-bold inline-flex items-center space-x-3 shadow-xl"
          >
            <span>{aboutContent.hero.cta}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="z-10 relative">
        <Tilt3DCard maxTilt={5}>
          <div className="glass-panel-light rounded-3xl p-8 sm:p-12 border-purple-200 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center space-x-2 text-fuchsia-700 text-xs font-bold uppercase tracking-widest bg-fuchsia-50 px-3 py-1 rounded-full border border-fuchsia-200">
                  <Users className="w-4 h-4" />
                  <span>Agency Overview</span>
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900">
                  {aboutContent.whoWeAre.heading}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {aboutContent.whoWeAre.content}
                </p>
              </div>
              <div className="lg:col-span-4 bg-gradient-to-tr from-purple-900 to-slate-900 text-white p-6 rounded-2xl border border-purple-800 text-center space-y-4 shadow-xl">
                <span className="text-xs uppercase tracking-widest text-fuchsia-300 font-extrabold block">Headquarters</span>
                <h3 className="text-2xl font-black text-white">Bangalore, India</h3>
                <p className="text-xs text-purple-200 leading-relaxed">
                  India's Technology & Innovation Capital. Partnering with ambitious companies across domestic and international markets.
                </p>
                <div className="pt-2 border-t border-white/10 text-xs text-emerald-400 font-bold">
                  500+ Campaigns Executed • 150+ Brands Served
                </div>
              </div>
            </div>
          </div>
        </Tilt3DCard>
      </section>

      {/* VISION & MISSION */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 z-10 relative">
        {/* Vision */}
        <Tilt3DCard maxTilt={8}>
          <div className="glass-panel-light rounded-3xl p-8 border-purple-100 space-y-4 h-full shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">{aboutContent.vision.heading}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{aboutContent.vision.content}</p>
          </div>
        </Tilt3DCard>

        {/* Mission */}
        <Tilt3DCard maxTilt={8}>
          <div className="glass-panel-light rounded-3xl p-8 border-purple-100 space-y-4 h-full shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-xl bg-fuchsia-100 text-fuchsia-700 flex items-center justify-center font-bold">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">{aboutContent.mission.heading}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{aboutContent.mission.content}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 pt-2 font-semibold">
              {aboutContent.mission.commitments.map((c) => (
                <li key={c} className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </Tilt3DCard>
      </section>

      {/* OUR STORY */}
      <section className="z-10 relative">
        <div className="glass-panel-light rounded-3xl p-8 sm:p-10 border-purple-200 space-y-4 shadow-sm">
          <div className="inline-flex items-center space-x-2 text-fuchsia-700 text-xs font-bold uppercase tracking-widest bg-fuchsia-50 px-3 py-1 rounded-full border border-fuchsia-200">
            <BookOpen className="w-4 h-4" />
            <span>Our Founding Vision</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900">{aboutContent.story.heading}</h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {aboutContent.story.content}
          </p>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="space-y-10 z-10 relative">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Our Core Values</h2>
          <p className="text-sm text-slate-600">The Principles That Guide Everything We Do</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutContent.coreValues.map((val) => (
            <Tilt3DCard key={val.title} maxTilt={8}>
              <div className="glass-panel-light glass-panel-light-hover rounded-2xl p-6 border-purple-100 space-y-3 h-full">
                <h3 className="text-lg font-bold text-purple-900">{val.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            </Tilt3DCard>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE HIRANMAYE DIGITAL */}
      <section className="space-y-10 z-10 relative">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Why Choose HIRANMAYE DIGITAL?</h2>
          <p className="text-sm text-slate-600">Because Growth Requires More Than Marketing</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutContent.whyChooseUs.map((item) => (
            <Tilt3DCard key={item.title} maxTilt={8}>
              <div className="glass-panel-light glass-panel-light-hover rounded-2xl p-6 border-purple-100 space-y-3 h-full">
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </Tilt3DCard>
          ))}
        </div>
      </section>

      {/* OUR PROMISE & CTA */}
      <section className="z-10 relative">
        <Tilt3DCard maxTilt={5}>
          <div className="glass-panel-light rounded-3xl p-10 sm:p-14 border-2 border-purple-300 text-center space-y-6 bg-gradient-to-tr from-purple-900 via-fuchsia-950 to-slate-900 text-white shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">{aboutContent.promise.heading}</h2>
            <p className="text-sm sm:text-base text-purple-200 max-w-3xl mx-auto leading-relaxed">
              {aboutContent.promise.content}
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="btn-glow-plum px-8 py-4 text-xs uppercase tracking-wider font-bold inline-flex items-center justify-center space-x-2 shadow-xl"
              >
                <span>Book a Free Strategy Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  setActivePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white text-xs uppercase tracking-wider font-bold inline-flex items-center justify-center space-x-2 transition-all"
              >
                <span>Contact Our Team</span>
              </button>
            </div>
          </div>
        </Tilt3DCard>
      </section>

      {/* SEO META */}
      <section className="text-xs text-slate-400 space-y-1 border-t border-purple-100 pt-6">
        <p><strong className="text-slate-600">SEO Title:</strong> {seoPageMeta.about.title}</p>
        <p><strong className="text-slate-600">Meta Description:</strong> {seoPageMeta.about.description}</p>
        <p><strong className="text-slate-600">Primary Keywords:</strong> {seoPageMeta.about.keywords.join(' • ')}</p>
      </section>

    </div>
  );
}
