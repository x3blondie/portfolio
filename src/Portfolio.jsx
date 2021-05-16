import React, { useState, useEffect } from "react";
import db from "./firebase";
import "./Portfolio.css";
import Project from "./Project";

function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    db.collection("projects").onSnapshot((snapshot) => {
      setProjects(
        snapshot.docs.map((doc) => ({
          projectName: doc.data().projectName,
          projectUrl: doc.data().projectUrl,
          projectImg: doc.data().projectImg,
        }))
      );
    });
  }, []);

  return (
    <div className="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-icons">
          <a href="https://github.com/x3blondie" target="_blank">
            <img src="https://img.icons8.com/nolan/2x/github.png" />
          </a>
          <a href="https://www.linkedin.com/in/jennifermurrin/" target="_blank">
            <img src="https://img.icons8.com/nolan/2x/linkedin.png" />
          </a>
        </div>
        <h1>Projects</h1>
        <div className="portfolio__projects">
          {projects.map((project) => (
            <div className="portfolio__project">
              <Project
                projectName={project.projectName}
                projectImg={project.projectImg}
                projectUrl={project.projectUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
