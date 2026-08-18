import React, { useState } from 'react';
import { Sparkles, ArrowRight, Calculator, ShieldCheck } from 'lucide-react';


const INDUSTRY_CONFIGS = {
  'real-estate': {
    name: 'Real Estate & Properties',
    roasMin: 4.2,
    roasMax: 6.5,
    avgDealSize: '₹45L - ₹1.8Cr',
    leadType: 'High-Net-Worth Buyers & Site Visits',
    typicalLift: '380%'
  },
  'healthcare': {
    name: 'Healthcare & Clinics',
    roasMin: 3.8,
    roasMax: 5.2,
    avgDealSize: '₹12K - ₹85K',
    leadType: 'Patient Consultations & Procedures',
    typicalLift: '310%'
  },
  'manufacturing': {
    name: 'Manufacturing & B2B',
    roasMin: 4.5,
    roasMax: 7.0,
    avgDealSize: '₹3.5L - ₹45L',
    leadType: 'Distributor RFQs & Contract Bids',
    typicalLift: '420%'
  },
  'tech': {
    name: 'Technology & SaaS',
    roasMin: 3.5,
    roasMax: 5.5,
    avgDealSize: '₹80K - ₹12L',
    leadType: 'Demo Bookings & Enterprise Trials',
    typicalLift: '350%'
  },
  'education': {
    name: 'Education & Academies',
    roasMin: 4.0,
    roasMax: 5.8,
    avgDealSize: '₹50K - ₹4.5L',
    leadType: 'Student Admissions & Walk-ins',
    typicalLift: '290%'
  },
  'retail': {
    name: 'Retail & E-commerce',
    roasMin: 3.6,
    roasMax: 5.4,
    avgDealSize: '₹2.5K - ₹18K',
    leadType: 'Direct Orders & Repeat Retargeting',
    typicalLift: '340%'
  }
};

