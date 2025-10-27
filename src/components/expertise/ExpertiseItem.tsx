'use client';

import React from 'react';

import Image from 'next/image';

import { H4, Lead } from '@/components/common/Typography';
import { Card, CardContent } from '@/components/ui/card';
import { Expertise } from '@/types';

interface ExpertiseItemProps {
  item: Expertise;
}

export default function ExpertiseItem({ item }: ExpertiseItemProps) {
  return (
    <div className="flex flex-col overflow-visible">
      {' '}
      {/* ✅ 부모 overflow-visible */}
      <Card className="h-[420px] overflow-hidden transition-transform duration-300">
        <CardContent className="flex h-full flex-col p-0 text-center">
          {/* 이미지 영역 */}
          <div className="relative h-[230px] w-full">
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          {/* 텍스트 영역 */}
          <div className="flex h-[190px] flex-col items-center p-4 text-center">
            <H4 className="mb-[10px]">{item.title}</H4>
            <Lead className="leading-relaxed break-keep">{item.desc}</Lead>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
