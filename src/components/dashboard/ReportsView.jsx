import React from 'react';
import { BarChart3, Download, TrendingUp, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';
import { MOCK_MONTHLY_TRENDS, MOCK_BUREAU_WORKLOAD } from '../../data/mockData';

export default function ReportsView() {
  const handleExportCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8," + 
      "Month,Cases Received,Cases Resolved,Resolution Rate (%)\n" +
      MOCK_MONTHLY_TRENDS.map(t => `${t.month},${t.received},${t.resolved},${Math.round((t.resolved/t.received)*100)}%`).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "AICTE_OneView_Summary_Report_2026.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Reports & Analytics Intelligence</h2>
          <p className="text-xs text-slate-500 mt-1">
            Aggregated institutional compliance metrics, turnaround SLA analytics, and regulatory filings.
          </p>
        </div>

        <button
          onClick={handleExportCSV}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition shadow-sm"
        >
          <Download className="w-4 h-4" />
          <span>Export Summary CSV</span>
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Monthly Performance Table */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-4">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            <span>Monthly Intake & Resolution Velocity</span>
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-50 text-slate-500 font-semibold uppercase">
                <tr>
                  <th className="py-2.5 px-3">Reporting Period</th>
                  <th className="py-2.5 px-3">Received</th>
                  <th className="py-2.5 px-3">Resolved</th>
                  <th className="py-2.5 px-3 text-right">Redressal Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {MOCK_MONTHLY_TRENDS.map((t, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="py-2.5 px-3 font-medium text-slate-800">{t.month}</td>
                    <td className="py-2.5 px-3 text-blue-600 font-bold">{t.received}</td>
                    <td className="py-2.5 px-3 text-emerald-600 font-bold">{t.resolved}</td>
                    <td className="py-2.5 px-3 text-right font-mono font-bold text-slate-700">
                      {Math.round((t.resolved / t.received) * 100)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bureau Performance Rating */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-4">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-purple-600" />
            <span>Bureau Regulatory Compliance Scorecard</span>
          </h3>

          <div className="space-y-3">
            {MOCK_BUREAU_WORKLOAD.map(b => (
              <div key={b.id} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-slate-800 block">{b.name}</span>
                  <span className="text-[10px] text-slate-400 font-mono">{b.code}</span>
                </div>
                <div className="text-right">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-700">
                    {b.overdue === 0 ? 'Optimal SLA' : `${b.overdue} Backlog Cases`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
