import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  MapPin,
  X,
  Maximize2
} from "lucide-react";
import { BTS_ITEMS, CONTACT_INFO } from "../data/content";

export default function BTSGallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = [
    { id: "all", label: "All Stills" },
    { id: "Directing", label: "Directing" },
    { id: "Camera Rigs", label: "Camera Rigs" },
    { id: "Set Life", label: "Set Life" },
    { id: "Sound & Dubbing", label: "Sound & Studio" },
    { id: "Post-Production", label: "Post Suite" },
  ];

  const filteredItems = activeCategory === "all"
    ? BTS_ITEMS
    : BTS_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="bts" className="relative py-28 bg-transparent border-t border-white/10 overflow-hidden">
      {/* Warm ambient cinema glow */}
      <div className="absolute top-1/3 left-[-5%] w-[600px] h-[500px] rounded-full bg-gradient-to-r from-[#fa9869]/10 to-transparent blur-[160px] pointer-events-none" />
      <div className="container relative z-10 mx-auto px-6 sm:px-10 lg:px-16 max-w-7xl">

        {/* Section Header (Aurient Editorial Header) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 pb-8 border-b border-white/10 text-left">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-neutral-400 block mb-3">
              Production Archive • Set Life
            </span>
            <h2
              className="text-3xl sm:text-5xl font-normal text-white tracking-[-0.03em] leading-tight"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Life behind the <br className="hidden sm:inline" />
              anamorphic lens.
            </h2>
          </div>

          {/* Minimalist Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${activeCategory === cat.id
                  ? "bg-white text-black font-semibold shadow-md"
                  : "border border-white/10 text-neutral-400 hover:text-white hover:border-white/30 bg-white/[0.02]"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                onClick={() => setSelectedItem(item)}
                className="group rounded-3xl bg-[#0e0e13]/80 border border-white/10 hover:border-white/25 transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              >
                {/* Image Banner */}
                <div className="relative h-64 overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-90 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e13] via-transparent to-black/30" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white border border-white/15 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Location Tag */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-[11px] font-mono text-neutral-300 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    <MapPin className="w-3 h-3 text-rose-400" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Caption Details */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                  <h3
                    className="text-lg font-medium text-white group-hover:text-rose-300 transition-colors tracking-tight line-clamp-1"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-neutral-400 leading-relaxed line-clamp-2 font-light">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-3xl w-full bg-[#0e0e13] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto text-left"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors z-20 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2 text-xs font-mono">
                <span className="text-white uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15">{selectedItem.category}</span>
                <span className="text-neutral-500">•</span>
                <span className="text-neutral-400">{selectedItem.location}</span>
              </div>

              <h3 className="text-2xl font-normal text-white mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>
                {selectedItem.title}
              </h3>

              <div className="rounded-2xl overflow-hidden border border-white/10 bg-black max-h-[55vh] flex justify-center">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-auto object-cover max-h-[55vh]"
                />
              </div>

              <p className="mt-4 text-xs sm:text-sm text-neutral-300 leading-relaxed font-light p-4 rounded-2xl bg-black/40 border border-white/5">
                {selectedItem.caption}
              </p>

              <div className="mt-4 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>Grace Cinemas Set Archive</span>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-white hover:underline cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
