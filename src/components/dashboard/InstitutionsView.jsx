import React, { useState } from 'react';
import { Building2, Search, Filter, ShieldAlert, CheckCircle, Clock } from 'lucide-react';
import { MOCK_INSTITUTIONS } from '../../data/mockData';

export default function InstitutionsView({ onSelectInstitution }) {
  const [filterRegion, setFilterRegion] = useState('ALL');
  const [search, setSearch] = useState('');

  const filtered = MOCK_INSTITUTIONS.filter(inst => {
    const matchRegion = filterRegion === 'ALL' || inst.region.toLowerCase().includes(filterRegion.toLowerCase());
    const matchSearch = inst.name.toLowerCase().includes(search.toLowerCase()) || 
                        inst.aicteId.includes(search) || 
                        inst.state.toLowerCase().includes(search.toLowerCase());
    return matchRegion && matchSearch;
  });

  return (
    <div className="space-y-6">
      
      {/* Banner */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-slate-900">Institutions OneView Registry</h2>
            <span className="px-2 py-0.5 rounded text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
              National AICTE Master Directory
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Consolidated record of institutions, statutory accreditation numbers, pending grievances, and SLA health index.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex items-center gap-3 flex-wrap">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search college or AICTE ID..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500"
            />
          </div>

          <select
            value={filterRegion}
            onChange={(e) => setFilterRegion(e.target.value)}
            className="text-xs py-1.5 px-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 focus:outline-none"
          >
            <option value="ALL">All Regions</option>
            <option value="Western">Western Region</option>
            <option value="South-West">South-West Region</option>
            <option value="Central">Central Region</option>
            <option value="Eastern">Eastern Region</option>
          </select>
        </div>
      </div>

      {/* Table Card */}
      <div className="rounded-2xl bg-white border border-slate-200/90 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase tracking-wider">
              <tr>
                <th className="py-3.5 px-4">Institution Name</th>
                <th className="py-3.5 px-4">AICTE ID</th>
                <th className="py-3.5 px-4">Jurisdiction & Region</th>
                <th className="py-3.5 px-4">Total Cases</th>
                <th className="py-3.5 px-4">Active Workflow</th>
                <th className="py-3.5 px-4">Statutory Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filtered.map((inst) => {
                const isCritical = inst.status === 'Critical SLA';
                const isAttention = inst.status === 'Attention Required';

                return (
                  <tr key={inst.id} className="hover:bg-slate-50/70 transition">
                    <td className="py-3.5 px-4 font-semibold text-slate-900 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      <span>{inst.name}</span>
                    </td>
                    <td className="py-3.5 px-4 font-mono text-slate-500">
                      {inst.aicteId}
                    </td>
                    <td className="py-3.5 px-4 text-slate-500">
                      <div>{inst.region}</div>
                      <div className="text-[10px] text-slate-400">{inst.state}</div>
                    </td>
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      {inst.casesCount}
                    </td>
                    <td className="py-3.5 px-4 font-bold text-blue-600">
                      {inst.activeCases}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold inline-flex items-center gap-1 ${
                        isCritical 
                          ? 'bg-rose-100 text-rose-700 border border-rose-200'
                          : isAttention
                          ? 'bg-amber-100 text-amber-700 border border-amber-200'
                          : 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                      }`}>
                        {isCritical && <ShieldAlert className="w-3 h-3 text-rose-600" />}
                        {isAttention && <Clock className="w-3 h-3 text-amber-600" />}
                        {!isCritical && !isAttention && <CheckCircle className="w-3 h-3 text-emerald-600" />}
                        <span>{inst.status}</span>
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => onSelectInstitution(inst.id)}
                        className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition"
                      >
                        Inspect Cases →
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
