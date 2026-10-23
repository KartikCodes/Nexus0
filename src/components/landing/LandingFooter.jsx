import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NexusLogo from '../common/NexusLogo';
import { ShieldCheck, Heart } from 'lucide-react';

export default function LandingFooter() {
  const navigate = useNavigate();

  return (
    <footer id="about" className="bg-[#050813] border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <NexusLogo variant="dark" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Integrated Dashboard for Monitoring and Tracking Institution-Related Complaint Cases Across AICTE Bureaus and Cells.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-2">
              <ShieldCheck className="w-4 h-4 text-cyan-500" />
              <span>Smart India Hackathon 2026 · Problem Statement 26264</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#home" className="hover:text-white transition">Home</a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition">Features & Capabilities</a>
              </li>
              <li>
                <a href="#workflow" className="hover:text-white transition">Standard Workflow Flow</a>
              </li>
              <li>
                <button onClick={() => navigate('/dashboard')} className="hover:text-white transition text-left">
                  Executive Dashboard
                </button>
              </li>
            </ul>
          </div>

          {/* Bureaus covered */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Covered Bureaus
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Approval Bureau (AB)</li>
              <li>Policy & Academic Planning (P&AP)</li>
              <li>Regulation & Vigilance (RB)</li>
              <li>Faculty Development Cell (FDC)</li>
              <li>Student Grievance Cell (PGRC)</li>
            </ul>
          </div>

        </div>

        {/* Bottom row */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 NEXUS. Designed for All India Council for Technical Education (AICTE).
          </div>
          <div className="flex items-center gap-1">
            <span>Built with precision for SIH 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
