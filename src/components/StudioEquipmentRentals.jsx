import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Camera, 
  Mic, 
  Tv, 
  Check, 
  PhoneCall, 
  Clock, 
  ShieldCheck, 
  Zap, 
  Sliders, 
  Layers, 
  Calendar,
  Volume2,
  ChevronRight,
  Package
} from "lucide-react";

export default function StudioEquipmentRentals({ onOpenConsultation }) {
  const [activeTab, setActiveTab] = useState("rentals"); // "rentals" or "studio"
  const [activeGearCat, setActiveGearCat] = useState("cameras");
  const [selectedGear, setSelectedGear] = useState(["fx6"]);
  const [studioHours, setStudioHours] = useState(3);
  const [studioSetup, setStudioSetup] = useState("video-podcast");

  const gearCategories = [
    { id: "kits", label: "Official GCR Kits (Basic • Pro • Cinema)", icon: Package },
    { id: "cameras", label: "Cinema Cameras", icon: Camera },
    { id: "lighting", label: "Studio Softboxes & Lighting", icon: Zap },
    { id: "audio", label: "Audio & Microphones", icon: Mic },
    { id: "rigs", label: "Gimbals, Tripods & Rigs", icon: Sliders },
  ];

  const gearList = {
    kits: [
      {
        id: "basic_creator_kit",
        name: "Basic Creator Kit (GCR)",
        badge: "Creator Favorite",
        spec: "Sony FX3 / High-Res Body • Prime Lens • DJI Wireless Audio • Compact Rig",
        dailyRate: 3500,
        includes: ["Sony FX3 / Mirrorless 4K Body", "35mm Cine Prime Lens", "DJI Mic 2 Wireless System", "Compact Rig / Handheld Cage", "Batteries & High-Speed Media"]
      },
      {
        id: "pro_video_kit",
        name: "Pro Video Kit (GCR)",
        badge: "Commercial Pro",
        spec: "Sony FX6 Cinema Camera • Cine Zoom Set • Dual Wireless Sound • Softbox Lighting",
        dailyRate: 6000,
        includes: ["Sony FX6 Full-Frame Cinema Line", "24-70mm & 70-200mm Fast Lenses", "Dual Wireless Lavalier Audio", "Studio LED Keylight & Softbox", "Fluid Head Tripod & V-Mount"]
      },
      {
        id: "cinema_pro_kit",
        name: "Cinema Pro Kit (GCR)",
        badge: "Theatrical Cinema",
        spec: "RED Komodo 6K / Cinema Line Package • Full Set Cine Primes • Wireless Video & Focus",
        dailyRate: 9500,
        includes: ["RED Komodo 6K Cinema Package", "Full Set T1.5 High-Speed Primes", "Wireless Director Monitor Link", "Tilta Wireless Follow Focus", "Heavy Carbon Fluid Tripod"]
      }
    ],
    cameras: [
      {
        id: "fx6",
        name: "Sony FX6 Full-Frame Cinema Camera",
        badge: "Industry Favorite",
        spec: "4K DCI 120fps • 15+ stops dynamic range • Dual Base ISO",
        dailyRate: 3500,
        includes: ["Camera Body", "2x 160GB CFexpress Cards", "3x BP-U Batteries", "Dual Charger"]
      },
      {
        id: "komodo",
        name: "RED Komodo 6K Cinema Package",
        badge: "Global Shutter",
        spec: "6K Super35 Sensor • Global Shutter • REDCODE RAW",
        dailyRate: 5000,
        includes: ["RED Komodo Body", "Outrigger Handle", "2x 512GB CFast Cards", "Canon RF-EF Adapter"]
      },
      {
        id: "fx3",
        name: "Sony FX3 Full-Frame Cinema Camera",
        badge: "Run & Gun 4K",
        spec: "4K 120p • Compact Cage • Top Audio Handle XLR",
        dailyRate: 2500,
        includes: ["FX3 Body", "Top XLR Handle", "3x NP-FZ100 Batteries", "V90 SD Cards"]
      },
      {
        id: "primes",
        name: "Cinema Prime Lens Set (T1.5)",
        badge: "Cinematic Bokeh",
        spec: "24mm, 35mm, 50mm, 85mm T1.5 High-Speed Primes",
        dailyRate: 3000,
        includes: ["4-Lens Flight Case", "0.8 Mod Focus Gears", "Standard 77mm Fronts"]
      }
    ],
    lighting: [
      {
        id: "aputure600",
        name: "Aputure 600d Pro Daylight LED",
        badge: "High Power Keylight",
        spec: "600W COB LED • Bowens Mount • Weather Resistant",
        dailyRate: 2200,
        includes: ["Control Box", "Hyper Reflector", "Rolling Hard Case", "Heavy Duty C-Stand"]
      },
      {
        id: "softbox_dome",
        name: "Studio Octa Softbox & Grid (150cm)",
        badge: "Studio Setup in Poster",
        spec: "Deep parabolic softbox for ultra-soft portraits and interviews",
        dailyRate: 800,
        includes: ["150cm Octa Softbox", "Inner & Outer Diffusers", "45° Fabric Grid"]
      },
      {
        id: "aputure300",
        name: "Aputure 300d II + Light Dome II",
        badge: "Classic Studio Light",
        spec: "300W Daylight Balanced • Wireless Sidus Link App Control",
        dailyRate: 1500,
        includes: ["300d II Head", "Light Dome II", "C-Stand & Sandbag"]
      },
      {
        id: "rgb_tubes",
        name: "Pavotube RGB LED Light Tube Kit (4-Pack)",
        badge: "Atmosphere Accent",
        spec: "Full RGB Spectrum • Internal Battery • Pixel Effects",
        dailyRate: 1800,
        includes: ["4x 4ft RGB Tubes", "Grid Clips", "Sync Cable", "Carry Bag"]
      }
    ],
    audio: [
      {
        id: "podcast_mics",
        name: "Shure SM7B Studio Vocal Mic Kit (Pair)",
        badge: "Podcast Standard",
        spec: "Cardioid Dynamic • Electromagnetic Shielding • Smooth Tone",
        dailyRate: 1200,
        includes: ["2x Shure SM7B", "2x Cloudlifter CL-1", "2x Heavy Desktop Boom Arms"]
      },
      {
        id: "wireless_lavs",
        name: "DJI Mic 2 Dual Wireless Transmitter Kit",
        badge: "32-Bit Float",
        spec: "Internal 32-bit float recording • 250m range • Charging case",
        dailyRate: 900,
        includes: ["2x Transmitters", "1x Receiver", "Lavalier Mics", "Charging Case"]
      },
      {
        id: "rodecaster",
        name: "RØDECaster Pro II Audio Production Console",
        badge: "Broadcast Mixer",
        spec: "4 High-Gain XLR Preamps • Bluetooth • Multitrack USB Recording",
        dailyRate: 1600,
        includes: ["RØDECaster Pro II", "Power Supply", "USB-C Cables", "Audio Over Ear Monitors"]
      },
      {
        id: "shotgun_boom",
        name: "Røde NTG3 Precision RF-Bias Shotgun Mic",
        badge: "Film Boom Sound",
        spec: "Moisture resistant • Rich warm acoustic capture • Low self-noise",
        dailyRate: 1000,
        includes: ["NTG3 Mic", "Carbon Fiber Boom Pole", "Blimp Windshield", "XLR Cable"]
      }
    ],
    rigs: [
      {
        id: "ronin_rs3",
        name: "DJI RS3 Pro Gimbal Combo",
        badge: "LiDAR Focus Ready",
        spec: "4.5kg payload • Automated axis locks • Carbon fiber arms",
        dailyRate: 1500,
        includes: ["RS3 Pro Gimbal", "Focus Motor", "Briefcase Handle", "RavenEye Transmitter"]
      },
      {
        id: "fluid_tripod",
        name: "Heavy-Duty Carbon Fiber Fluid Head Tripod",
        badge: "Silky Pans",
        spec: "100mm Bowl • 15kg Counterbalance • Ground spreader",
        dailyRate: 800,
        includes: ["Fluid Head", "2-Stage Legs", "Pan Bar", "Padded Carry Bag"]
      },
      {
        id: "slider_motor",
        name: "Motorized 3-Axis Camera Slider",
        badge: "Motion Control",
        spec: "Smooth parallax moves • App controlled time-lapse & video",
        dailyRate: 1400,
        includes: ["100cm Carbon Slider", "Pan Head", "Battery Pack", "Remote"]
      }
    ]
  };

  const studioRates = {
    "audio-podcast": {
      name: "Audio-Only Podcast & Voiceover Suite",
      desc: "Sound-treated recording lounge with Shure SM7B broadcast mics and multi-track audio interface.",
      perHour: 800,
      includes: ["Up to 4 In-Studio Guests", "High-End Dynamic Microphones", "Raw Multitrack WAV Deliverable", "Studio Sound Engineer"]
    },
    "video-podcast": {
      name: "4K Multi-Camera Video Podcast Suite",
      desc: "Sound-treated studio with 2 to 3 cinema camera angles, studio softboxes, and synchronized audio.",
      perHour: 1800,
      includes: ["3x 4K Cinema Camera Angles", "Studio Lighting Softboxes (as pictured)", "Multitrack Audio + ISO Video Files", "Live Operator Assistance"]
    },
    "creator-reels": {
      name: "Creator Reels & Commercial Still Studio",
      desc: "Customizable backdrops, softbox lighting grid, teleprompter, and monitor for high-volume content batches.",
      perHour: 1400,
      includes: ["Full Lighting Grid & C-Stands", "Teleprompter Setup", "Multiple Colored Backdrops", "Changing & Prep Area"]
    }
  };

  const toggleGear = (id) => {
    setSelectedGear(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Calculate rental total
  const selectedGearDetails = Object.values(gearList).flat().filter(item => selectedGear.includes(item.id));
  const totalRentalDaily = selectedGearDetails.reduce((sum, item) => sum + item.dailyRate, 0);

  // Calculate studio total
  const currentStudio = studioRates[studioSetup];
  const totalStudioCost = currentStudio.perHour * studioHours;

  return (
    <section id="rentals" className="relative py-28 bg-[#060609] overflow-hidden border-t border-white/5">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-[-10%] w-[550px] h-[550px] rounded-full bg-rose-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-[-10%] w-[500px] h-[500px] rounded-full bg-amber-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-3 font-mono">
            <Camera className="w-3.5 h-3.5" />
            Production & Execution Hub
          </div>

          <h2
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-3xl"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Studio Space &{" "}
            <span className="bg-gradient-to-r from-rose-500 via-rose-400 to-amber-300 bg-clip-text text-transparent">
              Equipment Rentals
            </span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-neutral-300 max-w-2xl font-normal">
            Directly from Grace Cinemas International in Nalanchira, Thiruvananthapuram: Rent top-tier cinema gear or book our sound-treated podcast recording studio.
          </p>

          {/* Mode Switcher Pills */}
          <div className="mt-8 p-1.5 rounded-full bg-[#0d0d15] border border-white/10 flex items-center gap-1">
            <button
              onClick={() => setActiveTab("rentals")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "rentals"
                  ? "bg-gradient-to-r from-rose-600 to-amber-500 text-white shadow-lg"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Camera className="w-4 h-4" />
              <span>Equipment Rentals</span>
              <span className="text-[10px] bg-black/40 px-2 py-0.5 rounded-full font-mono">15+ Items</span>
            </button>

            <button
              onClick={() => setActiveTab("studio")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "studio"
                  ? "bg-gradient-to-r from-rose-600 to-amber-500 text-white shadow-lg"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Mic className="w-4 h-4" />
              <span>Studio / Podcast Booking</span>
              <span className="text-[10px] bg-black/40 px-2 py-0.5 rounded-full font-mono">Trivandrum</span>
            </button>
          </div>
        </div>

        {/* TAB 1: EQUIPMENT RENTALS */}
        {activeTab === "rentals" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Category Selector */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              {gearCategories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeGearCat === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveGearCat(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all border ${
                      isActive
                        ? "bg-rose-500/15 border-rose-500/50 text-rose-300"
                        : "bg-white/[0.02] border-white/5 text-neutral-400 hover:text-white hover:border-white/15"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Gear Grid & Rental Cart Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Gear Items List (8 Cols) */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {gearList[activeGearCat].map((item) => {
                  const isSelected = selectedGear.includes(item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleGear(item.id)}
                      className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                        isSelected
                          ? "bg-[#0f0f18] border-rose-500/60 shadow-[0_4px_25px_rgba(225,29,72,0.15)] ring-1 ring-rose-500/30"
                          : "bg-[#09090e] border-white/10 hover:border-white/20 hover:bg-[#0c0c14]"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20 font-semibold">
                            {item.badge}
                          </span>
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                            isSelected ? "bg-rose-500 border-rose-400 text-white" : "border-white/20"
                          }`}>
                            {isSelected && <Check className="w-3 h-3" />}
                          </div>
                        </div>

                        <h4 className="text-sm sm:text-base font-bold text-white tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
                          {item.name}
                        </h4>
                        <p className="mt-1 text-xs text-neutral-400 leading-relaxed font-mono">
                          {item.spec}
                        </p>

                        <div className="mt-3 pt-2.5 border-t border-white/5 flex flex-col gap-1">
                          <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Includes:</span>
                          <ul className="text-[11px] text-neutral-300 space-y-0.5">
                            {item.includes.map((inc, i) => (
                              <li key={i} className="flex items-center gap-1">
                                <span className="w-1 h-1 rounded-full bg-rose-500" />
                                <span>{inc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                        <div>
                          <span className="text-xs text-neutral-500 font-mono">Daily Rate: </span>
                          <span className="text-base font-extrabold text-white font-mono">₹{item.dailyRate.toLocaleString()}</span>
                          <span className="text-[10px] text-neutral-400 font-mono"> / day</span>
                        </div>
                        <span className={`text-[11px] font-semibold ${isSelected ? "text-rose-400" : "text-neutral-500"}`}>
                          {isSelected ? "Selected" : "+ Add to Pack"}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Rental Summary Card (4 Cols Sticky) */}
              <div className="lg:col-span-4 rounded-3xl bg-[#0c0c14] border border-white/10 p-6 flex flex-col justify-between shadow-2xl relative sticky top-24">
                <div className="absolute top-0 right-0 w-48 h-48 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                    <h3 className="text-base font-bold text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
                      Equipment Rental Bag
                    </h3>
                    <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-rose-500/15 text-rose-300 border border-rose-500/30">
                      {selectedGearDetails.length} Items Selected
                    </span>
                  </div>

                  {selectedGearDetails.length === 0 ? (
                    <div className="py-8 text-center text-xs text-neutral-500 font-mono">
                      No equipment selected. Click any gear card to add it to your rental kit.
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2 max-h-56 overflow-y-auto pr-1">
                      {selectedGearDetails.map((item) => (
                        <div key={item.id} className="flex items-center justify-between text-xs p-2 rounded-xl bg-black/40 border border-white/5">
                          <span className="text-neutral-200 truncate pr-2">{item.name}</span>
                          <span className="text-rose-400 font-mono font-bold shrink-0">₹{item.dailyRate}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-2">
                    <div className="flex items-center justify-between text-xs text-neutral-400 font-mono">
                      <span>Security Deposit:</span>
                      <span className="text-neutral-300">Govt ID / Standard</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-neutral-400 font-mono">
                      <span>Pickup / Delivery:</span>
                      <span className="text-neutral-300">Nalanchira Studio</span>
                    </div>
                    <div className="flex items-center justify-between text-sm pt-2 border-t border-white/5">
                      <span className="font-semibold text-white">Estimated Daily Total:</span>
                      <span className="text-xl font-extrabold text-white font-mono bg-gradient-to-r from-rose-400 to-amber-300 bg-clip-text text-transparent">
                        ₹{totalRentalDaily.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-2.5">
                  <a
                    href="tel:+919876543210"
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-rose-600 to-amber-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_25px_rgba(225,29,72,0.4)]"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Check Gear Dates (Call 9876543210)</span>
                  </a>

                  <button
                    onClick={onOpenConsultation}
                    className="w-full py-3 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-neutral-300 hover:text-white font-medium text-xs transition-colors"
                  >
                    Submit Rental Inquiry Form
                  </button>

                  <span className="text-[10px] text-center text-neutral-500 font-mono mt-1">
                    Pickup Location: Rajiv Gandhi Nagar, Nalanchira, Trivandrum
                  </span>
                </div>
              </div>

            </div>
          </motion.div>
        )}

        {/* TAB 2: STUDIO / PODCAST BOOKING */}
        {activeTab === "studio" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Studio Setup Cards (8 Cols) */}
            <div className="lg:col-span-8 flex flex-col gap-5">
              
              {/* Visual Banner of the Studio Lounge */}
              <div className="relative rounded-3xl bg-gradient-to-r from-[#0d0d14] via-[#120d18] to-[#0d0d14] border border-white/10 p-6 sm:p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-rose-400 font-bold px-2.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/20">
                      GCI Sound Studio • Trivandrum
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-2 tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
                      Sound-Treated Podcast & Content Suite
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-lg leading-relaxed">
                      Equipped with the signature studio lighting, softboxes, and camera mounts shown in our official banner. Perfect for talk shows, brand interviews, creator podcasts, and audio dubbing.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 bg-black/50 border border-white/10 px-4 py-2 rounded-2xl shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-mono text-emerald-300 font-semibold">Available for Booking</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10 text-xs font-mono text-neutral-300">
                  <div className="flex items-center gap-1.5">
                    <Volume2 className="w-3.5 h-3.5 text-rose-400" />
                    <span>Acoustic Treated</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Camera className="w-3.5 h-3.5 text-rose-400" />
                    <span>3x 4K Angles</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-rose-400" />
                    <span>Studio Softboxes</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Mic className="w-3.5 h-3.5 text-rose-400" />
                    <span>Shure Broadcast</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-neutral-400">
                  <span className="text-amber-400">Notice:</span> Post-production services are charged separately as per project deliverables.
                </div>
              </div>

              {/* Select Studio Format */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                  Choose Studio Package
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {Object.entries(studioRates).map(([key, data]) => {
                    const isSelected = studioSetup === key;
                    return (
                      <div
                        key={key}
                        onClick={() => setStudioSetup(key)}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? "bg-[#0e0e18] border-rose-500/60 shadow-[0_4px_25px_rgba(225,29,72,0.15)] ring-1 ring-rose-500/30"
                            : "bg-[#09090e] border-white/10 hover:border-white/20"
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-mono text-rose-400 font-bold uppercase">
                              ₹{data.perHour} / hr
                            </span>
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              isSelected ? "bg-rose-500 border-rose-400 text-white" : "border-white/20"
                            }`}>
                              {isSelected && <Check className="w-2.5 h-2.5" />}
                            </div>
                          </div>
                          <h4 className="text-sm font-bold text-white tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
                            {data.name}
                          </h4>
                          <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">
                            {data.desc}
                          </p>
                        </div>

                        <div className="mt-3 pt-2.5 border-t border-white/5 space-y-1">
                          {data.includes.map((inc, i) => (
                            <span key={i} className="text-[10px] font-mono text-neutral-300 block truncate">
                              • {inc}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Hours Selector Slider */}
              <div className="p-5 rounded-2xl bg-[#09090e] border border-white/10">
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className="text-neutral-300 font-semibold">Select Session Duration:</span>
                  <span className="text-rose-400 font-bold text-sm">{studioHours} Hours</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="8"
                  value={studioHours}
                  onChange={(e) => setStudioHours(parseInt(e.target.value))}
                  className="w-full accent-rose-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-neutral-500 mt-1">
                  <span>1 Hour (Quick Recording)</span>
                  <span>4 Hours (Half Day)</span>
                  <span>8 Hours (Full Day Marathon)</span>
                </div>
              </div>

            </div>

            {/* Studio Booking Sidebar (4 Cols) */}
            <div className="lg:col-span-4 rounded-3xl bg-[#0c0c14] border border-white/10 p-6 flex flex-col justify-between shadow-2xl relative">
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <h3 className="text-base font-bold text-white mb-4 pb-3 border-b border-white/10" style={{ fontFamily: "Outfit, sans-serif" }}>
                  Studio Booking Summary
                </h3>

                <div className="space-y-3 text-xs font-mono">
                  <div className="flex justify-between text-neutral-400">
                    <span>Package:</span>
                    <span className="text-white font-semibold text-right max-w-[170px] truncate">{currentStudio.name}</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>Hourly Rate:</span>
                    <span className="text-neutral-200">₹{currentStudio.perHour} / hr</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>Session Length:</span>
                    <span className="text-rose-400 font-bold">{studioHours} Hours</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>Deliverable:</span>
                    <span className="text-emerald-400">Instant Raw Audio/Video Copy</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>Operator:</span>
                    <span className="text-neutral-200">Studio Tech Included</span>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex justify-between items-baseline">
                    <span className="text-sm font-semibold text-white">Total Studio Cost:</span>
                    <span className="text-2xl font-extrabold text-white font-mono bg-gradient-to-r from-rose-400 to-amber-300 bg-clip-text text-transparent">
                      ₹{totalStudioCost.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-2.5">
                <a
                  href="tel:+919876543210"
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-rose-600 to-amber-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_25px_rgba(225,29,72,0.4)]"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Reserve Studio Slot (Call 9876543210)</span>
                </a>

                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-neutral-300 hover:text-white font-medium text-xs transition-colors"
                >
                  Request Custom Slot via Form
                </button>

                <span className="text-[10px] text-center text-neutral-500 font-mono mt-1">
                  Studio Address: Nalanchira, Rajiv Gandhi Nagar, Trivandrum
                </span>
              </div>
            </div>

          </motion.div>
        )}

      </div>
    </section>
  );
}

