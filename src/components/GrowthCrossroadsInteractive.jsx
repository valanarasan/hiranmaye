import React, { useState } from 'react';
import { AlertCircle, ArrowRight, Zap, Compass } from 'lucide-react';


export default function GrowthCrossroadsInteractive({ onOpenConsultation }) {
  const [activeTab, setActiveTab] = useState('hiranmaye'); // 'traditional' or 'hiranmaye'

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Narrative Header */}
      <div className="text-center space-y-3 mb-8">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-700 text-xs font-bold uppercase tracking-wider">
          <Compass className="w-3.5 h-3.5 text-orange-600 animate-spin" style={{ animationDuration: '8s' }} />
          <span>The Growth Crossroads</span>
        </div>
        <h3 className="text-2xl sm:text-4xl font-black text-zinc-900 tracking-tight">
          Two Ways to Scale. Only One Creates Market Dominance.
        </h3>
        <p className="text-sm text-zinc-600 max-w-xl mx-auto">
          Compare the typical fragmented agency cycle with Hiranmaye's precision storytelling & AI growth architecture.
        </p>
      </div>

      {/* Interactive Switcher Bar */}
      <div className="flex justify-center mb-8">
        <div className="bg-zinc-100/90 p-1.5 rounded-2xl border border-zinc-200 inline-flex shadow-inner">
          <button
            onClick={() => setActiveTab('traditional')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center space-x-2 cursor-pointer ${
              activeTab === 'traditional'
                ? 'bg-white text-zinc-900 shadow-md shadow-black/5 scale-[1.02]'
                : 'text-zinc-500 hover:text-zinc-800'
            }`}
          >
            <AlertCircle className="w-4 h-4 text-rose-500" />
            <span>The Fragmented Agency Way</span>
          </button>
          
          <button
            onClick={() => setActiveTab('hiranmaye')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center space-x-2 cursor-pointer ${
              activeTab === 'hiranmaye'
                ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25 scale-[1.02]'
                : 'text-zinc-500 hover:text-zinc-800'
            }`}
          >
            <Zap className="w-4 h-4 text-amber-200 fill-amber-200" />
            <span>The Hiranmaye Growth Engine</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="relative">
        {activeTab === 'traditional' ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 animate-fade-in">
            {/* Left Narrative Card */}
            <div className="md:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-rose-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center space-x-2 text-rose-600 text-xs font-extrabold uppercase tracking-wider mb-3">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                <span>The Unpredictable Cycle</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-zinc-900 mb-3">
                High Ad Spend, Vanishing ROI & Disconnected Channels
              </h4>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                Most businesses get stuck in a frustrating loop of running random ad campaigns, burning budget on low-intent clicks, and wondering why website traffic never turns into signed deals or closed revenue.
              </p>

              <div className="space-y-3">
                {[
                  { text: 'Vanity impressions with zero CRM lead attribution', sub: 'High CPCs with poor qualification' },
                  { text: 'Siloed SEO, Social & Ads working against each other', sub: 'No unified growth story or messaging' },
                  { text: 'Generic copy that fails to build real brand equity', sub: 'Easily commoditized by competitors' },
                  { text: 'Manual, slow testing cycles wasting months of budget', sub: 'Zero AI automation or predictive insights' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3 rounded-xl bg-rose-50/50 border border-rose-100/80">
                    <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 font-black text-xs">
                      ✕
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-zinc-800">{item.text}</p>
                      <p className="text-[11px] text-zinc-500">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Metrics Panel */}
            <div className="md:col-span-5 flex flex-col justify-between space-y-4">
              <div className="bg-zinc-900 text-white rounded-3xl p-6 border border-zinc-800 shadow-md relative overflow-hidden">
                <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-2">
                  Average Industry Outcome
                </div>
                <div className="flex items-baseline space-x-3 mb-2">
                  <span className="text-4xl font-black text-rose-400">1.2x – 1.8x</span>
                  <span className="text-xs text-zinc-400 font-semibold">Average ROAS</span>
                </div>
                <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden mb-4">
                  <div className="bg-rose-500 h-full w-[35%]" />
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Budget leaking through untargeted audiences, unoptimized landing pages, and weak conversion tracking.
                </p>
              </div>

              <div className="bg-zinc-50 rounded-3xl p-6 border border-zinc-200 flex flex-col justify-between flex-grow">
                <div>
                  <h5 className="text-sm font-black text-zinc-800 mb-1">Break Free From the Cycle</h5>
                  <p className="text-xs text-zinc-600 mb-4">
                    Upgrade to a unified marketing system built on strategy, AI analytics, and high-impact storytelling.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('hiranmaye')}
                  className="w-full py-3 rounded-xl bg-zinc-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>See The Hiranmaye Engine</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 animate-fade-in">
            {/* Left Narrative Card */}
            <div className="md:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-orange-500/30 shadow-xl shadow-orange-500/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center space-x-2 text-orange-600 text-xs font-extrabold uppercase tracking-wider mb-3">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                <span>The Engineered Breakthrough</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-zinc-900 mb-3">
                Data-Driven Precision, AI Domination & Scalable Revenue
              </h4>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                We synchronize your brand story across high-intent search (SEO/AEO/GEO), automated paid performance funnels, and high-converting creative assets to build an unstoppable customer pipeline.
              </p>

              <div className="space-y-3">
                {[
                  { text: 'Full-Funnel Intent Capture (Meta, Google, AI Search)', sub: 'Only attracting qualified decision-makers' },
                  { text: '360° Omnichannel Alignment & Brand Positioning', sub: 'Every touchpoint reinforces your market leadership' },
                  { text: 'AI-Powered Continuous Conversion Optimization', sub: 'Real-time multivariate adjustments for lower CPA' },
                  { text: 'Transparent Pipeline Attribution & ROI Reporting', sub: 'Live dashboard visibility into every rupee invested' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80">
                    <div className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center shrink-0 mt-0.5 font-black text-xs shadow-sm shadow-orange-500/30">
                      ✓
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-zinc-900">{item.text}</p>
                      <p className="text-[11px] text-orange-950/70 font-medium">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Metrics Panel */}
            <div className="md:col-span-5 flex flex-col justify-between space-y-4">
              <div className="bg-gradient-to-br from-zinc-950 to-zinc-900 text-white rounded-3xl p-6 border border-orange-500/30 shadow-xl shadow-orange-500/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/20 rounded-full blur-xl pointer-events-none" />
                <div className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span>Hiranmaye Standard</span>
                  <span className="px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-300 text-[10px]">Verified</span>
                </div>
                <div className="flex items-baseline space-x-3 mb-2">
                  <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-200">
                    3.8x – 5.4x
                  </span>
                  <span className="text-xs text-orange-200 font-semibold">Target ROAS</span>
                </div>
                <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden mb-4">
                  <div className="bg-gradient-to-r from-orange-500 to-amber-400 h-full w-[90%]" />
                </div>
                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-zinc-800 text-xs">
                  <div>
                    <div className="font-black text-white text-base">+340%</div>
                    <div className="text-zinc-400 text-[10px]">Lead Quality Lift</div>
                  </div>
                  <div>
                    <div className="font-black text-white text-base">-42%</div>
                    <div className="text-zinc-400 text-[10px]">Customer Acq. Cost</div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-500/10 border border-orange-500/20 rounded-3xl p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h5 className="text-sm font-black text-zinc-900 mb-1">Ready for Predictable Growth?</h5>
                  <p className="text-xs text-zinc-600 mb-4">
                    Claim your personalized growth blueprint and discover where your biggest growth levers lie.
                  </p>
                </div>
                <button
                  onClick={onOpenConsultation}
                  className="btn-glow w-full py-3 text-xs uppercase tracking-wider font-bold flex items-center justify-center space-x-2 shadow-lg shadow-orange-500/20 cursor-pointer"
                >
                  <span>Build Your Growth Engine</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
