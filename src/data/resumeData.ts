import {
  PersonalInfo,
  Project,
  Education,
  SkillCategory,
  Achievement,
  Certification,
  ResearchInterest
} from '../types/resume';

export const personalInfo: PersonalInfo = {
  name: "Niraj Malla",
  title: "Computer Engineering Student",
  tagline: "7th-Semester Computer Engineering student specializing in AI, Machine Learning, Computer Vision, and Full-Stack Engineering.",
  location: "Banke, Nepal",
  email: "mallajarin@gmail.com",
  phone: "+9779864430018",
  linkedin: {
    username: "niraj-malla-267257408",
    url: "https://www.linkedin.com/in/niraj-malla-267257408"
  },
  github: {
    username: "Nirajmalla123",
    url: "https://github.com/Nirajmalla123"
  },
  portfolio: {
    display: "nirajmalla123.github.io/cv",
    url: "https://nirajmalla123.github.io/cv"
  },
  summary: "7th-semester Computer Engineering student with hands-on experience in Python, Machine Learning, Computer Vision, Data Science, Flutter, and IoT through academic and personal projects. Currently developing an AI-powered video interview assessment system and seeking opportunities to apply my technical skills to real-world AI/ML and software engineering challenges.",
  currentStatus: "Open for AI/ML & Software Engineering Roles",
  hobbies: [
    "Artificial Intelligence",
    "Machine Learning",
    "Computer Vision",
    "Software Development",
    "Data Science"
  ]
};

export const educationList: Education[] = [
  {
    id: "mwu-bce",
    degree: "Bachelor of Computer Engineering",
    institution: "Mid-West University, Graduate School of Engineering",
    department: "Department of Computer Engineering",
    location: "Surkhet, Nepal",
    status: "Current (7th Semester)",
    expectedGraduation: "Expected Graduation: 2027",
    highlights: [
      "Rigorous curriculum covering Data Structures & Algorithms, Machine Learning, Database Management Systems, Computer Networks, and Embedded Systems.",
      "Final Year Capstone: AI-Powered Intelligent Video Interview Assessment System integrating Computer Vision, Audio Transcription, and LLM evaluations.",
      "Selected to showcase IoT & Computer Vision project at the University Engineering Fest (2026)."
    ]
  }
];

