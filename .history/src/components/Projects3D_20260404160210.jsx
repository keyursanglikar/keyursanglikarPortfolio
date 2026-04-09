import React, { useState } from "react";
import "./CSS?Projects.css";

const allProjects = [
  {
    title: "AI Resume Analyzer",
    description: "Analyzes resumes using NLP and gives ATS score.",
    tech: ["React", "Node", "AI"],
    category: "AI",
    image: "https://via.placeholder.com/400",
    live: "#",
    github: "#",
  },
  {
    title: "E-Commerce Platform",
    description: "Full MERN app with payments & admin dashboard.",
    tech: ["React", "MongoDB"],
    category: "Web",
    image: "https://via.placeholder.com/400",
    live: "#",
    github: "#",
  },
  {
    title: "Fitness App",
    description: "Workout tracker with progress analytics.",
    tech: ["React Native"],
    category: "App",
    image: "https://via.placeholder.com/400",
    live: "#",
    github: "#",
  },
];

const categories = ["All", "Web", "App", "AI"];

const Projects = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === active);

  return (
    <section className="projects-section">
      <h2>Projects</h2>

      {/* FILTER */}
      <div className="filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={active === cat ? "active" : ""}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid">
        {filtered.map((project, index) => (
          <div className="card" key={index}>
            <img src={project.image} alt="" />

            {/* HOVER OVERLAY */}
            <div className="overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>

              <div className="actions">
                <a href={project.live} target="_blank">Live</a>
                <a href={project.github} target="_blank">Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;