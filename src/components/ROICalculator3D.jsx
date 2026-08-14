import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Tilt3DCard from './Tilt3DCard';

export default function ROICalculator3D({ onOpenConsultation }) {
  return (
    <Tilt3DCard className="w-full max-w-2xl mx-auto">
      <div className="glass-dark rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden border-purple-500/20">
        
        {/* Ambient glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        {/* Dramatic stat */}
        <div className="relative z-10 space-y-4">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-purple-600 via-fuchsia-500 to-cyan-400 flex items-center justify-center mx-auto shadow-2xl shadow-purple-500/30 animate-neon-pulse">
            <span className="text-4xl sm:text-5xl font-black text-white">4X</span>
          </div>
          
          <h3 className="text-2xl sm:text-3xl font-bold text-white">Average ROI</h3>
          <p className="text-sm text-zinc-500">Across 500+ campaigns delivered</p>
        </div>

        <button
          onClick={onOpenConsultation}
          className="btn-glow px-7 py-3.5 text-xs uppercase tracking-wider font-bold inline-flex items-center space-x-2 relative z-10"
        >
          <Sparkles className="w-4 h-4" />
          <span>Get Your Growth Strategy</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </Tilt3DCard>
  );
}
