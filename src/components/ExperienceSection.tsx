import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  AlertCircle,
  FileSpreadsheet,
  CheckSquare
} from 'lucide-react';
import { PROFESSIONAL_EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career History</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-2 text-base text-slate-600">
            2 years of dedicated manual quality assurance practice across the software testing life cycle (STLC).
          </p>
        </div>

        {/* Recruiter Transparency Notice */}
        <div className="mb-8 p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/80 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
          <div className="text-xs text-emerald-900 leading-relaxed">
            <span className="font-bold">Recruiter Note:</span> In strict adherence to confidentiality and portfolio integrity, company names, proprietary internal release codes, and internal metrics are represented with explicit placeholders (e.g., <code className="bg-emerald-100/70 px-1 py-0.5 rounded font-mono">[Company Name]</code>). All technical responsibilities, testing types, and tools reflect actual hands-on QA deliverables.
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {PROFESSIONAL_EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-xs hover:border-slate-300 transition-all"
            >
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-emerald-600 text-white">
                      Full-Time QA Role
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                      2 Years Duration
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-semibold text-emerald-700 mt-0.5 font-mono">
                    {exp.companyPlaceholder}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-2 text-xs text-slate-500">
                  <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1 rounded border border-slate-100">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span className="font-medium text-slate-700">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1 rounded border border-slate-100">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <p className="py-4 text-sm text-slate-700 leading-relaxed">
                {exp.summary}
              </p>

              {/* Core Responsibilities Grid */}
              <div className="mt-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Key Day-to-Day QA Responsibilities
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-slate-50/70 border border-slate-100 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 leading-relaxed">
                        {resp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testing Types & Tools Tags */}
              <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-slate-500 mb-2">
                    Testing Types Practiced:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.testingTypes.map((type) => (
                      <span
                        key={type}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-50 text-emerald-800 border border-emerald-200"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-500 mb-2">
                    Primary Tools Utilized:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.toolsUsed.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-800 border border-slate-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
