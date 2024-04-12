import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CustomNavLink from "./CustomNavLink";
import { linkData } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";

function MobileSidebar() {
  const [sheetOpen, setSheetOpen] = useState(false);
  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
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
            <CustomNavLink
              key={path}
              Icon={Icon}
              text={text}
              href={path}
              setSheetOpen={setSheetOpen}
            />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileSidebar;
