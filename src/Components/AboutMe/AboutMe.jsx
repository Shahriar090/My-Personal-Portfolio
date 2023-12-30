import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import thinkingImg from "../../assets/Services/man-thinking-concept-illustration_114360-7920.avif";
import eduImg from "../../assets/Skills-&-Edu/reading-book.avif";
import skillImg from "../../assets/Services/hand-coding.avif";
import { SkillBars } from "react-skills";

const AboutMe = () => {
  // skills data
  const skillsData = [
    {
      name: "HTML",
      level: 85,
      color: "green",
    },
    {
      name: "CSS",
      level: 85,
      color: "green",
    },
    {
      name: "JavaScript",
      level: 80,
      color: "green",
    },
    {
      name: "React Js",
      level: 85,
      color: "green",
    },
    {
      name: "Tailwind CSS",
      level: 85,
      color: "green",
    },
    {
      name: "Bootstrap",
      level: 85,
      color: "green",
    },
  ];
  return (
    <div className="sec-container px-4 md:px-6 lg:px-10 py-5 md:py-6 lg:py-10">
      {/* section title and section image */}
      <section className="flex flex-col-reverse md:flex-row lg:flex-row items-center">
        <div className="sec-img w-full md:w-3/6 lg:w-3/6">
          <picture>
            <img
              src={thinkingImg}
              alt="Section-Image"
              className="w-9/12 md:w-3/5 lg:w-3/5 mx-auto rounded-full"
            />
          </picture>
        </div>
        <div className="sec-title border-2w-full md:w-3/6 lg:w-3/6">
          <SectionTitle
            heading={"Who am I ?"}
            subHeading={"About Myself"}
          ></SectionTitle>
        </div>
      </section>
      {/* main content */}
      <section>
        <div className="">
          <h1 className="font-serif font-bold uppercase text-xl md:text-2xl lg:text-3xl text-[#04724D] text-center my-10 underline">
            About Me
          </h1>
          <p className="text-lg p-5 rounded-lg bg- bg-gradient-to-r from-transparent to-[#ECFEF4] text-[#04724D]">
            I am a Front-End Web Developer dedicated to crafting error-free
            websites with a focus on 100% client satisfaction. My passion for
            learning and sharing knowledge drives me to solve real-world
            problems with a strategic, goal-oriented mindset. Through the years,
            I've contributed to numerous projects, priding myself on delivering
            quality work and maintaining excellent communication. I find joy in
            working with technologies like ReactJS, JavaScript, and Node.js, and
            I'm well-versed in the MERN stack. Let's connect and explore how we
            can create remarkable digital experiences together.
          </p>
        </div>
        {/* skills and education */}
        <div className="parent mt-10 p-5">
          <h1 className="font-serif font-bold uppercase text-xl md:text-2xl lg:text-3xl text-[#04724D] text-center my-10 underline">
            Education
          </h1>
          <div className="education flex flex-col-reverse md:flex-row lg:flex-row items-center gap-5">
            <div className="edu-details w-full md:w-3/5 lg:w-3/5 bg-gradient-to-l from-transparent to-[#ECFEF4] p-5 rounded-lg">
              <div className="ssc text-[#04724D]">
                <h2 className="text-lg md:text-xl lg:text-2xl  font-bold">
                  S.S.C
                </h2>
                <h3 className=" text-lg">Year : 2017</h3>
                <p className=" text-lg">
                  Institution : Barkar S. Z. High School
                </p>
              </div>
              <div className="HSC text-[#04724D]">
                <h2 className="text-lg md:text-xl lg:text-2xl  font-bold">
                  H.S.C
                </h2>
                <h3 className=" text-lg">Year : 2019</h3>
                <p className=" text-lg">
                  Institution : Ispahani Public School & College, Chattogram
                </p>
              </div>
              <div className="Honours text-[#04724D]">
                <h2 className="text-lg md:text-xl lg:text-2xl  font-bold">
                  Degree : Bachelor Of Social Science
                </h2>
                <h3 className=" text-lg">Start : 2019</h3>
                <h3 className=" text-lg">End : Will Be Added</h3>
                <p className=" text-lg">
                  Institution : National University Of Bangladesh
                </p>
              </div>
            </div>
            <div className="edu-img  w-full md:w-3/5 lg:w-3/5">
              <picture>
                <img
                  src={eduImg}
                  alt=""
                  className="rounded-full w-full lg:w-3/5 mx-auto"
                />
              </picture>
            </div>
          </div>
          {/* skills */}
          <div className="skills">
            <h1 className="font-serif font-bold uppercase text-xl md:text-2xl lg:text-3xl text-[#04724D] text-center my-10 underline">
              Skills
            </h1>
            <div className="flex flex-col md:flex-row lg:flex-row items-center gap-5">
              <div className="skills-img w-full md:w-3/5 lg:w-3/5">
                <picture>
                  <img
                    src={skillImg}
                    alt=""
                    className="rounded-full w-full lg:w-3/5 mx-auto"
                  />
                </picture>
              </div>
              <div className="skills w-full md:w-3/5 lg:w-3/5">
                <SkillBars skills={skillsData} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
