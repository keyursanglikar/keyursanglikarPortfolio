import React from "react";
import "./CSS/";

const skills = [
  { name: "Java", level: "Advanced" },
  { name: "React JS", level: "Advanced" },
  { name: "Node JS", level: "Intermediate" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "Python", level: "Intermediate" },
  { name: "SQL", level: "Advanced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "HTML & CSS", level: "Advanced" }
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;