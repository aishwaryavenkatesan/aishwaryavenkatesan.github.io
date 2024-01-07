import React from "react";
import Logo from "../assets/aws.png";
import { FaBars, FaTimes, FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "200px" }} />
      </div>

      {/* menu */}

      <ul className="hidden md:flex">
        {/* <div>
          <FaHome />
        </div> */}
        <li>Home</li>
        <li>About</li>
        <li>Experience</li>
        <li>Skills</li>
        <li>Project</li>
      </ul>

      <div className="md:hidden">
        <FaBars />
      </div>

      {/* mobile */}
      <ul className="hidden">
        <li>Home</li>
        <li>About</li>
        <li>Experience</li>
        <li>Skills</li>
        <li>Project</li>
      </ul>

      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
