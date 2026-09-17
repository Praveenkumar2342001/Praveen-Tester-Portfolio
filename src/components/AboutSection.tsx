import React from 'react';
import {
  FileCheck2,
  GitPullRequest,
  Users2,
  CalendarCheck,
  CheckCircle,
  Clock,
  Sparkles,
  Workflow
} from 'lucide-react';
import { ABOUT_ME } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            About Me & QA Philosophy
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Dedicated Manual QA Tester focused on software reliability, user journey protection,
            and thorough bug reporting across iterative sprint releases.
          </p>
        </div>

        {/* 3 Core Pillars: QA Summary, Testing Experience, Agile/Scrum */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Professional QA Summary */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4 border border-emerald-100">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Professional QA Summary</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {ABOUT_ME.summary}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero-assumptions mindset on edge cases</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Clear, reproducible defect logging standard</span>
              </div>
            </div>
          </div>

          {/* Card 2: 1.5 Years Testing Experience */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4 border border-emerald-100">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">1.5 Years Testing Experience</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {ABOUT_ME.testingExperience}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Smoke, Sanity, Functional & Regression cycles</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Postman API tests & SQL database audits</span>
              </div>
            </div>
          </div>

          {/* Card 3: Agile / Scrum Experience */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4 border border-emerald-100">
                <Users2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Agile / Scrum Collaboration</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {ABOUT_ME.agileExperience}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Daily Standup, Sprint Planning & Retros</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Story estimation & acceptance criteria reviews</span>
              </div>
            </div>
          </div>
        </div>

        {/* STLC Methodology Overview Strip */}
        <div className="mt-10 bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-4">
            <Workflow className="w-4 h-4 text-emerald-600" />
            <span>Software Testing Life Cycle (STLC) Workflow Executed</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { step: '01', title: 'Requirement Analysis', desc: 'BRS & User Story parsing' },
              { step: '02', title: 'Test Planning', desc: 'Scope, schedule & environments' },
              { step: '03', title: 'Test Design', desc: 'Scenarios, cases & test data' },
              { step: '04', title: 'Test Execution', desc: 'Functional, UI & API tests' },
              { step: '05', title: 'Defect Reporting', desc: 'Jira logging & triage' },
              { step: '06', title: 'Test Closure', desc: 'Sign-off & release summary' }
            ].map((stlc) => (
              <div
                key={stlc.step}
                className="p-3 rounded-lg bg-slate-50 border border-slate-100 text-left"
              >
                <span className="text-[10px] font-bold text-emerald-700 tracking-wider">
                  PHASE {stlc.step}
                </span>
                <p className="text-xs font-bold text-slate-900 mt-1">{stlc.title}</p>
                <p className="text-[11px] text-slate-500 mt-0.5">{stlc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
