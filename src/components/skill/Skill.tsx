'use client';
import { useEffect, useRef, useState } from 'react';

import { Code, Monitor, Server, Wrench, Database } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Icons
import {
  // Frontend
  AxiosIcon,
  MotionIcon,
  MuiIcon,
  AntdIcon,
  NextjsIcon,
  PlaywrightIcon,
  ReactIcon,
  ReactNativeIcon,
  RecoilIcon,
  ReduxIcon,
  ReduxsagaIcon,
  ShadcnIcon,
  TailwindcssIcon,
  TanstackQueryIcon,
  ZustandIcon,
  ExpoIcon,
  // Backend
  ExpressIcon,
  SpringIcon,
  // ETC
  AwsIcon,
  GitIcon,
  GithubIcon,
  GitlabIcon,
  NetlifyIcon,
  VercelIcon,
  // Database
  OracleIcon,
  PostgresqlIcon,
  RedisIcon,
  // Languages
  Css3Icon,
  Html5Icon,
  JavaIcon,
  JavascriptIcon,
  TypescriptIcon,
} from '@/assets/skills';
import SkillCard from '@/components/skill/SkillCard';
import { Skill, SkillTab, SkillTabKey } from '@/types';

const skill: Record<string, Skill[]> = {
  language: [
    {
      name: 'Javascript',
      icon: <JavascriptIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: 'ES6+ 문법을 활용한 코드 작성이 가능합니다.',
    },
    {
      name: 'Typescript',
      icon: <TypescriptIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: '타입 기반 코드 설계와 안정적인 개발이 가능합니다.',
    },
    {
      name: 'HTML',
      icon: <Html5Icon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: 'HTML 태그를 사용할 수 있습니다.',
    },
    {
      name: 'CSS',
      icon: <Css3Icon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: 'CSS를 이용하여 레이아웃을 구현할 수 있습니다.',
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
      desc: '컴포넌트 기반 구조 설계에 익숙하며, Atomic, FSD 패턴을 적용하여 개발한 경험이 있습니다.',
    },
    {
      name: 'Next.js',
      icon: <NextjsIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: 'CSR, SSR, ISR 학습을 위해 사용해보았습니다.',
    },
    {
      name: 'React Native',
      icon: <ReactNativeIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: '하이브리드 앱(iOS, Android)을 설계, 개발 및 운영한 경험이 있습니다.',
    },
    {
      name: 'Expo',
      icon: <ExpoIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: 'Expo 환경에서 네이티브 모듈 관리와 환경 설정을 수행하고, EAS Local Build를 활용해 크로스플랫폼 앱을 빌드 및 운영했습니다.',
    },
    {
      name: 'Redux',
      icon: <ReduxIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: '전역 상태 관리를 위해 Redux(Redux Toolkit)을 활용하여 개발한 경험이 있습니다.',
    },
    {
      name: 'Redux-Saga',
      icon: <ReduxsagaIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: '비동기 로직을 제어하기 위한 Redux 미들웨어로 사용해봤습니다.',
    },
    {
      name: 'Recoil',
      icon: <RecoilIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: '전역 상태 관리 및 데이터 캐싱을 위해 사용했습니다.',
    },
    {
      name: 'Zustand',
      icon: <ZustandIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: '최근 프로젝트에서 전역 상태 관리를 위해 사용했습니다.',
    },
    {
      name: 'TanStack Query',
      icon: <TanstackQueryIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: '데이터 캐싱 및 서버 상태 관리에 활용할 수 있습니다.',
    },
    {
      name: 'Axios',
      icon: <AxiosIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: 'API 통신을 위한 비동기 데이터 처리에 활용하였습니다.',
    },
    {
      name: 'Tailwind CSS',
      icon: <TailwindcssIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: '유틸리티 퍼스트 방식의 스타일링을 학습하기 위해 사용해봤습니다.',
    },
    {
      name: 'Mui',
      icon: <MuiIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: 'React 프로젝트에서 빠르게 UI를 구성하기 위해 활용했습니다.',
    },
    {
      name: 'Ant Design',
      icon: <AntdIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: 'React 프로젝트에서 빠르게 UI를 구성하기 위해 활용했습니다.',
    },
    {
      name: 'Shadcn-ui',
      icon: <ShadcnIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: 'Tailwind 기반의 UI 컴포넌트 시스템으로 학습을 위해 사용해봤습니다.',
    },
    {
      name: 'Motion.dev',
      icon: <MotionIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: 'React 애니메이션 구현을 위해 사용했으며, UI 인터랙션을 자연스럽게 구성했습니다.',
    },
    {
      name: 'Playwright',
      icon: <PlaywrightIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: 'E2E 테스트 자동화 도입을 위해 POC를 구성한 경험이 있습니다.',
    },
  ],
  backend: [
    {
      name: 'Express',
      icon: <ExpressIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: 'Firebase DynamicLink 대체용 딥링크 서버를 구축할 때 활용했습니다.',
    },
    {
      name: 'Spring',
      icon: <SpringIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: '교육 과정 및 하이닉스 프로젝트에서 간단한 API를 개발했습니다.',
    },
  ],
  database: [
    {
      name: 'Oracle DB',
      icon: <OracleIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: 'API 개발에 필요한 기본적인 데이터 조회 및 쿼리 작성이 가능합니다.',
    },
    {
      name: 'PostgreSQL',
      icon: <PostgresqlIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: 'API 개발에 필요한 기본적인 데이터 조회 및 쿼리 작성이 가능합니다.',
    },
    {
      name: 'Redis',
      icon: <RedisIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: 'API 서버의 성능 최적화를 위해 Redis를 캐시 스토어로 구성해 활용했습니다.',
    },
  ],
  etc: [
    {
      name: 'Git',
      icon: <GitIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: '프로젝트 형상관리를 위해 사용하였습니다.',
    },
    {
      name: 'GitHub',
      icon: <GithubIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: '사내 협업 환경에서 사용했습니다.',
    },
    {
      name: 'GitLab',
      icon: <GitlabIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: '사내 협업 환경에서 사용했습니다.',
    },
    {
      name: 'AWS',
      icon: <AwsIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: 'S3, CloudFront, CodePipeline 등을 활용한 배포 환경을 경험해보았습니다.',
    },
    {
      name: 'Vercel',
      icon: <VercelIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: 'Next.js 프로젝트를 배포해보았습니다.',
    },
    {
      name: 'Netlify',
      icon: <NetlifyIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
      desc: 'React 프로젝트 배포를 해보았습니다.',
    },
  ],
};

