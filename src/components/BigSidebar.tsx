import { FC } from "react";
import Logo from "./Logo";
import { linkData } from "@/lib/utils";
import CustomNavLink from "./CustomNavLink";

interface BigSidebarProps {}

const BigSidebar: FC<BigSidebarProps> = () => {
  return (
    <div className="h-screen w-[200px] hidden lg:block p-6 border-r-2 fixed">
      <div className="mt-2">
        <Logo navLogo />
      </div>

      <div className="mt-14 space-y-4">
        {linkData.map(({ Icon, path, text }) => (
          <CustomNavLink key={text} Icon={Icon} text={text} href={path} />
        ))}
      </div>
    </div>
  );
};

export default BigSidebar;
