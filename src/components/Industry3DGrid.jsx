import React, { useState } from 'react';
import { Factory, Stethoscope, Building2, GraduationCap, ShoppingBag, Hotel, Briefcase, ShoppingCart, HardHat, Cpu, Landmark, Rocket } from 'lucide-react';
import Tilt3DCard from './Tilt3DCard';

export default function Industry3DGrid({ industries }) {
  const [hoveredIndustry, setHoveredIndustry] = useState(null);

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

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
      {industries.map((ind) => {
        const IconComp = industryIconMap[ind.name] || Briefcase;
        const isHovered = hoveredIndustry === ind.name;

        return (
          <Tilt3DCard key={ind.name} maxTilt={10}>
            <div
              onMouseEnter={() => setHoveredIndustry(ind.name)}
              onMouseLeave={() => setHoveredIndustry(null)}
              className={`p-4 sm:p-5 rounded-2xl h-full transition-all duration-400 cursor-pointer border text-center ${
                isHovered
                  ? 'bg-purple-500/10 border-purple-500/30'
                  : 'bg-white/[0.02] border-white/[0.06] hover:border-white/[0.1]'
              }`}
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl mx-auto mb-3 flex items-center justify-center transition-all ${
                isHovered
                  ? 'bg-gradient-to-br from-purple-600 to-fuchsia-500 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white/[0.04] text-zinc-500'
              }`}>
                <IconComp size={20} />
              </div>

              <h4 className={`text-xs sm:text-sm font-semibold transition-colors ${
                isHovered ? 'text-white' : 'text-zinc-400'
              }`}>
                {ind.name}
              </h4>

              {/* Hover reveal */}
              <div className={`overflow-hidden transition-all duration-400 ${isHovered ? 'max-h-20 mt-2 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-[10px] text-zinc-500 leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            </div>
          </Tilt3DCard>
        );
      })}
    </div>
  );
}
