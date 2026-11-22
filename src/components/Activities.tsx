import React from 'react';
import { 
  Users, 
  Sparkles, 
  Terminal, 
  Presentation, 
  HeartHandshake, 
  Cpu, 
  Flame,
  Calendar,
  CheckCircle2
} from 'lucide-react';

export const Activities: React.FC = () => {
  const activities = [
    {
      role: "Project Demonstrator & Technical Exhibitor",
      organization: "Mid-West University Engineering Fest 2026",
      period: "2026",
      category: "Exhibition & Community",
      icon: <Presentation className="text-accent-500" size={20} />,
      points: [
        "Showcased live demonstration of the Smart Toll Plaza System connecting Python OpenCV vision feeds to ESP32 physical actuator components.",
        "Engaged with visiting faculty, industry engineers, and students to explain IoT computer vision integration and automated barrier control algorithms."
      ]
    },
    {
      role: "Competitive Hackathon Participant",
      organization: "OpenAI Codex Global Hackathon",
      period: "2026",
      category: "Hackathon & Challenge",
      icon: <Flame className="text-accent-500" size={20} />,
      points: [
        "Collaborated and competed with developers worldwide, testing algorithmic problem-solving and rapid prototype generation.",
        "Placed in the Top 30% out of 2,989 total registered participants under strict time-bound milestones."
      ]
    },
    {
      role: "Capstone Engineering Coordination",
      organization: "Final Year Capstone Development",
      period: "Jul 2026 - Present",
      category: "Academic Leadership",
      icon: <Terminal className="text-accent-500" size={20} />,
      points: [
        "Coordinating architectural milestones between backend neural service models (Faster-Whisper, MediaPipe, LLM APIs) and frontend user interfaces.",
        "Facilitating code reviews and database schema optimizations for PostgreSQL and SQLAlchemy data storage."
      ]
    },
    {
      role: "Academic Peer Mentorship & Collaboration",
      organization: "Computer Engineering Student Cohort",
      period: "2023 - Present",
      category: "Student Community",
      icon: <HeartHandshake className="text-accent-500" size={20} />,
      points: [
        "Active member of the 7th-semester Computer Engineering student community at Mid-West University.",
        "Collaborating in group laboratories for Embedded Systems, Database Management Systems, and Machine Learning workshops."
      ]
    }
  ];

  return (
    <section id="activities" className="py-20 relative border-t border-slate-200/80 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 text-accent-500 text-xs font-mono font-medium mb-3 border border-accent-500/20">
            <Sparkles size={13} />
            <span>COMMUNITY & COLLABORATION</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white">
            Leadership & <span className="text-accent-500">Activities</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
            Technical showcases, hackathon challenges, and student community initiatives.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((act, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border glow-card-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-surface border border-slate-200 dark:border-dark-border">
                      {act.icon}
                    </div>
                    <div>
                      <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-accent-500/10 text-accent-500">
                        {act.category}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-slate-500 dark:text-dark-muted flex items-center gap-1">
                    <Calendar size={13} />
                    {act.period}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-1">
                  {act.role}
                </h3>
                <h4 className="font-display font-semibold text-sm text-slate-600 dark:text-slate-300 mb-4">
                  {act.organization}
                </h4>

                <div className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {act.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="text-accent-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-dark-border/60 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Extracurricular Leadership</span>
                <span className="text-accent-500">Active</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
