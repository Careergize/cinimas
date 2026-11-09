import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Calculator, 
  Sparkles, 
  Check, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Film, 
  Clapperboard, 
  Palette, 
  Camera, 
  Mic, 
  PhoneCall, 
  Zap,
  Layers
} from "lucide-react";

export default function CinemaCostCalculator({ onOpenConsultation }) {
  const [serviceType, setServiceType] = useState("video_production");
  const [projectScale, setProjectScale] = useState("standard");
  const [deliverables, setDeliverables] = useState({
    cinema4k: true,
    studioLounge: true,
    colorGrading: true,
    socialCutdowns: true,
    voiceoverScript: false
  });

  const serviceOptions = [
    { 
      id: "video_production", 
      label: "Video Production & Ads", 
      sub: "Commercials & Brand Films", 
      icon: Clapperboard, 
      baseDays: 14, 
      baseCost: 85000,
      desc: "Full script-to-screen commercial ad video production with camera crew, art direction, and 4K mastering."
    },
    { 
      id: "content_creation", 
      label: "Content Creation", 
      sub: "Reels & Digital Stories", 
      icon: Sparkles, 
      baseDays: 7, 
      baseCost: 35000,
      desc: "Batch creation of high-performing short-form video reels, product showcases, and viral digital assets."
    },
    { 
      id: "studio_podcast", 
      label: "Studio / Podcast", 
      sub: "Acoustic Treated Lounge", 
      icon: Mic, 
      baseDays: 3, 
      baseCost: 20000,
      desc: "Multi-episode podcast recording sessions with 4K multi-cam angles and broadcast audio engineering."
    },
    { 
      id: "photo_shortfilms", 
      label: "Photo & Short Films", 
      sub: "Stills & Narrative Cinema", 
      icon: Film, 
      baseDays: 18, 
      baseCost: 95000,
      desc: "Script-to-screen narrative short films or high-fashion commercial product photography catalogues."
    },
    { 
      id: "post_design", 
      label: "Post & Graphic Design", 
      sub: "Brand Art, Color & Edit", 
      icon: Palette, 
      baseDays: 10, 
      baseCost: 30000,
      desc: "DaVinci Resolve color grading, NLE video editing, brand identity systems, and key art theatrical posters."
    },
    { 
      id: "equipment_rentals", 
      label: "Equipment Rentals", 
      sub: "Cinema Cameras & Lighting", 
      icon: Camera, 
      baseDays: 2, 
      baseCost: 15000,
      desc: "Professional cinema camera packages, cine prime lenses, softbox lighting, and audio equipment rental."
    }
  ];

  const currentService = serviceOptions.find(s => s.id === serviceType) || serviceOptions[0];

  const toggleDeliverable = (key) => {
    setDeliverables(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const calculateEstimate = () => {
    let scaleMultiplier = projectScale === "starter" ? 0.65 : projectScale === "enterprise" ? 1.9 : 1.0;
    let addOnsCost = 0;
    
    if (deliverables.cinema4k) addOnsCost += 15000;
    if (deliverables.studioLounge) addOnsCost += 8000;
    if (deliverables.colorGrading) addOnsCost += 12000;
    if (deliverables.socialCutdowns) addOnsCost += 9000;
    if (deliverables.voiceoverScript) addOnsCost += 7500;

    const totalCost = Math.round(currentService.baseCost * scaleMultiplier + addOnsCost);
    const estimatedDays = Math.round(currentService.baseDays * (projectScale === "enterprise" ? 1.5 : projectScale === "starter" ? 0.7 : 1.0));

    return {
      totalCost,
      estimatedDays
    };
  };

  const estimate = calculateEstimate();

  return (
    <section id="estimator" className="relative py-28 bg-[#07070a] overflow-hidden border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-[-10%] w-[600px] h-[600px] rounded-full bg-rose-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-3 font-mono">
            <Calculator className="w-3.5 h-3.5" />
            Interactive Project Estimator
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
            Estimate Your Creative Production Scope
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-2xl">
            Select from Grace Cinemas International's official services to configure timeline, post-production deliverables, and preliminary project budget.
          </p>
        </div>

        {/* Main 2-Column Estimator Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Step 1: Select Service */}
            <div className="p-6 rounded-3xl bg-[#0b0b11] border border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-rose-400 font-bold block mb-4">
                Step 1: Choose GCI Service Vertical
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceOptions.map((opt) => {
                  const Icon = opt.icon;
                  const isSelected = serviceType === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setServiceType(opt.id)}
                      className={`text-left p-3.5 rounded-2xl border transition-all duration-200 flex items-center gap-3 ${
                        isSelected
                          ? "bg-rose-500/15 border-rose-500/60 shadow-[0_0_20px_rgba(225,29,72,0.15)] ring-1 ring-rose-500/30"
                          : "bg-white/[0.02] border-white/5 hover:border-white/15 hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isSelected ? "bg-rose-500 text-white" : "bg-white/5 text-neutral-400"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-sm font-bold text-white block truncate" style={{ fontFamily: "Outfit, sans-serif" }}>
                          {opt.label}
                        </span>
                        <span className="text-[11px] text-neutral-400 block truncate font-mono">
                          {opt.sub}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-neutral-300 font-mono">
                ℹ️ {currentService.desc}
              </div>
            </div>

            {/* Step 2: Project Scale */}
            <div className="p-6 rounded-3xl bg-[#0b0b11] border border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-rose-400 font-bold block mb-4">
                Step 2: Project Tier & Campaign Scale
              </span>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: "starter", label: "Starter / Indie", desc: "Essential coverage & quick turnaround" },
                  { id: "standard", label: "Commercial Brand", desc: "Full crew, studio setup & polished masters" },
                  { id: "enterprise", label: "Theatrical / Flagship", desc: "High-budget multi-day shoot & top talent" }
                ].map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setProjectScale(tier.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      projectScale === tier.id
                        ? "bg-rose-500/15 border-rose-500/60 shadow-lg text-white"
                        : "bg-white/[0.02] border-white/5 text-neutral-400 hover:border-white/15"
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-bold block mb-1" style={{ fontFamily: "Outfit, sans-serif" }}>
                      {tier.label}
                    </span>
                    <span className="text-[10px] text-neutral-400 block leading-tight">
                      {tier.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Add-on Deliverables */}
            <div className="p-6 rounded-3xl bg-[#0b0b11] border border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-rose-400 font-bold block mb-4">
                Step 3: Technical Add-Ons & Deliverables
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {[
                  { key: "cinema4k", label: "4K DCI Cinema Camera Package", price: "+₹15,000" },
                  { key: "studioLounge", label: "Sound-Treated Studio Lounge Access", price: "+₹8,000" },
                  { key: "colorGrading", label: "DaVinci Resolve DI Color Grading", price: "+₹12,000" },
                  { key: "socialCutdowns", label: "Social Media Reels Cutdowns (9:16)", price: "+₹9,000" },
                  { key: "voiceoverScript", label: "Copywriting & Theatrical Voiceover", price: "+₹7,500" }
                ].map((item) => {
                  const isChecked = deliverables[item.key];
                  return (
                    <div
                      key={item.key}
                      onClick={() => toggleDeliverable(item.key)}
                      className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                        isChecked
                          ? "bg-rose-500/10 border-rose-500/40 text-white"
                          : "bg-white/[0.015] border-white/5 text-neutral-400 hover:border-white/10"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                          isChecked ? "bg-rose-500 border-rose-400 text-white" : "border-white/20"
                        }`}>
                          {isChecked && <Check className="w-3 h-3" />}
                        </div>
                        <span className="text-xs font-medium">{item.label}</span>
                      </div>
                      <span className="text-[10px] font-mono text-rose-400 font-bold shrink-0 ml-2">
                        {item.price}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Result Card (5 Cols Sticky) */}
          <div className="lg:col-span-5 rounded-3xl bg-[#0c0c14] border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative sticky top-24">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 font-bold block">
                    GCI Production Quote
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
                    Project Breakdown
                  </h3>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20 font-semibold">
                  Trivandrum Studio
                </span>
              </div>

              {/* Estimate Highlights */}
              <div className="mt-6 flex flex-col gap-4">
                <div className="p-4 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-mono text-neutral-400 block uppercase">Selected Vertical:</span>
                    <span className="text-sm font-bold text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
                      {currentService.label}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-rose-400 font-bold capitalize">
                    {projectScale} Tier
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5">
                    <span className="text-[10px] font-mono text-neutral-400 block uppercase">Estimated Timeline</span>
                    <span className="text-lg font-extrabold text-white font-mono mt-1 block">
                      ~{estimate.estimatedDays} Days
                    </span>
                    <span className="text-[10px] text-neutral-500">Script to Final Master</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5">
                    <span className="text-[10px] font-mono text-neutral-400 block uppercase">Included Revisions</span>
                    <span className="text-lg font-extrabold text-white font-mono mt-1 block">
                      2 Rounds
                    </span>
                    <span className="text-[10px] text-neutral-500">Post & DI Color Feedback</span>
                  </div>
                </div>

                {/* Total Investment */}
                <div className="mt-4 p-5 rounded-2xl bg-gradient-to-br from-rose-950/30 to-black border border-rose-500/30 text-center">
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-300 block">
                    Estimated Production Budget
                  </span>
                  <div className="mt-2 text-3xl sm:text-4xl font-extrabold font-mono bg-gradient-to-r from-rose-400 via-rose-300 to-amber-300 bg-clip-text text-transparent">
                    ₹{estimate.totalCost.toLocaleString()}*
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 block mt-1">
                    *Approximate baseline. Final contract based on specific project requirements.
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Call & Booking CTAs */}
            <div className="mt-8 flex flex-col gap-3">
              <a
                href="tel:1234567890"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 text-white font-bold text-sm flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_30px_rgba(225,29,72,0.4)]"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Directly: 1234567890</span>
              </a>

              <button
                onClick={onOpenConsultation}
                className="w-full py-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
              >
                <span>Book Free Discovery Session</span>
                <ArrowRight className="w-4 h-4 text-rose-400" />
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] font-mono text-neutral-400 pt-1">
                <span>📍 Rajiv Gandhi Nagar, Nalanchira</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
