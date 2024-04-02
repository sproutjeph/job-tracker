import { NavLink } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { FC } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  Icon: LucideIcon;
  text: string;
  href: string;
}

const CustomNavLink: FC<NavLinkProps> = ({ Icon, text, href }) => {
  return (
    <NavLink
      to={href}
      className={cn(
        "flex items-center gap-2 py-3 px-6 hover:bg-muted-foreground/20 rounded-md",
        ({ isActive }: { isActive: boolean }) => isActive && "text-primary"
      )}
      end
    >
      <Icon />
      <p className="capitalize">{text}</p>
    </NavLink>
  );
};

export default CustomNavLink;
