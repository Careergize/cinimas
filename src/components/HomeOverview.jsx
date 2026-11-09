import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Film, Camera, Clapperboard, Sliders, MapPin, Sparkles, UserCheck } from "lucide-react";
import { PRODUCTIONS, SERVICES, CONTACT_INFO } from "../data/content";

export default function HomeOverview({ onNavigate, onOpenConsultation }) {
  // Grab top 3 spotlight productions
  const featuredThree = PRODUCTIONS.slice(0, 3);

  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 space-y-28 text-left">
      
      {/* 1. Quick Screen Navigation Portal Bar */}
      <div className="rounded-3xl bg-white/[0.02] border border-white/10 p-6 sm:p-8 backdrop-blur-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#fa9869] font-medium block mb-1">
              Studio Screens
            </span>
            <h3 className="text-xl sm:text-2xl font-light text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
              Explore Grace Cinemas International
            </h3>
          </div>
          <span className="text-xs font-mono text-neutral-400">
            Dedicated multi-screen cinema hub
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-6">
          {[
            { id: "productions", label: "Productions", desc: "6 Cinema Slates", icon: Film },
            { id: "services", label: "Services", desc: "11 Deliverables", icon: Sliders },
            { id: "casting", label: "Casting Desk", desc: "Active Auditions", icon: UserCheck },
            { id: "story", label: "Our Story", desc: "5-Year Memoir & BTS", icon: Camera },
            { id: "contact", label: "Studio HQ", desc: "Nalanchira, Kerala", icon: MapPin },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="group p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.07] border border-white/5 hover:border-white/20 transition-all text-left flex flex-col justify-between cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 group-hover:text-white group-hover:scale-105 transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div>
                  <div className="text-xs font-mono font-medium text-white group-hover:text-[#fa9869] transition-colors">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-neutral-500 font-light mt-0.5">
                    {item.desc}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Spotlight Productions Section */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/10">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-neutral-400 block mb-2">
              Cinema Slate Highlights
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-white tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
              Featured Releases & In-Production
            </h2>
          </div>
          <button
            onClick={() => onNavigate("productions")}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 hover:border-white/50 text-white transition-all text-xs font-mono uppercase tracking-wider group cursor-pointer self-start sm:self-end"
          >
            <span>View All 6 Productions</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* 3 Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {featuredThree.map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate("productions")}
              className="group rounded-3xl bg-[#0e0e13]/80 border border-white/10 hover:border-white/25 overflow-hidden transition-all duration-300 cursor-pointer flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            >
              <div className="relative h-64 overflow-hidden bg-black">
                <img
                  src={item.posterUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e13] via-transparent to-black/30" />
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white border border-white/15 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    {item.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <span className="text-[11px] font-mono text-neutral-400 block mb-1">
                  {item.year} • {item.genre}
                </span>
                <h3 className="text-xl font-medium text-white tracking-tight group-hover:text-rose-200 transition-colors" style={{ fontFamily: "Outfit, sans-serif" }}>
                  {item.title}
                </h3>
                <p className="mt-3 text-xs text-neutral-400 line-clamp-2 font-light leading-relaxed">
                  {item.synopsis}
                </p>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-400 group-hover:text-white">
                  <span>View Slate</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Core Services Summary Strip */}
      <div className="rounded-3xl bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/10 p-8 sm:p-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#fa9869] font-medium block mb-2">
              Official Services Roster
            </span>
            <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight leading-snug" style={{ fontFamily: "Outfit, sans-serif" }}>
              Crafting Stories. Building Brands.
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
              Full-service studio handling Brand Content & Advertising, Turnkey Production & Execution, and DaVinci Post & Design across Kerala.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate("services")}
              className="px-6 py-3 rounded-full bg-white hover:bg-neutral-100 text-black font-semibold text-xs font-mono uppercase tracking-wider transition-all shadow-lg cursor-pointer"
            >
              Explore 11 Services →
            </button>
            <a
              href={CONTACT_INFO.phoneTel}
              className="px-6 py-3 rounded-full border border-white/15 hover:border-white/40 text-neutral-200 hover:text-white text-xs font-mono uppercase tracking-wider transition-all"
            >
              Call {CONTACT_INFO.phoneRaw}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
          {SERVICES.map((srv) => (
            <div key={srv.id} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-left">
              <span className="text-xs font-mono text-neutral-500 font-medium block mb-1">
                Vertical {srv.number}
              </span>
              <h4 className="text-sm font-medium text-white">
                {srv.title}
              </h4>
              <p className="text-[11px] text-neutral-400 font-light mt-1.5 line-clamp-2">
                {srv.items.map(i => i.name).join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Founder Memoir Quote Card */}
      <div className="relative rounded-3xl bg-[#0e0e13]/85 border border-white/10 p-8 sm:p-14 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#fa9869]/10 to-transparent rounded-bl-full pointer-events-none" />
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#fa9869] font-medium block">
            The 5-Year Journey
          </span>
          <p className="text-xl sm:text-3xl text-white font-light font-serif italic leading-relaxed">
            "Somewhere along the way... without even realizing it... growth happened. From nothing... to something."
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <span className="text-neutral-400">— Mridul Rajesh, Founder & Creative Director</span>
            <button
              onClick={() => onNavigate("story")}
              className="text-[#fa9869] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Read Full Memoir & Behind-the-Scenes Archive</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

