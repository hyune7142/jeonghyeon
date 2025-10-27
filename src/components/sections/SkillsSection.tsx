'use client';

import React from 'react';

import Section from '@/components/common/Section';
import Skills from '@/components/skill/Skill';

function SkillsSection() {
  return (
    <Section sectionId="skill" title="기술 스택 및 도구">
      <Skills />
    </Section>
  );
}

export default SkillsSection;
