import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}', // Next Pages 라우팅
    './src/components/**/*.{js,ts,jsx,tsx,mdx}', // 공통 컴포넌트
    './src/app/**/*.{js,ts,jsx,tsx,mdx}', // App Router 구조 (Next 13+)
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'], // 기본 폰트
        mono: ['JetBrains Mono', 'monospace'], // 코드 폰트
      },
    },
  },
};
export default config;
