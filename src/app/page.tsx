import ExpertiseSection from '@/components/sections/ExpertiseSection';
import IntroSection from '@/components/sections/IntroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import WorkExperience from '@/components/sections/WorkExperience';

function Home() {
  return (
    <div className="flex flex-col gap-15">
      <IntroSection />
      <ExpertiseSection />
      <SkillsSection />
      <WorkExperience />
      <ProjectsSection />
    </div>
  );
}

export default Home;
