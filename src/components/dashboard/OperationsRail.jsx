import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Building2, 
  FileText, 
  BarChart3, 
  ShieldCheck, 
  Sliders,
  Sparkles,
  ArrowLeft
} from 'lucide-react';

export default function OperationsRail({ 
  activeTab, 
  setActiveTab, 
  currentUser 
}) {
  const navItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
      badge: null
    },
    {
      id: 'institutions',
      label: 'Institutions',
      icon: Building2,
      badge: { text: 'OneView', color: 'bg-slate-100 text-slate-700' }
    },
    {
      id: 'cases',
      label: 'Cases & Grievances',
      icon: FileText,
      badge: { text: '6 Overdue', color: 'bg-rose-100 text-rose-700' }
    },
    {
      id: 'reports',
      label: 'Reports & Analytics',
      icon: BarChart3,
      badge: null
    },
    {
      id: 'audit',
      label: 'Audit Trail',
      icon: ShieldCheck,
      badge: null
    },
    {
      id: 'demo',
      label: 'Demo Controls',
      icon: Sliders,
      badge: null
    }
  ];

  return (
    <aside className="w-full lg:w-64 flex-shrink-0 flex flex-col justify-between p-4 space-y-6">
      <div className="space-y-4">
        <div className="px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          Operations Rail
        </div>

        <nav className="space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>

                {item.badge && (
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : item.badge.color
                  }`}>
                    {item.badge.text}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="space-y-3 pt-4 border-t border-slate-200">
        
        {/* Smart Automation Card */}
        <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-100 text-xs">
          <div className="flex items-center gap-1.5 text-blue-700 font-bold mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Smart Automation</span>
          </div>
          <p className="text-[11px] text-slate-600 leading-snug">
            Consolidating multi-bureau workflows for AICTE Regulation Bureau.
          </p>
          <div className="mt-2.5 pt-2 border-t border-blue-100/80 flex items-center justify-between text-[10px] text-slate-500">
            <span>Role Scope</span>
            <span className="font-bold text-blue-800">{currentUser.role}</span>
          </div>
        </div>

        {/* Back to Landing Page button */}
        <Link
          to="/"
          className="flex items-center justify-center gap-2 w-full py-2 px-3 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Landing Page</span>
        </Link>

      </div>
    </aside>
  );
}
