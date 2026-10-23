import React from 'react';
import { Building, ShieldCheck, Clock, Users } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    {
      value: "10,000+",
      label: "Technical Institutions",
      description: "Engineering, management & polytechnic colleges integrated nationwide",
      icon: Building
    },
    {
      value: "6 Bureaus",
      label: "AICTE Cells Synchronized",
      description: "Approval, Policy, Regulation, PGRC, FDC & Regional Offices",
      icon: Users
    },
    {
      value: "60%",
      label: "Reduction in Redressal Time",
      description: "Streamlined inter-bureau coordination eliminates redundant scrutiny",
      icon: Clock
    },
    {
      value: "100%",
      label: "Audit Trail Accountability",
      description: "Cryptographically traceable actions with statutory compliance stamps",
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-20 bg-[#0a1024] border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-1">
                  {stat.label}
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
