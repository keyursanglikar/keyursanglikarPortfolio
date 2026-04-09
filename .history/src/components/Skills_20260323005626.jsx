import React from "react";
import "./Skills.css";

// Import SVG icons (you'll need to add these SVG files to your assets folder)
// Option 1: Import as components (if using CRA with SVGR)
import { ReactComponent as JavaIcon } from "../assets/java.svg";
import { ReactComponent as ReactIcon } from "../assets/react.svg";
import { ReactComponent as NodeIcon } from "../assets/nodejs.svg";
import { ReactComponent as MongoIcon } from "../assets/mongodb.svg";
import { ReactComponent as PythonIcon } from "../assets/python.svg";
import { ReactComponent as SQLIcon } from "../assets/sql.svg";
import { ReactComponent as JsIcon } from "../assets/javascript.svg";
import { ReactComponent as HtmlCssIcon } from "../assets/html-css.svg";

// Option 2: If you don't have SVG files, use react-icons (recommended)
// Install: npm install react-icons
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
    color: "#007396"
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
  return (
    <section className="skills" id="skills">
      <div className="skills-header">
        <h2 className="skills-title">My Skills</h2>
        <p className="skills-subtitle">Technologies I work with</p>
      </div>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon-wrapper" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <div className="skill-info">
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-level">
                <span className={`level-badge ${skill.level.toLowerCase()}`}>
                  {skill.level}
                </span>
              </div>
              <div className="skill-progress">
                <div 
                  className={`progress-bar ${skill.level.toLowerCase()}`}
                  style={{ 
                    width: skill.level === "Advanced" ? "90%" : 
                           skill.level === "Intermediate" ? "70%" : "50%" 
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