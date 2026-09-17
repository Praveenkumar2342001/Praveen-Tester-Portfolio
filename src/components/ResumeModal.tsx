import React from 'react';
import {
  X,
  Printer,
  Download,
  CheckCircle2,
  MapPin,
  Mail,
  Briefcase,
  FileCheck,
  Award
} from 'lucide-react';
import {
  PERSONAL_PROFILE,
  ABOUT_ME,
  SKILL_CATEGORIES,
  PROFESSIONAL_EXPERIENCES,
  PROJECTS
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  candidateName: string;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  candidateName
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-emerald-600" />
            <h3 className="text-sm font-bold text-slate-900">
              QA Professional Profile & Competency Summary
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 cursor-pointer transition-colors"
              title="Print / Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Summary</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-md hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / Resume Document */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-slate-800 text-xs leading-relaxed">
          {/* Candidate Header */}
          <div className="border-b border-slate-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                {candidateName || PERSONAL_PROFILE.name}
              </h1>
              <p className="text-base font-bold text-emerald-700 mt-0.5">
                {PERSONAL_PROFILE.role} • 2 Years Professional Experience
              </p>
              <div className="flex flex-wrap items-center gap-3 text-slate-500 mt-2 text-xs">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-emerald-600" />
                  {PERSONAL_PROFILE.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3 h-3 text-emerald-600" />
                  {PERSONAL_PROFILE.emailPlaceholder}
                </span>
              </div>
            </div>
            <div className="text-right sm:border-l sm:border-slate-200 sm:pl-4">
              <span className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold text-[11px]">
                Active Candidate Profile
              </span>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-1.5 text-emerald-800">
              Professional Summary
            </h4>
            <p className="text-slate-600 leading-relaxed">{ABOUT_ME.summary}</p>
          </div>

          {/* Primary Skills Grid */}
          <div>
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-2 text-emerald-800">
              Core QA Competencies & Technical Skills
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.categoryKey} className="p-2.5 rounded bg-slate-50 border border-slate-100">
                  <span className="font-bold text-slate-900 block mb-1">{cat.title}:</span>
                  <span className="text-slate-600">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-2 text-emerald-800">
              Professional Experience (2 Years)
            </h4>
            {PROFESSIONAL_EXPERIENCES.map((exp) => (
              <div key={exp.id} className="p-4 rounded-lg border border-slate-200 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="font-bold text-slate-900 text-sm">{exp.role}</span>
                    <span className="text-emerald-700 font-medium ml-2 font-mono">
                      {exp.companyPlaceholder}
                    </span>
                  </div>
                  <span className="text-slate-500 font-mono text-[11px]">{exp.period}</span>
                </div>
                <ul className="space-y-1 mt-2 list-disc list-inside text-slate-700">
                  {exp.responsibilities.slice(0, 4).map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* QA Projects Preview */}
          <div>
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-2 text-emerald-800">
              Representative Real-World QA Project
            </h4>
            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <span className="font-bold text-slate-900 text-sm font-mono">{proj.name}</span>
                      <span className="text-emerald-700 font-semibold ml-2 text-xs">
                        {proj.domain}
                      </span>
                    </div>
                    <span className="text-slate-500 font-mono text-[11px]">
                      Role: {proj.role}
                    </span>
                  </div>
                  <p className="text-slate-600 text-xs">
                    <strong>Platforms:</strong> Admin Web Application • Pharmacist Web Application • Android Mobile App (APK)
                  </p>
                  <p className="text-slate-600 text-xs">
                    <strong>Testing & Tools:</strong> Manual Testing, API Testing, Mobile Testing | Tools: Jira, Postman
                  </p>
                  <ul className="list-disc list-inside text-slate-600 text-xs space-y-0.5 pt-1">
                    <li>Executed functional, negative, boundary, and business-rule test scenarios across web portals and Android APK.</li>
                    <li>Performed REST API testing with Postman, validating endpoints, status codes, and JSON response consistency with UI.</li>
                    <li>Documented and tracked defects in Jira with clear reproduction steps, screenshots, severity, and retesting verification.</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Confidential Recruiter Document Preview</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-md bg-slate-900 text-white font-semibold hover:bg-slate-800 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
