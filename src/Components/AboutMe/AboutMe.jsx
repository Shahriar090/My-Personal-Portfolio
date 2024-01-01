import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import thinkingImg from "../../assets/Services/man-thinking-concept-illustration_114360-7920.avif";

import Education from "./Education/Education";
import Skills from "./Skills/Skills";

const AboutMe = () => {
  return (
    <div className="sec-container bg-gradient-to-t from-slate-50 to-white px-4 md:px-6 lg:px-10 py-5 md:py-6 lg:py-10">
      {/* section title and section image */}
      <section>
        <div className=" flex flex-col-reverse md:flex-row lg:flex-row items-center pt-5 md:pt-8 lg:pt-12">
          <div className="sec-img w-full md:w-3/6 lg:w-3/6">
            <picture>
              <img
                src={thinkingImg}
                alt="Section-Image"
                className="w-full md:w-3/5 lg:w-3/5 mx-auto rounded-full"
              />
            </picture>
          </div>
          <div className="sec-title w-full md:w-3/6 lg:w-3/6 ">
            <SectionTitle
              heading={"Who am I ?"}
              subHeading={"About Myself"}
            ></SectionTitle>
          </div>
        </div>
      </section>
      {/* main content */}
      <section>
        {/* about me and skills*/}
        <div className="about-and-skills flex flex-col gap-10 pt-5 md:pt-8 lg:pt-12">
          <div>
            <h1 className="font-serif font-bold uppercase text-2xl md:text-3xl lg:text-4xl text-[#04724D] text-center my-10 underline">
              About Me
            </h1>
            <p className="text-xl p-6 rounded-lg bg-[#ECFEF4] text-[#04724D]">
              I am a Front-End Web Developer dedicated to crafting error-free
              websites with a focus on 100% client satisfaction. My passion for
              learning and sharing knowledge drives me to solve real-world
              problems with a strategic, goal-oriented mindset. Through the
              years, I've contributed to numerous projects, priding myself on
              delivering quality work and maintaining excellent communication. I
              find joy in working with technologies like ReactJS, JavaScript,
              and Node.js, and I'm well-versed in the MERN stack. Let's connect
              and explore how we can create remarkable digital experiences
              together.
            </p>
          </div>
          {/* skills */}
          <div className="skills pt-5 md:pt-8 lg:pt-12">
            <h1 className="font-serif font-bold uppercase text-2xl md:text-3xl lg:text-4xl text-[#04724D] text-center my-10 underline">
              Skills
            </h1>
            <Skills></Skills>
          </div>
          {/*  education */}
          <div className="pt-5 md:pt-8 lg:pt-12">
            <h1 className="font-serif font-bold uppercase text-2xl md:text-3xl lg:text-4xl text-[#04724D] text-center my-10 underline">
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
