import { useGlobalContext } from "../store/context";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const BigSidebar = () => {
  const { showSidebar } = useGlobalContext();
  return (
    <aside className="shadow-sm">
      <div
        className={`${
          showSidebar ? "ml-[-250px]" : ""
        } hidden lg:block h-full w-[250px]  min-h-screen bg-white transition-all duration-700 `}
      >
        <div className=" sticky top-0">
          <header className="h-24 flex it pl-10">
            <Logo className="w-[8rem] object-contain" />
          </header>
          <NavLinks />
        </div>
      </div>
    </aside>
  );
};
export default BigSidebar;
