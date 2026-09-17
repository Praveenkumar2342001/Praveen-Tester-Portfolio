import React, { useState } from 'react';
import {
  FileSpreadsheet,
  Search,
  CheckCircle2,
  XCircle,
  AlertOctagon,
  ChevronRight,
  Filter,
  ListFilter,
  LayoutGrid,
  Table as TableIcon
} from 'lucide-react';
import { TEST_CASES } from '../data/portfolioData';
import { TestCase, TestStatus, Priority } from '../types';

interface TestCaseShowcaseProps {
  onSelectTestCase?: (testCase: TestCase) => void;
}

export const TestCaseShowcase: React.FC<TestCaseShowcaseProps> = ({ onSelectTestCase }) => {
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [priorityFilter, setPriorityFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');
  const [expandedId, setExpandedId] = useState<string | null>('TC-AUTH-001');

  const filteredTestCases = TEST_CASES.filter((tc) => {
    if (statusFilter !== 'ALL' && tc.status !== statusFilter) return false;
    if (priorityFilter !== 'ALL' && tc.priority !== priorityFilter) return false;
    if (searchQuery.trim() === '') return true;

    const q = searchQuery.toLowerCase();
    return (
      tc.id.toLowerCase().includes(q) ||
      tc.scenario.toLowerCase().includes(q) ||
      tc.module.toLowerCase().includes(q)
    );
  });

  const getStatusBadge = (status: TestStatus) => {
    switch (status) {
      case 'Passed':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            Passed
          </span>
        );
      case 'Failed':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200">
            <XCircle className="w-3 h-3 text-rose-600" />
            Failed
          </span>
        );
      case 'Blocked':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
            <AlertOctagon className="w-3 h-3 text-amber-600" />
            Blocked
          </span>
        );
      default:
        return null;
    }
  };

  const getPriorityBadge = (priority: Priority) => {
    switch (priority) {
      case 'High':
        return (
          <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-rose-50 text-rose-700 border border-rose-200">
            High
          </span>
        );
      case 'Medium':
        return (
          <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
            Medium
          </span>
        );
      case 'Low':
        return (
          <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200">
            Low
          </span>
        );
    }
  };

  return (
    <section id="test-cases" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-3">
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>Test Case Design & Execution</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Test Case Repository & Execution Log
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Sample test cases illustrating structured test scenario design, preconditions, step-by-step verification, expected results, priority, and execution outcomes.
            </p>
          </div>

          {/* Controls Bar: Search & View Switcher */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative w-full sm:w-60">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search test ID or scenario..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200 bg-white text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              />
            </div>

            <div className="flex items-center rounded-lg border border-slate-200 bg-white p-1">
              <button
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded text-xs font-medium cursor-pointer ${
                  viewMode === 'table'
                    ? 'bg-emerald-50 text-emerald-800 font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Table View"
              >
                <TableIcon className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('cards')}
                className={`p-1.5 rounded text-xs font-medium cursor-pointer ${
                  viewMode === 'cards'
                    ? 'bg-emerald-50 text-emerald-800 font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Card Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Filters bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 p-4 rounded-xl bg-white border border-slate-200">
          {/* Status Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">
              Status:
            </span>
            {['ALL', 'Passed', 'Failed', 'Blocked'].map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  statusFilter === status
                    ? 'bg-slate-900 text-white font-semibold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          {/* Priority Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">
              Priority:
            </span>
            {['ALL', 'High', 'Medium', 'Low'].map((p) => (
              <button
                key={p}
                onClick={() => setPriorityFilter(p)}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  priorityFilter === p
                    ? 'bg-emerald-700 text-white font-semibold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* View Mode 1: Table View */}
        {viewMode === 'table' && (
          <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider">
                    <th className="py-3.5 px-4 w-32">Test ID</th>
                    <th className="py-3.5 px-4">Scenario & Module</th>
                    <th className="py-3.5 px-4 w-24">Priority</th>
                    <th className="py-3.5 px-4 w-28">Status</th>
                    <th className="py-3.5 px-4 text-right w-24">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredTestCases.map((tc) => {
                    const isExpanded = expandedId === tc.id;

                    return (
                      <React.Fragment key={tc.id}>
                        <tr
                          className={`hover:bg-slate-50/80 transition-colors cursor-pointer ${
                            isExpanded ? 'bg-emerald-50/30' : ''
                          }`}
                          onClick={() => setExpandedId(isExpanded ? null : tc.id)}
                        >
                          <td className="py-3 px-4 font-mono font-bold text-emerald-800 whitespace-nowrap">
                            {tc.id}
                          </td>
                          <td className="py-3 px-4">
                            <div className="font-semibold text-slate-900">{tc.scenario}</div>
                            <div className="text-[11px] text-slate-500 mt-0.5 flex items-center gap-2">
                              <span>Module: <strong className="text-slate-700">{tc.module}</strong></span>
                              <span>•</span>
                              <span className="text-slate-500">Type: {tc.testType}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4 whitespace-nowrap">
                            {getPriorityBadge(tc.priority)}
                          </td>
                          <td className="py-3 px-4 whitespace-nowrap">
                            {getStatusBadge(tc.status)}
                          </td>
                          <td className="py-3 px-4 text-right whitespace-nowrap">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setExpandedId(isExpanded ? null : tc.id);
                              }}
                              className="text-emerald-700 hover:text-emerald-800 font-semibold text-xs cursor-pointer inline-flex items-center gap-0.5"
                            >
                              <span>{isExpanded ? 'Collapse' : 'Steps'}</span>
                              <ChevronRight
                                className={`w-3.5 h-3.5 transition-transform ${
                                  isExpanded ? 'rotate-90' : ''
                                }`}
                              />
                            </button>
                          </td>
                        </tr>

                        {/* Expanded details row */}
                        {isExpanded && (
                          <tr className="bg-emerald-50/20 border-b border-slate-200">
                            <td colSpan={5} className="p-4 sm:p-6 bg-slate-50/50">
                              <div className="bg-white rounded-lg border border-slate-200 p-5 space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div>
                                    <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                                      Preconditions
                                    </h5>
                                    <p className="text-xs text-slate-700 bg-slate-50 p-2.5 rounded border border-slate-100">
                                      {tc.preconditions}
                                    </p>
                                  </div>

                                  <div>
                                    <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                                      Expected Result
                                    </h5>
                                    <p className="text-xs text-slate-700 bg-slate-50 p-2.5 rounded border border-slate-100">
                                      {tc.expectedResult}
                                    </p>
                                  </div>
                                </div>

                                <div>
                                  <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                                    Execution Steps ({tc.steps.length} Steps)
                                  </h5>
                                  <ol className="space-y-1.5 list-decimal list-inside text-xs text-slate-700 bg-slate-50 p-3 rounded border border-slate-100">
                                    {tc.steps.map((step, idx) => (
                                      <li key={idx} className="leading-relaxed">
                                        <span className="text-slate-800">{step}</span>
                                      </li>
                                    ))}
                                  </ol>
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* View Mode 2: Card Grid View */}
        {viewMode === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTestCases.map((tc) => (
              <div
                key={tc.id}
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {tc.id}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {tc.module}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {getPriorityBadge(tc.priority)}
                      {getStatusBadge(tc.status)}
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 leading-snug mb-3">
                    {tc.scenario}
                  </h3>

                  <div className="space-y-3 text-xs">
                    <div className="bg-slate-50 p-2.5 rounded border border-slate-100">
                      <span className="font-bold text-slate-500 block mb-0.5">Preconditions:</span>
                      <span className="text-slate-700">{tc.preconditions}</span>
                    </div>

                    <div className="bg-slate-50 p-2.5 rounded border border-slate-100">
                      <span className="font-bold text-slate-500 block mb-1">Execution Steps:</span>
                      <ol className="list-decimal list-inside space-y-1 text-slate-700">
                        {tc.steps.map((st, i) => (
                          <li key={i}>{st}</li>
                        ))}
                      </ol>
                    </div>

                    <div className="bg-emerald-50/50 p-2.5 rounded border border-emerald-100">
                      <span className="font-bold text-emerald-900 block mb-0.5">Expected Result:</span>
                      <span className="text-emerald-950">{tc.expectedResult}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredTestCases.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-200 text-slate-500 text-xs">
            No test cases found matching your filters. Try adjusting your status or search query.
          </div>
        )}
      </div>
    </section>
  );
};
