import React, { useState } from 'react';
import { Calculator, Sparkles, ArrowRight } from 'lucide-react';

export default function ROICalculator({ onOpenConsultation }) {
  const [budget, setBudget] = useState(100000); // INR monthly budget
  const [industry, setIndustry] = useState('realestate');

  const industryMultipliers = {
    realestate: { avgCpl: 450, roiMult: 4.2, label: 'Real Estate' },
    manufacturing: { avgCpl: 850, roiMult: 4.8, label: 'Manufacturing' },
    healthcare: { avgCpl: 350, roiMult: 3.9, label: 'Healthcare' },
    education: { avgCpl: 250, roiMult: 4.1, label: 'Education' },
    ecommerce: { avgCpl: 180, roiMult: 3.5, label: 'E-commerce' },
    services: { avgCpl: 550, roiMult: 4.5, label: 'Professional Services' }
  };

  const currentInd = industryMultipliers[industry] || industryMultipliers.realestate;
  const estimatedLeads = Math.round(budget / currentInd.avgCpl);
  const estimatedRevenue = Math.round(budget * currentInd.roiMult);

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-[#E0115F]/30 bg-gradient-to-br from-[#151026] via-[#1D1438] to-[#120E24]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Inputs */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center space-x-2 text-[#E0115F] text-xs font-semibold uppercase tracking-widest">
            <Calculator className="w-4 h-4" />
            <span>Interactive Growth Forecasting Tool</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Calculate Your Business ROI Potential
          </h3>

          <p className="text-sm text-purple-200/70">
            See how HIRANMAYE DIGITAL's performance marketing and AI optimization turn your marketing spend into qualified leads and revenue growth.
          </p>

          <div className="space-y-4">
            {/* Industry Selector */}
            <div>
              <label className="block text-xs font-semibold text-purple-200 uppercase tracking-wider mb-2">
                1. Select Industry
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {Object.keys(industryMultipliers).map((key) => (
                  <button
                    key={key}
                    onClick={() => setIndustry(key)}
                    className={`py-2 px-3 rounded-xl text-xs font-medium border transition-all ${
                      industry === key
                        ? 'bg-[#E0115F] border-[#E0115F] text-white shadow-md'
                        : 'bg-[#0B0813] border-[#9D4EDD]/20 text-purple-300 hover:border-[#E0115F]/40'
                    }`}
                  >
                    {industryMultipliers[key].label}
                  </button>
                ))}
              </div>
            </div>

            {/* Monthly Budget Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold text-purple-200 uppercase tracking-wider">
                  2. Monthly Marketing Budget
                </label>
                <span className="text-lg font-bold text-[#E0115F]">
                  ₹{budget.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min={25000}
                max={1000000}
                step={25000}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2 bg-[#0B0813] rounded-lg appearance-none cursor-pointer accent-[#E0115F]"
              />
              <div className="flex justify-between text-[10px] text-purple-300/50 mt-1">
                <span>₹25,000</span>
                <span>₹5,000,000</span>
                <span>₹10,000,000+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Output Display */}
        <div className="lg:col-span-6">
          <div className="glass-panel rounded-2xl p-6 border border-[#9D4EDD]/30 bg-[#0B0813]/80 space-y-6 text-center">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#E0115F]/15 border border-[#E0115F]/30 text-[#E0115F] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Projected Monthly Growth Output</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#151026] p-4 rounded-xl border border-[#9D4EDD]/20 space-y-1">
                <span className="text-[11px] text-purple-300 uppercase tracking-wider block">Estimated Qualified Leads</span>
                <span className="text-3xl font-extrabold text-white">{estimatedLeads}</span>
                <span className="text-[10px] text-emerald-400 block">Avg CPL ~₹{currentInd.avgCpl}</span>
              </div>

              <div className="bg-[#151026] p-4 rounded-xl border border-[#9D4EDD]/20 space-y-1">
                <span className="text-[11px] text-purple-300 uppercase tracking-wider block">Projected Business ROI</span>
                <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#E0115F] to-[#9D4EDD]">
                  {currentInd.roiMult}X
                </span>
                <span className="text-[10px] text-purple-300/70 block">Multiplier Average</span>
              </div>
            </div>

            <div className="bg-[#151026]/80 p-4 rounded-xl border border-[#E0115F]/20 space-y-1 text-left">
              <span className="text-xs text-purple-300/70 block">Estimated Revenue Yield Generation:</span>
              <span className="text-2xl font-bold text-white block">
                ₹{estimatedRevenue.toLocaleString('en-IN')} <span className="text-xs text-purple-300/60 font-normal">/ month</span>
              </span>
            </div>

            <button
              onClick={onOpenConsultation}
              className="w-full btn-glow-magenta py-3.5 text-xs uppercase tracking-wider font-semibold flex items-center justify-center space-x-2"
            >
              <span>Unlock Custom Audit For Your Brand</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
