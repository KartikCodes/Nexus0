import React from 'react';
import { 
  FileText, 
  Activity, 
  AlertTriangle, 
  Clock, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  ChevronRight,
  TrendingUp,
  Layers
} from 'lucide-react';
import { MOCK_KPIS, MOCK_BUREAU_WORKLOAD, MOCK_CASES, MOCK_MONTHLY_TRENDS } from '../../data/mockData';

export default function ConsoleView({ onSelectCase, onNavigateToCases }) {
  return (
    <div className="space-y-6">
      
      {/* Top Banner Card */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Central Coordination Console
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                SIH 2026 · PS 26264
              </span>
            </div>
            <p className="mt-1 text-xs sm:text-sm text-slate-500 max-w-3xl leading-relaxed">
              Real-time multi-bureau visibility across AICTE institutions. One consolidated view for approvals, academic policies, faculty welfare, student grievances, and vigilance.
            </p>
          </div>

          {/* Quick Filter Badges */}
          <div className="flex items-center gap-2 flex-wrap flex-shrink-0">
            <button 
              onClick={onNavigateToCases}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 flex items-center gap-1.5 transition"
            >
              <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
              <span>Overdue (6)</span>
            </button>
            <button 
              onClick={onNavigateToCases}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200 flex items-center gap-1.5 transition"
            >
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              <span>Due Soon (2)</span>
            </button>
            <button 
              onClick={onNavigateToCases}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 flex items-center gap-1.5 transition"
            >
              <Users className="w-3.5 h-3.5 text-slate-600" />
              <span>Unassigned (4)</span>
            </button>
          </div>
        </div>
      </div>

      {/* 6 Metric KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
        
        {/* Total Intake */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-semibold">Total Intake</span>
            <FileText className="w-4 h-4 text-slate-400" />
          </div>
          <div className="my-2">
            <div className="text-3xl font-extrabold text-slate-900 tracking-tight">
              {MOCK_KPIS.totalIntake}
            </div>
            <div className="text-[11px] text-slate-500">Across 8 Institutions</div>
          </div>
        </div>

        {/* Active / In Review */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-blue-600">
            <span className="text-xs font-semibold text-slate-700">Active / In Review</span>
            <Activity className="w-4 h-4 text-blue-500" />
          </div>
          <div className="my-2">
            <div className="text-3xl font-extrabold text-blue-600 tracking-tight">
              {MOCK_KPIS.activeInReview}
            </div>
            <div className="text-[11px] text-slate-500">In official workflow</div>
          </div>
        </div>

        {/* SLA Overdue */}
        <div className="p-4 rounded-2xl bg-rose-50/40 border border-rose-200 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-rose-700">
            <span className="text-xs font-semibold">SLA Overdue</span>
            <AlertTriangle className="w-4 h-4 text-rose-500" />
          </div>
          <div className="my-2">
            <div className="text-3xl font-extrabold text-rose-600 tracking-tight">
              {MOCK_KPIS.slaOverdue}
            </div>
            <div className="text-[11px] text-rose-600 font-medium">Immediate action needed</div>
          </div>
        </div>

        {/* Due Next 48h */}
        <div className="p-4 rounded-2xl bg-amber-50/40 border border-amber-200 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-amber-700">
            <span className="text-xs font-semibold">Due Next 48h</span>
            <Clock className="w-4 h-4 text-amber-500" />
          </div>
          <div className="my-2">
            <div className="text-3xl font-extrabold text-amber-600 tracking-tight">
              {MOCK_KPIS.dueNext48h}
            </div>
            <div className="text-[11px] text-amber-700 font-medium">Close to escalation</div>
          </div>
        </div>

        {/* Unassigned */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-semibold">Unassigned</span>
            <Users className="w-4 h-4 text-slate-400" />
          </div>
          <div className="my-2">
            <div className="text-3xl font-extrabold text-slate-900 tracking-tight">
              {MOCK_KPIS.unassigned}
            </div>
            <div className="text-[11px] text-slate-500">Pending officer triage</div>
          </div>
        </div>

        {/* Resolved */}
        <div className="p-4 rounded-2xl bg-emerald-50/40 border border-emerald-200 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-emerald-700">
            <span className="text-xs font-semibold">Resolved</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="my-2">
            <div className="text-3xl font-extrabold text-emerald-600 tracking-tight">
              {MOCK_KPIS.resolved}
            </div>
            <div className="text-[11px] text-emerald-700 font-medium">Closure order issued</div>
          </div>
        </div>

      </div>

      {/* Charts & Bureau Workload Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Monthly Intake vs Resolution Trends Chart */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  Monthly Intake vs Resolution Trends
                </h3>
                <p className="text-xs text-slate-500">
                  Case volume received compared with successful resolutions
                </p>
              </div>

              {/* Legend */}
              <div className="flex items-center gap-4 text-xs font-medium">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                  <span className="text-slate-600">Received</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-slate-600">Resolved</span>
                </div>
              </div>
            </div>

            {/* SVG Visual Chart */}
            <div className="h-56 w-full pt-4 relative">
              <svg viewBox="0 0 500 160" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Horizontal reference grid lines */}
                <line x1="0" y1="20" x2="500" y2="20" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="0" y1="60" x2="500" y2="60" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="0" y1="100" x2="500" y2="100" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="0" y1="140" x2="500" y2="140" stroke="#f1f5f9" strokeWidth="1" />

                {/* Received area and curve (Blue) */}
                <path
                  d="M 10,110 C 100,80 180,40 250,55 C 320,70 400,20 490,45 L 490,140 L 10,140 Z"
                  fill="url(#blueGradient)"
                />
                <path
                  d="M 10,110 C 100,80 180,40 250,55 C 320,70 400,20 490,45"
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Resolved area and curve (Green) */}
                <path
                  d="M 10,130 C 100,105 180,75 250,85 C 320,95 400,55 490,75 L 490,140 L 10,140 Z"
                  fill="url(#greenGradient)"
                />
                <path
                  d="M 10,130 C 100,105 180,75 250,85 C 320,95 400,55 490,75"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Points */}
                <circle cx="10" cy="110" r="4" fill="#2563eb" />
                <circle cx="250" cy="55" r="4" fill="#2563eb" />
                <circle cx="490" cy="45" r="4" fill="#2563eb" />

                <circle cx="10" cy="130" r="4" fill="#10b981" />
                <circle cx="250" cy="85" r="4" fill="#10b981" />
                <circle cx="490" cy="75" r="4" fill="#10b981" />
              </svg>

              {/* X Axis Month Labels */}
              <div className="flex justify-between text-[11px] text-slate-400 pt-2 font-medium">
                {MOCK_MONTHLY_TRENDS.map((t, idx) => (
                  <span key={idx}>{t.month}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Workload by Bureau */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-bold text-slate-900">Workload by Bureau</h3>
                <p className="text-xs text-slate-500">Active load across Cells</p>
              </div>
              <Layers className="w-4 h-4 text-slate-400" />
            </div>

            <div className="space-y-4">
              {MOCK_BUREAU_WORKLOAD.map((bureau) => {
                const percentage = Math.min(100, (bureau.active / 8) * 100);

                return (
                  <div key={bureau.id} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-800 truncate max-w-[170px]">
                        {bureau.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900">{bureau.active} active</span>
                        {bureau.overdue > 0 && (
                          <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-rose-100 text-rose-700">
                            {bureau.overdue} overdue
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%`, backgroundColor: bureau.color }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={onNavigateToCases}
            className="mt-6 w-full py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition flex items-center justify-center gap-1.5"
          >
            <span>View All Bureau Queues</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Recent Multi-Bureau Activity Stream */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Recent Multi-Bureau Activity Stream
            </h3>
            <p className="text-xs text-slate-500">
              Real-time event feed of transfers, assignments, and status updates
            </p>
          </div>

          <button
            onClick={onNavigateToCases}
            className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition"
          >
            <span>Explore All Cases</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Activity Feed items */}
        <div className="space-y-4 divide-y divide-slate-100">
          {MOCK_CASES.flatMap(c => c.events.map(ev => ({ ...ev, caseId: c.id, institution: c.institution }))).slice(0, 5).map((ev, idx) => (
            <div key={idx} className="pt-3.5 first:pt-0 flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <button 
                    onClick={() => onSelectCase(ev.caseId)}
                    className="font-mono text-xs font-bold text-blue-600 hover:underline"
                  >
                    {ev.caseId}
                  </button>
                  <span className="text-xs font-bold text-slate-900 uppercase">
                    {ev.action}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700">
                    {ev.badge}
                  </span>
                </div>

                <p className="text-xs text-slate-600">
                  {ev.detail}
                </p>

                <div className="text-[11px] text-slate-400">
                  By {ev.user} · <span className="capitalize">{ev.userRole}</span>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 font-mono flex-shrink-0">
                {ev.date}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
