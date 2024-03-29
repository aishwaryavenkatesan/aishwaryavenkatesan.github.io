import React from "react";
import youtubeClone from "../assets/youtubeClone.jpg";

const Projects = () => {
  return (
    <div class="projects w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-6">Check out the projects I have worked on so far</p>
        </div>

        {/* container */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* project element */}
          <div
            // style={{ backgroundImage: `url(${youtubeClone})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {" "}
            {/* hover */}
            <div>
              <p className="text-center">
                <span className="text-2xl sm:text-[25px] font bold text-white tracking-wider">
                  {" "}
                  Serverless Cloud Application
                </span>
              </p>

              <p className="text-gray-300 font-bold text-[15px] text-center">
                Tech Stack
              </p>
              <p className="text-center">
                Git , HTML, CSS, JAVAscript, JAVA, Git , HTML, CSS, JAVAscript,
                JAVA,
              </p>
              <div className="pt-2 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
