import React, { useState } from 'react';
import { TrendingUp, Building2, Stethoscope, Factory, Star } from 'lucide-react';


const STORIES = [
  {
    id: 'real-estate',
    client: 'Leading South Bangalore Luxury Developer',
    industry: 'Real Estate',
    icon: Building2,
    tagline: 'From Stagnant Inquiries to ₹38 Cr Inventory Sold in 90 Days',
    metrics: [
      { label: 'Qualified Site Visits', value: '+340%' },
      { label: 'Cost Per Booking Lead', value: '-46%' },
      { label: 'Overall Campaign ROAS', value: '5.8X' }
    ],
    challenge: 'Struggled with high Facebook/Google ad costs that produced tire-kickers and broker spam instead of verified high-net-worth buyers for luxury villas.',
    strategy: 'Deployed hyper-targeted Meta video ad funnels with income-level qualification, combined with local Geo-targeted Google Search for high-intent property seekers and instant WhatsApp CRM routing.',
    quote: 'HIRANMAYE DIGITAL turned our digital marketing from a cost center into our single most profitable sales acquisition channel.'
  },
  {
    id: 'healthcare',
    client: 'Multi-Specialty Supercare Hospital Group',
    industry: 'Healthcare',
    icon: Stethoscope,
    tagline: 'Dominating Local AI Search & Doubling Specialist OPD Consultations',
    metrics: [
      { label: 'Doctor Appointments', value: '+210%' },
      { label: 'Local GEO Map Views', value: '+450%' },
      { label: 'Cost Per Patient Acq.', value: '-38%' }
    ],
    challenge: 'Low organic visibility on Google Maps and ChatGPT/Perplexity AI search answers, losing high-value surgical consultations to competing hospitals.',
    strategy: 'Engineered complete AEO (Answer Engine Optimization) & GEO infrastructure, schema-structured doctor profiles, and high-trust condition-specific video reels.',
    quote: 'We now rank #1 across South Bangalore for key surgical specialties both on Google and modern AI search platforms.'
  },
  {
    id: 'manufacturing',
    client: 'Precision CNC & Industrial Automation Manufacturer',
    industry: 'B2B & Manufacturing',
    icon: Factory,
    tagline: 'Unlocking ₹6.2 Cr in Verified Export & OEM Contract RFQs',
    metrics: [
      { label: 'Verified Global RFQs', value: '45+ / mo' },
      { label: 'Pipeline Contract Value', value: '₹6.2 Cr' },
      { label: 'Inbound Sales Cycle', value: '-35 Days' }
    ],
    challenge: 'Relied purely on trade expos and word-of-mouth with zero digital pipeline, missing major procurement managers searching online.',
    strategy: 'Architected high-speed technical spec catalog website, high-intent Google B2B Search Ads, and targeted LinkedIn executive account-based marketing.',
    quote: 'For the first time in our 14-year history, tier-1 global procurement heads are finding and contacting us directly online.'
  }
];

export default function StoryTestimonials() {
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const story = STORIES[activeStoryIdx];
  const IndustryIcon = story.icon;

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="text-center space-y-3 mb-8">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-700 text-xs font-bold uppercase tracking-wider">
          <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
          <span>Transformation Chronicles</span>
        </div>
        <h3 className="text-2xl sm:text-4xl font-black text-zinc-900 tracking-tight">
          Real Brands. Tangible Breakthroughs.
        </h3>
        <p className="text-sm text-zinc-600 max-w-lg mx-auto">
          Explore how ambitious businesses partnered with Hiranmaye Digital to break through growth ceilings.
        </p>
      </div>

      {/* Story Selector Pills */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
        {STORIES.map((s, idx) => {
          const isActive = activeStoryIdx === idx;
          const Icon = s.icon;
          return (
            <button
              key={s.id}
              onClick={() => setActiveStoryIdx(idx)}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition-all cursor-pointer ${
                isActive
                  ? 'bg-zinc-900 text-white shadow-lg shadow-black/10 scale-105'
                  : 'bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-orange-400' : 'text-zinc-400'}`} />
              <span>{s.industry}</span>
            </button>
          );
        })}
      </div>

      {/* Main Story Narrative Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-zinc-200 shadow-xl shadow-black/5 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center space-x-2 text-xs font-mono font-bold text-orange-600 uppercase">
              <span>{story.industry} Case Study</span>
              <span>•</span>
              <span className="text-zinc-400">{story.client}</span>
            </div>

            <h4 className="text-xl sm:text-2xl font-black text-zinc-900 leading-snug">
              {story.tagline}
            </h4>

            {/* Before vs After story blocks */}
            <div className="space-y-3 pt-1">
              <div className="p-3.5 rounded-2xl bg-rose-50/60 border border-rose-100 text-xs">
                <span className="font-bold text-rose-700 block mb-0.5">The Bottleneck:</span>
                <p className="text-zinc-700 leading-relaxed">{story.challenge}</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-orange-50/60 border border-orange-200/80 text-xs">
                <span className="font-bold text-orange-800 block mb-0.5">The Hiranmaye Growth Architecture:</span>
                <p className="text-zinc-700 leading-relaxed">{story.strategy}</p>
              </div>
            </div>

            <blockquote className="italic text-xs sm:text-sm text-zinc-600 border-l-2 border-orange-500 pl-4 py-1">
              "{story.quote}"
            </blockquote>
          </div>

          {/* Right Metrics Spotlight */}
          <div className="lg:col-span-5 bg-gradient-to-br from-zinc-900 to-black text-white rounded-2xl p-6 sm:p-7 border border-zinc-800 space-y-4">
            <div className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider flex items-center justify-between">
              <span>Verified Impact Metrics</span>
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </div>

            <div className="space-y-3">
              {story.metrics.map((m, i) => (
                <div key={i} className="p-3.5 bg-zinc-800/80 rounded-xl border border-zinc-700/60 flex items-center justify-between">
                  <span className="text-xs text-zinc-300 font-medium">{m.label}</span>
                  <span className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 text-center">
              <span className="text-[10px] text-zinc-400 font-mono">
                Average campaign duration to milestone: 60-90 days
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
