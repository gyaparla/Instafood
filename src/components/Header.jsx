import { Link } from "react-router-dom";
import "./home.css";
import { APP_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <>
      <div className="navBar">
        <div className="main-logo">
          <Link to="/">
            <img src={APP_LOGO} alt="Logo of Insta Food Application" />
          </Link>
        </div>
        <div className="menu-container">
          <ul className="menu-list">
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
