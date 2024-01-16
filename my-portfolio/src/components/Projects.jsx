import React from "react";
import youtubeClone from "../assets/youtubeClone.jpg";

const Projects = () => {
  return (
    <div
      name="projects"
      class="projects w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
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
            className="shadow-lg shadow-[#040c16] hover:scale-110 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {" "}
            {/* hover */}
            <div>
              <p className="text-center">
                <span className="text-2xl sm:text-[20px] font bold text-white tracking-wider">
                  {" "}
                  Serverless Cloud Application
                </span>
              </p>

              <p className="text-gray-300 font-bold text-lg text-center">
                Tech Stack
              </p>
              <p className="text-center text-sm">
                Node.js, Github actions, AWS, Pulumi, GCP
              </p>
              <div className="pt-2 text-center">
                <a href="https://github.com/aishwaryavenkatesan/webapp_forkedcopy">
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Code
                  </button>
                </a>
                <a href="https://github.com/aishwaryavenkatesan/iac-pulumi-forkedRepo">
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Infra
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* project 2 */}
          <div
            // style={{ backgroundImage: `url(${youtubeClone})` }}
            className="shadow-lg shadow-[#040c16] hover:scale-110 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {" "}
            {/* hover */}
            <div>
              <p className="text-center">
                <span className="text-2xl sm:text-[20px] font bold text-white tracking-wider">
                  {" "}
                  Youtube Clone
                </span>
              </p>

              <p className="text-gray-300 font-bold text-lg text-center">
                Tech Stack
              </p>
              <p className="text-center text-sm">
                HTML5, CSS3, SCSS, Javascript, Mongo DB, Express.js, ReactJS,
                Node
              </p>
              <div className="pt-2 text-center">
                <a href="https://github.com/aishwaryavenkatesan/youtube_clone">
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* project 3 */}
          <div
            // style={{ backgroundImage: `url(${youtubeClone})` }}
            className="shadow-lg shadow-[#040c16] hover:scale-110 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {" "}
            {/* hover */}
            <div>
              <p className="text-center">
                <span className="text-2xl sm:text-[20px] font bold text-white tracking-wider">
                  {" "}
                  Traveling Salesman Problem
                </span>
              </p>

              <p className="text-gray-300 font-bold text-lg text-center">
                Tech Stack
              </p>
              <p className="text-center text-sm">
                Java, Data Structures and Algorithms
              </p>
              <div className="pt-2 text-center">
                <a href="https://github.com/aishwaryavenkatesan/travelling_salesman_problem_java">
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* project 4 */}
          {/* <div
            // style={{ backgroundImage: `url(${youtubeClone})` }}
            className="shadow-lg shadow-[#040c16] hover:scale-110 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {" "} */}
          {/* hover */}
          {/* <div>
              <p className="text-center">
                <span className="text-[15px] sm:text-[20px] font bold text-white tracking-wider">
                  {" "}
                  Supply Chain Management in Java Swing
                </span>
              </p>

              <p className="text-gray-300 font-bold text-lg text-center">
                Tech Stack
              </p>
              <p className="text-center text-sm">Java Swing, Netbeans</p>
              <div className="pt-2 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div> */}
          {/* </div> */}

          {/* project 5 */}
          <div
            // style={{ backgroundImage: `url(${youtubeClone})` }}
            className="shadow-lg shadow-[#040c16] hover:scale-110 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {" "}
            {/* hover */}
            <div>
              <p className="text-center">
                <span className="text-2xl sm:text-[20px] font bold text-white tracking-wider">
                  {" "}
                  Porfolio Website
                </span>
              </p>

              <p className="text-gray-300 font-bold text-lg text-center">
                Tech Stack
              </p>
              <p className="text-center text-sm">
                HTML, React.js, Tailwind CSS, Javascript
              </p>
              <div className="pt-2 text-center">
                <a href="https://github.com/aishwaryavenkatesan/aishwaryavenkatesan.github.io">
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* project 6 */}
          <div
            // style={{ backgroundImage: `url(${youtubeClone})` }}
            className="shadow-lg shadow-[#040c16] hover:scale-110 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {" "}
            {/* hover */}
            <div>
              <p className="text-center">
                <span className="text-2xl sm:text-[20px] font bold text-white tracking-wider">
                  {" "}
                  Website redesign for E-commerce site
                </span>
              </p>

              <p className="text-gray-300 font-bold text-lg text-center">
                Tech Stack
              </p>
              <p className="text-center text-sm">Figma, Balsamic, Moqups</p>
              <div className="pt-2 text-center">
                <a href="https://www.figma.com/file/GFAQDCvOAR1FhVkS1DUHBo/BJ's-Wholesale-Club?type=design&node-id=0%3A1&mode=design&t=wuw6eHLzpr2KkjtX-1">
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
