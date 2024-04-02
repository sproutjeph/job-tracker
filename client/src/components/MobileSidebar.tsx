import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Logo from "./Logo";
import CustomNavLink from "./CustomNavLink";
import { linkData } from "@/lib/utils";

function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild className=" lg:hidden">
        <Menu size={30} className="text-primary cursor-pointer" />
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col  items-center">
        <SheetHeader>
          <SheetTitle>
            <Logo navLogo />
          </SheetTitle>
        </SheetHeader>

        <div className="mt-6 space-y-4">
          {linkData.map(({ Icon, path, text }) => (
            <SheetClose asChild key={text}>
              <CustomNavLink Icon={Icon} text={text} href={path} />
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileSidebar;
