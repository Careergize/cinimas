import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Phone, Mail, Clock, ExternalLink, Sparkles, ArrowUpRight } from "lucide-react";
import { CONTACT_INFO } from "../data/content";

export default function LocationMapSection() {
  return (
    <section id="contact" className="relative py-28 bg-transparent border-t border-white/10 overflow-hidden">
      {/* Warm ambient studio glow */}
      <div className="absolute top-1/4 right-[-5%] w-[600px] h-[500px] rounded-full bg-gradient-to-l from-[#d45d2b]/12 to-transparent blur-[160px] pointer-events-none" />
      <div className="container relative z-10 mx-auto px-6 sm:px-10 lg:px-16 max-w-7xl">

        {/* Section Header (Aurient Editorial Header) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-white/10 text-left">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-neutral-400 block mb-3">
              Studio Location & Contact
            </span>
            <h2
              className="text-3xl sm:text-5xl font-normal text-white tracking-[-0.03em] leading-tight"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Connect with our <br className="hidden sm:inline" />
              production headquarters.
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={CONTACT_INFO.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-neutral-100 text-black font-semibold text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer"
            >
              <span>Google Maps</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Location Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">

          {/* Map Visual & Coordinates Card (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-3xl bg-[#0e0e13]/80 border border-white/10 p-8 sm:p-10 flex flex-col justify-between hover:border-white/25 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          >
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/5">
                <span className="text-xs font-mono uppercase tracking-wider text-rose-400 font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                  Verified Production Facility
                </span>
                <span className="text-[11px] font-mono text-neutral-400">
                  PIN: {CONTACT_INFO.address.pincode}
                </span>
              </div>

              <h3
                className="text-2xl font-medium text-white tracking-tight"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                {CONTACT_INFO.companyName}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-2 flex items-start gap-2 font-light">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address.full}</span>
              </p>

              {/* Minimalist Visual Coordinates Canvas */}
              <div className="mt-8 rounded-2xl bg-[#08080c] border border-white/10 p-6 relative overflow-hidden h-52 flex flex-col justify-between">
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />

                {/* Subtle radar pulse circles */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-white/10 animate-ping" style={{ animationDuration: '4s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-white/15" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-rose-500/20 border border-rose-500/40 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-rose-500 shadow-[0_0_12px_#e11d48]" />
                </div>

                <div className="relative z-10 flex justify-between text-[11px] font-mono text-neutral-400">
                  <span className="bg-black/60 px-2 py-0.5 rounded border border-white/10">{CONTACT_INFO.address.area}</span>
                  <span className="text-white bg-black/60 px-2 py-0.5 rounded border border-white/10">Active Desk</span>
                </div>

                <div className="relative z-10 flex justify-between items-end text-[11px] font-mono text-neutral-400">
                  <span className="bg-black/60 px-2 py-0.5 rounded border border-white/10">8.5441° N, 76.9423° E</span>
                  <span className="text-neutral-300 bg-black/60 px-2 py-0.5 rounded border border-white/10">Thiruvananthapuram</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
                <Clock className="w-3.5 h-3.5 text-neutral-500" />
                <span>{CONTACT_INFO.workingHours}</span>
              </div>

              <a
                href={CONTACT_INFO.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 hover:border-white/50 text-white font-mono text-xs uppercase tracking-wider transition-all"
              >
                <span>Navigate</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Contact Details & Desks (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 rounded-3xl bg-[#0e0e13]/80 border border-white/10 p-8 sm:p-10 flex flex-col justify-between hover:border-white/25 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 font-semibold block mb-2">
                Communications
              </span>
              <h3
                className="text-2xl font-medium text-white tracking-tight"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Production Desks
              </h3>
              <p className="text-xs text-neutral-400 mt-1 font-light leading-relaxed">
                Connect with our line producers, casting directors, and post-production supervisors.
              </p>

              <div className="mt-8 flex flex-col gap-4 text-xs font-mono">
                {/* Phone */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                  <Phone className="w-4 h-4 text-rose-400 mt-1 shrink-0" />
                  <div>
                    <span className="text-[10px] text-neutral-500 uppercase block">Official Phone / Hotline</span>
                    <a href={CONTACT_INFO.phoneTel} className="text-white hover:text-rose-400 font-medium text-sm transition-colors block mt-0.5">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                  <Mail className="w-4 h-4 text-rose-400 mt-1 shrink-0" />
                  <div className="min-w-0">
                    <span className="text-[10px] text-neutral-500 uppercase block">Project Pitches & Screenplays</span>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-white hover:text-rose-400 transition-colors truncate block mt-0.5">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Casting Email */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-rose-400 mt-1 shrink-0" />
                  <div className="min-w-0">
                    <span className="text-[10px] text-neutral-500 uppercase block">Casting & Audition Reels</span>
                    <a href={`mailto:${CONTACT_INFO.castingEmail}`} className="text-white hover:text-rose-400 transition-colors truncate block mt-0.5">
                      {CONTACT_INFO.castingEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>Nalanchira Studio Suite</span>
              <span className="text-white">Thiruvananthapuram</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
