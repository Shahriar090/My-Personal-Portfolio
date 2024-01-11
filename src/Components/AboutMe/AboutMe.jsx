import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Progress from "./Progress/Progress";
import bannerImg from "../../../src/assets/Services/man-thinking-1.avif";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="sec-container bg-white px-4 md:px-6 lg:px-10 py-4 md:py-6 lg:py-10">
      <section>
        <SectionTitle
          heading={"Who am i ?"}
          subHeading={"About Myself"}
        ></SectionTitle>
      </section>
      {/* main content */}
      <section>
        {/* about me */}
        <div className="parent flex flex-col-reverse md:flex-row lg:flex-row gap-4 items-center">
          <div className="about-me w-full md:w-3/6 lg:w-3/6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#04724D] font-serif text-start">
              About Me
            </h1>
            <p className="text-xl md:text-xl lg:text-2xl text-black font-sans py-4">
              I'm a dedicated Front-End Web Developer committed to crafting
              error-free websites. My focus is on achieving 100% client
              satisfaction. I find joy in working with JavaScript and React Js,
              and I also have a basic understanding of{" "}
              <span className="text-[#04724D]">
                Node Js, Express Js, and MongoDB{" "}
              </span>
              . Let's connect and explore how we can collaborate for remarkable
              digital experiences.
            </p>
            <Link to="/contact">
              {" "}
              <button className="btn btn-outline bg-[#04724D] text-[#ecfef4] border-0 font-sans font-semibold hover:bg-[#05845a] mt-2">
                Contact Now
              </button>
            </Link>
          </div>

          <div className="banner-img w-full md:w-3/6 lg:w-3/6">
            <picture>
              <img
                src={bannerImg}
                alt="Image Of Shahriar"
                className="w-full md:w-3/5 lg:w-3/5 mx-auto rounded-full"
              />
            </picture>
          </div>
        </div>
        {/* my skills */}
        <div className="skills mt-5">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#04724D] font-serif text-start">
            My Skills
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-3">
            <Progress skill="HTML" percentage={90}></Progress>
            <Progress skill="CSS" percentage={85}></Progress>
            <Progress skill="TAILWIND CSS" percentage={85}></Progress>
            <Progress skill="BOOTSTRAP" percentage={80}></Progress>
            <Progress skill="JAVASCRIPT" percentage={80}></Progress>
            <Progress skill="TYPESCRIPT" percentage={80}></Progress>
            <Progress skill="REACT JS." percentage={85}></Progress>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
