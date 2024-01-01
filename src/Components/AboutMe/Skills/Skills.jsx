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
      {/* skills bar and image */}
      <div className="flex flex-col md:flex-row lg:flex-row items-center gap-5">
        <div className="skills-img w-full md:w-3/5 lg:w-3/5">
          <picture>
            <img
              src={skillImg}
              alt=""
              className="rounded-full w-full lg:w-3/5"
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
