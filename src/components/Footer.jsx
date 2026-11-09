import React, { useState } from "react";
import {
  Mail,
  ArrowRight,
  Phone,
  MapPin,
  Check
} from "lucide-react";
import { NAV_LINKS, SERVICES, CONTACT_INFO } from "../data/content";
import { GraceEmblem } from "./GraceLogo";

export default function Footer({ onNavigate, onOpenConsultation }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail("");
    }
  };

  return (
    <footer className="relative bg-[#08080b]/90 backdrop-blur-xl border-t border-white/10 text-neutral-400 overflow-hidden select-none">
      <div className="container relative z-10 mx-auto px-6 sm:px-10 lg:px-16 max-w-7xl pt-20 pb-12">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-white/10 text-left">

          {/* Brand Summary (2 Cols) */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <button
              onClick={() => onNavigate && onNavigate("home")}
              className="flex items-center gap-3 cursor-pointer text-left focus:outline-none"
            >
              <GraceEmblem className="w-8 h-8" glow />
              <span
                className="text-2xl font-normal tracking-tight text-white block"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Grace Cinemas
              </span>
            </button>

            <p className="mt-4 text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm font-light">
              <strong className="text-white font-normal">{CONTACT_INFO.companyName}</strong> — {CONTACT_INFO.tagline} Commercial brand ads, independent feature films, casting desk, and post-production in Kerala.
            </p>

            <div className="mt-5 flex flex-col gap-1 text-xs font-mono">
              <span className="text-white uppercase tracking-wider">{CONTACT_INFO.slogan}</span>
              <span className="text-neutral-500 italic">"{CONTACT_INFO.signature}"</span>
            </div>

            {/* Direct Phone & Social */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={CONTACT_INFO.phoneTel}
                className="px-4 py-2 rounded-full border border-white/15 hover:border-white/40 text-white transition-all text-xs font-mono"
              >
                <span>{CONTACT_INFO.phone}</span>
              </a>

              <a
                href={CONTACT_INFO.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-white/15 hover:border-white/40 text-neutral-300 hover:text-white transition-all text-xs font-mono"
              >
                <span>{CONTACT_INFO.instagram.handle}</span>
              </a>
            </div>
          </div>

          {/* Column 1: Navigation Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white mb-4">
              Screens
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-neutral-400 font-light">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => onNavigate && onNavigate(link.id)}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: 3 Core Client Services */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white mb-4">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-neutral-400 font-light">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => onNavigate && onNavigate("services")}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {srv.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Headquarters & Contact */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white mb-4">
              Headquarters
            </h4>
            <div className="flex flex-col gap-3 text-xs text-neutral-400 font-light">
              <button
                onClick={() => onNavigate && onNavigate("contact")}
                className="text-left cursor-pointer group"
              >
                <span className="text-white block font-medium group-hover:text-rose-300 transition-colors">Studio Facility</span>
                <span className="text-neutral-400 text-[11px] block mt-0.5">{CONTACT_INFO.address.full}</span>
              </button>
              <div className="pt-2 border-t border-white/5 font-mono text-[11px]">
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-neutral-300 hover:text-white block">
                  {CONTACT_INFO.email}
                </a>
                <a href={`mailto:${CONTACT_INFO.castingEmail}`} className="text-rose-400 hover:underline block mt-1">
                  {CONTACT_INFO.castingEmail}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Newsletter Subscription Box */}
        <div className="py-8 border-b border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div>
            <span className="text-base font-medium text-white block" style={{ fontFamily: "Outfit, sans-serif" }}>
              Subscribe to Production & Casting Bulletins
            </span>
            <span className="text-xs text-neutral-400 font-light">
              Audition announcements, script submissions, and regional film slate updates.
            </span>
          </div>

          <form onSubmit={handleSubscribe} className="w-full md:w-auto flex items-center max-w-md">
            <div className="relative w-full sm:w-80">
              <input
                type="email"
                required
                placeholder="Enter email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#0e0e13] border border-white/15 rounded-full pl-4 pr-24 py-2.5 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-white/40"
              />
              <button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 px-4 py-1.5 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase transition-all hover:bg-neutral-100 cursor-pointer"
              >
                {subscribed ? "Done" : "Join"}
              </button>
            </div>
          </form>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <div>
            © {new Date().getFullYear()} {CONTACT_INFO.companyName}. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <a href={CONTACT_INFO.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Nalanchira, Thiruvananthapuram
            </a>
            <span>•</span>
            <a href={CONTACT_INFO.instagram.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              {CONTACT_INFO.instagram.handle}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
