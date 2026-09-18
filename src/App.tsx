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

export default function App() {
  const candidateName = PERSONAL_PROFILE.name;
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

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
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
