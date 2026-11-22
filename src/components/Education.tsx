import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  BookOpen, 
  Sparkles, 
  Award, 
  CheckCircle2 
} from 'lucide-react';
import { educationList } from '../data/resumeData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative border-t border-slate-200/80 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 text-accent-500 text-xs font-mono font-medium mb-3 border border-accent-500/20">
            <Sparkles size={13} />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white">
            Academic <span className="text-accent-500">Education</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
            Formal engineering degree, university achievements, and specialized coursework.
          </p>
        </div>

        {/* Education Timeline / Cards */}
        <div className="max-w-4xl mx-auto">
          {educationList.map((edu) => (
            <div
              key={edu.id}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border glow-card-hover shadow-card-light dark:shadow-card-dark"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-accent-500/10 text-accent-500 border border-accent-500/20 shrink-0">
                    <GraduationCap size={28} />
                  </div>
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-accent-500/10 text-accent-500 mb-2">
                      {edu.status}
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <h4 className="font-display font-semibold text-base text-slate-700 dark:text-slate-300 mt-1">
                      {edu.institution}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-dark-muted font-mono mt-0.5">
                      {edu.department}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-start sm:items-end text-xs font-mono text-slate-500 dark:text-dark-muted space-y-1.5">
                  <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-dark-surface px-3 py-1.5 rounded-md border border-slate-200 dark:border-dark-border font-semibold text-slate-800 dark:text-slate-200">
                    <Calendar size={13} className="text-accent-500" />
                    {edu.expectedGraduation}
                  </span>
                  <span className="flex items-center gap-1.5 px-1">
                    <MapPin size={13} className="text-accent-500" />
                    {edu.location}
                  </span>
                </div>
              </div>

              {/* Highlights & Curricula */}
              <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-dark-border">
                <h5 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-dark-muted font-semibold flex items-center gap-2">
                  <BookOpen size={14} className="text-accent-500" />
                  Academic Scope & Engineering Highlights:
                </h5>
                <div className="space-y-2.5">
                  {edu.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 size={16} className="text-accent-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Curricular Focus Chips */}
              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-dark-border/60 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 mr-1">Curricular Depth:</span>
                {[
                  "Computer Vision", 
                  "Machine Learning", 
                  "Data Structures & Algorithms", 
                  "Database Systems", 
                  "Operating Systems", 
                  "IoT & Embedded Systems",
                  "Software Engineering"
                ].map((course) => (
                  <span
                    key={course}
                    className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-50 dark:bg-dark-surface text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-dark-border"
                  >
                    {course}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
