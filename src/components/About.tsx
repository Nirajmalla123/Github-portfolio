import React from 'react';
import { 
  GraduationCap, 
  Brain, 
  Compass, 
  CheckCircle2, 
  Award, 
  Terminal, 
  Sparkles,
  HeartHandshake
} from 'lucide-react';
import { personalInfo } from '../data/resumeData';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <Brain className="text-accent-500" size={20} />,
      title: "AI & Computer Vision Focus",
      desc: "Developing intelligent video assessment with OpenCV, MediaPipe, Faster-Whisper, and LLM grading pipelines."
    },
    {
      icon: <Terminal className="text-accent-500" size={20} />,
      title: "Full-Stack & Systems Engineering",
      desc: "Constructing robust backend APIs and schemas with FastAPI, PostgreSQL, SQLAlchemy, React, and Flutter."
    },
    {
      icon: <Award className="text-accent-500" size={20} />,
      title: "Hackathon Competitor",
      desc: "Top 30% global finisher among 2,989 developers in the OpenAI Codex Hackathon."
    },
    {
      icon: <GraduationCap className="text-accent-500" size={20} />,
      title: "Mid-West University Scholar",
      desc: "7th-Semester Bachelor of Computer Engineering student in Surkhet, Nepal (Expected Graduation: 2027)."
    }
  ];

  const softSkills = [
    "Problem Solving",
    "Critical Thinking",
    "Teamwork & Collaboration",
    "Technical Leadership",
    "Effective Communication",
    "Analytical Decision Making"
  ];

  return (
    <section id="about" className="py-20 relative border-t border-slate-200/80 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 text-accent-500 text-xs font-mono font-medium mb-3 border border-accent-500/20">
            <Sparkles size={13} />
            <span>PROFILE & DIRECTION</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white">
            About <span className="text-accent-500">Me</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
            Professional background, research motivation, and technical specialization strictly grounded in authentic engineering milestones.
          </p>
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative & Focus Areas */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-card-light dark:shadow-card-dark">
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent-500"></span>
                Engineering Background & Career Vision
              </h3>
              
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                <p>
                  I am a <strong className="text-slate-900 dark:text-white font-semibold">7th-semester Computer Engineering student</strong> at the Graduate School of Engineering, Mid-West University in Surkhet, Nepal. My work spans machine learning, computer vision, data science, Flutter, and IoT, backed by rigorous hands-on academic and independent engineering projects.
                </p>
                <p>
                  Currently, I am architecting an <strong className="text-slate-900 dark:text-white font-semibold">AI-Powered Video Interview Assessment System</strong> as my capstone project. It bridges multiple neural pipelines—combining real-time speech transcription via Faster-Whisper, facial landmark tracking using MediaPipe and OpenCV, and structured answer analysis using modern LLM workflows.
                </p>
                <p>
                  My goal is to step into high-impact <strong className="text-accent-500 font-semibold">AI/ML and Software Engineering</strong> opportunities where I can apply strong analytical thinking, clean software architecture, and practical model deployment skills to solve real-world problems.
                </p>
              </div>

              {/* Research Interests Callout */}
              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-dark-border">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-dark-muted mb-3 flex items-center gap-2">
                  <Compass size={15} className="text-accent-500" />
                  Primary Technical & Research Interests:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.hobbies.map((interest) => (
                    <span 
                      key={interest}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-dark-surface text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-dark-border hover:border-accent-500/40 transition-colors"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Strengths & Soft Skills Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
              <h4 className="font-display font-bold text-base text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <HeartHandshake size={18} className="text-accent-500" />
                Core Professional Strengths
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {softSkills.map((skill) => (
                  <div 
                    key={skill}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-200/80 dark:border-dark-border text-xs text-slate-700 dark:text-slate-300 font-medium"
                  >
                    <CheckCircle2 size={15} className="text-accent-500 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Metric Highlights */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2 px-1">
              Key Engineering Milestones
            </h3>
            
            {highlights.map((item, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border glow-card-hover group flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-dark-surface border border-slate-200 dark:border-dark-border group-hover:bg-accent-500/10 group-hover:border-accent-500/30 transition-colors shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-display font-semibold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-accent-500 transition-colors">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Language Proficiency Strip */}
            <div className="p-4 rounded-xl bg-slate-100/70 dark:bg-dark-surface border border-slate-200 dark:border-dark-border mt-4">
              <span className="text-xs font-mono text-slate-500 dark:text-dark-muted block mb-2 uppercase tracking-wider">
                Language Fluency
              </span>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-accent-500"></span>
                  English (Professional / Fluent)
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-accent-500"></span>
                  Nepali (Native)
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
