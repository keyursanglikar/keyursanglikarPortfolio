import React from "react";
import { motion } from "framer-motion";

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
    tech: ["React", "Tailwind"],
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
    <section className="bg-black text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-xs px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-4">
                <a
                  href={project.live}
                  target="_blank"
                  className="text-blue-400 text-sm"
                >
                  Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className="text-green-400 text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;