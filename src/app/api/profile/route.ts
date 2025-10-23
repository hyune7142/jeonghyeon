import { NextResponse } from 'next/server';

// 프로필 카드 조회
export async function GET() {
  const profile = {
    name: '이정현',
    birth: '1991. 02. 07',
    address: '경기도 광주시',
    position: 'Frontend Developer',
    github: 'https://github.com/Hyune7142',
    intro: '저의 웹 포트폴리오에 방문해주셔서 감사드립니다.',
  };

  await new Promise(res => setTimeout(res, 500));

  return NextResponse.json(profile);
}
