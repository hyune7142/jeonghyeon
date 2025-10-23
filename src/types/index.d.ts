import React from 'react';

export type Profile = {
  name: string;
  birth: string;
  address: string;
  position: string;
  github: string;
  intro: string;
};

export type SkillTabKey = 'language' | 'frontend' | 'backend' | 'etc';

export type SkillTab = {
  key: SkillTabKey;
  label: string;
  icon: React.ReactNode;
};

export type Skill = {
  name: string;
  icon: React.ReactNode;
  desc: string;
};
