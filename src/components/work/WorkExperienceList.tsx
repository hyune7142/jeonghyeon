import React from 'react';

import { WorkExperience } from '@/types';

import WorkExperienceItem from './WorkExperienceItem';

function WorkExperienceList() {
  const history: WorkExperience[] = [
    {
      company: '(주)마크로젠',
      dept: '플랫폼개발부',
      position: '프론트엔드',
      startDate: '2024.05',
      endDate: '재직중',
      keyTasks: ['GenTok 웹 프론트엔드 전면개편 및 운영', 'GenTok 앱 전면개편 및 운영'],
      skills: [
        'React',
        'React Native',
        'Typescript',
        'Expo',
        'Zustand',
        'TanStack Query',
        'Figma',
        'Axios',
        'Mui',
        'Motion.dev',
        'GitHub',
        'GitLab',
        'AWS',
        'Jira',
        'Confluence',
      ],
    },
    {
      company: '(주)이글루코퍼레이션',
      dept: '프론트엔드팀',
      position: '프론트엔드 개발자',
      startDate: '2022.10',
      endDate: '2024.05',
      keyTasks: [
        '보안관제 통합 솔루션 ExD 프론트엔드 개발',
        '보안관제 AI 솔루션 프론트엔드 개발 및 유지보수',
      ],
      skills: [
        'React',
        'React Native',
        'Typescript',
        'Recoil',
        'Storybook',
        'Figma',
        'Playwright',
        'Axios',
        'GitLab',
        'Jira',
        'Confluence',
      ],
    },
    {
      company: '(주)클러쉬 | 구 케이비시스',
      dept: '프리랜서',
      position: '웹 개발자',
      startDate: '2022.05',
      endDate: '2022.10',
      keyTasks: ['SK hynix  - Cube SystemIC (중국법인) 이관'],
      skills: [
        'React',
        'Redux',
        'Redux-Saga',
        'Axios',
        'Ant Design',
        'GitLab',
        'Spring',
        'Oracle DB',
        'Redis',
      ],
    },
    {
      company: '(주)클러쉬 | 구 케이비시스',
      dept: 'MSA팀',
      position: '웹 개발자',
      startDate: '2019.07',
      endDate: '2022.04',
      keyTasks: [
        'SK hynix  - Cube 2.0',
        'Magnachip 반도체 - 레거시 시스템 교체',
        'SK hynix - Infinity Dashboard 구축',
      ],
      skills: [
        'React',
        'Redux',
        'Redux-Saga',
        'Axios',
        'Ant Design',
        'GitLab',
        'Spring',
        'Oracle DB',
        'PostgreSQL',
        'Redis',
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-10">
      {history.map((item, index) => (
        <WorkExperienceItem
          key={`work_${index}_${item.company}`}
          history={item}
          current={index === 0}
        />
      ))}
    </div>
  );
}

export default WorkExperienceList;
