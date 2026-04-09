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
import styled from "styled-components";
import profile from "../assets/p-pic.jpg";

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
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const showIntro = index === 0;

  return (
    <StyledHero>
      <div className="hero-container">
        {/* LEFT IMAGE */}
        <div className="left">
          <div className="image-wrapper">
            <img src={profile} alt="profile" />
            <div className="glow"></div>
          </div>
        </div>

        {/* RIGHT CONTENT - ALL IN TRANSPARENT CARDS */}
        <div className="right">
          {showIntro ? (
            // INTRO CARD
            <StyledCardWrapper className="card-container">
              <div className="card">
                <div className="card-glow"></div>
                <div className="card-content">
                  <span className="chip">✨ INTRODUCTION</span>
                  
                  <h1 className="heading">
                    Hi, I'm <span className="gradient-text">Keyur Ratnkant Sanglikar</span>
                  </h1>
                  
                  <div className="badge-container">
                    <span className="badge">🎓 B.Tech CSE '24</span>
                    <span className="badge">💻 Full Stack</span>
                    <span className="badge">🌟 5+ Projects</span>
                  </div>

                  <div className="education-section">
                    <p className="education-item">
                      <span className="emoji">📚</span>
                      <span className="text">Diploma in Computer Engineering</span>
                    </p>
                    <p className="education-item">
                      <span className="emoji">🏆</span>
                      <span className="text">12th Science - 85%</span>
                    </p>
                    <p className="education-item">
                      <span className="emoji">⭐</span>
                      <span className="text">10th - 90%</span>
                    </p>
                  </div>

                  <p className="highlight-description">
                    Passionate developer focused on building <span className="glow-text">scalable web applications</span> 
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
            </StyledCardWrapper>
          ) : (
            // ROLE CARD
            <StyledCardWrapper className="card-container">
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
            </StyledCardWrapper>
          )}
        </div>
      </div>
    </StyledHero>
  );
};

const StyledHero = styled.div`
  min-height: 100vh;
  // background: radial-gradient(circle at 10% 20%, #1a0b2e, #030014);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    // background: radial-gradient(circle at 70% 50%, rgba(232, 28, 255, 0.15), transparent 50%);
    pointer-events: none;
  }

  .hero-container {
    max-width: 1400px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 60px;
    padding: 0 40px;
    position: relative;
    z-index: 2;
  }

  /* LEFT IMAGE */
  .left {
    flex: 1;
    display: flex;
    justify-content: center;
    
    .image-wrapper {
      position: relative;
      
      img {
        width: 450px;
        height: 500px;
        object-fit: cover;
        border-radius: 30px;
        animation: float 3s ease-in-out infinite;
        position: relative;
        z-index: 2;
        // border: 2px solid rgba(232, 28, 255, 0.3);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
      }

      .glow {
        position: absolute;
        top: -20px;
        left: -20px;
        right: -20px;
        bottom: -20px;
        // background: linear-gradient(45deg, #e81cff, #40c9ff, #ff00ff);
        border-radius: 50px;
        filter: blur(30px);
        opacity: 0.4;
        animation: glowPulse 3s ease-in-out infinite;
        z-index: 1;
      }
    }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
  }

  @keyframes glowPulse {
    0%, 100% { opacity: 0.4; filter: blur(30px); }
    50% { opacity: 0.7; filter: blur(40px); }
  }

  .right {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .card-container {
    width: 100%;
    max-width: 600px;
  }

  @media (max-width: 1024px) {
    .hero-container {
      flex-direction: column;
      text-align: center;
      gap: 40px;
    }

    .left img {
      width: 350px;
      height: 400px;
    }
  }
`;

