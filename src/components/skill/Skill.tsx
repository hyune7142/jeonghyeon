'use client';
import { useEffect, useRef, useState } from 'react';

import { Code, Monitor, Server, Wrench } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Icons
// import ReactNativeIcon from  '@/assets/skills/front/axios-icon.svg';
import GitIcon from '@/assets/skills/etc/git-icon.svg?component';
import GithubIcon from '@/assets/skills/etc/github-icon.svg?component';
import GitlabIcon from '@/assets/skills/etc/gitlab-icon.svg?component';
import NetlifyIcon from '@/assets/skills/etc/netlify-icon.svg?component';
import VercelIcon from '@/assets/skills/etc/vercel-icon.svg?component';
import AxiosIcon from '@/assets/skills/front/axios-icon.svg';
import NextjsIcon from '@/assets/skills/front/nextjs-icon.svg';
import PlaywrightIcon from '@/assets/skills/front/playwright.svg';
import ReactIcon from '@/assets/skills/front/react-icon.svg';
import RecoilIcon from '@/assets/skills/front/recoil-icon.svg';
import ReduxIcon from '@/assets/skills/front/redux-icon.svg';
import ReduxsagaIcon from '@/assets/skills/front/redux-saga-icon.svg';
import TailwindcssIcon from '@/assets/skills/front/tailwindcss-icon.svg';
import TanstackQueryIcon from '@/assets/skills/front/tanstack-query-icon.svg';
import ZustandIcon from '@/assets/skills/front/zustand-icon.svg';
import Css3Icon from '@/assets/skills/lang/css3.svg';
import Html5Icon from '@/assets/skills/lang/html5.svg';
import JavaIcon from '@/assets/skills/lang/java.svg';
import JavascriptIcon from '@/assets/skills/lang/javascript.svg';
import TypescriptIcon from '@/assets/skills/lang/typescript-icon.svg';
import SkillCard from '@/components/skill/SkillCard';
import { Skill, SkillTab, SkillTabKey } from '@/types';

import styles from './Skill.module.scss';

const skill: Record<string, Skill[]> = {
  language: [
    {
      name: 'HTML',
      icon: <Html5Icon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: 'HTML 태그를 사용할 수 있습니다.',
    },
    {
      name: 'CSS',
      icon: <Css3Icon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: 'CSS를 이용하여 레이아웃을 구현을 할 수 있습니다.',
    },
    {
      name: 'Javascript',
      icon: <JavascriptIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: 'ES6+ 문법을 활용한 코드 작성이 가능합니다.',
    },
    {
      name: 'Typescript',
      icon: <TypescriptIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: '타입 기반 코드 설계와 안정적인 개발이 가능합니다',
    },
    {
      name: 'Java',
      icon: <JavaIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: '기본적인 사용이 가능합니다.',
    },
  ],
  frontend: [
    {
      name: 'React',
      icon: <ReactIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: '컴포넌트 기반 구조 설계와 상태 관리에 익숙합니다.',
    },
    // {
    //   name: 'React Native',
    //   icon: <ReactNativeIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
    //   desc: 'Expo 환경에서 크로스 플랫폼 앱을 개발한 경험이 있습니다.',
    // },
    {
      name: 'Next.js',
      icon: <NextjsIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: 'SSR과 CSR을 활용한 프로젝트 개발 경험이 있습니다.',
    },
    {
      name: 'Axios',
      icon: <AxiosIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: 'API 통신을 위한 비동기 데이터 처리에 활용합니다.',
    },
    {
      name: 'Redux',
      icon: <ReduxIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: '전역 상태 관리를 위해 Redux Toolkit을 활용할 수 있습니다.',
    },
    {
      name: 'Redux-Saga',
      icon: <ReduxsagaIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: '비동기 로직을 제어하기 위한 미들웨어로 사용해보았습니다.',
    },
    {
      name: 'Recoil',
      icon: <RecoilIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: '간결한 전역 상태 관리가 필요한 프로젝트에서 사용했습니다.',
    },
    {
      name: 'Zustand',
      icon: <ZustandIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: 'React 앱의 전역 상태 관리에 활용한 경험이 있습니다.',
    },
    {
      name: 'TanStack Query',
      icon: <TanstackQueryIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: '데이터 캐싱 및 서버 상태 관리에 활용할 수 있습니다.',
    },
    {
      name: 'Tailwind CSS',
      icon: <TailwindcssIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: '유틸리티 퍼스트 접근으로 빠른 UI 스타일링이 가능합니다.',
    },
    {
      name: 'Playwright',
      icon: <PlaywrightIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: 'E2E 테스트 자동화를 위한 도구로 활용할 수 있습니다.',
    },
  ],
  backend: [],
  etc: [
    {
      name: 'Git',
      icon: <GitIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: '프로젝트 형상관리를 위해 사용하였습니다.',
    },
    {
      name: 'GitHub',
      icon: <GithubIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: '협업을 위해 사용하였습니다.',
    },
    {
      name: 'GitLab',
      icon: <GitlabIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: '협업을 위해 사용하였습니다.',
    },
    {
      name: 'Netlify',
      icon: <NetlifyIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: 'React 프로젝트 배포를 해보았습니다.',
    },
    {
      name: 'Vercel',
      icon: <VercelIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: 'NextJS 프로젝트를 배포해보았습니다.',
    },
  ],
};

const skillTabs: SkillTab[] = [
  { key: 'language', label: 'Languages', icon: <Code size={16} /> },
  { key: 'frontend', label: 'Frontend', icon: <Monitor size={16} /> },
  { key: 'backend', label: 'Backend', icon: <Server size={16} /> },
  { key: 'etc', label: 'Others', icon: <Wrench size={16} /> },
];

export default function SkillSection() {
  const [activeTab, setActiveTab] = useState<SkillTabKey>('language');
  const containerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // ✅ 선택된 탭 중앙 정렬
  useEffect(() => {
    const activeButton = tabRefs.current[activeTab];
    if (activeButton) {
      activeButton.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [activeTab]);

  return (
    <div className="flex flex-col items-center">
      {/* 스킬 탭 */}
      <div ref={containerRef} className={styles.tabContainer}>
        {skillTabs.map(tab => (
          <button
            key={tab.key}
            ref={el => {
              tabRefs.current[tab.key] = el;
            }}
            onClick={() => setActiveTab(tab.key as SkillTabKey)}
            className={`flex flex-shrink-0 items-center gap-2 rounded-md px-4 py-2 transition-all ${
              activeTab === tab.key
                ? `bg-primary text-primary-foreground ${styles.tabActive}`
                : 'bg-muted text-muted-foreground hover:bg-muted/70'
            }`}
          >
            {tab.icon}
            <span className="text-sm whitespace-nowrap sm:text-base">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* 스킬 리스트 */}
      <div className="mt-6 flex w-full justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delayChildren: 0.15 },
              },
            }}
            className="flex w-full max-w-[700px] flex-col items-center gap-3 px-4"
          >
            {skill[activeTab].map(skill => (
              <SkillCard key={`${activeTab}_${skill.name}`} skill={skill} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
