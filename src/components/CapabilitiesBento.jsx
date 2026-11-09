import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  FileText, 
  X, 
  CheckCircle2, 
  PhoneCall, 
  Camera, 
  Sliders, 
  Clapperboard,
  Film,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Mic,
  Package
} from "lucide-react";
import { SERVICES, OFFICIAL_POSTERS, CONTACT_INFO } from "../data/content";

export default function CapabilitiesBento({ onSelectCapability }) {
  const [activePosterIdx, setActivePosterIdx] = useState(0);
  const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);

  const iconMap = {
    "brand-content-advertising": Clapperboard,
    "production-execution": Camera,
    "post-design": Sliders
  };

  const currentPoster = OFFICIAL_POSTERS[activePosterIdx] || OFFICIAL_POSTERS[0];

  const handleNextPoster = () => {
    setActivePosterIdx((prev) => (prev + 1) % OFFICIAL_POSTERS.length);
  };

  const handlePrevPoster = () => {
    setActivePosterIdx((prev) => (prev - 1 + OFFICIAL_POSTERS.length) % OFFICIAL_POSTERS.length);
  };

  return (
    <section id="services" className="relative py-28 overflow-hidden bg-transparent border-t border-white/10 select-none">
      {/* Warm projector beam glow matching home screen */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-l from-[#d45d2b]/15 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#1e293b]/20 to-transparent blur-[160px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 sm:px-10 lg:px-16 max-w-7xl">
        
        {/* Editorial Section Header (Matching Aurient Theme) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-white/10 text-left">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-neutral-400 block mb-3">
              Crafting Stories • Building Brands
            </span>
            <h2
              className="text-3xl sm:text-5xl font-normal text-white tracking-[-0.03em] leading-tight"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Services engineered for cinema <br className="hidden sm:inline" />
              and brand growth.
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              onClick={() => setIsPosterModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 hover:border-amber-400/50 text-neutral-300 hover:text-white transition-all text-xs font-mono uppercase tracking-wider group cursor-pointer bg-white/[0.02]"
            >
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>3 Official Posters</span>
            </button>

            <button
              onClick={onSelectCapability}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-neutral-100 text-black font-semibold text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 3 Core Services Grid (Matching all 11 services across the Official Posters) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.id] || Film;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative rounded-3xl bg-[#0e0e13]/80 border border-white/10 hover:border-white/25 p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-left"
              >
                {/* Top Row: Number & Icon */}
                <div>
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/5">
                    <span className="font-mono text-2xl font-light text-neutral-500 group-hover:text-white transition-colors">
                      {service.number}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-neutral-300 group-hover:text-white group-hover:border-white/30 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-400 font-semibold block mb-2">
                    {service.badge}
                  </span>
                  <h3
                    className="text-2xl font-medium text-white tracking-tight leading-snug group-hover:text-amber-200 transition-colors"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {service.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                    {service.desc}
                  </p>

                  {/* Sub-Services Checklist (from Client Posters) */}
                  <div className="mt-8 pt-6 border-t border-white/5 space-y-3">
                    <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-neutral-500 block">
                      Vertical Deliverables
                    </span>
                    {service.items.map((item) => (
                      <div key={item.name} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                        <div>
                          <span className="font-medium text-white">{item.name}</span>
                          <span className="text-neutral-500 block text-[11px] font-light mt-0.5">{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (onSelectCapability) onSelectCapability(service.title);
                    }}
                    className="text-xs font-mono uppercase tracking-wider text-white hover:text-amber-200 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Inquire Vertical</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase">
                    Global & Worldwide
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =========================================================================
            OFFICIAL CLIENT POSTERS SHOWCASE (Interactive 3-Poster Gallery)
            ========================================================================= */}
        <div className="mt-20 pt-16 border-t border-white/10">
          
          {/* Header & Tabs for the 3 Posters */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 text-left">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-amber-400 font-medium block mb-2">
                Official Studio Collateral
              </span>
              <h3
                className="text-2xl sm:text-4xl font-normal text-white tracking-tight"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Official Studio Posters
              </h3>
            </div>

            {/* Poster Switching Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {OFFICIAL_POSTERS.map((poster, idx) => {
                const isActive = idx === activePosterIdx;
                return (
                  <button
                    key={poster.id}
                    onClick={() => setActivePosterIdx(idx)}
                    className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 shrink-0 ${
                      isActive
                        ? "bg-amber-400 text-black font-bold shadow-[0_2px_15px_rgba(245,158,11,0.35)]"
                        : "text-neutral-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10"
                    }`}
                  >
                    <span className={isActive ? "text-black/80 font-bold" : "text-amber-400/80"}>
                      0{idx + 1}
                    </span>
                    <span>{poster.badge}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Poster Detailed Stage */}
          <div className="rounded-3xl bg-gradient-to-b from-[#0e0e14]/90 to-[#07070a]/95 border border-amber-400/25 p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden">
            
            {/* Subtle atmospheric gold ambient background glow */}
            <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-amber-400/[0.07] rounded-full blur-[140px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Official Poster Framing */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div 
                  onClick={() => setIsPosterModalOpen(true)}
                  className="group relative max-w-[340px] sm:max-w-[370px] w-full rounded-2xl overflow-hidden border border-amber-400/35 hover:border-amber-400/70 shadow-[0_20px_50px_rgba(0,0,0,0.85)] cursor-pointer transition-all duration-300 hover:scale-[1.01]"
                >
                  {/* Poster Image */}
                  <img
                    src={currentPoster.image}
                    alt={currentPoster.title}
                    className="w-full h-auto object-contain block transition-transform duration-500 group-hover:scale-[1.02]"
                  />

                  {/* Hover Overlay with View Fullscreen Cue */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400 text-black text-xs font-mono font-semibold uppercase tracking-wider shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5 text-black" />
                      <span>Tap to View Fullscreen</span>
                    </span>
                  </div>

                  {/* Corner Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-wider text-amber-300">
                    {currentPoster.badge}
                  </div>
                </div>

                {/* Micro Thumbnail Selector Strip directly below */}
                <div className="flex items-center justify-center gap-3 mt-5">
                  {OFFICIAL_POSTERS.map((p, idx) => (
                    <button
                      key={p.id}
                      onClick={() => setActivePosterIdx(idx)}
                      className={`relative w-16 h-20 rounded-lg overflow-hidden border transition-all cursor-pointer ${
                        idx === activePosterIdx
                          ? "border-amber-400 ring-2 ring-amber-400/30 scale-105"
                          : "border-white/15 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column: Editorial Overview & Direct Booking */}
              <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-amber-400 font-medium">
                      Official Collateral • 0{activePosterIdx + 1} of 0{OFFICIAL_POSTERS.length}
                    </span>
                    <span className="text-neutral-600">•</span>
                    <span className="text-xs font-mono text-neutral-400">
                      {currentPoster.badge}
                    </span>
                  </div>

                  <h3
                    className="text-3xl sm:text-4xl lg:text-[40px] font-normal text-white tracking-tight leading-tight"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {currentPoster.title}
                  </h3>
                  <p className="mt-2 text-base text-amber-200/90 font-serif italic">
                    "{currentPoster.tagline}"
                  </p>
                  <p className="mt-3 text-sm sm:text-base text-neutral-300/85 font-light leading-relaxed">
                    {currentPoster.subtitle}
                  </p>
                </div>

                {/* Highlights List from this specific official poster */}
                <div className="space-y-2.5 pt-4 border-t border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-2">
                    Official Specifications & Inclusions
                  </span>
                  {currentPoster.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                      <span className="text-xs sm:text-sm text-neutral-200 font-light leading-relaxed">
                        {h}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setIsPosterModalOpen(true)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-neutral-100 text-black font-semibold text-xs font-mono uppercase tracking-wider transition-all shadow-[0_4px_20px_rgba(245,158,11,0.2)] cursor-pointer active:scale-95"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Open High-Res Lightbox</span>
                  </button>

                  <a
                    href={CONTACT_INFO.phoneTel}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:border-amber-400/40 text-neutral-200 hover:text-white transition-all text-xs font-mono uppercase tracking-wider bg-white/[0.03] active:scale-95"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                    <span>Call Hotline: {CONTACT_INFO.phoneRaw}</span>
                  </a>
                </div>

                {/* Verification Footnote */}
                <div className="text-[11px] font-mono text-neutral-500 pt-1">
                  Verified collateral from Grace Cinemas International Studio HQ.
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Official Poster Lightbox Modal (Browsing all 3 posters in full resolution) */}
      <AnimatePresence>
        {isPosterModalOpen && (
          <div 
            onClick={() => setIsPosterModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-xl w-full bg-[#0c0c12] border border-amber-400/25 rounded-3xl p-5 sm:p-7 shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
                    {currentPoster.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-mono">
                    Poster {activePosterIdx + 1} of {OFFICIAL_POSTERS.length} • {currentPoster.badge}
                  </p>
                </div>
                <button
                  onClick={() => setIsPosterModalOpen(false)}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close Poster Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Poster Container with Nav Chevrons */}
              <div className="relative rounded-2xl overflow-hidden bg-black/80 border border-white/10 max-h-[72vh] flex items-center justify-center shadow-inner">
                <img
                  src={currentPoster.image}
                  alt={currentPoster.title}
                  className="w-full h-auto max-h-[72vh] object-contain block select-none"
                />

                {/* Left Arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevPoster();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 border border-white/15 text-white hover:border-amber-400 flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Previous Poster"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextPoster();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 border border-white/15 text-white hover:border-amber-400 flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Next Poster"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Footer with Thumbnails */}
              <div className="mt-4 flex items-center justify-between text-xs text-neutral-400 font-mono">
                <div className="flex items-center gap-2">
                  {OFFICIAL_POSTERS.map((p, idx) => (
                    <button
                      key={p.id}
                      onClick={() => setActivePosterIdx(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                        idx === activePosterIdx ? "bg-amber-400 w-6" : "bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>
                <span>Hotline: {CONTACT_INFO.phone}</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
