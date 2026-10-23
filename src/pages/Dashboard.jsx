import React, { useState } from 'react';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import OperationsRail from '../components/dashboard/OperationsRail';
import ConsoleView from '../components/dashboard/ConsoleView';
import InstitutionsView from '../components/dashboard/InstitutionsView';
import CasesView from '../components/dashboard/CasesView';
import ReportsView from '../components/dashboard/ReportsView';
import AuditView from '../components/dashboard/AuditView';
import DemoControlsModal from '../components/dashboard/DemoControlsModal';
import NewCaseModal from '../components/dashboard/NewCaseModal';
import { MOCK_USERS, MOCK_CASES } from '../data/mockData';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [currentUser, setCurrentUser] = useState(MOCK_USERS[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCaseId, setSelectedCaseId] = useState(null);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isNewCaseModalOpen, setIsNewCaseModalOpen] = useState(false);

  // If user clicks Demo Controls tab on sidebar, open modal
  const handleTabChange = (tabId) => {
    if (tabId === 'demo') {
      setIsDemoModalOpen(true);
    } else {
      setActiveTab(tabId);
    }
  };

  const handleSelectCase = (caseId) => {
    setSelectedCaseId(caseId);
    setActiveTab('cases');
  };

  const handleCaseCreated = (newCase) => {
    MOCK_CASES.unshift(newCase);
    setSelectedCaseId(newCase.id);
    setActiveTab('cases');
  };

  return (
    <div className="min-h-screen bg-[#f4f6fa] text-slate-800 flex flex-col font-sans">
      
      {/* Top Header */}
      <DashboardHeader
        currentUser={currentUser}
        onSwitchUser={setCurrentUser}
        allUsers={MOCK_USERS}
        onOpenNewCase={() => setIsNewCaseModalOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Container */}
      <div className="flex-1 max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Left Operations Rail */}
          <OperationsRail
            activeTab={activeTab}
            setActiveTab={handleTabChange}
            currentUser={currentUser}
          />

          {/* Right Main Content Panel */}
          <main className="flex-1 min-w-0">
            {activeTab === 'dashboard' && (
              <ConsoleView
                onSelectCase={handleSelectCase}
                onNavigateToCases={() => setActiveTab('cases')}
              />
            )}

            {activeTab === 'institutions' && (
              <InstitutionsView
                onSelectInstitution={(instId) => {
                  setActiveTab('cases');
                }}
              />
            )}

            {activeTab === 'cases' && (
              <CasesView
                selectedCaseId={selectedCaseId}
                setSelectedCaseId={setSelectedCaseId}
              />
            )}

            {activeTab === 'reports' && (
              <ReportsView />
            )}

            {activeTab === 'audit' && (
              <AuditView />
            )}
          </main>

        </div>
      </div>

      {/* Modals */}
      <DemoControlsModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        currentUser={currentUser}
        onSwitchUser={setCurrentUser}
      />

      <NewCaseModal
        isOpen={isNewCaseModalOpen}
        onClose={() => setIsNewCaseModalOpen(false)}
        onCaseCreated={handleCaseCreated}
      />

    </div>
  );
}
