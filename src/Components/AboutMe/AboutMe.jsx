import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import thinkingImg from "../../assets/Services/man-thinking-concept-illustration_114360-7920.avif";

import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="sec-container bg-slate-50 px-4 md:px-6 lg:px-10  py-5 md:py-6 lg:py-10">
      {/* section title and section image */}
      <section>
        <SectionTitle
          heading={"Who am I ?"}
          subHeading={"About Myself"}
        ></SectionTitle>
      </section>
      {/* main content */}
      <section>
        {/* about me and skills*/}
        <div className="about-me  ">
          <h1 className="font-serif font-bold uppercase text-2xl md:text-3xl lg:text-4xl text-[#04724D] text-start my-6">
            About Me
          </h1>
          <p className="text-xl  md:text-xl lg:text-2xl  text-[#04724D] font-sans">
            I am a Front-End Web Developer dedicated to crafting error-free
            websites with a focus on 100% client satisfaction. My passion for
            learning and sharing knowledge drives me to solve real-world
            problems with a strategic, goal-oriented mindset. I find joy in
            working with a diverse set of technologies, including JavaScript,
            React Js, Express Js, and Node Js. Being well-versed in the MERN
            stack, Let's connect and explore how we can collaborate to create
            remarkable digital experiences together.{" "}
            <Link className=" animate-pulse hover:animate-none" to="/contact">
              Contact Now
            </Link>
          </p>
        </div>

        <div className=" flex flex-col items-center  md:flex-row lg:flex-row-reverse gap-5 mt-5 md:mt-8 lg:mt-10">
          {/* skills */}
          <div className="skills  w-full md:w-3/6 lg:w-3/6 shadow-md p-2 rounded-md bg-slate-50">
            <h1 className="font-serif font-bold uppercase text-2xl md:text-3xl lg:text-4xl text-[#04724D] text-center my-6 ">
              Skills
            </h1>
            <Skills></Skills>
          </div>
          {/* education */}
          <div className="w-full md:w-3/6 lg:w-3/6 shadow-md p-2 rounded-md bg-slate-50">
            <h1 className="font-serif font-bold uppercase text-2xl md:text-3xl lg:text-4xl text-[#04724D] text-center my-6">
              Education
            </h1>
            <Education></Education>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
