import { ReactNode } from 'react';

import { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';

import Providers from '@/app/providers';
import Header from '@/components/common/Header';

import './globals.css';

export const metadata: Metadata = {
  title: 'JeongHyeon Portfolio',
  description: 'JeongHyeon Portfolio',
  authors: [{ name: 'JeongHyeon' }],
  keywords: [
    '이정현',
    'JeongHyeon',
    'hyune7142',
    '웹개발',
    '프론트엔드',
    '리액트',
    '넥스트',
    '자바스크립트',
    '타입스크립트',
    '리액트쿼리',
    '주스탄드',
    '스프링',
    '포트폴리오',
  ],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
};

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
  weight: '100 900',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning className={`${pretendard.variable}`}>
      <body suppressHydrationWarning className="min-w-[320px]">
        <Providers>
          <Header />
          <main className="min-w-[320px] p-6 pt-[var(--header-height)]">
            <div className="mx-auto max-w-[1000px]">{children}</div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
