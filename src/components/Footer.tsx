import React from 'react';
import { CheckCircle2, ArrowUp, ShieldCheck, Mail, MapPin } from 'lucide-react';
import { PERSONAL_PROFILE } from '../data/portfolioData';

interface FooterProps {
  candidateName: string;
}

export const Footer: React.FC<FooterProps> = ({ candidateName }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-slate-800">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-emerald-600 text-white flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="font-bold text-white text-base tracking-tight">
                {candidateName || PERSONAL_PROFILE.name}
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">
                Manual QA Tester
              </span>
            </div>
            <p className="text-slate-400 max-w-md text-xs leading-relaxed">
              Professional software testing portfolio showcasing 2 years of manual QA experience,
              functional test execution, Jira defect tracking, Postman API testing, and backend database verification.
            </p>
            <div className="flex items-center gap-4 text-[11px] text-slate-500 pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                {PERSONAL_PROFILE.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                2 Years Experience
              </span>
            </div>
          </div>

          {/* QA Artifacts Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px] mb-3">
              QA Artifacts
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#test-cases" className="hover:text-emerald-400 transition-colors">
                  Test Case Repository
                </a>
              </li>
              <li>
                <a href="#bug-reports" className="hover:text-emerald-400 transition-colors">
                  Jira Bug Reports
                </a>
              </li>
              <li>
                <a href="#api-testing" className="hover:text-emerald-400 transition-colors">
                  Postman API Assertions
                </a>
              </li>
            </ul>
          </div>

          {/* Sections Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px] mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">
                  About QA Profile
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-emerald-400 transition-colors">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-emerald-400 transition-colors">
                  Professional Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-emerald-400 transition-colors">
                  Projects Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">
                  Recruiter Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-[11px]">
            © {new Date().getFullYear()} {candidateName || PERSONAL_PROFILE.name} • Manual QA Tester Portfolio. Built for QA Recruiters & Engineering Managers.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
