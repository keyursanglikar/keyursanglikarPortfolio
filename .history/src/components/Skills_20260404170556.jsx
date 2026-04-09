// import React from "react";
// import "./CSS/Skills.css";
// import {
//   FaJava,
//   FaReact,
//   FaNodeJs,
//   FaPython,
//   FaJs,
//   FaHtml5,
//   FaCss3Alt
// } from "react-icons/fa";
// import { SiMongodb, SiMysql } from "react-icons/si";

// const skills = [
//   { 
//     name: "Java", 
//     level: "Advanced",
//     icon: <FaJava className="skill-icon" />,
//     color: "rgb(57, 125, 235)",

//   },
//   { 
//     name: "React JS", 
//     level: "Advanced",
//     icon: <FaReact className="skill-icon" />,
//     color: "#61DAFB"
//   },
//   { 
//     name: "Node JS", 
//     level: "Intermediate",
//     icon: <FaNodeJs className="skill-icon" />,
//     color: "#339933"
//   },
//   { 
//     name: "MongoDB", 
//     level: "Intermediate",
//     icon: <SiMongodb className="skill-icon" />,
//     color: "#47A248"
//   },
//   { 
//     name: "Python", 
//     level: "Intermediate",
//     icon: <FaPython className="skill-icon" />,
//     color: "#3776AB"
//   },
//   { 
//     name: "SQL", 
//     level: "Advanced",
//     icon: <SiMysql className="skill-icon" />,
//     color: "#4479A1"
//   },
//   { 
//     name: "JavaScript", 
//     level: "Advanced",
//     icon: <FaJs className="skill-icon" />,
//     color: "#F7DF1E"
//   },
//   { 
//     name: "HTML & CSS", 
//     level: "Advanced",
//     icon: (
//       <div className="double-icon">
//         <FaHtml5 className="skill-icon html-icon" />
//         <FaCss3Alt className="skill-icon css-icon" />
//       </div>
//     ),
//     color: "#E34F26"
//   }
// ];

// function Skills() {
//   const getProgressWidth = (level) => {
//     switch(level) {
//       case "Advanced": return "90%";
//       case "Intermediate": return "70%";
//       case "Beginner": return "50%";
//       default: return "70%";
//     }
//   };

//   return (
//     <section className="skills" id="skills">
//       <h2 className="skills-title">My Skills</h2>

//       <div className="skills-container">
//         {skills.map((skill, index) => (
//           <div className="skill-card" key={index}>
//             <div className="skill-icon-wrapper" style={{ color: skill.color }}>
//               {skill.icon}
//             </div>
//             <div className="skill-info">
//               <h3>{skill.name}</h3>
//               <span className={`level-badge ${skill.level.toLowerCase()}`}>
//                 {skill.level}
//               </span>
//               <div className="skill-progress">
//                 <div 
//                   className={`progress-bar ${skill.level.toLowerCase()}`}
//                   style={{ width: getProgressWidth(skill.level) }}
//                 ></div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Skills;




import { useState } from "react";
import "./CSS/Skills.css";
import {
  FaJava, FaReact, FaNodeJs,
  FaPython, FaJs, FaHtml5, FaCss3Alt, FaGitAlt,
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiExpress, SiTailwindcss } from "react-icons/si";

