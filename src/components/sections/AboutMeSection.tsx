'use client';

import React from 'react';

import Section from '@/components/common/Section';
import { Lead } from '@/components/common/Typography';

function AboutMeSection() {
  return (
    <Section sectionId="about" title="자기소개">
      <Lead className="whitespace-pre-line">
        {`안녕하세요.
          사용자 경험과 코드의 유지보수성을 최우선 가치로 두는 프론트엔드 개발자 이정현입니다.
          
          저는 B2B와 B2C 환경에서 React와 React Native 기반의 다양한 프로젝트를 수행하며, 사용자가
          체감하는 경험을 개선하고 팀 전체가 이해하기 쉬운 코드를 만드는 일에 집중해왔습니다. 협업
          과정에서는 실질적인 성과 창출을 목표로 하며, 단순히 짧은 코드가 아닌 읽기 쉽고 예측 가능한
          구조를 지향합니다.
          
          저는 빠른 학습력과 높은 적응력을 바탕으로 새로운 환경에서도 즉시 성과를 만들어내며, 꾸준히
          기술적 성장을 위해 노력하고 있는 개발자입니다.`}
      </Lead>
    </Section>
  );
}

export default AboutMeSection;
