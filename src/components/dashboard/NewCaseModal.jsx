import React, { useState } from 'react';
import { Plus, X, Building2, AlertCircle } from 'lucide-react';
import { MOCK_INSTITUTIONS, MOCK_BUREAU_WORKLOAD } from '../../data/mockData';

export default function NewCaseModal({ isOpen, onClose, onCaseCreated }) {
  const [institution, setInstitution] = useState(MOCK_INSTITUTIONS[0].name);
  const [category, setCategory] = useState("Fee Irregularity & Capitation Charge");
  const [bureau, setBureau] = useState("Regulation, Redressal & Vigilance Bureau");
  const [priority, setPriority] = useState("High");
  const [description, setDescription] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim()) return;

    const randomId = `CASE-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const newCase = {
      id: randomId,
      institution,
      institutionId: "INST-NEW",
      category,
      bureau,
      bureauCode: bureau.includes("Approval") ? "BUR-APP" : bureau.includes("Regulation") ? "BUR-RB" : "BUR-PGRC",
      status: "Open",
      priority,
      slaStatus: "Due in 7 days",
      slaOverdue: false,
      assignedTo: "Er. Neha Sharma",
      createdAt: new Date().toISOString().split('T')[0],
      lastUpdated: new Date().toISOString().split('T')[0],
      description,
      events: [
        {
          date: new Date().toLocaleDateString('en-US'),
          action: "CREATED",
          badge: "Open",
          detail: `Grievance registered in Nexus Central Console: ${description.slice(0, 80)}...`,
          user: "Current Officer",
          userRole: "case handler"
        }
      ]
    };

    onCaseCreated(newCase);
    setDescription("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Plus className="w-5 h-5 text-blue-600" />
            <h3 className="text-base font-bold text-slate-900">
              Log Institution Complaint Case
            </h3>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-sm font-semibold">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
          <div>
            <label className="font-semibold text-slate-700 block mb-1">Target Institution</label>
            <select
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500"
            >
              {MOCK_INSTITUTIONS.map(inst => (
                <option key={inst.id} value={inst.name}>{inst.name} ({inst.aicteId})</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Grievance Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500"
              >
                <option value="Fee Irregularity & Capitation Charge">Capitation Fee Violation</option>
                <option value="Approval & Infrastructure Norms">Infrastructure Norm Deficit</option>
                <option value="Faculty 7th Pay Scale Non-Compliance">Faculty Pay Non-Compliance</option>
                <option value="Student Grievance & Harassment Redressal">Harassment / Student Redressal</option>
                <option value="Course Curriculum Deviation">Curriculum Deviation</option>
              </select>
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">Assigned Bureau</label>
              <select
                value={bureau}
                onChange={(e) => setBureau(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500"
              >
                {MOCK_BUREAU_WORKLOAD.map(b => (
                  <option key={b.id} value={b.name}>{b.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="font-semibold text-slate-700 block mb-1">Priority Tier</label>
            <div className="flex gap-2">
              {['Low', 'Medium', 'High', 'Critical'].map(p => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPriority(p)}
                  className={`flex-1 py-1.5 rounded-lg border font-semibold ${
                    priority === p 
                      ? 'bg-blue-600 text-white border-blue-600' 
                      : 'bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="font-semibold text-slate-700 block mb-1">Case Description & Allegations</label>
            <textarea
              rows={3}
              required
              placeholder="Provide specific details, dates, circular numbers violated..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="pt-2 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-slate-200 text-slate-600 font-semibold rounded-xl hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl"
            >
              Register Case
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
