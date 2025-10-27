'use client';

import React from 'react';

import Section from '@/components/common/Section';
import ExpertiseList from '@/components/expertise/ExpertiseList';

function ExpertiseSection() {
  return (
    <Section sectionId="expertise" title="핵심역량">
      <ExpertiseList />
    </Section>
  );
}

export default ExpertiseSection;
