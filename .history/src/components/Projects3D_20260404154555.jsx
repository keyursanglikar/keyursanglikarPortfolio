import React from "react";

const projects = [
  {
    title: "E-Commerce Website",
    description: "Full stack MERN app with authentication, cart & payments.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "https://via.placeholder.com/400",
    live: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio with animations and SEO optimization.",
    tech: ["React", "CSS"],
    image: "https://via.placeholder.com/400",
    live: "#",
    github: "#",
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics dashboard with charts and user management.",
    tech: ["React", "Firebase"],
    image: "https://via.placeholder.com/400",
    live: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.live} target="_blank">Live</a>
                <a href={project.github} target="_blank">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;