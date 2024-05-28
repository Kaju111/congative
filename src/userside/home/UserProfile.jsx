import React, { useState } from 'react';
import user from "../../assets/user.jpg";
import Logo from "../../assets/tata.jpg";
import { useNavigate } from "react-router-dom";
const UserProfile = () => {
    const navigate = useNavigate();
    const [buttonColors, setButtonColors] = useState({
        hire: 'bg-blue-200',
        reject: 'bg-blue-200'
    });

    const [message, setMessage] = useState({
        hire: '',
        reject: ''
    });

    const handleHireClick = () => {
        setButtonColors({
            hire: 'bg-green-500',
            reject: 'bg-blue-200'
        });
        setMessage({
            hire: 'You have hired this candidate',
            reject: ''
        });
    };

    const handleRejectClick = () => {
        setButtonColors({
            hire: 'bg-blue-200',
            reject: 'bg-red-500'
        });
        setMessage({
            hire: '',
            reject: 'You have rejected this candidate'
        });
    };


    const handleSubmit = () => {
        navigate("/userhome");
    }

    return (
        <div>
            <div className='mt-[130px]'>
                <div className='flex justify-around items-center pb-5'>
                    <div className='items-center flex gap-2 border p-2 bg-gray-200 rounded-lg'>
                        <h1 className='font-semibold font-mono'>Search Candidate</h1>
                        <input placeholder='Search...' className='border-black border focus:outline-none rounded-md px-2' />
                    </div>
                    <div className=' items-center'>
                        <img src={Logo} alt="logo" width={120} />
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
            <div className='w-[90%] m-auto font-bold'>
                <h1>Highest Qualification: HSLC</h1>
                <h1>Are You trained From ASDM: No</h1>
            </div>
            <div>
                <div className='w-[90%] gap-6 m-auto items-center flex font-bold mt-5'>
                    <div>
                        <h1>Action</h1>
                    </div>

                    <div>
                        <button
                            onClick={handleHireClick}
                            className={`border mr-3 py-1 px-5 rounded-lg ${buttonColors.hire}`}
                        >
                            Hire
                        </button>
                        <button
                            onClick={handleRejectClick}
                            className={`border py-1 px-5 rounded-lg ${buttonColors.reject}`}
                        >
                            Reject
                        </button>
                    </div>
                    <div>
                        <h1 id='hire' className='text-blue-600'>{message.hire}</h1>
                        <h1 id='reject' className='text-red-600'>{message.reject}</h1>
                    </div>
                </div>
            </div>

            <div className='w-[90%] m-auto my-3'><input placeholder='Remark...' type="text" className=' p-3 border-2 border-black w-[100%] py-3 text-[20px]' /></div>
            <div className='w-[300px] m-auto'>
                <button className='py-1 px-5 rounded-lg bg-blue-400 font-bold mb-7' onClick={handleSubmit}>Submit Button</button>
            </div>
        </div>
    );
};

export default UserProfile;
