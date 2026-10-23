import React from 'react';
import LandingNavbar from '../components/landing/LandingNavbar';
import HeroSection from '../components/landing/HeroSection';
import FeaturesSection from '../components/landing/FeaturesSection';
import WorkflowSection from '../components/landing/WorkflowSection';
import StatsSection from '../components/landing/StatsSection';
import CTASection from '../components/landing/CTASection';
import LandingFooter from '../components/landing/LandingFooter';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#070b19] text-white selection:bg-blue-600 selection:text-white">
      <LandingNavbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <WorkflowSection />
        <StatsSection />
        <CTASection />
      </main>
      <LandingFooter />
    </div>
  );
}
