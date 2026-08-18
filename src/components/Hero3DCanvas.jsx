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
    let containerLeft = 0;
    let containerTop = 0;

    const updateCanvasSize = () => {
      if (!canvas || !container) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = container.getBoundingClientRect();
      width = Math.max(rect.width, 1);
      height = Math.max(rect.height, 1);
      containerLeft = rect.left + window.scrollX;
      containerTop = rect.top + window.scrollY;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
    };

    updateCanvasSize();

    let resizeObserver;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => updateCanvasSize());
      resizeObserver.observe(container);
    }
    window.addEventListener('resize', updateCanvasSize, { passive: true });
    window.addEventListener('scroll', updateCanvasSize, { passive: true });

    // Mouse tracking
    let targetRotationX = 0;
    let targetRotationY = 0;
    let rotationX = 0;
    let rotationY = 0;

    const handleMouseMove = (e) => {
      const curLeft = containerLeft - window.scrollX;
      const curTop = containerTop - window.scrollY;
      const x = e.clientX - curLeft - width / 2;
      const y = e.clientY - curTop - height / 2;
      const minDim = Math.min(width, height) || 400;
      targetRotationY = Math.max(-0.6, Math.min(0.6, (x / minDim) * 0.6));
      targetRotationX = Math.max(-0.6, Math.min(0.6, -(y / minDim) * 0.6));
    };

    const handleMouseLeave = () => {
      targetRotationX = 0;
      targetRotationY = 0;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Particle cloud
    const particleCount = 140;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.acos(2 * Math.random() - 1);
      const phi = 2 * Math.PI * Math.random();
      const isOrange = i % 3 === 0;
      const isCharcoal = i % 3 === 1;

      particles.push({
        uX: Math.sin(theta) * Math.cos(phi),
        uY: Math.sin(theta) * Math.sin(phi),
        uZ: Math.cos(theta),
        size: Math.random() * 2 + 1.2,
        color: isOrange ? '#EA580C' : isCharcoal ? '#18181B' : '#F97316',
        glowColor: isOrange ? 'rgba(234, 88, 12, 0.3)' : isCharcoal ? 'rgba(24, 24, 27, 0.15)' : 'rgba(249, 115, 22, 0.25)',
        pulseOffset: Math.random() * Math.PI * 2,
        x: 0,
        y: 0,
        z: 0,
        scale: 1,
        currentSize: 1
      });
    }

    // Orbiting cubes
    const cubes = Array.from({ length: 5 }, (_, idx) => ({
      angle: (idx * Math.PI * 2) / 5,
      distanceRatio: 1.3,
      speed: 0.004 * (idx % 2 === 0 ? 1 : -1),
      size: 12 + (idx % 3) * 3,
      color: idx % 2 === 0 ? 'rgba(234, 88, 12, 0.5)' : 'rgba(24, 24, 27, 0.4)',
      borderColor: idx % 2 === 0 ? 'rgba(234, 88, 12, 0.8)' : 'rgba(24, 24, 27, 0.6)'
    }));

    let globalAngle = 0;
    let lastTime = performance.now();

    const render = (now) => {
      const delta = Math.min(((now || performance.now()) - lastTime) / 1000, 0.1);
      lastTime = now || performance.now();

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

      // Snappy, frame-rate independent rotation lerp
      const lerpFactor = 1 - Math.exp(-delta * 7);
      rotationX += (targetRotationX - rotationX) * lerpFactor;
      rotationY += (targetRotationY - rotationY) * lerpFactor;

      globalAngle += 0.003;

      const cosX = Math.cos(rotationX);
      const sinX = Math.sin(rotationX);
      const cosY = Math.cos(rotationY + globalAngle);
      const sinY = Math.sin(rotationY + globalAngle);

      const centerX = width / 2;
      const centerY = height / 2;

      // Subtle center glow
      const centerGlow = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, radius * 1.5);
      centerGlow.addColorStop(0, 'rgba(234, 88, 12, 0.05)');
      centerGlow.addColorStop(0.5, 'rgba(249, 115, 22, 0.01)');
      centerGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = centerGlow;
      ctx.fillRect(0, 0, width, height);

      const fov = 900;

      // Project particles in-place (no garbage collection overhead)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const px = p.uX * radius;
        const py = p.uY * radius;
        const pz = p.uZ * radius;

        const x1 = px * cosY - pz * sinY;
        const z1 = pz * cosY + px * sinY;
        const y2 = py * cosX - z1 * sinX;
        const z2 = z1 * cosX + py * sinX;

        const scale = fov / (fov + z2);
        p.x = centerX + x1 * scale;
        p.y = centerY + y2 * scale;
        p.z = z2;
        p.scale = scale;
        p.currentSize = p.size * scale * (1 + 0.2 * Math.sin(globalAngle * 3 + p.pulseOffset));
      }

      // Sort particles by depth for correct layering
      particles.sort((a, b) => b.z - a.z);

      // Batched Connection Lines (Single stroke call for massive GPU performance)
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = 'rgba(234, 88, 12, 0.25)';
      ctx.beginPath();
      const maxDistSq = 80 * 80;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        if (p1.z > 200) continue;
        let connections = 0;
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < maxDistSq) {
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            connections++;
            if (connections >= 3) break;
          }
        }
      }
      ctx.stroke();

      // High-performance particle rendering with vibrant glow effect without expensive shadowBlur
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const alpha = Math.max(0.2, Math.min(1, (p.scale - 0.4) / 0.8));
        const r = Math.max(0.8, p.currentSize);

        ctx.globalAlpha = alpha * 0.4;
        ctx.fillStyle = p.glowColor;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 2.2, 0, Math.PI * 2);
        ctx.fill();

        ctx.globalAlpha = alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Orbiting Cubes
      for (let i = 0; i < cubes.length; i++) {
        const cube = cubes[i];
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
        ctx.globalAlpha = Math.max(0.3, Math.min(0.9, scale));
        ctx.fillStyle = cube.color;
        ctx.strokeStyle = cube.borderColor;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.rect(-sz / 2, -sz / 2, sz, sz);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      }

      ctx.restore();
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame((time) => {
      lastTime = time;
      updateCanvasSize();
      render(time);
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener('resize', updateCanvasSize);
      window.removeEventListener('scroll', updateCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <canvas
        ref={canvasRef}
        className="block"
      />
      {/* Orbiting rings */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-orange-500/10 animate-orbit">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-orange-500 shadow-lg shadow-orange-500/40" />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-full border border-dashed border-orange-500/5" style={{ animation: 'orbitRotate 35s linear infinite reverse' }} />
      </div>
    </div>
  );
}
