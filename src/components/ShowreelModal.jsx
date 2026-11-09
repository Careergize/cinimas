import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Film, Sparkles } from "lucide-react";

export default function ShowreelModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-4xl rounded-3xl bg-[#0c0c12] border border-white/15 p-4 sm:p-6 shadow-2xl overflow-hidden"
      >
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
          <div className="flex items-center gap-2">
            <Film className="w-5 h-5 text-amber-400" />
            <h3 className="text-base sm:text-lg font-bold text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
              Grace Cinemas International • Studio Showreel
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="rounded-2xl overflow-hidden bg-black border border-white/10 aspect-video shadow-2xl">
          <video
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
            controls
            autoPlay
            playsInline
            className="w-full h-full object-contain"
          />
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-neutral-400 font-mono">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            4K Theatrical Features • Commercial Ads • Color Grading Suite
          </span>
          <span className="text-neutral-500">
            Thiruvananthapuram, Kerala
          </span>
        </div>
      </motion.div>
    </div>
  );
}
