import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "MERN Stack App",
    desc: "Full stack web app using MongoDB, Express, React, Node.js with authentication and CRUD features.",
    tech: "React • Node • MongoDB"
  },
  {
    title: "Java Backend System",
    desc: "Built scalable backend using Java and JDBC with optimized database queries.",
    tech: "Java • MySQL"
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio website with animations and responsive design.",
    tech: "React • CSS"
  },
  {
    title: "Python Automation Tool",
    desc: "Automation scripts for data processing and task optimization.",
    tech: "Python"
  }
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <span>{project.tech}</span>
            </div>

            <div className="project-overlay">
              <button>View Project</button>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;