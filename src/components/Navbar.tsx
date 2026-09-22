import React, { useState, useEffect } from 'react';
import { CheckCircle2, Menu, X, FileText, Send, Download } from 'lucide-react';
import { generateAndDownloadCvPdf } from '../utils/generatePdfCv';

interface NavbarProps {
  onOpenResumePreview?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumePreview }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'bug-reports', label: 'Jira Bugs' },
    { id: 'api-testing', label: 'API Testing' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check current section
      const sections = ['hero', ...navLinks.map((l) => l.id)];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="main-nav-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3'
          : 'bg-white/80 backdrop-blur-xs py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Logo */}
          <button
            id="nav-logo-btn"
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2.5 text-left group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-base shadow-xs group-hover:bg-emerald-700 transition-colors">
              <CheckCircle2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 tracking-tight text-base leading-tight">
                  QA Portfolio
                </span>
                <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  1.5 Yrs Exp
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">Manual QA Tester</p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-800 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              id="btn-nav-download-cv"
              onClick={generateAndDownloadCvPdf}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
              title="Download Praveen Kumar P's CV in PDF format"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>Download CV</span>
            </button>
            {onOpenResumePreview && (
              <button
                id="btn-resume-preview"
                onClick={onOpenResumePreview}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 hover:border-slate-300 transition-colors cursor-pointer"
                title="View recruiter summary sheet"
              >
                <FileText className="w-3.5 h-3.5 text-slate-500" />
                <span>QA Summary</span>
              </button>
            )}
            <button
              id="btn-nav-contact"
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 shadow-xs transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Contact Me</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-4 space-y-1 shadow-lg"
        >
          <div className="grid grid-cols-2 gap-1 py-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`mobile-nav-link-${link.id}`}
                onClick={() => scrollToSection(link.id)}
                className={`text-left px-3 py-2 rounded-md text-xs font-medium cursor-pointer ${
                  activeSection === link.id
                    ? 'bg-emerald-50 text-emerald-800 font-semibold'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              id="mobile-btn-download-cv"
              onClick={() => {
                setMobileMenuOpen(false);
                generateAndDownloadCvPdf();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-md bg-slate-900 text-white text-xs font-semibold shadow-xs hover:bg-slate-800"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>Download CV (PDF)</span>
            </button>
            <div className="flex items-center gap-2">
              {onOpenResumePreview && (
                <button
                  id="mobile-btn-resume"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResumePreview();
                  }}
                  className="flex-1 py-2 rounded-md border border-slate-200 text-slate-700 text-xs font-medium text-center hover:bg-slate-50"
                >
                  QA Summary Sheet
                </button>
              )}
              <button
                id="mobile-btn-contact"
                onClick={() => scrollToSection('contact')}
                className="flex-1 py-2 rounded-md bg-emerald-600 text-white text-xs font-semibold text-center hover:bg-emerald-700"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
