import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, 
  ArrowUpRight,
  BookOpen,
  ArrowRight,
  ArrowLeft
} from "lucide-react";
import { GraceEmblem } from "./GraceLogo";

/**
 * Authentic 5-Year Journey of Grace Cinemas International (GCI)
 * Sourced directly from founder Mridul Rajesh's official memoirs.
 */
export const STORY_CHAPTERS = [
  {
    id: "chapter-01",
    chapterNumber: "01",
    tag: "Origins • 2020",
    navLabel: "The Benches",
    title: "Benches of Manaveeyam",
    quote: "Meetings didn't happen in offices. They happened on benches at Manaveeyam, under the trees at Kanakakunnu—carrying nothing but belief and a vision that didn't yet have a form.",
    author: "Mridul Rajesh",
    authorRole: "Founder & Creative Director",
    location: "Manaveeyam Veedhi & Kanakakunnu",
    narrative: "Before studio walls or equipment rosters existed, the dream was born in open cultural spaces. Every script idea and partnership was forged on park benches, sustained only by conviction.",
    accentColor: "#d97706"
  },
  {
    id: "chapter-02",
    chapterNumber: "02",
    tag: "The Café Days • Five Years Ago",
    navLabel: "Corner Cafés",
    title: "Ideas in Noise, Plans in Silence",
    quote: "Five years ago, this didn't exist. Frames were imagined in corners of cafés—at places like Le Lumiere and CCD—where ideas were written between conversations and coffee cups. Edits were made in noise. Plans were built in silence.",
    author: "Mridul Rajesh",
    authorRole: "Founder & Creative Director",
    location: "Le Lumiere & Cafe Coffee Day",
    narrative: "Long hours huddled over laptops with headphones on, scripting between coffee refills. Editing timelines while conversations buzzed around—quietly building the foundation for what would become Grace Cinemas.",
    accentColor: "#f59e0b"
  },
  {
    id: "chapter-03",
    chapterNumber: "03",
    tag: "Hardware Genesis • Technical Shift",
    navLabel: "Gear Evolution",
    title: "From Phone Cameras to Cinema Line",
    quote: "I started with just a phone camera. Then came a DSLR. Then mirrorless. And today... cinema line. Lights weren't equipment back then. They were CFL bulbs tied to sticks, makeshift setups, figuring things out one shoot at a time. Today, it's Godox, Amaran... and a space built to create.",
    author: "Mridul Rajesh",
    authorRole: "Founder & Creative Director",
    location: "On-Location Film Sets",
    narrative: "Every upgrade was earned through countless shoots. From DIY lighting with CFL bulbs taped to bamboo poles to operating full cinema-tier packages with Godox and Amaran studio lighting.",
    accentColor: "#fbbf24"
  },
  {
    id: "chapter-04",
    chapterNumber: "04",
    tag: "Turning Point • Autonomy",
    navLabel: "Building Arsenal",
    title: "Building Our Own Arsenal",
    quote: "There was a time I waited, negotiated, adjusted—just to get the right gear from different rental teams. Today, we've built our own.",
    author: "Mridul Rajesh",
    authorRole: "Founder & Creative Director",
    location: "Grace Cinemas Studio Facility",
    narrative: "Tired of production delays and negotiating gear availability with external rental houses, GCI made the defining leap to invest in and curate our own turnkey camera, sound, and lighting inventory.",
    accentColor: "#d97706"
  },
  {
    id: "chapter-05",
    chapterNumber: "05",
    tag: "The Milestone • Unseen Dedication",
    navLabel: "Silent Growth",
    title: "From Nothing... To Something",
    quote: "Somewhere along the way... without even realizing it... growth happened. From nothing... to something.",
    author: "Mridul Rajesh",
    authorRole: "Founder & Creative Director",
    location: "Studio Production Hub",
    narrative: "Through relentless commitment to quality and storytelling, Grace Cinemas grew organically from guerilla indie projects to acclaimed feature films, commercial campaigns, and music productions.",
    accentColor: "#f59e0b"
  },
  {
    id: "chapter-06",
    chapterNumber: "06",
    tag: "Studio Dedication • Just The Beginning",
    navLabel: "The Studio Suite",
    title: "This Space Is Not Just A Studio",
    quote: "This space is not just a studio. It's every struggle, every late night, every doubt, every small win stacked together. To everyone who believed, supported, trusted, and stood by—thank you. This is yours as much as it is mine. And this... is just the beginning.",
    author: "Mridul Rajesh",
    authorRole: "Founder & Creative Director",
    location: "Nalanchira Facility",
    narrative: "Today, our facility houses our acoustic recording & filming suite, edit consoles, and production desks. A dedicated home built for international and global storytellers.",
    accentColor: "#fbbf24"
  }
];

