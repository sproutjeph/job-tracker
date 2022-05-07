import links from "../utils/links";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../store/context";

const NavLinks = () => {
  const { toggleSidebar } = useGlobalContext();
  return (
    <div className="flex flex-col pt-8">
      {links.map(({ Icon, id, path, text }) => (
        <NavLink
          className={({ isActive }) =>
            `${
              isActive ? "underline" : ""
            } flex items-center text-mainBlack py-4 pl-10 capitalize transition-all duration-300 hover:bg-gray-100 hover:pl-12 hover:text-gray-700 group `
          }
          to={path}
          key={id}
          onClick={toggleSidebar}
        >
          <span className="grid mr-4 text-2xl transition-all duration-1000 place-items-center group-hover:text-mainColor">
            <Icon />
          </span>

          {text}
        </NavLink>
      ))}
    </div>
  );
};
export default NavLinks;
