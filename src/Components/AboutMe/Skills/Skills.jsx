import React from "react";
import skillImg from "../../../assets/Services/hand-coding.avif";
import { SkillBars } from "react-skills";
const Skills = () => {
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
      name: "TypeScript",
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
    <div>
      <h1 className="font-serif font-bold uppercase text-xl md:text-2xl lg:text-3xl text-[#04724D] text-center my-10 underline">
        Skills
      </h1>
      {/* skills bar and image */}
      <div className="flex flex-col md:flex-row lg:flex-row items-center gap-6">
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
  );
};

export default Skills;
