import React, { useState } from 'react';
import {
  CheckCircle2,
  Layers,
  Terminal,
  Bug,
  Database,
  Wrench,
  GitBranch,
  Search
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (key: string) => {
    switch (key) {
      case 'testing':
        return <Layers className="w-5 h-5 text-emerald-600" />;
      case 'api':
        return <Terminal className="w-5 h-5 text-emerald-600" />;
      case 'bugTracking':
        return <Bug className="w-5 h-5 text-emerald-600" />;
      case 'database':
        return <Database className="w-5 h-5 text-emerald-600" />;
      case 'tools':
        return <Wrench className="w-5 h-5 text-emerald-600" />;
      case 'methodologies':
        return <GitBranch className="w-5 h-5 text-emerald-600" />;
      default:
        return <Layers className="w-5 h-5 text-emerald-600" />;
    }
  };

  const filteredCategories = SKILL_CATEGORIES.filter((cat) => {
    if (selectedCategory !== 'all' && cat.categoryKey !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim() === '') return true;

    const query = searchQuery.toLowerCase();
    const matchesTitle = cat.title.toLowerCase().includes(query);
    const matchesSkills = cat.skills.some((s) => s.toLowerCase().includes(query));
    return matchesTitle || matchesSkills;
  });

  return (
    <section id="skills" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-3">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Skill Matrix</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              QA Skills & Competencies
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Categorized breakdown of testing types, API validation, defect tracking tools,
              database querying, and delivery methodologies.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills (e.g. Postman)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-xs text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5 mb-8 pb-2 overflow-x-auto">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
            }`}
          >
            All Categories ({SKILL_CATEGORIES.length})
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.categoryKey}
              onClick={() => setSelectedCategory(cat.categoryKey)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                selectedCategory === cat.categoryKey
                  ? 'bg-emerald-600 text-white font-semibold shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.categoryKey}
              className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:border-slate-300 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                    {getCategoryIcon(cat.categoryKey)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{cat.title}</h3>
                    <p className="text-xs text-slate-500 line-clamp-1">{cat.description}</p>
                  </div>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {cat.skills.map((skill) => {
                    const isHighlighted =
                      searchQuery.trim() !== '' &&
                      skill.toLowerCase().includes(searchQuery.toLowerCase());

                    return (
                      <span
                        key={skill}
                        className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-medium border transition-colors ${
                          isHighlighted
                            ? 'bg-emerald-100 text-emerald-900 border-emerald-300 font-semibold'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-200'
                        }`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Verified in 2-year tenure</span>
                <span className="font-semibold text-emerald-700">
                  {cat.skills.length} Items
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
