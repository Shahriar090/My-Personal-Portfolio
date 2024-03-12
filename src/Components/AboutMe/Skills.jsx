import { useEffect, useState } from "react";

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
          setSkills(data);
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
    <div className="bg-gray-50 pt-4 sm:p-6">
      <div className="skills-container">
        <div className="front-end">
          <h1 className="text-center text-3xl font-bold font-sans text-black my-10 sm:my-16">
            Front End
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {frontEndSkills.map((skill) => (
              <div
                key={skill.id}
                className="bg-gray-100 shadow-sm p-4 rounded-md cursor-pointer hover:ring-2 ring-green-700 hover:shadow-green-500 transition-all duration-500"
              >
                <div className="space-y-1">
                  <h1 className="text-2xl font-sans font-bold text-black">
                    {skill.title}
                  </h1>
                  <p className="text-lg font-semibold font-sans text-gray-800">
                    Level : {skill.experience}
                  </p>
                  <p className="text-sm text-gray-700 sm:max-w-[30ch]">
                    {skill.description}
                  </p>
                </div>
                {/* <img src={skill.image} alt={skill.title} /> */}
              </div>
            ))}
          </div>
        </div>
        {/* back end */}
        <div className="back-end mt-8 sm:mt-16">
          <h1 className="text-center text-3xl font-bold font-sans text-black my-10 sm:my-16">
            Back End
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {backEndSkills.map((skill) => (
              <div
                key={skill.id}
                className="bg-gray-100 shadow-sm p-5 rounded-md cursor-pointer hover:ring-1 ring-green-700 hover:shadow-green-500 transition-all duration-500"
              >
                <h1 className="text-2xl font-sans font-bold text-black">
                  {skill.title}
                </h1>
                <p className="text-lg font-semibold font-sans text-gray-800">
                  Level : {skill.experience}
                </p>
                <p className="text-sm text-gray-700 sm:max-w-[30ch]">
                  {skill.description}
                </p>
                {/* <img src={skill.image} alt={skill.title} /> */}
              </div>
            ))}
          </div>
        </div>
        {/* version control */}
        <div className="back-end">
          <h1 className="text-center text-3xl font-bold font-sans text-black my-10 sm:my-16">
            Version Control
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
            {versionControlSkills.map((skill) => (
              <div
                key={skill.id}
                className="bg-gray-100 shadow-sm p-5 rounded-md cursor-pointer hover:ring-1 ring-green-700 hover:shadow-green-500 transition-all duration-500"
              >
                <h1 className="text-2xl font-sans font-bold text-black">
                  {skill.title}
                </h1>
                <p className="text-lg font-semibold font-sans text-gray-800">
                  Level : {skill.experience}
                </p>
                <p className="text-sm text-gray-700 sm:max-w-[30ch]">
                  {skill.description}
                </p>
                {/* <img src={skill.image} alt={skill.title} /> */}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Skills;
