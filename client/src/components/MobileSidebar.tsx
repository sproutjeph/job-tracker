import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BarChart, BookPlusIcon, List, Menu, User } from "lucide-react";
import Logo from "./Logo";
import CustomNavLink from "./CustomNavLink";

function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu size={30} className="text-primary cursor-pointer" />
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col  items-center">
        <SheetHeader>
          <SheetTitle>
            <Logo navLogo />
          </SheetTitle>
        </SheetHeader>

        <div className="mt-6 space-y-4">
          <SheetClose asChild>
            <CustomNavLink Icon={BookPlusIcon} text="Add Job" href="/add-job" />
          </SheetClose>
          <SheetClose asChild>
            <CustomNavLink Icon={List} text="All Jobs" href="/all-jobs" />
          </SheetClose>
          <SheetClose asChild>
            <CustomNavLink Icon={BarChart} text="Stats" href="/stats" />
          </SheetClose>
          <SheetClose asChild>
            <CustomNavLink Icon={User} text="Profile" href="/profile" />
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileSidebar;
