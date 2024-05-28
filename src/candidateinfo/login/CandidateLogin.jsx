import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import logo from "../../assets/vite.svg"

const CandidateLogin = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    let navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can add your authentication logic
        console.log(
            "Form submitted with phone number:",
            phoneNumber,
            "and password:",
            password
        );
        navigate("/candidatehome");
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <div><div className=" w-full z-50 top-0">
                <nav className="bg-white w-full border-b border-gray-200 dark:border-gray-600">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
                            <span className="flex flex-row items-center gap-3">
                                <img src={logo} alt="" className="h-16 mt-[5px]" />
                                <span>
                                    <h1 className="font-bold text-xl text-blue-700">ASDM</h1>
                                    <h1 className="text-base font-normal">Job Mela</h1>
                                </span>
                            </span>
                        </span>
                    </div>
                </nav>
            </div></div>


            <section className="bg-gray-50  mt-0 md:-mt-[120px] ">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-white">
                                Login
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block mb-2 text-sm font-medium  dark:text-white"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Enter Your Phone Number"
                                        required
                                    />
                                </div>
                                <div className="relative">
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium dark:text-white"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter Your Password"
                                        className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg  block w-full p-2.5 pr-10   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 pt-7 right-0 flex items-center  pr-2 focus:outline-none"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? (
                                            <IoEyeOffOutline />

                                        ) : (
                                            <IoEyeOutline />

                                        )}
                                    </button>
                                </div>

                                <a
                                    href="/candidateforgot"
                                    className="text-sm font-medium hover:underline dark:text-primary-500 text-blue-600"
                                >
                                    forgot password?
                                </a>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-blue-600  bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CandidateLogin;
