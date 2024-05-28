import React from 'react';
import Navbar from '../admin/Navbar';
import Slider from '../admin/Slider';

const CompanyForm = () => {
    return (
        <div>
            <Navbar />
            <Slider />
            <div className="max-w-3xl mx-auto mt-10">
                <h1 className="text-center border-b-2 pb-2 border-black font-bold text-4xl">Add Your Company</h1>
                <div className="bg-white border-4 rounded-lg shadow relative mt-10">
                    <div className="flex items-start justify-between p-5 border-b rounded-t">
                        <h3 className="text-xl font-semibold">
                            Company Details
                        </h3>
                    </div>
                    <div className="p-6 space-y-6">
                        <form action="#">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="col-span-1">
                                    <label htmlFor="company-name" className="text-sm font-medium text-gray-900 block mb-2">Company Name</label>
                                    <input type="text" name="company-name" id="company-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Enter Company Name..." required />
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="registration-number" className="text-sm font-medium text-gray-900 block mb-2">Company Registration Number</label>
                                    <input type="text" name="registration-number" id="registration-number" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Enter Register Number..." required />
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="contact-number" className="text-sm font-medium text-gray-900 block mb-2">Contact Number</label>
                                    <input type="number" name="contact-number" id="contact-number" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Enter Contact Number..." required />
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2">Email</label>
                                    <input type="text" name="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Enter Email..." required />
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="address" className="text-sm font-medium text-gray-900 block mb-2">Full Address</label>
                                    <textarea id="address" rows="4" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Enter Full Address..."></textarea>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="p-6 border-t border-gray-200 rounded-b flex justify-center">
                        <button className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Submit all</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompanyForm;
