import React from 'react'
import Navbar from '../admin/Navbar'
import Slider from '../admin/Slider'

const MelaForm = () => {
    return (
        <div>
            <Navbar />
            <Slider />
            <div className="max-w-3xl mx-auto mt-10">
                <h1 className="text-center border-b-2 pb-2 border-black font-bold text-4xl">Add Mela</h1>
                <div className="bg-white border-4 rounded-lg shadow relative mt-10">
                    <div className="flex items-start justify-between p-5 border-b rounded-t">
                        <h3 className="text-xl font-semibold">
                            Mela Details
                        </h3>
                    </div>
                    <div className="p-6 space-y-6">
                        <form action="#">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="col-span-1">
                                    <label htmlFor="venue-name" className="text-sm font-medium text-gray-900 block mb-2">Venue Name</label>
                                    <input type="text" name="venue-name" id="venue-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Enter Venue Name..." required />
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="address" className="text-sm font-medium text-gray-900 block mb-2">Address</label>
                                    <input type="text" name="address" id="address" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Enter Adress..." required />
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="start-date" className="text-sm font-medium text-gray-900 block mb-2">Start Date</label>
                                    <input type="number" name="start-date" id="start-date" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Enter Start Date..." required />
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="end-date" className="text-sm font-medium text-gray-900 block mb-2">End date</label>
                                    <input type="number" name="end-date" id="end-date" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Enter End Date..." required />
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
    )
}

export default MelaForm
