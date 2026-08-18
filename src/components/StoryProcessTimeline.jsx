import React, { useState } from 'react';
import { Search, Compass, Zap, Activity, TrendingUp, CheckCircle2, ArrowRight, Layers, FileCheck, Target } from 'lucide-react';


const TIMELINE_STEPS = [
  {
    step: '01',
    name: 'Discovery & Market Forensics',
    shortTag: 'Deep Audit',
    icon: Search,
    timeframe: 'Week 1',
    heading: 'Unearthing Your Brand’s Hidden Growth Levers',
    story: 'Before launching a single campaign or spending a single rupee, we conduct forensic market intelligence. We analyze your customer personas, search intent gaps, competitor ad libraries, and current conversion leaks.',
    actions: [
      'Customer Buying Journey & Persona Mapping',
      'Competitor Positioning & Ad Spend Intelligence',
      'Current Web & Funnel Conversion Audit',
      'Organic Search & AI Search Visibility Analysis'
    ],
    deliverables: ['360° Growth Audit Report', 'Market Gap Matrix', 'Persona Blueprints']
  },
  {
    step: '02',
    name: 'Strategic Architecture',
    shortTag: 'The Blueprint',
    icon: Compass,
    timeframe: 'Week 2',
    heading: 'Engineering the Multi-Channel Growth Machine',
    story: 'We translate raw discovery data into a mathematically sound, creative growth architecture. We define exact channel allocations, messaging angles, audience segments, and target CAC/ROAS thresholds.',
    actions: [
      'Channel Mix & Budget Optimization Strategy',
      'Full-Funnel Content & Messaging Matrix',
      'Conversion Architecture & Landing Page UX Plan',
      'Tracking, Pixels & Server-Side Attribution Setup'
    ],
    deliverables: ['Custom Growth Masterplan', 'Media Spend Budget Allocation', 'Funnel Architecture Map']
  },
  {
    step: '03',
    name: 'Precision Launch & Creative Execution',
    shortTag: 'The Launch',
    icon: Zap,
    timeframe: 'Week 3',
    heading: 'Igniting High-Converting Creative & Performance Campaigns',
    story: 'Our design, copy, and performance engineering teams deploy high-impact visual creatives, scroll-stopping copy, high-speed landing pages, and AI-targeted search & social ad campaigns.',
    actions: [
      'High-Impact Ad Creatives & Video Production',
      'Conversion-Engineered Landing Page Deployment',
      'Meta, Google & AI Search Campaign Deployment',
      'Automated Lead Nurturing & CRM Handshake'
    ],
    deliverables: ['Live Multi-Channel Campaigns', 'High-Converting Landing Pages', 'Automated Lead Routing']
  },
  {
    step: '04',
    name: 'AI Optimization & Funnel Tuning',
    shortTag: 'Optimization',
    icon: Activity,
    timeframe: 'Continuous',
    heading: 'Relentless Data Tuning for Maximum ROAS',
    story: 'Great campaigns are not just launched—they are engineered over time. We run continuous multivariate tests on hooks, angles, landing page elements, and bid algorithms to drive CPA down and conversion volume up.',
    actions: [
      'Real-Time A/B Multivariate Creative Testing',
      'Landing Page Heatmap & Friction Point Optimization',
      'Audience Pruning & High-Intent Negative Keyword Curation',
      'Weekly Transparent Reporting & Strategy Calls'
    ],
    deliverables: ['Weekly Performance Dashboards', 'A/B Test Outcome Logs', 'Bid Algorithm Calibrations']
  },
  {
    step: '05',
    name: 'Market Expansion & Scale',
    shortTag: 'Scale & Dominate',
    icon: TrendingUp,
    timeframe: 'Scale Phase',
    heading: 'Aggressive Scale Without Compromising Unit Economics',
    story: 'Once unit economics are proven and the conversion engine is humming, we systematically scale ad budgets, expand into new geographic or audience segments, and establish undisputed market leadership.',
    actions: [
      'Vertical & Horizontal Budget Scaling',
      'New Market & Regional Expansion',
      'Omnichannel Brand Lift & Retargeting Loops',
      'Long-Term Brand Equity & Organic Dominance'
    ],
    deliverables: ['Scale Velocity Roadmap', 'Market Dominance Reports', 'Long-Term Growth Review']
  }
];

