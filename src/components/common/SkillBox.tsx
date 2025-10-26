import React from 'react';

// Icons
import ExpressIcon from '@/assets/skills/back/express.svg';
import SpringIcon from '@/assets/skills/back/spring-icon.svg';
import AwsIcon from '@/assets/skills/etc/aws-icon.svg';
import GitIcon from '@/assets/skills/etc/git-icon.svg?component';
import GithubIcon from '@/assets/skills/etc/github-icon.svg?component';
import GitlabIcon from '@/assets/skills/etc/gitlab-icon.svg?component';
import NetlifyIcon from '@/assets/skills/etc/netlify-icon.svg?component';
import VercelIcon from '@/assets/skills/etc/vercel-icon.svg?component';
import AxiosIcon from '@/assets/skills/front/axios-icon.svg';
import MotionIcon from '@/assets/skills/front/motion-icon.svg';
import MuiIcon from '@/assets/skills/front/mui-icon.svg';
import NextjsIcon from '@/assets/skills/front/nextjs-icon.svg';
import PlaywrightIcon from '@/assets/skills/front/playwright.svg';
import ReactIcon from '@/assets/skills/front/react-icon.svg';
import ReactNativeIcon from '@/assets/skills/front/react-native-icon.svg';
import RecoilIcon from '@/assets/skills/front/recoil-icon.svg';
import ReduxIcon from '@/assets/skills/front/redux-icon.svg';
import ReduxsagaIcon from '@/assets/skills/front/redux-saga-icon.svg';
import ShadcnIcon from '@/assets/skills/front/shadcn-icon.svg';
import TailwindcssIcon from '@/assets/skills/front/tailwindcss-icon.svg';
import TanstackQueryIcon from '@/assets/skills/front/tanstack-query-icon.svg';
import ZustandIcon from '@/assets/skills/front/zustand-icon.svg';
import Css3Icon from '@/assets/skills/lang/css3.svg';
import Html5Icon from '@/assets/skills/lang/html5.svg';
import JavaIcon from '@/assets/skills/lang/java.svg';
import JavascriptIcon from '@/assets/skills/lang/javascript.svg';
import TypescriptIcon from '@/assets/skills/lang/typescript-icon.svg';
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
  'Shadcn-ui': ShadcnIcon,
  'Motion.dev': MotionIcon,
  Playwright: PlaywrightIcon,
  // backend
  Express: ExpressIcon,
  Spring: SpringIcon,
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
            'bg-muted flex aspect-square h-9 w-9 flex-shrink-0 items-center justify-center rounded-md border border-gray-300 p-1',
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
