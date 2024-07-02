import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  // Toggle Nav
  const toggleNav = () => {
    setNav(!nav);
  };

  // Close Nav
  const closeNav = () => {
    setNav(false);
  };
  return (
    <div className="bg-gray-800">
      <div className="container flex justify-between items-center mx-auto text-gray-300 text-sm md:text-base h-24">
        <a className="text-xl md:text-3xl font-bold">Hammad Sadi</a>
        {/* Large Device Menu */}
        <ul className="hidden md:flex gap-12 z-10">
          <li className="cursor-pointer relative group">
            <Link to="about" smooth={true} offset={50} duration={500}>
              About
            </Link>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#1baa80] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </li>
          <li className="cursor-pointer relative group">
            <Link to="portfolio" smooth={true} offset={50} duration={500}>
              Portfolio
            </Link>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#1baa80] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </li>
          <li className="cursor-pointer relative group">
            <Link to="contact" smooth={true} offset={50} duration={500}>
              Contact
            </Link>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#1baa80] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </li>
        </ul>
        {/* Toggle */}
        <div onClick={toggleNav} className="md:hidden z-30">
          {nav ? (
            <AiOutlineClose size={30} className="cursor-pointer" />
          ) : (
            <AiOutlineMenu size={30} className="cursor-pointer" />
          )}
        </div>
        {/* Small Device Menu */}
        <div
          className={
            nav
              ? "text-center z-20 fixed h-full w-full left-0 top-0 bg-gray-900"
              : "fixed left-[-100%]"
          }
        >
          <ul className="font-semibold text-4xl space-y-8 mt-24">
            <li className="cursor-pointer">
              <Link
                to="about"
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="portfolio"
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}
              >
                Portfolio
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="contact"
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
