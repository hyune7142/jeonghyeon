'use client';

import React, { useState } from 'react';

import { ChevronDown } from 'lucide-react';

import { Card } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';
import { WorkExperience } from '@/types';

import SkillBox from '../common/SkillBox';
import { H4, Lead, P, Text } from '../common/Typography';

interface WorkExperienceItemProps {
  history: WorkExperience;
  current: boolean;
}

function WorkExperienceItem({ history, current }: WorkExperienceItemProps) {
  const { startDate, endDate, keyTasks, skills, company } = history;
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-start">
      <div className="select-none sm:w-40">
        <Lead
          className={cn(
            current ? 'font-semibold text-blue-500 dark:text-blue-400' : 'text-foreground'
          )}
        >
          {startDate} - {endDate}
        </Lead>
      </div>
      <div className="flex-1 px-0 sm:px-2">
        <H4>{company}</H4>
        <div className="mt-3 flex flex-row flex-wrap gap-1">
          {skills.map(item => (
            <SkillBox key={item} name={item} className="" />
          ))}
        </div>
        <Collapsible open={open} onOpenChange={setOpen}>
          <CollapsibleTrigger className="group mt-4 flex cursor-pointer items-center gap-2">
            <ChevronDown
              className={cn(
                'h-4 w-4 text-blue-400 transition-transform duration-200 group-hover:text-blue-600',
                open && 'rotate-180'
              )}
            />
            <P className="leading-none text-blue-400 transition-colors duration-200 group-hover:text-blue-600">
              주요 업무 내용 확인
            </P>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <Card className="bg-card relative mt-4 flex flex-col px-4 py-2">
              {keyTasks.map((task, index) => (
                <Text
                  key={`key-task-${index}`}
                  className="relative pl-4 text-[16px] before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:text-blue-400 before:content-['•']"
                >
                  {task}
                </Text>
              ))}
            </Card>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
}

export default WorkExperienceItem;
