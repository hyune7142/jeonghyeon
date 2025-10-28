'use client';
import React from 'react';

import ProjectFolder from '@/components/project/ProjectFolder';

function Project() {
  const folders = [
    {
      name: '마크로젠',
      color: '#FF8A00',
      items: [{ label: '젠톡 웹\n 개편 및 운영' }, { label: '젠톡 앱\n 개편 및 운영' }],
    },
    {
      name: '이글루코퍼레이션',
      color: '#007AFF',
      items: [{ label: '보안관제 AI 솔루션' }, { label: '보안관제\n 통합 솔루션' }],
    },
    {
      name: '케이비시스',
      color: '#00C853',
      items: [
        { label: 'Cube 2.0' },
        { label: '매그나칩 레거시 시스템 교체' },
        { label: 'Infinity Dashboard' },
      ],
    },
    {
      name: '프리랜서',
      color: '#08868a',
      items: [{ label: 'Cube\n SytemIC 이관' }],
    },
  ];

  return (
    <div className="w-full overflow-x-hidden px-4 py-12">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 place-items-center gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {folders.map((folder, idx) => (
          <div key={idx} className="flex h-[250px] w-full items-center justify-center">
            <ProjectFolder
              name={folder.name}
              color={folder.color}
              size={1.35}
              items={folder.items}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
