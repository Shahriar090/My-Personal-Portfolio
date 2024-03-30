import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import Skills from "./Skills";
import Button from "../../ui/Button";

const AboutMe = () => {
  return (
    <section className="bg-gray-50">
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
            <p className="text-lg lg:text-xl sm:text-center sm:max-w-[80ch]  text-gray-800 pb-10 mx-auto font-medium">
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
            <span className="divider"></span>
            <div className="text-center space-x-2">
              <Link to="/contact">
                {" "}
                <Button>Contact Now</Button>
              </Link>
              <Link to="/projects">
                {" "}
                <Button variant="outline">See Projects</Button>
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
