import React, { useState } from 'react';
import {
  FolderKanban,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Smartphone,
  Globe,
  ShieldCheck,
  FileCheck2,
  Bug,
  Terminal,
  Layers,
  Wrench,
  Users,
  Check,
  Share2,
  ExternalLink,
  Sparkles,
  Stethoscope,
  Building2,
  MonitorCheck,
  CheckSquare
} from 'lucide-react';
import { PROOFBITS_PROJECT_DATA } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<number>(0);

  const project = PROOFBITS_PROJECT_DATA;

  const detailSections = [
    { id: 'overview', label: '1. Project Overview' },
    { id: 'platforms', label: '2. Platforms Tested' },
    { id: 'responsibilities', label: '3. QA Responsibilities' },
    { id: 'testing-areas', label: '4. Testing Areas' },
    { id: 'api-testing', label: '5. API Testing' },
    { id: 'defect-mgmt', label: '6. Defect Management' },
    { id: 'tools-methodology', label: '7. Tools & Methodology' }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-3">
            <FolderKanban className="w-3.5 h-3.5" />
            <span>Real-World QA Project</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Featured Project: {project.name}
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Real-world digital health platform testing across multi-role web portals and Android mobile applications.
          </p>
        </div>

        {/* Master Project Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden ring-1 ring-slate-900/5">
          {/* Card Top Banner / Key Metadata */}
          <div className="p-6 sm:p-8 bg-gradient-to-b from-slate-50/80 to-white border-b border-slate-200">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-100/80 text-emerald-900 border border-emerald-300/80 flex items-center gap-1">
                    <Stethoscope className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Domain: {project.domain}</span>
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200">
                    Type: {project.projectType}
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                    Role: {project.role}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-mono">
                  {project.name}
                </h3>
                <p className="text-sm font-semibold text-emerald-800 mt-1">
                  Online Medical Certificate Generation Platform
                </p>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
                  {project.overview[0]} {project.overview[1]}
                </p>
              </div>

              {/* Recruiter Quick Fact Sheet */}
              <div className="lg:w-80 shrink-0 bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-3">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Quick Profile Scan
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 block">Platforms:</span>
                  <span className="text-xs font-semibold text-slate-800">
                    Admin Web | Pharmacist Web | Android Mobile App
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 block">Testing:</span>
                  <span className="text-xs font-semibold text-slate-800">
                    Manual Testing | API Testing | Mobile Testing
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 block">Tools:</span>
                  <span className="text-xs font-mono font-bold text-emerald-700">
                    Jira | Postman
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 block">Methodology:</span>
                  <span className="text-xs font-semibold text-slate-800">
                    Agile / Scrum
                  </span>
                </div>
              </div>
            </div>

            {/* Three Platforms Pill Preview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-slate-200/80">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <MonitorCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-900 block">
                    1. Admin Web Application
                  </span>
                  <span className="text-[11px] text-slate-500 line-clamp-2">
                    Supervision, onboarding approvals, certificate lifecycle logs & audits.
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-900 block">
                    2. Pharmacist Web Application
                  </span>
                  <span className="text-[11px] text-slate-500 line-clamp-2">
                    Digital certificate verification, QR code lookup, authorization & dispensing.
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-900 block">
                    3. Android Mobile App (APK)
                  </span>
                  <span className="text-[11px] text-slate-500 line-clamp-2">
                    Patient certificate requests, document attachments, mobile UI & navigation.
                  </span>
                </div>
              </div>
            </div>

            {/* Toggle Button */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>2 Years Manual QA Focus • Zero Automated Framework Claims</span>
              </div>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors cursor-pointer shadow-xs"
              >
                <span>{isExpanded ? 'Hide Detailed QA Documentation' : 'View Project Details'}</span>
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Expanded Project Details */}
          {isExpanded && (
            <div className="p-6 sm:p-8 space-y-10 animate-in fade-in duration-200 bg-white">
              {/* Internal Quick Navigation Bar */}
              <div className="flex flex-wrap gap-1.5 pb-4 border-b border-slate-200">
                {detailSections.map((sec, idx) => (
                  <button
                    key={sec.id}
                    onClick={() => {
                      const el = document.getElementById(`section-${sec.id}`);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      setActiveTab(idx);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      activeTab === idx
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                    }`}
                  >
                    {sec.label}
                  </button>
                ))}
              </div>

              {/* 1. Project Overview */}
              <div id="section-overview" className="scroll-mt-24 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold">
                    1
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    Project Overview
                  </h4>
                </div>
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-3 leading-relaxed">
                  <p>{project.overview[0]}</p>
                  <p>{project.overview[1]}</p>
                  <p className="font-semibold text-emerald-900 bg-emerald-50/80 p-3 rounded-lg border border-emerald-200">
                    {project.overview[2]}
                  </p>
                </div>
              </div>

              {/* 2. Platforms Tested */}
              <div id="section-platforms" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold">
                    2
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    Platforms Tested
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.platformsTested.map((plat, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-white border border-slate-200 hover:border-emerald-300 shadow-xs flex flex-col justify-between space-y-4"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            {plat.badge}
                          </span>
                          <span className="text-[11px] font-mono text-slate-400 font-semibold">
                            Platform 0{idx + 1}
                          </span>
                        </div>
                        <h5 className="font-bold text-slate-900 text-sm mb-2 font-mono">
                          {plat.name}
                        </h5>
                        <p className="text-xs text-slate-600 leading-relaxed mb-4">
                          {plat.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                          Key Focus Areas Tested:
                        </span>
                        <ul className="space-y-1.5">
                          {plat.focusAreas.map((area, i) => (
                            <li
                              key={i}
                              className="text-xs text-slate-700 flex items-start gap-1.5"
                            >
                              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{area}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. QA Responsibilities */}
              <div id="section-responsibilities" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold">
                    3
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    QA Responsibilities
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.responsibilities.map((resp, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/80 flex items-start gap-3 hover:bg-slate-50 transition-colors"
                    >
                      <div className="w-5 h-5 rounded-md bg-emerald-100/80 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-emerald-700" />
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {resp}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Testing Areas */}
              <div id="section-testing-areas" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold">
                    4
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    Testing Areas
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.testingAreas.map((area, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <CheckSquare className="w-4 h-4 text-emerald-600" />
                          <h5 className="font-bold text-slate-900 text-sm">
                            {area.title}
                          </h5>
                        </div>
                        <p className="text-xs text-slate-500 mb-4">
                          {area.description}
                        </p>

                        <ul className="space-y-2">
                          {area.items.map((item, i) => (
                            <li
                              key={i}
                              className="text-xs text-slate-700 flex items-start gap-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. API Testing */}
              <div id="section-api-testing" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold">
                    5
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    API Testing
                  </h4>
                </div>

                <div className="p-6 rounded-xl bg-slate-900 text-white border border-slate-800 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-bold font-mono text-emerald-300">
                        Postman REST API Validation Suite
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">
                      Target: Medical Certificate REST Endpoints
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {project.apiTesting.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-slate-800/80 border border-slate-700 flex items-start gap-2.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-200 font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 text-xs text-slate-400 border-t border-slate-800/80">
                    <p>
                      Validated parity between the front-end user forms, mobile APK inputs, and backend JSON response objects, ensuring correct status codes (200, 201, 400, 401, 404, 422) and payload schema compliance.
                    </p>
                  </div>
                </div>
              </div>

              {/* 6. Defect Management */}
              <div id="section-defect-mgmt" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold">
                    6
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    Defect Management
                  </h4>
                </div>

                <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-4 shadow-xs">
                  <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <Bug className="w-4 h-4 text-emerald-600" />
                      <span className="text-xs font-bold text-slate-900">
                        Jira Bug Tracking & Lifecycle Process
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Standardized Quality Gates
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {project.defectManagement.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 flex items-start gap-2.5"
                      >
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <span className="text-xs text-slate-800 font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3.5 rounded-lg bg-emerald-50/50 border border-emerald-100 text-xs text-slate-700 leading-relaxed">
                    <strong>Jira Defect Standard:</strong> Every ticket was authored with unambiguous reproduction steps, actual vs. expected behavior, environmental build details (Web browser version / Android APK build version), and attached screenshot/console evidence to facilitate rapid developer turnaround and retesting.
                  </div>
                </div>
              </div>

              {/* 7. Tools & Methodology */}
              <div id="section-tools-methodology" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold">
                    7
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    Tools & Methodology
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Tools */}
                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-emerald-600" />
                      <h5 className="text-sm font-bold text-slate-900">
                        Primary QA Tools
                      </h5>
                    </div>

                    <div className="space-y-2.5">
                      {project.toolsAndMethodology.tools.map((t, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-lg bg-white border border-slate-200"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-bold font-mono text-emerald-800">
                              {t.name}
                            </span>
                            <span className="text-[10px] uppercase font-bold text-slate-400">
                              Core QA Tool
                            </span>
                          </div>
                          <p className="text-xs text-slate-600">
                            {t.purpose}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Methodology */}
                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-emerald-600" />
                      <h5 className="text-sm font-bold text-slate-900">
                        QA Methodology: {project.toolsAndMethodology.methodology.name}
                      </h5>
                    </div>

                    <div className="p-3 rounded-lg bg-white border border-slate-200 space-y-2">
                      <p className="text-xs font-semibold text-slate-700">
                        Sprint Execution & Team Integration:
                      </p>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {project.toolsAndMethodology.methodology.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Close / Collapse Bar */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  ProofBits QA Portfolio Documentation
                </span>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                >
                  <span>Collapse Section</span>
                  <ChevronUp className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
