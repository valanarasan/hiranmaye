import React, { useState } from 'react';
import { Calculator, TrendingUp, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import Tilt3DCard from './Tilt3DCard';

export default function ROICalculator3D({ onOpenConsultation }) {
  const [monthlyBudget, setMonthlyBudget] = useState(75000); // in INR
  const [currentLeads, setCurrentLeads] = useState(25);

  // Growth formulas based on HIRANMAYE DIGITAL benchmarks (4X ROI multiplier, optimized CPA)
  const estimatedLeads = Math.round((monthlyBudget / 1200) * 1.8);
  const estimatedRoiMultiplier = 4;
  const estimatedRevenuePotential = (monthlyBudget * estimatedRoiMultiplier).toLocaleString('en-IN');
  const leadGrowthPercentage = Math.round(((estimatedLeads - currentLeads) / Math.max(1, currentLeads)) * 100);

  return (
    <Tilt3DCard className="w-full glass-panel-light p-6 sm:p-10 border-purple-200/80 shadow-2xl shadow-purple-900/5 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br from-fuchsia-300/30 to-purple-400/20 blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-purple-100">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Calculator size={14} /> Interactive 3D ROI Estimator
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Calculate Your Business Growth Potential
            </h3>
          </div>
          <div className="shrink-0 flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-teal-50 px-4 py-2 rounded-2xl border border-emerald-200/80">
            <ShieldCheck className="text-emerald-600 shrink-0" size={20} />
            <span className="text-xs font-semibold text-emerald-900">
              Based on 500+ Verified Campaigns
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls Column */}
          <div className="lg:col-span-6 space-y-6">
            {/* Monthly Budget Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-slate-800 flex items-center gap-2">
                  Estimated Monthly Marketing Investment:
                </label>
                <span className="text-lg font-black text-purple-900 bg-purple-50 px-3 py-1 rounded-lg border border-purple-200">
                  ₹{monthlyBudget.toLocaleString('en-IN')} / mo
                </span>
              </div>
              <input
                type="range"
                min={25000}
                max={500000}
                step={5000}
                value={monthlyBudget}
                onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                className="w-full h-3 bg-purple-100 rounded-lg appearance-none cursor-pointer accent-fuchsia-600"
              />
              <div className="flex justify-between text-xs font-medium text-slate-500 mt-1">
                <span>₹25,000</span>
                <span>₹2,500,000</span>
                <span>₹5,00,000+</span>
              </div>
            </div>

            {/* Current Leads Input Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-slate-800 flex items-center gap-2">
                  Current Monthly Qualified Leads:
                </label>
                <span className="text-lg font-black text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                  {currentLeads} Leads / mo
                </span>
              </div>
              <input
                type="range"
                min={5}
                max={200}
                step={5}
                value={currentLeads}
                onChange={(e) => setCurrentLeads(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-700"
              />
              <div className="flex justify-between text-xs font-medium text-slate-500 mt-1">
                <span>5 Leads</span>
                <span>100 Leads</span>
                <span>200+ Leads</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-100 text-xs text-slate-600 leading-relaxed">
              <span className="font-bold text-purple-900">Note:</span> Estimates combine multi-channel performance advertising (Meta & Google), high-intent SEO/GEO, and automated AI lead qualification workflows.
            </div>
          </div>

          {/* 3D Visual Results Bar Box */}
          <div className="lg:col-span-6 bg-gradient-to-tr from-purple-900 via-fuchsia-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden">
            {/* Glossy Overlay */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-fuchsia-500/20 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-fuchsia-300 flex items-center gap-1.5">
                <Sparkles size={16} /> Projected Output Metrics
              </span>
              <span className="text-xs bg-emerald-500/20 text-emerald-300 font-bold px-3 py-1 rounded-full border border-emerald-400/30">
                4X Avg ROI Targeted
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* Estimated Leads Card */}
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15">
                <div className="text-xs font-medium text-purple-200 mb-1">Target Monthly Leads</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white">
                  ~{estimatedLeads}
                </div>
                <div className="text-xs font-bold text-emerald-400 mt-1 flex items-center gap-1">
                  <TrendingUp size={12} /> +{Math.max(0, leadGrowthPercentage)}% Growth
                </div>
              </div>

              {/* Estimated Business Value Card */}
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15">
                <div className="text-xs font-medium text-purple-200 mb-1">Est. Revenue Impact</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-fuchsia-300">
                  ₹{estimatedRevenuePotential}
                </div>
                <div className="text-xs font-medium text-slate-300 mt-1">
                  Based on 4X ROI benchmark
                </div>
              </div>
            </div>

            {/* 3D Visual Growth Comparison Bar */}
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-xs font-bold text-purple-200">
                <span>Baseline Leads ({currentLeads})</span>
                <span>Optimized System (~{estimatedLeads})</span>
              </div>
              <div className="h-4 bg-white/10 rounded-full overflow-hidden p-0.5 relative flex items-center">
                <div
                  className="h-full bg-slate-400 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, (currentLeads / Math.max(1, estimatedLeads)) * 100)}%` }}
                />
                <div
                  className="h-full bg-gradient-to-r from-fuchsia-500 to-emerald-400 rounded-full transition-all duration-500 shadow-lg shadow-fuchsia-500/50 ml-1"
                  style={{ width: `${Math.min(100, 100 - (currentLeads / Math.max(1, estimatedLeads)) * 100)}%` }}
                />
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="w-full btn-glow-plum py-3.5 px-6 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-fuchsia-900/50 hover:scale-[1.02] transition-transform"
            >
              <span>Get Your Customized Growth Strategy</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </Tilt3DCard>
  );
}
