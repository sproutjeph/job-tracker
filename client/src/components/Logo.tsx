import { FC } from "react";
import logo from "../assets/images/logo.svg";
import { cn } from "@/lib/utils";

interface Props {
  navLogo?: boolean;
}
const Logo: FC<Props> = ({ navLogo }) => {
  return (
    <div className="flex gap-0">
      <img src={logo} alt="jobify" className={cn(navLogo && "h-9")} />
    </div>
  );
};

export default Logo;
