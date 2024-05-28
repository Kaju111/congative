import React from 'react'
import Slider from '../admin/Slider'
import Navbar from '../admin/Navbar'
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Addcompany = () => {

    let navigate = useNavigate();

    const interviews = [
        { id: 1, companyName: "XYZ", post: "XYZ", qualification: "HS", job: "5" },
        { id: 2, companyName: "XYZ", post: "XYZ", qualification: "HS", job: "5" },
        { id: 3, companyName: "XYZ", post: "XYZ", qualification: "HS", job: "5" },
        { id: 4, companyName: "XYZ", post: "XYZ", qualification: "HS", job: "5" },
    ];

    const handleAdd = () => {
        navigate("/addcompany/from");
    }

    return (
        <div>
            <Navbar />
            <Slider />
            <div className='ml-64'>

                <button onClick={handleAdd} className='flex items-center border gap-1 font-bold text-[25px] rounded-xl bg-gray-200 py-1 px-5 ml-7 mt-10'>Add Company <IoMdAdd /></button>
                <section className=''>
                    <div className='flex justify-center'>
                        <h1 className='uppercase font-bold text-[40px] border-b-2 border-black mb-5'>vacancy table</h1>
                    </div>
                    <div>
                        <div className="relative overflow-x-auto shadow-md w-[95%] m-auto mb-14">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs bg-black uppercase text-white">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            SI no
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Company Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Post Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Qualification Required
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Available Job
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {interviews.map((interview, index) => (
                                        <tr key={interview.id} className="odd:bg-white even:bg-blue-50 border-b">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {interview.id}
                                            </th>
                                            <td className="px-6 py-4">
                                                {interview.companyName}
                                            </td>
                                            <td className="px-6 py-4">
                                                {interview.post}
                                            </td>
                                            <td className="px-6 py-4">
                                                {interview.qualification}
                                            </td>
                                            <td className="px-6 py-4">
                                                {interview.job}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Addcompany