export const projectsList: Project[] = [
  {
    id: "ai-video-interview",
    title: "AI-Powered Intelligent Video Interview Assessment System",
    category: "AI / Computer Vision",
    type: "Final Year Capstone Project",
    duration: "Jul 2026 - Present",
    periodLabel: "Active Development",
    description: "Developing an end-to-end AI-powered video interview platform that records candidate responses and performs automated multimodal analysis across speech transcription, facial behavior tracking, and answer content quality.",
    highlights: [
      "Architected backend APIs and relational database workflows for interviews, questions, candidate submissions, profiles, and assessment reports using FastAPI, SQLAlchemy, and PostgreSQL.",
      "Engineered automated interview analysis pipeline integrating Faster-Whisper (speech-to-text), OpenCV & MediaPipe (facial/gaze tracking), and NLP/LLM components for semantic response grading.",
      "Implemented seamless frontend-to-backend integration with React and TypeScript for synchronized webcam recording and reliable chunked video/audio payload transfer to the AI pipeline."
    ],
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "React",
      "TypeScript",
      "OpenCV",
      "MediaPipe",
      "Faster-Whisper",
      "NLP",
      "LLMs"
    ],
    githubUrl: "https://github.com/Nirajmalla123",
    featured: true
  },
  {
    id: "smart-toll-plaza",
    title: "Smart Toll Plaza System",
    category: "IoT & Hardware",
    type: "Academic Project & Exhibition",
    duration: "2026",
    periodLabel: "Completed & Showcased",
    description: "Developed an IoT-based smart toll plaza prototype bridging Python and OpenCV computer vision with microcontroller hardware to automate vehicle recognition and physical barrier gate control.",
    highlights: [
      "Connected an external webcam, ESP32 microcontroller, ultrasonic sensors, and servo motor to tie software-based visual recognition with automated physical barrier actuation.",
      "Established bidirectional serial communication between Python computer-vision scripts and ESP32 firmware for real-time trigger handling.",
      "Officially demonstrated and showcased the working prototype at the University Engineering Fest (Civil Department, Graduate School of Engineering, Mid-West University)."
    ],
    technologies: [
      "Python",
      "OpenCV",
      "ESP32",
      "IoT",
      "Sensors",
      "Servo Motor",
      "Webcam"
    ],
    githubUrl: "https://github.com/Nirajmalla123",
    featured: true
  },
  {
    id: "bulldozer-price-prediction",
    title: "Bulldozer Price Prediction System",
    category: "Machine Learning",
    type: "Machine Learning Regression",
    duration: "May 2026 - Present",
    periodLabel: "Active / Iterative",
    description: "Built a machine learning regression system to predict heavy machinery auction sales prices using extensive historical transaction datasets.",
    highlights: [
      "Conducted extensive Exploratory Data Analysis (EDA), missing value strategies, and feature engineering across categorical equipment attributes and time-series date features.",
      "Trained, benchmarked, and evaluated multiple regression algorithms using Scikit-learn, optimizing Root Mean Squared Log Error (RMSLE).",
      "Constructed visualization pipelines with Matplotlib to interpret feature importance and validate auction market valuation trends."
    ],
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib"
    ],
    githubUrl: "https://github.com/Nirajmalla123",
    featured: false
  },
  {
    id: "customer-churn-prediction",
    title: "Customer Churn Prediction",
    category: "Machine Learning",
    type: "Machine Learning Classification",
    duration: "Jun 2026 - Jul 2026",
    periodLabel: "Completed",
    description: "Developed an end-to-end machine learning classification solution to predict churn probabilities from structured customer behavioral and contractual data.",
    highlights: [
      "Applied structured data preprocessing, one-hot encoding, and feature scaling to prepare tabular data for model ingestion.",
      "Trained classification algorithms with Scikit-learn, evaluating models against precision, recall, and ROC-AUC metrics to minimize false negatives.",
      "Identified top customer risk signals to inform targeted retention workflows."
    ],
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy"
    ],
    githubUrl: "https://github.com/Nirajmalla123/Customer-Churn-Prediction",
    featured: false
  },
  {
    id: "pingen-qr",
    title: "Pingen QR Generator",
    category: "Software & Mobile",
    type: "Mobile Application",
    duration: "Nov 2025 - Mar 2026",
    periodLabel: "Completed",
    description: "Designed and built a mobile utility application using Dart and Flutter for instant QR code encoding and seamless sharing.",
    highlights: [
      "Implemented responsive cross-platform user interface with customizable QR generation for URLs, plain text, and contacts.",
      "Gained hands-on proficiency in Flutter widget composition, reactive state management, and touch interactions.",
      "Ensured instant rendering performance and local preview generation on mobile devices."
    ],
    technologies: [
      "Dart",
      "Flutter",
      "QR Code Generation",
      "Mobile UI"
    ],
    githubUrl: "https://github.com/Nirajmalla123",
    featured: false
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    key: "languages",
    skills: [
      { name: "Python", category: "Core Language" },
      { name: "C", category: "Systems" },
      { name: "C++", category: "Systems & Algorithms" },
      { name: "Dart", category: "Mobile" }
    ]
  },
  {
    title: "AI & Machine Learning",
    key: "aiml",
    skills: [
      { name: "Machine Learning", category: "Foundations" },
      { name: "Computer Vision", category: "Perception" },
      { name: "OpenCV", category: "Vision Library" },
      { name: "MediaPipe", category: "Landmarking & Pose" },
      { name: "Scikit-learn", category: "Modeling" },
      { name: "NLP", category: "Text Processing" },
      { name: "LLMs", category: "Generative AI" },
      { name: "Faster-Whisper", category: "Speech-to-Text" }
    ]
  },
  {
    title: "Data Science & Analysis",
    key: "datascience",
    skills: [
      { name: "NumPy", category: "Numerical Computing" },
      { name: "Pandas", category: "Data Manipulation" },
      { name: "Matplotlib", category: "Data Visualization" },
      { name: "Jupyter Notebook", category: "Exploration" }
    ]
  },
  {
    title: "Backend & Web Development",
    key: "web",
    skills: [
      { name: "FastAPI", category: "Backend Framework" },
      { name: "SQLAlchemy", category: "ORM" },
      { name: "React", category: "Frontend" },
      { name: "TypeScript", category: "Type-safe UI" },
      { name: "Flutter", category: "Cross-platform" }
    ]
  },
  {
    title: "Databases",
    key: "databases",
    skills: [
      { name: "PostgreSQL", category: "Relational" },
      { name: "SQLite", category: "Embedded" }
    ]
  },
  {
    title: "Tools, Platforms & Hardware",
    key: "tools",
    skills: [
      { name: "Git", category: "Version Control" },
      { name: "GitHub", category: "Collaboration" },
      { name: "VS Code", category: "IDE" },
      { name: "ESP32 & IoT", category: "Embedded" },
      { name: "Sensors & Actuators", category: "Hardware" }
    ]
  },
  {
    title: "Soft Skills & Languages",
    key: "interpersonal",
    skills: [
      { name: "Problem Solving", category: "Analytical" },
      { name: "Critical Thinking", category: "Cognitive" },
      { name: "Teamwork", category: "Collaboration" },
      { name: "Leadership", category: "Initiative" },
      { name: "Communication", category: "Verbal & Written" },
      { name: "Decision Making", category: "Execution" },
      { name: "English", category: "Fluent" },
      { name: "Nepali", category: "Native" }
    ]
  }
];

