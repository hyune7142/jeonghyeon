import React from 'react';

export type Profile = {
  name: string;
  email: string;
  birth: string;
  address: string;
  position: string;
  github: string;
  intro: string;
};

export type SkillName =
  // language
  | 'Javascript'
  | 'Typescript'
  | 'HTML'
  | 'CSS'
  | 'Java'
  // frontend
  | 'React'
  | 'Next.js'
  | 'React Native'
  | 'Redux'
  | 'Redux-Saga'
  | 'Recoil'
  | 'Zustand'
  | 'TanStack Query'
  | 'Axios'
  | 'Tailwind CSS'
  | 'Mui'
  | 'Shadcn-ui'
  | 'Motion.dev'
  | 'Playwright'
  // backend
  | 'Express'
  | 'Spring'
  // etc
  | 'Git'
  | 'GitHub'
  | 'GitLab'
  | 'AWS'
  | 'Vercel'
  | 'Netlify';

export type SkillTabKey = 'language' | 'frontend' | 'backend' | 'etc';

export type SkillTab = {
  key: SkillTabKey;
  label: string;
  icon: React.ReactNode;
};

export type Skill = {
  name: SkillName;
  icon: React.ReactNode;
  desc: string;
};

export type WorkExperience = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  keyTasks: string[];
  skills: SkillName[];
};
