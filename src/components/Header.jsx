import { Link } from "react-router-dom";
import { APP_LOGO } from "../utils/constants";
import SwitchButton from "./SwitchButton";
import { useSelector } from "react-redux";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Header = () => {
  const { items } = useSelector((state) => state.cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/cart", label: `Cart (${items.length})`, testId: "cart-link" },
    { to: "/orders", label: "Orders" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-black border-b border-gray-200 dark:border-orange-500">
      <nav className="flex justify-between items-center px-4 md:px-10 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="w-10 md:w-[50px] hover:opacity-80 transition-opacity shrink-0"
        >
          <img
            src={APP_LOGO}
            alt="Logo of Insta Food Application"
            className="w-full h-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-4 lg:gap-8 text-base lg:text-xl font-bold dark:text-amber-50">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                data-testid={link.testId}
                className="hover:text-orange-500 transition-colors py-2"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="flex items-center">
            <SwitchButton />
          </li>
        </ul>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <SwitchButton />
          <button
            onClick={toggleMenu}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors text-2xl dark:text-white"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <MdClose /> : <GiHamburgerMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <ul className="flex flex-col gap-0 px-4 py-2 font-bold dark:text-amber-50">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  data-testid={link.testId}
                  onClick={closeMenu}
                  className="block px-3 py-3 hover:text-orange-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors rounded"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
