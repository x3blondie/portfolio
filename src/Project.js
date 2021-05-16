import React from "react";
import "./Project.css";

function Project({ projectName, projectImg, projectUrl }) {
  return (
    <a href={projectUrl}>
      <div className="project">
        <div className="project__top">
          <span>{projectName}</span>
        </div>
        <div className="project__bottom">
          <img src={projectImg} alt="" />
        </div>
      </div>
    </a>
  );
}

export default Project;
