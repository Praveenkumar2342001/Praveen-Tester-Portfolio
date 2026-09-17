import React from 'react';
import {
  CheckCircle2,
  MapPin,
  Briefcase,
  Layers,
  ArrowRight,
  Mail,
  ShieldCheck,
  Bug,
  Terminal,
  Database
} from 'lucide-react';
import { PERSONAL_PROFILE } from '../data/portfolioData';

interface HeroSectionProps {
  onViewProjects: () => void;
  onContactMe: () => void;
  candidateName: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onViewProjects,
  onContactMe,
  candidateName
}) => {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-white border-b border-slate-200/80 overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-emerald-50/50 to-transparent pointer-events-none" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Info Column */}
          <div className="lg:col-span-8 space-y-6 text-left">
            {/* Status Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for QA Roles
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                {PERSONAL_PROFILE.location}
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                <Briefcase className="w-3.5 h-3.5 text-slate-500" />
                {PERSONAL_PROFILE.experience} Experience
              </span>
            </div>

            {/* Name and Designation */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {candidateName || PERSONAL_PROFILE.name}
              </h1>
              <div className="flex items-center gap-3">
                <p className="text-xl sm:text-2xl font-bold text-emerald-700">
                  {PERSONAL_PROFILE.role}
                </p>
                <span className="text-slate-300">|</span>
                <p className="text-sm sm:text-base font-semibold text-slate-600">
                  2 Years of Professional Experience
                </p>
              </div>
            </div>

            {/* Short Professional Introduction */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Detail-driven QA specialist with 2 years of proven testing experience verifying web
              applications, REST APIs, and database consistency. Experienced in requirement analysis,
              crafting comprehensive test scenarios, executing rigorous regression cycles, and
              reporting high-fidelity defects in Jira.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-btn-projects"
                onClick={onViewProjects}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-xs hover:shadow-md transition-all cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-btn-contact"
                onClick={onContactMe}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Quick Skills highlight row */}
            <div className="pt-4 border-t border-slate-100">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                Core Competencies & Toolset
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Manual Testing',
                  'Functional & Regression',
                  'Smoke & Sanity',
                  'API Testing (Postman)',
                  'Jira Defect Logging',
                  'SQL Verification',
                  'Agile / Scrum',
                  'Test Case Design'
                ].map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-2.5 py-1 rounded bg-slate-100 text-slate-800 text-xs font-medium border border-slate-200/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* QA Profile Card / Recruiter Snapshot */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
                    QA
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-slate-900">QA Engineering Profile</h2>
                    <p className="text-xs text-slate-500">Recruiter Quick-Scan Sheet</p>
                  </div>
                </div>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Verified
                </span>
              </div>

              {/* Stat Matrix */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1">
                    <Briefcase className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Experience</span>
                  </div>
                  <p className="text-lg font-bold text-slate-900">2 Years</p>
                  <p className="text-[11px] text-slate-500">Professional QA</p>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Testing Depth</span>
                  </div>
                  <p className="text-lg font-bold text-slate-900">Full STLC</p>
                  <p className="text-[11px] text-slate-500">End-to-End</p>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1">
                    <Bug className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Defect Tool</span>
                  </div>
                  <p className="text-lg font-bold text-slate-900">Jira</p>
                  <p className="text-[11px] text-slate-500">Severity & Triage</p>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1">
                    <Terminal className="w-3.5 h-3.5 text-emerald-600" />
                    <span>API Tool</span>
                  </div>
                  <p className="text-lg font-bold text-slate-900">Postman</p>
                  <p className="text-[11px] text-slate-500">REST & Payloads</p>
                </div>
              </div>

              {/* Quality Standards checklist */}
              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Comprehensive Test Scenario & Case Authoring</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Reproducible Jira Defect Logs with Root Cause Traces</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sprint Planning, Standups & Retrospectives (Agile)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Back-end Validation using SQL SELECT & JOINs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
