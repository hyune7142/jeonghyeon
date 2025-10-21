import React from 'react';

import { Github } from 'lucide-react';

import { Large, Lead } from '@/components/common/Typography';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

function ProfileCard() {
  return (
    <Card className="w-full">
      <CardHeader>
        <Large className="text-blue-500">Frontend Developer</Large>
        <Large>이정현</Large>
      </CardHeader>
      <CardContent>
        <Lead className="!text-sm">
          안녕하세요. <br />
          사용자 경험과 코드의 유지보수성을 최우선 가치로 두는 프론트엔드 개발자 이정현입니다.
        </Lead>
      </CardContent>
      <CardFooter>
        <a
          href="https://github.com/Hyune7142"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-semibold text-foreground/80 hover:text-foreground transition-colors"
        >
          <Github className="w-5 h-5" />
          GitHub
        </a>
      </CardFooter>
    </Card>
  );
}

export default ProfileCard;
