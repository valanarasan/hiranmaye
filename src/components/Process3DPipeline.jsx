import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Search, Compass, Zap, Sliders, TrendingUp } from 'lucide-react';
import Tilt3DCard from './Tilt3DCard';

export default function Process3DPipeline({ processSteps }) {
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [Search, Compass, Zap, Sliders, TrendingUp];

  const current = processSteps[activeStep] || processSteps[0];
  const IconComponent = stepIcons[activeStep] || Search;

  return (
    <div className="w-full">
      {/* 3D Stage Navigation Track */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
        {processSteps.map((step, idx) => {
          const StepIcon = stepIcons[idx] || Search;
          const isActive = idx === activeStep;

          return (
            <button
              key={step.step}
              onClick={() => setActiveStep(idx)}
              className={`text-left p-4 rounded-2xl transition-all duration-300 relative group overflow-hidden border ${
                isActive
                  ? 'bg-white border-fuchsia-400 shadow-xl shadow-fuchsia-900/10 -translate-y-1'
                  : 'bg-white/70 hover:bg-white border-purple-100 shadow-sm hover:shadow-md hover:-translate-y-0.5'
              }`}
            >
              {/* Active 3D Indicator Strip */}
              {isActive && (
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-700 via-fuchsia-500 to-sky-400 rounded-t-2xl" />
              )}

              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${
                  isActive ? 'bg-purple-100 text-purple-800' : 'bg-slate-100 text-slate-500'
                }`}>
                  Step {step.step}
                </span>
                <div className={`p-2 rounded-xl ${
                  isActive ? 'bg-gradient-to-br from-purple-700 to-fuchsia-600 text-white shadow-md shadow-fuchsia-500/30' : 'bg-slate-100 text-slate-600'
                }`}>
                  <StepIcon size={18} />
                </div>
              </div>

              <h4 className={`text-base font-bold transition-colors ${
                isActive ? 'text-purple-900' : 'text-slate-700 group-hover:text-purple-700'
              }`}>
                {step.title}
              </h4>
              <p className="text-xs text-slate-500 line-clamp-1 mt-1">
                {step.subtitle}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Stage 3D Feature Card */}
      <Tilt3DCard className="w-full glass-panel-light p-6 sm:p-10 border-fuchsia-200/80 shadow-2xl shadow-purple-900/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Stage Detail */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-fuchsia-50 border border-fuchsia-200 text-fuchsia-800 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-ping" />
              Stage 0{activeStep + 1} of 05 • Growth Framework
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 flex items-center gap-3">
              <span className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-700 to-fuchsia-500 text-white flex items-center justify-center shadow-lg shadow-fuchsia-500/25 shrink-0">
                <IconComponent size={24} />
              </span>
              {current.title}
            </h3>

            <p className="text-lg font-medium text-purple-900/90 leading-relaxed">
              "{current.subtitle}"
            </p>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {current.description}
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                <CheckCircle2 size={18} className="text-fuchsia-600 shrink-0" />
                <span>Custom Research & Audit</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                <CheckCircle2 size={18} className="text-fuchsia-600 shrink-0" />
                <span>AI-Assisted Precision Data</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                <CheckCircle2 size={18} className="text-fuchsia-600 shrink-0" />
                <span>Transparent KPI Dashboards</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                <CheckCircle2 size={18} className="text-fuchsia-600 shrink-0" />
                <span>Scalable Business Outcomes</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              {activeStep > 0 && (
                <button
                  onClick={() => setActiveStep(activeStep - 1)}
                  className="px-5 py-2.5 rounded-full border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-all"
                >
                  ← Previous Stage
                </button>
              )}
              {activeStep < processSteps.length - 1 ? (
                <button
                  onClick={() => setActiveStep(activeStep + 1)}
                  className="btn-glow-plum px-6 py-2.5 text-sm inline-flex items-center gap-2"
                >
                  <span>Next: {processSteps[activeStep + 1].title}</span>
                  <ArrowRight size={16} />
                </button>
              ) : (
                <span className="text-xs font-bold text-fuchsia-700 uppercase tracking-widest bg-fuchsia-50 px-4 py-2 rounded-full border border-fuchsia-200">
                  Ready to Scale Your Brand 🎉
                </span>
              )}
            </div>
          </div>

          {/* Right Column: Interactive 3D Depth Visualization Graphic */}
          <div className="lg:col-span-5 relative flex items-center justify-center p-6 bg-gradient-to-tr from-purple-50 via-fuchsia-50/50 to-white rounded-3xl border border-purple-100">
            <div className="relative w-full max-w-[280px] aspect-square flex items-center justify-center">
              {/* Outer 3D Orbit Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-fuchsia-300/60 animate-orbit" />
              
              {/* Inner Pulsing Core */}
              <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-sky-400 flex items-center justify-center text-white shadow-2xl shadow-fuchsia-500/40 animate-pulse-glow-light">
                <div className="text-center p-4">
                  <div className="text-3xl font-extrabold tracking-tight">0{activeStep + 1}</div>
                  <div className="text-xs font-bold uppercase tracking-wider opacity-90 mt-0.5">{current.title}</div>
                </div>
              </div>

              {/* Floating Orbiting Nodes */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-3 py-1.5 rounded-full shadow-lg border border-purple-200 text-xs font-bold text-purple-900 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Data-Driven
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-3 py-1.5 rounded-full shadow-lg border border-purple-200 text-xs font-bold text-purple-900 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-fuchsia-500" />
                4X ROI Goal
              </div>
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white px-3 py-1.5 rounded-full shadow-lg border border-purple-200 text-xs font-bold text-purple-900">
                Continuous A/B
              </div>
            </div>
          </div>
        </div>
      </Tilt3DCard>
    </div>
  );
}
