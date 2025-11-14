import { Link } from "react-router-dom";
import { APP_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center px-10 py-4 sticky top-0 bg-white">
        <div className=" w-[50px]">
          <Link to="/">
            <img src={APP_LOGO} alt="Logo of Insta Food Application" />
          </Link>
        </div>
        <div className="font-bold">
          <ul className="flex gap-12 text-xl">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
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
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
