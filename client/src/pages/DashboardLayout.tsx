import BigSidebar from "@/components/BigSidebar";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <main className="grid lg:grid-cols-[200px,1fr] lg:grid-rows-[60px,1fr]">
        <div>
          <BigSidebar />
        </div>
        <div className="lg:col-start-2 lg:row-start-1">
          <Navbar />
        </div>
        <div className="lg:col-start-2 lg:row-start-2">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
