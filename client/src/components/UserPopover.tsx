import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, Settings } from "lucide-react";
import { Link } from "react-router-dom";

interface UserPopoverProps {
  userName: string;
  avatar: string;
  email: string;
}

const UserPopover: FC<UserPopoverProps> = ({ userName, avatar, email }) => {
  return (
    <Popover>
      <PopoverTrigger asChild className="cursor-pointer">
        <Avatar>
          <AvatarImage src={avatar} alt="@shadcn" />
          <AvatarFallback>{userName.slice(0, 1)}</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="w-60 space-y-4" sideOffset={10}>
        <div className="flex items-center gap-2 ">
          <Avatar>
            <AvatarImage src={avatar} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="">
            <p className=" text-xs font-bold">{userName}</p>
            <p className="text-xs text-muted-foreground">{email}</p>
          </div>
        </div>
        <Link
          to="/profile"
          className="flex gap-4 items-center  text-sm hover:bg-muted-foreground/20 p-2 rounded-md hover:text-primary-foreground"
        >
          <Settings size={18} />
          <p>Manage Account</p>
        </Link>
        <div className="flex gap-4 items-center text-sm hover:bg-muted-foreground/20 p-2 rounded-md hover:text-primary-foreground">
          <LogOut size={18} />
          <p>Logout</p>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default UserPopover;
