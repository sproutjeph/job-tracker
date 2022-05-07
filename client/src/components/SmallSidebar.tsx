import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../store/context";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useGlobalContext();
  return (
    <aside className="lg:hidden ">
      <div
        className={`${
          showSidebar ? "scale-1" : "scale-0"
        } fixed inset-0 bg-[rgba(0,0,0,0.7)] flex justify-center items-center scale-1 z-10 transition-all duration-700`}
      >
        <div className="bg-white w-[90vw] h-[95vh] rounded-sm py-16 px-8 relative flex items-center flex-col">
          <button
            type="button"
            className="absolute top-[10px] left-[10px] bg-transparent border-transparent text-2xl text-red-700"
            onClick={toggleSidebar}
          >
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </aside>
  );
};
export default SmallSidebar;
