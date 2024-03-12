import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import Skills from "./Skills";

const AboutMe = () => {
  return (
    <section className="bg-gray-100">
      <Container>
        <section>
          <SectionTitle
            heading={"Who Am I ?"}
            subHeading={"Skills & About"}
          ></SectionTitle>
        </section>
        {/* main content */}
        <section>
          <div className="about-me mb-12">
            <p className="text-lg lg:text-xl italic text-center sm:max-w-[60ch]  text-black font-sans pb-10 mx-auto">
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
          {/* skills */}
          <div className="skills ">
            <Skills />
          </div>
        </section>
      </Container>
    </section>
  );
};

export default AboutMe;
