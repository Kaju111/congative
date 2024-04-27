import React from "react";

const Slip = ({ applicantName, jobTitle, companyName, startDate }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
          Job Acceptance Slip
        </div>
        <div className="py-4 px-6">
          <div className="mb-4">
            <label
              htmlFor="applicantName"
              className="block text-gray-700 font-bold mb-2"
            >
              Applicant Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="applicantName"
              type="text"
              value={applicantName}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="jobTitle"
              className="block text-gray-700 font-bold mb-2"
            >
              Job Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="jobTitle"
              type="text"
              value={jobTitle}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="companyName"
              className="block text-gray-700 font-bold mb-2"
            >
              Company Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="companyName"
              type="text"
              value={companyName}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="startDate"
              className="block text-gray-700 font-bold mb-2"
            >
              Start Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="startDate"
              type="text"
              value={startDate}
              readOnly
            />
          </div>
          <div className="flex items-center justify-center mb-4">
            <button
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:shadow-outline"
              onClick={() => window.print()}
            >
              Print
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slip;
