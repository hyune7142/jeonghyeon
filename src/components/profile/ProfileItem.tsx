import { Large, Lead } from '@/components/common/Typography';
import { Separator } from '@/components/ui/separator';

interface ProfileItemProps {
  label: string;
  value: string;
}

function ProfileItem({ label, value }: ProfileItemProps) {
  return (
    <div className="flex w-full">
      <div className="mr-3 flex w-20 items-center justify-between">
        <Large className="text-sm sm:text-base md:text-lg">{label}</Large>
        <Separator orientation="vertical" className="h-[15px] bg-black dark:bg-white" />
      </div>
      <Lead>{value}</Lead>
    </div>
  );
}

export default ProfileItem;
