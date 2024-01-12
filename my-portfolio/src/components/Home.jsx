import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Logo from "../assets/aishwaryav.jpg";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <img src={Logo} alt="Logo Image" style={{ width: "200px" }} />
        <p className="text-pink-600 mt-5">Hi, this is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Aishwarya
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a full-stack developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a full-stack developer with focus on backend. I also work on
          spring boot, Junits, Mockito frameworks, Jenkins and create
          applications using DevOps
        </p>
        <div>
          <button className="text-[#8892b0] group border-2 px-6 py-3 flex items-center hover:bg-pink-600 hover:border-pink-600 ">
            View Work
            <span className="group-hover:rotate-90">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
