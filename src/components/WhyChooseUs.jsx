import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Zap, 
  Cpu, 
  CheckCircle2, 
  Clock, 
  HeartHandshake, 
  Layers, 
  ArrowRight,
  PhoneCall
} from "lucide-react";

export default function WhyChooseUs({ onOpenConsultation }) {
  const pillars = [
    {
      id: "tech",
      number: "01",
      title: "Cinema-Scale Hardware",
      desc: "We don't cut corners with consumer gear. Every project is filmed with full-frame cinema cameras (Sony FX6, FX3, RED Komodo), cinema prime lenses, studio softboxes, and broadcast-grade microphones.",
      badge: "Production Standard",
      icon: Cpu,
    },
    {
      id: "pipeline",
      number: "02",
      title: "Seamless Turnkey Pipeline",
      desc: "From the initial concept brief and scriptwriting to filming, DaVinci Resolve color grading, audio mastering, and graphic design — every step is handled by our in-house team under one roof.",
      badge: "End-to-End",
      icon: Layers,
    },
    {
      id: "studio",
      number: "03",
      title: "Acoustic Treated Studio Lounge",
      desc: "Need a controlled environment for your video podcast or talk show? Our studio in Nalanchira, Trivandrum is sound-treated and equipped with multi-camera angles and professional softbox lighting.",
      badge: "Trivandrum Facility",
      icon: Zap,
    },
    {
      id: "transparency",
      number: "04",
      title: "Agile Delivery & Transparent Pricing",
      desc: "No hidden fees or bureaucratic delays. We deliver rapid turnarounds with structured revision milestones, ensuring you launch campaigns on time and strictly within budget.",
      badge: "Client First",
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="why-us" className="relative py-28 bg-[#07070a] overflow-hidden border-t border-white/5">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 right-[-10%] w-[550px] h-[550px] rounded-full bg-rose-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-[-10%] w-[500px] h-[500px] rounded-full bg-amber-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-3 font-mono"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            The GCI Advantage
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-3xl"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Why Brands & Creators Choose{" "}
            <span className="bg-gradient-to-r from-rose-500 via-rose-400 to-amber-300 bg-clip-text text-transparent">
              Grace Cinemas
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl font-normal leading-relaxed"
          >
            We combine storytelling instinct with cutting-edge cinema technology so your brand stands out with undeniable visual authority.
          </motion.p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0c0c14] to-[#08080c] border border-white/10 hover:border-rose-500/40 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between shadow-xl"
              >
                <div className="absolute top-0 right-0 w-44 h-44 bg-rose-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-rose-500/20 transition-all duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-extrabold font-mono text-white/20 group-hover:text-rose-400 transition-colors">
                      {item.number}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/[0.04] text-rose-300 border border-white/10 font-bold">
                      {item.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/25 flex items-center justify-center text-rose-400 shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm text-neutral-400 leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span className="flex items-center gap-1.5 text-neutral-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-rose-400" />
                    Verified GCI Commitment
                  </span>
                  <span className="text-rose-400 font-semibold group-hover:translate-x-1 transition-transform">
                    Learn More →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Trust Action Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 rounded-3xl bg-[#0b0b12] border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-rose-400 font-bold block mb-1">
              Have a Project in Mind?
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
              Let's discuss your brand's visual identity.
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Call our creative directors directly at <strong className="text-white font-mono">+91 98765 43210</strong> or schedule a discovery meeting.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+919876543210"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-rose-600 to-amber-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 hover:scale-105 transition-transform shadow-[0_0_20px_rgba(225,29,72,0.4)]"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call +91 98765 43210</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="px-5 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-medium text-xs sm:text-sm transition-all"
            >
              Book Discovery Session
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

