import React, { useState } from 'react';
import { 
  Code2, 
  BrainCircuit, 
  Database, 
  Wrench, 
  LineChart, 
  Terminal, 
  Sparkles, 
  Check, 
  Cpu
} from 'lucide-react';
import { skillCategories } from '../data/resumeData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getCategoryIcon = (key: string) => {
    switch (key) {
      case 'languages':
        return <Code2 className="text-accent-500" size={20} />;
      case 'aiml':
        return <BrainCircuit className="text-accent-500" size={20} />;
      case 'datascience':
        return <LineChart className="text-accent-500" size={20} />;
      case 'web':
        return <Terminal className="text-accent-500" size={20} />;
      case 'databases':
        return <Database className="text-accent-500" size={20} />;
      case 'tools':
        return <Wrench className="text-accent-500" size={20} />;
      default:
        return <Sparkles className="text-accent-500" size={20} />;
    }
  };

  const displayedCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.key === activeTab);

  return (
    <section id="skills" className="py-20 relative border-t border-slate-200/80 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 text-accent-500 text-xs font-mono font-medium mb-3 border border-accent-500/20">
            <Sparkles size={13} />
            <span>TECHNICAL PROFICIENCIES</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white">
            Technical <span className="text-accent-500">Skills</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
            Verified technologies, frameworks, and tooling verified through project implementations and academic study.
          </p>
        </div>

        {/* Category Quick Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
              activeTab === 'all'
                ? 'bg-accent-500 text-white shadow-glow-red-sm font-semibold'
                : 'bg-white dark:bg-dark-card text-slate-600 dark:text-slate-300 hover:text-accent-500 dark:hover:text-accent-400 border border-slate-200 dark:border-dark-border'
            }`}
          >
            All Disciplines
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveTab(cat.key)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                activeTab === cat.key
                  ? 'bg-accent-500 text-white shadow-glow-red-sm font-semibold'
                  : 'bg-white dark:bg-dark-card text-slate-600 dark:text-slate-300 hover:text-accent-500 dark:hover:text-accent-400 border border-slate-200 dark:border-dark-border'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category) => (
            <div
              key={category.key}
              className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border glow-card-hover flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-surface border border-slate-200 dark:border-dark-border">
                    {getCategoryIcon(category.key)}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                    <span className="text-xs font-mono text-slate-500 dark:text-dark-muted">
                      {category.skills.length} competencies
                    </span>
                  </div>
                </div>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/chip inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-dark-surface dark:hover:bg-dark-cardHover border border-slate-200/80 dark:border-dark-border hover:border-accent-500/40 transition-all duration-150"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-500 opacity-70 group-hover/chip:opacity-100"></span>
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover/chip:text-accent-500 transition-colors">
                        {skill.name}
                      </span>
                      {skill.category && (
                        <span className="text-[10px] font-mono text-slate-400 dark:text-dark-muted border-l border-slate-300 dark:border-slate-700 pl-1.5">
                          {skill.category}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-dark-border/60 flex items-center justify-between text-[11px] font-mono text-slate-400 dark:text-dark-muted">
                <span>Verified in CV</span>
                <span className="text-accent-500 flex items-center gap-1">
                  <Check size={13} />
                  Active Proficiency
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Authenticity */}
        <div className="mt-10 text-center text-xs font-mono text-slate-500 dark:text-dark-muted">
          * Strictly derived from Niraj Malla's curriculum and verified project stack. No arbitrary score bars or unverified tools.
        </div>

      </div>
    </section>
  );
};
