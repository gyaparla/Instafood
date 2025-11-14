import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const AppLayout = () => {
  return (
    <div className="bg-[#FAF5F5]">
      <Header />
      <div className="px-10">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
