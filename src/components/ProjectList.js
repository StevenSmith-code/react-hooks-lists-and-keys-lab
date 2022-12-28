import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {

  const renderTechnologies = projects.map(project => (
    <ProjectItem key={project} technologies={project} />
  ))
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {renderTechnologies}
      </div>
    </div>
  );
}

export default ProjectList;
