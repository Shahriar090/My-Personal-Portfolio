import React, { useEffect, useState } from "react";
import Container from "../../Container/Container";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("projectsData.json");
        if (!res.ok) {
          throw new Error("Failed to load projects data");
        }
        const data = await res.json();
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.log(error, "Error fetching projects data");
        setLoading(false);
        //  TODO: add toast to show the error message to user
      }
    };
    fetchData();
  }, []);
  return (
    <section className="bg-gray-50">
      <Container>
        <section>
          <SectionTitle
            heading={"Portfolio"}
            subHeading={"My Recent Works"}
          ></SectionTitle>
        </section>
        {/* main section */}
        <section>
          {loading ? (
            <div className="flex items-center justify-center">
              {" "}
              <p>Loading....</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </section>
      </Container>
    </section>
  );
};

export default Projects;
