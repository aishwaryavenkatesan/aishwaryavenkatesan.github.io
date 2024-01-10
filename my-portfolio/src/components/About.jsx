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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              obcaecati sapiente minima veritatis impedit optio nobis laudantium
              doloribus perferendis illum odio, minus modi! Corrupti, tempore!
              Neque quo ex necessitatibus velit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
