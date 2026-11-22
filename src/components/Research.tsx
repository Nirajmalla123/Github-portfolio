import React from 'react';
import { 
  FlaskConical, 
  Sparkles, 
  BrainCircuit, 
  Eye, 
  Cpu, 
  FileText, 
  Layers, 
  ArrowUpRight 
} from 'lucide-react';
import { researchInterests } from '../data/resumeData';

export const Research: React.FC = () => {
  return (
    <section id="research" className="py-20 relative border-t border-slate-200/80 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 text-accent-500 text-xs font-mono font-medium mb-3 border border-accent-500/20">
            <Sparkles size={13} />
            <span>AI / ML RESEARCH FOCUS</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white">
            Research & <span className="text-accent-500">Methodology</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
            System architectures and algorithmic investigations targeted toward AI research groups, graduate programs, and machine intelligence labs.
          </p>
        </div>

        {/* Research Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {researchInterests.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border glow-card-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-accent-500/10 text-accent-500 border border-accent-500/20">
                    {item.category}
                  </span>
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-dark-surface text-accent-500">
                    {idx === 0 ? <BrainCircuit size={18} /> : idx === 1 ? <Eye size={18} /> : <Cpu size={18} />}
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Key Concepts */}
                <div className="space-y-2 mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                    Core Methodologies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.keyConcepts.map((concept) => (
                      <span
                        key={concept}
                        className="px-2 py-0.5 text-xs font-mono rounded bg-slate-50 dark:bg-dark-surface text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-dark-border"
                      >
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Related Implementation Link */}
              <div className="pt-4 border-t border-slate-100 dark:border-dark-border/60">
                <span className="text-[11px] font-mono text-slate-400 block">
                  Implementation Context:
                </span>
                <span className="text-xs font-semibold text-accent-500 flex items-center gap-1 mt-0.5">
                  {item.relatedProject}
                  <ArrowUpRight size={13} />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Graduate & Research Suitability Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-dark-card dark:from-dark-card dark:to-dark-surface border border-slate-800 text-white shadow-card-dark">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-accent-400 text-xs font-mono font-semibold">
                <FlaskConical size={15} />
                <span>GRADUATE STUDY & RESEARCH COLLABORATION</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl">
                Interested in AI/ML Research or Engineering Fellowships?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Prepared with hands-on mathematical foundation, Python scientific toolkits (NumPy, Scikit-learn, OpenCV), and active multimodal capstone development. Open to research assistantships and AI engineer roles.
              </p>
            </div>
            
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-500 hover:bg-accent-600 text-white font-semibold text-xs sm:text-sm transition-all shadow-glow-red-sm shrink-0"
            >
              <span>Contact for Research</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
