import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  FileText, 
  Terminal, 
  Mail,
  ChevronRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/resumeData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  darkMode, 
  setDarkMode, 
  onOpenResumeModal 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Research', href: '#research' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-panel shadow-sm dark:shadow-card-dark py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a 
            href="#home" 
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-500 to-accent-700 flex items-center justify-center text-white font-display font-extrabold text-lg shadow-glow-red-sm group-hover:scale-105 transition-transform duration-200">
              NM
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-accent-500 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-dark-muted hidden sm:inline-block">
                Computer Engineering
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-100/70 dark:bg-dark-surface/80 p-1.5 rounded-full border border-slate-200 dark:border-dark-border backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-accent-500 text-white shadow-sm shadow-accent-500/30 font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-accent-500 dark:hover:text-accent-400'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons: Mode Toggle & Download Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              className="p-2 sm:p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-accent-500 dark:hover:text-accent-400 hover:bg-slate-100 dark:hover:bg-dark-surface border border-transparent hover:border-slate-200 dark:hover:border-dark-border transition-all duration-200"
            >
              {darkMode ? <Sun size={19} className="text-amber-400" /> : <Moon size={19} />}
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResumeModal}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-accent-500 hover:bg-accent-600 text-white shadow-glow-red-sm hover:shadow-glow-red transition-all duration-200 active:scale-95"
            >
              <FileText size={15} />
              <span>Resume PDF</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="xl:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-dark-surface border border-slate-200 dark:border-dark-border transition-colors"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-slate-200 dark:border-dark-border bg-light-surface/95 dark:bg-dark-surface/95 backdrop-blur-xl px-4 pt-3 pb-6 animate-fade-in shadow-xl">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-sm rounded-lg flex items-center justify-between font-medium transition-colors ${
                    isActive
                      ? 'bg-accent-500/10 text-accent-500 font-bold border border-accent-500/20'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-dark-card'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight size={14} className="opacity-50" />
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-dark-border flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl bg-accent-500 text-white shadow-glow-red-sm"
            >
              <FileText size={16} />
              <span>View & Download ATS Resume</span>
            </button>

            <div className="flex items-center justify-center gap-4 text-slate-500 dark:text-dark-muted pt-1">
              <a href={personalInfo.github.url} target="_blank" rel="noopener noreferrer" className="p-2 hover:text-accent-500">
                <GithubIcon size={18} />
              </a>
              <a href={personalInfo.linkedin.url} target="_blank" rel="noopener noreferrer" className="p-2 hover:text-accent-500">
                <LinkedinIcon size={18} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="p-2 hover:text-accent-500">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