export default function InteractiveROISimulator({ onOpenConsultation }) {
  const [budgetIndex, setBudgetIndex] = useState(2); // 0 to 4
  const [selectedIndustry, setSelectedIndustry] = useState('real-estate');

  const budgetOptions = [
    { label: '₹50,000 / mo', value: 50000 },
    { label: '₹1,00,000 / mo', value: 100000 },
    { label: '₹2,50,000 / mo', value: 250000 },
    { label: '₹5,00,000 / mo', value: 500000 },
    { label: '₹10,00,000+ / mo', value: 1000000 }
  ];

  const currentBudget = budgetOptions[budgetIndex].value;
  const config = INDUSTRY_CONFIGS[selectedIndustry];

  const projectedMinPipeline = (currentBudget * config.roasMin * 12) / 100000; // in Lakhs
  const projectedMaxPipeline = (currentBudget * config.roasMax * 12) / 100000; // in Lakhs
  const estimatedMonthlyLeads = Math.round((currentBudget / 1000) * (selectedIndustry === 'real-estate' ? 0.35 : selectedIndustry === 'healthcare' ? 0.75 : 0.55));

  const formatLakhsOrCrores = (lakhs) => {
    if (lakhs >= 100) {
      return `₹${(lakhs / 100).toFixed(2)} Cr`;
    }
    return `₹${lakhs.toFixed(1)} Lakhs`;
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Chapter 05 Header */}
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-700 text-xs font-bold uppercase tracking-wider">
          <Calculator className="w-3.5 h-3.5 text-orange-600" />
          <span>Interactive Story Simulator</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 tracking-tight">
          Simulate Your Brand's Growth Trajectory
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          Select your industry and target monthly investment to calculate your projected 12-month pipeline velocity and return on investment.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Interactive Controls */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200/90 shadow-lg shadow-black/5 space-y-6">
          
          {/* Industry Selection */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-zinc-700 mb-3">
              1. Choose Your Industry Vertical
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {Object.entries(INDUSTRY_CONFIGS).map(([key, ind]) => {
                const isSelected = selectedIndustry === key;
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedIndustry(key)}
                    className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-left truncate cursor-pointer ${
                      isSelected
                        ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20 scale-[1.02]'
                        : 'bg-zinc-50 border border-zinc-200 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900'
                    }`}
                  >
                    {ind.name.split(' & ')[0]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Budget Range Slider */}
          <div className="pt-2">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-black uppercase tracking-wider text-zinc-700">
                2. Target Monthly Growth Budget
              </label>
              <span className="text-sm font-black text-orange-600 font-mono">
                {budgetOptions[budgetIndex].label}
              </span>
            </div>

            <input
              type="range"
              min="0"
              max="4"
              step="1"
              value={budgetIndex}
              onChange={(e) => setBudgetIndex(parseInt(e.target.value))}
              className="w-full h-2.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
            />

            <div className="flex justify-between text-[10px] text-zinc-400 font-mono font-semibold mt-2">
              <span>₹50K</span>
              <span>₹1L</span>
              <span>₹2.5L</span>
              <span>₹5L</span>
              <span>₹10L+</span>
            </div>
          </div>

          {/* Industry Context Card */}
          <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 text-xs space-y-2">
            <div className="flex items-center justify-between text-zinc-600">
              <span className="font-medium">Primary Conversion Unit:</span>
              <span className="font-bold text-zinc-900">{config.leadType}</span>
            </div>
            <div className="flex items-center justify-between text-zinc-600">
              <span className="font-medium">Typical Deal Size:</span>
              <span className="font-bold text-zinc-900">{config.avgDealSize}</span>
            </div>
            <div className="flex items-center justify-between text-zinc-600">
              <span className="font-medium">Historical Revenue Lift:</span>
              <span className="font-bold text-emerald-600">{config.typicalLift}</span>
            </div>
          </div>

        </div>

        {/* Right Output Dashboard */}
        <div className="lg:col-span-6 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white rounded-3xl p-6 sm:p-8 border border-zinc-800 shadow-2xl shadow-black/20 space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Live Indicator */}
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-widest">
                Forecast Simulation Output
              </span>
            </div>
            <span className="text-[11px] font-mono text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded-full border border-orange-500/20">
              AI Forecast Model
            </span>
          </div>

          {/* Core Stat: Projected Pipeline */}
          <div className="space-y-1">
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
              Projected 12-Month Pipeline Generated
            </span>
            <div className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-white tracking-tight">
              {formatLakhsOrCrores(projectedMinPipeline)} – {formatLakhsOrCrores(projectedMaxPipeline)}
            </div>
            <p className="text-xs text-zinc-400">
              Calculated on conservative {config.roasMin}x to {config.roasMax}x campaign performance multiplier.
            </p>
          </div>

          {/* Secondary Metric Grid */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="bg-zinc-900/90 rounded-2xl p-4 border border-zinc-800">
              <div className="text-[11px] font-semibold text-zinc-400 uppercase">Target ROAS Range</div>
              <div className="text-xl sm:text-2xl font-black text-orange-400 mt-1">
                {config.roasMin}X – {config.roasMax}X
              </div>
              <div className="text-[10px] text-zinc-500 mt-0.5">Verified cross-channel</div>
            </div>

            <div className="bg-zinc-900/90 rounded-2xl p-4 border border-zinc-800">
              <div className="text-[11px] font-semibold text-zinc-400 uppercase">Est. Monthly Inquiries</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-1">
                ~{estimatedMonthlyLeads}+
              </div>
              <div className="text-[10px] text-zinc-500 mt-0.5">High-intent qualified</div>
            </div>
          </div>

          {/* CTA Gateway */}
          <div className="pt-2 space-y-3">
            <button
              onClick={onOpenConsultation}
              className="w-full btn-glow py-4 text-xs sm:text-sm uppercase tracking-wider font-bold flex items-center justify-center space-x-2.5 shadow-xl shadow-orange-500/25 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Unlock Your Customized Growth Blueprint</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-center text-zinc-500 flex items-center justify-center space-x-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Free Strategy Session • No Obligation • Custom Roadmap</span>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
