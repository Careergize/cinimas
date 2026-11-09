import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, PhoneCall, Mail } from "lucide-react";
import { FAQS, CONTACT_INFO } from "../data/content";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative py-28 bg-transparent border-t border-white/10 overflow-hidden">
      {/* Soft warm glow */}
      <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#fa9869]/8 to-transparent blur-[160px] pointer-events-none" />
      <div className="container relative z-10 mx-auto px-6 sm:px-10 lg:px-16 max-w-5xl">
        
        {/* Section Header (Aurient Editorial Header) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 pb-8 border-b border-white/10 text-left">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-neutral-400 block mb-3">
              Inquiries & FAQ
            </span>
            <h2
              className="text-3xl sm:text-5xl font-normal text-white tracking-[-0.03em] leading-tight"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Frequently asked <br className="hidden sm:inline" />
              production questions.
            </h2>
          </div>

          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <span>Ask Direct Question</span>
            <span>→</span>
          </a>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4 text-left">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                  isOpen
                    ? "bg-[#0e0e13] border-white/25 shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
                    : "bg-[#0e0e13]/60 border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-base sm:text-lg font-medium text-white tracking-tight"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border border-white/15 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-white text-black" : "text-neutral-400 bg-white/[0.03]"
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 sm:px-7 pb-6 text-xs sm:text-sm text-neutral-400 leading-relaxed border-t border-white/5 pt-4 font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Contact Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div>
            <span className="text-sm font-medium text-white block" style={{ fontFamily: "Outfit, sans-serif" }}>
              Have a specific script or commercial brand query?
            </span>
            <span className="text-xs text-neutral-400 font-light">
              Speak directly with our studio desk in {CONTACT_INFO.address.area}, {CONTACT_INFO.address.city}.
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={CONTACT_INFO.phoneTel}
              className="px-5 py-2 rounded-full border border-white/20 hover:border-white/50 text-white transition-all text-xs font-mono"
            >
              <span>Call {CONTACT_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="px-5 py-2 rounded-full bg-white hover:bg-neutral-100 text-black font-semibold text-xs transition-all uppercase tracking-wider"
            >
              <span>Email Office</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