export default function StoryProcessTimeline({ onOpenConsultation }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const currentStep = TIMELINE_STEPS[activeIdx];
  const StepIcon = currentStep.icon;

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Chapter 04 Header */}
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-700 text-xs font-bold uppercase tracking-wider">
          <Layers className="w-3.5 h-3.5 text-orange-600" />
          <span>The 5-Stage Transformation Journey</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 tracking-tight">
          How We Turn Ambition Into Market Leadership
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          A transparent, battle-tested growth framework designed to eliminate guesswork and generate predictable revenue.
        </p>
      </div>

      {/* Interactive Step Selector (Horizontal on Desktop, Scrollable on Mobile) */}
      <div className="relative mb-10">
        {/* Connecting Progress Line behind nodes */}
        <div className="absolute top-1/2 left-8 right-8 -translate-y-1/2 h-1 bg-zinc-200 hidden md:block z-0" />
        <div
          className="absolute top-1/2 left-8 -translate-y-1/2 h-1 bg-gradient-to-r from-orange-500 to-amber-500 hidden md:block z-0 transition-all duration-500"
          style={{ width: `${(activeIdx / (TIMELINE_STEPS.length - 1)) * 88}%` }}
        />

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 relative z-10">
          {TIMELINE_STEPS.map((step, idx) => {
            const isActive = activeIdx === idx;
            const isCompleted = idx < activeIdx;
            const Icon = step.icon;

            return (
              <button
                key={step.step}
                onClick={() => setActiveIdx(idx)}
                className={`p-3.5 sm:p-4 rounded-2xl transition-all duration-300 flex flex-col items-center text-center cursor-pointer relative group ${
                  isActive
                    ? 'bg-white border-2 border-orange-500 shadow-xl shadow-orange-500/15 scale-105'
                    : 'bg-white/90 border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50'
                }`}
              >
                {/* Step Node */}
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm mb-2 transition-all duration-300 ${
                    isActive
                      ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30'
                      : isCompleted
                      ? 'bg-orange-100 text-orange-700'
                      : 'bg-zinc-100 text-zinc-500 group-hover:text-zinc-800'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase">
                  Stage {step.step}
                </span>
                <span className={`text-xs font-bold leading-snug mt-0.5 ${isActive ? 'text-orange-600' : 'text-zinc-800'}`}>
                  {step.shortTag}
                </span>

                {/* Subtle active glow indicator */}
                {isActive && (
                  <span className="absolute -top-1.5 right-2 px-2 py-0.5 rounded-full bg-orange-500 text-white text-[9px] font-mono font-black uppercase">
                    Active
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Stage Narrative Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-zinc-200 shadow-xl shadow-black/5 relative overflow-hidden transition-all duration-300">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-lg bg-orange-500/10 text-orange-600 text-xs font-mono font-bold">
                STAGE {currentStep.step} / 05
              </span>
              <span className="px-3 py-1 rounded-lg bg-zinc-100 text-zinc-600 text-xs font-bold">
                Timeframe: {currentStep.timeframe}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight leading-tight">
              {currentStep.heading}
            </h3>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
              {currentStep.story}
            </p>

            <div className="pt-2">
              <h4 className="text-xs font-black uppercase tracking-wider text-zinc-700 mb-3 flex items-center space-x-1.5">
                <Target className="w-4 h-4 text-orange-600" />
                <span>Execution Blueprint & Actions</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentStep.actions.map((act, i) => (
                  <div key={i} className="flex items-start space-x-2 p-2.5 rounded-xl bg-zinc-50 border border-zinc-100 text-xs text-zinc-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Artifacts & Transition Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-zinc-50 to-orange-50/30 rounded-2xl p-6 border border-zinc-200/80 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center space-x-2 text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">
                <FileCheck className="w-4 h-4 text-orange-600" />
                <span>Stage Outputs & Deliverables</span>
              </div>

              <div className="space-y-2 mb-4">
                {currentStep.deliverables.map((del, i) => (
                  <div key={i} className="p-3 bg-white rounded-xl border border-zinc-200 shadow-xs flex items-center space-x-3 text-xs font-bold text-zinc-800">
                    <div className="w-2 h-2 rounded-full bg-orange-500" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-zinc-500 leading-relaxed">
                Every milestone is documented with transparent dashboard access and weekly progress reviews.
              </p>
            </div>

            {/* Next Step / Action Button */}
            <div className="pt-2 border-t border-zinc-200/80 flex items-center justify-between">
              {activeIdx < TIMELINE_STEPS.length - 1 ? (
                <button
                  onClick={() => setActiveIdx((prev) => prev + 1)}
                  className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center space-x-1.5 transition-colors cursor-pointer"
                >
                  <span>Explore Next Stage ({TIMELINE_STEPS[activeIdx + 1].shortTag})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  onClick={onOpenConsultation}
                  className="btn-glow px-4 py-2.5 text-xs uppercase font-bold flex items-center space-x-2 cursor-pointer shadow-md shadow-orange-500/20"
                >
                  <span>Ready to Deploy? Let's Talk</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
