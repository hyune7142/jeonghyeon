import React from 'react';

import { WorkExperience } from '@/types';

import WorkExperienceItem from './WorkExperienceItem';

function WorkExperienceList() {
  const history: WorkExperience[] = [
    {
      company: '(주)마크로젠',
      position: '프론트엔드',
      keyTasks: ['GenTok 웹 프론트엔드 전면개편 및 운영', 'GenTok 앱 전면개편 및 운영'],
      startDate: '2024.05',
      endDate: '재직중',
      description: 'Description',
      skills: [
        'React',
        'React Native',
        'Typescript',
        'Zustand',
        'TanStack Query',
        'Axios',
        'Mui',
        'Motion.dev',
        'GitHub',
        'GitLab',
        'AWS',
      ],
    },
    {
      company: '(주)이글루코퍼레이션',
      position: '프론트엔드',
      keyTasks: [
        '보안관제 통합 솔루션 EXD 프론트엔드 개발',
        '보안관제 AI 솔루션 프론트엔드 개발 및 유지보수',
      ],
      startDate: '2022.10',
      endDate: '2024.05',
      description: 'Description',
      skills: ['React', 'React Native', 'Typescript', 'Recoil', 'Playwright', 'Axios', 'GitLab'],
    },
  ];

  return (
    <div className="flex flex-col gap-10">
      {history.map(item => (
        <WorkExperienceItem key={item.company} history={item} />
      ))}
    </div>
  );
}

export default WorkExperienceList;
