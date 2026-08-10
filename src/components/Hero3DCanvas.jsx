import React, { useRef, useEffect } from 'react';

export default function Hero3DCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;

    const updateCanvasSize = () => {
      if (!canvas) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
    };

    updateCanvasSize();

    const handleResize = () => {
      updateCanvasSize();
    };
    window.addEventListener('resize', handleResize);

    // Mouse tracking with normalized aspect ratio
    let targetRotationX = 0;
    let targetRotationY = 0;
    let rotationX = 0;
    let rotationY = 0;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left - width / 2;
      const y = e.clientY - rect.top - height / 2;
      const minDim = Math.min(width, height) || 400;
      targetRotationY = (x / minDim) * 0.8;
      targetRotationX = -(y / minDim) * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Generate 3D Spherical Particle Cloud
    const particleCount = 130;
    // Store unit sphere vectors (r = 1) so radius scales dynamically with canvas size
    const particleData = [];

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.acos(2 * Math.random() - 1);
      const phi = 2 * Math.PI * Math.random();

      // Unit sphere coordinates (norm = 1)
      const uX = Math.sin(theta) * Math.cos(phi);
      const uY = Math.sin(theta) * Math.sin(phi);
      const uZ = Math.cos(theta);

      particleData.push({
        uX,
        uY,
        uZ,
        size: Math.random() * 2.2 + 1.6,
        color: i % 4 === 0 ? '#C026D3' : i % 3 === 0 ? '#86198F' : i % 5 === 0 ? '#0EA5E9' : '#E879F9',
        pulseSpeed: Math.random() * 0.03 + 0.01,
        pulseOffset: Math.random() * Math.PI * 2
      });
    }

    // 3D Floating Geometry Cubes
    const cubes = Array.from({ length: 6 }, (_, idx) => ({
      angle: (idx * Math.PI * 2) / 6,
      distanceRatio: 1.3,
      speed: 0.005 * (idx % 2 === 0 ? 1 : -1),
      size: 16 + Math.random() * 8,
      color: idx % 2 === 0 ? 'rgba(192, 38, 211, 0.65)' : 'rgba(14, 165, 233, 0.65)'
    }));

    let globalAngle = 0;

    const render = () => {
      // Clear with HiDPI scale reset
      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const minDim = Math.min(width, height);
      // Dynamic sphere radius locked to canvas minimum dimension
      const radius = minDim * 0.35;

      // Smooth mouse rotation interpolation
      rotationX += (targetRotationX - rotationX) * 0.05;
      rotationY += (targetRotationY - rotationY) * 0.05;

      globalAngle += 0.004;

      const cosX = Math.cos(rotationX);
      const sinX = Math.sin(rotationX);
      const cosY = Math.cos(rotationY + globalAngle);
      const sinY = Math.sin(rotationY + globalAngle);

      const centerX = width / 2;
      const centerY = height / 2;

      // Ambient Center Light Glow
      const centerGlow = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, radius * 1.4);
      centerGlow.addColorStop(0, 'rgba(232, 121, 249, 0.18)');
      centerGlow.addColorStop(0.5, 'rgba(192, 38, 211, 0.08)');
      centerGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = centerGlow;
      ctx.fillRect(0, 0, width, height);

      // Higher FOV (900px) eliminates wide-angle perspective foreshortening distortion
      const fov = 900;
      const projected = [];

      for (let i = 0; i < particleData.length; i++) {
        const p = particleData[i];

        // Scale unit vector by current dynamic radius
        const px = p.uX * radius;
        const py = p.uY * radius;
        const pz = p.uZ * radius;

        // Rotate Y
        let x1 = px * cosY - pz * sinY;
        let z1 = pz * cosY + px * sinY;

        // Rotate X
        let y2 = py * cosX - z1 * sinX;
        let z2 = z1 * cosX + py * sinX;

        // Perspective Projection
        const scale = fov / (fov + z2);
        const projX = centerX + x1 * scale;
        const projY = centerY + y2 * scale;

        const currentSize = p.size * scale * (1 + 0.25 * Math.sin(globalAngle * 3 + p.pulseOffset));

        projected.push({
          x: projX,
          y: projY,
          z: z2,
          scale,
          color: p.color,
          size: currentSize
        });
      }

      // Sort by depth for correct 3D z-buffering
      projected.sort((a, b) => b.z - a.z);

      // Draw 3D Connection Lines between nearby nodes
      ctx.lineWidth = 0.8;
      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        if (p1.z > 200) continue;

        let connectionCount = 0;
        for (let j = i + 1; j < projected.length; j++) {
          const p2 = projected[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 70 && connectionCount < 3) {
            connectionCount++;
            const alpha = (1 - dist / 70) * 0.3 * Math.min(p1.scale, p2.scale);
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
        const alpha = Math.max(0.3, Math.min(1, (p.scale - 0.4) / 0.8));

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = p.z < 0 ? 10 : 3;

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(1, p.size), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Render 3D Orbiting Growth Cubes
      cubes.forEach((cube) => {
        cube.angle += cube.speed;
        const cubeDistance = radius * cube.distanceRatio;
        const cx = Math.cos(cube.angle) * cubeDistance;
        const cz = Math.sin(cube.angle) * cubeDistance;
        const cy = Math.sin(cube.angle * 2) * (radius * 0.25);

        // Transform
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
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.lineWidth = 1.5;
        ctx.shadowColor = cube.color;
        ctx.shadowBlur = 12;

        ctx.beginPath();
        ctx.rect(-sz / 2, -sz / 2, sz, sz);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      });

      ctx.restore();
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
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full absolute inset-0 cursor-grab active:cursor-grabbing block"
      />
      {/* Subtle Central Brand Ring Overlay */}
      <div className="pointer-events-none absolute w-56 h-56 sm:w-72 sm:h-72 aspect-square rounded-full border border-purple-300/40 animate-orbit flex items-center justify-center">
        <div className="w-40 h-40 sm:w-52 sm:h-52 aspect-square rounded-full border border-dashed border-fuchsia-400/30" />
      </div>
    </div>
  );
}
