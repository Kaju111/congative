import React, { useEffect, useState } from 'react';
import barCode from "../../assets/bar.png";
import { LuDownload } from "react-icons/lu";
import { usePDF } from 'react-to-pdf';

const Barcode = () => {
  const [formData, setFormData] = useState(null);
  const [candidateID, setCandidateID] = useState('');
  const [isTrainedFromASDM, setIsTrainedFromASDM] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
      generateCandidateID(JSON.parse(storedData));
    }

    const storedOption = localStorage.getItem('selectedOption'); // Retrieve the selected option from local storage
    setIsTrainedFromASDM(storedOption === 'yes'); // Set state based on the stored option
  }, []);

  // Function to generate a unique candidate ID
  const generateCandidateID = (formData) => {
    const baseID = '20110000'; // Base ID for candidate
    const timestamp = new Date().getTime(); // Timestamp for uniqueness
    const newCandidateID = baseID + timestamp;
    setCandidateID(newCandidateID);
  };

  const { toPDF, targetRef } = usePDF({ filename: 'file.pdf' });

  // Function to handle the PDF download
  const handleDownload = () => {
    toPDF()
  };

  return (
    <div >
      <div id='barcode-content'>

        <div ref={targetRef}>
          {formData && (
            <div className='w-[400px] md:w-[940px] m-auto h-full mb-10'>
              <h1 className='font-bold flex justify-center mt-12 text-[18px]'>Interview Registration Slip </h1>
              <div className='flex justify-between mt-5'>
                <p>Venue: ASDM, Guwahati, Assam</p>
                <p>Date: 15/8/2024</p>
              </div>
              <div className='border-2 border-black p-4 mt-4'>
                <span className='flex justify-center font-bold border-b-2 pb-2 border-black'>Personal Details </span>
                <div className='flex justify-between'>
                  <h1 className='mt-2'>Candidate ID: {candidateID}</h1>
                  <h1 className=''><img src={barCode} alt="" className='h-[50px] w-[120px]' /></h1>
                </div>
                <h1> Name: {formData.name}</h1>
                <h1 className='my-2'>Father Name: {formData.fatherName}</h1>
                <h1>Date Of Birth: {formData.dateofbirth}</h1>
                <h1 className='my-2'>Contact Number: {formData.phone}</h1>
                <h1 className='flex justify-end'>Email ID:  {formData.email}</h1>
              </div>
              <p className='my-2'>Qualification: {formData.qualification}</p>
              <p>Are you trained from ASDM:  {isTrainedFromASDM ? 'Yes' : 'No'}</p>
            </div>
          )}

          <div className='w-[400px] md:w-[940px] m-auto'>
            <h1 className='mt-5 font-bold flex justify-end my-3'>Candidate Signature</h1>
            <div>
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-20 border-2 border-black">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        SI. No
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Eligible Post
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Company
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Vacancy
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Qualification Required
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Employer Signature
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        1.
                      </th>
                      <td className="px-6 py-4">
                        Developer
                      </td>
                      <td className="px-6 py-4">
                        XYZ company
                      </td>
                      <td className="px-6 py-4">
                        29
                      </td>
                      <td className="px-6 py-4">
                        HS
                      </td>
                    </tr>
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        2
                      </th>
                      <td className="px-6 py-4">

                      </td>
                      <td className="px-6 py-4">

                      </td>
                      <td className="px-6 py-4">

                      </td>
                    </tr>
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        3
                      </th>
                      <td className="px-6 py-4">

                      </td>
                      <td className="px-6 py-4">

                      </td>
                      <td className="px-6 py-4">

                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[400px] md:w-[940px] flex justify-center m-auto'>
          <button onClick={handleDownload} className='flex mb-9  bg-blue-600 text-white font-bold py-2 px-4 rounded-lg gap-2 items-center'>Download <LuDownload />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Barcode;
