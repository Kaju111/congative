import React, { useState } from "react";
import logo from "../assets/vite.svg";

const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <div>
      <nav class="bg-white  fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
            <span className="flex flex-row items-center gap-3">
              <img src={logo} alt="" className="h-16 mt-[5px]" />
              <span>
                <h1 className="font-bold text-xl text-blue-700">ASDM</h1>
                <h1 className="text-base font-normal">Job Portal</h1>
              </span>
            </span>
          </span>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <span className="flex flex-row gap-5 text-[17px] items-center">
              <h1>Welcome</h1>
              <h1>User</h1>
            </span>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 "
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="text-[18px] flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Job
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <div className="h-[120px] bg-blue-500 text-white items-center ">
        <div className="flex flex-row justify-between ">
          <span className="mt-[15px] ml-3 flex flex-row items-center gap-3">
            <img src={logo} alt="" className="left-2 mt-[5px]" />
            <span>
              <h1 className="font-bold text-xl">ASDM</h1>
              <h1 className="text-base">Job Portal</h1>
            </span>
          </span>
          <span className="mt-[35px] flex flex-row gap-5 text-lg">
            <h1>Home</h1>
            <h1>Jobs</h1>
          </span>
          <span className="mr-[250px] mt-[35px] flex flex-row gap-5 text-lg">
            <h1>Welcome</h1>
            <h1>User</h1>
          </span>
        </div>
      </div> */}
    </div>
  );
};

export default Header;
