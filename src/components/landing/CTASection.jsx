import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-[#070b19] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-slate-900 to-[#0b132b] border border-slate-700/80 shadow-2xl text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready for Deployment</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Empower AICTE Bureaus with Real-Time Coordination
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Eliminate communication gaps, prevent conflicting inquiry orders, and ensure fast, auditable redressal for all institutional complaints.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <span>Explore Dashboard</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => navigate('/dashboard')}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-base font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all"
            >
              <span>Demo Role Switcher</span>
            </button>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Role-Based Access Control (RBAC)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>CPGRAMS Ingestion Gateway</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Smart India Hackathon 2026</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
