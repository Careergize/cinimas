import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import heroBg from "../assets/projector_hero_wide.jpg";
import { CONTACT_INFO } from "../data/content";

export default function Hero({ onOpenConsultation, onNavigate }) {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] w-full flex flex-col justify-between overflow-hidden bg-[#0a0a0d] select-none pt-24 sm:pt-28"
    >
      {/* Background Cinematic Plate (Vintage Film Projector shifted cleanly to the right) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <img
          src={heroBg}
          alt="Grace Cinemas Vintage Projector Light Beam"
          className="w-full h-full object-cover object-right md:object-[95%_center] brightness-90 contrast-[1.05] translate-x-6 sm:translate-x-12 md:translate-x-20 lg:translate-x-28"
        />
        {/* Soft atmospheric gradient wash on left for maximum typography contrast */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-[#0a0a0d] via-[#0a0a0d]/85 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#0a0a0d] via-[#0a0a0d]/50 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0a0a0d]/70 to-transparent pointer-events-none" />
      </div>

      {/* Middle Content Area (Left-Aligned) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 my-auto py-12 sm:py-20">
        <div className="max-w-xl text-left">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 text-xs font-mono uppercase tracking-[0.2em] mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#fa9869] animate-pulse" />
            <span>Trivandrum • Cinema Line Studio</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-6xl lg:text-[66px] font-normal tracking-[-0.03em] text-white leading-[1.06]"
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
            className="mt-5 sm:mt-6 text-sm sm:text-base text-neutral-300/90 max-w-lg font-light leading-relaxed"
          >
            A premier independent film production house & creative studio in Kerala — dedicated to bringing compelling visual narratives to life.
          </motion.p>

          {/* Action Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-4"
          >
            {/* Primary Solid White Pill Button */}
            <button
              onClick={onOpenConsultation}
              className="px-7 sm:px-8 py-3.5 rounded-full bg-white hover:bg-neutral-100 text-black font-semibold text-xs sm:text-[13px] tracking-wide transition-all shadow-[0_4px_25px_rgba(255,255,255,0.2)] active:scale-95 cursor-pointer"
            >
              Pitch a Project
            </button>

            {/* Explore Productions */}
            <button
              onClick={() => onNavigate && onNavigate("productions")}
              className="px-6 sm:px-7 py-3.5 rounded-full border border-white/20 hover:border-white/50 text-white font-medium text-xs sm:text-[13px] tracking-wide transition-all bg-white/[0.03] hover:bg-white/10 flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Productions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* View Services */}
            <button
              onClick={() => onNavigate && onNavigate("services")}
              className="px-5 py-3.5 rounded-full text-neutral-400 hover:text-white font-medium text-xs sm:text-[13px] tracking-wide transition-colors cursor-pointer"
            >
              <span>Our Services</span>
            </button>
          </motion.div>

        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-8 sm:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-baseline gap-8 sm:gap-14 lg:gap-20 pt-6 border-t border-white/10 text-left max-w-2xl"
        >
          {/* Stat 1 */}
          <div>
            <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              12+
            </div>
            <div className="text-[11px] sm:text-xs text-neutral-400 font-normal mt-0.5">
              Film Projects Released
            </div>
          </div>

          {/* Stat 2 */}
          <div>
            <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              25+
            </div>
            <div className="text-[11px] sm:text-xs text-neutral-400 font-normal mt-0.5">
              Commercial Campaigns
            </div>
          </div>

          {/* Stat 3 */}
          <div>
            <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              Statewide
            </div>
            <div className="text-[11px] sm:text-xs text-neutral-400 font-normal mt-0.5">
              Kerala Casting Network
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
