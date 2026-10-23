import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <Routes>
      {/* Route /: Pinterest-inspired New Landing Page */}
      <Route path="/" element={<LandingPage />} />

      {/* Route /dashboard: Existing Full AICTE Nexus Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
