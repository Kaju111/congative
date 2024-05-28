import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';
import Slider from '../admin/Slider';
import Navbar from '../admin/Navbar';

const Melaconfig = () => {
    let navigate = useNavigate();

    const [interviews, setInterviews] = useState([
        { id: 1, name: "XYZ", address: "XYZ", startDate: "07-06-2024", endDate: "12-06-2024", status: "Not Start", activities: false },
        { id: 2, name: "XYZ", address: "XYZ", startDate: "07-06-2024", endDate: "12-06-2024", status: "Not Start", activities: false },
        { id: 3, name: "XYZ", address: "XYZ", startDate: "07-06-2024", endDate: "12-06-2024", status: "Not Start", activities: false },
        { id: 4, name: "XYZ", address: "XYZ", startDate: "07-06-2024", endDate: "12-06-2024", status: "Not Start", activities: false },
    ]);

    const handleAdd = () => {
        navigate("/melaconfig/from");
    };

    const handleToggle = (id) => {
        setInterviews((prevInterviews) =>
            prevInterviews.map((interview) =>
                interview.id === id ? { ...interview, activities: !interview.activities } : interview
            )
        );
    };

    return (
        <div>
            <Navbar />
            <Slider />
            <div className="ml-64">
                <button onClick={handleAdd} className="flex items-center border gap-1 font-bold text-2xl rounded-xl bg-gray-200 py-1 px-5 ml-7 mt-10">
                    Add Mela <IoMdAdd />
                </button>
                <div className="flex justify-center">
                    <h1 className="uppercase font-bold text-4xl border-b-2 border-black mb-5">Mela Configuration</h1>
                </div>

                <div className="relative overflow-x-auto shadow-md w-[95%] m-auto mb-14">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs bg-black uppercase text-white">
                            <tr>
                                <th scope="col" className="px-6 py-3">SI no</th>
                                <th scope="col" className="px-6 py-3">Venue Name</th>
                                <th scope="col" className="px-6 py-3">Address</th>
                                <th scope="col" className="px-6 py-3">Start Date</th>
                                <th scope="col" className="px-6 py-3">End Date</th>
                                <th scope="col" className="px-6 py-3">Status</th>
                                <th scope="col" className="px-6 py-3">Activities</th>
                            </tr>
                        </thead>
                        <tbody>
                            {interviews.map((interview) => (
                                <tr key={interview.id} className="odd:bg-white even:bg-blue-50 border-b">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {interview.id}
                                    </th>
                                    <td className="px-6 py-4">{interview.name}</td>
                                    <td className="px-6 py-4 w-[200px]">{interview.address}</td>
                                    <td className="px-6 py-4">{interview.startDate}</td>
                                    <td className="px-6 py-4">{interview.endDate}</td>
                                    <td className="px-6 py-4">{interview.status}</td>
                                    <td className="px-6 py-4">
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input type="checkbox" checked={interview.activities} onChange={() => handleToggle(interview.id)} className="sr-only peer" />
                                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Melaconfig;
