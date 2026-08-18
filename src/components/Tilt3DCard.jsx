import React, { useRef } from 'react';

export default function Tilt3DCard({ children, className = '' }) {
  const glareRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!glareRef.current) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    glareRef.current.style.opacity = '0.35';
    glareRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(234, 88, 12, 0.25) 0%, rgba(234, 88, 12, 0) 65%)`;
  };

  const handleMouseLeave = () => {
    if (!glareRef.current) return;
    glareRef.current.style.opacity = '0';
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl ${className}`}
    >
      {/* Specular Glare Highlight */}
      <div
        ref={glareRef}
        className="pointer-events-none absolute inset-0 z-20 rounded-2xl transition-opacity duration-300 opacity-0"
      />
      {children}
    </div>
  );
}
