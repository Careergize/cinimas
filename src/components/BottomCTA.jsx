import React from "react";
import { motion } from "framer-motion";
import { PhoneCall, ArrowRight, ShieldCheck, MapPin, Mail, Clapperboard } from "lucide-react";
import { CONTACT_INFO } from "../data/content";

export default function BottomCTA({ onOpenConsultation }) {
  return (
    <section id="cta" className="relative pt-24 pb-32 bg-transparent overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* Main CTA Stage Box with Curved Ruby & Amber Neon Glow Arc */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2.5rem] bg-[#0c0c12] border border-amber-500/20 px-6 sm:px-12 pt-16 sm:pt-20 pb-28 sm:pb-36 text-center overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.9)]"
        >
          {/* Subtle grid pattern inside card */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

          {/* Upper ambient gold glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-28 bg-amber-400/12 blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-amber-400/30 text-neutral-300 text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span>{CONTACT_INFO.companyName.toUpperCase()}</span>
          </div>

          {/* Headline from CONTACT_INFO */}
          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-[1.1]"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            LET'S BUILD YOUR BRAND{" "}
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(245,158,11,0.35)]">
              VISUALLY
            </span>
          </h2>

          {/* Tagline & Subtitle */}
          <p className="mt-4 text-base sm:text-lg text-amber-400 font-mono font-semibold tracking-wider uppercase">
            {CONTACT_INFO.subTagline}
          </p>
          <p className="mt-2 text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Partner with Grace Cinemas International for full-length feature films, commercial brand ads, casting management, and turnkey line production worldwide.
          </p>

          {/* Action Buttons (Aurient Minimalist Pill Style) */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 relative z-20">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-3.5 rounded-full bg-white hover:bg-amber-100 text-black font-semibold text-xs uppercase tracking-wider transition-all shadow-[0_4px_25px_rgba(245,158,11,0.2)] active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <Clapperboard className="w-4 h-4" />
              <span>Pitch a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={CONTACT_INFO.phoneTel}
              className="px-7 py-3.5 rounded-full border border-white/20 hover:border-amber-400/40 text-white hover:text-amber-200 font-medium text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>Call {CONTACT_INFO.phone}</span>
            </a>

            <a
              href={CONTACT_INFO.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-full bg-white/[0.03] hover:bg-amber-500/10 border border-white/10 hover:border-amber-400/40 text-neutral-300 hover:text-amber-200 font-medium text-sm sm:text-base transition-all flex items-center gap-2 font-mono"
            >
              <svg className="w-4 h-4 fill-current text-amber-400" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>{CONTACT_INFO.instagram.handle}</span>
            </a>
          </div>

          {/* Quick contact perks */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 font-mono relative z-20">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              Direct Studio & Production Booking
            </span>
            <span className="text-neutral-600 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-400" />
              {CONTACT_INFO.address.full}
            </span>
            <span className="text-neutral-600 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5 text-amber-300 font-bold">
              📞 {CONTACT_INFO.phone}
            </span>
          </div>

          {/* Signature Curved Ruby-to-Amber Neon Glow Arc */}
          <div className="curved-bottom-glow-arc pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
}
