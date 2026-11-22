export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  linkedin: {
    username: string;
    url: string;
  };
  github: {
    username: string;
    url: string;
  };
  portfolio: {
    display: string;
    url: string;
  };
  summary: string;
  currentStatus: string;
  hobbies: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'AI / Computer Vision' | 'Machine Learning' | 'Software & Mobile' | 'IoT & Hardware';
  type: string;
  duration: string;
  periodLabel: string;
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  department: string;
  location: string;
  status: string;
  expectedGraduation: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  key: string;
  skills: {
    name: string;
    iconName?: string;
    category?: string;
  }[];
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  rank?: string;
  description: string[];
  type: 'Hackathon' | 'Exhibition' | 'Academic';
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  duration?: string;
  description: string[];
}

export interface ResearchInterest {
  title: string;
  category: string;
  description: string;
  keyConcepts: string[];
  relatedProject: string;
}
