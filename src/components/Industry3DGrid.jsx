import React, { useState } from 'react';
import { Factory, Stethoscope, Building2, GraduationCap, ShoppingBag, Hotel, Briefcase, ShoppingCart, HardHat, Cpu, Landmark, Rocket, Bot } from 'lucide-react';
import Tilt3DCard from './Tilt3DCard';

export default function Industry3DGrid({ industries }) {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const industryIconMap = {
    "Manufacturing": Factory,
    "Healthcare": Stethoscope,
    "Real Estate": Building2,
    "Education": GraduationCap,
    "Retail": ShoppingBag,
    "Hospitality": Hotel,
    "Professional Services": Briefcase,
    "E-commerce": ShoppingCart,
    "Construction": HardHat,
    "Technology": Cpu,
    "Financial Services": Landmark,
    "Startups & SMEs": Rocket
  };

  const platforms = [
    { name: "Google Search", type: "SEO", color: "bg-blue-50 text-blue-700 border-blue-200" },
    { name: "Meta Ads", type: "Social Paid", color: "bg-indigo-50 text-indigo-700 border-indigo-200" },
    { name: "ChatGPT & Gemini", type: "GEO", color: "bg-purple-50 text-purple-700 border-purple-200" },
    { name: "Perplexity AI", type: "AEO", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    { name: "YouTube Ads", type: "Video", color: "bg-rose-50 text-rose-700 border-rose-200" },
    { name: "LinkedIn B2B", type: "Enterprise", color: "bg-sky-50 text-sky-700 border-sky-200" }
  ];

  return (
    <div className="w-full space-y-10">
      {/* Target Platforms Badge Orbit */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 mr-2">
          <Bot size={16} className="text-purple-600" /> Multi-Platform Visibility System:
        </span>
        {platforms.map((p) => (
          <div
            key={p.name}
            className={`px-4 py-2 rounded-full text-xs font-bold border shadow-sm flex items-center gap-2 ${p.color}`}
          >
            <span className="w-2 h-2 rounded-full bg-current" />
            <span>{p.name}</span>
            <span className="opacity-60 text-[10px] uppercase tracking-wider bg-white/60 px-2 py-0.5 rounded-full">
              {p.type}
            </span>
          </div>
        ))}
      </div>

      {/* 3D Industry Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {industries.map((ind) => {
          const IconComp = industryIconMap[ind.name] || Briefcase;
          const isSelected = selectedIndustry === ind.name;

          return (
            <Tilt3DCard key={ind.name} maxTilt={10}>
              <div
                onClick={() => setSelectedIndustry(isSelected ? null : ind.name)}
                className={`p-5 rounded-2xl h-full transition-all duration-300 cursor-pointer border ${
                  isSelected
                    ? 'bg-gradient-to-br from-purple-700 to-fuchsia-600 text-white border-fuchsia-400 shadow-xl shadow-fuchsia-900/20 -translate-y-1'
                    : 'glass-panel-light hover:bg-white border-purple-100 hover:border-fuchsia-300 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-3 rounded-xl ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-gradient-to-tr from-purple-100 to-fuchsia-50 text-purple-800'
                  }`}>
                    <IconComp size={22} />
                  </div>
                  <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    Industry
                  </span>
                </div>

                <h4 className={`text-base font-bold mb-1.5 ${
                  isSelected ? 'text-white' : 'text-slate-900'
                }`}>
                  {ind.name}
                </h4>

                <p className={`text-xs leading-relaxed ${
                  isSelected ? 'text-purple-100' : 'text-slate-500'
                }`}>
                  {ind.desc}
                </p>
              </div>
            </Tilt3DCard>
          );
        })}
      </div>
    </div>
  );
}
