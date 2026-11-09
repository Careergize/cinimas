import React from "react";
import gciCameraMonogram from "../assets/gci_camera_monogram.png";

export function GraceEmblem({ className = "w-9 h-9", glow = true }) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      {glow && (
        <div className="absolute inset-[-4px] rounded-full bg-amber-400/25 blur-md animate-pulse pointer-events-none" />
      )}
      <img
        src={gciCameraMonogram}
        alt="Grace Cinemas Emblem"
        className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_12px_rgba(255,185,110,0.65)] brightness-110"
      />
    </div>
  );
}

export default function GraceLogo({ showSubtitle = false, size = "default", light = false, onReplayIntro }) {
  const isSmall = size === "small";

  return (
    <div 
      className="flex items-center gap-2.5 group select-none cursor-pointer"
      onClick={onReplayIntro}
      title={onReplayIntro ? "Grace Cinemas International • Click to replay intro" : "Grace Cinemas International"}
    >
      <GraceEmblem className={isSmall ? "w-7 h-7" : "w-8 sm:w-9 h-8 sm:h-9"} glow />
      
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5 leading-none">
          <span 
            className={`font-semibold tracking-tight text-sm sm:text-base ${
              light ? "text-neutral-900" : "text-white group-hover:text-amber-200"
            } transition-colors`}
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Grace Cinemas
          </span>
          <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-white/10 text-neutral-300 font-mono">
            GCI
          </span>
        </div>

        {showSubtitle && (
          <span className="text-[9px] uppercase tracking-[0.2em] text-neutral-400 font-mono mt-0.5">
            International
          </span>
        )}
      </div>
    </div>
  );
}
