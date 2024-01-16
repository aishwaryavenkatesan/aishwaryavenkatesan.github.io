import React, { useState } from "react";
import Logo from "../assets/aws.png";
import { FaBars, FaTimes, FaHome, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiOutlineDocument } from "react-icons/hi";
import { Link } from "react-scroll";
import myPdf from "../assets/AishwaryaVresume.pdf";
// my-portfolio/src/AishwaryaVresume.pdf
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        {/* <img src={Logo} alt="Logo Image" style={{ width: "200px" }} /> */}
      </div>

      {/* menu */}

      <ul className="hidden md:flex">
        {/* <div>
          <FaHome />
        </div> */}
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="experience" smooth={true} duration={500} offset={-100}>
            Experience
          </Link>
        </li>
        <li>
          {" "}
          <Link to="skills" smooth={true} duration={500} offset={-100}>
            Skills
          </Link>
        </li>
        <li>
          {" "}
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            to="experience"
            smooth={true}
            duration={500}
            offset={-100}
          >
            Experience
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            to="skills"
            smooth={true}
            duration={500}
            offset={-50}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077b5]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/aishwarya-venkatesan22/"
            >
              LinkedIn
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0072c6]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:venkatesan.ai@northeastern.edu"
            >
              Email
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/aishwaryavenkatesan"
            >
              GitHub
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={myPdf}
              download="aishwarya_v_resume.pdf"
            >
              Resume
              <HiOutlineDocument size={30} />
            </a>
          </li>
        </ul>
      </div>

      {/* </div> */}
    </div>
  );
};

// https://github.com/aishwaryavenkatesan/aishwaryavenkatesan.github.io/blob/main/AishwaryaVresume.pdf
export default Navbar;
