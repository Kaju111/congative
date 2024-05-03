import React, { useState } from "react";
import Barcode from "react-barcode";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [qFormVisible, setQFormVisible] = useState(true);
  const [barcodeData, setBarcodeData] = useState(null);

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setQFormVisible(false);
  };

  const barSubmit = (e) => {
    e.preventDefault();
    navigate("/emplye");
  };

  const generateBarcode = () => {
    const data = {
      name: document.getElementById("name").value,
      fathername: document.getElementById("fathername").value,
      dob: document.getElementById("dob").value,
      address: document.getElementById("address").value,
      highQualification: document.getElementById("service").value,
      message: document.getElementById("message").value,
    };
    setBarcodeData(data);
    setQFormVisible(false);
  };

  return (
    <div className="container mx-auto px-4 h-screen">
      <form
        className={`max-w-md mx-auto mt-5 ${qFormVisible ? "" : "hidden"}`}
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium border text-slate-800 border-gray-500 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm border border-gray-500 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search User..."
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      {!qFormVisible && (
        <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
            New registration from
          </div>
          <form className="py-4 px-6" action="" method="POST">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Full name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name="name"
                placeholder="Enter your full name..."
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Father name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fathername"
                type="name"
                name="fathername"
                placeholder="Enter your full name..."
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="date"
                className="block text-gray-700 font-bold mb-2"
              >
                DOB
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="dob"
                type="date"
                name="dob"
                placeholder="Select a date"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 font-bold mb-2"
              >
                Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                type="tel"
                name="address"
                placeholder="Enter your address..."
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="service"
                className="block text-gray-700 font-bold mb-2"
              >
                High Qualification
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="service"
                name="highQualification"
              >
                <option value="">Select high qualification</option>
                <option value="H.S.L.C">H.S.L.C</option>
                <option value="H.S">H.S</option>
                <option value="DEGREE">DEGREE</option>
                <option value="OTHER">OTHER</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-2"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows="4"
                name="message"
                placeholder="Enter any additional information"
              ></textarea>
            </div>
            <div className="flex items-center justify-center mb-4">
              <button
                onClick={generateBarcode}
                className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                type="button"
              >
                Generate Barcode
              </button>
            </div>
          </form>
        </div>
      )}
      {barcodeData && (
        <div className="mt-10 max-w-lg mx-auto border border-gray-400 mb-3 overflow-auto p-7 rounded-md">
          <h2 className="text-lg font-bold mb-2">Qualification Slip</h2>
          <p className="mb-4 text-gray-700">
            Your qualification: {JSON.stringify(barcodeData)}
          </p>
          <div className="border border-gray-300 p-4 mb-5 shadow-md rounded-lg flex flex-col items-center">
            <p className="mb-4 text-gray-700">
              Scan the barcode below for your qualification:
            </p>
            <div className="text-center">
              <div className="barcode-container bg-gray-200 p-4 rounded-lg">
                <Barcode
                  value={JSON.stringify(barcodeData)}
                  width={0.23}
                  height={40}
                  fontSize={4}
                />
              </div>
            </div>
            <button
              onClick={barSubmit}
              className="bg-gray-900 mt-3 flex  text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
            >
              Submite
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
