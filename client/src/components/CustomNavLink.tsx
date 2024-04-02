import { NavLink } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { FC } from "react";

interface NavLinkProps {
  Icon: LucideIcon;
  text: string;
  href: string;
}

const CustomNavLink: FC<NavLinkProps> = ({ Icon, text, href }) => {
  return (
    <NavLink
      to={href}
      className="flex items-center gap-2 py-3 px-6 hover:bg-muted-foreground/20 rounded-md hover:text-primary-foreground"
    >
      <Icon />
      <p>{text}</p>
    </NavLink>
  );
};

export default CustomNavLink;
