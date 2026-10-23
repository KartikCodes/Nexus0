import React from 'react';
import { Sliders, Check, UserCheck, ShieldAlert, Sparkles, RefreshCw } from 'lucide-react';
import { MOCK_USERS } from '../../data/mockData';

export default function DemoControlsModal({ 
  isOpen, 
  onClose, 
  currentUser, 
  onSwitchUser 
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sliders className="w-5 h-5 text-blue-600" />
            <h3 className="text-base font-bold text-slate-900">
              Demo Simulation & Role Switcher
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 text-sm font-semibold"
          >
            ✕
          </button>
        </div>

        <div className="p-6 space-y-5">
          <p className="text-xs text-slate-500">
            For jury and evaluators during Smart India Hackathon demonstrations: Switch between administrative personas to observe role-based permission scopes and automated multi-bureau workflows.
          </p>

          <div className="space-y-2.5">
            {MOCK_USERS.map((user) => {
              const isSelected = currentUser.id === user.id;

              return (
                <div
                  key={user.id}
                  onClick={() => {
                    onSwitchUser(user);
                  }}
                  className={`p-3.5 rounded-xl border text-xs cursor-pointer transition flex items-center justify-between ${
                    isSelected
                      ? 'border-blue-600 bg-blue-50/80 shadow-xs'
                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-lg font-bold flex items-center justify-center text-xs ${
                      isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {user.initials}
                    </div>

                    <div>
                      <div className="font-bold text-slate-900 flex items-center gap-2">
                        <span>{user.name}</span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-200 text-slate-700 font-semibold">
                          {user.role}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500">{user.designation}</div>
                      <div className="text-[10px] text-slate-400 font-medium">{user.bureau}</div>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs">
            <span className="font-bold block mb-1">Live Evaluation Tip:</span>
            Switching to <strong>LEADERSHIP</strong> unlocks institutional risk ratings, while <strong>CASE_HANDLER</strong> enables logging direct hearings and action notes.
          </div>
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl transition"
          >
            Apply & Close
          </button>
        </div>

      </div>
    </div>
  );
}
