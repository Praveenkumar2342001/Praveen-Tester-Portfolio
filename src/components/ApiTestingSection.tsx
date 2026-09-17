import React, { useState } from 'react';
import {
  Terminal,
  Send,
  CheckCircle2,
  AlertTriangle,
  Code2,
  Copy,
  Check,
  Globe,
  SlidersHorizontal,
  FileCheck
} from 'lucide-react';
import { API_TEST_CASES } from '../data/portfolioData';
import { ApiCase, HttpMethod } from '../types';

export const ApiTestingSection: React.FC = () => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(API_TEST_CASES[0].id);
  const [methodFilter, setMethodFilter] = useState<string>('ALL');
  const [copied, setCopied] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'response' | 'request' | 'validations'>('response');

  const filteredCases = API_TEST_CASES.filter((c) => {
    if (methodFilter !== 'ALL' && c.method !== methodFilter) return false;
    return true;
  });

  const activeCase = API_TEST_CASES.find((c) => c.id === selectedCaseId) || API_TEST_CASES[0];

  const getMethodColor = (method: HttpMethod) => {
    switch (method) {
      case 'GET':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300 font-bold';
      case 'POST':
        return 'bg-blue-100 text-blue-800 border-blue-300 font-bold';
      case 'PUT':
        return 'bg-amber-100 text-amber-800 border-amber-300 font-bold';
      case 'DELETE':
        return 'bg-rose-100 text-rose-800 border-rose-300 font-bold';
    }
  };

  const getStatusCodeBadge = (code: number, text: string) => {
    if (code >= 200 && code < 300) {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-600" />
          {code} {text}
        </span>
      );
    }
    if (code >= 400 && code < 500) {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300 font-mono">
          <span className="w-2 h-2 rounded-full bg-amber-600" />
          {code} {text}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-bold bg-rose-100 text-rose-800 border border-rose-300 font-mono">
        <span className="w-2 h-2 rounded-full bg-rose-600" />
        {code} {text}
      </span>
    );
  };

  const copyResponse = () => {
    navigator.clipboard.writeText(activeCase.responseBody);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="api-testing" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>Postman / REST API Verification</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              API Testing & Response Validation
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Interactive showcase of API verification using Postman: GET, POST, PUT, and DELETE methods, positive/negative assertions, header checks, and status code audits.
            </p>
          </div>

          {/* Method Filter */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">
              Method:
            </span>
            {['ALL', 'GET', 'POST', 'PUT', 'DELETE'].map((m) => (
              <button
                key={m}
                onClick={() => setMethodFilter(m)}
                className={`px-3 py-1 rounded-md text-xs font-medium cursor-pointer transition-colors ${
                  methodFilter === m
                    ? 'bg-emerald-700 text-white font-semibold shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Postman-styled Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Endpoint Collection sidebar */}
          <div className="lg:col-span-4 space-y-2.5">
            <div className="p-3 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700 flex items-center justify-between">
              <span>Postman Collection ({filteredCases.length})</span>
              <span className="text-emerald-700 text-[11px] font-medium">REST Endpoints</span>
            </div>

            <div className="space-y-2 max-h-[560px] overflow-y-auto pr-1">
              {filteredCases.map((apiCase) => {
                const isSelected = selectedCaseId === apiCase.id;

                return (
                  <button
                    key={apiCase.id}
                    onClick={() => setSelectedCaseId(apiCase.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white border-emerald-500 shadow-sm ring-1 ring-emerald-500/20'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-mono border ${getMethodColor(
                          apiCase.method
                        )}`}
                      >
                        {apiCase.method}
                      </span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded font-semibold ${
                          apiCase.category === 'Positive'
                            ? 'bg-emerald-50 text-emerald-800'
                            : 'bg-amber-50 text-amber-800'
                        }`}
                      >
                        {apiCase.category}
                      </span>
                    </div>

                    <p className="text-xs font-mono font-bold text-slate-900 truncate">
                      {apiCase.endpoint}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                      {apiCase.title}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Postman Request / Response Console */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
              {/* URL & Method Bar */}
              <div className="p-4 bg-slate-900 text-white border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 flex-1 overflow-hidden">
                  <span
                    className={`px-2.5 py-1 rounded text-xs font-mono font-extrabold ${getMethodColor(
                      activeCase.method
                    )}`}
                  >
                    {activeCase.method}
                  </span>
                  <span className="font-mono text-xs sm:text-sm text-emerald-300 truncate">
                    {activeCase.endpoint}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {getStatusCodeBadge(activeCase.responseStatus, activeCase.responseStatusText)}
                </div>
              </div>

              {/* Inspector Navigation Tabs */}
              <div className="flex items-center justify-between border-b border-slate-200 px-4 bg-slate-50/70">
                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => setActiveTab('response')}
                    className={`px-3 py-2.5 text-xs font-semibold border-b-2 cursor-pointer transition-colors ${
                      activeTab === 'response'
                        ? 'border-emerald-600 text-emerald-700 bg-white'
                        : 'border-transparent text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    Response Body (JSON)
                  </button>
                  <button
                    onClick={() => setActiveTab('validations')}
                    className={`px-3 py-2.5 text-xs font-semibold border-b-2 cursor-pointer transition-colors ${
                      activeTab === 'validations'
                        ? 'border-emerald-600 text-emerald-700 bg-white'
                        : 'border-transparent text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    Test Validations ({activeCase.validations.length})
                  </button>
                  <button
                    onClick={() => setActiveTab('request')}
                    className={`px-3 py-2.5 text-xs font-semibold border-b-2 cursor-pointer transition-colors ${
                      activeTab === 'request'
                        ? 'border-emerald-600 text-emerald-700 bg-white'
                        : 'border-transparent text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    Request Details
                  </button>
                </div>

                {activeTab === 'response' && (
                  <button
                    onClick={copyResponse}
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-xs text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 rounded cursor-pointer transition-colors"
                    title="Copy response body"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 text-[11px] font-semibold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[11px]">Copy JSON</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* Tab Contents */}
              <div className="p-5">
                {/* Description summary */}
                <div className="mb-4 pb-3 border-b border-slate-100">
                  <h4 className="text-sm font-bold text-slate-900">{activeCase.title}</h4>
                  <p className="text-xs text-slate-600 mt-1">{activeCase.description}</p>
                </div>

                {/* Tab 1: Response Body */}
                {activeTab === 'response' && (
                  <div className="space-y-3">
                    <div className="relative rounded-lg bg-slate-950 p-4 font-mono text-xs text-emerald-400 overflow-x-auto max-h-80 border border-slate-800">
                      <pre>{activeCase.responseBody}</pre>
                    </div>
                  </div>
                )}

                {/* Tab 2: Test Validations Checklist */}
                {activeTab === 'validations' && (
                  <div className="space-y-2.5">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Postman Test Assertions Executed
                    </p>
                    <div className="space-y-2">
                      {activeCase.validations.map((val, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2.5 p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-950"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span className="font-medium">PASS: {val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tab 3: Request details */}
                {activeTab === 'request' && (
                  <div className="space-y-4 text-xs">
                    <div>
                      <h5 className="font-bold text-slate-500 uppercase tracking-wider text-[11px] mb-2">
                        Headers
                      </h5>
                      <div className="bg-slate-50 rounded border border-slate-200 p-3 font-mono text-[11px] space-y-1">
                        {Object.entries(activeCase.headers).map(([key, val]) => (
                          <div key={key} className="flex gap-2">
                            <span className="text-slate-500">{key}:</span>
                            <span className="text-slate-800 font-semibold">{val}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {activeCase.requestBody && (
                      <div>
                        <h5 className="font-bold text-slate-500 uppercase tracking-wider text-[11px] mb-2">
                          Request Payload (Body)
                        </h5>
                        <div className="bg-slate-900 text-emerald-300 rounded border border-slate-800 p-3 font-mono text-xs overflow-x-auto max-h-48">
                          <pre>{activeCase.requestBody}</pre>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Status Code Reference Strip */}
              <div className="px-5 py-4 bg-slate-50 border-t border-slate-200">
                <p className="text-xs font-bold text-slate-700 mb-2 flex items-center gap-1.5">
                  <FileCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>QA Status Code Validation Reference</span>
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-white border border-slate-200">
                    <span className="font-mono font-bold text-emerald-700">200 OK</span>
                    <p className="text-slate-500 text-[10px] mt-0.5">Successful GET / PUT</p>
                  </div>
                  <div className="p-2 rounded bg-white border border-slate-200">
                    <span className="font-mono font-bold text-blue-700">201 Created</span>
                    <p className="text-slate-500 text-[10px] mt-0.5">Successful POST entity</p>
                  </div>
                  <div className="p-2 rounded bg-white border border-slate-200">
                    <span className="font-mono font-bold text-amber-700">400 Bad Request</span>
                    <p className="text-slate-500 text-[10px] mt-0.5">Payload validation fail</p>
                  </div>
                  <div className="p-2 rounded bg-white border border-slate-200">
                    <span className="font-mono font-bold text-rose-700">404 Not Found</span>
                    <p className="text-slate-500 text-[10px] mt-0.5">Missing resource ID</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
