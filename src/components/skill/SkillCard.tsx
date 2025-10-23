'use client';

import { useEffect } from 'react';

import { motion, useAnimation } from 'motion/react';

import { Card } from '@/components/ui/card';
import { Skill } from '@/types';

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  const iconControls = useAnimation();
  const descControls = useAnimation();

  useEffect(() => {
    (async () => {
      await iconControls.start({
        opacity: [0, 1],
        y: [10, 0],
        left: '50%',
        transition: { duration: 0.4 },
      });
      await iconControls.start({
        left: '5%',
        transition: { duration: 0.6 },
      });
      await descControls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.4 },
      });
    })();
  }, [iconControls, descControls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="w-full overflow-hidden"
    >
      <Card className="bg-card relative flex h-24 w-full items-center justify-center p-2">
        {/* 아이콘 + 이름 */}
        <motion.div
          animate={iconControls}
          initial={{ opacity: 0, y: 10, left: '50%' }}
          className="absolute top-1/2 flex w-[80px] -translate-y-1/2 flex-col items-center justify-center gap-1 sm:w-[100px]"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center">{skill.icon}</div>
          <span className="text-center text-sm font-medium">{skill.name}</span>
        </motion.div>
        {/* 설명 */}
        <motion.div
          animate={descControls}
          initial={{ opacity: 0, x: 40 }}
          className="text-muted-foreground absolute left-30 p-2 text-sm"
        >
          {skill.desc}
        </motion.div>
      </Card>
    </motion.div>
  );
}
