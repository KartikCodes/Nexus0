import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Plus, ChevronDown, User, Shield, ExternalLink } from 'lucide-react';

export default function DashboardHeader({ 
  currentUser, 
  onSwitchUser, 
  allUsers, 
  onOpenNewCase,
  searchQuery,
  setSearchQuery
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200/90 shadow-xs">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3 gap-4">
          
          {/* Logo & Subtitle */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-extrabold text-sm tracking-wider shadow-sm group-hover:bg-blue-700 transition">
                NO
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900 text-lg leading-tight">Nexus 0</span>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    AICTE OneView
                  </span>
                </div>
                <span className="text-xs text-slate-500 leading-tight hidden sm:block">
                  Consolidated Institution Oversight & Grievance Coordination
                </span>
              </div>
            </Link>
          </div>

          {/* Search Input */}
          <div className="flex-1 max-w-md hidden md:block">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search institutions or cases..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition"
              />
            </div>
          </div>

          {/* Right Action buttons & User profile */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenNewCase}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition shadow-sm hover:shadow"
            >
              <Plus className="w-4 h-4" />
              <span>Log Case</span>
            </button>

            {/* User Profile dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2.5 p-1.5 pl-2 rounded-xl border border-slate-200 hover:bg-slate-50 transition"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">
                  {currentUser.initials}
                </div>
                <div className="text-left hidden lg:block">
                  <div className="text-xs font-bold text-slate-900 leading-tight flex items-center gap-1.5">
                    <span>{currentUser.name}</span>
                    <span className="text-[9px] font-semibold px-1 py-0.2 rounded bg-purple-100 text-purple-700">
                      {currentUser.role}
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-500 leading-tight">
                    {currentUser.designation}
                  </div>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in zoom-in-95">
                  <div className="px-3 py-2 border-b border-slate-100">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Switch Demo Role
                    </div>
                  </div>
                  {allUsers.map((user) => (
                    <button
                      key={user.id}
                      onClick={() => {
                        onSwitchUser(user);
                        setDropdownOpen(false);
                      }}
                      className={`w-full px-3 py-2 text-left flex items-center gap-2.5 text-xs hover:bg-slate-50 transition ${
                        currentUser.id === user.id ? 'bg-blue-50/70 font-semibold text-blue-700' : 'text-slate-700'
                      }`}
                    >
                      <div className="w-6 h-6 rounded bg-slate-100 text-slate-600 font-bold text-[10px] flex items-center justify-center">
                        {user.initials}
                      </div>
                      <div className="truncate">
                        <div className="truncate">{user.name}</div>
                        <div className="text-[10px] text-slate-400">{user.designation}</div>
                      </div>
                    </button>
                  ))}
                  <div className="mt-2 pt-2 border-t border-slate-100 px-3">
                    <Link
                      to="/"
                      className="flex items-center justify-between text-xs text-blue-600 hover:text-blue-800 font-medium py-1"
                    >
                      <span>Return to Landing Page</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </header>
  );
}
