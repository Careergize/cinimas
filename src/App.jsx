import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import MobileBottomNav from "./components/MobileBottomNav";
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
    const valid = ["home", "productions", "services", "casting", "bts", "about", "story", "contact"];
    return valid.includes(hash) ? hash : "home";
  };

  const [activeScreen, setActiveScreen] = useState(getInitialScreen);
  const [isLoading, setIsLoading] = useState(true);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      const valid = ["home", "productions", "services", "casting", "bts", "about", "story", "contact"];
      if (valid.includes(hash)) {
        setActiveScreen(hash);
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Guarantee that whenever the active screen changes, it immediately opens at the top (no scrolling back animation)
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [activeScreen]);

  const handleNavigate = (screenId) => {
    // Instantly reset scroll to top before/during screen change (never scroll smoothly through the previous screen)
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    setActiveScreen(screenId);

    if (window.history.pushState) {
      window.history.pushState(null, "", `#${screenId}`);
    } else {
      window.location.hash = screenId;
    }
  };

  const handleOpenConsultation = (service = null) => {
    setSelectedService(service);
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#07070a] text-neutral-100 font-sans selection:bg-amber-400/25 selection:text-amber-100 relative overflow-x-hidden">
      
      {/* Luxury Cinematic GCI Preloader */}
      <AnimatePresence>
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Subtle Global Viewport Golden Ambient Halo ("not too much a little") */}
      <div 
        className="fixed inset-0 pointer-events-none z-30"
        style={{
          boxShadow: "inset 0 0 100px rgba(245, 158, 11, 0.05)",
        }}
      />

      {/* Global Ambient Lighting & Cinematic Canvas matching the Home Screen */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Warm Golden Projector Beam Glow in upper right */}
        <div className="absolute top-[5%] right-[-10%] w-[900px] h-[900px] rounded-full bg-gradient-to-br from-[#f59e0b]/14 via-[#d97706]/7 to-transparent blur-[160px]" />
        
        {/* Subtle Warm Amber Studio Glow on left */}
        <div className="absolute top-[30%] left-[-15%] w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-[#fbbf24]/7 via-[#b45309]/3 to-transparent blur-[180px]" />
        
        {/* Mid-page Warm Golden Studio Ambient Wash */}
        <div className="absolute top-[55%] right-[-5%] w-[850px] h-[850px] rounded-full bg-gradient-to-bl from-[#f59e0b]/10 via-[#d97706]/5 to-transparent blur-[170px]" />

        {/* Lower page Warm Gold Accent */}
        <div className="absolute bottom-[12%] left-[-10%] w-[750px] h-[750px] rounded-full bg-gradient-to-tr from-[#fbbf24]/9 via-[#d97706]/4 to-transparent blur-[160px]" />

        {/* Signature Aurient Geometric Orbit Rings with Subtle Gold Hairlines */}
        <div className="absolute top-[22%] right-[10%] w-[700px] h-[700px] rounded-full border border-amber-400/[0.04] pointer-events-none" />
        <div className="absolute top-[22%] right-[10%] w-[1000px] h-[1000px] rounded-full border border-amber-300/[0.025] pointer-events-none" />
        <div className="absolute top-[65%] left-[8%] w-[800px] h-[800px] rounded-full border border-amber-400/[0.035] pointer-events-none" />
        <div className="absolute top-[65%] left-[8%] w-[1200px] h-[1200px] rounded-full border border-amber-300/[0.02] pointer-events-none" />

        {/* Subtle Fine Cinematic Grid Texture */}
        <div className="absolute inset-0 bg-grid-pattern opacity-25 mix-blend-screen" />
      </div>

      {/* Global Fixed Floating Navigation Bar */}
      <Navbar
        activeScreen={activeScreen}
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
        onReplayIntro={() => setIsLoading(true)}
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
              className="pt-24 sm:pt-32"
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
              className="pt-24 sm:pt-32"
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
              className="pt-24 sm:pt-32"
            >
              <CastingSection
                onOpenConsultation={() => handleOpenConsultation("Casting & Talent")}
              />
              <BottomCTA
                onOpenConsultation={() => handleOpenConsultation()}
              />
            </motion.div>
          )}

          {/* SCREEN 5: ABOUT / OUR STORY */}
          {(activeScreen === "about" || activeScreen === "story") && (
            <motion.div
              key="screen-about"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="pt-24 sm:pt-32"
            >
              <AboutSection
                onOpenConsultation={() => handleOpenConsultation()}
              />
              <BottomCTA
                onOpenConsultation={() => handleOpenConsultation()}
              />
            </motion.div>
          )}

          {/* SCREEN: BTS GALLERY */}
          {activeScreen === "bts" && (
            <motion.div
              key="screen-bts"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="pt-24 sm:pt-32"
            >
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
              className="pt-24 sm:pt-32"
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
        onReplayIntro={() => setIsLoading(true)}
      />

      {/* Curved Scoop Mobile Bottom Navigation Bar matching reference UI */}
      <MobileBottomNav
        activeScreen={activeScreen}
        onNavigate={handleNavigate}
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
