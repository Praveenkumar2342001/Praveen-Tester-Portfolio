import React, { useState } from 'react';
import {
  Bug,
  AlertCircle,
  CheckCircle,
  XCircle,
  Monitor,
  Flame,
  ArrowUpRight,
  Filter,
  CheckSquare2,
  Clock,
  UserCheck
} from 'lucide-react';
import { BUG_REPORTS } from '../data/portfolioData';
import { BugReport, BugSeverity, BugStatus } from '../types';

export const BugReportShowcase: React.FC = () => {
  const [selectedBugId, setSelectedBugId] = useState<string>(BUG_REPORTS[0].id);
  const [severityFilter, setSeverityFilter] = useState<string>('ALL');

  const filteredBugs = BUG_REPORTS.filter((b) => {
    if (severityFilter !== 'ALL' && b.severity !== severityFilter) return false;
    return true;
  });

  const activeBug = BUG_REPORTS.find((b) => b.id === selectedBugId) || BUG_REPORTS[0];

  const getSeverityBadge = (severity: BugSeverity) => {
    switch (severity) {
      case 'Critical':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold bg-rose-100 text-rose-800 border border-rose-200">
            <Flame className="w-3 h-3 text-rose-600" />
            Critical
          </span>
        );
      case 'Major':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
            <AlertCircle className="w-3 h-3 text-amber-600" />
            Major
          </span>
        );
      case 'Minor':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200">
            Minor
          </span>
        );
    }
  };

  const getStatusBadge = (status: BugStatus) => {
    switch (status) {
      case 'Open':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200">
            Open
          </span>
        );
      case 'In Progress':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            In Progress
          </span>
        );
      case 'In Review':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200">
            In Review
          </span>
        );
      case 'Closed':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            Closed (Verified)
          </span>
        );
    }
  };

  return (
    <section id="bug-reports" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-3">
              <Bug className="w-3.5 h-3.5" />
              <span>Jira Defect Reporting</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Sample Jira-Style Defect Reports
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Demonstrating production-grade defect logging standards with clear steps to reproduce, environment isolation, severity classification, and actual vs expected outcomes.
            </p>
          </div>

          {/* Severity filter */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Severity:
            </span>
            {['ALL', 'Critical', 'Major', 'Minor'].map((sev) => (
              <button
                key={sev}
                onClick={() => setSeverityFilter(sev)}
                className={`px-3 py-1 rounded-md text-xs font-medium cursor-pointer transition-colors ${
                  severityFilter === sev
                    ? 'bg-emerald-600 text-white font-semibold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {sev}
              </button>
            ))}
          </div>
        </div>

        {/* Jira Inspector Two-Column View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Ticket List */}
          <div className="lg:col-span-4 space-y-2.5">
            <div className="p-3 bg-slate-100 rounded-lg text-xs font-bold text-slate-600 flex items-center justify-between">
              <span>Jira Backlog / Sprint Defects</span>
              <span className="text-slate-400 font-normal">{filteredBugs.length} Tickets</span>
            </div>

            <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
              {filteredBugs.map((bug) => {
                const isSelected = selectedBugId === bug.id;

                return (
                  <button
                    key={bug.id}
                    onClick={() => setSelectedBugId(bug.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-50/50 border-emerald-500 shadow-xs ring-1 ring-emerald-500/30'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-rose-500" />
                        <span className="font-mono text-xs font-bold text-slate-800">
                          {bug.id}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        {getSeverityBadge(bug.severity)}
                      </div>
                    </div>

                    <h4 className="text-xs font-bold text-slate-900 line-clamp-2 leading-snug">
                      {bug.summary}
                    </h4>

                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-100 text-[11px] text-slate-500">
                      <span className="truncate max-w-[140px]">{bug.module}</span>
                      {getStatusBadge(bug.status)}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Detailed Jira Ticket Viewer */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
              {/* Jira Ticket Header Bar */}
              <div className="bg-slate-900 text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded bg-rose-600 flex items-center justify-center text-white">
                    <Bug className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-sm font-bold tracking-wider text-emerald-400">
                    {activeBug.id}
                  </span>
                  <span className="text-slate-400">/</span>
                  <span className="text-xs text-slate-300">Software Defect</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-400">Status:</span>
                  {getStatusBadge(activeBug.status)}
                </div>
              </div>

              {/* Ticket Body Content */}
              <div className="p-6 md:p-8 space-y-6">
                {/* Summary / Title */}
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-snug">
                    {activeBug.summary}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <span className="text-xs text-slate-500">
                      Module: <strong className="text-slate-800">{activeBug.module}</strong>
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs text-slate-500">
                      Priority: <strong className="text-slate-800">{activeBug.priority}</strong>
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs text-slate-500">
                      Severity: <strong className="text-slate-800">{activeBug.severity}</strong>
                    </span>
                  </div>
                </div>

                {/* Metadata Row: Environment & Reporter */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs">
                  <div>
                    <div className="flex items-center gap-1.5 text-slate-400 font-bold uppercase tracking-wider mb-1">
                      <Monitor className="w-3.5 h-3.5 text-slate-500" />
                      <span>Environment Details</span>
                    </div>
                    <p className="text-slate-700 font-mono text-[11px] leading-relaxed">
                      {activeBug.environment}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5 text-slate-400 font-bold uppercase tracking-wider mb-1">
                      <UserCheck className="w-3.5 h-3.5 text-slate-500" />
                      <span>Reporter & Assignee</span>
                    </div>
                    <p className="text-slate-700">
                      Reporter: <span className="font-semibold">{activeBug.reporter}</span>
                    </p>
                    <p className="text-slate-700 mt-0.5">
                      Assignee: <span className="font-semibold">{activeBug.assignee}</span>
                    </p>
                  </div>
                </div>

                {/* Steps to Reproduce */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Steps to Reproduce
                  </h4>
                  <ol className="list-decimal list-inside space-y-1.5 text-xs text-slate-700 bg-slate-50 p-4 rounded-lg border border-slate-200">
                    {activeBug.stepsToReproduce.map((step, idx) => (
                      <li key={idx} className="leading-relaxed">
                        <span className="text-slate-900">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Expected vs Actual Comparison Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Expected */}
                  <div className="p-4 rounded-lg bg-emerald-50/70 border border-emerald-200">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900 mb-1.5">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>Expected Result</span>
                    </div>
                    <p className="text-xs text-emerald-950 leading-relaxed">
                      {activeBug.expectedResult}
                    </p>
                  </div>

                  {/* Actual */}
                  <div className="p-4 rounded-lg bg-rose-50/70 border border-rose-200">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-rose-900 mb-1.5">
                      <XCircle className="w-4 h-4 text-rose-600" />
                      <span>Actual Result (Bug)</span>
                    </div>
                    <p className="text-xs text-rose-950 leading-relaxed">
                      {activeBug.actualResult}
                    </p>
                  </div>
                </div>
              </div>

              {/* Jira footer note */}
              <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Verified in test cycle</span>
                <span>Jira QA Defect Standard</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
