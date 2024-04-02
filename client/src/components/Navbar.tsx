import Logo from "./Logo";
import { ModeToggle } from "./mode-toggle";
import UserPopover from "./UserPopover";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  return (
    <nav className="   border-b-2 ">
      <div className="mx-4 sm:mx-6 flex justify-between  items-center my-4">
        <MobileSidebar />
        <div className="lg:hidden">
          <Logo navLogo />
        </div>
        <h1 className="text-center w-full hidden lg:block text-xl tracking-wide">
          DASHBOARD
        </h1>
        <div className="flex gap-2 items-center">
          <ModeToggle />
          <UserPopover
            avatar="https://github.com/shadcn.png"
            email="donjeph@gmail.com"
            userName="Jephthah Mbah"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
