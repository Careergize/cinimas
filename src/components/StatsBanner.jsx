import React from "react";
import { motion } from "framer-motion";
import { Film, Clapperboard, MapPin, Users, Sparkles } from "lucide-react";
import { HERO_CONTENT } from "../data/content";

export default function StatsBanner() {
  const iconList = [Clapperboard, Sparkles, Users, MapPin];

  return (
    <section className="relative py-12 border-y border-white/5 bg-[#09090d]/70 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {HERO_CONTENT.stats.map((stat, i) => {
            const Icon = iconList[i % iconList.length];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/[0.015] border border-white/5 hover:border-rose-500/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-rose-500/20 transition-all">
                  <Icon className="w-5 h-5 text-rose-400" />
                </div>
                <span
                  className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-neutral-200 mt-1">
                  {stat.label}
                </span>
                <span className="text-[11px] text-neutral-400 mt-0.5">
                  {stat.subtext}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
