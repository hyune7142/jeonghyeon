import { NextResponse } from 'next/server';

import type { Profile } from '@/types';

// 프로필 카드 조회
export async function GET() {
  const profile: Profile = {
    name: '이정현',
    birth: '1991. 02. 07',
    email: 'hyune7142@daum.net',
    address: '경기도 광주시',
    position: 'Frontend Developer',
    github: 'https://github.com/Hyune7142',
    intro: `안녕하세요.
          사용자 경험과 코드의 유지보수성을 최우선 가치로 두는 프론트엔드 개발자 이정현입니다.
          
          저는 B2B와 B2C 환경에서 React와 React Native 기반의 다양한 프로젝트를 수행하며, 사용자가 체감하는 경험을 개선하고 팀 전체가 이해하기 쉬운 코드를 만드는 일에 집중해왔습니다.
          협업 과정에서는 실질적인 성과 창출을 목표로 하며, 단순히 짧은 코드가 아닌 읽기 쉽고 예측 가능한 구조를 지향합니다.
    `,
  };

  await new Promise(res => setTimeout(res, 500));

  return NextResponse.json(profile);
}
