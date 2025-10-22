import React from 'react';

import Section from '@/components/common/Section';
import { H1 } from '@/components/common/Typography';
import ProfileCard from '@/components/profile/ProfileCard';

function IntroSection() {
  return (
    <Section id="project" className="sm:flex-row">
      <div id="intro" className="flex-auto p-3 text-center md:text-left">
        <H1>Welcome</H1>
        <H1 className="text-blue-300">JoengHyeon Portfolio</H1>
      </div>
      <div id="profile_card" className="flex basis-1/2 justify-center p-3 md:p-6">
        <ProfileCard />
      </div>
    </Section>
  );
}

export default IntroSection;
