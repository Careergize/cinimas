import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeOverview from "./components/HomeOverview";
import CapabilitiesBento from "./components/CapabilitiesBento";
import ProjectShowcase from "./components/ProjectShowcase";
import CastingSection from "./components/CastingSection";
import BTSGallery from "./components/BTSGallery";
import AboutSection from "./components/AboutSection";
import LocationMapSection from "./components/LocationMapSection";
import FAQSection from "./components/FAQSection";
import BottomCTA from "./components/BottomCTA";
import Footer from "./components/Footer";
import ConsultationModal from "./components/ConsultationModal";
import ShowreelModal from "./components/ShowreelModal";

function App() {
  const getInitialScreen = () => {
    const hash = window.location.hash.replace("#", "").toLowerCase();
    const valid = ["home", "productions", "services", "casting", "story", "contact"];
    return valid.includes(hash) ? hash : "home";
  };

  const [activeScreen, setActiveScreen] = useState(getInitialScreen);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      const valid = ["home", "productions", "services", "casting", "story", "contact"];
      if (valid.includes(hash)) {
        setActiveScreen(hash);
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const handleNavigate = (screenId) => {
    setActiveScreen(screenId);
    window.location.hash = screenId;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenConsultation = (service = null) => {
    setSelectedService(service);
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#07070a] text-neutral-100 font-sans selection:bg-rose-600/30 selection:text-rose-200 relative overflow-x-hidden">
      
      {/* Global Ambient Lighting & Cinematic Canvas matching the Home Screen */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Warm Golden / Terracotta Projector Beam Glow in upper right */}
        <div className="absolute top-[5%] right-[-10%] w-[900px] h-[900px] rounded-full bg-gradient-to-br from-[#d45d2b]/16 via-[#fa9869]/8 to-transparent blur-[160px]" />
        
        {/* Soft Cool Teal / Slate shadow glow on left */}
        <div className="absolute top-[30%] left-[-15%] w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-[#1e293b]/25 via-[#0f172a]/15 to-transparent blur-[180px]" />
        
        {/* Mid-page Warm Studio Ambient Wash */}
        <div className="absolute top-[55%] right-[-5%] w-[850px] h-[850px] rounded-full bg-gradient-to-bl from-[#c2592d]/14 via-[#f59e0b]/6 to-transparent blur-[170px]" />

        {/* Lower page Warm Terracotta Accent */}
        <div className="absolute bottom-[12%] left-[-10%] w-[750px] h-[750px] rounded-full bg-gradient-to-tr from-[#e06b38]/14 to-transparent blur-[160px]" />

        {/* Signature Aurient Geometric Orbit Rings (Drifting across viewport) */}
        <div className="absolute top-[22%] right-[10%] w-[700px] h-[700px] rounded-full border border-white/[0.035] pointer-events-none" />
        <div className="absolute top-[22%] right-[10%] w-[1000px] h-[1000px] rounded-full border border-white/[0.02] pointer-events-none" />
        <div className="absolute top-[65%] left-[8%] w-[800px] h-[800px] rounded-full border border-white/[0.025] pointer-events-none" />
        <div className="absolute top-[65%] left-[8%] w-[1200px] h-[1200px] rounded-full border border-white/[0.015] pointer-events-none" />

        {/* Subtle Fine Cinematic Grid Texture */}
        <div className="absolute inset-0 bg-grid-pattern opacity-25 mix-blend-screen" />
      </div>

      {/* Global Fixed Floating Navigation Bar */}
      <Navbar
        activeScreen={activeScreen}
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Multi-Screen Content Flow with Smooth Screen Transitions */}
      <main id="main-content" className="relative z-10">
        <AnimatePresence mode="wait">
          
          {/* SCREEN 1: HOME */}
          {activeScreen === "home" && (
            <motion.div
              key="screen-home"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <Hero
                onOpenConsultation={() => handleOpenConsultation()}
                onNavigate={handleNavigate}
              />
              <HomeOverview
                onNavigate={handleNavigate}
                onOpenConsultation={() => handleOpenConsultation()}
              />
              <BottomCTA
                onOpenConsultation={() => handleOpenConsultation()}
              />
            </motion.div>
          )}

          {/* SCREEN 2: PRODUCTIONS */}
          {activeScreen === "productions" && (
            <motion.div
              key="screen-productions"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="pt-16 sm:pt-20"
            >
              <ProjectShowcase
                onSelectProject={(item) => handleOpenConsultation(item)}
              />
              <BottomCTA
                onOpenConsultation={() => handleOpenConsultation()}
              />
            </motion.div>
          )}

          {/* SCREEN 3: SERVICES */}
          {activeScreen === "services" && (
            <motion.div
              key="screen-services"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="pt-16 sm:pt-20"
            >
              <CapabilitiesBento
                onSelectCapability={(service) => handleOpenConsultation(service)}
              />
              <BottomCTA
                onOpenConsultation={() => handleOpenConsultation()}
              />
            </motion.div>
          )}

          {/* SCREEN 4: CASTING DESK */}
          {activeScreen === "casting" && (
            <motion.div
              key="screen-casting"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="pt-16 sm:pt-20"
            >
              <CastingSection
                onOpenConsultation={() => handleOpenConsultation("Casting & Talent")}
              />
              <BottomCTA
                onOpenConsultation={() => handleOpenConsultation()}
              />
            </motion.div>
          )}

          {/* SCREEN 5: OUR STORY & BTS */}
          {activeScreen === "story" && (
            <motion.div
              key="screen-story"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="pt-16 sm:pt-20"
            >
              <AboutSection
                onOpenConsultation={() => handleOpenConsultation()}
              />
              <BTSGallery />
              <BottomCTA
                onOpenConsultation={() => handleOpenConsultation()}
              />
            </motion.div>
          )}

          {/* SCREEN 6: CONTACT & STUDIO */}
          {activeScreen === "contact" && (
            <motion.div
              key="screen-contact"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="pt-16 sm:pt-20"
            >
              <LocationMapSection />
              <FAQSection />
              <BottomCTA
                onOpenConsultation={() => handleOpenConsultation()}
              />
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Multi-Column Footer with Screen Links, Instagram & Direct Hotline */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Interactive Project Pitch & Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => {
          setIsConsultationOpen(false);
          setSelectedService(null);
        }}
        initialService={selectedService}
      />

      {/* Cinema Reference & Motion Showreel Modal */}
      <ShowreelModal
        isOpen={isShowreelOpen}
        onClose={() => setIsShowreelOpen(false)}
      />
    </div>
  );
}

export default App;