const StyledCardWrapper = styled.div`
  .card {
    position: relative;
    width: 100%;
    min-height: 850px;
    background: rgba(10, 5, 20, 0.2);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border-radius: 32px;
    color: white;
    animation: fadeIn 0.5s ease-in-out;
    border: 1px solid rgba(232, 28, 255, 0.2);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    overflow: hidden;
  }

  .card-glow {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at center, 
      rgba(232, 28, 255, 0.3) 0%,
      rgba(64, 201, 255, 0.3) 25%,
      transparent 50%);
    animation: rotate 10s linear infinite;
    z-index: 1;
  }

  .card-content {
    position: relative;
    z-index: 2;
    padding: 36px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: rgba(5, 2, 10, 0.3);
    backdrop-filter: blur(5px);
    height: 100%;
  }

  .chip {
    display: inline-block;
    padding: 8px 18px;
    background: rgba(232, 28, 255, 0.15);
    border-radius: 30px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 1px;
    color: #fff;
    border: 1px solid rgba(232, 28, 255, 0.5);
    width: fit-content;
    text-shadow: 0 0 10px rgba(232, 28, 255, 0.5);
    box-shadow: 0 0 20px rgba(232, 28, 255, 0.2);
  }

  .heading {
    font-size: 38px;
    font-weight: 800;
    line-height: 1.3;
    margin: 0;
    color: #ffffff;
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }

  .gradient-text {
    background: linear-gradient(135deg, #ff00e5, #00f5ff, #9747ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 200%;
    animation: gradient 3s ease infinite;
    font-weight: 800;
    text-shadow: 0 0 30px rgba(255, 0, 229, 0.5);
  }

  .badge-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 5px 0;
  }

  .badge {
    padding: 6px 14px;
    background: rgba(64, 201, 255, 0.15);
    border-radius: 20px;
    font-size: 14px;
    color: #40c9ff;
    border: 1px solid rgba(64, 201, 255, 0.4);
    font-weight: 500;
    text-shadow: 0 0 8px rgba(64, 201, 255, 0.5);
  }

  .education-section {
    display: flex;
    flex-direction: column;
    gap: 12px;
    background: rgba(255, 255, 255, 0.03);
    padding: 16px;
    border-radius: 20px;
    border: 1px solid rgba(232, 28, 255, 0.2);
  }

  .education-item {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 16px;
    color: #fff;

    .emoji {
      font-size: 20px;
      filter: drop-shadow(0 0 5px rgba(232, 28, 255, 0.5));
    }

    .text {
      font-weight: 500;
      text-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
    }
  }

  .highlight-description {
    font-size: 18px;
    line-height: 1.6;
    color: #ffffff;
    padding: 10px 0;
    font-weight: 400;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  }

  .glow-text {
    color: #40c9ff;
    font-weight: 600;
    text-shadow: 0 0 15px #40c9ff, 0 0 30px #40c9ff;
  }

  .section-label {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1.5px;
    color: #e81cff;
    margin-bottom: 12px;
    text-shadow: 0 0 10px #e81cff;
  }

  .skills-container, .tech-stack-container {
    margin: 5px 0;
  }

  .skills-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .skill-tag {
    padding: 8px 18px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 30px;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    border: 1px solid rgba(64, 201, 255, 0.5);
    transition: all 0.3s ease;
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 15px rgba(64, 201, 255, 0.2);
  }

  .skill-tag:hover {
    background: linear-gradient(135deg, #e81cff, #40c9ff);
    transform: translateY(-2px) scale(1.05);
    border-color: transparent;
    box-shadow: 0 0 30px rgba(232, 28, 255, 0.4);
  }

  .role-header {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 5px;
  }

  .role-icon {
    font-size: 32px;
    filter: drop-shadow(0 0 15px rgba(232, 28, 255, 0.6));
    animation: bounce 2s ease infinite;
  }

  .role-title {
    font-size: 44px;
    font-weight: 800;
    margin: 5px 0 10px;
    line-height: 1.2;
  }

  .role-description-container {
    background: rgba(64, 201, 255, 0.05);
    padding: 20px;
    border-radius: 20px;
    border-left: 4px solid #e81cff;
    box-shadow: 0 0 30px rgba(232, 28, 255, 0.2);
  }

  .role-description {
    font-size: 18px;
    line-height: 1.7;
    color: #ffffff;
    font-weight: 400;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
  }

  .tech-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .tech-item {
    padding: 8px 18px;
    background: rgba(232, 28, 255, 0.1);
    border-radius: 30px;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    border: 1px solid rgba(232, 28, 255, 0.6);
    box-shadow: 0 0 20px rgba(232, 28, 255, 0.2);
    text-shadow: 0 0 8px rgba(232, 28, 255, 0.5);
  }

  .achievement-badges {
    display: flex;
    gap: 15px;
    margin: 10px 0;
    flex-wrap: wrap;
  }

  .achievement-badge {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 14px;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);

    .badge-icon {
      font-size: 18px;
      filter: drop-shadow(0 0 8px rgba(232, 28, 255, 0.5));
    }

    .badge-text {
      color: #fff;
      font-weight: 500;
      text-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
    }
  }

  .card-footer {
    margin-top: auto;
    padding-top: 20px;
    border-top: 1px solid rgba(232, 28, 255, 0.3);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer-left {
    font-size: 14px;
    color: #40c9ff;
    font-weight: 500;
    text-shadow: 0 0 10px #40c9ff;
  }

  .footer-right {
    font-weight: 700;
    font-size: 18px;
  }

  .glow-brand {
    background: linear-gradient(135deg, #e81cff, #40c9ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 20px rgba(232, 28, 255, 0.5);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes gradient {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  @media (max-width: 768px) {
    .card-content {
      padding: 24px;
    }

    .heading {
      font-size: 30px;
    }

    .role-title {
      font-size: 34px;
    }

    .card-footer {
      flex-direction: column;
      gap: 10px;
      text-align: center;
    }
  }
`;

export default Hero;