import React from "react";

const Asdm = () => {
  return (
    <div className="h-[470px]">
      <div className="flex flex-col w-80 m-auto mt-14 rounded-lg shadow-lg justify-center items-center border border-gray-500 h-60">
        <h1 className="text-xl">Are you train from ASDM </h1>
        <div className="flex flex-row gap-4 mt-6">
          <a
            href="/home"
            className="font-normal border border-gray-400 py-2 px-3 rounded-md hover:bg-gray-300"
          >
            Yes
          </a>
          <a
            href="/"
            className="font-normal border border-gray-400 py-2 px-3 rounded-md hover:bg-gray-300"
          >
            No
          </a>
        </div>
      </div>
    </div>
  );
};

export default Asdm;
