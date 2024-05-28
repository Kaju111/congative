import React, { useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // Navigate to the home page regardless of the input value
    navigate("/asdmslip");
  }

  return (
    <div>
      <div className='h-full mt-[150px] mb-12'>
        <div className='bg-blue-500 h-[500px] w-full'>
          <div className='flex flex-col justify-center h-full items-center'>
            <h1 className='text-[37px] font-bold text-white'>Search Your Name</h1>
            <form onSubmit={handleSearch} className='flex flex-row bg-white w-[330px] items-center rounded-md h-[40px]'>
              <IoMdSearch className='bg-white h-[25px] w-[20px] ml-2 mt-1' />
              <input
                type="number"
                placeholder='Search...'
                className='block p-1'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                required
              />
              <button type="submit" className='ml-9 border py-1 px-3 bg-gray-200 rounded-lg hover:bg-gray-300'>Search</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search;
