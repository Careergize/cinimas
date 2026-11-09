import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * ProjectorBeamLight Component
 * Photorealistic living cinematic light beam overlay:
 * 1. Volumetric conical golden beam emanating from the projector lens
 * 2. 24fps optical film shutter flicker & ambient breathing
 * 3. Hot radiant white-gold filament core at the lens aperture
 * 4. Realistic microscopic cinema dust motes floating and glistening in the light cone
 */
export default function ProjectorBeamLight() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [geom, setGeom] = useState(null);

  // Compute exact coordinates of projector lens & conical beam based on container aspect ratio
  useEffect(() => {
    const updateGeometry = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.offsetWidth;
      const h = containerRef.current.offsetHeight;
      if (w === 0 || h === 0) return;

      const isMobile = w < 768;
      const imgW = 1920;
      const imgH = 1080;
      const AR = imgW / imgH;

      // Natural measured lens position in projector_hero_wide.jpg
      const lensNormX = 0.636;
      const lensNormY = 0.574;

      // Object position matching Hero.jsx
      const objPos = isMobile ? { x: 0.62, y: 0.36 } : { x: 0.5, y: 0.5 };

      let drawW, drawH, drawX, drawY;
      if (w / h > AR) {
        drawW = w;
        drawH = w / AR;
        drawX = 0;
        drawY = (h - drawH) * objPos.y;
      } else {
        drawH = h;
        drawW = h * AR;
        drawX = (w - drawW) * objPos.x;
        drawY = (h - drawH) * objPos.y;
      }

      const lensX = drawX + drawW * lensNormX;
      const lensY = drawY + drawH * lensNormY;
      const lensRadius = Math.max(16, drawW * 0.016);

      // Beam spreads outward to the left across the theater canvas
      const leftX = isMobile ? -40 : Math.max(-120, lensX - drawW * 0.48);
      const spread = drawW * (isMobile ? 0.23 : 0.19);
      const topY = lensY - spread;
      const bottomY = lensY + spread * 0.72;

      setGeom({
        w,
        h,
        isMobile,
        lensX,
        lensY,
        lensRadius,
        leftX,
        topY,
        bottomY,
      });
    };

    updateGeometry();
    window.addEventListener("resize", updateGeometry);
    return () => window.removeEventListener("resize", updateGeometry);
  }, []);

  // Floating cinema dust motes canvas simulation in the light beam
  useEffect(() => {
    if (!geom) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = geom.w * dpr;
    canvas.height = geom.h * dpr;
    ctx.scale(dpr, dpr);

    const { lensX, lensY, leftX, topY, bottomY } = geom;

    // Beam bounding box for particle generation
    const minX = Math.max(0, leftX);
    const maxX = lensX + 30;
    const minY = Math.max(0, topY - 40);
    const maxY = Math.min(geom.h, bottomY + 40);

    const particleCount = geom.isMobile ? 32 : 55;

    const particles = Array.from({ length: particleCount }, () => ({
      x: minX + Math.random() * (maxX - minX),
      y: minY + Math.random() * (maxY - minY),
      vx: -(Math.random() * 0.45 + 0.25), // gentle drift left into room
      vy: (Math.random() - 0.5) * 0.2, // subtle organic vertical float
      size: Math.random() * 2.2 + 0.7,
      baseAlpha: Math.random() * 0.5 + 0.3,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.04 + 0.02,
    }));

    let animationFrameId;

    const render = () => {
      ctx.clearRect(0, 0, geom.w, geom.h);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy + Math.sin(p.pulse) * 0.15;
        p.pulse += p.pulseSpeed;

        // Wrap around within beam envelope
        if (p.x < minX - 20) p.x = maxX;
        if (p.x > maxX + 20) p.x = minX;
        if (p.y < minY) p.y = maxY;
        if (p.y > maxY) p.y = minY;

        // Optical check: is particle inside the volumetric beam cone?
        let inBeamFactor = 0;
        if (p.x <= lensX && p.x >= leftX) {
          const t = (p.x - lensX) / (leftX - lensX);
          const curTop = lensY + (topY - lensY) * t;
          const curBot = lensY + (bottomY - lensY) * t;
          if (p.y >= curTop && p.y <= curBot) {
            const midY = (curTop + curBot) / 2;
            const halfH = (curBot - curTop) / 2;
            const distNorm = Math.abs(p.y - midY) / halfH;
            inBeamFactor = Math.max(0, 1 - distNorm);
          }
        }

        // Only motes caught in the beam glow brightly with golden sparkle
        if (inBeamFactor > 0.05) {
          const shimmer = 0.7 + 0.3 * Math.sin(p.pulse * 1.5);
          const finalAlpha = Math.min(1, p.baseAlpha * inBeamFactor * 1.8 * shimmer);

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          // Warm golden tungsten sparkle
          ctx.fillStyle = `rgba(255, 245, 210, ${finalAlpha})`;
          ctx.shadowColor = "rgba(245, 158, 11, 0.75)";
          ctx.shadowBlur = 4;
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [geom]);

  if (!geom) {
    return <div ref={containerRef} className="absolute inset-0 pointer-events-none" />;
  }

  const { lensX, lensY, lensRadius, leftX, topY, bottomY } = geom;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden select-none"
    >
      {/* 1. Animated Conical Volumetric Light Beam with 24fps Film Shutter Flutter */}
      <motion.div
        animate={{
          opacity: [0.78, 0.94, 0.82, 1.0, 0.86, 0.95, 0.79],
          scaleY: [0.99, 1.015, 0.992, 1.02, 0.988, 1.01, 0.99],
        }}
        transition={{
          duration: 2.3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 mix-blend-screen pointer-events-none"
        style={{ transformOrigin: `${lensX}px ${lensY}px` }}
      >
        <svg
          width={geom.w}
          height={geom.h}
          viewBox={`0 0 ${geom.w} ${geom.h}`}
          className="absolute inset-0 w-full h-full overflow-visible"
        >
          <defs>
            {/* Cinematic Golden Beam Linear Gradient */}
            <linearGradient
              id="cinematicGoldBeam"
              x1={`${lensX}px`}
              y1={`${lensY}px`}
              x2={`${leftX}px`}
              y2={`${lensY}px`}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#fffbeb" stopOpacity="0.95" />
              <stop offset="12%" stopColor="#fef08a" stopOpacity="0.7" />
              <stop offset="28%" stopColor="#f59e0b" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#d97706" stopOpacity="0.22" />
              <stop offset="85%" stopColor="#b45309" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </linearGradient>

            {/* Atmosphere Gaussian Blur Filter for Natural Fog Diffusion */}
            <filter id="cinematicBeamDiffusion" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation={geom.isMobile ? "6" : "10"} />
            </filter>
          </defs>

          {/* Primary Volumetric Golden Light Cone */}
          <polygon
            points={`
              ${lensX},${lensY - lensRadius * 0.85}
              ${leftX},${topY}
              ${leftX},${bottomY}
              ${lensX},${lensY + lensRadius * 0.85}
            `}
            fill="url(#cinematicGoldBeam)"
            filter="url(#cinematicBeamDiffusion)"
          />

          {/* Inner Intense Golden Core Ray */}
          <polygon
            points={`
              ${lensX},${lensY - lensRadius * 0.4}
              ${leftX},${lensY - (lensY - topY) * 0.45}
              ${leftX},${lensY + (bottomY - lensY) * 0.45}
              ${lensX},${lensY + lensRadius * 0.4}
            `}
            fill="url(#cinematicGoldBeam)"
            opacity="0.65"
            filter="url(#cinematicBeamDiffusion)"
          />
        </svg>
      </motion.div>

      {/* 2. Radiant Golden Lens Arc Core (Directly centered at lens aperture) */}
      <div
        style={{
          position: "absolute",
          left: `${lensX}px`,
          top: `${lensY}px`,
          transform: "translate(-50%, -50%)",
        }}
        className="pointer-events-none mix-blend-screen"
      >
        {/* Soft Ambient Golden Halo Bloom */}
        <motion.div
          animate={{
            scale: [0.94, 1.1, 0.96, 1.15, 0.95],
            opacity: [0.55, 0.85, 0.6, 0.9, 0.55],
          }}
          transition={{
            duration: 1.9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-40 h-40 sm:w-56 sm:h-56 -ml-20 -mt-20 sm:-ml-28 sm:-mt-28 rounded-full bg-gradient-to-r from-amber-400/40 via-yellow-300/30 to-amber-500/20 blur-2xl"
        />

        {/* Hot Concentrated Lens Glass Flare */}
        <motion.div
          animate={{
            scale: [0.96, 1.05, 0.97, 1.08, 0.96],
            opacity: [0.85, 1.0, 0.88, 1.0, 0.85],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: `${lensRadius * 2.2}px`,
            height: `${lensRadius * 2.2}px`,
            marginLeft: `-${lensRadius * 1.1}px`,
            marginTop: `-${lensRadius * 1.1}px`,
            background:
              "radial-gradient(circle, rgba(255,255,255,0.98) 0%, rgba(254,240,138,0.9) 30%, rgba(245,158,11,0.65) 60%, transparent 100%)",
          }}
          className="rounded-full blur-[2px] shadow-[0_0_25px_rgba(251,191,36,0.9)]"
        />
      </div>

      {/* 3. Floating Cinema Dust Motes Canvas catching the golden beam */}
      <canvas
        ref={canvasRef}
        style={{ width: `${geom.w}px`, height: `${geom.h}px` }}
        className="absolute inset-0 pointer-events-none mix-blend-screen"
      />
    </div>
  );
}

