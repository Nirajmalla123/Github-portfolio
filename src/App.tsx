import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Research } from './components/Research';
import { Achievements } from './components/Achievements';
import { Activities } from './components/Activities';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      return true; // Default to dark mode as requested for premium AI engineer look
    }
    return true;
  });

  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-light-base dark:bg-dark-base text-slate-900 dark:text-slate-100 selection:bg-accent-500/20 selection:text-accent-500 transition-colors duration-300">
      {/* Sticky Header Navigation */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Main Sections */}
      <main>
        <Hero onOpenResumeModal={() => setResumeModalOpen(true)} />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Research />
        <Achievements />
        <Activities />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResumeModal={() => setResumeModalOpen(true)} />

      {/* ATS-Friendly Printable & Downloadable Resume Modal */}
      <ResumeModal 
        isOpen={resumeModalOpen} 
        onClose={() => setResumeModalOpen(false)} 
      />
    </div>
  );
};

export default App;
