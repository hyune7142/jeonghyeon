import AboutMeSection from '@/components/sections/AboutMeSection';
import IntroSection from '@/components/sections/IntroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import WorkExperience from '@/components/sections/WorkExperience';

function Home() {
  return (
    <div className="flex flex-col gap-10">
      <IntroSection />
      <AboutMeSection />
      <SkillsSection />
      <ProjectsSection />
      <WorkExperience />
    </div>
  );
}

export default Home;
