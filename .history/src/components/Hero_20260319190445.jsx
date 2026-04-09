// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import profile from "../assets/p-pic.jpg";
// import './CSS/Hero.css'

// const Hero = () => {

//   const rolesData = [
//     {
//       title: "Full Stack Developer",
//       desc: "I build complete web applications from frontend to backend using modern technologies like React, Node.js, and databases."
//     },
//     {
//       title: "Java Developer",
//       desc: "Strong foundation in Java with experience in OOP, backend logic, and building scalable applications."
//     },
//     {
//       title: "MERN Stack Developer",
//       desc: "Experienced in MongoDB, Express, React, and Node.js to create fast and scalable full-stack applications."
//     },
//     {
//       title: "Python Developer",
//       desc: "Skilled in Python for scripting, backend development, and problem solving with clean and efficient code."
//     }
//   ];

//  const [index, setIndex] = useState(-1);

// useEffect(() => {
//   const interval = setInterval(() => {
//     setIndex((prev) => {
//       if (prev === rolesData.length - 1) return -1; // back to intro
//       return prev + 1;
//     });
//   }, 4000);

//   return () => clearInterval(interval);
// }, []);

//   return (
    
//       <div className="hero">

//         {/* LEFT IMAGE */}
//         <div className="left">
//           <img src={profile} alt="profile" />
//         </div>

//         {/* RIGHT CONTENT */}
//         <div className="right">

//           {/* INTRO */}
//           {index === -1 && (
//             <div className="intro">
//               <h1>
//                 Hi, I'm <span>Keyur Ratnkant Sanglikar</span>
//               </h1>

//               <p>
//                 B.Tech in Computer Science (2024 Passout) <br />
//                 Diploma | 12th | 10th <br /><br />

//                 Passionate developer focused on building scalable web applications
//                 and continuously learning new technologies.
//               </p>

//               <div className="extra">
//                 <p><strong>Skills:</strong> Java, MERN, Python, SQL</p>
              
//               </div>
//             </div>
//           )}

//           {/* DYNAMIC ROLE */}
//        {index === -1 ? (
//   <div className="intro">
//     ...
//   </div>
// ) : (
//   rolesData[index] && (
//     <div className="role-box">
//       <h2 className="role-title">
//         {rolesData[index].title}
//       </h2>
//       <p className="role-desc">
//         {rolesData[index].desc}
//       </p>
//     </div>
//   )
// )}

//         </div>

//       </div>

//   );
// };

// export default Hero;
import React, { useEffect, useState } from "react";
import profile from "../assets/p-pic.jpg";
import "./CSS/Hero.css";

const Hero = () => {
  const rolesData = [
    {
      title: "Full Stack Developer",
      desc: "I build complete web applications from frontend to backend using modern technologies like React, Node.js, and databases.",
      icon: "🚀",
      tech: ["React", "Node.js", "Express", "MongoDB", "PostgreSQL"]
    },
    {
      title: "Java Developer",
      desc: "Strong foundation in Java with experience in OOP, backend logic, and building scalable applications.",
      icon: "☕",
      tech: ["Java", "Spring Boot", "Hibernate", "Maven", "REST APIs"]
    },
    {
      title: "MERN Stack Developer",
      desc: "Experienced in MongoDB, Express, React, and Node.js to create fast and scalable full-stack applications.",
      icon: "⚛️",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Redux"]
    },
    {
      title: "Python Developer",
      desc: "Skilled in Python for scripting, backend development, and problem solving with clean and efficient code.",
      icon: "🐍",
      tech: ["Python", "Django", "Flask", "FastAPI", "Pandas"]
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % (rolesData.length + 1));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const showIntro = index === 0;

  return (
    <div className="hero">
      <div className="hero-container">
        {/* LEFT IMAGE */}
        <div className="left">
          <div className="image-wrapper">
            <img src={profile} alt="profile" />
            <div className="glow"></div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="right">
          {showIntro ? (
            // INTRO CARD
            <div className="card-container">
              <div className="card">
                <div className="card-glow"></div>
                <div className="card-content">
                  <span className="chip">✨ INTRODUCTION</span>
                  
                  <h1 className="heading">
                    Hi, I'm <span className="gradient-text">Keyur Ratnkant Sanglikar</span>
                  </h1>
                  
                  <div className="badge-container">
                 
                    <span className="badge">💻 Full Stack Developer</span>
                    <span className="badge">🌟 5+ Projects</span>
                  </div>

                  <div className="education-section">
                    <p className="education-item">
                      <span className="emoji">📚</span>
                      <span className="text">Degree in Computer Science Engineering   Year :- 2024</span>
             
                    </p>
                    <p className="education-item">
                      <span className="emoji">📚</span>
                      <span className="text">Diploma in Electronics and Telecommunication Engineering  | Year :- 2021 </span>
                        
                    </p>
                    <p className="education-item">
                      <span className="emoji">🏆</span>
                      <span className="text">12th Science | Year :- 2019</span>
                       
                    </p>
                    <p className="education-item">
                      <span className="emoji">⭐</span>
                      <span className="text">10th  |  Year :- 2017 </span>
                          
                    </p>
                  </div>

                  <p className="highlight-description">
                    Passionate developer focused on building <span className="glow-text">Scalable Web applications , Softwares</span> 
                    and continuously learning <span className="glow-text">new technologies</span>.
                  </p>

                  <div className="skills-container">
                    <p className="section-label">⚡ CORE EXPERTISE</p>
                    <div className="skills-grid">
                      <span className="skill-tag">Java</span>
                      <span className="skill-tag">MERN</span>
                      <span className="skill-tag">Python</span>
                      <span className="skill-tag">SQL</span>
                      <span className="skill-tag">TypeScript</span>
                      <span className="skill-tag">Docker</span>
                    </div>
                  </div>

                  <div className="card-footer">
                    <p className="footer-left">✨ Available for opportunities</p>
                    <p className="footer-right glow-brand">Keyur.dev</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // ROLE CARD
            <div className="card-container">
              <div className="card">
                <div className="card-glow"></div>
                <div className="card-content">
                  <div className="role-header">
                    <span className="role-icon">{rolesData[index - 1].icon}</span>
                    <span className="chip">🔥 ACTIVE ROLE</span>
                  </div>
                  
                  <h2 className="role-title gradient-text">
                    {rolesData[index - 1].title}
                  </h2>
                  
                  <div className="role-description-container">
                    <p className="role-description">
                      {rolesData[index - 1].desc}
                    </p>
                  </div>

                  <div className="tech-stack-container">
                    <p className="section-label">🛠️ TECH STACK</p>
                    <div className="tech-grid">
                      {rolesData[index - 1].tech.map((tech, i) => (
                        <span key={i} className="tech-item">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="achievement-badges">
                    <span className="achievement-badge">
                      <span className="badge-icon">🏆</span>
                      <span className="badge-text">Expert</span>
                    </span>
                    <span className="achievement-badge">
                      <span className="badge-icon">📦</span>
                      <span className="badge-text">5+ Projects</span>
                    </span>
                    <span className="achievement-badge">
                      <span className="badge-icon">⭐</span>
                      <span className="badge-text">2 Years Exp</span>
                    </span>
                  </div>

                  <div className="card-footer">
                    <p className="footer-left">⚡ Ready to build</p>
                    <p className="footer-right glow-brand">{rolesData[index - 1].title}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;