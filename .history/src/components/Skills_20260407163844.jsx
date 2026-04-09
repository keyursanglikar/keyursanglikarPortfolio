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
  // ================= FRONTEND =================
  {
    name: "HTML5",
    category: "Frontend",
  },
  {
    name: "CSS3",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    category: "Frontend",
  },
  {
    name: "React JS",
    category: "Frontend",
  },

  // ================= BACKEND (JS STACK) =================
  {
    name: "Node JS",
    category: "Backend",
  },
  {
    name: "Express JS",
    category: "Backend",
  },
  {
    name: "MongoDB",
    category: "Database",
  },

  // ================= JAVA STACK =================
  {
    name: "Java",
    category: "Languages",
  },
  {
    name: "JDBC",
    category: "Java Backend",
  },
  {
    name: "SQL",
    category: "Database",
  },
  {
    name: "Servlet",
    category: "Java Backend",
  },
  {
    name: "JSP",
    category: "Java Backend",
  },
  {
    name: "MVC",
    category: "Architecture",
  },
  {
    name: "Spring",
    category: "Framework",
  },
  {
    name: "Spring Boot",
    category: "Framework",
  },

  // ================= PYTHON STACK =================
  {
    name: "Python",
    category: "Languages",
  },
  {
    name: "Django",
    category: "Python Backend",
  },
  {
    name: "Flask",
    category: "Python Backend",
  },

  // ================= TOOLS =================
  {
    name: "Git",
    category: "Tools",
  },
  {
    name: "GitHub",
    category: "Tools",
  },

  // ================= CORE CS =================
  {
    name: "OOP",
    category: "Core CS",
  },
  {
    name: "Data Structures & Algorithms",
    category: "Core CS",
  },
];

const TABS = ["All", "Languages", "Frontend", "Backend", "Tools"];

const STATS = [
  { val: "2", label: "Years Coding" },
  { val: "10", label: "Projects Built" },
  { val: "8", label: "Technologies" },
  { val: "3", label: "Stacks" },
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