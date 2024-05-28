import React, { useState } from 'react';
import Navbar from './Navbar';
import Slider from './Slider';

const AdminHome = () => {
    const [currentTable, setCurrentTable] = useState('company'); // State to track currently displayed table

    const company = [
        { id: 1, companyName: "XYZ", post: "9894741", date: "87456xxxxx", email: "xyz@gmail.com" },
        { id: 2, companyName: "XYZ", post: "9894741", date: "87456xxxxx", email: "xyz@gmail.com" },
        { id: 3, companyName: "XYZ", post: "9894741", date: "87456xxxxx", email: "xyz@gmail.com" },
        { id: 4, companyName: "XYZ", post: "9894741", date: "87456xxxxx", email: "xyz@gmail.com" },
    ];

    const candidate = [
        { id: 1, name: "XYZ", post: "9894741", date: "87456xxxxx", email: "xyz@gmail.com" },
        { id: 2, name: "XYZ", post: "9894741", date: "87456xxxxx", email: "xyz@gmail.com" },
        { id: 3, name: "XYZ", post: "9894741", date: "87456xxxxx", email: "xyz@gmail.com" },
        { id: 4, name: "XYZ", post: "9894741", date: "87456xxxxx", email: "xyz@gmail.com" },
    ];

    const hired = [
        { id: 1, name: "XYZ", post: "9894741", date: "87456xxxxx", email: "xyz@gmail.com" },
        { id: 2, name: "XYZ", post: "9894741", date: "87456xxxxx", email: "xyz@gmail.com" },
        { id: 3, name: "XYZ", post: "9894741", date: "87456xxxxx", email: "xyz@gmail.com" },
        { id: 4, name: "XYZ", post: "9894741", date: "87456xxxxx", email: "xyz@gmail.com" },
    ];

    const notPlaced = [
        { id: 1, name: "XYZ", post: "9894741", date: "87456xxxxx", email: "xyz@gmail.com" },
        { id: 2, name: "XYZ", post: "9894741", date: "87456xxxxx", email: "xyz@gmail.com" },
        { id: 3, name: "XYZ", post: "9894741", date: "87456xxxxx", email: "xyz@gmail.com" },
        { id: 4, name: "XYZ", post: "9894741", date: "87456xxxxx", email: "xyz@gmail.com" },
    ];

    const handleButtonClick = (table) => {
        setCurrentTable(table); // Set the current table based on button click
    };

    return (
        <div>
            <Navbar />
            <Slider />
            <div className="ml-64">
                <section className="flex justify-between mt-10 mx-7 font-serif">
                    <div className="flex flex-col h-[180px] w-[250px] rounded shadow-xl text-center text-[24px] pt-4 border-2 bg-slate-100">
                        Total company registered
                        <button id='company-register' className="text-[36px] font-extrabold font-mono" onClick={() => handleButtonClick('company')}>
                            25
                        </button>
                    </div>
                    <div className="flex flex-col shadow-xl text-center text-[24px] pt-4 border-2 bg-slate-100 h-[180px] w-[250px] rounded">
                        Total candidates registered
                        <button id='candidate-register' className="text-[36px] font-extrabold font-mono" onClick={() => handleButtonClick('candidate')}>
                            45
                        </button>
                    </div>
                    <div className="flex flex-col shadow-xl text-center text-[24px] pt-4 border-2 bg-slate-100 h-[180px] w-[250px] rounded">
                        Total candidates hired
                        <button id='candidate-hired' className="text-[36px] font-extrabold font-mono" onClick={() => handleButtonClick('hired')}>
                            25
                        </button>
                    </div>
                    <div className="flex flex-col shadow-xl text-center text-[24px] pt-4 border-2 bg-slate-100 h-[180px] w-[250px] rounded">
                        Total candidates not placed
                        <button id='candidate-notplace' className="text-[36px] font-extrabold font-mono" onClick={() => handleButtonClick('notPlaced')}>
                            20
                        </button>
                    </div>
                </section>

                {/* Conditional rendering based on currentTable state */}
                {currentTable === 'company' && <SectionTable title="Registered Company List" data={company} columns={['SI no', 'Company Name', 'Registration Number', 'Phone Number', 'Email']} />}
                {currentTable === 'candidate' && <SectionTable title="Registered Candidates List" data={candidate} columns={['SI no', 'Name', 'Registration Number', 'Phone Number', 'Email']} />}
                {currentTable === 'hired' && <SectionTable title="Hired Candidate List" data={hired} columns={['SI no', 'Name', 'Registration Number', 'Phone Number', 'Email']} />}
                {currentTable === 'notPlaced' && <SectionTable title="Not Placed Candidate List" data={notPlaced} columns={['SI no', 'Name', 'Registration Number', 'Phone Number', 'Email']} />}
            </div>
        </div>
    );
}

const SectionTable = ({ title, data, columns }) => (
    <section>
        <div className="relative overflow-x-auto shadow-md w-[95%] m-auto mb-14">
            <h1 className="border border-black mt-9 text-[19px] font-bold">{title}</h1>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs bg-black uppercase text-white">
                    <tr>
                        {columns.map((col, index) => (
                            <th key={index} scope="col" className="px-6 py-3">
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map(({ id, ...rest }, index) => (
                        <tr key={id} className="odd:bg-white even:bg-blue-50 border-b">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {id}
                            </th>
                            {Object.values(rest).map((value, index) => (
                                <td key={index} className="px-6 py-4">
                                    {value}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </section>
);

export default AdminHome;
