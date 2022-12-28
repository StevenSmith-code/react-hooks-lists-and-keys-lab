import React from "react";

function ProjectItem({ name, about, technologies }) {


  const renderTechnologies = technologies.map(project =>(
    <span key={project}>{project}</span>
  ))

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {renderTechnologies}
      </div>
    </div>
  );
}

export default ProjectItem;
