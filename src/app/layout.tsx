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
  keywords: ['JeongHyeon', 'Hyune7142', 'Portfolio', 'Note'],
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
    <html lang="ko" suppressHydrationWarning className={`${pretendard.variable} min-w-[320px]`}>
      <body className="min-w-[320px]">
        <Providers>
          <Header />
          <main className="p-6 pt-[var(--header-height)]">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
