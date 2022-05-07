import { useState } from "react";
import Logo from "./Logo";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useGlobalContext } from "../store/context";

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { toggleSidebar, logoutUser, user } = useGlobalContext();
  return (
    <nav className="h-[6rem] bg-white shadow-sm px-8 flex items-center justify-center">
      <div className="flex justify-between items-center w-[90vw] lg:w-[90%]">
        <button
          onClick={toggleSidebar}
          className=" text-mainBlack text-[1.75rem] "
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo className=" lg:hidden" />
          <h3 className="hidden m-0 text-2xl tracking-wider capitalize lg:block">
            dashboard
          </h3>
        </div>
        <div className="relative">
          <button
            type="button"
            className=" flex items-center justify-center gap-y-0 gap-x-[0.5rem] relative shadow-sm py-1 px-3  bg-mainBlack text-white rounded-md"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div
            className={`${
              showLogout ? "" : "hidden"
            }  absolute top-[40px] left-0 w-full bg-mainBlackLight hover:bg-mainBlack shadow-sm  p-2 text-center group rounded-md`}
          >
            <button
              type="button"
              className="tracking-wider capitalize border-transparent text-mainBlack group-hover:text-white"
              onClick={logoutUser}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