/* ─────────────────────────────────────
   SKILL DATA
───────────────────────────────────── */
const ALL_SKILLS = [
  {
    name: "Java",
    level: "Advanced",
    percent: 90,
    category: "Languages",
    icon: <FaJava />,
    color: "#3975EB",
  },
  {
    name: "JavaScript",
    level: "Advanced",
    percent: 88,
    category: "Languages",
    icon: <FaJs />,
    color: "#F7DF1E",
  },
  {
    name: "Python",
    level: "Intermediate",
    percent: 70,
    category: "Languages",
    icon: <FaPython />,
    color: "#3776AB",
  },
  {
    name: "React JS",
    level: "Advanced",
    percent: 87,
    category: "Frontend",
    icon: <FaReact />,
    color: "#61DAFB",
  },
  {
    name: "HTML & CSS",
    level: "Advanced",
    percent: 92,
    category: "Frontend",
    icon: (
      <div className="skill-card__double-icon">
        <FaHtml5 style={{ color: "#E34F26" }} />
        <FaCss3Alt style={{ color: "#1572B6" }} />
      </div>
    ),
    color: "#E34F26",
  },
  {
    name: "Tailwind",
    level: "Intermediate",
    percent: 72,
    category: "Frontend",
    icon: <SiTailwindcss />,
    color: "#06B6D4",
  },
  {
    name: "Node JS",
    level: "Intermediate",
    percent: 68,
    category: "Backend",
    icon: <FaNodeJs />,
    color: "#339933",
  },
  {
    name: "Express",
    level: "Intermediate",
    percent: 65,
    category: "Backend",
    icon: <SiExpress />,
    color: "#8a96a8",
  },
  {
    name: "MongoDB",
    level: "Intermediate",
    percent: 70,
    category: "Backend",
    icon: <SiMongodb />,
    color: "#47A248",
  },
  {
    name: "MySQL",
    level: "Advanced",
    percent: 85,
    category: "Backend",
    icon: <SiMysql />,
    color: "#4479A1",
  },
  {
    name: "Git",
    level: "Advanced",
    percent: 86,
    category: "Tools",
    icon: <FaGitAlt />,
    color: "#F05032",
  },
];

const TABS = ["All", "Languages", "Frontend", "Backend", "Tools"];

const STATS = [
  { val: "4", label: "Years Coding" },
  { val: "15+", label: "Projects Built" },
  { val: "8+", label: "Technologies" },
  { val: "3+", label: "Stacks" },
];

/* ─────────────────────────────────────
   COMPONENT
───────────────────────────────────── */
function Skills() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All"
      ? ALL_SKILLS
      : ALL_SKILLS.filter((s) => s.category === activeTab);

  const levelClass = (level) => level.toLowerCase();

  return (
    <section className="skills" id="skills">
      {/* ambient orbs */}
      <div className="skills-orb skills-orb--1" />
      <div className="skills-orb skills-orb--2" />

      <div className="skills-inner">

        {/* ── Header ── */}
        <div className="skills-header">
          <p className="skills-header__eyebrow">
            <span className="skills-header__line" />
            What I Work With
            <span className="skills-header__line" />
          </p>
          <h2 className="skills-header__title">
            My <span>Skills</span>
          </h2>
          <p className="skills-header__sub">
            Technologies and tools I use to turn ideas into production-ready products.
          </p>
        </div>

        {/* ── Category tabs ── */}
        <div className="skills-tabs">
          {TABS.map((tab) => (
            <button
              key={tab}
              className={`skills-tab${activeTab === tab ? " active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ── Cards ── */}
        <div className="skills-grid">
          {filtered.map((skill, i) => (
            <div className="skill-card" key={skill.name} style={{ animationDelay: `${i * 0.07}s` }}>

              {/* top row */}
              <div className="skill-card__top">
                <div
                  className="skill-card__icon-wrap"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
                <span className={`skill-card__badge skill-card__badge--${levelClass(skill.level)}`}>
                  {skill.level}
                </span>
              </div>

              {/* name */}
              <h3 className="skill-card__name">{skill.name}</h3>

              {/* progress */}
              <div>
                <div className="skill-card__track">
                  <div
                    className={`skill-card__bar skill-card__bar--${levelClass(skill.level)}`}
                    style={{ width: `${skill.percent}%` }}
                  />
                </div>
                <p className="skill-card__percent">{skill.percent}%</p>
              </div>

            </div>
          ))}
        </div>

        {/* ── Stats strip ── */}
        <div className="skills-stats">
          {STATS.map((stat, i) => (
            <>
              <div className="skills-stat" key={stat.label}>
                <span className="skills-stat__val">
                  <span>{stat.val.replace(/\d+/, "")}</span>
                  {stat.val.replace(/\D/g, "")}
                  <span>+</span>
                </span>
                <span className="skills-stat__label">{stat.label}</span>
              </div>
              {i < STATS.length - 1 && (
                <div className="skills-stat__divider" key={`div-${i}`} />
              )}
            </>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;