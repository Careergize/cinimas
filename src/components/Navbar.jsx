import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { GraceEmblem } from "./GraceLogo";
import { NAV_LINKS, CONTACT_INFO } from "../data/content";

export default function Navbar({ activeScreen, onNavigate, onOpenConsultation }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (screenId) => {
    onNavigate(screenId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-[#07070a]/80 backdrop-blur-xl border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Wordmark */}
        <button
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-3 group cursor-pointer text-left focus:outline-none"
        >
          <GraceEmblem className="w-8 h-8" glow />
          <div className="flex flex-col">
            <span
              className="text-lg sm:text-xl font-normal tracking-tight text-white group-hover:text-amber-200 transition-colors leading-tight"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Grace Cinemas
            </span>
            <span className="text-[9px] font-mono uppercase tracking-[0.22em] text-neutral-400">
              International
            </span>
          </div>
        </button>

        {/* Desktop Screen Navigation Pills */}
        <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-white/[0.03] border border-white/10">
          {NAV_LINKS.map((link) => {
            const isActive = activeScreen === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "text-black font-semibold"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavScreenIndicator"
                    className="absolute inset-0 bg-white rounded-full shadow-md z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white hover:bg-neutral-100 text-black font-semibold text-xs font-mono uppercase tracking-wider transition-all shadow-lg cursor-pointer"
          >
            <span>Pitch Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-neutral-300 hover:text-white bg-white/5 border border-white/10 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0a0a0f]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 mb-2">
                Select Screen
              </span>
              {NAV_LINKS.map((link) => {
                const isActive = activeScreen === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-mono tracking-wider transition-all text-left ${
                      isActive
                        ? "bg-white text-black font-semibold shadow-sm"
                        : "bg-white/[0.02] text-neutral-300 hover:bg-white/[0.06] border border-white/5"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="text-[10px] uppercase font-mono tracking-widest">• ACTIVE</span>}
                  </button>
                );
              })}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-3 rounded-full bg-white text-black font-semibold text-xs font-mono uppercase tracking-wider text-center shadow-lg"
                >
                  Pitch a Project →
                </button>

                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 px-1 pt-1">
                  <span>Hotline: {CONTACT_INFO.phoneRaw}</span>
                  <span className="text-rose-400">@gracecinemasinternational</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
