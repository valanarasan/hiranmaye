import React, { useState } from 'react';
import { AlertCircle, ArrowRight, Check, X, Sparkles } from 'lucide-react';

export default function GrowthCrossroadsInteractive({ onOpenConsultation }) {
  const [activeTab, setActiveTab] = useState('hiranmaye'); // 'traditional' or 'hiranmaye'

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Minimal Header */}
      <div className="text-center space-y-3 mb-8">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-700 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-orange-600" />
          <span>The Growth Crossroads</span>
        </div>
        <h3 className="text-2xl sm:text-4xl font-black text-zinc-900 tracking-tight">
          Two Ways to Scale. Only One Creates Market Dominance.
        </h3>
        <p className="text-sm text-zinc-600 max-w-xl mx-auto leading-relaxed">
          Compare the typical fragmented agency cycle with Hiranmaye's precision storytelling & AI growth architecture.
        </p>
      </div>

      {/* Minimal Switcher Tabs */}
      <div className="flex justify-center mb-8">
        <div className="bg-zinc-100 p-1 rounded-2xl border border-zinc-200 inline-flex">
          <button
            onClick={() => setActiveTab('traditional')}
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center space-x-2 ${
              activeTab === 'traditional'
                ? 'bg-white text-zinc-900 shadow-sm border border-zinc-200/80 font-bold'
                : 'text-zinc-500 hover:text-zinc-800'
            }`}
          >
            <AlertCircle className="w-4 h-4 text-zinc-400" />
            <span>Traditional Agency</span>
          </button>
          
          <button
            onClick={() => setActiveTab('hiranmaye')}
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center space-x-2 ${
              activeTab === 'hiranmaye'
                ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20 font-bold'
                : 'text-zinc-500 hover:text-zinc-800'
            }`}
          >
            <Sparkles className="w-4 h-4 text-orange-200" />
            <span>Hiranmaye Engine</span>
          </button>
        </div>
      </div>

      {/* Main Comparative Stage */}
      <div className="relative">
        {activeTab === 'traditional' ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start animate-fade-in">
            {/* Left Narrative Card */}
            <div className="md:col-span-7 bg-white rounded-2xl p-6 sm:p-7 border border-zinc-200/90 shadow-sm space-y-5">
              <div>
                <div className="flex items-center space-x-2 text-rose-600 text-xs font-bold uppercase tracking-wider mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  <span>The Fragmented Cycle</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
                  High Ad Spend, Vanishing ROI & Disconnected Channels
                </h4>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mt-2">
                  Random ad campaigns, low-intent clicks, and disconnected agencies where traffic never converts into predictable revenue.
                </p>
              </div>

              <div className="space-y-2.5 pt-1">
                {[
                  { text: 'Vanity impressions with zero CRM lead attribution', sub: 'High CPCs with poor qualification' },
                  { text: 'Siloed SEO, Social & Ads working in isolation', sub: 'No unified growth story or messaging' },
                  { text: 'Generic copy that fails to build real brand equity', sub: 'Easily commoditized by competitors' },
                  { text: 'Slow, manual testing cycles wasting months of budget', sub: 'Zero AI automation or predictive insights' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3 rounded-xl bg-zinc-50 border border-zinc-100">
                    <div className="w-4 h-4 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                      <X className="w-2.5 h-2.5" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-zinc-800">{item.text}</p>
                      <p className="text-[11px] text-zinc-500 mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Metrics & Action Panel */}
            <div className="md:col-span-5 flex flex-col space-y-4">
              <div className="bg-zinc-900 text-white rounded-2xl p-6 border border-zinc-800 space-y-3">
                <div className="text-xs font-mono font-medium text-zinc-400 uppercase tracking-wider">
                  Average Industry Outcome
                </div>
                <div className="flex items-baseline space-x-2.5">
                  <span className="text-3xl sm:text-4xl font-black text-rose-400">1.2x – 1.8x</span>
                  <span className="text-xs text-zinc-400 font-medium">Average ROAS</span>
                </div>
                <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-rose-500 h-full w-[35%]" />
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                  Budget leaks through untargeted audiences, unoptimized landing pages, and weak attribution.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-zinc-200/90 shadow-sm space-y-3.5">
                <div>
                  <h5 className="text-sm font-bold text-zinc-900">Break Free From the Cycle</h5>
                  <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                    Upgrade to a unified system built on forensic strategy, AI analytics, and high-impact storytelling.
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
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start animate-fade-in">
            {/* Left Narrative Card */}
            <div className="md:col-span-7 bg-white rounded-2xl p-6 sm:p-7 border border-zinc-200/90 shadow-sm space-y-5">
              <div>
                <div className="flex items-center space-x-2 text-orange-600 text-xs font-bold uppercase tracking-wider mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <span>The Precision Architecture</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
                  Data-Driven Precision, AI Domination & Scalable Revenue
                </h4>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mt-2">
                  We synchronize your brand story across high-intent search (SEO/AEO/GEO), automated paid performance funnels, and high-converting creative assets.
                </p>
              </div>

              <div className="space-y-2.5 pt-1">
                {[
                  { text: 'Full-Funnel Intent Capture (Meta, Google, AI Search)', sub: 'Attracting qualified decision-makers ready to buy' },
                  { text: '360° Omnichannel Alignment & Brand Positioning', sub: 'Every touchpoint reinforces your authority' },
                  { text: 'AI-Powered Continuous Conversion Optimization', sub: 'Real-time multivariate adjustments for lower CPA' },
                  { text: 'Transparent Pipeline Attribution & ROI Reporting', sub: 'Clear dashboard visibility into every marketing rupee' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3 rounded-xl bg-orange-50/40 border border-orange-100">
                    <div className="w-4 h-4 rounded-full bg-orange-500 text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-zinc-900">{item.text}</p>
                      <p className="text-[11px] text-zinc-500 mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Metrics & Action Panel */}
            <div className="md:col-span-5 flex flex-col space-y-4">
              {/* Top Benchmark Metric Card */}
              <div className="bg-zinc-900 text-white rounded-2xl p-6 border border-zinc-800 space-y-3">
                <div className="text-xs font-mono font-medium text-orange-400 uppercase tracking-wider flex items-center justify-between">
                  <span>Hiranmaye Standard</span>
                  <span className="px-2 py-0.5 rounded-full bg-orange-500/15 text-orange-300 text-[10px] font-bold">Verified</span>
                </div>
                
                <div className="flex items-baseline space-x-2.5">
                  <span className="text-3xl sm:text-4xl font-black text-orange-400">
                    3.8x – 5.4x
                  </span>
                  <span className="text-xs text-zinc-400 font-medium">Target ROAS</span>
                </div>

                <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-orange-500 h-full w-[90%]" />
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2.5 border-t border-zinc-800/90 text-xs">
                  <div>
                    <div className="font-bold text-white text-sm sm:text-base">+340%</div>
                    <div className="text-zinc-400 text-[10px] mt-0.5">Lead Quality Lift</div>
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm sm:text-base">-42%</div>
                    <div className="text-zinc-400 text-[10px] mt-0.5">Customer Acq. Cost</div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA Card - Compact, Clean & Snug */}
              <div className="bg-orange-50/60 border border-orange-200/80 rounded-2xl p-5 sm:p-6 space-y-3.5">
                <div>
                  <h5 className="text-sm sm:text-base font-bold text-zinc-900">Ready for Predictable Growth?</h5>
                  <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                    Claim your personalized growth blueprint and discover where your biggest growth levers lie.
                  </p>
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3.5 px-4 rounded-xl bg-zinc-900 hover:bg-orange-600 text-white text-xs uppercase tracking-wider font-bold flex items-center justify-center space-x-2 transition-colors shadow-sm cursor-pointer"
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
