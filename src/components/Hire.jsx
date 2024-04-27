import React from "react";

const Hire = () => {
  return (
    <div>
      <div className="flex flex-col w-80 m-auto mt-14 rounded-lg shadow-lg justify-center items-center border border-gray-500 h-60">
        <h1 className="text-xl">Final decision Reject/Hire </h1>
        <div className="flex flex-row gap-4 mt-6">
          <a
            href="/profile"
            className="font-normal border border-gray-400 py-2 px-3 rounded-md hover:bg-gray-300"
          >
            Reject
          </a>
          <a
            href="/slip"
            className="font-normal border border-gray-400 py-2 px-3 rounded-md hover:bg-gray-300"
          >
            Hire
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hire;
