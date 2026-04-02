export interface ServiceItem {
  title: string;
  desc: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  tasks: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  profileImage: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  gpa: string;
  mission: string;
  socials: {
    linkedin: string;
    onlinejobs: string;
  };
  about: string;
  services: ServiceItem[];
  skills: SkillCategory[];
  experience: ExperienceItem[];
  education: EducationItem;
}