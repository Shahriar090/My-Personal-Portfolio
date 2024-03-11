import { useEffect, useState } from "react";
import Container from "../Container/Container";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [frontEndSkills, setFrontEndSkills] = useState([]);
  const [backEndSkills, setBackEndSkills] = useState([]);
  const [versionControlSkills, setVersionControlSkills] = useState([]);
  useEffect(() => {
    try {
      fetch("skillsData.json")
        .then((res) => res.json())
        .then((data) => {
          setSkills(data), console.log(data);
        });
    } catch (error) {
      throw new Error("Failed To Load Data");
    }
  }, []);

  useEffect(() => {
    if (skills && Object.keys(skills).length > 0) {
      setFrontEndSkills(skills["front-end"]);
      setBackEndSkills(skills["back-end"]);
      setVersionControlSkills(skills["version-control"]);
    }
  }, [skills]);

  return (
    <div>
      <Container>
        <div className="skills-container">
          <h1 className="text-start text-4xl font-bold font-sans text-black">
            Front End
          </h1>
          <div className="front-end grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
            {frontEndSkills.map((skill) => (
              <div key={skill.id} className="shadow-md p-5 rounded-md">
                <h1 className="text-2xl font-sans font-bold text-black">
                  {skill.title}
                </h1>
                <p className="text-lg font-semibold font-sans text-gray-700">
                  Level: {skill.experience}
                </p>
                <p className="text-sm text-gray-600 max-w-[30ch]">
                  Description: {skill.description}
                </p>
                <img src={skill.image} alt={skill.title} />
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div></div>
    </div>
  );
};

export default Skills;
