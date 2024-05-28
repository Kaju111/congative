import React from 'react'
import Logo from "../../assets/tata.jpg"

const UserHome = () => {
    return (
        <div>
            <div className='mt-[130px]'>
                <div className='flex justify-around items-center pb-3'>
                    <div className='items-center flex gap-2 border p-2 bg-gray-200 rounded-lg'>
                        <h1 className='font-semibold font-mono'>Search Candidate</h1>
                        <input placeholder='Search...' className='border-black border focus:outline-none rounded-md px-2' />
                    </div>
                    <div className=' items-center'>
                        <img src={Logo} alt="logo" width={120} />
                    </div>
                </div>
                <div className='flex justify-center items-center mt-4 gap-3 mb-2'>
                    <button className='bg-yellow-500 font-bold py-2 px-5 border-2 rounded-lg border-black'>Pending Candidate (8)</button>
                    <button className='bg-green-500 font-bold py-2 px-5 border-2 rounded-lg border-black'>Hired (5)</button>
                    <button className='bg-red-500 font-bold py-2 px-5 border-2 rounded-lg border-black'>Reject (2)</button>
                    <button className='bg-blue-500 font-bold py-2 px-5 border-2 rounded-lg border-black'>Total Candidate (15)</button>
                </div>
                <div>


                    <div class="relative overflow-x-auto shadow-md w-[95%] m-auto mb-14">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs bg-black uppercase text-white">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        SI No
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Father Name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        contect No
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Qualification
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Date of Registration
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Registration Type
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Date Of Interview
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="odd:bg-white  even:bg-gray-200  border-b ">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        1
                                    </th>
                                    <td class="px-6 py-4">
                                        XYZ
                                    </td>
                                    <td class="px-6 py-4">
                                        XYZ
                                    </td>
                                    <td class="px-6 py-4">
                                        8457848424
                                    </td>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        HS
                                    </th>
                                    <td class="px-6 py-4">
                                        19-5-2024
                                    </td>
                                    <td class="px-6 py-4">
                                        Trained
                                    </td>
                                    <td class="px-6 py-4">
                                        Pending
                                    </td>
                                    <td class="px-6 py-4">
                                        17-08-2024
                                    </td>

                                    <td class="px-6 py-4">
                                        <a href="/userprofile" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                                    </td>
                                </tr>
                                <tr class="odd:bg-white  even:bg-gray-200  border-b ">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        2
                                    </th>
                                    <td class="px-6 py-4">
                                        XYZ
                                    </td>
                                    <td class="px-6 py-4">
                                        XYZ
                                    </td>
                                    <td class="px-6 py-4">
                                        8457848424
                                    </td>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        HS
                                    </th>
                                    <td class="px-6 py-4">
                                        19-5-2024
                                    </td>
                                    <td class="px-6 py-4">
                                        Trained
                                    </td>
                                    <td class="px-6 py-4">
                                        Pending
                                    </td>
                                    <td class="px-6 py-4">
                                        17-08-2024
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="/userprofile" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                                    </td>
                                </tr>
                                <tr class="odd:bg-white  even:bg-gray-200  border-b ">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        3
                                    </th>
                                    <td class="px-6 py-4">
                                        XYZ
                                    </td>
                                    <td class="px-6 py-4">
                                        XYZ
                                    </td>
                                    <td class="px-6 py-4">
                                        8457848424
                                    </td>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        HS
                                    </th>
                                    <td class="px-6 py-4">
                                        19-5-2024
                                    </td>
                                    <td class="px-6 py-4">
                                        Trained
                                    </td>
                                    <td class="px-6 py-4">
                                        Pending
                                    </td>
                                    <td class="px-6 py-4">
                                        17-08-2024
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="/userprofile" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                                    </td>
                                </tr>
                                <tr class="odd:bg-white  even:bg-gray-200  border-b ">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        4
                                    </th>
                                    <td class="px-6 py-4">
                                    </td>
                                    <td class="px-6 py-4">
                                    </td>
                                    <td class="px-6 py-4">
                                    </td>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    </th>
                                    <td class="px-6 py-4">
                                    </td>
                                    <td class="px-6 py-4">
                                    </td>
                                    <td class="px-6 py-4">
                                    </td>
                                    <td class="px-6 py-4">
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                                    </td>
                                </tr>
                                <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        5
                                    </th>
                                    <td class="px-6 py-4">
                                    </td>
                                    <td class="px-6 py-4">
                                    </td>
                                    <td class="px-6 py-4">
                                    </td>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    </th>
                                    <td class="px-6 py-4">
                                    </td>
                                    <td class="px-6 py-4">
                                    </td>
                                    <td class="px-6 py-4">
                                    </td>
                                    <td class="px-6 py-4">
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="/userprofile" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UserHome
