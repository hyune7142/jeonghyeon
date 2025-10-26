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
    `,
  };

  await new Promise(res => setTimeout(res, 500));

  return NextResponse.json(profile);
}
