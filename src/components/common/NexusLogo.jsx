import React from 'react';
import { Link } from 'react-router-dom';

export default function NexusLogo({ variant = 'dark', size = 'default', showSubtitle = true }) {
  const isDark = variant === 'dark';

  return (
    <Link to="/" className="flex items-center gap-2.5 group select-none">
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-cyan-500 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" className="w-6 h-6">
          <circle cx="22" cy="22" r="11.5" stroke="#ffffff" strokeWidth="3.5" fill="none" />
          <line x1="9" y1="35" x2="35" y2="9" stroke="#38bdf8" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-bold tracking-tight text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>
            NEXUS
          </span>
          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-500 border border-blue-500/20">
            OneView
          </span>
        </div>
        {showSubtitle && (
          <span className={`text-[10px] tracking-wide leading-none ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            AICTE Grievance Portal
          </span>
        )}
      </div>
    </Link>
  );
}
