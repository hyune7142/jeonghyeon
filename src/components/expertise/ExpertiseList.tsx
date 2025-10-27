'use client';

import React from 'react';

import Autoplay from 'embla-carousel-autoplay';

import app from '@/assets/expertise/app.png';
import collaboration from '@/assets/expertise/collaboration.png';
import frontendRevamp from '@/assets/expertise/frontend-revamp.png';
import marketing from '@/assets/expertise/marketing.png';
import modernWeb from '@/assets/expertise/modern-web.png';
import ExpertiseItem from '@/components/expertise/ExpertiseItem';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Expertise } from '@/types';

export const expertiseList: Expertise[] = [
  {
    img: modernWeb.src,
    title: '모던 프론트엔드 개발',
    desc: 'React, React Native, TypeScript, Next.js 기반의 최신 프론트엔드 아키텍처 설계와 구현 경험이 있습니다.',
  },
  {
    img: frontendRevamp.src,
    title: '레거시 고도화 및 마이그레이션 경험',
    desc: '레거시 시스템을 개선 및 UI/UX를 고도화, 서비스 마이그레이션 경험이 있습니다.',
  },
  {
    img: app.src,
    title: '앱 개발 및 운영경험',
    desc: 'React Native 하이브리드앱을 개발 및 운영한 경험이 있습니다.',
  },
  {
    img: marketing.src,
    title: '마케팅 및 이벤트 서비스 개발',
    desc: '다양한 B2B 서비스 연계 및 이벤트 페이지 개발, GA·GTM 설정을 해본 경험이 있습니다.',
  },
  {
    img: collaboration.src,
    title: '다양한 협업 도구 활용 경험',
    desc: 'GitHub, Jira, Confluence를 활용해 이슈 관리, 문서화, 코드 협업을 경험했습니다.',
  },
];

export default function ExpertiseList() {
  return (
    <div className="px-5">
      <Carousel
        opts={{
          align: 'center',
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2500,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {expertiseList.map((item, index) => (
            <CarouselItem key={index} className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3">
              <ExpertiseItem item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
