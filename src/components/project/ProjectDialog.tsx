import React from 'react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';

import { ProjectDetail } from '@/types';

import SkillBox from '../common/SkillBox';
import { H4, Muted, P } from '../common/Typography';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

interface ProjectDialogProps {
  isOpen: boolean;
  onClose: VoidFunction;
  project: ProjectDetail | null;
}

export default function ProjectDialog({ isOpen, onClose, project }: ProjectDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={open => (open ? null : onClose())}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{project?.name || ''}</DialogTitle>
          <DialogDescription>{project?.desc || ''}</DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-3 text-sm">
          <div className="flex flex-col">
            <Muted className="text-base">기술 스택</Muted>
            <div className="mt-3 flex flex-row flex-wrap gap-1">
              {project?.skills.map(item => (
                <SkillBox key={item} name={item} />
              ))}
            </div>
          </div>
          <Separator className="my-10" />
          <H4>업무 상세</H4>
          <div className="flex flex-col">
            <ol className="text-muted-foreground list-decimal space-y-2">
              {project?.details.map((desc, i) => {
                return (
                  <li key={`project-detail-${i}`} className="ml-7 text-base">
                    <P>{desc}</P>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
        <DialogFooter className="mt-6">
          <DialogClose asChild>
            <Button variant="secondary" className="min-w-24">
              닫기
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
