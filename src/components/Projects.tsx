import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Calendar, 
  CheckCircle, 
  Sparkles, 
  Code, 
  Cpu, 
  BrainCircuit, 
  Smartphone,
  ChevronRight
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsList } from '../data/resumeData';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'AI / Computer Vision',
    'Machine Learning',
    'IoT & Hardware',
    'Software & Mobile'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projectsList
    : projectsList.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative border-t border-slate-200/80 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 text-accent-500 text-xs font-mono font-medium mb-3 border border-accent-500/20">
            <Sparkles size={13} />
            <span>PORTFOLIO & SYSTEM BUILDS</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white">
            Featured <span className="text-accent-500">Projects</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
            Engineered systems across multimodal AI, computer vision automation, regression modeling, and cross-platform utilities.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-accent-500 text-white shadow-glow-red-sm font-semibold'
                  : 'bg-white dark:bg-dark-card text-slate-600 dark:text-slate-300 hover:text-accent-500 dark:hover:text-accent-400 border border-slate-200 dark:border-dark-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border flex flex-col justify-between overflow-hidden glow-card-hover group ${
                project.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="p-6 sm:p-8">
                {/* Card Top: Badges & Duration */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-md text-xs font-mono font-semibold bg-accent-500/10 text-accent-500 border border-accent-500/20">
                      {project.type}
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-500 dark:text-dark-muted bg-slate-100 dark:bg-dark-surface border border-slate-200 dark:border-dark-border">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-dark-muted">
                    <Calendar size={13} className="text-accent-500" />
                    <span>{project.duration}</span>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white group-hover:text-accent-500 transition-colors mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2.5 mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-dark-muted">
                    Key Implementations & Achievements:
                  </h4>
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-normal">
                      <ChevronRight size={15} className="text-accent-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Tech Chips & Links */}
              <div className="px-6 py-4 sm:px-8 sm:py-5 bg-slate-50 dark:bg-dark-surface border-t border-slate-200 dark:border-dark-border flex flex-wrap items-center justify-between gap-4">
                {/* Tech Chips */}
                <div className="flex flex-wrap items-center gap-1.5 flex-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-xs font-mono rounded bg-white dark:bg-dark-card text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-dark-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-white dark:bg-dark-card hover:bg-slate-100 dark:hover:bg-dark-cardHover text-slate-900 dark:text-white border border-slate-200 dark:border-dark-border hover:border-accent-500/40 transition-colors shadow-sm"
                    >
                      <GithubIcon size={14} className="text-accent-500" />
                      <span>Repository</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-accent-500 text-white hover:bg-accent-600 transition-colors shadow-sm"
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
