'use client';

import React from 'react';

import Section from '@/components/common/Section';
import WorkExperienceList from '@/components/work/WorkExperienceList';

function WorkExperience() {
  return (
    <Section sectionId="experience" title="업무경험">
      <WorkExperienceList />
    </Section>
  );
}

export default WorkExperience;
