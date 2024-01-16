import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen  bg-[#0a192f] text-[#ccd6f6]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm: text-right text-4xl font-bold">
            <p> I am Aishwarya. Welcome to my website</p>
          </div>
          <div>
            <p>
              Information Systems grad student at Northeastern University.
              Passionate to learn new concepts and have a keen interest in
              problem solving. Looking to further improve my skills and enhance
              my knowledge to become a Software Engineer and solve real world
              challenges through technology. Previously worked at Barclays, as a
              back end developer, after completing my under graduation. Being a
              fresher, I had the opportunity to interact and work alongside
              senior people. I was trusted with work that had to be delivered
              within a short duration which gave me the push to take it up as a
              challenge as I was new to it.Worked with latest technologies and
              in a team environment across various teams. Skilled in Java,
              Spring Boot framework, Junit testing, C, C++. I was also a part of
              Barclays Pune Toastmasters Club and served as Vice President of
              Public Relations. I am fond of public speaking and like meeting
              new people. I also love dancing and watching live sports.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