const skillTabs: SkillTab[] = [
  { key: 'language', label: 'Languages', icon: <Code size={16} /> },
  { key: 'frontend', label: 'Frontend', icon: <Monitor size={16} /> },
  { key: 'backend', label: 'Backend', icon: <Server size={16} /> },
  { key: 'database', label: 'DataBase', icon: <Database size={16} /> },
  { key: 'etc', label: 'Others', icon: <Wrench size={16} /> },
];

export default function SkillSection() {
  const [activeTab, setActiveTab] = useState<SkillTabKey>('language');
  const containerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const hasMounted = useRef(false);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

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
      <div
        ref={containerRef}
        className="flex w-full items-center justify-start gap-2 overflow-x-auto overflow-y-hidden px-3 pb-2 whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] md:justify-center md:overflow-x-visible [&::-webkit-scrollbar]:hidden"
      >
        {skillTabs.map(tab => (
          <button
            key={tab.key}
            ref={el => {
              tabRefs.current[tab.key] = el;
            }}
            onClick={() => setActiveTab(tab.key as SkillTabKey)}
            className={`flex flex-shrink-0 items-center gap-2 rounded-md px-4 py-2 transition-all ${
              activeTab === tab.key
                ? 'bg-primary text-primary-foreground scale-[1.03] shadow-md shadow-black/10 dark:shadow-white/10'
                : 'bg-muted text-muted-foreground hover:bg-muted/70'
            }`}
          >
            {tab.icon}
            <span className="text-sm whitespace-nowrap sm:text-base">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* 스킬 리스트 */}
      <div className="mt-6 flex w-full max-w-4xl justify-center">
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
            className="flex w-full flex-col items-center gap-3 px-4"
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
