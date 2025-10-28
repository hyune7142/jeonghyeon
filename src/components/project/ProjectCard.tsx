import React from 'react';

import { ProjectDetail } from '@/types';

interface ProjectCardProps {
  project: ProjectDetail;
}

// 프로젝트 모달내 콘텐츠
function ProjectCard({ project }: ProjectCardProps) {
  const { name } = project;
  return <div>{name}</div>;
}

export default ProjectCard;
