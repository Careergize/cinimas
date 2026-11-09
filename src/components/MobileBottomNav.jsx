import React from "react";
import { motion } from "framer-motion";
import { Home, Film, Sliders, UserCheck, MapPin } from "lucide-react";

const NAV_TABS = [
  { id: "home", label: "Home", icon: Home },
  { id: "productions", label: "Slates", icon: Film },
  { id: "services", label: "Services", icon: Sliders },
  { id: "casting", label: "Casting", icon: UserCheck },
  { id: "contact", label: "Studio", icon: MapPin },
];

/**
 * MobileBottomNav Component
 * Luxury floating obsidian & champagne gold bottom navigation bar.
 * - Perfectly aligned horizontal row: selected screen is NOT pushed forward or popped up.
 * - Selected screen is illuminated brighter with warm champagne gold glow and active aura.
 * - Smooth Framer Motion layoutId gliding animation across tabs.
 * - Hidden on desktop (md:hidden) so web & desktop view remains 100% untouched.
 */
export default function MobileBottomNav({ activeScreen, onNavigate }) {
  // Map active screen to tab index
  const getActiveIndex = () => {
    if (activeScreen === "productions") return 1;
    if (activeScreen === "services") return 2;
    if (activeScreen === "casting") return 3;
    if (
      activeScreen === "contact" ||
      activeScreen === "about" ||
      activeScreen === "story" ||
      activeScreen === "bts"
    ) {
      return 4;
    }
    return 0; // default home
  };

  const activeIdx = getActiveIndex();

  return (
    <nav
      aria-label="Mobile Navigation"
      className="fixed bottom-4 inset-x-0 z-40 flex justify-center px-4 md:hidden pointer-events-none select-none"
    >
      <div className="relative w-full max-w-[360px] h-[58px] rounded-full bg-[#0a0a0f]/95 backdrop-blur-2xl border border-amber-400/25 shadow-[0_12px_40px_rgba(0,0,0,0.92)] p-1.5 pointer-events-auto flex items-center">
        
        {/* Soft atmospheric amber ambient halo under the bar */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-amber-500/10 blur-md pointer-events-none" />

        {/* 5 Perfectly Aligned Navigation Tabs */}
        <div className="relative z-10 w-full h-full grid grid-cols-5 items-center">
          {NAV_TABS.map((tab, idx) => {
            const Icon = tab.icon;
            const isActive = idx === activeIdx;

            return (
              <button
                key={tab.id}
                onClick={() => onNavigate(tab.id)}
                className="relative h-full flex flex-col items-center justify-center cursor-pointer active:scale-95 transition-transform focus:outline-none"
                aria-label={tab.label}
              >
                {/* Active Sliding Glowing Pill - Aligned inside the bar without popping forward */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavTabPill"
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 34,
                    }}
                    className="absolute inset-y-1 inset-x-1.5 rounded-full bg-amber-400/[0.14] border border-amber-400/40 shadow-[0_0_16px_rgba(245,158,11,0.35)] pointer-events-none"
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-amber-400/10 via-amber-300/15 to-transparent blur-[3px]" />
                  </motion.div>
                )}

                {/* Tab Icon - Perfectly Aligned in the Same Horizontal Row */}
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <Icon
                    className={`w-[22px] h-[22px] transition-all duration-200 ${
                      isActive
                        ? "text-amber-300 scale-110 drop-shadow-[0_0_12px_rgba(245,158,11,0.85)] brightness-125"
                        : "text-neutral-400/65 hover:text-white"
                    }`}
                  />
                  
                  {/* Subtle Glowing Active Indicator Dot */}
                  <span
                    className={`w-1 h-1 rounded-full mt-0.5 transition-all duration-200 ${
                      isActive
                        ? "bg-amber-400 shadow-[0_0_8px_#f59e0b] opacity-100 scale-100"
                        : "bg-transparent opacity-0 scale-0"
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </nav>
  );
}
