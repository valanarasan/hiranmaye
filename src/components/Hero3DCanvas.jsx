import React, { useRef, useEffect } from 'react';

export default function Hero3DCanvas() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    const updateCanvasSize = () => {
      if (!canvas || !container) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      // Use container's bounding rect for reliable dimensions on any host
      const rect = container.getBoundingClientRect();
      width = Math.max(rect.width, 1);
      height = Math.max(rect.height, 1);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
    };

    updateCanvasSize();

    // Use ResizeObserver for robust resize handling (works in iframes/subpaths)
    let resizeObserver;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => updateCanvasSize());
      resizeObserver.observe(container);
    }
    window.addEventListener('resize', updateCanvasSize);

    // Mouse tracking
    let targetRotationX = 0;
    let targetRotationY = 0;
    let rotationX = 0;
    let rotationY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - width / 2;
      const y = e.clientY - rect.top - height / 2;
      const minDim = Math.min(width, height) || 400;
      targetRotationY = (x / minDim) * 0.6;
      targetRotationX = -(y / minDim) * 0.6;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Particle cloud
    const particleCount = 160;
    const particleData = [];

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.acos(2 * Math.random() - 1);
      const phi = 2 * Math.PI * Math.random();

      particleData.push({
        uX: Math.sin(theta) * Math.cos(phi),
        uY: Math.sin(theta) * Math.sin(phi),
        uZ: Math.cos(theta),
        size: Math.random() * 2 + 1.2,
        color: i % 5 === 0 ? '#A855F7' : i % 4 === 0 ? '#D946EF' : i % 3 === 0 ? '#8B5CF6' : i % 7 === 0 ? '#06B6D4' : '#6D28D9',
        pulseOffset: Math.random() * Math.PI * 2
      });
    }

    // Orbiting cubes
    const cubes = Array.from({ length: 5 }, (_, idx) => ({
      angle: (idx * Math.PI * 2) / 5,
      distanceRatio: 1.3,
      speed: 0.004 * (idx % 2 === 0 ? 1 : -1),
      size: 12 + Math.random() * 6,
      color: idx % 2 === 0 ? 'rgba(168, 85, 247, 0.5)' : 'rgba(6, 182, 212, 0.4)'
    }));

    let globalAngle = 0;

    const render = () => {
      if (width <= 0 || height <= 0) {
        updateCanvasSize();
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const minDim = Math.min(width, height);
      const radius = minDim * 0.35;

      rotationX += (targetRotationX - rotationX) * 0.04;
      rotationY += (targetRotationY - rotationY) * 0.04;

      globalAngle += 0.003;

      const cosX = Math.cos(rotationX);
      const sinX = Math.sin(rotationX);
      const cosY = Math.cos(rotationY + globalAngle);
      const sinY = Math.sin(rotationY + globalAngle);

      const centerX = width / 2;
      const centerY = height / 2;

      // Subtle center glow
      const centerGlow = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, radius * 1.5);
      centerGlow.addColorStop(0, 'rgba(168, 85, 247, 0.08)');
      centerGlow.addColorStop(0.5, 'rgba(139, 92, 246, 0.03)');
      centerGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = centerGlow;
      ctx.fillRect(0, 0, width, height);

      const fov = 900;
      const projected = [];

      for (let i = 0; i < particleData.length; i++) {
        const p = particleData[i];
        const px = p.uX * radius;
        const py = p.uY * radius;
        const pz = p.uZ * radius;

        let x1 = px * cosY - pz * sinY;
        let z1 = pz * cosY + px * sinY;
        let y2 = py * cosX - z1 * sinX;
        let z2 = z1 * cosX + py * sinX;

        const scale = fov / (fov + z2);
        const projX = centerX + x1 * scale;
        const projY = centerY + y2 * scale;
        const currentSize = p.size * scale * (1 + 0.2 * Math.sin(globalAngle * 3 + p.pulseOffset));

        projected.push({ x: projX, y: projY, z: z2, scale, color: p.color, size: currentSize });
      }

      projected.sort((a, b) => b.z - a.z);

      // Connection lines
      ctx.lineWidth = 0.5;
      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        if (p1.z > 200) continue;
        let connectionCount = 0;
        for (let j = i + 1; j < projected.length; j++) {
          const p2 = projected[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 60 && connectionCount < 2) {
            connectionCount++;
            const alpha = (1 - dist / 60) * 0.2 * Math.min(p1.scale, p2.scale);
            ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Particles
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const alpha = Math.max(0.2, Math.min(1, (p.scale - 0.4) / 0.8));
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = p.z < 0 ? 12 : 4;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.8, p.size), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Cubes
      cubes.forEach((cube) => {
        cube.angle += cube.speed;
        const cubeDistance = radius * cube.distanceRatio;
        const cx = Math.cos(cube.angle) * cubeDistance;
        const cz = Math.sin(cube.angle) * cubeDistance;
        const cy = Math.sin(cube.angle * 2) * (radius * 0.2);

        const x1 = cx * cosY - cz * sinY;
        const z1 = cz * cosY + cx * sinY;
        const y2 = cy * cosX - z1 * sinX;
        const z2 = z1 * cosX + cy * sinX;

        const scale = fov / (fov + z2);
        const px = centerX + x1 * scale;
        const py = centerY + y2 * scale;
        const sz = cube.size * scale;

        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(globalAngle + cube.angle);
        ctx.fillStyle = cube.color;
        ctx.shadowColor = cube.color;
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.rect(-sz / 2, -sz / 2, sz, sz);
        ctx.fill();
        ctx.restore();
      });

      ctx.restore();
      animationFrameId = requestAnimationFrame(render);
    };

    // Delay initial render slightly to let layout settle (fixes GitHub Pages)
    requestAnimationFrame(() => {
      updateCanvasSize();
      render();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener('resize', updateCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className="block cursor-grab active:cursor-grabbing"
      />
      {/* Orbiting rings */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-purple-500/20 animate-orbit">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50" />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-full border border-dashed border-fuchsia-500/15" style={{ animation: 'orbitRotate 35s linear infinite reverse' }} />
      </div>
    </div>
  );
}
