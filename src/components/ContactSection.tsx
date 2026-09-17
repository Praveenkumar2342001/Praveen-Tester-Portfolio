import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Check,
  Copy,
  Clock,
  Briefcase,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { PERSONAL_PROFILE } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailToDisplay = PERSONAL_PROFILE.emailPlaceholder;

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(emailToDisplay);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Contact</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Available for Manual QA Tester and Quality Assurance opportunities. Connect directly via email or professional profiles.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {/* Email Card */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between hover:border-emerald-300 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-100/80 text-emerald-800 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-500 block mb-1">
                Email Address
              </span>
              <p className="text-xs font-mono font-bold text-slate-900 break-all mb-4">
                {emailToDisplay}
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <a
                href={`mailto:${emailToDisplay}`}
                className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 hover:underline"
              >
                Send Email
              </a>
              <button
                onClick={copyEmailToClipboard}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between hover:border-emerald-300 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-100/80 text-emerald-800 flex items-center justify-center mb-4">
                <Linkedin className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-500 block mb-1">
                LinkedIn Profile
              </span>
              <p className="text-xs font-mono font-bold text-slate-900 truncate mb-4">
                {PERSONAL_PROFILE.linkedinPlaceholder.startsWith('http')
                  ? PERSONAL_PROFILE.linkedinPlaceholder.replace('https://www.', '').replace('https://', '')
                  : PERSONAL_PROFILE.linkedinPlaceholder}
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              {PERSONAL_PROFILE.linkedinPlaceholder.startsWith('http') ? (
                <a
                  href={PERSONAL_PROFILE.linkedinPlaceholder}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-800 hover:underline"
                >
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <span className="text-xs text-slate-400 font-mono">Placeholder</span>
              )}
              <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Verified Profile
              </span>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between hover:border-emerald-300 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-100/80 text-emerald-800 flex items-center justify-center mb-4">
                <Github className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-500 block mb-1">
                GitHub Repository
              </span>
              <p className="text-xs font-mono font-bold text-slate-900 truncate mb-4">
                {PERSONAL_PROFILE.githubPlaceholder.startsWith('http')
                  ? PERSONAL_PROFILE.githubPlaceholder.replace('https://', '')
                  : PERSONAL_PROFILE.githubPlaceholder}
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              {PERSONAL_PROFILE.githubPlaceholder.startsWith('http') ? (
                <a
                  href={PERSONAL_PROFILE.githubPlaceholder}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-800 hover:underline"
                >
                  <span>View GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <span className="text-xs text-slate-400 font-mono">[Placeholder]</span>
              )}
              <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                QA Artifacts
              </span>
            </div>
          </div>
        </div>

        {/* Location & Availability Summary Banner */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-slate-400 block text-[11px] font-semibold">Location</span>
                <span className="text-slate-900 font-bold">{PERSONAL_PROFILE.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <Briefcase className="w-4 h-4" />
              </div>
              <div>
                <span className="text-slate-400 block text-[11px] font-semibold">Experience</span>
                <span className="text-slate-900 font-bold">{PERSONAL_PROFILE.experience} Professional QA</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="text-slate-400 block text-[11px] font-semibold">Notice Period</span>
                <span className="text-slate-900 font-bold">Immediate / Standard Notice</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
