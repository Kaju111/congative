import React from "react";
import logo from "../assets/vite.svg";

const Header = () => {
  return (
    <div>
      <div className="h-[120px] bg-blue-500 text-white items-center ">
        <div className="flex flex-row justify-between ">
          <span className="mt-[15px] flex flex-row items-center gap-3">
            <img src={logo} alt="" className="ml-[200px] mt-[5px]" />
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
      </div>
    </div>
  );
};

export default Header;
