import React from 'react';
import { 
  ArrowUp, 
  Mail, 
  Phone, 
  Globe, 
  Heart,
  FileText
} from 'lucide-react';
import { personalInfo } from '../data/resumeData';

interface FooterProps {
  onOpenResumeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResumeModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-dark-border bg-slate-50 dark:bg-dark-surface/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200/80 dark:border-dark-border/80">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-500 to-accent-700 flex items-center justify-center text-white font-display font-extrabold text-sm shadow-glow-red-sm">
              NM
            </div>
            <div>
              <span className="font-display font-bold text-base text-slate-900 dark:text-white">
                {personalInfo.name}
              </span>
              <p className="text-xs text-slate-500 dark:text-dark-muted font-mono">
                {personalInfo.title} • {personalInfo.location}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-600 dark:text-slate-400">
            <a href="#about" className="hover:text-accent-500 transition-colors">About</a>
            <a href="#projects" className="hover:text-accent-500 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-accent-500 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-accent-500 transition-colors">Experience</a>
            <a href="#education" className="hover:text-accent-500 transition-colors">Education</a>
            <a href="#research" className="hover:text-accent-500 transition-colors">Research</a>
            <a href="#achievements" className="hover:text-accent-500 transition-colors">Achievements</a>
            <button 
              onClick={onOpenResumeModal} 
              className="text-accent-500 hover:text-accent-600 font-semibold"
            >
              Resume PDF
            </button>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2.5 rounded-xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border text-slate-600 dark:text-slate-300 hover:text-accent-500 hover:border-accent-500/40 transition-colors shadow-sm"
          >
            <ArrowUp size={16} />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-dark-muted">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a 
              href={personalInfo.github.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent-500 transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a 
              href={personalInfo.linkedin.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent-500 transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a 
              href={personalInfo.portfolio.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent-500 transition-colors"
            >
              {personalInfo.portfolio.display}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
