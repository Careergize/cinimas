import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  Pause, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Camera, 
  Sparkles, 
  Coffee, 
  Film, 
  ArrowUpRight,
  Tv
} from "lucide-react";
import { CONTACT_INFO } from "../data/content";
import { GraceEmblem } from "./GraceLogo";

/**
 * Authentic 5-Year Journey of Grace Cinemas International (GCI)
 * Sourced directly from founder Mridul Rajesh's official memoirs.
 */
export const STORY_CHAPTERS = [
  {
    id: "manaveeyam-origins",
    chapterNumber: "01",
    tag: "Origins • 2020",
    navLabel: "The Benches",
    title: "Benches of Manaveeyam",
    quote: "Meetings didn't happen in offices. They happened on benches at Manaveeyam, under the trees at Kanakakunnu—carrying nothing but belief and a vision that didn't yet have a form.",
    author: "Mridul Rajesh",
    authorRole: "Founder & Creative Director",
    location: "Manaveeyam Veedhi & Kanakakunnu, Trivandrum",
    narrative: "Before studio walls or equipment rosters existed, the dream was born in Trivandrum's open cultural spaces. Every script idea and partnership was forged on park benches, sustained only by conviction.",
    visualType: "origins",
    accentColor: "#d45d2b"
  },
  {
    id: "cafe-ideas",
    chapterNumber: "02",
    tag: "The Café Days • Five Years Ago",
    navLabel: "Corner Cafés",
    title: "Ideas in Noise, Plans in Silence",
    quote: "Five years ago, this didn't exist. Frames were imagined in corners of cafés—at places like Le Lumiere and CCD—where ideas were written between conversations and coffee cups. Edits were made in noise. Plans were built in silence.",
    author: "Mridul Rajesh",
    authorRole: "Founder & Creative Director",
    location: "Le Lumiere & Cafe Coffee Day",
    narrative: "Long hours huddled over laptops with headphones on, scripting between coffee refills. Editing timelines while conversations buzzed around—quietly building the foundation for what would become Grace Cinemas.",
    visualType: "cafes",
    accentColor: "#c2592d"
  },
  {
    id: "gear-evolution",
    chapterNumber: "03",
    tag: "Hardware Genesis • Technical Shift",
    navLabel: "Gear Evolution",
    title: "From Phone Cameras to Cinema Line",
    quote: "I started with just a phone camera. Then came a DSLR. Then mirrorless. And today... cinema line. Lights weren't equipment back then. They were CFL bulbs tied to sticks, makeshift setups, figuring things out one shoot at a time. Today, it's Godox, Amaran... and a space built to create.",
    author: "Mridul Rajesh",
    authorRole: "Founder & Creative Director",
    location: "Kerala Film Locations",
    narrative: "Every upgrade was earned through countless shoots. From DIY lighting with CFL bulbs taped to bamboo poles to operating full cinema-tier packages with Godox and Amaran studio lighting.",
    visualType: "gear",
    accentColor: "#d96735"
  },
  {
    id: "gear-independence",
    chapterNumber: "04",
    tag: "Turning Point • Autonomy",
    navLabel: "Building Arsenal",
    title: "Building Our Own Arsenal",
    quote: "There was a time I waited, negotiated, adjusted—just to get the right gear from different rental teams. Today, we've built our own.",
    author: "Mridul Rajesh",
    authorRole: "Founder & Creative Director",
    location: "Grace Cinemas Studio Facility",
    narrative: "Tired of production delays and negotiating gear availability with external rental houses, GCI made the defining leap to invest in and curate our own turnkey camera, sound, and lighting inventory.",
    visualType: "arsenal",
    accentColor: "#bf5228"
  },
  {
    id: "silent-growth",
    chapterNumber: "05",
    tag: "The Milestone • Unseen Dedication",
    navLabel: "Silent Growth",
    title: "From Nothing... To Something",
    quote: "Somewhere along the way... without even realizing it... growth happened. From nothing... to something.",
    author: "Mridul Rajesh",
    authorRole: "Founder & Creative Director",
    location: "Thiruvananthapuram, Kerala",
    narrative: "Through relentless commitment to quality and storytelling, Grace Cinemas grew organically from guerilla indie projects to acclaimed feature films, commercial campaigns, and music productions.",
    visualType: "growth",
    accentColor: "#d06130"
  },
  {
    id: "the-studio",
    chapterNumber: "06",
    tag: "Studio Dedication • Just The Beginning",
    navLabel: "The Studio Suite",
    title: "This Space Is Not Just A Studio",
    quote: "This space is not just a studio. It's every struggle, every late night, every doubt, every small win stacked together. To everyone who believed, supported, trusted, and stood by—thank you. This is yours as much as it is mine. And this... is just the beginning.",
    author: "Mridul Rajesh",
    authorRole: "Founder & Creative Director",
    location: "Nalanchira, Thiruvananthapuram",
    narrative: "Today, our Nalanchira facility houses our acoustic recording & filming suite, edit consoles, and production desks. A dedicated home built for regional and global storytellers.",
    visualType: "studio",
    accentColor: "#e06b38"
  }
];

