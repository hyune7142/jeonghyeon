import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}', // App Router 구조 (Next 13+)
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        header: '80px', // 헤더 높이
      },
      fontFamily: {
        sans: ['var(--font-pretendard)', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'], // 코드 폰트
      },
    },
  },
};
export default config;
