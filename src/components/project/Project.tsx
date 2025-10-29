'use client';
import React, { useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import iglooLogo from '@/assets/company/igloo-logo.webp';
import kbsysLogo from '@/assets/company/kbsys-logo.webp';
import macrogenLogo from '@/assets/company/macrogen-logo.webp';
import CardSwap, { Card, CardSwapHandle } from '@/components/common/CardSwap';
import FuzzyText from '@/components/common/FuzzyText';
import { H1, P } from '@/components/common/Typography';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Company } from '@/types';

export default function ProjectWithDock() {
  const swapRef = useRef<CardSwapHandle>(null);

  const companyList: Company[] = [
    {
      title: '마크로젠',
      content: [
        '젠톡 웹 전면개편 및 운영',
        '젠톡 앱 전면개편 및 운영',
        '삼성헬스 서비스 카드 론칭',
      ],
      logo: macrogenLogo,
    },
    {
      title: '이글루코퍼레이션',
      content: ['보안관제 통합 솔루션 ExD 개발', '보안관제 AI 솔루션  개발 및 운영'],
      logo: iglooLogo,
    },
    {
      title: '클러쉬 (구 케이비시스)',
      content: [
        'SK 하이닉스 Cube 2.0',
        'Magnachip 레거시 시스템 교체 프로젝트',
        'SK 하이닉스 Infinity Dashboard',
      ],
      logo: kbsysLogo,
    },
  ];

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

  return (
    <section className="relative flex min-h-[500px] w-full flex-col items-center justify-center pb-16 md:min-h-[650px]">
      <div className="relative flex h-[320px] w-full items-center justify-center sm:h-[360px] md:h-[420px] lg:h-[450px]">
        <CardSwap
          ref={swapRef}
          onCardClick={i => swapRef.current?.goTo(i)}
          delay={5000}
          verticalDistance={distances.vertical}
          cardDistance={distances.card}
        >
          {companyList.map((item, i) => (
            <Card key={i} data-title={item.title}>
              <div className="flex h-full flex-col items-center justify-center text-center text-gray-900 dark:text-white">
                <H1 className="mb-5">{item.title}</H1>
                <div className="mx-auto mb-6 h-[3px] w-16 rounded-full bg-gray-300 dark:bg-gray-600" />
                {item.content.map((text, idx) => (
                  <FuzzyText
                    className="mb-5 cursor-pointer"
                    key={`${item.title}-content-${idx}`}
                    baseIntensity={0.1}
                    enableHover
                    hoverIntensity={0}
                    fontSize="clamp(1rem, 4vw, 2.2rem)"
                  >
                    {text}
                  </FuzzyText>
                ))}
              </div>
            </Card>
          ))}
        </CardSwap>
      </div>
      <div className="absolute bottom-2 z-50 flex items-end justify-center gap-6 rounded-2xl border border-black/10 bg-white/60 px-8 py-4 shadow-[0_6px_20px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-[rgba(20,20,20,0.6)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.4)]">
        {companyList.map((item, i) => (
          <Tooltip key={`company-${item.title}`}>
            <TooltipTrigger asChild>
              <button
                key={i}
                onClick={() => swapRef.current?.goTo(i)}
                className="group relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-b from-gray-200 to-gray-300 text-gray-800 shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:from-gray-100 hover:to-gray-200 dark:from-neutral-800 dark:to-neutral-900 dark:text-white dark:hover:from-neutral-700 dark:hover:to-neutral-800"
              >
                <Image src={item.logo} alt={item.title} className="rounded-md object-contain" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <P className="text-base">{item.title}</P>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </section>
  );
}
