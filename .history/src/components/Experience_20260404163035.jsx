import React from "react";
import "./Experience.css";

const experiences = [
  {
    role: "Web Developer Intern",
    company: "Designvio",
    duration: "2024 - Present",
    desc: "Worked on real-world web applications using React and modern frontend technologies. Built responsive UI and improved performance."
  },
  {
    role: "Full Stack Developer Intern",
    company: "NZ Solutions",
    duration: "2024",
    desc: "Developed full stack applications using MERN stack. Implemented APIs, authentication, and database management."
  },
  {
    role: "Freelance Developer",
    company: "Self-Employed",
    duration: "2023 - Present",
    desc: "Built websites and software solutions for clients. Focused on UI/UX and scalable backend systems."
  }
];

function Experience() {
  return (
    <section className="experience" id="experience">
      <h2 className="exp-title">Experience</h2>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <span>{exp.duration}</span>
              <p>{exp.desc}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;