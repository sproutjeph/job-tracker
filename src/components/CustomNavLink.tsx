import { NavLink } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface NavLinkProps {
  Icon: LucideIcon;
  text: string;
  href: string;
  setSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CustomNavLink: FC<NavLinkProps> = ({
  Icon,
  text,
  href,
  setSheetOpen,
}) => {
  return (
    <NavLink
      to={href}
      className={cn(
        "flex items-center gap-2 py-3 px-6 hover:bg-muted-foreground/20 rounded-md",
        ({ isActive }: { isActive: boolean }) => isActive && "text-primary"
      )}
      end
      onClick={() => setSheetOpen(false)}
    >
      <Icon />
      <p className="capitalize">{text}</p>
    </NavLink>
  );
};

export default CustomNavLink;
