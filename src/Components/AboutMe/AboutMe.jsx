import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import thinkingImg from "../../assets/Services/man-thinking-concept-illustration_114360-7920.avif";

import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="sec-container  py-5 md:py-6 lg:py-10">
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

        <div className=" flex flex-col items-center  md:flex-row lg:flex-row gap-5 px-4 md:px-6 lg:px-10 ">
          <div className="about-me w-full md:w-3/6 lg:w-3/6 shadow-md p-2 rounded-md bg-slate-50">
            <h1 className="font-serif font-bold uppercase text-2xl md:text-3xl lg:text-4xl text-[#04724D] text-center my-6">
              About Me
            </h1>
            <p className="text-xl  md:text-xl lg:text-2xl  text-[#04724D] font-sans">
              I am a Front-End Web Developer dedicated to crafting error-free
              websites with a focus on 100% client satisfaction. My passion for
              learning and sharing knowledge drives me to solve real-world
              problems with a strategic, goal-oriented mindset. Through the
              years, I've contributed to numerous projects, priding myself on
              delivering quality work and maintaining excellent communication. I
              find joy in working with technologies like ReactJS, JavaScript,
              and Node.js, and I'm well-versed in the MERN stack. Let's connect
              and explore how we can create remarkable digital experiences
              together.{" "}
              <Link className=" animate-pulse hover:animate-none" to="/contact">
                Contact Now
              </Link>
            </p>
          </div>
          {/* skills */}
          <div className="skills  w-full md:w-3/6 lg:w-3/6 shadow-md p-2 rounded-md bg-slate-50">
            <h1 className="font-serif font-bold uppercase text-2xl md:text-3xl lg:text-4xl text-[#04724D] text-center my-6 ">
              Skills
            </h1>
            <Skills></Skills>
          </div>
        </div>

        {/*  education */}
        {/* education details are not available right now */}
        {/* <div className="pt-5 md:pt-8 lg:pt-12">
            <h1 className="font-serif font-bold uppercase text-2xl md:text-3xl lg:text-4xl text-[#04724D] text-center my-10 underline">
              Education
            </h1>
            <Education></Education>
          </div> */}
      </section>
    </div>
  );
};

export default AboutMe;
