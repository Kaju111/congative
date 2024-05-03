import React from "react";
import map from "../assets/map.jpeg";

const Footer = () => {
  return (
    <div>
      <div className="h-[400px] dark:bg-gray-950 flex justify-between text-white">
        <div className="mt-[60px] ml-[80px]">
          <img src={map} alt="" className="h-[270px] w-[450px]" />
        </div>
        <div className="mt-[60px]">
          <h1>OUR ADDRESS</h1>
          <h1>Mission Director Assam Skill Development Mission</h1>
          <h1>Assam Skill Development Mission</h1>
          <h1>Katabari, DPS Road, NH-37</h1>
          <h1>Gorchuk, Guwahati</h1>
          <h1>Assam 781035</h1>
          <h1>Phone: +91 361 - 227 9745</h1>
          <h1>Email: missiondirector.asdm@gmail.com</h1>
        </div>
        <div className="mt-[60px] mr-[80px]">
          <h1>- IMPORTANT LINKS</h1>
          <h1>- Mission Director Assam Skill Development Mission</h1>
          <h1>- ASDM Portal</h1>
          <h1>- National Skill Development Corporation</h1>
          <h1>- Ministry of Skill Development And Entrepreneurship</h1>
          <h1>- SMART Portal</h1>
          <h1>- SDMS Portal</h1>
          <h1>- Skill India Portal</h1>
          <h1>- NSDC Ticket Support Symphony</h1>
          <h1>- National Occupational Standards (NOS)</h1>
          <h1>- Contact Us</h1>
          <h1>- Sitemap</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
