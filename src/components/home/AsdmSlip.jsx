import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";

const AsdmSlip = () => {
    const navigate = useNavigate();
    const [barcodeData, setBarcodeData] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [validationError, setValidationError] = useState(false);

    // Function to retrieve form data from local storage
    const getFormDataFromLocalStorage = () => {
        const formData = localStorage.getItem('formData');
        if (formData) {
            return JSON.parse(formData);
        }
        return null;
    };

    // Populate input fields with form data from local storage when component mounts
    useEffect(() => {
        const formData = getFormDataFromLocalStorage();
        if (formData) {
            document.getElementById('name').value = formData.name;
            document.getElementById('fathername').value = formData.fatherName;
            document.getElementById('phone').value = formData.phone;
            document.getElementById('email').value = formData.email;
            document.getElementById('qualification').value = formData.qualification;
            document.getElementById('dateofbirth').value = formData.dateofbirth;
            document.getElementById('area').value = formData.area;
            document.getElementById('city').value = formData.city;
            document.getElementById('state').value = formData.state;
            document.getElementById('postcode').value = formData.postcode;
        }
    }, []);

    // Function to save form data to local storage
    const saveFormDataToLocalStorage = (data) => {
        localStorage.setItem('formData', JSON.stringify(data));
    };

    // Function to handle barcode generation
    const handleBarcode = () => {
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

        const data = { name, fatherName, phone, email, qualification, dateofbirth, area, city, state, postcode };
        setBarcodeData(data);
        setFormSubmitted(true);
        setValidationError(false);

        saveFormDataToLocalStorage(data);
        navigate("/barcode");
    };

    return (
        <div>
            <div>
                <div className='mt-[25px] h-full'>
                    <div className="flex items-center justify-center p-12">
                        <div className="mx-auto w-full max-w-[550px] bg-white">
                            <div className='font-bold text-[24px] mb-2 w-[200px] border-b border-black m-auto'>Registration form</div>
                            <form>
                                <h1 className="text-blue-600">Register ID: 845874654</h1>
                                <div className="mb-5 ">
                                    <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                                        Full Name
                                    </label>
                                    <div className='flex '>
                                        <input type="text" name="name" id="name" placeholder="Full Name"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                        <FaRegEdit />
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="fathername" className="mb-3 block text-base font-medium text-[#07074D]">
                                        Father Name
                                    </label>
                                    <div className='flex'>
                                        <input type="text" name="fathername" id="fathername" placeholder="Father Name"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                        <FaRegEdit />
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                                        Contect Number
                                    </label>
                                    <div className='flex'>
                                        <input type="number" name="phone" id="phone" placeholder="Enter your phone number"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                        <FaRegEdit />
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                                        Email Address
                                    </label>
                                    <div className='flex'>
                                        <input type="email" name="email" id="email" placeholder="Enter your email"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                        <FaRegEdit />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-bold mb-2" for="service">
                                        High Qualification
                                    </label>
                                    <div className='flex'>
                                        <select
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="qualification" name="qualification">
                                            <option value="">Select Qualification</option>
                                            <option value="VIII">VIII</option>
                                            <option value="hSLC">HSLC</option>
                                            <option value="HS">HS</option>
                                            <option value="BACHELOR">Degree</option>
                                            <option value="OTHER">Other</option>
                                        </select>
                                        <FaRegEdit />
                                    </div>
                                </div>
                                <div className="-mx-3 flex flex-wrap">
                                    <div className="w-full px-3 sm:w-1/2">
                                        <div className="mb-5">
                                            <label htmlFor="dateofbirth" className="mb-3 block text-base font-medium text-[#07074D]">
                                                Date Of Birth
                                            </label>
                                            <div className='flex'>
                                                <input type="date" name="dateofbirth" id="dateofbirth"
                                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                                <FaRegEdit />
                                            </div>
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
                                            <div className="mb-5 flex">
                                                <input type="text" name="area" id="area" placeholder="Enter area"
                                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                                <FaRegEdit />
                                            </div>
                                        </div>
                                        <div className="w-full px-3 sm:w-1/2">
                                            <label htmlFor="city" className="mb-3 block text-base font-medium text-[#07074D]">
                                                Enter City
                                            </label>
                                            <div className="mb-5 flex">
                                                <input type="text" name="city" id="city" placeholder="Enter city"
                                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                                <FaRegEdit />
                                            </div>
                                        </div>
                                        <div className="w-full px-3 sm:w-1/2">
                                            <label htmlFor="state" className="mb-3 block text-base font-medium text-[#07074D]">
                                                State
                                            </label>
                                            <div className="mb-5 flex">
                                                <input type="text" name="state" id="state" placeholder="Enter state"
                                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                                <FaRegEdit />
                                            </div>
                                        </div>
                                        <div className="w-full px-3 sm:w-1/2">
                                            <label htmlFor="postcode" className="mb-3 block text-base font-medium text-[#07074D]">
                                                Pin Code
                                            </label>
                                            <div className="mb-5 flex">
                                                <input type="number" name="postcode" id="postcode" placeholder="Post Code"
                                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                                <FaRegEdit />
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

            </div>
        </div>
    )
}

export default AsdmSlip
