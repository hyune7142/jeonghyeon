'use client';

import React, { useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import { H1, Lead, P } from '@/components/common/Typography';

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

import { COMPANY_LIST } from '@/constants/project';

import ProjectDialog from './ProjectDialog';
import { BrowserStack, BrowserStackHandle } from '../common/BrowserStack';
import BrowserWindow from '../common/BrowserStack/BrowserWindow';

type Selection = { companyIndex: number; itemIndex: number } | null;

export default function ProjectWithDock() {
  const stackRef = useRef<BrowserStackHandle>(null);
  const [selected, setSelected] = useState<Selection | null>(null);
  const isOpen = selected !== null;

  const [distances, setDistances] = useState({ vertical: 70, card: 60 });
  useEffect(() => {
    const updateDistances = () => {
      const isMobile = window.innerWidth < 768;
      setDistances({
        vertical: isMobile ? 50 : 70,
        card: isMobile ? 45 : 60,
      });
    };
    updateDistances();
    window.addEventListener('resize', updateDistances);
    return () => window.removeEventListener('resize', updateDistances);
  }, []);

  const openDialog = (companyIndex: number, itemIndex: number) => {
    setSelected({ companyIndex, itemIndex });
  };

  const closeDialog = () => setSelected(null);

  const selectedProject = React.useMemo(() => {
    if (!isOpen || !selected) return null;
    const company = COMPANY_LIST[selected.companyIndex];
    if (!company) return null;
    return company.projects[selected.itemIndex] || null;
  }, [isOpen, selected]);

  return (
    <section className="relative flex min-h-[500px] w-full flex-col items-center justify-center pb-16 md:min-h-[650px]">
      <div className="relative flex h-[320px] w-full items-center justify-center sm:h-[360px] md:h-[420px] lg:h-[450px]">
        <BrowserStack
          ref={stackRef}
          onCardClick={i => stackRef.current?.goTo(i)}
          delay={5000}
          verticalDistance={distances.vertical}
          cardDistance={distances.card}
        >
          {COMPANY_LIST.map((item, i) => (
            <BrowserWindow key={`company=-${i}`} title={item.title}>
              <div className="flex h-full w-full flex-col items-center p-8 text-center text-gray-900 dark:text-white">
                <H1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">{item.title}</H1>
                <div className="mx-auto my-7 h-[2px] w-16 rounded-full bg-gray-300 dark:bg-gray-600" />
                <div className="flex h-full w-full flex-col items-center justify-start gap-5 md:gap-8">
                  {item.projects.length === 0 && (
                    <Lead className="d pointer-none: text-xl transition-colors duration-200 sm:text-2xl md:text-3xl lg:text-4xl">
                      준비중 입니다.
                    </Lead>
                  )}
                  {item.projects.map((project, idx) => (
                    <Lead
                      className="cursor-pointer text-xl transition-colors duration-200 hover:text-black sm:text-2xl md:text-3xl lg:text-4xl dark:hover:text-white"
                      key={`${item.title}-project-${idx}`}
                      onClick={e => {
                        e.stopPropagation();
                        openDialog(i, idx);
                      }}
                    >
                      {project.name}
                    </Lead>
                  ))}
                </div>
              </div>
            </BrowserWindow>
          ))}
        </BrowserStack>
      </div>

      {/* Dock 영억 */}
      <div className="absolute bottom-2 z-50 flex items-end justify-center gap-6 rounded-2xl border border-black/10 bg-white/60 px-8 py-4 shadow-[0_6px_20px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-[rgba(20,20,20,0.6)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.4)]">
        {COMPANY_LIST.map((item, i) => (
          <Tooltip key={`company-${item.title}`}>
            <TooltipTrigger asChild>
              <button
                onClick={() => stackRef.current?.goTo(i)}
                className="group relative flex h-15 w-15 cursor-pointer items-center justify-center rounded-xl bg-gradient-to-b from-gray-200 to-gray-300 text-gray-800 shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:from-gray-100 hover:to-gray-200 dark:from-neutral-800 dark:to-neutral-900 dark:text-white dark:hover:from-neutral-700 dark:hover:to-neutral-800"
              >
                <Image src={item.logo} alt={item.title} className="rounded-md object-contain" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <P className="text-base sm:text-lg md:text-xl">{item.title}</P>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>

      {/* Dialog */}
      <ProjectDialog isOpen={isOpen} onClose={closeDialog} project={selectedProject} />
    </section>
  );
}
