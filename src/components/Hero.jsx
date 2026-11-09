import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "../assets/projector_hero_wide.jpg";
import ProjectorBeamLight from "./ProjectorBeamLight";

export default function Hero({ onOpenConsultation, onNavigate }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0a0a0d] select-none"
    >
      {/* =========================================================================
          DESKTOP HERO (100% UNTOUCHED FOR WEB & DESKTOP VIEW - md: and above)
          ========================================================================= */}
      <div className="hidden md:flex flex-col justify-between min-h-screen w-full relative">
        {/* Desktop Background Cinematic Plate */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <img
            src={heroBg}
            alt="Grace Cinemas Vintage Projector Light Beam"
            className="w-full h-full object-cover object-center brightness-[0.98] contrast-[1.05]"
          />

          {/* Photorealistic Living Cinematic Golden Projector Light Beam & Floating Dust Motes */}
          <ProjectorBeamLight />

          {/* Desktop Gradient wash (100% UNTOUCHED for web view) */}
          <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-[#0a0a0d] via-[#0a0a0d]/85 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#0a0a0d] via-[#0a0a0d]/50 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0a0a0d]/70 to-transparent pointer-events-none" />
        </div>

        {/* Top spacer matching floating navbar height */}
        <div className="w-full h-24 sm:h-28 pointer-events-none" />

        {/* Desktop Middle Content Area */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 my-auto py-10 sm:py-16">
          <div className="max-w-xl text-left">

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-6xl lg:text-[66px] font-normal tracking-[-0.03em] text-white leading-[1.06]"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Stories that resonate.
              <br />
              Cinema that endures.
            </motion.h1>

            {/* Subtitle / Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 sm:mt-6 text-base text-neutral-300/85 max-w-lg font-light leading-relaxed"
            >
              A premier independent film production house & creative studio — dedicated to bringing compelling visual narratives to life internationally.
            </motion.p>

            {/* Action Button Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 sm:mt-10 flex flex-row items-center gap-4"
            >
              <button
                onClick={onOpenConsultation}
                className="px-8 py-3.5 rounded-full bg-white hover:bg-neutral-100 text-black font-semibold text-[13px] tracking-wide transition-all shadow-[0_4px_22px_rgba(245,158,11,0.25)] active:scale-95 cursor-pointer"
              >
                Pitch a Project
              </button>

              <button
                onClick={() => onNavigate && onNavigate("productions")}
                className="px-6 py-3.5 rounded-full border border-white/20 hover:border-amber-400/50 text-white font-medium text-[13px] tracking-wide transition-all bg-white/[0.04] hover:bg-white/10 flex items-center gap-2 group cursor-pointer active:scale-95"
              >
                <span>Explore Productions</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Desktop Bottom Stats Bar */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-8 sm:pb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-baseline gap-8 sm:gap-14 lg:gap-20 pt-6 border-t border-white/10 text-left max-w-2xl"
          >
            <div>
              <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">12+</div>
              <div className="text-xs text-neutral-400 font-normal mt-0.5">Film Projects Released</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">25+</div>
              <div className="text-xs text-neutral-400 font-normal mt-0.5">Commercial Campaigns</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">Global</div>
              <div className="text-xs text-neutral-400 font-normal mt-0.5">International Casting Network</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================================
          MOBILE HERO (Clean, Uncongested Stacked Layout: IMAGE FIRST, THEN TEXT)
          ========================================================================= */}
      <div className="md:hidden flex flex-col w-full relative z-10 pt-20 pb-28">
        
        {/* 1. THE IMAGE FIRST (Unobstructed, Spacious Cinema Stage) */}
        <div className="relative w-full h-[250px] sm:h-[300px] overflow-hidden bg-[#07070a]">
          <img
            src={heroBg}
            alt="Grace Cinemas Vintage Projector Light Beam"
            className="w-full h-full object-cover object-[62%_36%] brightness-[0.98] contrast-[1.05]"
          />
          <ProjectorBeamLight />
          {/* Soft cinematic bottom vignette into black canvas */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0a0a0d] via-[#0a0a0d]/60 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#0a0a0d]/80 to-transparent pointer-events-none" />
        </div>

        {/* 2. AFTER THAT, THE TEXT (Spacious, Breathable, Highly Legible) */}
        <div className="px-6 pt-3 flex flex-col text-left">
          

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[30px] font-normal tracking-[-0.03em] text-white leading-[1.14]"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            <span>Stories that resonate.</span>
            <br />
            <span className="bg-gradient-to-r from-amber-100 via-amber-300 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_2px_14px_rgba(245,158,11,0.22)]">
              Cinema that endures.
            </span>
          </motion.h1>

          {/* Subtitle / Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-[13px] text-neutral-300/85 font-light leading-relaxed"
          >
            A premier independent film production house & creative studio — dedicated to bringing compelling visual narratives to life internationally.
          </motion.p>

          {/* Action Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-6 flex flex-row items-center gap-3"
          >
            <button
              onClick={onOpenConsultation}
              className="flex-1 py-3.5 rounded-full bg-white hover:bg-neutral-100 text-black font-semibold text-xs tracking-wide transition-all shadow-[0_4px_22px_rgba(245,158,11,0.25)] active:scale-95 cursor-pointer text-center"
            >
              Pitch a Project
            </button>
            <button
              onClick={() => onNavigate && onNavigate("productions")}
              className="flex-1 py-3.5 rounded-full border border-white/20 hover:border-amber-400/50 text-white font-medium text-xs tracking-wide transition-all bg-white/[0.04] hover:bg-white/10 flex items-center justify-center gap-1.5 group cursor-pointer active:scale-95 text-center"
            >
              <span>Explore</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Mobile Frosted Glass Stats Badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-7 p-3.5 rounded-2xl bg-[#0c0c14]/85 backdrop-blur-xl border border-amber-400/20 shadow-[0_10px_35px_rgba(0,0,0,0.7)] grid grid-cols-3 divide-x divide-white/10 text-center"
          >
            <div className="px-1 flex flex-col items-center">
              <div className="text-lg font-bold bg-gradient-to-r from-white to-amber-100 bg-clip-text text-transparent tracking-tight">12+</div>
              <div className="text-[9px] text-neutral-400 font-mono mt-0.5 uppercase tracking-wider">Films</div>
            </div>
            <div className="px-1 flex flex-col items-center">
              <div className="text-lg font-bold bg-gradient-to-r from-white to-amber-100 bg-clip-text text-transparent tracking-tight">25+</div>
              <div className="text-[9px] text-neutral-400 font-mono mt-0.5 uppercase tracking-wider">Ads</div>
            </div>
            <div className="px-1 flex flex-col items-center">
              <div className="text-lg font-bold text-amber-300 tracking-tight">Global</div>
              <div className="text-[9px] text-neutral-400 font-mono mt-0.5 uppercase tracking-wider">Casting</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
