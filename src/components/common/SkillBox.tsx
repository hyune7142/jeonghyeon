import React from 'react';

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
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { SkillName } from '@/types';

import { P } from './Typography';

interface SkillBoxProps {
  className?: string;
  name: SkillName;
}

const skillIconMap: Record<SkillName, React.ComponentType<{ className?: string }>> = {
  // language
  Javascript: JavascriptIcon,
  Typescript: TypescriptIcon,
  HTML: Html5Icon,
  CSS: Css3Icon,
  Java: JavaIcon,
  // frontend
  React: ReactIcon,
  'Next.js': NextjsIcon,
  'React Native': ReactNativeIcon,
  Redux: ReduxIcon,
  'Redux-Saga': ReduxsagaIcon,
  Recoil: RecoilIcon,
  Zustand: ZustandIcon,
  'TanStack Query': TanstackQueryIcon,
  Axios: AxiosIcon,
  'Tailwind CSS': TailwindcssIcon,
  Mui: MuiIcon,
  'Ant Design': AntdIcon,
  'Shadcn-ui': ShadcnIcon,
  'Motion.dev': MotionIcon,
  Playwright: PlaywrightIcon,
  Expo: ExpoIcon,
  // backend
  Express: ExpressIcon,
  Spring: SpringIcon,
  // DataBase
  'Oracle DB': OracleIcon,
  PostgreSQL: PostgresqlIcon,
  Redis: RedisIcon,
  // etc
  Git: GitIcon,
  GitHub: GithubIcon,
  GitLab: GitlabIcon,
  AWS: AwsIcon,
  Vercel: VercelIcon,
  Netlify: NetlifyIcon,
};

function SkillBox({ className, name }: SkillBoxProps) {
  const Icon = skillIconMap[name];
  if (!Icon) {
    return null;
  }

  return (
    <Tooltip delayDuration={200}>
      <TooltipTrigger asChild>
        <div
          className={cn(
            'bg-muted flex aspect-square h-8 w-8 flex-shrink-0 items-center justify-center rounded-md border border-gray-300 p-1',
            className
          )}
        >
          <Icon className="h-full w-full" />
        </div>
      </TooltipTrigger>
      <TooltipContent side="top">
        <P className="text-sm">{name}</P>
      </TooltipContent>
    </Tooltip>
  );
}

export default SkillBox;
