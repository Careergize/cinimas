import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Film, Camera, Clapperboard, Sliders, MapPin, UserCheck, Play, FileText } from "lucide-react";
import { PRODUCTIONS, SERVICES, CONTACT_INFO } from "../data/content";
import posterImg from "../assets/gci_services_poster.jpg";

export default function HomeOverview({ onNavigate, onOpenConsultation }) {
  // Grab top 3 spotlight productions
  const featuredThree = PRODUCTIONS.slice(0, 3);

  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-24 space-y-24 sm:space-y-32 text-left">
      
      {/* 1. Studio Screens Portal Hub */}
      <div className="relative rounded-3xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/10 p-6 sm:p-10 backdrop-blur-xl shadow-2xl overflow-hidden hover:border-amber-500/20 transition-colors">
        {/* Subtle interior gold glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-400/6 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-amber-400 font-medium block mb-2">
              Studio Navigation Hub
            </span>
            <h3
              className="text-2xl sm:text-3xl font-normal text-white tracking-tight"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Explore Grace Cinemas International
            </h3>
          </div>
          <span className="text-xs font-mono text-neutral-400 font-light">
            Dedicated multi-screen production portal
          </span>
        </div>

        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 pt-6">
          {[
            { id: "productions", label: "Productions", desc: "6 Cinema Slates", icon: Film, badge: "Slate" },
            { id: "services", label: "Services", desc: "11 Deliverables", icon: Sliders, badge: "Studio" },
            { id: "casting", label: "Casting Desk", desc: "Active Auditions", icon: UserCheck, badge: "Talent" },
            { id: "story", label: "Our Story", desc: "5-Year Memoir", icon: Camera, badge: "Journey" },
            { id: "contact", label: "Studio HQ", desc: "Global Production Desk", icon: MapPin, badge: "Visit" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="group p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-amber-400/25 transition-all duration-300 text-left flex flex-col justify-between cursor-pointer shadow-sm hover:shadow-[0_8px_30px_rgba(245,158,11,0.06)] hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 group-hover:text-amber-200 group-hover:border-amber-400/40 group-hover:bg-amber-400/10 transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-amber-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-xs font-mono font-medium text-white group-hover:text-amber-200 transition-colors">
                      {item.label}
                    </span>
                  </div>
                  <div className="text-[11px] text-neutral-400 font-light">
                    {item.desc}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Cinema Slate Highlights */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/10">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-amber-400 font-medium block mb-2">
              Cinema Slate Highlights
            </span>
            <h2
              className="text-3xl sm:text-5xl font-normal text-white tracking-[-0.03em] leading-tight"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Featured Releases & In-Production
            </h2>
          </div>
          <button
            onClick={() => onNavigate("productions")}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 hover:border-amber-400/40 text-white hover:text-amber-200 transition-all text-xs font-mono uppercase tracking-wider group cursor-pointer self-start sm:self-end bg-white/[0.02] hover:bg-amber-400/5 shadow-sm"
          >
            <span>View All 6 Productions</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* 3 Featured Production Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {featuredThree.map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate("productions")}
              className="group rounded-3xl bg-[#0e0e13]/85 border border-white/10 hover:border-amber-400/30 overflow-hidden transition-all duration-300 cursor-pointer flex flex-col justify-between hover:shadow-[0_15px_45px_rgba(245,158,11,0.08)]"
            >
              {/* Poster Banner */}
              <div className="relative h-64 overflow-hidden bg-black">
                <img
                  src={item.posterUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e13] via-transparent to-black/30" />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-white border border-white/15 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/25">
                    {item.status}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7">
                <span className="text-[11px] font-mono text-neutral-400 block mb-2">
                  {item.year} • {item.genre}
                </span>
                <h3
                  className="text-xl font-medium text-white tracking-tight group-hover:text-amber-200 transition-colors leading-snug"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="mt-3 text-xs text-neutral-400 line-clamp-2 font-light leading-relaxed">
                  {item.synopsis}
                </p>

                <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-400 group-hover:text-white transition-colors">
                  <span>Inspect Slate</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Core Services Summary Strip */}
      <div className="relative rounded-3xl bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/10 p-8 sm:p-14 overflow-hidden shadow-2xl hover:border-amber-400/20 transition-colors">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-amber-400/8 via-amber-500/4 to-transparent rounded-bl-full pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-white/10">
          <div className="max-w-xl">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-amber-400 font-medium block mb-2">
              Official Client Services Roster
            </span>
            <h3
              className="text-2xl sm:text-4xl font-normal text-white tracking-tight leading-tight"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Crafting Stories. Building Brands.
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
              Full-service studio handling Brand Content & Advertising, Turnkey Production & Execution, and DaVinci Post & Design for global productions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate("services")}
              className="px-6 py-3 rounded-full bg-white hover:bg-neutral-100 text-black font-semibold text-xs font-mono uppercase tracking-wider transition-all shadow-[0_4px_25px_rgba(245,158,11,0.15)] cursor-pointer"
            >
              Explore 11 Services →
            </button>
            <button
              onClick={() => onNavigate("services")}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 hover:border-amber-400/50 text-neutral-200 hover:text-white text-xs font-mono uppercase tracking-wider transition-all bg-white/[0.04] cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>Official Poster</span>
            </button>
            <a
              href={CONTACT_INFO.phoneTel}
              className="px-6 py-3 rounded-full border border-white/15 hover:border-amber-400/40 text-neutral-200 hover:text-amber-200 text-xs font-mono uppercase tracking-wider transition-all bg-white/[0.02]"
            >
              Call {CONTACT_INFO.phoneRaw}
            </a>
          </div>
        </div>

        {/* 3 Vertical Breakdown Cards */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5 pt-8">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              onClick={() => onNavigate("services")}
              className="p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-amber-400/25 transition-all cursor-pointer group text-left hover:shadow-[0_8px_30px_rgba(245,158,11,0.05)]"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-amber-400 font-semibold">
                  Vertical {srv.number}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-amber-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <h4
                className="text-base font-medium text-white group-hover:text-amber-200 transition-colors"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                {srv.title}
              </h4>
              <p className="text-xs text-neutral-400 font-light mt-2 line-clamp-2 leading-relaxed">
                {srv.desc}
              </p>
              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-neutral-500">
                {srv.items.map(i => i.name).join(" • ")}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Founder Memoir Quote Card */}
      <div className="relative rounded-3xl bg-[#0e0e13]/85 border border-white/10 p-8 sm:p-14 overflow-hidden shadow-2xl hover:border-amber-400/20 transition-colors">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-amber-400/10 via-amber-500/5 to-transparent rounded-bl-full pointer-events-none" />
        <div className="max-w-3xl space-y-5">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-400 font-medium block">
            The 5-Year Journey
          </span>
          <p className="text-xl sm:text-3xl text-white font-light font-serif italic leading-relaxed">
            "Somewhere along the way... without even realizing it... growth happened. From nothing... to something."
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <span className="text-neutral-400 font-light">— Mridul Rajesh, Founder & Creative Director</span>
            <button
              onClick={() => onNavigate("story")}
              className="text-amber-400 hover:text-amber-200 transition-colors flex items-center gap-1.5 cursor-pointer font-medium"
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
