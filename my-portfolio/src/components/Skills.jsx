import React from "react";
import expressjs from "../assets/expressjs.png";
import gcp from "../assets/gcp.png";
import githubactions from "../assets/githubactions.png";
import java from "../assets/java.png";
import javaScript from "../assets/javaScript.png";
import jenkins from "../assets/jenkins.png";
import springboot from "../assets/springboot.png";
import html from "../assets/html.png";
import node from "../assets/node.png";
import reactIcon from "../assets/reactIcon.png";
import aws from "../assets/aws.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f]  text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Experience
          </p>
          <p className="py-4">
            These are some of the skills I have used in my project and work
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={html} alt="java icon" />
            <p className="px-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={reactIcon} alt="java icon" />
            <p className="px-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={node} alt="java icon" />
            <p className="px-4">Node Js</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={java} alt="java icon" />
            <p className="px-4">Java</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={javaScript} alt="java icon" />
            <p className="px-4">Javascript</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={aws} alt="java icon" />
            <p className="px-4">AWS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={springboot} alt="java icon" />
            <p className="px-4">Spring Boot</p>
          </div>
          <div className="w-150px shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={expressjs} alt="java icon" />
            <p className="px-4">Express JS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
