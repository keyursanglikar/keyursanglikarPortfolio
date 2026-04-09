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
      desc: "I build complete web applications from frontend to backend using modern technologies like React, Node.js, and databases."
    },
    {
      title: "Java Developer",
      desc: "Strong foundation in Java with experience in OOP, backend logic, and building scalable applications."
    },
    {
      title: "MERN Stack Developer",
      desc: "Experienced in MongoDB, Express, React, and Node.js to create fast and scalable full-stack applications."
    },
    {
      title: "Python Developer",
      desc: "Skilled in Python for scripting, backend development, and problem solving with clean and efficient code."
    }
  ];

  const [index, setIndex] = useState(0); // Start with first role

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % (rolesData.length + 1)); // +1 for intro
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const showIntro = index === 0;

  return (
    <StyledHero>
      <div className="hero-container">
        {/* LEFT IMAGE */}
        <div className="left">
          <img src={profile} alt="profile" />
        </div>

        {/* RIGHT CONTENT - ALL IN CARDS */}
        <div className="right">
          {showIntro ? (
            // INTRO CARD
            <StyledCardWrapper className="card-container">
              <div className="card">
                <p className="chip">Introduction</p>
                <h1 className="heading">
                  Hi, I'm <span>Keyur Ratnkant Sanglikar</span>
                </h1>
                
                <div className="education">
                  <p className="education-item">🎓 B.Tech in Computer Science (2024 Passout)</p>
                  <p className="education-item">📚 Diploma | 12th | 10th</p>
                </div>

                <p className="description">
                  Passionate developer focused on building scalable web applications
                  and continuously learning new technologies.
                </p>

                <div className="skills-section">
                  <p className="skills-title">Core Skills</p>
                  <div className="skills-grid">
                    <span className="skill-tag">Java</span>
                    <span className="skill-tag">MERN</span>
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">SQL</span>
                  </div>
                </div>

                <div className="card-footer">
                  <p className="footer-text">Powered by passion</p>
                  <p className="brand">Keyur.dev</p>
                </div>
              </div>
            </StyledCardWrapper>
          ) : (
            // ROLE CARD
            <StyledCardWrapper className="card-container">
              <div className="card">
                <p className="chip">Current Focus</p>
                <h2 className="role-title">
                  {rolesData[index - 1].title}
                </h2>
                
                <p className="role-description">
                  {rolesData[index - 1].desc}
                </p>

                <div className="tech-stack">
                  <p className="tech-title">Technologies I use:</p>
                  <div className="tech-icons">
                    {index === 1 && ( // Full Stack
                      <>
                        <span>⚛️ React</span>
                        <span>🟢 Node.js</span>
                        <span>📦 Express</span>
                        <span>🗄️ MongoDB</span>
                      </>
                    )}
                    {index === 2 && ( // Java
                      <>
                        <span>☕ Java</span>
                        <span>🔧 Spring</span>
                        <span>🗄️ Hibernate</span>
                        <span>🛠️ Maven</span>
                      </>
                    )}
                    {index === 3 && ( // MERN
                      <>
                        <span>⚛️ React</span>
                        <span>🟢 Node.js</span>
                        <span>📦 Express</span>
                        <span>🗄️ MongoDB</span>
                      </>
                    )}
                    {index === 4 && ( // Python
                      <>
                        <span>🐍 Python</span>
                        <span>📊 Django</span>
                        <span>🔬 Flask</span>
                        <span>📈 Pandas</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="card-footer">
                  <p className="footer-text">Specialized in</p>
                  <p className="brand">{rolesData[index - 1].title}</p>
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
  background: #04000c;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  .hero-container {
    max-width: 1400px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 60px;
    padding: 0 40px;
  }

  /* LEFT IMAGE */
  .left {
    flex: 1;
    display: flex;
    justify-content: center;
    
    img {
      width: 450px;
      height: 500px;
      object-fit: cover;
      border-radius: 20px;
      animation: float 3s ease-in-out infinite;
      box-shadow: 0 20px 30px -10px rgba(0, 245, 255, 0.2);
    }
  }

  /* FLOAT ANIMATION */
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
  }

  /* RIGHT SIDE */
  .right {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .card-container {
    width: 100%;
    max-width: 550px;
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
    min-height: 500px;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    padding: 32px;
    gap: 24px;
    border-radius: 24px;
    color: white;
    animation: fadeIn 0.5s ease-in-out;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .card::before {
    content: '';
    position: absolute;
    inset: 0;
    left: -5px;
    margin: auto;
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    border-radius: 28px;
    background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100%);
    z-index: -10;
    pointer-events: none;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card::after {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%);
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
    opacity: 0.7;
  }

  .card:hover::after {
    filter: blur(30px);
  }

  .card:hover::before {
    transform: rotate(-90deg) scaleX(1.34) scaleY(0.77);
  }

  .chip {
    display: inline-block;
    padding: 8px 16px;
    background: linear-gradient(90deg, #e81cff20, #40c9ff20);
    border-radius: 30px;
    font-size: 14px;
    color: #40c9ff;
    border: 1px solid #40c9ff40;
    width: fit-content;
  }

  .heading {
    font-size: 36px;
    font-weight: 700;
    line-height: 1.3;
    margin: 0;

    span {
      background: linear-gradient(90deg, #00f5ff, #973bed);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      display: block;
      font-size: 42px;
      margin-top: 8px;
    }
  }

  .role-title {
    font-size: 42px;
    font-weight: 700;
    background: linear-gradient(90deg, #00f5ff, #ff00ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 10px 0;
    line-height: 1.2;
  }

  .education {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 10px 0;
  }

  .education-item {
    font-size: 18px;
    color: #ccc;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .description, .role-description {
    font-size: 18px;
    line-height: 1.6;
    color: #aaa;
    margin: 10px 0;
  }

  .skills-section, .tech-stack {
    margin: 15px 0;
  }

  .skills-title, .tech-title {
    font-size: 16px;
    color: #888;
    margin-bottom: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .skills-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .skill-tag {
    padding: 8px 16px;
    background: linear-gradient(90deg, #e81cff20, #40c9ff20);
    border-radius: 30px;
    font-size: 14px;
    color: #fff;
    border: 1px solid #40c9ff40;
    transition: all 0.3s ease;
  }

  .skill-tag:hover {
    background: linear-gradient(90deg, #e81cff, #40c9ff);
    transform: translateY(-2px);
  }

  .tech-icons {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    
    span {
      padding: 8px 16px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 30px;
      font-size: 14px;
      color: #40c9ff;
      border: 1px solid #40c9ff40;
    }
  }

  .card-footer {
    margin-top: auto;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer-text {
    font-size: 14px;
    color: #888;
  }

  .brand {
    color: #e81cff;
    font-weight: 600;
    font-size: 18px;
    background: linear-gradient(90deg, #e81cff, #40c9ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    .card {
      padding: 24px;
      min-height: 450px;
    }

    .heading {
      font-size: 28px;
      
      span {
        font-size: 32px;
      }
    }

    .role-title {
      font-size: 32px;
    }

    .education-item {
      font-size: 16px;
    }

    .card-footer {
      flex-direction: column;
      gap: 10px;
      text-align: center;
    }
  }
`;

export default Hero;