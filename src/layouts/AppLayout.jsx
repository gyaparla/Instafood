import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { ThemeProvider } from "../context/themeContext";

const AppLayout = () => {
  return (
    <div className="bg-[#FAF5F5] dark:bg-black">
      <Header />
      <div className="px-10">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
