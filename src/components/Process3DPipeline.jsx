import React, { useState } from 'react';

export default function Process3DPipeline({ processSteps }) {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <div className="w-full max-w-3xl mx-auto py-8">
      {/* Vertical neon pipeline */}
      <div className="relative flex flex-col items-center">
        
        {processSteps.map((step, idx) => {
          const isActive = activeStep === idx;
          const isLast = idx === processSteps.length - 1;
          
          return (
            <div key={step.step} className="relative flex flex-col items-center">
              {/* Connector line */}
              {idx > 0 && (
                <div className="neon-line h-12 sm:h-16" />
              )}

              {/* Step orb */}
              <button
                onClick={() => setActiveStep(isActive ? null : idx)}
                className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 group ${
                  isActive
                    ? 'bg-gradient-to-br from-purple-600 via-fuchsia-500 to-cyan-400 shadow-xl shadow-purple-500/30 scale-110'
                    : 'bg-white/[0.04] border border-white/[0.08] hover:border-purple-500/40 hover:bg-white/[0.06]'
                }`}
              >
                <span className={`text-lg sm:text-xl font-black transition-colors ${
                  isActive ? 'text-white' : 'text-zinc-500 group-hover:text-purple-400'
                }`}>
                  {step.step}
                </span>
                
                {/* Pulse ring on active */}
                {isActive && (
                  <div className="absolute inset-0 rounded-full border-2 border-purple-400/30 animate-ping" />
                )}
              </button>

              {/* Title + description */}
              <div className={`mt-3 text-center transition-all duration-500 ${isActive ? 'mb-2' : 'mb-0'}`}>
                <h4 className={`text-sm sm:text-base font-bold transition-colors ${
                  isActive ? 'text-white' : 'text-zinc-400'
                }`}>
                  {step.title}
                </h4>
                
                {/* Reveal subtitle on click */}
                {isActive && (
                  <p className="text-xs text-zinc-500 mt-1 max-w-xs animate-fade-in">
                    {step.subtitle}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
