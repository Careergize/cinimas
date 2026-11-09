import React, { useState, useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import gciCameraMonogram from "../assets/gci_camera_monogram.png";

/**
 * Preloader Component
 * Engineered for maximum fluid smoothness (60fps/120fps hardware-accelerated):
 * 1. Deep matte obsidian canvas with warm ambient edge halo
 * 2. Logo emerges with smooth lens focus scale (0.75 -> 1.0)
 * 3. Fluid layout expansion into "GCI" letter-by-letter typography with zero jump
 * 4. RAF-interpolated digital odometer counter (0% -> 100%)
 * 5. Signature cubic-bezier luxury curtain slide-up reveal
 */
export default function Preloader({ onComplete }) {
  const [phase, setPhase] = useState("emblem"); // 'emblem' | 'letters' | 'ready' | 'exit'
  const [progress, setProgress] = useState(0);

  // Smooth RAF-driven Motion Value for percentage counter
  const progressMotion = useMotionValue(0);

  // Skip handler
  const handleSkip = () => {
    setPhase("exit");
    setTimeout(() => {
      onComplete?.();
    }, 550);
  };

  useEffect(() => {
    // Keyboard skip listener
    const handleKeyDown = (e) => {
      if (e.key === "Escape" || e.key === " " || e.key === "Enter") {
        handleSkip();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    // 1. Smooth RAF Counter animation (0% -> 100% over 2.05s with luxury cubic-bezier)
    const counterAnimation = animate(progressMotion, 100, {
      duration: 2.05,
      ease: [0.25, 1, 0.45, 1],
      onUpdate: (latest) => {
        setProgress(Math.round(latest));
      },
    });

    // 2. Fluid transition from solo emblem to full "GCI" brand lockup at 550ms
    const timerLetters = setTimeout(() => {
      setPhase("letters");
    }, 550);

    // 3. Ready hold at 2150ms
    const timerReady = setTimeout(() => {
      setPhase("ready");
    }, 2150);

    // 4. Trigger luxury curtain lift at 2450ms
    const timerExit = setTimeout(() => {
      setPhase("exit");
    }, 2450);

    // 5. Unmount after curtain completely clears viewport (approx 3350ms)
    const timerFinish = setTimeout(() => {
      onComplete?.();
    }, 3350);

    return () => {
      counterAnimation.stop();
      clearTimeout(timerLetters);
      clearTimeout(timerReady);
      clearTimeout(timerExit);
      clearTimeout(timerFinish);
    };
  }, [onComplete, progressMotion]);

  const showLetters = phase === "letters" || phase === "ready" || phase === "exit";

  return (
    <motion.div
      key="preloader-curtain"
      initial={{ y: 0 }}
      animate={{
        y: phase === "exit" ? "-100%" : 0,
      }}
      transition={{
        duration: 0.9,
        ease: [0.76, 0, 0.24, 1], // Luxury cubic-bezier curtain ease
      }}
      className="fixed inset-0 z-[120] bg-[#07070a] flex flex-col items-center justify-center overflow-hidden select-none cursor-pointer"
      onClick={handleSkip}
      title="Click or press Esc to enter"
      style={{ willChange: "transform" }}
    >
      {/* 1. Ambient Theater Backlight Glow & Light Gold Frame ("light gold border not this much") */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-1000 border border-amber-300/[0.08]"
        style={{
          boxShadow: "inset 0 0 70px rgba(245, 158, 11, 0.035)",
        }}
      />

      {/* Top & Bottom Delicate Light Gold Hairlines */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-amber-300/25 via-50% to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-amber-300/30 via-50% to-transparent pointer-events-none" />

      {/* Breathing Central Warm Radial Bloom (Gentle & Light) */}
      <motion.div
        animate={{
          scale: [0.96, 1.04, 0.96],
          opacity: [0.18, 0.32, 0.18],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[640px] h-[640px] rounded-full bg-gradient-to-br from-[#f59e0b]/10 via-[#d97706]/4 to-transparent blur-[140px] pointer-events-none"
      />

      {/* Fine Film Grid / Grain Texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 mix-blend-screen pointer-events-none" />

      {/* 2. Main Brand Container (Continuous Fluid Layout) */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        
        {/* Animated Brand Lockup Row with smooth layout transitions */}
        <motion.div 
          layout
          transition={{
            layout: { duration: 0.75, ease: [0.16, 1, 0.3, 1] }
          }}
          className="flex items-center justify-center gap-3.5 sm:gap-5 min-h-[90px] sm:min-h-[110px]"
        >
          {/* Glowing Camera Diamond Monogram Emblem */}
          <motion.div
            layout
            initial={{ scale: 0.7, opacity: 0, filter: "blur(8px)" }}
            animate={{ 
              scale: 1, 
              opacity: 1, 
              filter: "blur(0px)",
            }}
            transition={{ 
              duration: 0.65, 
              ease: [0.16, 1, 0.3, 1],
              layout: { duration: 0.75, ease: [0.16, 1, 0.3, 1] }
            }}
            className="relative flex items-center justify-center shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
          >
            {/* Luminous warm halo bloom behind emblem */}
            <motion.div 
              animate={{
                scale: [0.95, 1.08, 0.95],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-[-14px] rounded-full bg-gradient-to-tr from-amber-500/35 via-orange-400/25 to-yellow-200/20 blur-xl pointer-events-none" 
            />
            
            {/* Pristine Glowing Monogram Logo Artwork */}
            <img
              src={gciCameraMonogram}
              alt="Grace Cinemas International Monogram"
              className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_20px_rgba(255,190,110,0.85)] brightness-110 pointer-events-none"
            />
          </motion.div>

          {/* Typographic "GCI" Letter-by-Letter Reveal with Smooth Width & Mask Wipe */}
          <motion.div
            layout
            initial={{ width: 0, opacity: 0 }}
            animate={{ 
              width: showLetters ? "auto" : 0, 
              opacity: showLetters ? 1 : 0 
            }}
            transition={{ 
              duration: 0.7, 
              ease: [0.16, 1, 0.3, 1],
              layout: { duration: 0.75, ease: [0.16, 1, 0.3, 1] }
            }}
            className="flex flex-col items-start justify-center overflow-hidden whitespace-nowrap"
          >
            <div className="flex items-center overflow-hidden pr-2">
              {/* Letter G */}
              <motion.span
                initial={{ opacity: 0, x: -14, filter: "blur(4px)" }}
                animate={{ 
                  opacity: showLetters ? 1 : 0, 
                  x: showLetters ? 0 : -14, 
                  filter: showLetters ? "blur(0px)" : "blur(4px)" 
                }}
                transition={{ duration: 0.4, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white font-['Outfit']"
                style={{
                  textShadow: "0 0 25px rgba(255, 255, 255, 0.45), 0 2px 10px rgba(0,0,0,0.8)",
                }}
              >
                G
              </motion.span>

              {/* Letter C */}
              <motion.span
                initial={{ opacity: 0, x: -14, filter: "blur(4px)" }}
                animate={{ 
                  opacity: showLetters ? 1 : 0, 
                  x: showLetters ? 0 : -14, 
                  filter: showLetters ? "blur(0px)" : "blur(4px)" 
                }}
                transition={{ duration: 0.4, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white font-['Outfit']"
                style={{
                  textShadow: "0 0 25px rgba(255, 255, 255, 0.45), 0 2px 10px rgba(0,0,0,0.8)",
                }}
              >
                C
              </motion.span>

              {/* Letter I */}
              <motion.span
                initial={{ opacity: 0, x: -14, filter: "blur(4px)" }}
                animate={{ 
                  opacity: showLetters ? 1 : 0, 
                  x: showLetters ? 0 : -14, 
                  filter: showLetters ? "blur(0px)" : "blur(4px)" 
                }}
                transition={{ duration: 0.4, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white font-['Outfit']"
                style={{
                  textShadow: "0 0 25px rgba(255, 255, 255, 0.45), 0 2px 10px rgba(0,0,0,0.8)",
                }}
              >
                I
              </motion.span>
            </div>

            {/* Subtitle: Grace Cinemas International */}
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ 
                opacity: showLetters ? 1 : 0, 
                y: showLetters ? 0 : 5 
              }}
              transition={{ duration: 0.45, delay: 0.5, ease: "easeOut" }}
              className="flex items-center gap-2 mt-1 sm:mt-1.5"
            >
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.28em] text-neutral-300 font-medium">
                Grace Cinemas International
              </span>
            </motion.div>
          </motion.div>

        </motion.div>

        {/* 3. Sleek Cinema Progress Strip & Smooth Counter */}
        <motion.div
          layout
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 sm:mt-10 flex flex-col items-center gap-2.5 w-52 sm:w-64"
        >
          {/* Progress hairline track with fluid width transition */}
          <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 shadow-[0_0_10px_#f59e0b]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          {/* Status Indicators & Counter */}
          <div className="w-full flex items-center justify-between text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-neutral-400">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{progress < 100 ? "Loading Reel" : "Curtain Ready"}</span>
            </span>
            <span className="font-semibold text-white/90 tabular-nums">
              {progress.toString().padStart(2, "0")}%
            </span>
          </div>
        </motion.div>

      </div>

      {/* 4. Minimalist Skip Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        whileHover={{ opacity: 0.9 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="absolute bottom-6 sm:bottom-8 right-6 sm:right-10 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400 pointer-events-auto"
      >
        <span>Click or press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-neutral-200">Esc</kbd> to skip</span>
      </motion.div>

    </motion.div>
  );
}