export const achievementsList: Achievement[] = [
  {
    id: "openai-codex",
    title: "OpenAI Codex Hackathon — Certificate of Participation",
    issuer: "OpenAI Codex Hackathon",
    date: "2026",
    rank: "Top 30% of 2,989 Participants",
    type: "Hackathon",
    description: [
      "Finished in the Top 30% out of 2,989 global competitors in the OpenAI Codex Hackathon.",
      "Demonstrated practical algorithmic problem-solving, rapid prototyping, and software engineering capabilities under hackathon time constraints."
    ]
  },
  {
    id: "engineering-fest",
    title: "Engineering Fest Showcase — Smart Toll Plaza System",
    issuer: "Civil Department, Graduate School of Engineering, Mid-West University",
    date: "2026",
    rank: "Exhibition Demonstrator",
    type: "Exhibition",
    description: [
      "Selected to demonstrate the Smart Toll Plaza System project at the university-wide Engineering Fest.",
      "Showcased live integration of Python, OpenCV Computer Vision, ESP32 microcontroller, sensors, and servo motors to faculty, industry guests, and students."
    ]
  }
];

export const certificationsList: Certification[] = [
  {
    id: "datascience-bootcamp",
    title: "40-Hour Data Science and Machine Learning with Python Boot Camp",
    issuer: "ZenGLabs & BEEAVER",
    duration: "40 Hours Intensive",
    description: [
      "Comprehensive training covering Python for data science, NumPy, Pandas, statistical analysis, exploratory data analysis, and predictive modeling with Scikit-learn.",
      "Implemented practical end-to-end machine learning pipelines and regression/classification workflows."
    ]
  },
  {
    id: "openai-codex-cert",
    title: "Certificate of Participation — OpenAI Codex Hackathon",
    issuer: "OpenAI Codex Hackathon",
    date: "2026",
    description: [
      "Awarded for participating and achieving a Top 30% ranking among 2,989 developers.",
      "Recognized for practical problem-solving and software development skills."
    ]
  },
  {
    id: "engineering-fest-cert",
    title: "Project Demonstrator Recognition — Engineering Fest 2026",
    issuer: "Mid-West University, Graduate School of Engineering",
    date: "2026",
    description: [
      "Official participation and showcase recognition for the Smart Toll Plaza System project.",
      "Validated practical proficiency in Computer Vision, IoT, and embedded systems integration."
    ]
  }
];

export const researchInterests: ResearchInterest[] = [
  {
    title: "Multimodal AI & Speech-Vision Pipeline Integration",
    category: "Multimodal AI",
    description: "Investigating the fusion of real-time speech transcription (Faster-Whisper), facial landmark dynamics (MediaPipe/OpenCV), and Large Language Models for automated, holistic interview performance analysis.",
    keyConcepts: ["Speech-to-Text", "Facial Landmark Tracking", "LLM Scoring", "Latency Optimization"],
    relatedProject: "AI-Powered Video Interview Assessment System"
  },
  {
    title: "Edge Computer Vision & Real-time IoT Actuation",
    category: "Computer Vision & Edge Computing",
    description: "Exploring lightweight edge computer vision pipelines connected to embedded microcontrollers (ESP32) for low-latency physical infrastructure control and automated toll verification.",
    keyConcepts: ["Real-time Object Detection", "Microcontroller Interop", "Sensor Fusion", "Embedded Systems"],
    relatedProject: "Smart Toll Plaza System"
  },
  {
    title: "Predictive Analytics & Tabular Machine Learning",
    category: "Machine Learning & Data Science",
    description: "Studying regression and classification algorithms for complex structured datasets, focusing on feature engineering, missing data strategies, and price/churn forecasting.",
    keyConcepts: ["Regression", "Classification", "Feature Engineering", "Model Evaluation"],
    relatedProject: "Bulldozer Price & Customer Churn Prediction"
  }
];
