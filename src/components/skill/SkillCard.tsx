'use client';

import { useEffect, useState } from 'react';

import { motion, useAnimation } from 'motion/react';

import { Card } from '@/components/ui/card';
import { Skill } from '@/types';

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  const iconControls = useAnimation();
  const descControls = useAnimation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setIsClient(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    (async () => {
      await iconControls.start({
        opacity: [0, 1],
        y: [20, 0],
        left: '50%',
        translateX: '-50%',
        transition: { duration: 0.4, ease: 'easeOut' },
      });

      await iconControls.start({
        left: '4%',
        translateX: '0%',
        transition: { duration: 0.6, ease: 'easeInOut' },
      });

      await descControls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, ease: 'easeOut' },
      });
    })();
  }, [isClient, iconControls, descControls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="w-full overflow-hidden"
    >
      <Card className="bg-card relative flex h-24 w-full items-center justify-center p-2">
        <motion.div
          animate={isClient ? iconControls : undefined}
          initial={{
            opacity: 0,
            y: 20,
            left: '50%',
            translateX: '-50%',
          }}
          className="absolute top-1/2 flex w-[80px] -translate-y-1/2 flex-col items-center justify-center gap-1 sm:w-[100px]"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center">{skill.icon}</div>
          <span className="text-center text-sm font-medium">{skill.name}</span>
        </motion.div>
        <motion.div
          animate={isClient ? descControls : undefined}
          initial={{ opacity: 0, x: 40 }}
          className="text-muted-foreground absolute left-[100px] p-2 text-sm sm:left-[120px] md:left-[150px] md:text-base lg:left-[180px]"
        >
          {skill.desc}
        </motion.div>
      </Card>
    </motion.div>
  );
}
