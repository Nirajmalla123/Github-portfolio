import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight,
  Terminal,
  Cpu,
  Layers
} from 'lucide-react';

interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  type: string;
  location: string;
  duration: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: "ai-capstone-lead",
      role: "Lead Developer & System Architect",
      organization: "AI Video Interview Assessment Platform (Capstone)",
      type: "Final Year Engineering Project",
      location: "Surkhet, Nepal",
      duration: "Jul 2026 - Present",
      description: "Directing the end-to-end design and implementation of an automated video interview platform analyzing candidate speech, facial behavior, and answer semantic quality.",
      responsibilities: [
        "Architected scalable backend REST APIs and relational database schemas with FastAPI, SQLAlchemy, and PostgreSQL.",
        "Integrated Faster-Whisper, OpenCV, and MediaPipe to synchronously process audio and visual signals.",
        "Implemented LLM and NLP evaluation pipelines to score candidate response accuracy against job role expectations.",
        "Designed React & TypeScript frontend to interface with webcams and stream interview recordings to backend queues."
      ],
      achievements: [
        "Constructed complete automated data pipeline from video capture to structured candidate evaluation report.",
        "Reduced audio transcription latency using Faster-Whisper's optimized CTranslate2 inference runtime."
      ],
      technologies: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "React", "TypeScript", "OpenCV", "MediaPipe", "Faster-Whisper", "LLMs"]
    },
    {
      id: "iot-cv-engineer",
      role: "IoT & Computer Vision Project Lead",
      organization: "Smart Toll Plaza Automation System",
      type: "Academic & Engineering Fest Showcase",
      location: "Mid-West University, Surkhet",
      duration: "2026",
      description: "Spearheaded design and fabrication of an intelligent toll plaza prototype uniting OpenCV image processing with microcontroller hardware.",
      responsibilities: [
        "Configured webcam video feed input into Python OpenCV algorithms for vehicle approach detection.",
        "Programmed ESP32 microcontroller firmware to interface with ultrasonic range sensors and high-torque servo motors.",
        "Engineered serial communication protocol linking software decisions with physical barrier gate actuation."
      ],
      achievements: [
        "Demonstrated working prototype at the University Engineering Fest (Civil Department, Graduate School of Engineering).",
        "Achieved automated gate barrier actuation upon successful computer vision vehicle trigger."
      ],
      technologies: ["Python", "OpenCV", "ESP32", "Microcontrollers", "Sensors", "Servo Motor", "Hardware Interfacing"]
    },
    {
      id: "ml-researcher",
      role: "Machine Learning & Data Science Developer",
      organization: "Predictive Analytics Projects (Bulldozer & Churn)",
      type: "Technical Implementations",
      location: "Banke / Surkhet, Nepal",
      duration: "May 2026 - Jul 2026",
      description: "Constructed supervised machine learning solutions across regression and classification tasks using real-world tabular data.",
      responsibilities: [
        "Processed large-scale auction records for Bulldozer Price Prediction, executing feature transformations and handling categorical data.",
        "Developed customer churn classification pipeline, calculating attrition probabilities from customer behavioral signals.",
        "Benchmarked algorithms using Scikit-learn and generated visual diagnostic charts using Matplotlib."
      ],
      achievements: [
        "Trained high-accuracy predictive models evaluated using RMSLE and classification metrics (precision, recall, ROC-AUC).",
        "Open-sourced Customer Churn Prediction repository on GitHub for public evaluation."
      ],
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Jupyter Notebook"]
    },
    {
      id: "mobile-dev",
      role: "Mobile Application Developer",
      organization: "Pingen QR Generator",
      type: "Application Project",
      location: "Banke, Nepal",
      duration: "Nov 2025 - Mar 2026",
      description: "Designed, engineered, and packaged a responsive cross-platform mobile utility for instant QR generation and export.",
      responsibilities: [
        "Constructed reactive mobile user interface in Flutter using Dart.",
        "Implemented dynamic QR encoding engine supporting URLs, custom text strings, and contact cards.",
        "Optimized mobile rendering performance and state management lifecycle."
      ],
      achievements: [
        "Shipped an intuitive, lightweight utility application with zero crash rate in testing.",
        "Deepened practical understanding of cross-platform mobile UI architecture."
      ],
      technologies: ["Dart", "Flutter", "Mobile UI", "QR Algorithms"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative border-t border-slate-200/80 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 text-accent-500 text-xs font-mono font-medium mb-3 border border-accent-500/20">
            <Sparkles size={13} />
            <span>PRACTICAL IMPLEMENTATION</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white">
            Engineering <span className="text-accent-500">Experience</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
            Hands-on technical roles, capstone leadership, and system engineering milestones.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-white dark:bg-dark-base border-4 border-accent-500 group-hover:scale-125 transition-transform duration-200 shadow-glow-red-sm" />

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border glow-card-hover">
                
                {/* Header Row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-accent-500/10 text-accent-500 mb-2 inline-block">
                      {exp.type}
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white group-hover:text-accent-500 transition-colors">
                      {exp.role}
                    </h3>
                    <h4 className="font-display font-semibold text-base text-slate-700 dark:text-slate-300 mt-1">
                      {exp.organization}
                    </h4>
                  </div>

                  <div className="flex flex-col items-start sm:items-end text-xs font-mono text-slate-500 dark:text-dark-muted space-y-1">
                    <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-dark-surface px-3 py-1 rounded-md border border-slate-200 dark:border-dark-border">
                      <Calendar size={13} className="text-accent-500" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5 px-1">
                      <MapPin size={13} className="text-accent-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Narrative Summary */}
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div className="space-y-2 mb-4">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-dark-muted font-semibold">
                    Core Technical Responsibilities:
                  </h5>
                  {exp.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <ChevronRight size={14} className="text-accent-500 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Key Achievements */}
                <div className="space-y-2 mb-6 pt-3 border-t border-slate-100 dark:border-dark-border/60">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-dark-muted font-semibold">
                    Measurable Achievements:
                  </h5>
                  {exp.achievements.map((ach, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium">
                      <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="pt-4 border-t border-slate-100 dark:border-dark-border/60 flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-mono text-slate-400 mr-2">Tech:</span>
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 text-xs font-mono rounded bg-slate-100 dark:bg-dark-surface text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-dark-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
