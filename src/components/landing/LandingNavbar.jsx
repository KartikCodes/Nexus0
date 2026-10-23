import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import NexusLogo from '../common/NexusLogo';

export default function LandingNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#070b19]/80 border-b border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NexusLogo variant="dark" />

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#home" 
              className="text-sm font-medium text-slate-200 hover:text-white transition-colors"
            >
              Home
            </a>
            <a 
              href="#features" 
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              Features
            </a>
            <a 
              href="#workflow" 
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              How It Works
            </a>
            <a 
              href="#about" 
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              About
            </a>
            <button 
              onClick={() => navigate('/dashboard')}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              Login
            </button>
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore Dashboard</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#070b19] px-4 pt-3 pb-6 space-y-3">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-white hover:bg-slate-800"
          >
            Home
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
          >
            Features
          </a>
          <a
            href="#workflow"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
          >
            How It Works
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
          >
            About
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigate('/dashboard');
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md"
            >
              <span>Explore Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
