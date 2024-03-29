import React, { useState } from "react";

const ProjectCard = ({ project }) => {
  const {
    projectTitle,
    projectDescription,
    projectImg,
    usedTools,
    githubLink,
    liveDemo,
  } = project;

  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="w-full p-2 sm:p-5 flex flex-col rounded-md shadow-xl cursor-pointer bg-gray-50">
      <div className="img">
        <picture>
          <img src={projectImg} alt="Project Image" className="rounded-md" />
        </picture>
      </div>
      <div className="details mt-10">
        <h1 className="font-semibold text-2xl text-black uppercase">
          {projectTitle}
        </h1>
        <p className="text-gray-800 pt-3">
          {showFullDescription
            ? projectDescription
            : projectDescription.slice(0, 180)}
        </p>
        {projectDescription.length > 60 && (
          <button
            onClick={toggleDescription}
            className="text-lg  text-gray-900 underline underline-offset-2"
          >
            {showFullDescription ? "See Less" : "See More"}
          </button>
        )}
        <div className="tools h-[160px] pt-5">
          <span className="font-semibold uppercase text-lg">Used Tools</span>
          {usedTools.map((item, index) => (
            <li className="list-disc text-black  text-sm" key={index}>
              {item}
            </li>
          ))}
        </div>

        {/* <div className="dates  text-black text-lg pt-4">
          <p>Start Date : {startDate}</p>
          <p>End Date : {endDate}</p>
        </div> */}
        <div className="buttons flex justify-between pt-5">
          <a className="btn btn-xs" href={githubLink} target="_blank">
            GitHub
          </a>
          <a className="btn btn-xs" href={liveDemo} target="_blank">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
