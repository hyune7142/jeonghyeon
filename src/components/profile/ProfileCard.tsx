'use client';

import { Github } from 'lucide-react';
import { motion } from 'motion/react';

import { Large, H3, Lead } from '@/components/common/Typography';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

import ProfileItem from './ProfileItem';

interface ProfileCardProps {
  profile: {
    name: string;
    birth: string;
    address: string;
    position: string;
    github: string;
    intro: string;
  };
}

function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <Large className="text-blue-500">{profile.position}</Large>
        <H3>{profile.name}</H3>
      </CardHeader>

      <CardContent>
        <ProfileItem label="생년월일" value={profile.birth} />
        <ProfileItem label="주소" value={profile.address} />
        <div className="mt-5">
          <Lead>{profile.intro}</Lead>
        </div>
      </CardContent>

      <CardFooter>
        <motion.a
          href={profile.github}
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
