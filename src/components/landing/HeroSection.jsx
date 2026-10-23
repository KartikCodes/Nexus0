import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, Shield, Building2, Activity, Clock, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background radial gradients for subtle ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-cyan-500/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xs font-semibold text-slate-300">
              SIH 2026 Problem Statement 26264
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-xs font-medium text-cyan-400">
              AICTE OneView Ecosystem
            </span>
          </div>
        </div>

        {/* Hero Heading & Subtitle */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] sm:leading-[1.1]">
            One Platform. <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              Complete Complaint Visibility.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Monitor, track and manage institution-related complaint cases across AICTE Bureaus and Cells through one centralized platform.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <span>Explore Dashboard</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#workflow"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-base font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 hover:border-slate-600 transition-all"
            >
              <span>Learn More</span>
            </a>
          </div>
        </div>

        {/* Dashboard Preview Graphic Mockup (Pinterest style) */}
        <div className="mt-16 sm:mt-20 relative max-w-5xl mx-auto">
          {/* Outer glow frame */}
          <div className="relative rounded-2xl p-1.5 sm:p-2.5 bg-gradient-to-b from-blue-500/30 via-slate-800/50 to-slate-900 border border-slate-700/80 shadow-2xl shadow-blue-950/80">
            
            {/* Mockup Container */}
            <div className="rounded-xl bg-[#0b132b] overflow-hidden border border-slate-800 text-left">
              
              {/* Fake Browser / Window Header */}
              <div className="px-4 py-3 bg-[#070d1e] border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">
                    nexus-0.aicte.gov.in/dashboard
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
                  <span>Real-time Multi-Bureau Sync</span>
                </div>
              </div>

              {/* Mockup Body Preview */}
              <div className="p-4 sm:p-6 space-y-6">
                
                {/* Header row */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-white">Central Coordination Console</h3>
                      <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-500/20 text-blue-400 border border-blue-500/30">
                        PS 26264
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Unified oversight for Approvals, PGRC, Regulation, and Vigilance
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-rose-500/15 text-rose-300 border border-rose-500/30 flex items-center gap-1.5">
                      <AlertTriangle className="w-3 h-3 text-rose-400" />
                      Overdue (6)
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-amber-400" />
                      Due Soon (2)
                    </span>
                  </div>
                </div>

                {/* KPI Cards Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-xs text-slate-400 font-medium">Total Case Intake</span>
                    <div className="text-2xl font-bold text-white mt-1">21</div>
                    <span className="text-[11px] text-slate-400">Across 8 Institutions</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-xs text-slate-400 font-medium">Active in Workflow</span>
                    <div className="text-2xl font-bold text-blue-400 mt-1">17</div>
                    <span className="text-[11px] text-blue-400/80">Cross-bureau inquiry</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-900/40">
                    <span className="text-xs text-rose-300 font-medium">SLA Escalations</span>
                    <div className="text-2xl font-bold text-rose-400 mt-1">6</div>
                    <span className="text-[11px] text-rose-400">Action mandatory</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-900/40">
                    <span className="text-xs text-emerald-300 font-medium">Closure Orders</span>
                    <div className="text-2xl font-bold text-emerald-400 mt-1">4</div>
                    <span className="text-[11px] text-emerald-400">Redressed & Certified</span>
                  </div>
                </div>

                {/* Bottom preview row with fake case & bureau bars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="md:col-span-2 p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                    <div className="flex items-center justify-between text-xs text-slate-400 font-medium mb-3">
                      <span>Latest Cross-Bureau Stream</span>
                      <span className="text-blue-400 cursor-pointer hover:underline" onClick={() => navigate('/dashboard')}>
                        View all 21 cases →
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800/80 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-cyan-400 font-semibold">CASE-2026-0121</span>
                          <span className="text-slate-300 truncate max-w-xs sm:max-w-md">
                            National Institute of Technology, Raipur · Intake Quota
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] bg-blue-500/20 text-blue-300">
                          BUR-APP
                        </span>
                      </div>

                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800/80 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-rose-400 font-semibold">CASE-2026-0101</span>
                          <span className="text-slate-300 truncate max-w-xs sm:max-w-md">
                            Sardar Vallabhbhai Patel Institute of Tech · Capitation Fee
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] bg-rose-500/20 text-rose-300">
                          BUR-RB
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between">
                    <div>
                      <div className="text-xs text-slate-400 font-medium mb-2">Bureau Load Distribution</div>
                      <div className="space-y-2 text-xs">
                        <div>
                          <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                            <span>Approval Bureau</span>
                            <span className="text-slate-400">6 cases</span>
                          </div>
                          <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                            <div className="h-full bg-blue-500 rounded-full w-[70%]" />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                            <span>Regulation Bureau</span>
                            <span className="text-slate-400">4 cases</span>
                          </div>
                          <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                            <div className="h-full bg-amber-500 rounded-full w-[45%]" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => navigate('/dashboard')}
                      className="mt-3 w-full py-2 rounded-lg bg-blue-600/30 hover:bg-blue-600/40 text-blue-300 text-xs font-semibold border border-blue-500/30 transition text-center"
                    >
                      Launch Live Console
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
