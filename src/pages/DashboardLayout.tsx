import BigSidebar from "@/components/BigSidebar";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <main className="grid lg:grid-cols-[200px,1fr] lg:grid-rows-[120px,1fr]">
        <div>
          <BigSidebar />
        </div>
        <Navbar />
        <div className="lg:col-start-2 lg:row-start-2 mx-4 mt-6 lg:mt-0">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