// Motion slide variants respecting swipe directions
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 320, damping: 30 },
      opacity: { duration: 0.3 },
      scale: { duration: 0.3 }
    },
  },
  exit: (direction) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0,
    scale: 0.98,
    transition: {
      x: { type: "spring", stiffness: 320, damping: 30 },
      opacity: { duration: 0.25 },
    },
  }),
};

export default function AboutSection({ onOpenConsultation }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward/next, -1 = backward/prev

  // Explicit user requirement:
  // Swipe right -> go to NEXT chapter
  // Swipe left  -> go to PREVIOUS chapter
  const handleNext = () => {
    setDirection(1);
    setActiveIdx((prev) => (prev + 1) % STORY_CHAPTERS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIdx((prev) => (prev - 1 + STORY_CHAPTERS.length) % STORY_CHAPTERS.length);
  };

  const handleSelectChapter = (newIdx) => {
    if (newIdx === activeIdx) return;
    setDirection(newIdx > activeIdx ? 1 : -1);
    setActiveIdx(newIdx);
  };

  // Keyboard navigation support (ArrowRight / ArrowLeft)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const currentChapter = STORY_CHAPTERS[activeIdx];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-transparent border-t border-white/10 overflow-hidden select-none">
      
      {/* Gentle ambient background golden glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-transparent rounded-full blur-[170px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 sm:px-10 lg:px-16 max-w-5xl">
        
        {/* Section Header: Editorial & Atmospheric */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14 pb-8 border-b border-white/10 text-left">
          <div className="max-w-2xl">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-400/[0.08] border border-amber-400/25 text-amber-300 text-[11px] font-mono uppercase tracking-[0.22em] mb-4">
              <span>Five-Year Journey • 2020 – 2026</span>
            </span>
            <h2
              className="text-3xl sm:text-5xl font-normal text-white tracking-[-0.03em] leading-tight"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              From benches at Manaveeyam <br className="hidden sm:inline" />
              to a cinema-line studio.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-300/85 font-light leading-relaxed">
              An authentic six-chapter memoir of belief, makeshift CFL lights, and late nights. Swipe right to advance through the story.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-neutral-100 text-black font-semibold text-xs uppercase tracking-wider transition-all shadow-[0_4px_25px_rgba(245,158,11,0.2)] cursor-pointer shrink-0 self-start md:self-end active:scale-95"
          >
            <span>Pitch a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Chapter Quick Selector Pill Strip */}
        <div className="mb-8 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2 min-w-max">
            {STORY_CHAPTERS.map((chap, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={chap.id}
                  onClick={() => handleSelectChapter(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 shrink-0 ${
                    isActive
                      ? "bg-amber-400 text-black font-bold shadow-[0_2px_15px_rgba(245,158,11,0.35)] scale-[1.02]"
                      : "text-neutral-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10"
                  }`}
                >
                  <span className={isActive ? "text-black/80 font-bold" : "text-amber-400/80"}>
                    {chap.chapterNumber}
                  </span>
                  <span>{chap.navLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Swiping Stage Card */}
        <div className="relative">

          {/* Swipeable Motion Container */}
          <div className="relative min-h-[460px] sm:min-h-[400px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentChapter.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipeThreshold = 40;
                  // Explicit user specification:
                  // Swiped right -> go to NEXT chapter
                  // Swiped left  -> go to PREVIOUS chapter
                  if (offset.x > swipeThreshold || velocity.x > 200) {
                    handleNext();
                  } else if (offset.x < -swipeThreshold || velocity.x < -200) {
                    handlePrev();
                  }
                }}
                className="w-full relative rounded-3xl bg-[#0c0c14]/95 border border-white/10 hover:border-amber-400/30 transition-colors overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-7 sm:p-12 lg:p-14 text-left cursor-grab active:cursor-grabbing touch-pan-y"
              >
                {/* Ambient Warm Golden Aura */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-amber-500/[0.09] via-amber-400/[0.03] to-transparent rounded-bl-full pointer-events-none" />

                <div className="relative z-10 space-y-6 sm:space-y-7">
                  
                  {/* Top Header: Eyebrow + Chronology */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-300 font-semibold px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/25">
                        Chapter {currentChapter.chapterNumber}
                      </span>
                      <span className="text-neutral-600">•</span>
                      <span className="text-xs font-mono text-neutral-400 tracking-wider">
                        {currentChapter.tag}
                      </span>
                    </div>

                    {/* Progress indicator badge */}
                    <div className="text-[11px] font-mono text-neutral-500 bg-white/[0.03] px-3 py-1 rounded-full border border-white/5">
                      {activeIdx + 1} / {STORY_CHAPTERS.length}
                    </div>
                  </div>

                  {/* Chapter Title */}
                  <h3
                    className="text-2xl sm:text-4xl lg:text-[42px] font-normal text-white tracking-tight leading-tight"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {currentChapter.title}
                  </h3>

                  {/* The Core Memoir Quote with Gold Vertical Accent Bar */}
                  <div className="relative pl-5 sm:pl-8 border-l-2 border-amber-400/70 my-5 sm:my-7">
                    <p className="text-lg sm:text-2xl lg:text-[27px] text-white/95 font-light leading-relaxed font-serif italic">
                      "{currentChapter.quote}"
                    </p>
                  </div>

                  {/* Contextual Narrative */}
                  <p className="text-sm sm:text-base text-neutral-300/85 font-light leading-relaxed max-w-3xl">
                    {currentChapter.narrative}
                  </p>

                  {/* Author Signature & Studio Location Bar */}
                  <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
                    <div className="flex items-center gap-3">
                      <GraceEmblem className="w-5 h-5" glow={false} />
                      <span className="text-white font-medium">— {currentChapter.author}</span>
                      <span className="text-neutral-500">({currentChapter.authorRole})</span>
                    </div>

                    <div className="flex items-center gap-2 text-neutral-400">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>{currentChapter.location}</span>
                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Swipe Controls & Progress Bar */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#0c0c14]/80 border border-white/10">
            
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/10 border border-white/10 hover:border-amber-400/30 text-xs font-mono text-neutral-300 hover:text-white transition-all cursor-pointer active:scale-95"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-amber-400" />
              <span>Previous Chapter</span>
            </button>

            {/* Segmented Timeline Progress */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {STORY_CHAPTERS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectChapter(idx)}
                  aria-label={`Jump to Chapter 0${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    idx === activeIdx
                      ? "w-8 sm:w-10 bg-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.6)]"
                      : "w-3 sm:w-4 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/10 border border-white/10 hover:border-amber-400/30 text-xs font-mono text-neutral-300 hover:text-white transition-all cursor-pointer active:scale-95"
            >
              <span>Next Chapter</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </button>

          </div>

          {/* Intuitive Touch Swipe Guidance Badge */}
          <div className="mt-3 text-center">
            <span className="text-[11px] font-mono text-neutral-500 tracking-wider">
              Swipe right for next chapter • Swipe left for previous chapter • Use keyboard arrows
            </span>
          </div>

        </div>

        {/* Narrative Journey Concluding Anchor */}
        <div className="mt-16 sm:mt-20 text-center p-8 rounded-3xl bg-white/[0.02] border border-white/10 max-w-2xl mx-auto">
          <BookOpen className="w-6 h-6 text-amber-400 mx-auto mb-3" />
          <h4 className="text-lg font-normal text-white mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>
            The story is ongoing.
          </h4>
          <p className="text-xs sm:text-sm text-neutral-400 font-light mb-6">
            Partner with Grace Cinemas International to bring your cinematic story or commercial vision to the screen.
          </p>
          <button
            onClick={onOpenConsultation}
            className="px-7 py-3 rounded-full bg-white hover:bg-neutral-100 text-black font-semibold text-xs uppercase tracking-wider transition-all shadow-[0_4px_20px_rgba(245,158,11,0.25)] active:scale-95 cursor-pointer"
          >
            Begin Your Project With Us
          </button>
        </div>

      </div>

    </section>
  );
}
