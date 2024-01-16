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
    <div
      name="skills"
      className=" w-full md:h-screen bg-[#0a192f]  text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
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

        {/* skills in text */}

        <div className="pt-12">
          <p className="py-4">
            These are some of the skills I have used in my project and work
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] flex items-center justify-center w-32 h-16">
            <p className="px-4 text-center">Git</p>
          </div>
          <div className="shadow-md shadow-[#040c16] flex items-center justify-center w-32 h-16">
            <p className="px-4 text-center">Maven</p>
          </div>
          <div className="shadow-md shadow-[#040c16] flex items-center justify-center w-32 h-16">
            <p className="px-4 text-center">Jenkins</p>
          </div>
          <div className="shadow-md shadow-[#040c16] flex items-center justify-center w-32 h-16">
            <p className="px-4 text-center">OpenShift</p>
          </div>
          <div className="shadow-md shadow-[#040c16] flex items-center justify-center w-32 h-16">
            <p className="px-4 text-center">Docker</p>
          </div>
          <div className="shadow-md shadow-[#040c16] flex items-center justify-center w-32 h-16">
            <p className="px-4 text-center">Sonarqube</p>
          </div>

          <div className="shadow-md shadow-[#040c16] flex items-center justify-center w-32 h-16">
            <p className="px-4 text-center">Elasticsearch</p>
          </div>
          <div className="shadow-md shadow-[#040c16] flex items-center justify-center w-32 h-16">
            <p className="px-4 text-center">Kibana</p>
          </div>
          <div className="shadow-md shadow-[#040c16] flex items-center justify-center w-32 h-16">
            <p className="px-4 text-center">Pulumi</p>
          </div>
          <div className="shadow-md shadow-[#040c16] flex items-center justify-center w-32 h-16">
            <p className="px-4 text-center">MongoDB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] flex items-center justify-center w-32 h-16">
            <p className="px-4 text-center">MySQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] flex items-center justify-center w-32 h-16">
            <p className="px-4 text-center">GCP</p>
          </div>
          <div className="shadow-md shadow-[#040c16] flex items-center justify-center w-32 h-16">
            <p className="px-4 text-center">REST APIs</p>
          </div>
          <div className="shadow-md shadow-[#040c16] flex items-center justify-center w-32 h-16">
            <p className="px-4 text-center">Jira</p>
          </div>
          <div className="shadow-md shadow-[#040c16] flex items-center justify-center w-32 h-16">
            <p className="px-4 text-center">Postman</p>
          </div>
        </div>

        {/* skills 2 */}
      </div>
    </div>
  );
};

export default Skills;
