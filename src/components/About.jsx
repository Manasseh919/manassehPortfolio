import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I’m an inquisitive, energetic computer science student, 
        with a strong foundation in math, programming logic and cross-platform coding. 
        I’m seeking to leverage solid development skills with a focus of collaboration,
         communication, passion, and creativity as a programmer.

        </p>

        <br />

        <p className="text-xl">
        Software Developer coding on React Native & ReactJS hoping to collaborate 
        develop complex web/mobile applications for millions of users with React native ,
        React and modern technologies
        </p>
      </div>
    </div>
  );
};

export default About;
