import Logo from "./Logo";
import { ModeToggle } from "./mode-toggle";
import UserPopover from "./UserPopover";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mx-4 sm:mx-6 my-4">
      <MobileSidebar />
      <Logo navLogo />
      <div className="flex gap-2 items-center">
        <ModeToggle />
        <UserPopover
          avatar="https://github.com/shadcn.png"
          email="donjeph@gmail.com"
          userName="Jephthah Mbah"
        />
      </div>
    </nav>
  );
};

export default Navbar;
