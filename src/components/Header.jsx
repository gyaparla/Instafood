import { Link } from "react-router-dom";
import { APP_LOGO } from "../utils/constants";
import SwitchButton from "./SwitchButton";
import { useSelector } from "react-redux";

const Header = () => {
  const { items } = useSelector((state) => state.cart);
  return (
    <>
      <div className="flex justify-between items-center px-10 py-4 sticky top-0 bg-white dark:bg-black dark:border-b border-orange-500 z-10">
        <div className=" w-[50px]">
          <Link to="/">
            <img src={APP_LOGO} alt="Logo of Insta Food Application" />
          </Link>
        </div>
        <div className="font-bold dark:text-amber-50">
          <ul className="flex gap-8 text-xl">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart ({items.length})</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <SwitchButton />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
