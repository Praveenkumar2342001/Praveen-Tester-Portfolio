/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { BugReportShowcase } from './components/BugReportShowcase';
import { ApiTestingSection } from './components/ApiTestingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { PERSONAL_PROFILE } from './data/portfolioData';
import { UserCheck, Edit3, RotateCcw } from 'lucide-react';

export default function App() {
  const [candidateName, setCandidateName] = useState<string>(PERSONAL_PROFILE.name);
  const [isEditingName, setIsEditingName] = useState<boolean>(false);
  const [tempName, setTempName] = useState<string>(PERSONAL_PROFILE.name);
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault();
    setCandidateName(tempName.trim() || PERSONAL_PROFILE.name);
    setIsEditingName(false);
  };

  const handleResetName = () => {
    setCandidateName(PERSONAL_PROFILE.name);
    setTempName(PERSONAL_PROFILE.name);
    setIsEditingName(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Recruiter / Candidate Interactive Name Toolbar */}
      <div className="bg-slate-900 text-slate-300 text-[11px] px-4 py-1.5 border-b border-slate-800 flex items-center justify-between z-50">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-semibold text-white">Manual QA Portfolio</span>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <span className="text-slate-400 hidden sm:inline">
              Candidate Display: <strong className="text-emerald-300">{candidateName}</strong>
            </span>
          </div>

          <div className="flex items-center gap-2">
            {isEditingName ? (
              <form onSubmit={handleSaveName} className="flex items-center gap-1.5">
                <input
                  type="text"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  placeholder="Enter your name"
                  className="bg-slate-800 text-white px-2 py-0.5 rounded text-xs border border-slate-700 focus:outline-none focus:border-emerald-500"
                  autoFocus
                />
                <button
                  type="submit"
                  className="px-2 py-0.5 rounded bg-emerald-600 text-white font-semibold text-[10px] hover:bg-emerald-500 cursor-pointer"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditingName(false)}
                  className="px-2 py-0.5 rounded bg-slate-700 text-slate-300 text-[10px] hover:bg-slate-600 cursor-pointer"
                >
                  Cancel
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setTempName(candidateName);
                    setIsEditingName(true);
                  }}
                  className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer text-[11px]"
                  title="Customize candidate name display"
                >
                  <Edit3 className="w-3 h-3 text-emerald-400" />
                  <span>Customize Name</span>
                </button>
                {candidateName !== PERSONAL_PROFILE.name && (
                  <button
                    onClick={handleResetName}
                    className="inline-flex items-center gap-1 text-slate-400 hover:text-rose-300 text-[11px] cursor-pointer"
                    title="Reset to default placeholder [Your Name]"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span className="hidden sm:inline">Reset</span>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <Navbar onOpenResumePreview={() => setResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          candidateName={candidateName}
          onViewProjects={() => scrollToSection('projects')}
          onContactMe={() => scrollToSection('contact')}
        />

        {/* 2. About Me */}
        <AboutSection />

        {/* 3. Skills */}
        <SkillsSection />

        {/* 4. Professional Experience */}
        <ExperienceSection />

        {/* 5. Projects */}
        <ProjectsSection />

        {/* 6. Bug Report Showcase */}
        <BugReportShowcase />

        {/* 8. API Testing */}
        <ApiTestingSection />

        {/* 9. Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer candidateName={candidateName} />

      {/* Recruiter Resume Summary Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        candidateName={candidateName}
      />
    </div>
  );
}
