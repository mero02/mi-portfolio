export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  images: string[];
  technologies: string[];
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile';
  repository?: string;
  demo?: string;
  featured: boolean;
  year: number;
  status: 'completed' | 'in-progress' | 'planned';
}

export interface Skill {
  id: string;
  name: string;
  category: 'language' | 'framework' | 'tool' | 'database';
  level: 1 | 2 | 3 | 4 | 5;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  linkedin?: string;
  github?: string;
  resume?: string;
}