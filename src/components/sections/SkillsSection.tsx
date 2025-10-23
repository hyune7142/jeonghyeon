'use client';

import React from 'react';

import Section from '@/components/common/Section';
import Skills from '@/components/skill/Skill';

function SkillsSection() {
  return (
    <Section sectionId="skill" title="스킬">
      <Skills />
    </Section>
  );
}

export default SkillsSection;
