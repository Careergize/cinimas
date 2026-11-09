import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  X, 
  Calendar, 
  Film
} from "lucide-react";
import { PRODUCTIONS, CONTACT_INFO } from "../data/content";

export default function ProjectShowcase({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduction, setSelectedProduction] = useState(null);

  const categories = [
    { id: "all", label: "All Works" },
    { id: "Feature Film", label: "Feature Films" },
    { id: "Short Film", label: "Short Films" },
    { id: "Commercial", label: "Commercials" },
    { id: "Music Video", label: "Music Videos" },
  ];

  const filteredProductions = activeCategory === "all"
    ? PRODUCTIONS
    : PRODUCTIONS.filter(p => p.category === activeCategory);

  const getStatusBadge = (status) => {
    switch (status) {
      case "Released":
        return "bg-emerald-500/10 text-emerald-300 border-emerald-500/25";
      case "In Production":
        return "bg-amber-500/10 text-amber-300 border-amber-500/25";
      case "Post-Production":
        return "bg-rose-500/10 text-rose-300 border-rose-500/25";
      default:
        return "bg-white/5 text-neutral-300 border-white/10";
    }
  };

  return (
    <section id="productions" className="relative py-28 bg-transparent border-t border-white/10 overflow-hidden">
      {/* Warm cinematic glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-gradient-to-r from-[#fa9869]/8 via-[#d45d2b]/10 to-transparent blur-[160px] pointer-events-none" />
      <div className="container relative z-10 mx-auto px-6 sm:px-10 lg:px-16 max-w-7xl">
        
        {/* Section Header (Aurient Editorial Header) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 pb-8 border-b border-white/10 text-left">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-neutral-400 block mb-3">
              Portfolio & Slate
            </span>
            <h2
              className="text-3xl sm:text-5xl font-normal text-white tracking-[-0.03em] leading-tight"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Stories captured with <br className="hidden sm:inline" />
              cinematic precision.
            </h2>
          </div>

          {/* Minimalist Filter Pills (Aurient Style) */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-white text-black font-semibold shadow-md"
                    : "border border-white/10 text-neutral-400 hover:text-white hover:border-white/30 bg-white/[0.02]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Productions Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredProductions.map((proj) => (
              <motion.div
                layout
                key={proj.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                onClick={() => setSelectedProduction(proj)}
                className="group rounded-3xl bg-[#0e0e13]/80 border border-white/10 hover:border-white/25 transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              >
                {/* Poster Banner */}
                <div className="relative h-64 overflow-hidden bg-black">
                  <img
                    src={proj.posterUrl}
                    alt={proj.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e13] via-transparent to-black/30" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white border border-white/15 uppercase tracking-wider">
                      {proj.category}
                    </span>
                    <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border backdrop-blur-md font-medium ${getStatusBadge(proj.status)}`}>
                      {proj.status}
                    </span>
                  </div>

                  {/* Year Tag */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-[11px] font-mono text-neutral-300 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    <Calendar className="w-3 h-3 text-rose-400" />
                    <span>{proj.year}</span>
                    <span className="text-neutral-500">•</span>
                    <span>{proj.genre}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                  <div>
                    <h3
                      className="text-xl font-medium text-white group-hover:text-rose-300 transition-colors tracking-tight line-clamp-1"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                      {proj.title}
                    </h3>
                    <p className="mt-2.5 text-xs text-neutral-400 leading-relaxed line-clamp-2 font-light">
                      {proj.synopsis}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
                    <span className="truncate pr-2 font-mono text-[11px] text-neutral-500">
                      {proj.aspectRatio || proj.runtime}
                    </span>
                    <span className="text-white font-mono text-xs flex items-center gap-1 group-hover:text-rose-400 transition-colors">
                      <span>View Slate</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Production Detail Modal */}
      <AnimatePresence>
        {selectedProduction && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl rounded-3xl bg-[#0e0e13] border border-white/15 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto text-left"
            >
              <button
                onClick={() => setSelectedProduction(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors z-20 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-white px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15">
                  {selectedProduction.category}
                </span>
                <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${getStatusBadge(selectedProduction.status)}`}>
                  {selectedProduction.status}
                </span>
                <span className="text-neutral-500">•</span>
                <span className="text-xs text-neutral-400 font-mono">{selectedProduction.year}</span>
              </div>

              <h3
                className="text-2xl sm:text-3xl font-normal text-white tracking-tight"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                {selectedProduction.title}
              </h3>
              <span className="text-xs text-neutral-400 font-mono block mt-1">
                Genre: {selectedProduction.genre}
              </span>

              {/* Poster Banner */}
              <div className="mt-5 rounded-2xl overflow-hidden border border-white/10 h-64 bg-black relative">
                <img
                  src={selectedProduction.posterUrl}
                  alt={selectedProduction.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-mono text-neutral-300">
                    Directed by: {selectedProduction.director}
                  </span>
                </div>
              </div>

              {/* Synopsis */}
              <div className="mt-5 p-4 rounded-2xl bg-black/40 border border-white/5">
                <span className="text-neutral-400 uppercase tracking-wider block text-[10px] font-mono mb-1 font-semibold">Synopsis:</span>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                  {selectedProduction.synopsis}
                </p>
              </div>

              {/* Technical Slate Specs */}
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-neutral-500 uppercase block text-[10px]">Runtime:</span>
                  <span className="text-white">{selectedProduction.runtime}</span>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-neutral-500 uppercase block text-[10px]">Aspect Ratio:</span>
                  <span className="text-white">{selectedProduction.aspectRatio}</span>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 col-span-2 sm:col-span-1">
                  <span className="text-neutral-500 uppercase block text-[10px]">Language:</span>
                  <span className="text-white">{selectedProduction.language}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase">Studio Hotline</span>
                  <span className="text-xs text-white font-mono">{CONTACT_INFO.phone}</span>
                </div>

                <button
                  onClick={() => {
                    setSelectedProduction(null);
                    if (onSelectProject) onSelectProject();
                  }}
                  className="px-6 py-2.5 rounded-full bg-white hover:bg-neutral-100 text-black font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  Inquire Production
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
