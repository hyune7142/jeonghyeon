import { ReactNode } from 'react';

import { Metadata, Viewport } from 'next';
import { ThemeProvider } from 'next-themes';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          <Header />
          <main className="pt-[var(--header-height)] px-6">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
