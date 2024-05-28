import React from 'react';
import { FaBars, FaSearch, FaUserCircle } from 'react-icons/fa';
import Logo from '../../assets/vite.svg';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 px-4 py-3">
            <div className="flex justify-between">
                <div className="flex">
                    <div className="flex items-center gap-2">
                        <img src={Logo} alt="Company Logo" />
                        <div className="text-white">
                            <h1 className="font-bold text-[21px]">ASDM</h1>
                            <h1>Job Mela</h1>
                        </div>
                    </div>
                    <div className="flex ml-24 items-center text-xl">
                        <FaBars className="text-white mr-4 cursor-pointer" />
                        <span className="text-white font-semibold">Admin Login</span>
                    </div>
                </div>
                <div className="flex items-center gap-x-5">
                    <div className="relative md:w-64">
                        <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-2">
                            <button className="p-1 focus:outline-none text-white md:text-black">
                                <FaSearch />
                            </button>
                        </span>
                        <input
                            type="text"
                            className="w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block"
                        />
                    </div>
                    <div className="relative">
                        <button className="text-white group">
                            <FaUserCircle className="w-6 h-6 mt-1" />
                            <div className="z-10 hidden absolute bg-white rounded-lg shadow w-32 group-focus:block top-full right-0">
                                <ul className="py-2 text-sm text-gray-900">
                                    <li><a href="/">Profile</a></li>
                                    <li><a href="/">Settings</a></li>
                                    <li><a href="/">Log Out</a></li>
                                </ul>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
