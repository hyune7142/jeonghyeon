import React from 'react';

import type { StaticImageData } from 'next/image';

export type Profile = {
  name: string;
  email: string;
  birth: string;
  address: string;
  position: string;
  github: string;
  intro: string;
};

export type Expertise = {
  img: string;
  title: string;
  desc: string;
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
  | 'Expo'
  | 'Ant Design'
  | 'Figma'
  | 'Storybook'
  // backend
  | 'Express'
  | 'Spring'
  // DataBase
  | 'Oracle DB'
  | 'PostgreSQL'
  | 'Redis'
  // etc
  | 'Git'
  | 'GitHub'
  | 'GitLab'
  | 'AWS'
  | 'Vercel'
  | 'Netlify'
  | 'Jira'
  | 'Confluence';

export type SkillTabKey = 'language' | 'frontend' | 'backend' | 'database' | 'etc';

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
  dept: string;
  keyTasks: string[];
  skills: SkillName[];
};

// 프로젝트 상세
export type Company = {
  title: string;
  content: string[];
  logo: StaticImageData;
};

export interface ProjectInfo {
  name: string;
  desc: string;
  skills: SkillName[];
}

export interface ProjectDetail extends ProjectInfo {
  startDate: string;
  endDate: string;
  members: string | number;
  details: string[];
  serviceLink?: string;
}
