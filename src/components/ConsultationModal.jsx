import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Phone, Mail, User, PhoneCall } from "lucide-react";
import { SERVICES, CONTACT_INFO } from "../data/content";

export default function ConsultationModal({ isOpen, onClose, initialService }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: SERVICES[0]?.title || "Brand Content & Advertising",
    timeline: "Immediate / Within 30 Days",
    notes: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      const matched = SERVICES.find(s => s.id === initialService || s.title === initialService);
      setFormData(prev => ({
        ...prev,
        service: matched ? matched.title : (typeof initialService === "string" ? initialService : prev.service)
      }));
    }
  }, [initialService, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative w-full max-w-xl rounded-3xl bg-[#0e0e13] border border-white/15 p-6 sm:p-9 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto text-left"
      >
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors z-20 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-2">
              Production Inquiry Desk
            </span>

            <h3
              className="text-2xl sm:text-3xl font-medium text-white tracking-tight"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Pitch a Project
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
              Submit your project brief, brand brief, or screenplay treatment directly to our producers.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
              
              {/* Service Selection */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-neutral-300 block mb-2 font-medium">
                  Select Production Division:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  {SERVICES.map((srv) => (
                    <button
                      type="button"
                      key={srv.id}
                      onClick={() => setFormData({ ...formData, service: srv.title })}
                      className={`p-3 rounded-2xl border text-left font-medium transition-all cursor-pointer ${
                        formData.service === srv.title
                          ? "bg-white text-black font-semibold border-white shadow-sm"
                          : "bg-white/[0.02] border-white/10 text-neutral-400 hover:text-white hover:border-white/25"
                      }`}
                    >
                      <span className="block truncate">{srv.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                <div>
                  <label className="text-xs font-mono text-neutral-400 block mb-1">Your Full Name</label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Nair"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#14141c] border border-white/10 rounded-2xl pl-9 pr-3 py-2.5 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-neutral-400 block mb-1">Phone / WhatsApp</label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#14141c] border border-white/10 rounded-2xl pl-9 pr-3 py-2.5 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/40"
                    />
                  </div>
                </div>
              </div>

              {/* Email & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-mono text-neutral-400 block mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="w-3.5 h-3.5 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="name@production.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#14141c] border border-white/10 rounded-2xl pl-9 pr-3 py-2.5 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-neutral-400 block mb-1">Target Production Schedule</label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full bg-[#14141c] border border-white/10 rounded-2xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-white/40"
                  >
                    <option>Immediate / Within 30 Days</option>
                    <option>Next Quarter</option>
                    <option>Pre-Production Stage</option>
                    <option>Line Production / Location Scouting</option>
                  </select>
                </div>
              </div>

              {/* Project Brief */}
              <div>
                <label className="text-xs font-mono text-neutral-400 block mb-1">Project Synopsis / Brief</label>
                <textarea
                  rows="3"
                  placeholder="Provide a logline, campaign requirements, or production deliverables..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#14141c] border border-white/10 rounded-2xl p-3 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/40 resize-none font-light"
                />
              </div>

              {/* Submit Buttons */}
              <div className="mt-3 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3.5 rounded-full bg-white hover:bg-neutral-100 text-black font-semibold text-xs uppercase tracking-wider transition-all shadow-lg active:scale-95 cursor-pointer"
                >
                  Submit Project Pitch
                </button>

                <a
                  href={CONTACT_INFO.phoneTel}
                  className="px-6 py-3.5 rounded-full border border-white/15 hover:border-white/40 text-neutral-200 hover:text-white transition-all text-xs font-mono font-medium flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-rose-400" />
                  <span>Call {CONTACT_INFO.phone}</span>
                </a>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 pt-2 border-t border-white/5">
                <span>📍 {CONTACT_INFO.address.area}, {CONTACT_INFO.address.city}</span>
                <span>{CONTACT_INFO.instagram.handle}</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-12 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
              <Check className="w-6 h-6" />
            </div>

            <h3
              className="text-2xl font-medium text-white tracking-tight"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Project Pitch Received
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-neutral-400 max-w-md font-light leading-relaxed">
              Thank you, <strong className="text-white">{formData.name}</strong>. Our creative producers will review your <span className="text-white">{formData.service}</span> brief and contact you at <span className="text-white font-mono">{formData.phone}</span>.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <button
                onClick={resetAndClose}
                className="px-7 py-2.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-100 transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
