import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUpRight, Phone, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";
import { GraceEmblem } from "./GraceLogo";
import { CONTACT_INFO } from "../data/content";

export default function Footer({ onNavigate, onOpenConsultation, onReplayIntro }) {
  const [contactOpen, setContactOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <footer className="relative bg-[#08080c] border-t border-white/10 text-neutral-400 overflow-hidden select-none">
      
      {/* Soft atmospheric ambient gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-14 pb-28 md:pb-12 text-left">
        
        {/* Top Editorial Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-white/[0.08]">
          
          {/* Wordmark & Tagline Lockup */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <button
              onClick={() => onNavigate && onNavigate("home")}
              className="flex items-center gap-3 cursor-pointer text-left focus:outline-none group shrink-0"
            >
              <GraceEmblem className="w-8 h-8" glow />
              <span
                className="text-2xl font-normal tracking-tight text-white group-hover:text-amber-200 transition-colors"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Grace Cinemas
              </span>
            </button>

            <span className="hidden sm:inline-block w-px h-5 bg-white/15" />

            {/* Editorial Serif Tagline */}
            <p className="m-0 font-serif italic text-base sm:text-lg text-neutral-300/90 font-light tracking-wide">
              {CONTACT_INFO.tagline || "Crafting Stories. Building Brands."}
            </p>
          </div>

          {/* Action Link / Pill Button */}
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.04] hover:bg-white text-neutral-200 hover:text-black border border-white/15 hover:border-white text-xs font-mono uppercase tracking-wider transition-all duration-300 shadow-md group cursor-pointer self-start lg:self-auto"
          >
            <span>Pitch your project</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom Metadata & Interactive Drawers Row */}
        <div className="pt-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-neutral-400 font-mono">
          
          {/* Copyright */}
          <span className="text-neutral-500 font-light">
            © {new Date().getFullYear()} {CONTACT_INFO.companyName} · Nalanchira, Trivandrum
          </span>

          {/* Center Accordion Triggers */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            
            {/* Contact Drawer Trigger */}
            <button
              onClick={() => {
                setContactOpen(!contactOpen);
                if (termsOpen) setTermsOpen(false);
              }}
              className={`inline-flex items-center gap-1.5 transition-colors cursor-pointer font-medium ${
                contactOpen ? "text-[#fa9869]" : "text-neutral-300 hover:text-white"
              }`}
            >
              <span>Contact details</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  contactOpen ? "rotate-180 text-[#fa9869]" : "text-neutral-500"
                }`}
              />
            </button>

            {/* Terms Drawer Trigger */}
            <button
              onClick={() => {
                setTermsOpen(!termsOpen);
                if (contactOpen) setContactOpen(false);
              }}
              className={`inline-flex items-center gap-1.5 transition-colors cursor-pointer font-medium ${
                termsOpen ? "text-[#fa9869]" : "text-neutral-300 hover:text-white"
              }`}
            >
              <span>Screenplay & IP Rights</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  termsOpen ? "rotate-180 text-[#fa9869]" : "text-neutral-500"
                }`}
              />
            </button>
          </div>

          {/* Far Right Direct Social Links */}
          <div className="flex items-center gap-4 text-xs font-mono pt-2 md:pt-0">
            <a
              href={CONTACT_INFO.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1 group"
            >
              <span>Instagram</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>

        </div>

        {/* Animated Contact Drawer Panel */}
        <AnimatePresence>
          {contactOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden mt-6"
            >
              <div className="p-6 rounded-2xl bg-[#0e0e14] border border-white/10 shadow-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs font-mono">
                <div>
                  <span className="text-neutral-500 uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3 h-3 text-[#fa9869]" />
                    Direct Hotline
                  </span>
                  <a
                    href={CONTACT_INFO.phoneTel}
                    className="text-white hover:text-[#fa9869] font-medium transition-colors block text-sm"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                  <span className="text-[11px] text-neutral-500 block mt-0.5">{CONTACT_INFO.workingHours}</span>
                </div>

                <div>
                  <span className="text-neutral-500 uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-3 h-3 text-[#fa9869]" />
                    General Production Desk
                  </span>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-neutral-200 hover:text-white transition-colors block truncate"
                  >
                    {CONTACT_INFO.email}
                  </a>
                  <span className="text-[11px] text-neutral-500 block mt-0.5">Pre-pro & brand partnerships</span>
                </div>

                <div>
                  <span className="text-neutral-500 uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-3 h-3 text-[#fa9869]" />
                    Casting & Screen Tests
                  </span>
                  <a
                    href={`mailto:${CONTACT_INFO.castingEmail}`}
                    className="text-rose-300 hover:text-white transition-colors block truncate"
                  >
                    {CONTACT_INFO.castingEmail}
                  </a>
                  <span className="text-[11px] text-neutral-500 block mt-0.5">Talent auditions & showreels</span>
                </div>

                <div>
                  <span className="text-neutral-500 uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#fa9869]" />
                    Studio Headquarters
                  </span>
                  <span className="text-neutral-300 block font-light leading-relaxed">
                    {CONTACT_INFO.address.full}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Animated Terms & IP Drawer Panel */}
        <AnimatePresence>
          {termsOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden mt-6"
            >
              <div className="p-6 rounded-2xl bg-[#0e0e14] border border-white/10 shadow-xl flex items-start gap-4">
                <div className="w-8 h-8 rounded-xl bg-[#fa9869]/10 border border-[#fa9869]/20 flex items-center justify-center text-[#fa9869] shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="space-y-1.5 text-xs text-neutral-400 font-light leading-relaxed">
                  <h4 className="text-sm font-medium text-white font-mono uppercase tracking-wider">
                    Intellectual Property & Script Protection Notice
                  </h4>
                  <p>
                    All screenplay treatments, commercial scripts, storyboard animatics, and audio-visual masters submitted to Grace Cinemas International are logged with digital timestamp verification upon receipt.
                  </p>
                  <p className="text-[11px] text-neutral-500 font-mono">
                    Protected under the Indian Copyright Act, 1957 and International Berne Convention Treaties. Unsolicited manuscripts are reviewed under standard studio non-disclosure protocols.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </footer>
  );
}
