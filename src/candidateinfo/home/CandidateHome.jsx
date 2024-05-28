import React from 'react'

const CandidateHome = () => {
    return (
        <div>
            <div className='mt-[130px]'>
                <div className='flex w-[90%] m-auto pb-5'>
                    <div className='items-center flex gap-2 border p-2 bg-gray-200 rounded-lg'>
                        <h1 className='font-semibold font-mono'>Search Candidate</h1>
                        <input placeholder='Search...' className='border-black border focus:outline-none rounded-md px-2' />
                    </div>

                </div>
                <div className='flex justify-center items-center mt-4 gap-3 mb-2'>
                    <button className='bg-yellow-500 font-bold py-2 px-5 border-2 rounded-lg border-black'>Pending Candidate (5)</button>
                    <button className='bg-green-500 font-bold py-2 px-5 border-2 rounded-lg border-black'>Accepted Candidate (15)</button>
                    <button className='bg-blue-500 font-bold py-2 px-5 border-2 rounded-lg border-black'>Total Candidate (20)</button>
                </div>


                <div class="relative overflow-x-auto shadow-md w-[95%] m-auto mb-14">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs bg-black uppercase text-white">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Application ID
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Father Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Gender
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    DOB
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Qualification
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="odd:bg-white  even:bg-gray-200  border-b ">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    198484654
                                </th>
                                <td class="px-6 py-4">
                                    XYZ
                                </td>
                                <td class="px-6 py-4">
                                    XYZ
                                </td>
                                <td class="px-6 py-4">
                                    Male
                                </td>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    19-5-2024
                                </th>
                                <td class="px-6 py-4">
                                    HS
                                </td>
                                <td class="px-6 py-4">
                                    Pending
                                </td>
                                <td class="px-6 py-4">
                                    <a href="/candidateprofile" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                                </td>
                            </tr>

                            <tr class="odd:bg-white  even:bg-gray-200  border-b ">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    198484654
                                </th>
                                <td class="px-6 py-4">
                                    XYZ
                                </td>
                                <td class="px-6 py-4">
                                    XYZ
                                </td>
                                <td class="px-6 py-4">
                                    Male
                                </td>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    19-5-2024
                                </th>
                                <td class="px-6 py-4">
                                    HS
                                </td>
                                <td class="px-6 py-4">
                                    Pending
                                </td>
                                <td class="px-6 py-4">
                                    <a href="/candidateprofile" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                                </td>
                            </tr>
                            <tr class="odd:bg-white  even:bg-gray-200  border-b ">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    198484654
                                </th>
                                <td class="px-6 py-4">
                                    XYZ
                                </td>
                                <td class="px-6 py-4">
                                    XYZ
                                </td>
                                <td class="px-6 py-4">
                                    Male
                                </td>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    19-5-2024
                                </th>
                                <td class="px-6 py-4">
                                    HS
                                </td>
                                <td class="px-6 py-4">
                                    Pending
                                </td>
                                <td class="px-6 py-4">
                                    <a href="/candidateprofile" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                                </td>
                            </tr>
                            <tr class="odd:bg-white  even:bg-gray-200  border-b ">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    198484654
                                </th>
                                <td class="px-6 py-4">
                                    XYZ
                                </td>
                                <td class="px-6 py-4">
                                    XYZ
                                </td>
                                <td class="px-6 py-4">
                                    Male
                                </td>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    19-5-2024
                                </th>
                                <td class="px-6 py-4">
                                    HS
                                </td>
                                <td class="px-6 py-4">
                                    Pending
                                </td>
                                <td class="px-6 py-4">
                                    <a href="/candidateprofile" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                                </td>
                            </tr>




                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    )
}

export default CandidateHome
