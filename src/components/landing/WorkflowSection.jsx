import React, { useState } from 'react';
import { 
  Inbox, 
  Layers, 
  UserCheck, 
  SearchCheck, 
  Scale, 
  CheckCircle,
  ArrowRight,
  Shield,
  FileCheck
} from 'lucide-react';

export default function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Complaint Received",
      short: "Intake",
      icon: Inbox,
      summary: "Multi-channel ingestion from CPGRAMS, web portals, post, or student grievants with automated deduplication.",
      details: "Central system ingests grievance metadata, validates institution identity against AICTE Master Directory, generates unique tracking ID (e.g. CASE-2026-0121), and dispatches automated SMS/Email acknowledgment.",
      bureauInvolved: "Central Triage Registry",
      expectedSLA: "Within 4 Hours"
    },
    {
      id: 2,
      title: "Classification",
      short: "Categorize",
      icon: Layers,
      summary: "Rule-based and semantic analysis classifies case into statutory grievance domain and priority tier.",
      details: "System classifies into Capitation Fee Violation, Faculty Norm Deficit, Harassment & Ragging, Infrastructure Non-Compliance, or Examination Malpractice, assigning initial urgency (Low, Medium, High, Critical).",
      bureauInvolved: "Automated Classification Engine",
      expectedSLA: "Within 12 Hours"
    },
    {
      id: 3,
      title: "Bureau/Cell Assignment",
      short: "Routing",
      icon: UserCheck,
      summary: "Direct routing to responsible Nodal Bureau Head and Case Handler without bureaucratic delays.",
      details: "Routes case to Regulation Bureau, Public Grievance Cell, Approval Bureau, or Regional Office. If multiple cells have jurisdiction, collaborative shared access is granted to prevent conflicting investigations.",
      bureauInvolved: "Bureau Leadership & Nodal Officers",
      expectedSLA: "Within 24 Hours"
    },
    {
      id: 4,
      title: "Case Monitoring",
      short: "Audit & SLA",
      icon: SearchCheck,
      summary: "Continuous tracking of officer notes, virtual hearing logs, physical inspection reports, and SLA countdowns.",
      details: "Officers log statements, virtual hearing schedules, and evidence files. The Operations Rail tracks real-time days-to-due. Automated escalation alerts trigger if inactive for 48 hours.",
      bureauInvolved: "Case Handlers & Scrutiny Committee",
      expectedSLA: "15 to 30 Days"
    },
    {
      id: 5,
      title: "Resolution",
      short: "Adjudication",
      icon: Scale,
      summary: "Statutory decision or corrective directives formulated with inter-bureau consensus.",
      details: "The competent authority formulates remedial orders, fee refund instructions, faculty quota corrections, or show-cause notices. Resolution drafted with verified audit hash.",
      bureauInvolved: "Appellate Authority & Member Secretary",
      expectedSLA: "Final Order Draft"
    },
    {
      id: 6,
      title: "Closure",
      short: "Compliance Order",
      icon: CheckCircle,
      summary: "Compliance verification, formal closure certificate issued, and institutional record updated.",
      details: "Institution submits compliance affidavit. Complainant receives closure summary with right to appeal. The case status locks as 'Resolved' in AICTE OneView institutional archive.",
      bureauInvolved: "Director General & Institutional Registrar",
      expectedSLA: "Completed"
    }
  ];

  return (
    <section id="workflow" className="py-24 bg-[#070b19] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Standard Operating Procedure
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How It Works: Complaint-to-Resolution Flow
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            A standardized, auditable 6-stage lifecycle ensuring transparent and timely grievance redressal across all AICTE Bureaus.
          </p>
        </div>

        {/* 6-Step Horizontal Progress Bar */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;

            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-xl text-left border transition-all duration-200 relative ${
                  isSelected
                    ? 'bg-blue-600/20 border-blue-500 shadow-lg shadow-blue-500/20 translate-y-[-2px]'
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
                    isSelected ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {step.id}
                  </div>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`} />
                </div>
                <div className={`text-xs font-bold leading-snug ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                  {step.title}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  {step.short}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Showcase Card */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 shadow-2xl relative">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-md text-xs font-bold bg-blue-600 text-white">
                  Stage 0{steps[activeStep].id}
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {steps[activeStep].title}
                </h3>
              </div>

              <p className="text-base text-slate-300 leading-relaxed">
                {steps[activeStep].summary}
              </p>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800/80 text-sm text-slate-300 leading-relaxed">
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wide block mb-1">
                  Protocol Specification:
                </span>
                {steps[activeStep].details}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:w-72 flex-shrink-0">
              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-800">
                <span className="text-xs text-slate-400 font-medium block">Responsible Authority</span>
                <span className="text-sm font-semibold text-white mt-1 block">
                  {steps[activeStep].bureauInvolved}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-800">
                <span className="text-xs text-slate-400 font-medium block">Benchmark SLA Window</span>
                <span className="text-sm font-semibold text-emerald-400 mt-1 block">
                  {steps[activeStep].expectedSLA}
                </span>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                  className="px-3 py-2 text-xs font-medium rounded-lg bg-slate-800 text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition"
                >
                  ← Previous
                </button>
                <button
                  disabled={activeStep === steps.length - 1}
                  onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
                  className="px-3 py-2 text-xs font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed transition flex items-center gap-1"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
