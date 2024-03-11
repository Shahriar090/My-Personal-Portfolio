import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

import bannerImg from "../../../src/assets/Services/man-thinking-1.avif";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import Skills from "./Skills";

const AboutMe = () => {
  return (
    <section className="bg-gray-200">
      <Container>
        <section>
          <SectionTitle
            heading={"Who Am I ?"}
            subHeading={"Skills & About"}
          ></SectionTitle>
        </section>
        {/* main content */}
        <section>
          <div className="about-me">
            <p className="text-lg lg:text-xl italic text-center max-w-[60ch]  text-black font-sans pb-10 mx-auto">
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
            <div className="text-center space-x-2">
              <Link to="/contact">
                {" "}
                <button className="btn btn-outline bg-[#04724D] text-[#ecfef4] border-0 font-sans font-semibold hover:bg-[#05845a] mt-2">
                  Contact Now
                </button>
              </Link>
              <Link to="/projects">
                {" "}
                <button className="btn btn-outline bg-[#04724D] text-[#ecfef4] border-0 font-sans font-semibold hover:bg-[#05845a] mt-2">
                  See Projects
                </button>
              </Link>
            </div>
          </div>

          <section>
            <div className="skills my-10 sm:my-24"></div>
          </section>
          <Skills />
          {/* my skills */}
          {/* <div className="skills mt-6 sm:mt-20">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black font-sans text-center my-5 sm:my-12">
              My Skills
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2  gap-5 mt-3">
              <Progress skill="HTML" percentage={90}></Progress>
              <Progress skill="CSS" percentage={85}></Progress>
              <Progress skill="TAILWIND CSS" percentage={85}></Progress>
              <Progress skill="BOOTSTRAP" percentage={80}></Progress>
              <Progress skill="JAVASCRIPT" percentage={80}></Progress>
              <Progress skill="TYPESCRIPT" percentage={80}></Progress>
              <Progress skill="REACT JS." percentage={85}></Progress>
            </div>
          </div> */}
        </section>
      </Container>
    </section>
  );
};

export default AboutMe;
