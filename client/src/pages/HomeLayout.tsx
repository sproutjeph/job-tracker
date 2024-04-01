import { FC } from "react";
import { Outlet } from "react-router-dom";

interface HomeLayoutProps {}

const HomeLayout: FC<HomeLayoutProps> = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
