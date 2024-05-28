import React from "react";
import Login from "./components/login/Login";
import { Route, Routes, useLocation } from "react-router-dom";
import Forgot from "./components/login/Forgot";
import Otp from "./components/login/Otp";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import Barcode from "./components/home/Barcode";
import Asdm from "./components/home/Asdm"
import Search from "./components/home/Search";
import AsdmSlip from "./components/home/AsdmSlip";
import Counter from "./components/home/Counter";
import UserHome from "./userside/home/UserHome";
import UserProfile from "./userside/home/UserProfile";
import CandidateHome from "./candidateinfo/home/CandidateHome"
import CandidateProfile from "./candidateinfo/home/CandidateProfile"
import CandidateSlip from "./candidateinfo/home/CandidateSlip";
import AdminHome from "./dashboard/admin/AdminHome";
import Addcompany from "./dashboard/pages/Addcompany"
import Melaconfig from "./dashboard/pages/Melaconfig"
import Report from "./dashboard/pages/Report"
import CompanyFrom from "./dashboard/pages/CompanyFrom";
import MelaForm from "./dashboard/pages/MelaForm";

const App = () => {

  const location = useLocation();

  // Function to determine if header and footer should be displayed
  const shouldDisplayHeaderFooter = () => {
    return !["/login", "/forgot", "/otp", "/userlogin", "/userforgot", "/userotp", "/userhome", "/userprofile", "/candidatelogin", "/candidateforgot", "/candidateotp", "/candidatehome", "/candidateprofile", "/candidateslip", "/adminlogin", "/adminotp", "/adminforgot", "/adminhome", "/dashboard", "/melaconfig", "/report", "/addcompany", "/addcompany/from", "/melaconfig/from"].includes(location.pathname);
  };
  const shouldHeaderFooter = () => {
    return !["/login", "/forgot", "/otp", "/userlogin", "/userforgot", "/userotp", "/candidatelogin", "/candidateforgot", "/candidateotp", "/adminlogin", "/adminotp", "/adminforgot", "/adminhome", "/dashboard", "/melaconfig", "/report", "/addcompany", "/addcompany/from", "/melaconfig/from"].includes(location.pathname);
  };

  return (
    <div>
      {shouldHeaderFooter() && <Header />}
      {shouldDisplayHeaderFooter() && <Counter />}

      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/" element={<Asdm />} />
        <Route path="/search" element={<Search />} />
        <Route path="/asdmslip" element={<AsdmSlip />} />
        <Route path="/barcode" element={<Barcode />} />

        {/* Employ Login */}
        <Route path="/userhome" element={<UserHome />} />
        <Route path="/userprofile" element={<UserProfile />} />


        {/* Candidate login */}
        <Route path="/candidatehome" element={<CandidateHome />} />
        <Route path="/candidateprofile" element={<CandidateProfile />} />
        <Route path="/candidateslip" element={<CandidateSlip />} />


        {/* Admin dashboard */}
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/report" element={<Report />} />
        <Route path="/addcompany" element={<Addcompany />} />
        <Route path="/melaconfig" element={<Melaconfig />} />
        <Route path="/addcompany/from" element={<CompanyFrom />} />
        <Route path="/melaconfig/from" element={<MelaForm />} />


      </Routes>
      {shouldHeaderFooter() && <Footer />}

    </div>
  );
};

export default App;
