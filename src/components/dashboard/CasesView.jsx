import React, { useState } from 'react';
import { 
  FileText, 
  Search, 
  AlertTriangle, 
  Clock, 
  CheckCircle2, 
  User, 
  X, 
  ArrowRight,
  ShieldAlert,
  Send,
  Building2,
  Calendar
} from 'lucide-react';
import { MOCK_CASES } from '../../data/mockData';

export default function CasesView({ selectedCaseId, setSelectedCaseId }) {
  const [bureauFilter, setBureauFilter] = useState('ALL');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [search, setSearch] = useState('');
  const [casesList, setCasesList] = useState(MOCK_CASES);
  const [newActionNote, setNewActionNote] = useState('');

  const activeCase = casesList.find(c => c.id === selectedCaseId);

  const filteredCases = casesList.filter(c => {
    const matchBureau = bureauFilter === 'ALL' || c.bureauCode === bureauFilter;
    const matchStatus = statusFilter === 'ALL' || 
                        (statusFilter === 'Overdue' && (c.slaOverdue || c.status === 'Overdue')) ||
                        c.status.toLowerCase() === statusFilter.toLowerCase();
    const matchSearch = c.id.toLowerCase().includes(search.toLowerCase()) ||
                        c.institution.toLowerCase().includes(search.toLowerCase()) ||
                        c.category.toLowerCase().includes(search.toLowerCase());
    return matchBureau && matchStatus && matchSearch;
  });

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (!newActionNote.trim() || !activeCase) return;

    const newEvent = {
      date: new Date().toLocaleDateString('en-US'),
      action: "OFFICER_NOTE",
      badge: "Updated",
      detail: newActionNote,
      user: "Current Officer",
      userRole: "case handler"
    };

    setCasesList(prev => prev.map(c => {
      if (c.id === activeCase.id) {
        return {
          ...c,
          events: [newEvent, ...c.events]
        };
      }
      return c;
    }));

    setNewActionNote('');
  };

  return (
    <div className="space-y-6">
      
      {/* Top Banner & Filters */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-slate-900">Cases & Grievances Console</h2>
              <span className="px-2 py-0.5 rounded text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200">
                Multi-Bureau Queue
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Active tracking of cross-bureau complaints, statutory notices, and compliance orders.
            </p>
          </div>

          {/* Search */}
          <div className="relative max-w-xs w-full">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search case, college..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
          
          {/* Bureau Filter */}
          <div className="flex items-center gap-1.5 flex-wrap text-xs">
            <span className="text-slate-400 font-semibold mr-1">Bureau:</span>
            {['ALL', 'BUR-APP', 'BUR-RB', 'BUR-PGRC', 'BUR-POL', 'BUR-FDC'].map(code => (
              <button
                key={code}
                onClick={() => setBureauFilter(code)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition ${
                  bureauFilter === code
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {code}
              </button>
            ))}
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-1.5 flex-wrap text-xs">
            <span className="text-slate-400 font-semibold mr-1">Status:</span>
            {['ALL', 'Overdue', 'In Review', 'Open', 'Resolved'].map(st => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition ${
                  statusFilter === st
                    ? 'bg-slate-900 text-white font-semibold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {st}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Main Cases Table & Drawer Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Cases List Table */}
        <div className={`${activeCase ? 'lg:col-span-2' : 'lg:col-span-3'} rounded-2xl bg-white border border-slate-200/90 shadow-xs overflow-hidden`}>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase tracking-wider">
                <tr>
                  <th className="py-3.5 px-4">Case ID</th>
                  <th className="py-3.5 px-4">Institution & Category</th>
                  <th className="py-3.5 px-4">Bureau</th>
                  <th className="py-3.5 px-4">Status & SLA</th>
                  <th className="py-3.5 px-4">Assigned Handler</th>
                  <th className="py-3.5 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {filteredCases.map((c) => {
                  const isOverdue = c.slaOverdue || c.status === 'Overdue';
                  const isResolved = c.status === 'Resolved';
                  const isSelected = selectedCaseId === c.id;

                  return (
                    <tr 
                      key={c.id} 
                      className={`hover:bg-slate-50 transition cursor-pointer ${isSelected ? 'bg-blue-50/50' : ''}`}
                      onClick={() => setSelectedCaseId(c.id)}
                    >
                      <td className="py-3.5 px-4 font-mono font-bold text-blue-600">
                        {c.id}
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="font-semibold text-slate-900 max-w-xs truncate">
                          {c.institution}
                        </div>
                        <div className="text-[11px] text-slate-500 truncate max-w-xs">
                          {c.category}
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                          {c.bureauCode}
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex flex-col gap-1">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold inline-flex items-center gap-1 w-max ${
                            isOverdue
                              ? 'bg-rose-100 text-rose-700 border border-rose-200'
                              : isResolved
                              ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                              : 'bg-amber-100 text-amber-700 border border-amber-200'
                          }`}>
                            {isOverdue && <AlertTriangle className="w-3 h-3 text-rose-600" />}
                            {isResolved && <CheckCircle2 className="w-3 h-3 text-emerald-600" />}
                            {!isOverdue && !isResolved && <Clock className="w-3 h-3 text-amber-600" />}
                            <span>{c.status}</span>
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">
                            {c.slaStatus}
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        {c.assignedTo}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedCaseId(c.id);
                          }}
                          className="text-xs font-semibold text-blue-600 hover:text-blue-800"
                        >
                          View →
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Selected Case Detail Drawer / Inspector */}
        {activeCase && (
          <div className="rounded-2xl bg-white border border-slate-200/90 shadow-sm p-6 space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-blue-600 block">
                  {activeCase.id}
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-1">
                  {activeCase.institution}
                </h3>
                <span className="text-xs text-slate-500 block mt-0.5">
                  Category: {activeCase.category}
                </span>
              </div>
              <button
                onClick={() => setSelectedCaseId(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Meta Tags */}
            <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs">
              <div>
                <span className="text-[11px] text-slate-400 font-medium">Bureau</span>
                <div className="font-semibold text-slate-800 mt-0.5">{activeCase.bureau}</div>
              </div>
              <div>
                <span className="text-[11px] text-slate-400 font-medium">Assigned Officer</span>
                <div className="font-semibold text-slate-800 mt-0.5">{activeCase.assignedTo}</div>
              </div>
              <div>
                <span className="text-[11px] text-slate-400 font-medium">Current SLA</span>
                <div className={`font-semibold mt-0.5 ${activeCase.slaOverdue ? 'text-rose-600' : 'text-slate-800'}`}>
                  {activeCase.slaStatus}
                </div>
              </div>
              <div>
                <span className="text-[11px] text-slate-400 font-medium">Created Date</span>
                <div className="font-semibold text-slate-800 mt-0.5">{activeCase.createdAt}</div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-1">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                Grievance Summary
              </span>
              <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                {activeCase.description}
              </p>
            </div>

            {/* Event Timeline */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wide block">
                Cross-Bureau Action Trail
              </span>

              <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                {activeCase.events.map((ev, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs space-y-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-bold text-blue-700">{ev.action}</span>
                      <span className="font-mono text-slate-400">{ev.date}</span>
                    </div>
                    <p className="text-slate-700 text-xs">{ev.detail}</p>
                    <div className="text-[10px] text-slate-400">By {ev.user} ({ev.userRole})</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Add action / note form */}
            <form onSubmit={handleAddEvent} className="pt-3 border-t border-slate-100 space-y-2">
              <input
                type="text"
                placeholder="Log scrutiny finding or note..."
                value={newActionNote}
                onChange={(e) => setNewActionNote(e.target.value)}
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Append Action Log</span>
              </button>
            </form>

          </div>
        )}

      </div>

    </div>
  );
}
