import React, { useRef, useState } from 'react';

export default function Tilt3DCard({ children, className = '' }) {
  const cardRef = useRef(null);
  const [glareStyle, setGlareStyle] = useState({ opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setGlareStyle({
      opacity: 0.25,
      background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 65%)`,
      transition: 'opacity 0.2s ease-out'
    });
  };

  const handleMouseLeave = () => {
    setGlareStyle({
      opacity: 0,
      transition: 'opacity 0.5s ease-out'
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl ${className}`}
    >
      {/* Specular Glare Highlight */}
      <div
        className="pointer-events-none absolute inset-0 z-20 rounded-2xl"
        style={glareStyle}
      />
      {children}
    </div>
  );
}
