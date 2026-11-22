import React from 'react';
import { 
  FileText, 
  ArrowRight, 
  MapPin, 
  Mail, 
  Phone, 
  Sparkles, 
  Code2, 
  Cpu, 
  Layers, 
  Bot,
  Globe
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/resumeData';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-accent-500/10 dark:bg-accent-500/15 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute -top-10 right-10 w-[300px] h-[300px] bg-red-600/5 dark:bg-red-600/10 rounded-full blur-[90px] pointer-events-none -z-10" />
      
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern-dark pointer-events-none -z-10 opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-100/90 dark:bg-dark-card/90 border border-slate-200 dark:border-dark-border text-xs font-mono font-medium text-slate-800 dark:text-slate-200 shadow-sm mb-6 animate-fade-in backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-500"></span>
            </span>
            <span>{personalInfo.currentStatus}</span>
          </div>

          {/* Headline Name */}
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-slate-900 dark:text-white mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 via-accent-600 to-rose-600">{personalInfo.name}</span>
          </h1>

          {/* Professional Role Title */}
          <div className="flex items-center gap-2 text-lg sm:text-2xl font-display font-semibold text-slate-700 dark:text-slate-300 mb-4">
            <span>{personalInfo.title}</span>
            <span className="text-accent-500">•</span>
            <span className="text-slate-500 dark:text-dark-muted font-normal text-base sm:text-xl">AI & Software Engineering</span>
          </div>

          {/* Location & Institution Tag */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 font-mono">
            <span className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-dark-surface px-3 py-1 rounded-md border border-slate-200 dark:border-dark-border">
              <MapPin size={14} className="text-accent-500" />
              {personalInfo.location}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-dark-surface px-3 py-1 rounded-md border border-slate-200 dark:border-dark-border">
              <Globe size={14} className="text-accent-500" />
              Mid-West University (Surkhet)
            </span>
            <span className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-dark-surface px-3 py-1 rounded-md border border-slate-200 dark:border-dark-border">
              <Bot size={14} className="text-accent-500" />
              7th Semester CE
            </span>
          </div>

          {/* Tagline / Intro Description */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl">
            {personalInfo.summary}
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10 w-full sm:w-auto">
            <button
              onClick={onOpenResumeModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 text-sm font-semibold rounded-xl bg-accent-500 hover:bg-accent-600 text-white shadow-glow-red-sm hover:shadow-glow-red transition-all duration-200 active:scale-95"
            >
              <FileText size={17} />
              <span>Download Resume</span>
            </button>

            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 text-sm font-semibold rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-dark-surface dark:hover:bg-dark-card text-slate-900 dark:text-white border border-slate-200 dark:border-dark-border hover:border-accent-500/40 dark:hover:border-accent-500/40 transition-all duration-200"
            >
              <span>Explore Projects</span>
              <ArrowRight size={16} className="text-accent-500" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3 text-sm font-medium rounded-xl text-slate-700 dark:text-slate-300 hover:text-accent-500 dark:hover:text-accent-400 hover:bg-slate-50 dark:hover:bg-dark-surface/50 border border-slate-200/60 dark:border-dark-border/60 transition-colors"
            >
              <span>Let's Connect</span>
            </a>
          </div>

          {/* Social / Contact Quick Bar */}
          <div className="flex items-center justify-center gap-3 p-2 rounded-2xl bg-white/70 dark:bg-dark-card/60 border border-slate-200 dark:border-dark-border backdrop-blur-md shadow-sm">
            <a
              href={personalInfo.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-accent-500 dark:hover:text-accent-400 hover:bg-slate-100 dark:hover:bg-dark-surface transition-colors"
              title="GitHub: Nirajmalla123"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={personalInfo.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-accent-500 dark:hover:text-accent-400 hover:bg-slate-100 dark:hover:bg-dark-surface transition-colors"
              title="LinkedIn: Niraj Malla"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send Email"
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-accent-500 dark:hover:text-accent-400 hover:bg-slate-100 dark:hover:bg-dark-surface transition-colors"
              title={`Email: ${personalInfo.email}`}
            >
              <Mail size={20} />
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              aria-label="Call Phone"
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-accent-500 dark:hover:text-accent-400 hover:bg-slate-100 dark:hover:bg-dark-surface transition-colors"
              title={`Phone: ${personalInfo.phone}`}
            >
              <Phone size={20} />
            </a>
          </div>

          {/* Core Tech Stack Bar below Hero */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2 pt-6 border-t border-slate-200/70 dark:border-dark-border/70 max-w-2xl">
            <span className="text-xs uppercase font-mono tracking-wider text-slate-500 dark:text-dark-muted mr-2">
              Key Focus:
            </span>
            {['Python', 'Computer Vision (OpenCV)', 'Machine Learning', 'FastAPI & PostgreSQL', 'MediaPipe & LLMs', 'Flutter'].map((tech) => (
              <span 
                key={tech} 
                className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-100 dark:bg-dark-surface text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-dark-border/80"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
