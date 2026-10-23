import React from 'react';
import { ShieldCheck, Lock, Hash, Terminal } from 'lucide-react';
import { MOCK_AUDIT_LOGS } from '../../data/mockData';

export default function AuditView() {
  return (
    <div className="space-y-6">
      
      {/* Banner */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl font-bold text-slate-900">Immutable Audit Trail & Forensics</h2>
        </div>
        <p className="text-xs text-slate-500 mt-1 max-w-3xl">
          Cryptographically signed log entries capturing cross-bureau case assignments, document disclosures, hearings transcripts, and executive signoffs in compliance with government statutory audit norms.
        </p>
      </div>

      {/* Table */}
      <div className="rounded-2xl bg-white border border-slate-200/90 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase tracking-wider">
              <tr>
                <th className="py-3.5 px-4">Audit ID</th>
                <th className="py-3.5 px-4">Timestamp (IST)</th>
                <th className="py-3.5 px-4">Officer & Role</th>
                <th className="py-3.5 px-4">Statutory Action</th>
                <th className="py-3.5 px-4">Case / Target</th>
                <th className="py-3.5 px-4">Audit Hash & Host</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700 font-mono">
              {MOCK_AUDIT_LOGS.map((log) => (
                <tr key={log.id} className="hover:bg-slate-50/70 transition">
                  <td className="py-3.5 px-4 font-bold text-blue-600">
                    {log.id}
                  </td>
                  <td className="py-3.5 px-4 text-slate-500 font-sans">
                    {log.timestamp}
                  </td>
                  <td className="py-3.5 px-4 font-sans">
                    <span className="font-semibold text-slate-900 block">{log.actor}</span>
                    <span className="text-[10px] text-slate-400">{log.role}</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-800 border border-slate-200">
                      {log.action}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-bold text-slate-800">
                    {log.target}
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="text-[11px] text-slate-500 flex items-center gap-1">
                      <Lock className="w-3 h-3 text-emerald-600" />
                      <span>{log.hash}</span>
                    </div>
                    <div className="text-[10px] text-slate-400">IP: {log.ip}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
