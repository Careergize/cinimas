import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  Mail, 
  ArrowRight, 
  X, 
  AlertCircle,
  ArrowUpRight
} from "lucide-react";
import { CASTING_CALLS, CONTACT_INFO } from "../data/content";

export default function CastingSection({ onOpenConsultation }) {
  const [selectedCall, setSelectedCall] = useState(null);

  return (
    <section id="casting" className="relative py-28 bg-transparent border-t border-white/10 overflow-hidden">
      {/* Warm ambient studio glow */}
      <div className="absolute top-1/2 right-[-5%] w-[600px] h-[500px] rounded-full bg-gradient-to-l from-[#d45d2b]/10 to-transparent blur-[160px] pointer-events-none" />
      <div className="container relative z-10 mx-auto px-6 sm:px-10 lg:px-16 max-w-7xl">
        
        {/* Section Header (Aurient Editorial Header) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-white/10 text-left">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-neutral-400 block mb-3">
              Talent & Auditions Desk
            </span>
            <h2
              className="text-3xl sm:text-5xl font-normal text-white tracking-[-0.03em] leading-tight"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Statewide casting notices <br className="hidden sm:inline" />
              across all 14 districts.
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${CONTACT_INFO.castingEmail}?subject=General Talent Pool Registration - Grace Cinemas`}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-neutral-100 text-black font-semibold text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer"
            >
              <span>Join Talent Pool</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Casting Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch text-left">
          {CASTING_CALLS.map((call, idx) => (
            <motion.div
              key={call.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-[#0e0e13]/80 border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            >
              <div>
                {/* Project & Deadline Bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/5 text-xs font-mono">
                  <span className="text-white font-medium uppercase tracking-wider truncate max-w-[220px]">
                    {call.projectTitle}
                  </span>
                  <span className="text-neutral-400 flex items-center gap-1.5 shrink-0">
                    <Calendar className="w-3 h-3 text-rose-400" />
                    <span>Deadline: {call.deadline}</span>
                  </span>
                </div>

                {/* Role Title */}
                <h3
                  className="text-2xl font-medium text-white tracking-tight group-hover:text-rose-300 transition-colors"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {call.role}
                </h3>

                {/* Age & Gender Tags */}
                <div className="flex flex-wrap items-center gap-2 mt-4">
                  <span className="px-3 py-1 rounded-full bg-white/[0.04] text-neutral-300 border border-white/10 text-xs font-mono">
                    Age: {call.ageGroup}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/[0.04] text-neutral-300 border border-white/10 text-xs font-mono">
                    {call.gender}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-neutral-300 border border-white/10 text-xs font-mono">
                    {call.location}
                  </span>
                </div>

                {/* Requirements */}
                <p className="mt-4 text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                  {call.requirements}
                </p>
              </div>

              {/* Action Trigger */}
              <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between">
                <a
                  href={`mailto:${call.submissionEmail}?subject=Audition Submission: ${encodeURIComponent(call.projectTitle)} - ${encodeURIComponent(call.role)}`}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 hover:border-white/50 text-white transition-all text-xs font-mono tracking-wider uppercase"
                >
                  <Mail className="w-3.5 h-3.5 text-rose-400" />
                  <span>Send Audition Reel</span>
                </a>

                <button
                  onClick={() => setSelectedCall(call)}
                  className="text-xs font-mono text-neutral-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Guidelines</span>
                  <ArrowRight className="w-3.5 h-3.5 text-rose-400" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Audition Guidelines Notice Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-3xl bg-[#0e0e13]/80 border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-left"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0 text-white mt-0.5">
              <AlertCircle className="w-5 h-5 text-rose-400" />
            </div>
            <div>
              <h4 className="text-base font-medium text-white tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
                General Audition Guidelines for Actors
              </h4>
              <p className="text-xs text-neutral-400 mt-1 max-w-xl leading-relaxed font-light">
                Submit recent unfiltered photographs, a Malayalam self-intro video (&lt; 60s), and monologue links to <strong className="text-white font-mono">{CONTACT_INFO.castingEmail}</strong>. No audition registration fees are ever charged.
              </p>
            </div>
          </div>

          <a
            href={`mailto:${CONTACT_INFO.castingEmail}?subject=General Talent Registration - Grace Cinemas`}
            className="px-6 py-2.5 rounded-full border border-white/20 hover:border-white/50 text-white font-medium text-xs font-mono uppercase tracking-wider shrink-0 transition-colors"
          >
            Register Profile
          </a>
        </motion.div>

      </div>

      {/* Audition Detail Modal */}
      <AnimatePresence>
        {selectedCall && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-lg w-full bg-[#0e0e13] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl text-left"
            >
              <button
                onClick={() => setSelectedCall(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 font-semibold px-2.5 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/20">
                Audition Notice
              </span>

              <h3 className="text-2xl font-medium text-white mt-2" style={{ fontFamily: "Outfit, sans-serif" }}>
                {selectedCall.role}
              </h3>
              <p className="text-xs text-neutral-400 font-mono mt-0.5">
                {selectedCall.projectTitle} • Deadline: {selectedCall.deadline}
              </p>

              <div className="mt-5 p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2 text-xs font-mono text-neutral-300 font-light">
                <div><span className="text-neutral-500">Target Age:</span> {selectedCall.ageGroup}</div>
                <div><span className="text-neutral-500">Gender:</span> {selectedCall.gender}</div>
                <div><span className="text-neutral-500">Screening:</span> {selectedCall.location}</div>
                <div className="pt-2 border-t border-white/5 leading-relaxed">
                  <span className="text-neutral-500 block mb-1">Character Breakdown:</span>
                  {selectedCall.requirements}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedCall(null)}
                  className="px-4 py-2 rounded-full text-neutral-400 hover:text-white text-xs font-mono cursor-pointer"
                >
                  Close
                </button>
                <a
                  href={`mailto:${selectedCall.submissionEmail}?subject=Audition Submission: ${encodeURIComponent(selectedCall.projectTitle)} - ${encodeURIComponent(selectedCall.role)}`}
                  className="px-6 py-2.5 rounded-full bg-white hover:bg-neutral-100 text-black font-semibold text-xs uppercase tracking-wider transition-all"
                >
                  Email Audition
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
