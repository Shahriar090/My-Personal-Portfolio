import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Progress from "./Progress/Progress";
import bannerImg from "../../../src/assets/Services/man-thinking-1.avif";
import { Link } from "react-router-dom";
import Container from "../Container/Container";

const AboutMe = () => {
  return (
    <section className="bg-white">
      <Container>
        <section>
          <SectionTitle
            heading={"Who Am I ?"}
            subHeading={"About Myself"}
          ></SectionTitle>
        </section>
        {/* main content */}
        <section>
          {/* about me */}

          <div className="about-me bg-gray-50 p-10">
            <p className="text-lg text-center max-w-[70ch]  text-black font-sans py-4 mx-auto">
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

          {/* my skills */}
          <div className="skills mt-6 sm:mt-20">
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
          </div>
        </section>
      </Container>
    </section>
  );
};

export default AboutMe;
