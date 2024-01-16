import React from "react";

const Experience = () => {
  return (
    <div name="experience" className=" w-full text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Experience
          </p>
          <p className="py-4">My experience</p>
        </div>

        {/*  */}
        {/* <div class="container h-full"> */}
        <div class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
          {/* <!-- left --> */}
          <div class="flex flex-row-reverse md:contents">
            <div class="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 class="font-semibold text-md mb-1">
                Northeastern University, MS in Information Systems
              </h3>
              <time>Septerber 2022 - May 2024</time>
              <p class="leading-tight text-justify">
                Courses: Web Design and User Experience Engineering, Cloud
                Computing
              </p>
            </div>
            <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
              </div>
              <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
            </div>
          </div>
          {/* <!-- right --> */}
          <div class="flex md:contents">
            <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
              </div>
              <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
            </div>
            <div class="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
              <h3 class="font-semibold text-lg mb-1">
                Barclays, Software Developer
              </h3>
              <time>August 2020 - August 2022</time>
              <p class="leading-tight text-justify text-[15px]">
                Created customer-facing REST APIs with Spring Boot and OAuth for
                consumer cards, achieving a 70% increase in test coverage using
                Junit and Mockito in alignment with partner requirements for
                reward points redemption.Implemented microservices, set up CI/CD
                pipelines in Jenkins, managed deployments on OpenShift, and
                utilized AppDynamics for performance monitoring, leading to
                streamlined operations and heightened application
                reliability.Utilized the Veracode tool to analyze code
                vulnerabilities, resulting in an increase in code scan report
                scores from 75 to 99. Fixed data synchronization issue in a
                batch job, by conducting detailed analysis to identify the root
                cause, modified database queries to ensure successful batch
                execution. Collaborated with cross-functional teams in an Agile
                environment to successfully deliver high-quality projects within
                tight deadlines, adhering to software best practices
              </p>
            </div>
          </div>
          {/* <!-- left --> */}
          <div class="flex flex-row-reverse md:contents">
            <div class="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 class="font-semibold text-md mb-1">
                SSN College of Engineering, B.Tech in Information Technology
              </h3>
              <time>August 2016 - August 2020</time>
              <p class="leading-tight text-justify"></p>
            </div>
            <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
              </div>
              <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Experience;
