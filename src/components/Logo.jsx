import React from 'react';

/**
 * Hiranmaye Lotus Icon
 * Vector line-art matching the brand identity emblem
 */
export function LotusIcon({ className = "w-10 h-10", color = "gold", strokeWidth = 2 }) {
  const gradientId = "lotusGoldGrad";

  return (
    <svg
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="50%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
      </defs>

      <g
        stroke={color === "gold" ? `url(#${gradientId})` : color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Center Upright Petal */}
        <path d="M 50 62 C 43 47, 43 27, 50 16 C 57 27, 57 47, 50 62 Z" />

        {/* Inner Left Petal */}
        <path d="M 50 62 C 38 52, 34 32, 44 20 C 49 32, 49 48, 50 62 Z" />

        {/* Inner Right Petal */}
        <path d="M 50 62 C 62 52, 66 32, 56 20 C 51 32, 51 48, 50 62 Z" />

        {/* Outer Left Petal */}
        <path d="M 50 62 C 30 57, 22 41, 33 27 C 39 39, 45 52, 50 62 Z" />

        {/* Outer Right Petal */}
        <path d="M 50 62 C 70 57, 78 41, 67 27 C 61 39, 55 52, 50 62 Z" />

        {/* Left Wing Petal */}
        <path d="M 18 42 C 22 40, 34 40, 42 47" />

        {/* Right Wing Petal */}
        <path d="M 82 42 C 78 40, 66 40, 58 47" />

        {/* Bottom Cradle Arc */}
        <path d="M 18 42 C 22 58, 36 67, 50 67 C 64 67, 78 58, 82 42" />
      </g>
    </svg>
  );
}

/**
 * Full Brand Logo Component
 * Renders the official Hiranmaye Digital lotus symbol and typography.
 */
export default function Logo({
  variant = 'horizontal', // 'horizontal' | 'stacked' | 'icon' | 'badge'
  theme = 'dark-text',    // 'dark-text' | 'light-text' | 'gold'
  showTagline = true,
  className = '',
  iconSize = 'w-9 h-9'
}) {
  const isLight = theme === 'light-text';

  const textColor = isLight ? 'text-white' : 'text-zinc-950';
  const taglineColor = isLight ? 'text-amber-300/90' : 'text-amber-600';

  if (variant === 'icon') {
    return <LotusIcon className={iconSize} color="gold" />;
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        <div className="relative mb-2 transition-transform duration-300 hover:scale-105">
          <LotusIcon className="w-16 h-12" color="gold" />
        </div>
        <span className={`text-2xl font-brand-serif font-bold tracking-tight ${textColor}`}>
          Hiranmaye Digital
        </span>
        {showTagline && (
          <span className={`font-brand-script text-lg tracking-wide mt-0.5 ${taglineColor}`}>
            Strategy drives growth
          </span>
        )}
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div className={`flex flex-col items-center text-center p-6 rounded-2xl bg-[#0a1128] border border-amber-500/20 shadow-2xl ${className}`}>
        <LotusIcon className="w-16 h-12 mb-3" color="gold" />
        <span className="text-xl font-brand-serif font-bold tracking-tight text-white">
          Hiranmaye Digital
        </span>
        {showTagline && (
          <span className="font-brand-script text-base tracking-wide mt-1 text-amber-300/90">
            Strategy drives growth
          </span>
        )}
      </div>
    );
  }

  // Horizontal layout (Navbar & Footer default)
  return (
    <div className={`flex items-center space-x-2.5 sm:space-x-3 select-none ${className}`}>
      <div className="relative flex-shrink-0 transition-transform duration-300 hover:scale-105">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-amber-600/5 border border-amber-500/25 flex items-center justify-center p-1 shadow-sm">
          <LotusIcon className="w-7 h-7 sm:w-8 sm:h-8" color="gold" />
        </div>
      </div>

      <div className="flex flex-col justify-center leading-none min-w-0">
        <span className={`text-base sm:text-lg font-brand-serif font-bold tracking-tight ${textColor} transition-colors truncate`}>
          Hiranmaye Digital
        </span>
        {showTagline && (
          <span className={`font-brand-script text-xs sm:text-sm tracking-wide mt-0.5 ${taglineColor} truncate`}>
            Strategy drives growth
          </span>
        )}
      </div>
    </div>
  );
}
