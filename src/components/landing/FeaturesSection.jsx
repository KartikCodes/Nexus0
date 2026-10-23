import React from 'react';
import { 
  Building2, 
  Activity, 
  GitMerge, 
  BarChart3, 
  Clock, 
  Zap,
  CheckCircle2,
  ShieldCheck,
  FileSearch,
  Network
} from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      title: "Centralized Complaint Monitoring",
      description: "Aggregates incoming institution grievances from CPGRAMS, web portals, direct bureau submissions, and regional offices into a unified single-window oversight console.",
      icon: Building2,
      badge: "Single-Window Intake",
      tagColor: "border-blue-500/30 text-blue-400 bg-blue-500/10"
    },
    {
      title: "Real-Time Case Tracking",
      description: "Track end-to-end lifecycle updates with immutable timestamped action trails, officer handoffs, hearings logs, and automated SLA escalation alerts for impending deadlines.",
      icon: Activity,
      badge: "Live Telemetry",
      tagColor: "border-cyan-500/30 text-cyan-400 bg-cyan-500/10"
    },
    {
      title: "Bureau & Cell Coordination",
      description: "Eliminates organizational silos between Approval Bureau, PGRC, Regulation Bureau, and Regional Offices, preventing contradictory directives and duplicate inquiry visits.",
      icon: Network,
      badge: "Zero-Collision Sync",
      tagColor: "border-indigo-500/30 text-indigo-400 bg-indigo-500/10"
    },
    {
      title: "Analytics & Reports",
      description: "Comprehensive multi-dimensional intelligence featuring intake versus resolution velocity trends, bureau workload index, institution risk rating, and instant CSV/PDF export.",
      icon: BarChart3,
      badge: "Executive Insights",
      tagColor: "border-purple-500/30 text-purple-400 bg-purple-500/10"
    },
    {
      title: "Complaint Status Monitoring",
      description: "Dynamic stage-by-stage visibility across intake triage, preliminary review, virtual/field scrutiny, formal hearing, penalty determination, and certified closure.",
      icon: Clock,
      badge: "6-Stage Lifecycle",
      tagColor: "border-amber-500/30 text-amber-400 bg-amber-500/10"
    },
    {
      title: "Faster Resolution",
      description: "Automated routing algorithms assign complaints to relevant subject-matter cells instantly, slashing average resolution turnaround time from months down to regulatory SLAs.",
      icon: Zap,
      badge: "60% SLA Speedup",
      tagColor: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10"
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#0a1024] border-t border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineered for Multi-Bureau Transparency
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Purpose-built for the All India Council for Technical Education to streamline institution oversight, student welfare, and administrative compliance.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx}
                className="group relative p-7 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-slate-700 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/50"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${feature.tagColor}`}>
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs font-semibold text-slate-400 group-hover:text-cyan-400 transition-colors">
                  <ShieldCheck className="w-4 h-4 text-blue-500" />
                  <span>AICTE Statutory Norms Compliant</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
