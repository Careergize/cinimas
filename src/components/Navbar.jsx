import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { GraceEmblem } from "./GraceLogo";
import { NAV_LINKS, CONTACT_INFO } from "../data/content";

export default function Navbar({ activeScreen, onNavigate, onOpenConsultation, onReplayIntro }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (screenId) => {
    onNavigate(screenId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 select-none ${
          isScrolled
            ? "bg-[#07070a]/90 backdrop-blur-md border-b border-amber-400/[0.08] py-4 sm:py-5 shadow-[0_4px_30px_rgba(245,158,11,0.04)]"
            : "bg-transparent py-7 sm:pt-9 sm:pb-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          
          {/* Left Group: Brand Logo and Navigation Links side-by-side (100% UNTOUCHED for Desktop) */}
          <div className="flex items-center gap-10 lg:gap-14">
            
            {/* Brand Logo / Wordmark with Official Illuminated Emblem */}
            <button
              onClick={() => handleNavClick("home")}
              className="flex items-center gap-3 group cursor-pointer text-left focus:outline-none"
            >
              <GraceEmblem className="w-8 h-8" glow />
              <span
                className="text-lg sm:text-xl font-normal tracking-tight text-white group-hover:text-amber-200 transition-colors"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Grace Cinemas
              </span>
            </button>

            {/* Desktop Navigation Links (Clean, Spacious Editorial Typography - 100% UNTOUCHED) */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-9">
              {NAV_LINKS.map((link) => {
                const isActive = activeScreen === link.id;
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.id)}
                    className={`text-xs lg:text-[13px] tracking-wide transition-colors cursor-pointer ${
                      isActive
                        ? "text-amber-200 font-medium drop-shadow-[0_0_10px_rgba(245,158,11,0.35)]"
                        : "text-neutral-400 hover:text-white font-normal"
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </nav>

          </div>

          {/* Mobile Menu Hamburger Button (Proper 40x40px touch target with active response) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/10 hover:border-amber-400/40 text-neutral-300 hover:text-white active:scale-90 transition-all cursor-pointer focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-amber-300" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Luxury Mobile Navigation Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Dark blur backdrop (tap to dismiss) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-xl"
            />

            {/* Slide-Down Luxury Drawer Sheet */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-h-[92vh] overflow-y-auto bg-[#09090e]/98 border-b border-amber-400/20 shadow-[0_25px_60px_rgba(0,0,0,0.95)] px-6 pt-5 pb-8 flex flex-col z-10"
            >
              {/* Drawer Top Header with Logo and Close Icon */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <button
                  onClick={() => handleNavClick("home")}
                  className="flex items-center gap-3 cursor-pointer text-left focus:outline-none"
                >
                  <GraceEmblem className="w-7 h-7" glow />
                  <span
                    className="text-lg font-normal tracking-tight text-white"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    Grace Cinemas
                  </span>
                </button>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white active:scale-90 transition-all cursor-pointer focus:outline-none"
                  aria-label="Close Navigation Menu"
                >
                  <X className="w-5 h-5 text-amber-300" />
                </button>
              </div>

              {/* Navigation Items with Large Thumb Targets */}
              <div className="flex flex-col py-5 space-y-1">
                {NAV_LINKS.map((link) => {
                  const isActive = activeScreen === link.id;
                  return (
                    <button
                      key={link.name}
                      onClick={() => handleNavClick(link.id)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all cursor-pointer text-left ${
                        isActive
                          ? "bg-amber-400/10 text-amber-300 font-semibold border border-amber-400/20"
                          : "text-neutral-300 hover:text-white hover:bg-white/[0.04]"
                      }`}
                    >
                      <span className="text-base tracking-wide font-normal">{link.name}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Action Buttons & Studio Hotline */}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-3.5 rounded-full bg-white hover:bg-amber-100 text-black font-semibold text-xs uppercase tracking-wider text-center cursor-pointer shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <span>Pitch a Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={CONTACT_INFO.phoneTel}
                  className="text-xs font-mono text-neutral-400 text-center py-1 hover:text-amber-200 transition-colors"
                >
                  Direct Hotline: {CONTACT_INFO.phone}
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