export default function AboutSection({ onOpenConsultation }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const SLIDE_DURATION = 8000; // 8 seconds per slide
  const stepTime = 50;

  const activeChapter = STORY_CHAPTERS[currentIdx];

  // Auto-play progress timer
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIdx((c) => (c + 1) % STORY_CHAPTERS.length);
          return 0;
        }
        return prev + (stepTime / SLIDE_DURATION) * 100;
      });
    }, stepTime);

    return () => clearInterval(interval);
  }, [isPlaying, currentIdx]);

  const handleNext = () => {
    setProgress(0);
    setCurrentIdx((prev) => (prev + 1) % STORY_CHAPTERS.length);
  };

  const handlePrev = () => {
    setProgress(0);
    setCurrentIdx((prev) => (prev - 1 + STORY_CHAPTERS.length) % STORY_CHAPTERS.length);
  };

  const handleSelectChapter = (index) => {
    setProgress(0);
    setCurrentIdx(index);
  };

  return (
    <section id="about" className="relative py-28 sm:py-36 bg-transparent border-t border-white/10 overflow-hidden">
      
      {/* Gentle ambient background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-gradient-to-r from-[#c2592d]/15 via-[#fa9869]/10 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 sm:px-10 lg:px-16 max-w-6xl">
        
        {/* Section Header: Clean, Spacious, Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10 text-left">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#fa9869] block mb-3 font-medium">
              Our Story • Five-Year Journey
            </span>
            <h2
              className="text-3xl sm:text-5xl font-normal text-white tracking-[-0.03em] leading-tight"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              From benches at Manaveeyam <br className="hidden sm:inline" />
              to a cinema-line studio.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              How belief, makeshift CFL lights, and late nights in Trivandrum transformed into Grace Cinemas International.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-neutral-100 text-black font-semibold text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer shrink-0 self-start md:self-end"
          >
            <span>Pitch a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Minimalist Chapter Navigation Tabs */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {STORY_CHAPTERS.map((chap, idx) => (
              <button
                key={chap.id}
                onClick={() => handleSelectChapter(idx)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                  currentIdx === idx
                    ? "bg-white text-black font-semibold shadow-md"
                    : "text-neutral-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/5"
                }`}
              >
                <span className="opacity-60">{chap.chapterNumber}</span>
                <span>{chap.navLabel}</span>
              </button>
            ))}
          </div>

          {/* Simple Clean Player Controls */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause story playback" : "Play story playback"}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer border border-white/10"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
            </button>
            <button
              onClick={handlePrev}
              aria-label="Previous Chapter"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer border border-white/10"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-neutral-400 px-2">
              {activeChapter.chapterNumber} <span className="text-neutral-600">/</span> {STORY_CHAPTERS.length.toString().padStart(2, "0")}
            </span>
            <button
              onClick={handleNext}
              aria-label="Next Chapter"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer border border-white/10"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Thin Duration Progress Bar */}
        <div className="h-[2px] w-full bg-white/10 rounded-full mb-10 overflow-hidden">
          <div
            className="h-full bg-[#fa9869] transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Main Spacious Story Stage (Breathtaking, Breathable, Pure Typography & Narrative) */}
        <div className="relative rounded-3xl bg-[#0e0e13]/85 border border-white/10 overflow-hidden shadow-2xl p-8 sm:p-14 lg:p-20 text-left">
          
          {/* Subtle Ambient Glow inside card */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#fa9869]/10 via-[#c2592d]/5 to-transparent rounded-bl-full pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeChapter.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="relative z-10 max-w-4xl space-y-8"
            >
              {/* Chapter Eyebrow & Status */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#fa9869] font-semibold px-3 py-1 rounded-full bg-[#fa9869]/10 border border-[#fa9869]/20">
                  Chapter {activeChapter.chapterNumber}
                </span>
                <span className="text-neutral-600">•</span>
                <span className="text-xs font-mono text-neutral-400 tracking-wider">
                  {activeChapter.tag}
                </span>
              </div>

              {/* Chapter Title */}
              <h3
                className="text-3xl sm:text-5xl font-normal text-white tracking-tight leading-tight"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                {activeChapter.title}
              </h3>

              {/* The Core Memoir Quote (Generous Size & Spacing) */}
              <div className="relative pl-6 sm:pl-8 border-l-2 border-[#fa9869]/60 my-6">
                <p className="text-xl sm:text-3xl lg:text-[34px] text-white/95 font-light leading-relaxed font-serif italic">
                  "{activeChapter.quote}"
                </p>
              </div>

              {/* Contextual Paragraph */}
              <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-3xl">
                {activeChapter.narrative}
              </p>

              {/* Author & Location Signature Bar */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
                <div className="flex items-center gap-3">
                  <GraceEmblem className="w-5 h-5" glow={false} />
                  <span className="text-white font-medium">— {activeChapter.author}</span>
                  <span className="text-neutral-500">({activeChapter.authorRole})</span>
                </div>

                <div className="flex items-center gap-2 text-neutral-400">
                  <MapPin className="w-3.5 h-3.5 text-[#fa9869]" />
                  <span>{activeChapter.location}</span>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

        {/* Simple Mobile Controls */}
        <div className="flex sm:hidden items-center justify-between mt-6 pt-4 border-t border-white/5">
          <button
            onClick={handlePrev}
            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300"
          >
            ← Previous
          </button>
          <span className="text-xs font-mono text-neutral-400">
            {activeChapter.chapterNumber} / {STORY_CHAPTERS.length.toString().padStart(2, "0")}
          </span>
          <button
            onClick={handleNext}
            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300"
          >
            Next →
          </button>
        </div>

      </div>

    </section>
  );
}
