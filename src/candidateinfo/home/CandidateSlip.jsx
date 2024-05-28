import React from 'react'
import user from "../../assets/user.jpg"

const CandidateSlip = () => {
    return (
        <div>
            <div className='mt-[130px]'>
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
                                    Company Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Post
                                </th>

                                <th scope="col" className="px-6 py-3">
                                    Date of Interview
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr className="odd:bg-white even:bg-blue-50 border-b">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    xyz
                                </th>
                                <td className="px-6 py-4">
                                    xyz
                                </td>
                                <td className="px-6 py-4">
                                    20-05-2024
                                </td>
                                <td className="px-6 py-4">
                                    Accepeted
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>


                <div className='flex justify-between py-7 font-bold text-[18px] w-[80%] m-auto'>
                    <div>Authorized Signature </div>
                    <div>Candidate signature</div>
                </div>

            </div>
        </div>
    )
}

export default CandidateSlip
