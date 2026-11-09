import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Phone, Mail, Clock, ExternalLink, UserCheck, ArrowUpRight } from "lucide-react";
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
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
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
              <a 
                href={CONTACT_INFO.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-neutral-300 hover:text-amber-300 mt-2 flex items-start gap-2 font-light transition-colors group cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>{CONTACT_INFO.address.full}</span>
              </a>

              {/* Real Interactive Embedded Google Map */}
              <div className="mt-8 rounded-2xl overflow-hidden border border-amber-400/25 relative h-72 sm:h-84 w-full shadow-2xl bg-[#08080c] group">
                <iframe
                  title="Grace Cinemas International Studio Headquarters Map"
                  src="https://maps.google.com/maps?q=Rajiv+Gandhi+Nagar,+Nalanchira,+Thiruvananthapuram+695015&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 brightness-[0.88] contrast-[1.05] grayscale-[15%] hover:grayscale-0 hover:brightness-100 transition-all duration-500"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Direct Google Maps link overlay */}
                <a
                  href={CONTACT_INFO.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a0a0f]/90 hover:bg-black text-amber-300 hover:text-white border border-amber-400/35 text-xs font-mono tracking-wider backdrop-blur-md transition-all shadow-xl active:scale-95"
                >
                  <Navigation className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-amber-400" />
                </a>

                {/* Studio Location Pill Overlay */}
                <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-wider text-neutral-300 flex items-center gap-1.5 pointer-events-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>Nalanchira Studio HQ</span>
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
                  <Phone className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                  <div>
                    <span className="text-[10px] text-neutral-500 uppercase block">Official Phone / Hotline</span>
                    <a href={CONTACT_INFO.phoneTel} className="text-white hover:text-amber-300 font-medium text-sm transition-colors block mt-0.5">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                  <Mail className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                  <div className="min-w-0">
                    <span className="text-[10px] text-neutral-500 uppercase block">Project Pitches & Screenplays</span>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-white hover:text-amber-300 transition-colors truncate block mt-0.5">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Casting Email */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                  <UserCheck className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                  <div className="min-w-0">
                    <span className="text-[10px] text-neutral-500 uppercase block">Casting & Audition Reels</span>
                    <a href={`mailto:${CONTACT_INFO.castingEmail}`} className="text-white hover:text-amber-300 transition-colors truncate block mt-0.5">
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
