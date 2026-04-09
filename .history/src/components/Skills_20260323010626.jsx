import React from "react";
import "./CSS/Skills.css";
import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt
} from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";

const skills = [
  { 
    name: "Java", 
    level: "Advanced",
    icon: <FaJava className="skill-icon" />,
    color: "#ff5500",
    gradient: "linear-gradient(135deg, #ff5500, #007396)" // Orange to Blue gradient (Java logo style)
  },
  { 
    name: "React JS", 
    level: "Advanced",
    icon: <FaReact className="skill-icon" />,
    color: "#61DAFB"
  },
  { 
    name: "Node JS", 
    level: "Intermediate",
    icon: <FaNodeJs className="skill-icon" />,
    color: "#339933"
  },
  { 
    name: "MongoDB", 
    level: "Intermediate",
    icon: <SiMongodb className="skill-icon" />,
    color: "#47A248"
  },
  { 
    name: "Python", 
    level: "Intermediate",
    icon: <FaPython className="skill-icon" />,
    color: "#3776AB"
  },
  { 
    name: "SQL", 
    level: "Advanced",
    icon: <SiMysql className="skill-icon" />,
    color: "#4479A1"
  },
  { 
    name: "JavaScript", 
    level: "Advanced",
    icon: <FaJs className="skill-icon" />,
    color: "#F7DF1E"
  },
  { 
    name: "HTML & CSS", 
    level: "Advanced",
    icon: (
      <div className="double-icon">
        <FaHtml5 className="skill-icon html-icon" />
        <FaCss3Alt className="skill-icon css-icon" />
      </div>
    ),
    color: "#E34F26"
  }
];

function Skills() {
  const getProgressWidth = (level) => {
    switch(level) {
      case "Advanced": return "90%";
      case "Intermediate": return "70%";
      case "Beginner": return "50%";
      default: return "70%";
    }
  };

  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon-wrapper" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <div className="skill-info">
              {/* Apply gradient only to Java skill name */}
              <h3 style={skill.name === "Java" ? { 
                background: skill.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline-block"
              } : {}}>
                {skill.name}
              </h3>
              
              {/* Apply gradient only to Java level badge */}
              <span 
                className={`level-badge ${skill.level.toLowerCase()}`}
                style={skill.name === "Java" ? {
                  background: skill.gradient,
                  color: "white",
                  fontWeight: "bold"
                } : {}}
              >
                {skill.level}
              </span>
              
              <div className="skill-progress">
                {/* Apply gradient only to Java progress bar */}
                <div 
                  className={`progress-bar ${skill.level.toLowerCase()}`}
                  style={{ 
                    width: getProgressWidth(skill.level),
                    ...(skill.name === "Java" && { background: skill.gradient })
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;