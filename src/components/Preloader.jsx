import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectorImg from "../assets/projector_loader.jpg";

export default function Preloader({ onComplete }) {
  const [isFinished, setIsFinished] = useState(false);
  const canvasRef = useRef(null);

  // Elegant loading duration with smooth auto-transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFinished(true);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isFinished) {
      const exitTimer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 700);
      return () => clearTimeout(exitTimer);
    }
  }, [isFinished, onComplete]);

  // Real-time floating dust motes in the light beam
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Particle pool in the light beam area
    const particles = Array.from({ length: 45 }, () => ({
      x: canvas.width * 0.48 + Math.random() * (canvas.width * 0.5),
      y: canvas.height * 0.38 + Math.random() * (canvas.height * 0.46),
      vx: (Math.random() - 0.2) * 0.5 + 0.35,
      vy: (Math.random() - 0.5) * 0.25,
      size: Math.random() * 2.2 + 0.6,
      alpha: Math.random() * 0.6 + 0.2,
      pulse: Math.random() * Math.PI,
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.035;

        if (p.x > canvas.width) p.x = canvas.width * 0.48;
        if (p.x < canvas.width * 0.47) p.x = canvas.width;
        if (p.y > canvas.height * 0.86) p.y = canvas.height * 0.38;
        if (p.y < canvas.height * 0.38) p.y = canvas.height * 0.86;

        const currentAlpha = p.alpha * (0.6 + 0.4 * Math.sin(p.pulse));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 245, 220, ${currentAlpha})`;
        ctx.shadowColor = "rgba(255, 230, 180, 0.6)";
        ctx.shadowBlur = 3;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <AnimatePresence>
      {!isFinished ? (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 0.99,
            transition: {
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          onClick={() => setIsFinished(true)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#050508] overflow-hidden select-none cursor-pointer"
          title="Click to enter"
        >
          {/* Ambient Theater Backlight Glow */}
          <div
            className="absolute w-[80vw] h-[60vh] max-w-4xl max-h-[500px] rounded-full pointer-events-none -z-10 blur-3xl opacity-35"
            style={{
              background:
                "radial-gradient(circle, rgba(245,158,11,0.22) 0%, rgba(225,29,72,0.1) 45%, transparent 75%)",
            }}
          />

          {/* Full Screen Contained Frame (Occupies screen fully without zooming/cropping) */}
          <div
            className="relative flex items-center justify-center overflow-hidden"
            style={{
              width: "min(100vw, calc(100vh * (1024 / 588)))",
              height: "min(100vh, calc(100vw * (588 / 1024)))",
              aspectRatio: "1024 / 588",
            }}
          >
            {/* Projector Image (Object Contain - 100% within the screen, zero crop) */}
            <img
              src={projectorImg}
              alt="Cinema Projector"
              className="w-full h-full object-contain object-center brightness-95 contrast-105 pointer-events-none"
            />

            {/* Soft Edge Vignettes to blend cleanly with deep obsidian borders */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/50 via-transparent to-[#050508]/40 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050508]/40 via-transparent to-[#050508]/30 pointer-events-none" />

            {/* Rotating Film Spool Overlay (Locked to physical reel at 50.4%, 21.3%) */}
            <div
              className="absolute pointer-events-none z-10"
              style={{
                left: "50.4%",
                top: "21.3%",
                transform: "translate(-50%, -50%)",
                width: "22.5%",
                aspectRatio: "1/1",
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
                className="w-full h-full rounded-full border border-amber-300/35 flex items-center justify-center relative shadow-[0_0_14px_rgba(245,158,11,0.25)]"
              >
                <div className="absolute w-full h-[1.5px] bg-gradient-to-r from-transparent via-amber-200/50 to-transparent" />
                <div className="absolute w-[1.5px] h-full bg-gradient-to-b from-transparent via-amber-200/50 to-transparent" />
                <div className="absolute w-full h-[1.5px] bg-gradient-to-r from-transparent via-amber-200/40 to-transparent rotate-45" />
                <div className="absolute w-full h-[1.5px] bg-gradient-to-r from-transparent via-amber-200/40 to-transparent -rotate-45" />
                <div className="w-[18%] h-[18%] rounded-full bg-gradient-to-br from-amber-400 to-amber-600 border border-amber-200/70 shadow-sm" />
              </motion.div>
            </div>

            {/* Volumetric Light Beam Flicker (24 FPS) */}
            <motion.div
              animate={{
                opacity: [0.75, 0.98, 0.72, 1.0, 0.8, 0.92],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.16,
                ease: "linear",
              }}
              className="absolute inset-0 pointer-events-none z-10 mix-blend-screen"
              style={{
                background: `radial-gradient(ellipse 65% 55% at 52% 60%, rgba(255, 245, 220, 0.28) 0%, rgba(200, 230, 255, 0.12) 42%, transparent 75%)`,
              }}
            />

            {/* Canvas for Floating Projector Dust Particles */}
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full pointer-events-none z-15"
            />

            {/* Subtle Lens Flare Shimmer */}
            <div
              className="absolute pointer-events-none z-20"
              style={{
                left: "49.2%",
                top: "59.2%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="w-8 h-8 rounded-full bg-amber-200/45 blur-md animate-pulse" />
            </div>
          </div>

          {/* Minimalist Bottom Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.28em] text-white/40">
              CLICK TO ENTER
            </span>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
