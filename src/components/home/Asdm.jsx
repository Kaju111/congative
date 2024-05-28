import React, { useEffect, useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Asdm = () => {

    const [searchValue, setSearchValue] = useState("");
    const [selectedOption, setSelectedOption] = useState("no");

    const navigate = useNavigate();

    useEffect(() => {
        // This effect will run only once when the component mounts
        handleOptionChange({ target: { value: "no" } }); // Simulate a change event to set the initial value to "no"
        const savedOption = localStorage.getItem('selectedOption');
        if (savedOption) {
            setSelectedOption(savedOption);
        } else {
            // If no option is saved in local storage, default to "no"
            setSelectedOption("no");
        }
    }, []); // Empty dependency array to run the effect only once



    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
        localStorage.setItem('selectedOption', e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // Navigate to the home page regardless of the input value
        navigate("/asdmslip");
    }


    const [barcodeData, setBarcodeData] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [validationError, setValidationError] = useState(false);

    const saveFormDataToLocalStorage = (data) => {
        localStorage.setItem('formData', JSON.stringify(data));
    };

    const handleBarcode = () => {
        // Retrieve form data
        const name = document.getElementById('name').value;
        const fatherName = document.getElementById('fathername').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const qualification = document.getElementById('qualification').value;
        const dateofbirth = document.getElementById('dateofbirth').value;
        const area = document.getElementById('area').value;
        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;
        const postcode = document.getElementById('postcode').value;

        // Check if any required field is empty
        if (!name || !fatherName || !phone || !email || !qualification || !dateofbirth || !area || !city || !state || !postcode) {
            setValidationError(true);
            return;
        }

        // Form is valid, generate barcode
        const data = { name, fatherName, phone, email, qualification, dateofbirth, area, city, state, postcode };
        setBarcodeData(data);
        setFormSubmitted(true);
        setValidationError(false);

        // Save form data to local storage
        saveFormDataToLocalStorage(data);
        navigate("/barcode");
    };



    return (
        <div className="h-full">
            <div className=''>
                <div className="mt-6 flex justify-center font-bold items-center text-[19px] ">Are you trained from ASDM
                    <ul class="grid gap-2 md:grid-cols-2" value={selectedOption} onChange={handleOptionChange}>
                        <li>
                            <input type="radio" id="hosting-small" name="hosting" value="yes" className="hidden peer " required />
                            <label for="hosting-small" className="inline-flex items-center justify-between p-1 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div className=" text-lg font-semibold">Yes</div>
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="hosting-big" name="hosting" value="no" className="hidden peer" />
                            <label for="hosting-big" className="inline-flex items-center justify-between p-1 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div className=" text-lg font-semibold">No</div>
                            </label>
                        </li>
                    </ul>
                </div>

                {selectedOption === "yes" && (<div id="search" className='h-full mb-12'>
                    <div>
                        <div className='flex flex-col mt-[50px] justify-center h-full items-center '>
                            <h1 className='font-bold '>Search Your Register Mobile Number</h1>
                            <form onSubmit={handleSearch} className='flex flex-row bg-white w-[330px] border border-gray-500 items-center rounded-md h-[40px]'>
                                <IoMdSearch className='bg-white h-[25px] w-[20px] ml-2 mt-1' />
                                <input
                                    type="search"
                                    placeholder='Search...'
                                    className='block p-1 '
                                    value={searchValue}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                    required
                                />
                                <button type="submit" className='ml-9 border py-1 px-3 bg-gray-200 rounded-lg hover:bg-gray-300'>Search</button>
                            </form>
                        </div>
                    </div>
                </div>)}
            </div>
            {selectedOption === "no" && (<div id="slip" className=' h-full'>
                <div className="flex items-center justify-center p-12">
                    <div className="mx-auto w-full max-w-[550px] bg-white">
                        <div className='font-bold text-[24px] mb-2 w-[200px] border-b border-black m-auto'>Registration form</div>
                        <form>
                            <div className="mb-5">
                                <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                                    Full Name
                                </label>
                                <input type="text" name="name" id="name" placeholder="Full Name"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="fathername" className="mb-3 block text-base font-medium text-[#07074D]">
                                    Father Name
                                </label>
                                <input type="text" name="fathername" id="fathername" placeholder="Father Name"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                                    Contect Number
                                </label>
                                <input type="number" name="phone" id="phone" placeholder="Enter your phone number"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                                    Email Address
                                </label>
                                <input type="email" name="email" id="email" placeholder="Enter your email"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" for="service">
                                    Higher Qualification
                                </label>
                                <select
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="qualification" name="qualification">
                                    <option value="">Select Qualification</option>
                                    <option value="viii">VIII</option>
                                    <option value="hslc">HSLC</option>
                                    <option value="hs">HS</option>
                                    <option value="bachelor">Bachelor</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="-mx-3 flex flex-wrap">

                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <label htmlFor="dateofbirth" className="mb-3 block text-base font-medium text-[#07074D]">
                                            Date Of Birth
                                        </label>
                                        <input type="date" name="dateofbirth" id="dateofbirth"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                    </div>
                                </div>
                            </div>

                            <div className="mb-5 pt-3">
                                <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                                    Address Details
                                </label>
                                <div className="-mx-3 flex flex-wrap">
                                    <div className="w-full px-3 sm:w-1/2">
                                        <label htmlFor="area" className="mb-3 block text-base font-medium text-[#07074D]">
                                            Enter Area
                                        </label>
                                        <div className="mb-5">
                                            <input type="text" name="area" id="area" placeholder="Enter area"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                        </div>
                                    </div>
                                    <div className="w-full px-3 sm:w-1/2">
                                        <label htmlFor="city" className="mb-3 block text-base font-medium text-[#07074D]">
                                            Enter City
                                        </label>
                                        <div className="mb-5">
                                            <input type="text" name="city" id="city" placeholder="Enter city"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                        </div>
                                    </div>
                                    <div className="w-full px-3 sm:w-1/2">
                                        <label htmlFor="state" className="mb-3 block text-base font-medium text-[#07074D]">
                                            State
                                        </label>
                                        <div className="mb-5">
                                            <input type="text" name="state" id="state" placeholder="Enter state"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                        </div>
                                    </div>
                                    <div className="w-full px-3 sm:w-1/2">
                                        <label htmlFor="postcode" className="mb-3 block text-base font-medium text-[#07074D]">
                                            Pin Code
                                        </label>
                                        <div className="mb-5">
                                            <input type="number" name="postcode" id="postcode" placeholder="Post Code"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                {validationError && <p className='text-red-500'>All fields are required.</p>}
                                <button onClick={handleBarcode} type='button'
                                    className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            )}


        </div>
    );
};

export default Asdm;
