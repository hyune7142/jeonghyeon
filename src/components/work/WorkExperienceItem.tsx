import React from 'react';

import { WorkExperience } from '@/types';

import SkillBox from '../common/SkillBox';
import { H4, Lead } from '../common/Typography';

interface WorkExperienceItemProps {
  history: WorkExperience;
}

function WorkExperienceItem({ history }: WorkExperienceItemProps) {
  const { startDate, endDate, keyTasks, skills, company } = history;
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-start">
      <div className="select-none sm:w-40">
        <Lead>
          {startDate} - {endDate}
        </Lead>
      </div>
      <div className="flex-1 px-0 sm:px-2">
        <H4>{company}</H4>
        <div className="flex flex-col">
          {keyTasks.map((task, index) => (
            <Lead key={`key-task-${index}`}>{task}</Lead>
          ))}
        </div>
        <div className="mt-3 flex flex-row flex-wrap gap-1">
          {skills.map(item => (
            <SkillBox key={item} name={item} className="" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkExperienceItem;
