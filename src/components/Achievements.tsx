import React from 'react';
import { 
  Trophy, 
  Award, 
  CheckCircle, 
  Sparkles, 
  Calendar, 
  ExternalLink,
  Users,
  Code
} from 'lucide-react';
import { achievementsList, certificationsList } from '../data/resumeData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 relative border-t border-slate-200/80 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 text-accent-500 text-xs font-mono font-medium mb-3 border border-accent-500/20">
            <Sparkles size={13} />
            <span>HONORS & CREDENTIALS</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white">
            Awards & <span className="text-accent-500">Certifications</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
            Verified competitive hackathon finishes, professional certifications, and institutional exhibition credentials.
          </p>
        </div>

        {/* Top Hackathon & Awards Section */}
        <div className="mb-14">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-dark-muted mb-6 flex items-center gap-2">
            <Trophy size={16} className="text-accent-500" />
            Competitive Honors & Distinctions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievementsList.map((ach) => (
              <div
                key={ach.id}
                className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border glow-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="px-3 py-1 rounded-md text-xs font-mono font-semibold bg-accent-500/10 text-accent-500 border border-accent-500/20">
                      {ach.type}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-dark-muted flex items-center gap-1">
                      <Calendar size={13} />
                      {ach.date}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white mb-1.5">
                    {ach.title}
                  </h4>
                  <p className="text-xs font-mono text-slate-500 dark:text-dark-muted mb-4">
                    {ach.issuer}
                  </p>

                  {ach.rank && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-mono font-bold mb-4">
                      <Trophy size={14} />
                      <span>{ach.rank}</span>
                    </div>
                  )}

                  <div className="space-y-2">
                    {ach.description.map((desc, idx) => (
                      <p key={idx} className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        • {desc}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-dark-border/60 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Verified CV Credential</span>
                  <span className="text-accent-500 font-semibold">Distinction</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Boot Camps Grid */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-dark-muted mb-6 flex items-center gap-2">
            <Award size={16} className="text-accent-500" />
            Certifications & Training Completed
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificationsList.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border glow-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-dark-surface text-accent-500 w-fit mb-4 border border-slate-200 dark:border-dark-border">
                    <Award size={22} />
                  </div>

                  <h4 className="font-display font-bold text-base text-slate-900 dark:text-white mb-2 leading-snug">
                    {cert.title}
                  </h4>

                  <div className="text-xs font-mono text-accent-500 font-semibold mb-3">
                    {cert.issuer}
                  </div>

                  {cert.duration && (
                    <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-dark-surface text-slate-700 dark:text-slate-300 mb-3 border border-slate-200 dark:border-dark-border">
                      {cert.duration}
                    </span>
                  )}

                  <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {cert.description.map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-dark-border/60 text-[11px] font-mono text-slate-400">
                  Verified Completion
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
