import React, { useState } from 'react';
import user from "../../assets/user.jpg";
import { useNavigate } from "react-router-dom";

const CandidateProfile = () => {
    const [selectedCheckbox, setSelectedCheckbox] = useState(null);

    const handleCheckboxChange = (index) => {
        setSelectedCheckbox(index);
    };

    const interviews = [
        { id: 1, companyName: "XYZ", post: "XYZ", date: "19-5-2024" },
        { id: 2, companyName: "XYZ", post: "XYZ", date: "19-5-2024" },
        { id: 3, companyName: "XYZ", post: "XYZ", date: "19-5-2024" },
        { id: 4, companyName: "XYZ", post: "XYZ", date: "19-5-2024" },
    ];

    let navigate = useNavigate();
    const handleConfirem = () => {
        navigate("/candidateslip");
    }

    return (
        <div>
            <div className='mt-[130px]'>
                <div className='flex w-[90%] m-auto pb-5'>
                    <div className='items-center flex gap-2 border p-2 bg-gray-200 rounded-lg'>
                        <h1 className='font-semibold font-mono'>Search Candidate</h1>
                        <input placeholder='Search...' className='border-black border focus:outline-none rounded-md px-2' />
                    </div>
                </div>
            </div>
            <div className='w-[90%] m-auto border-2 border-gray-400 bg-gray-200 p-4 font-sans mb-10'>
                <h1 className='font-bold text-[20px] mb-9'>Candidate Details</h1>
                <div className='flex items-center'>
                    <div>
                        <img src={user} alt="user" width={120} />
                        <h1 className='font-bold mt-2'>AARATI PAWAR</h1>
                    </div>
                    <div className='w-[80%] m-auto'>
                        <h1 className='font-bold mt-2'>AARATI PAWAR</h1>
                        <h1>Application Number: 8845585659810</h1>
                        <div className='flex justify-between py-2'>
                            <h1>Caste: OBC</h1>
                            <h1>Gender: Female</h1>
                            <h1>Date Of Birth: 20/11/2000</h1>
                        </div>
                        <h1>Father Name: MACCHINDRA PAWAR</h1>
                    </div>
                </div>
            </div>
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
                                Post
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date of Interview
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
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
                                    {interview.date}
                                </td>
                                <td className="px-6 py-4 font-medium">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={selectedCheckbox === index}
                                            onChange={() => handleCheckboxChange(index)}
                                        />
                                        <div className={`relative w-11 h-6 ${selectedCheckbox === index ? 'bg-blue-600' : 'bg-gray-200'} peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600`}></div>
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='flex justify-center items-center mb-5'>
                <button className='border py-3 px-8 rounded-md text-[17px] bg-gray-300 font-bold' onClick={handleConfirem}>Confirem</button>
            </div>
        </div>
    )
}

export default CandidateProfile;
