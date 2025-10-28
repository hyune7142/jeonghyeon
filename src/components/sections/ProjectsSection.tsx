'use client';

import React from 'react';

import Section from '@/components/common/Section';
import Project from '@/components/project/Project';

function ProjectsSection() {
  return (
    <Section sectionId="project" title="프로젝트">
      <Project />
    </Section>
  );
}

export default ProjectsSection;
