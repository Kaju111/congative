import React from 'react';
import { FaHome, FaBuilding } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { VscReport } from 'react-icons/vsc';

const Slider = () => {
    return (
        <div className="w-64 bg-gray-800 fixed h-full px-4 py-2">
            <ul className="mt-3 text-white font-bold">
                <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                    <a href="/adminhome">
                        <MdDashboard className="inline-block w-6 h-6 mr-2 -mt-1" />
                        Dashboard
                    </a>
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                    <a href="/addcompany">
                        <FaBuilding className="inline-block w-6 h-6 mr-2 -mt-1" />
                        Add Company
                    </a>
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                    <a href="/melaconfig">
                        <FaHome className="inline-block w-6 h-6 mr-2 -mt-1" />
                        Mela Configuration
                    </a>
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                    <a href="/report">
                        <VscReport className="inline-block w-6 h-6 mr-2 -mt-1" />
                        Report
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Slider;
