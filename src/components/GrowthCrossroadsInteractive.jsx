import React, { useState } from 'react';
import { ArrowRight, Sparkles, AlertTriangle } from 'lucide-react';

export default function GrowthCrossroadsInteractive({ onOpenConsultation }) {
  // Define 19 columns and 7 rows for an authentic, balanced grid layout
  const cols = 19;
  const rows = 7;
  const startX = 45;
  const startY = 36;
  const stepX = 44;
  const stepY = 32;

  const dots = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push({
        x: startX + c * stepX,
        y: startY + r * stepY,
        id: `dot-${r}-${c}`,
      });
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto space-y-10 sm:space-y-12">
      {/* =========================================================================
          HEADER SECTION (Matching Screenshot)
          ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Dual-tone typography */}
        <div className="lg:col-span-6 space-y-1">
          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight leading-[1.08]">
            <span className="text-zinc-500 block">Marketing didn't</span>
            <span className="text-zinc-500 block">get harder.</span>
            <span className="text-white font-extrabold block mt-1 tracking-tight">
              It got stuck.
            </span>
          </h2>
        </div>

        {/* Right Column: Narrative explanation */}
        <div className="lg:col-span-6 space-y-4 text-zinc-400 text-sm sm:text-base leading-relaxed pt-1">
          <p>
            Marketers are drowning in the workflows and coordination that teams and tools require, only to deliver campaigns and journeys that require constant oversight. Meanwhile, customers are pushed through static rules built for segments, not individuals.
          </p>
          <p>
            Hiranmaye's agents work across your stack and create a unique journey for every customer, while continuously learning and optimizing the next interaction. Marketing stops resetting and performance compounds over time.
          </p>
        </div>
      </div>

      {/* =========================================================================
          VISUALIZATION CARDS (Card 1: Messy Journeys | Card 2: Clean Journeys)
          ========================================================================= */}
      <div className="space-y-5">
        {/* -----------------------------------------------------------------------
            CARD 1: "Your journeys are a mess" (Dark / Fragmented / Chaos)
            ----------------------------------------------------------------------- */}
        <div className="bg-[#141518] rounded-3xl p-5 sm:p-7 border border-zinc-800/80 shadow-2xl relative overflow-hidden group">
          {/* Header Label */}
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-zinc-400 text-base sm:text-lg font-normal">
              Your journeys are a <span className="text-[#f85149] font-medium">mess</span>
            </h3>
            <span className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[11px] font-semibold">
              <AlertTriangle className="w-3 h-3" />
              <span>Fragmented touchpoints & high churn</span>
            </span>
          </div>

          {/* Canvas SVG Grid & Chaotic Graph */}
          <div className="w-full overflow-x-auto select-none py-1">
            <svg
              viewBox="0 0 885 260"
              className="w-full h-auto min-w-[680px] md:min-w-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Dot Matrix Background */}
              {dots.map((d) => (
                <circle
                  key={`dark-${d.id}`}
                  cx={d.x}
                  cy={d.y}
                  r="2"
                  fill="#2c303a"
                />
              ))}

              {/* Messy / Tangled Connecting Lines */}
              <g stroke="#565d6c" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" opacity="0.85">
                {/* Path A */}
                <path d="M 89 195 L 133 227 L 177 195 L 221 227 L 265 99 L 353 99 L 441 163 L 485 99" />
                {/* Path B */}
                <path d="M 177 99 L 265 36 L 309 163 L 397 163 L 485 99 L 529 195 L 617 227" />
                {/* Path C */}
                <path d="M 265 36 L 265 99 L 353 99 L 441 163 L 529 195 L 573 131 L 705 99 L 837 67" />
                {/* Path D */}
                <path d="M 485 99 L 573 67 L 705 99 L 705 163 L 749 227" />
                {/* Path E */}
                <path d="M 529 195 L 661 195 L 705 163 L 837 67" />
                {/* Path F */}
                <path d="M 221 227 L 309 163 L 397 163 L 529 227" />
              </g>

              {/* White Junction Dots */}
              <g fill="#ffffff">
                <circle cx="133" cy="227" r="3" />
                <circle cx="221" cy="227" r="3" />
                <circle cx="265" cy="99" r="3" />
                <circle cx="309" cy="163" r="3" />
                <circle cx="397" cy="163" r="3" />
                <circle cx="441" cy="163" r="3" />
                <circle cx="573" cy="67" r="3" />
                <circle cx="573" cy="131" r="3" />
                <circle cx="617" cy="227" r="3" />
                <circle cx="705" cy="163" r="3" />
                <circle cx="749" cy="227" r="3" />
              </g>

              {/* -------------------- SVG ICONS: CARD 1 (MESS) -------------------- */}

              {/* Phone at col 1, row 5 (89, 195) */}
              <g transform="translate(89, 195)">
                <rect x="-6" y="-9" width="12" height="18" rx="2.5" fill="#ffffff" />
                <rect x="-4.5" y="-7" width="9" height="12" rx="1" fill="#141518" />
                <circle cx="0" cy="6.5" r="0.8" fill="#ffffff" />
              </g>

              {/* Mail at col 3, row 2 (177, 99) */}
              <g transform="translate(177, 99)">
                <rect x="-8.5" y="-6" width="17" height="12" rx="2" fill="#ffffff" />
                <path d="M -7.5 -5 L 0 0.5 L 7.5 -5" stroke="#141518" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </g>

              {/* Laptop at col 5, row 0 (265, 36) */}
              <g transform="translate(265, 36)">
                <rect x="-8" y="-6.5" width="16" height="10" rx="1.5" fill="#ffffff" />
                <rect x="-6.5" y="-5" width="13" height="7" rx="0.8" fill="#141518" />
                <line x1="-10" y1="5.5" x2="10" y2="5.5" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
              </g>

              {/* Mail at col 10, row 2 (485, 99) */}
              <g transform="translate(485, 99)">
                <rect x="-8.5" y="-6" width="17" height="12" rx="2" fill="#ffffff" />
                <path d="M -7.5 -5 L 0 0.5 L 7.5 -5" stroke="#141518" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </g>

              {/* Phone at col 18, row 1 (837, 67) */}
              <g transform="translate(837, 67)">
                <rect x="-6" y="-9" width="12" height="18" rx="2.5" fill="#ffffff" />
                <rect x="-4.5" y="-7" width="9" height="12" rx="1" fill="#141518" />
                <circle cx="0" cy="6.5" r="0.8" fill="#ffffff" />
              </g>

              {/* Red Failure / Friction Crosses (X) */}
              {/* Red X at (353, 99) */}
              <g transform="translate(353, 99)" stroke="#f85149" strokeWidth="2.2" strokeLinecap="round">
                <line x1="-5" y1="-5" x2="5" y2="5" />
                <line x1="5" y1="-5" x2="-5" y2="5" />
              </g>

              {/* Red X at (177, 195) */}
              <g transform="translate(177, 195)" stroke="#f85149" strokeWidth="2.2" strokeLinecap="round">
                <line x1="-5" y1="-5" x2="5" y2="5" />
                <line x1="5" y1="-5" x2="-5" y2="5" />
              </g>

              {/* Red X at (529, 195) */}
              <g transform="translate(529, 195)" stroke="#f85149" strokeWidth="2.2" strokeLinecap="round">
                <line x1="-5" y1="-5" x2="5" y2="5" />
                <line x1="5" y1="-5" x2="-5" y2="5" />
              </g>

              {/* Red X at (705, 99) */}
              <g transform="translate(705, 99)" stroke="#f85149" strokeWidth="2.2" strokeLinecap="round">
                <line x1="-5" y1="-5" x2="5" y2="5" />
                <line x1="5" y1="-5" x2="-5" y2="5" />
              </g>

              {/* Red X at (661, 195) */}
              <g transform="translate(661, 195)" stroke="#f85149" strokeWidth="2.2" strokeLinecap="round">
                <line x1="-5" y1="-5" x2="5" y2="5" />
                <line x1="5" y1="-5" x2="-5" y2="5" />
              </g>

              {/* Red X at (529, 227) */}
              <g transform="translate(529, 227)" stroke="#f85149" strokeWidth="2.2" strokeLinecap="round">
                <line x1="-5" y1="-5" x2="5" y2="5" />
                <line x1="5" y1="-5" x2="-5" y2="5" />
              </g>
            </svg>
          </div>
        </div>

        {/* -----------------------------------------------------------------------
            CARD 2: "Clean them up with Hiranmaye" (Vibrant Brand Orange / Streamlined)
            ----------------------------------------------------------------------- */}
        <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 rounded-3xl p-5 sm:p-7 shadow-2xl shadow-orange-600/25 text-white relative overflow-hidden group">
          {/* Header Label */}
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-white text-base sm:text-lg font-normal">
              Clean them up with <span className="font-extrabold text-white">Hiranmaye</span>
            </h3>
            <span className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-[11px] font-semibold">
              <Sparkles className="w-3 h-3 text-amber-200" />
              <span>Continuous Autonomous Optimization</span>
            </span>
          </div>

          {/* Canvas SVG Grid & Clean Parallel Journeys */}
          <div className="w-full overflow-x-auto select-none py-1">
            <svg
              viewBox="0 0 885 260"
              className="w-full h-auto min-w-[680px] md:min-w-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Dot Matrix Background (Translucent white dots) */}
              {dots.map((d) => (
                <circle
                  key={`orange-${d.id}`}
                  cx={d.x}
                  cy={d.y}
                  r="2"
                  fill="rgba(255, 255, 255, 0.25)"
                />
              ))}

              {/* ----------------- PATH 1 (Top Stream) ----------------- */}
              <g>
                <path
                  d="M 45 99 L 177 67 L 309 67 L 441 35 L 573 67 L 705 67 L 793 99 L 837 67"
                  stroke="#ffffff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />

                {/* Animated light pulse traveling on path 1 */}
                <circle r="3" fill="#ffffff">
                  <animateMotion
                    path="M 45 99 L 177 67 L 309 67 L 441 35 L 573 67 L 705 67 L 793 99 L 837 67"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* White Junction Dots */}
                <circle cx="309" cy="67" r="3" fill="#ffffff" />
                <circle cx="573" cy="67" r="3" fill="#ffffff" />
                <circle cx="793" cy="99" r="3" fill="#ffffff" />

                {/* 1. User Avatar at (45, 99) */}
                <g transform="translate(45, 99)">
                  <circle cx="0" cy="-3.5" r="3.5" fill="#ffffff" />
                  <path d="M -6 6.5 C -6 2.5, -3 0.5, 0 0.5 C 3 0.5, 6 2.5, 6 6.5 Z" fill="#ffffff" />
                </g>

                {/* 2. Phone at (177, 67) */}
                <g transform="translate(177, 67)">
                  <rect x="-6" y="-9" width="12" height="18" rx="2.5" fill="#ffffff" />
                  <rect x="-4.5" y="-7" width="9" height="12" rx="1" fill="#ea580c" />
                  <circle cx="0" cy="6.5" r="0.8" fill="#ffffff" />
                </g>

                {/* 3. Mail at (441, 35) */}
                <g transform="translate(441, 35)">
                  <rect x="-8.5" y="-6" width="17" height="12" rx="2" fill="#ffffff" />
                  <path d="M -7.5 -5 L 0 0.5 L 7.5 -5" stroke="#ea580c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </g>

                {/* 4. Chat Message Bubble at (705, 67) */}
                <g transform="translate(705, 67)">
                  <rect x="-9" y="-6" width="18" height="12" rx="2.5" fill="#ffffff" />
                  <circle cx="-4" cy="0" r="1.1" fill="#ea580c" />
                  <circle cx="0" cy="0" r="1.1" fill="#ea580c" />
                  <circle cx="4" cy="0" r="1.1" fill="#ea580c" />
                </g>

                {/* 5. Success Green Check Badge at (837, 67) */}
                <g transform="translate(837, 67)">
                  <circle cx="0" cy="0" r="9.5" fill="#22c55e" />
                  <path d="M -4 0 L -1 3 L 4.5 -2.5" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </g>
              </g>

              {/* ----------------- PATH 2 (Middle Stream) ----------------- */}
              <g>
                <path
                  d="M 45 131 L 177 131 L 309 131 L 441 163 L 573 131 L 705 131 L 793 163 L 837 131"
                  stroke="#ffffff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />

                {/* Animated light pulse traveling on path 2 */}
                <circle r="3" fill="#ffffff">
                  <animateMotion
                    path="M 45 131 L 177 131 L 309 131 L 441 163 L 573 131 L 705 131 L 793 163 L 837 131"
                    dur="4.6s"
                    begin="0.7s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* White Junction Dots */}
                <circle cx="177" cy="131" r="3" fill="#ffffff" />
                <circle cx="573" cy="131" r="3" fill="#ffffff" />
                <circle cx="705" cy="131" r="3" fill="#ffffff" />
                <circle cx="793" cy="163" r="3" fill="#ffffff" />

                {/* 1. User Avatar at (45, 131) */}
                <g transform="translate(45, 131)">
                  <circle cx="0" cy="-3.5" r="3.5" fill="#ffffff" />
                  <path d="M -6 6.5 C -6 2.5, -3 0.5, 0 0.5 C 3 0.5, 6 2.5, 6 6.5 Z" fill="#ffffff" />
                </g>

                {/* 2. Phone at (309, 131) */}
                <g transform="translate(309, 131)">
                  <rect x="-6" y="-9" width="12" height="18" rx="2.5" fill="#ffffff" />
                  <rect x="-4.5" y="-7" width="9" height="12" rx="1" fill="#ea580c" />
                  <circle cx="0" cy="6.5" r="0.8" fill="#ffffff" />
                </g>

                {/* 3. Chat Message Bubble at (441, 163) */}
                <g transform="translate(441, 163)">
                  <rect x="-9" y="-6" width="18" height="12" rx="2.5" fill="#ffffff" />
                  <circle cx="-4" cy="0" r="1.1" fill="#ea580c" />
                  <circle cx="0" cy="0" r="1.1" fill="#ea580c" />
                  <circle cx="4" cy="0" r="1.1" fill="#ea580c" />
                </g>

                {/* 4. Success Green Check Badge at (837, 131) */}
                <g transform="translate(837, 131)">
                  <circle cx="0" cy="0" r="9.5" fill="#22c55e" />
                  <path d="M -4 0 L -1 3 L 4.5 -2.5" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </g>
              </g>

              {/* ----------------- PATH 3 (Bottom Stream) ----------------- */}
              <g>
                <path
                  d="M 45 195 L 177 195 L 309 195 L 441 227 L 573 195 L 705 195 L 793 195 L 837 195"
                  stroke="#ffffff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />

                {/* Animated light pulse traveling on path 3 */}
                <circle r="3" fill="#ffffff">
                  <animateMotion
                    path="M 45 195 L 177 195 L 309 195 L 441 227 L 573 195 L 705 195 L 793 195 L 837 195"
                    dur="4.3s"
                    begin="1.4s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* White Junction Dots */}
                <circle cx="309" cy="195" r="3" fill="#ffffff" />
                <circle cx="573" cy="195" r="3" fill="#ffffff" />
                <circle cx="705" cy="195" r="3" fill="#ffffff" />

                {/* 1. User Avatar at (45, 195) */}
                <g transform="translate(45, 195)">
                  <circle cx="0" cy="-3.5" r="3.5" fill="#ffffff" />
                  <path d="M -6 6.5 C -6 2.5, -3 0.5, 0 0.5 C 3 0.5, 6 2.5, 6 6.5 Z" fill="#ffffff" />
                </g>

                {/* 2. Laptop at (177, 195) */}
                <g transform="translate(177, 195)">
                  <rect x="-8" y="-6.5" width="16" height="10" rx="1.5" fill="#ffffff" />
                  <rect x="-6.5" y="-5" width="13" height="7" rx="0.8" fill="#ea580c" />
                  <line x1="-10" y1="5.5" x2="10" y2="5.5" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
                </g>

                {/* 3. Mail at (441, 227) */}
                <g transform="translate(441, 227)">
                  <rect x="-8.5" y="-6" width="17" height="12" rx="2" fill="#ffffff" />
                  <path d="M -7.5 -5 L 0 0.5 L 7.5 -5" stroke="#ea580c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </g>

                {/* 4. Chat Message Bubble at (793, 195) */}
                <g transform="translate(793, 195)">
                  <rect x="-9" y="-6" width="18" height="12" rx="2.5" fill="#ffffff" />
                  <circle cx="-4" cy="0" r="1.1" fill="#ea580c" />
                  <circle cx="0" cy="0" r="1.1" fill="#ea580c" />
                  <circle cx="4" cy="0" r="1.1" fill="#ea580c" />
                </g>

                {/* 5. Success Green Check Badge at (837, 195) */}
                <g transform="translate(837, 195)">
                  <circle cx="0" cy="0" r="9.5" fill="#22c55e" />
                  <path d="M -4 0 L -1 3 L 4.5 -2.5" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom CTA Action Strip */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 pb-2 border-t border-zinc-800/80">
        <div className="flex items-center space-x-3 text-xs text-zinc-400">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Real-time autonomous optimization & conversion intelligence</span>
        </div>
        <button
          onClick={onOpenConsultation}
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center space-x-2 shadow-lg shadow-white/5"
        >
          <span>Upgrade Your Marketing Engine</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
