import { Outlet } from "react-router-dom";
import { BigSidebar, Navbar, SmallSidebar } from "../../components";
const SharedLayout = () => {
  return (
    <section className="w-screen">
      <main className="grid grid-cols-1 lg:grid-cols-grid2">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="w-[90vw] my-0 mx-auto py-8 px-0 lg:w-[90%]">
            <Outlet />
          </div>
        </div>
      </main>
    </section>
  );
};
export default SharedLayout;
