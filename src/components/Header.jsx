import React, { useState } from "react";
import logo from "../assets/vite.svg";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed w-full z-50 top-0">
      <nav className="bg-white w-full border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
            <span className="flex flex-row items-center gap-3">
              <img src={logo} alt="" className="h-16 mt-[5px]" />
              <span>
                <h1 className="font-bold text-xl text-blue-700">ASDM</h1>
                <h1 className="text-base font-normal">Job Mela</h1>
              </span>
            </span>
          </span>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <span className="flex flex-row gap-2 text-[17px] items-center">
              <h1 className="text-gray-600">Welcome</h1>
              <h1 className="flex flex-row items-center gap-1">User
                <span><FaRegUserCircle size={20} /></span>
              </h1>
            </span>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 "
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`${isMenuOpen ? "block" : "hidden"
              } md:block md:items-center justify-between w-full md:w-auto md:order-1`}
            id="navbar-sticky"
          >

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
