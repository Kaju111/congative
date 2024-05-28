import React, { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Forgot = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add your logic to handle the forgot password request
    if (isValidPhoneNumber(phoneNumber)) {
      // Phone number is valid, proceed to send OTP
      console.log(
        "Forgot password form submitted with phone number:",
        phoneNumber
      );
      navigate("/otp");
    } else {
      // Phone number is not valid or registered
      setErrorMessage("Mobile number is not valid or not registered.");
    }
  };

  // Function to check if the phone number is valid (you can customize this logic)
  const isValidPhoneNumber = (number) => {
    // Example validation: Check if the number is 10 digits long
    return /^\d{10}$/.test(number);
  };

  return (
    <div>
      <section className="bg-gray-50  h-screen">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Forgot Password
            </h2>
            <form
              className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="number"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Phone Number
                </label>
                <input
                  type="number" // Change to tel type for better mobile support
                  name="phone"
                  id="number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              {errorMessage && (
                <p className="text-red-500 text-sm">{errorMessage}</p>
              )}
              <a
                href="/"
                className="text-gray-400 flex items-center cursor-pointer"
              >
                <span>
                  <IoMdArrowBack />
                </span>
                <h1>Back</h1>
              </a>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Send OTP
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Forgot;
