import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  Sparkles, 
  FileText, 
  X, 
  CheckCircle2, 
  PhoneCall, 
  Camera, 
  Sliders, 
  Clapperboard,
  Film
} from "lucide-react";
import posterImg from "../assets/gci_services_poster.jpg";
import { SERVICES, CONTACT_INFO } from "../data/content";

export default function CapabilitiesBento({ onSelectCapability }) {
  const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const iconMap = {
    "brand-content-advertising": Clapperboard,
    "production-execution": Camera,
    "post-design": Sliders
  };

  return (
    <section id="services" className="relative py-28 overflow-hidden bg-transparent border-t border-white/10">
      {/* Warm projector beam glow matching home screen */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-l from-[#d45d2b]/15 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#1e293b]/20 to-transparent blur-[160px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 sm:px-10 lg:px-16 max-w-7xl">
        
        {/* Editorial Section Header (Matching Aurient Theme) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-white/10 text-left">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-neutral-400 block mb-3">
              Crafting Stories • Building Brands
            </span>
            <h2
              className="text-3xl sm:text-5xl font-normal text-white tracking-[-0.03em] leading-tight"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Services engineered for cinema <br className="hidden sm:inline" />
              and brand growth.
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              onClick={() => setIsPosterModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 hover:border-white/50 text-neutral-300 hover:text-white transition-all text-xs font-mono uppercase tracking-wider group cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-rose-400" />
              <span>Official Client Flyer</span>
            </button>

            <button
              onClick={onSelectCapability}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-neutral-100 text-black font-semibold text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 3 Core Services Grid (Matching the 3 verticals from Client Poster) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.id] || Film;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative rounded-3xl bg-[#0e0e13]/80 border border-white/10 hover:border-white/25 p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              >
                {/* Top Row: Number & Icon */}
                <div>
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/5">
                    <span className="font-mono text-2xl font-light text-neutral-500 group-hover:text-white transition-colors">
                      {service.number}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-neutral-300 group-hover:text-white group-hover:border-white/30 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-rose-400 font-semibold block mb-2">
                    {service.badge}
                  </span>
                  <h3
                    className="text-2xl font-medium text-white tracking-tight leading-snug group-hover:text-white transition-colors"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {service.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                    {service.desc}
                  </p>

                  {/* Sub-Services Checklist (from Client Poster) */}
                  <div className="mt-8 pt-6 border-t border-white/5 space-y-3">
                    <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-neutral-500 block">
                      Vertical Deliverables
                    </span>
                    {service.items.map((item) => (
                      <div key={item.name} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                        <div>
                          <span className="font-medium text-white">{item.name}</span>
                          <span className="text-neutral-500 block text-[11px] font-light mt-0.5">{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (onSelectCapability) onSelectCapability(service.title);
                    }}
                    className="text-xs font-mono uppercase tracking-wider text-white hover:text-rose-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Inquire Vertical</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase">
                    Kerala & Worldwide
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Poster Brand Banner: Let's Build Your Brand Visually */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#fa9869] font-semibold block">
              Official Client Services Roster
            </span>
            <h4 className="text-xl sm:text-2xl font-normal text-white tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
              Let's Build Your Brand Visually.
            </h4>
            <p className="text-xs text-neutral-400 font-light">
              Turnkey solutions across Brand Advertising, Production & Studio Execution, and Post & Design.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => setIsPosterModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 hover:border-white/40 text-neutral-200 hover:text-white transition-all text-xs font-mono uppercase tracking-wider cursor-pointer bg-white/5"
            >
              <FileText className="w-3.5 h-3.5 text-[#fa9869]" />
              <span>View Official Poster</span>
            </button>

            <a
              href={CONTACT_INFO.phoneTel}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-neutral-100 text-black font-semibold text-xs font-mono uppercase tracking-wider transition-all shadow-lg"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Hotline: {CONTACT_INFO.phoneRaw}</span>
            </a>
          </div>
        </div>

      </div>

      {/* Official Poster Modal */}
      <AnimatePresence>
        {isPosterModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-2xl w-full bg-[#0e0e13] border border-white/15 rounded-3xl p-6 shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div>
                  <h3 className="text-base font-bold text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
                    Grace Cinemas International • Official Services Poster
                  </h3>
                  <p className="text-xs text-neutral-400 font-mono">
                    Brand Content • Production & Execution • Post & Design
                  </p>
                </div>
                <button
                  onClick={() => setIsPosterModalOpen(false)}
                  className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="rounded-2xl overflow-hidden bg-black border border-white/10 max-h-[70vh] flex items-center justify-center">
                <img
                  src={posterImg}
                  alt="Official Services Poster"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-neutral-400 font-mono">
                <span>Hotline: {CONTACT_INFO.phone}</span>
                <span className="text-rose-400">@gracecinemasinternational</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
