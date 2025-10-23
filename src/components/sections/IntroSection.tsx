import Section from '@/components/common/Section';
import { H1 } from '@/components/common/Typography';
import ProfileCard from '@/components/profile/ProfileCard';

async function getProfile() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/profile`, {
    next: { revalidate: 0 },
  });
  if (!res.ok) throw new Error('프로필 데이터를 불러오지 못했습니다.');
  return res.json();
}

export default async function IntroSection() {
  const profile = await getProfile();

  return (
    <Section sectionId="intro" className="sm:flex-row">
      <div id="intro" className="flex-auto p-3 text-center md:text-left">
        <H1>Welcome</H1>
        <H1 className="text-blue-300">JeongHyeon Portfolio</H1>
      </div>
      <div id="profile_card" className="flex basis-1/2 justify-center p-3 md:p-6">
        <ProfileCard profile={profile} />
      </div>
    </Section>
  );
}
