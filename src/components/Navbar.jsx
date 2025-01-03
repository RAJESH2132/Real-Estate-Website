import { useState } from "react";
import { assets } from "../assets/assets";
import { useEffect } from "react";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 z-10 w-full">
      <div className="container flex items-center justify-between px-6 py-4 mx-auto bg-transparent md:px-20 lg:px-32">
        <img src={assets.logo} alt="logo" />
        <ul className="hidden text-white md:flex gap-7 ">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a
            href="#Testimonials"
            className="cursor-pointer hover:text-gray-400"
          >
            Testimonials
          </a>
        </ul>
        <button className="hidden px-8 py-2 bg-white rounded-full md:block">
          Sign up
        </button>
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className="cursor-pointer md:hidden w-7"
          alt=""
        />
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        }  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            alt="cross"
            className="w-6"
          />
        </div>
        <ul className="flex flex-col items-center gap-2 px-5 mt-5 text-lg font-medium">
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Header"
            className="inline-block px-4 py-2 rounded-full"
          >
            Home
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#About"
            className="inline-block px-4 py-2 rounded-full"
          >
            About
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Projects"
            className="inline-block px-4 py-2 rounded-full"
          >
            Projects
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Testimonials"
            className="inline-block px-4 py-2 rounded-full"
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
