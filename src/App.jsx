import React from "react";
import Login from "./components/Login";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Forget from "./components/Forgot";
import Otp from "./components/Otp";
import Home from "./components/Home";
import Emplye from "./components/Emplye";
import Profile from "./components/Profile";
import Contect from "./components/Contect";
import Hire from "./components/Hire";
import Slip from "./components/Slip";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forgot" element={<Forget />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/emplye" element={<Emplye />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/contect" element={<Contect />} />
      <Route path="/hire" element={<Hire />} />
      <Route
        path="/slip"
        element={
          <Slip
            applicantName="John Doe"
            jobTitle="Software Engineer"
            companyName="ABC Inc."
            startDate="2024-05-01"
          />
        }
      />
    </Routes>
  );
};

export default App;
