import React from 'react';
import { ArrowRight, Eye, Rocket, Target, Shield, Sparkles, Award, Users, RefreshCw, Briefcase, BarChart3, Bot, Handshake, CheckCircle2 } from 'lucide-react';
import { aboutContent } from '../data/siteData';
import Tilt3DCard from '../components/Tilt3DCard';

const valueIcons = {
  'Strategic Thinking': Target,
  'Integrity': Shield,
  'Innovation': Sparkles,
  'Excellence': Award,
  'Collaboration': Users,
  'Continuous Improvement': RefreshCw
};

const whyChooseIcons = {
  'Business-First Approach': Briefcase,
  'Customized Strategies': Target,
  'Data-Driven Decisions': BarChart3,
  'AI-Powered Innovation': Bot,
  'Transparent Partnership': Handshake,
  'Long-Term Growth': Rocket
};

export default function AboutPage({ setActivePage, onOpenConsultation }) {
  return (
    <div className="relative w-full">

      {/* ============================================
          1. HERO SECTION
          ============================================ */}
      <section className="section-cinematic min-h-[60vh] px-4 sm:px-8 relative pt-32 pb-16">
        <div className="glow-top" />
        <div className="reveal text-center space-y-6 max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-700 text-xs font-bold uppercase tracking-wider">
            <span>{aboutContent.hero.eyebrow}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-zinc-950 leading-[1.08] font-heading">
            Empowering Businesses with Strategy, Creativity, and{' '}
            <span className="gradient-text-hero">Digital Innovation</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            {aboutContent.hero.content}
          </p>

          <div className="pt-2">
            <button
              onClick={onOpenConsultation}
              className="btn-glow px-8 py-4 text-xs uppercase tracking-wider font-bold inline-flex items-center space-x-2.5 shadow-xl shadow-orange-500/20"
            >
              <span>{aboutContent.hero.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ============================================
          2. WHO WE ARE
          ============================================ */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 border-t border-zinc-100 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-3 reveal">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-700 text-xs font-bold uppercase tracking-wider">
                <span>Who We Are</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight leading-tight">
                {aboutContent.whoWeAre.heading}
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-zinc-600 leading-relaxed reveal">
              <p>
                <strong className="text-zinc-900">HIRANMAYE DIGITAL</strong> is a premium digital marketing agency headquartered in Bangalore, helping businesses transform their digital presence into a powerful engine for growth.
              </p>
              <p>
                We specialize in combining strategic thinking, creative excellence, advanced technology, and performance-driven marketing to help businesses connect with the right audience and achieve measurable outcomes.
              </p>
              <p>
                Our approach goes beyond delivering marketing services. We work as an extension of your team, understanding your business objectives, market dynamics, and customer journey to create customized strategies that drive long-term success.
              </p>
              <p>
                Whether you're launching a new brand, expanding into new markets, or scaling your existing business, we provide the expertise and solutions to help you grow with confidence.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================
          3. VISION & MISSION
          ============================================ */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-16 bg-zinc-50/60 border-y border-zinc-200/70">
        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          <Tilt3DCard maxTilt={6}>
            <div className="glass-dark glass-dark-hover rounded-2xl p-8 sm:p-10 border-zinc-200/80 h-full flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-600 flex items-center justify-center">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-zinc-900 tracking-tight">
                  Our Vision
                </h3>
                <h4 className="text-sm font-bold text-orange-600 uppercase tracking-wider">
                  {aboutContent.vision.heading}
                </h4>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {aboutContent.vision.content}
                </p>
              </div>
            </div>
          </Tilt3DCard>

          <Tilt3DCard maxTilt={6}>
            <div className="glass-dark glass-dark-hover rounded-2xl p-8 sm:p-10 border-zinc-200/80 h-full flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-600 flex items-center justify-center">
                  <Rocket className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-zinc-900 tracking-tight">
                  Our Mission
                </h3>
                <h4 className="text-sm font-bold text-orange-600 uppercase tracking-wider">
                  {aboutContent.mission.heading}
                </h4>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {aboutContent.mission.content}
                </p>
              </div>
            </div>
          </Tilt3DCard>

        </div>
      </section>

      {/* ============================================
          4. OUR STORY
          ============================================ */}
      <section className="py-20 sm:py-24 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6 reveal">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-700 text-xs font-bold uppercase tracking-wider">
            <span>Our Story</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 tracking-tight">
            {aboutContent.story.heading}
          </h2>

          <div className="space-y-4 text-left sm:text-center text-sm sm:text-base text-zinc-600 leading-relaxed max-w-3xl mx-auto pt-2">
            <p>
              <strong className="text-zinc-900">HIRANMAYE DIGITAL</strong> was founded with a simple yet powerful vision: to bridge the gap between marketing activities and real business outcomes.
            </p>
            <p>
              Many businesses invest heavily in digital marketing without seeing meaningful returns because they lack a clear strategy. We recognized the need for a more consultative, transparent, and results-oriented approach.
            </p>
            <p>
              From this vision, HIRANMAYE DIGITAL was established as a business growth partner that combines strategic planning, creative execution, advanced analytics, AI-powered marketing, and continuous optimization to deliver measurable success.
            </p>
            <p>
              Today, we continue to help businesses navigate the ever-changing digital landscape with confidence, clarity, and purpose.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          5. OUR CORE VALUES
          ============================================ */}
      <section className="py-20 sm:py-24 px-4 sm:px-8 lg:px-16 bg-zinc-50/60 border-y border-zinc-200/70">
        <div className="max-w-6xl mx-auto">
          
          <div className="reveal text-center space-y-3 max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-700 text-xs font-bold uppercase tracking-wider">
              <span>Our Core Values</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 tracking-tight">
              The Principles That Guide Everything We Do
            </h2>
          </div>

          <div className="stagger-children grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutContent.coreValues.map((val) => {
              const IconComp = valueIcons[val.title] || Target;
              return (
                <Tilt3DCard key={val.title} maxTilt={6}>
                  <div className="glass-dark glass-dark-hover rounded-2xl p-7 border-zinc-200/80 h-full flex flex-col justify-between group shadow-sm">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-600 flex items-center justify-center mb-5 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-zinc-900 mb-2 group-hover:text-orange-600 transition-colors">
                        {val.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                        {val.desc}
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
          6. WHY CHOOSE HIRANMAYE DIGITAL?
          ============================================ */}
      <section className="py-20 sm:py-24 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          
          <div className="reveal text-center space-y-3 max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-700 text-xs font-bold uppercase tracking-wider">
              <span>Why Choose HIRANMAYE DIGITAL?</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 tracking-tight">
              Because Growth Requires More Than Marketing
            </h2>
          </div>

          <div className="stagger-children grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutContent.whyChooseUs.map((card) => {
              const IconComp = whyChooseIcons[card.title] || Briefcase;
              return (
                <Tilt3DCard key={card.title} maxTilt={6}>
                  <div className="glass-dark glass-dark-hover rounded-2xl p-7 border-zinc-200/80 h-full flex flex-col justify-between group shadow-sm">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-600 flex items-center justify-center mb-5 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-zinc-900 mb-2 group-hover:text-orange-600 transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                        {card.desc}
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
          7. CALL TO ACTION
          ============================================ */}
      <section className="section-cinematic px-4 sm:px-8 relative pb-20">
        <div className="glow-accent left-1/2 -translate-x-1/2 top-0" />

        <div className="reveal text-center space-y-6 max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-zinc-900 tracking-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 max-w-xl mx-auto leading-relaxed">
            Let's build a digital strategy that strengthens your brand, attracts the right audience, and delivers measurable business growth.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="btn-glow px-8 py-4 text-xs uppercase tracking-wider font-bold inline-flex items-center space-x-3 shadow-xl shadow-orange-500/20"
            >
              <span>Book a Free Strategy Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActivePage('contact')}
              className="btn-ghost px-7 py-4 text-xs uppercase tracking-wider font-bold inline-flex items-center space-x-2"
            >
              <span>Contact Our Team</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
