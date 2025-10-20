import { ReactNode } from 'react';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <title>LoaHub</title>
        <meta name="author" content="JeongHyeon" />
        <meta name="description" content="LostArk Hub" />
        <meta name="keywords" content="LostArk Utility, LoaHub" />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
