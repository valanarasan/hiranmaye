import React, { useRef, useEffect } from 'react';

export default function Hero3DCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse tracking for interactive 3D rotation
    let targetRotationX = 0;
    let targetRotationY = 0;
    let rotationX = 0;
    let rotationY = 0;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left - width / 2;
      const y = e.clientY - rect.top - height / 2;
      targetRotationY = (x / width) * 1.5;
      targetRotationX = -(y / height) * 1.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Generate 3D Sphere Particles
    const particleCount = 140;
    const radius = Math.min(width, height) * 0.38;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      // Uniform spherical distribution
      const theta = Math.acos(2 * Math.random() - 1);
      const phi = 2 * Math.PI * Math.random();

      const x = radius * Math.sin(theta) * Math.cos(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(theta);

      particles.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        size: Math.random() * 2.5 + 1.5,
        color: i % 4 === 0 ? '#C026D3' : i % 3 === 0 ? '#86198F' : i % 5 === 0 ? '#0EA5E9' : '#E879F9',
        pulseSpeed: Math.random() * 0.03 + 0.01,
        pulseOffset: Math.random() * Math.PI * 2
      });
    }

    // 3D Floating Geometry Elements
    const cubes = Array.from({ length: 6 }, (_, idx) => ({
      angle: (idx * Math.PI * 2) / 6,
      distance: radius * 1.35,
      speed: 0.005 * (idx % 2 === 0 ? 1 : -1),
      size: 18 + Math.random() * 10,
      color: idx % 2 === 0 ? 'rgba(192, 38, 211, 0.6)' : 'rgba(14, 165, 233, 0.6)'
    }));

    let globalAngle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      rotationX += (targetRotationX - rotationX) * 0.05;
      rotationY += (targetRotationY - rotationY) * 0.05;

      globalAngle += 0.004;

      const cosX = Math.cos(rotationX);
      const sinX = Math.sin(rotationX);
      const cosY = Math.cos(rotationY + globalAngle);
      const sinY = Math.sin(rotationY + globalAngle);

      const centerX = width / 2;
      const centerY = height / 2;

      // Render Ambient Center Light Glow
      const centerGlow = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, radius * 1.4);
      centerGlow.addColorStop(0, 'rgba(232, 121, 249, 0.18)');
      centerGlow.addColorStop(0.5, 'rgba(192, 38, 211, 0.08)');
      centerGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = centerGlow;
      ctx.fillRect(0, 0, width, height);

      // Project & Transform Particles
      const projected = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Rotate Y
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;

        // Rotate X
        let y2 = p.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.y * sinX;

        // Perspective Projection
        const fov = 450;
        const scale = fov / (fov + z2);
        const projX = centerX + x1 * scale;
        const projY = centerY + y2 * scale;

        const currentSize = p.size * scale * (1 + 0.3 * Math.sin(globalAngle * 3 + p.pulseOffset));

        projected.push({
          x: projX,
          y: projY,
          z: z2,
          scale,
          color: p.color,
          size: currentSize
        });
      }

      // Sort by depth (z-index back-to-front rendering)
      projected.sort((a, b) => b.z - a.z);

      // Draw 3D Connection Lines between nearby nodes
      ctx.lineWidth = 0.8;
      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        if (p1.z > 250) continue; // skip far background lines

        let connectionCount = 0;
        for (let j = i + 1; j < projected.length; j++) {
          const p2 = projected[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 75 && connectionCount < 3) {
            connectionCount++;
            const alpha = (1 - dist / 75) * 0.35 * Math.min(p1.scale, p2.scale);
            const lineGrad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            lineGrad.addColorStop(0, `rgba(192, 38, 211, ${alpha})`);
            lineGrad.addColorStop(1, `rgba(14, 165, 233, ${alpha})`);

            ctx.strokeStyle = lineGrad;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw Particle Nodes
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const alpha = Math.max(0.2, Math.min(1, (p.scale - 0.4) / 0.8));

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = p.z < 0 ? 12 : 4;

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(1, p.size), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Render 3D Orbiting Growth Cubes
      cubes.forEach((cube) => {
        cube.angle += cube.speed;
        const cx = Math.cos(cube.angle) * cube.distance;
        const cz = Math.sin(cube.angle) * cube.distance;
        const cy = Math.sin(cube.angle * 2) * 40;

        // Transform
        const x1 = cx * cosY - cz * sinY;
        const z1 = cz * cosY + cx * sinY;
        const y2 = cy * cosX - z1 * sinX;
        const z2 = z1 * cosX + cy * sinX;

        const scale = 450 / (450 + z2);
        const px = centerX + x1 * scale;
        const py = centerY + y2 * scale;
        const sz = cube.size * scale;

        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(globalAngle + cube.angle);
        ctx.fillStyle = cube.color;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.lineWidth = 1.5;
        ctx.shadowColor = cube.color;
        ctx.shadowBlur = 15;

        ctx.beginPath();
        ctx.rect(-sz / 2, -sz / 2, sz, sz);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[440px] flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full absolute inset-0 cursor-grab active:cursor-grabbing"
      />
      {/* Subtle Central Brand Ring Overlay */}
      <div className="pointer-events-none absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-purple-300/40 animate-orbit flex items-center justify-center">
        <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-full border border-dashed border-fuchsia-400/30" />
      </div>
    </div>
  );
}
