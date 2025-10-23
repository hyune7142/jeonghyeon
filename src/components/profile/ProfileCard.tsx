'use client';

import { Github } from 'lucide-react';
import { motion } from 'motion/react';

import { Large, H3, Lead } from '@/components/common/Typography';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

import ProfileItem from './ProfileItem';

function ProfileCard() {
  return (
    <Card className="w-full">
      <CardHeader>
        <Large className="text-blue-500">Frontend Developer</Large>
        <H3>이정현</H3>
      </CardHeader>
      <CardContent>
        <ProfileItem label={'생년월일'} value={'1991. 02. 07'} />
        <ProfileItem label={'주소'} value={'경기도 광주시'} />
        <div className="mt-5">
          <Lead>저의 웹 포트폴리오에 방문해주셔서 감사드립니다.</Lead>
        </div>
      </CardContent>
      <CardFooter>
        <motion.a
          href="https://github.com/Hyune7142"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/80 hover:text-foreground flex items-center gap-2 text-sm font-semibold transition-colors hover:text-blue-500"
          whileHover={{
            scale: 1.05,
            opacity: 1,
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <Github className="h-5 w-5" />
          GitHub
        </motion.a>
      </CardFooter>
    </Card>
  );
}

export default ProfileCard;
