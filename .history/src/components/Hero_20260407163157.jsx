// // import React, { useEffect, useState } from "react";
// // import styled from "styled-components";
// // import profile from "../assets/p-pic.jpg";
// // import './CSS/Hero.css'

// // const Hero = () => {

// //   const rolesData = [
// //     {
// //       title: "Full Stack Developer",
// //       desc: "I build complete web applications from frontend to backend using modern technologies like React, Node.js, and databases."
// //     },
// //     {
// //       title: "Java Developer",
// //       desc: "Strong foundation in Java with experience in OOP, backend logic, and building scalable applications."
// //     },
// //     {
// //       title: "MERN Stack Developer",
// //       desc: "Experienced in MongoDB, Express, React, and Node.js to create fast and scalable full-stack applications."
// //     },
// //     {
// //       title: "Python Developer",
// //       desc: "Skilled in Python for scripting, backend development, and problem solving with clean and efficient code."
// //     }
// //   ];

// //  const [index, setIndex] = useState(-1);

// // useEffect(() => {
// //   const interval = setInterval(() => {
// //     setIndex((prev) => {
// //       if (prev === rolesData.length - 1) return -1; // back to intro
// //       return prev + 1;
// //     });
// //   }, 4000);

// //   return () => clearInterval(interval);
// // }, []);

// //   return (
    
// //       <div className="hero">

// //         {/* LEFT IMAGE */}
// //         <div className="left">
// //           <img src={profile} alt="profile" />
// //         </div>

// //         {/* RIGHT CONTENT */}
// //         <div className="right">

// //           {/* INTRO */}
// //           {index === -1 && (
// //             <div className="intro">
// //               <h1>
// //                 Hi, I'm <span>Keyur Ratnkant Sanglikar</span>
// //               </h1>

// //               <p>
// //                 B.Tech in Computer Science (2024 Passout) <br />
// //                 Diploma | 12th | 10th <br /><br />

// //                 Passionate developer focused on building scalable web applications
// //                 and continuously learning new technologies.
// //               </p>

// //               <div className="extra">
// //                 <p><strong>Skills:</strong> Java, MERN, Python, SQL</p>
              
// //               </div>
// //             </div>
// //           )}

// //           {/* DYNAMIC ROLE */}
// //        {index === -1 ? (
// //   <div className="intro">
// //     ...
// //   </div>
// // ) : (
// //   rolesData[index] && (
// //     <div className="role-box">
// //       <h2 className="role-title">
// //         {rolesData[index].title}
// //       </h2>
// //       <p className="role-desc">
// //         {rolesData[index].desc}
// //       </p>
// //     </div>
// //   )
// // )}

// //         </div>

// //       </div>

// //   );
// // };

// // export default Hero;

// import React, { useEffect, useState } from "react";
// import profile from "../assets/p-pic.jpg";
// import "./CSS/Hero.css";
// import reactIcon from '../assets/react.svg'
// import activeIcon from '../assets/active.svg'
// import java from '../assets/java.svg';
// import python from '../assets/pythton.svg';
// import FullStack from '../assets/FullStack.svg';

// const Hero = () => {
//   const rolesData = [
//     {
//       title: "Full Stack Developer",
//       desc: "I build complete web applications from frontend to backend using modern technologies like React, Node.js, and databases.",
//       icon: <img src={FullStack} alt="React" className="icons-card" />,
//       tech: ["React", "Node.js", "Express", "MongoDB", "PostgreSQL"]
//     },
//     {
//       title: "Java Developer",
//       desc: "Strong foundation in Java with experience in OOP, backend logic, and building scalable applications.",
//       icon: <img src={java} alt="React" className="icons-card" />,
//       tech: ["Java", "Spring Boot", "Hibernate", "Maven", "REST APIs"]
//     },
//     {
//       title: "MERN Stack Developer",
//       desc: "Experienced in MongoDB, Express, React, and Node.js to create fast and scalable full-stack applications.",
//       icon: <img src={reactIcon} alt="React" className="icons-card" />,
//       tech: ["MongoDB", "Express.js", "React", "Node.js", "Redux"]
//     },
//     {
//       title: "Python Developer",
//       desc: "Skilled in Python for scripting, backend development, and problem solving with clean and efficient code.",
//       icon: <img src={python} alt="React" className="icons-card" />,
//       tech: ["Python", "Django", "Flask", "FastAPI", "Pandas"]
//     }
//   ];

//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % (rolesData.length + 1));
//     }, 8000);

//     return () => clearInterval(interval);
//   }, []);

//   const showIntro = index === 0;

//   return (
//     <div className="hero">
//       <div className="hero-container">
//         <div className="reach-section">
//           <div className="reach-card">
//             <h3 className="reach-title">📬 Reach Me</h3>
            
//             <div className="reach-item">
//               <span className="reach-icon">
//                 {/* Fixed SVG - changed class to className */}
//                 <svg width="25px" height="30px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M2 11.9556C2 8.47078 2 6.7284 2.67818 5.39739C3.27473 4.22661 4.22661 3.27473 5.39739 2.67818C6.7284 2 8.47078 2 11.9556 2H20.0444C23.5292 2 25.2716 2 26.6026 2.67818C27.7734 3.27473 28.7253 4.22661 29.3218 5.39739C30 6.7284 30 8.47078 30 11.9556V20.0444C30 23.5292 30 25.2716 29.3218 26.6026C28.7253 27.7734 27.7734 28.7253 26.6026 29.3218C25.2716 30 23.5292 30 20.0444 30H11.9556C8.47078 30 6.7284 30 5.39739 29.3218C4.22661 28.7253 3.27473 27.7734 2.67818 26.6026C2 25.2716 2 23.5292 2 20.0444V11.9556Z" fill="white"/>
//                   <path d="M22.0515 8.52295L16.0644 13.1954L9.94043 8.52295V8.52421L9.94783 8.53053V15.0732L15.9954 19.8466L22.0515 15.2575V8.52295Z" fill="#EA4335"/>
//                   <path d="M23.6231 7.38639L22.0508 8.52292V15.2575L26.9983 11.459V9.17074C26.9983 9.17074 26.3978 5.90258 23.6231 7.38639Z" fill="#FBBC05"/>
//                   <path d="M22.0508 15.2575V23.9924H25.8428C25.8428 23.9924 26.9219 23.8813 26.9995 22.6513V11.459L22.0508 15.2575Z" fill="#34A853"/>
//                   <path d="M9.94811 24.0001V15.0732L9.94043 15.0669L9.94811 24.0001Z" fill="#C5221F"/>
//                   <path d="M9.94014 8.52404L8.37646 7.39382C5.60179 5.91001 5 9.17692 5 9.17692V11.4651L9.94014 15.0667V8.52404Z" fill="#C5221F"/>
//                   <path d="M9.94043 8.52441V15.0671L9.94811 15.0734V8.53073L9.94043 8.52441Z" fill="#C5221F"/>
//                   <path d="M5 11.4668V22.6591C5.07646 23.8904 6.15673 24.0003 6.15673 24.0003H9.94877L9.94014 15.0671L5 11.4668Z" fill="#4285F4"/>
//                 </svg>
//               </span>
//               <a href="mailto:sanglikarkeyur@gmail.com" className="reach-link">
//                 sanglikarkeyur@gmail.com
//               </a>
//             </div>

//             <div className="reach-item">
//               <span className="reach-icon">
//                 {/* Fixed SVG - changed class to className */}
//                 <svg width="25px" height="30px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M256 853.333333V170.666667c0-46.933333 38.4-85.333333 85.333333-85.333334h341.333334c46.933333 0 85.333333 38.4 85.333333 85.333334v682.666666c0 46.933333-38.4 85.333333-85.333333 85.333334H341.333333c-46.933333 0-85.333333-38.4-85.333333-85.333334z" fill="#37474F" />
//                   <path d="M682.666667 149.333333H341.333333c-12.8 0-21.333333 8.533333-21.333333 21.333334v618.666666c0 12.8 8.533333 21.333333 21.333333 21.333334h341.333334c12.8 0 21.333333-8.533333 21.333333-21.333334V170.666667c0-12.8-8.533333-21.333333-21.333333-21.333334z" fill="#BBDEFB" />
//                   <path d="M448 853.333333h128v42.666667h-128z" fill="#78909C" />
//                 </svg>
//               </span>
//               <a href="tel:+9518721792" className="reach-link">
//                 9518721792
//               </a>
//             </div>

//             <div className="reach-item availability">
//               <span className="reach-icon">⏳</span>
//               <div className="availability-tags">
//                 <span className="avail-tag">Full Time</span>
//                 <span className="avail-tag">Part Time</span>
//                 <span className="avail-tag">Freelance</span>
//               </div>
//             </div>

//             <div className="reach-item social-links">
//               <span className="reach-icon">
//                 {/* Fixed SVG - changed stroke-width, fill-rule, and xmlns:xlink */}
//                 <svg className="svg-social-icon" width="25px" height="25px" viewBox="0 -0.5 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
//                   <title>Github-color</title>
//                   <desc>Created with Sketch.</desc>
//                   <defs></defs>
//                   <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
//                     <g id="Color-" transform="translate(-700.000000, -560.000000)" fill="#3E75C3">
//                       <path d="M723.9985,560 C710.746,560 700,570.787092 700,584.096644 C700,594.740671 706.876,603.77183 716.4145,606.958412 C717.6145,607.179786 718.0525,606.435849 718.0525,605.797328 C718.0525,605.225068 718.0315,603.710086 718.0195,601.699648 C711.343,603.155898 709.9345,598.469394 709.9345,598.469394 C708.844,595.686405 707.2705,594.94548 707.2705,594.94548 C705.091,593.450075 707.4355,593.480194 707.4355,593.480194 C709.843,593.650366 711.1105,595.963499 711.1105,595.963499 C713.2525,599.645538 716.728,598.58234 718.096,597.964902 C718.3135,596.407754 718.9345,595.346062 719.62,594.743683 C714.2905,594.135281 708.688,592.069123 708.688,582.836167 C708.688,580.205279 709.6225,578.054788 711.1585,576.369634 C710.911,575.759726 710.0875,573.311058 711.3925,569.993458 C711.3925,569.993458 713.4085,569.345902 717.9925,572.46321 C719.908,571.928599 721.96,571.662047 724.0015,571.651505 C726.04,571.662047 728.0935,571.928599 730.0105,572.46321 C734.5915,569.345902 736.603,569.993458 736.603,569.993458 C737.9125,573.311058 737.089,575.759726 736.8415,576.369634 C738.3805,578.054788 739.309,580.205279 739.309,582.836167 C739.309,592.091712 733.6975,594.129257 728.3515,594.725612 C729.2125,595.469549 729.9805,596.939353 729.9805,599.18773 C729.9805,602.408949 729.9505,605.006706 729.9505,605.797328 C729.9505,606.441873 730.3825,607.191834 731.6005,606.9554 C741.13,603.762794 748,594.737659 748,584.096644 C748,570.787092 737.254,560 723.9985,560" id="Github"></path>
//                     </g>
//                   </g>
//                 </svg>
//               </span>
//               <div className="social-icons">
//                 <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
//                   <span>GitHub</span>
//                 </a>
//               </div>
//             </div>

//             <div className="reach-item">
//               <span className="reach-icon">
//                 {/* This LinkedIn SVG is already correct */}
//                 <svg width="25px" height="25px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
//                   <path fill="#0A66C2" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"/>
//                 </svg>
//               </span>
//               <div className="social-icons">
//                 <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
//                   <span>LinkedIn</span>
//                 </a>
//               </div>
//             </div>

//             <div className="reach-item">
//               <span className="reach-icon">📍</span>
//               <span className="reach-text">Pune, Maharashtra, India</span>
//             </div>
//           </div>
//         </div>

//         {/* LEFT IMAGE */}
//         <div className="left">
//           <div className="image-wrapper">
//             <img src={profile} alt="profile" />
//             <div className="glow"></div>
//           </div>
//         </div>
     
//         {/* RIGHT CONTENT */}
//         <div className="right">
//           {showIntro ? (
//             // INTRO CARD
//             <div className="card-container">
//               <div className="card">
//                 <div className="card-glow"></div>
//                 <div className="card-content">
//                   <span className="chip">✨ INTRODUCTION</span>
                  
//                   <h1 className="heading">
//                     Hi, I'm <span className="gradient-text">Keyur Ratnkant Sanglikar</span>
//                   </h1>
                  
//                   <div className="badge-container">
//                     <span className="badge">💻 Full Stack Developer</span>
//                     <span className="badge">🌟 5+ Projects</span>
//                   </div>

//                   <div className="education-section">
//                     <p className="education-item">
//                       <span className="emoji">📚</span>
//                       <span className="text">Degree in Computer Science Engineering   Year :- 2024</span>
//                     </p>
//                     <p className="education-item">
//                       <span className="emoji">📚</span>
//                       <span className="text">Diploma in Electronics and Telecommunication Engineering  | Year :- 2021 </span>
//                     </p>
//                     <p className="education-item">
//                       <span className="emoji">🏆</span>
//                       <span className="text">12th Science | Year :- 2019</span>
//                     </p>
//                     <p className="education-item">
//                       <span className="emoji">⭐</span>
//                       <span className="text">10th  | Year :- 2017 </span>
//                     </p>
//                   </div>

//                   <p className="highlight-description">
//                     Passionate developer focused on building <span className="glow-text">Scalable Web applications , Softwares</span> 
//                     and continuously learning <span className="glow-text">new technologies</span>.
//                   </p>

//                   <div className="skills-container">
//                     <p className="section-label">⚡ CORE EXPERTISE</p>
//                     <div className="skills-grid">
//                       <span className="skill-tag">Java</span>
//                       <span className="skill-tag">MERN</span>
//                       <span className="skill-tag">Python</span>
//                       <span className="skill-tag">SQL</span>
//                       <span className="skill-tag">TypeScript</span>
//                       <span className="skill-tag">Docker</span>
//                     </div>
//                   </div>

//                   <div className="card-footer">
//                     <p className="footer-left">✨ Available for opportunities</p>
//                     <p className="footer-right glow-brand">Keyur.dev</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             // ROLE CARD
//             <div className="card-container">
//               <div className="card">
//                 <div className="card-glow"></div>
//                 <div className="card-content">
//                   <div className="role-header">
//                     <span className="role-icon">{rolesData[index - 1].icon}</span>
//                     <span className="chip"><img className="icons-card" alt="active" src={activeIcon}></img> ACTIVE </span>
//                   </div>
                  
//                   <h2 className="role-title gradient-text">
//                     {rolesData[index - 1].title}
//                   </h2>
                  
//                   <div className="role-description-container">
//                     <p className="role-description">
//                       {rolesData[index - 1].desc}
//                     </p>
//                   </div>

//                   <div className="tech-stack-container">
//                     <p className="section-label">🛠️ TECH STACK</p>
//                     <div className="tech-grid">
//                       {rolesData[index - 1].tech.map((tech, i) => (
//                         <span key={i} className="tech-item">
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="achievement-badges">
//                     <span className="achievement-badge">
//                       <span className="badge-icon">🏆</span>
//                       <span className="badge-text">Expert</span>
//                     </span>
//                     <span className="achievement-badge">
//                       <span className="badge-icon">📦</span>
//                       <span className="badge-text">5+ Projects</span>
//                     </span>
//                     <span className="achievement-badge">
//                       <span className="badge-icon">⭐</span>
//                       <span className="badge-text">2 Years Exp</span>
//                     </span>
//                   </div>

//                   <div className="card-footer">
//                     <p className="footer-left">⚡ Ready to build</p>
//                     <p className="footer-right glow-brand">{rolesData[index - 1].title}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;










import React, { useEffect, useState, useRef } from "react";
import profile from "../assets/p-pic.jpg";
import "./CSS/Hero.css";

/* ── Rotating roles ── */
const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Java Developer",
  "Python Developer",
];

/* ── Tech stack pills ── */
const skills = ["Html5", "Css3","JavaScript","TypeScript","React", "Node.js", "ExpressJs", "MongoDb", "Java", "Jdbc","Servlet","Maven","Spring","Springboot" ,"Python","Flask" ,"Django" "Docker", "SQL"];

/* ── Social / contact data ── */
const contacts = [
  {
    label: "sanglikarkeyur@gmail.com",
    href: "mailto:sanglikarkeyur@gmail.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: "+91 9518721792",
    href: "tel:+919518721792",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.1 1.18 2 2 0 012.08.01h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 7.9a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 14.92z"/>
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/yourusername",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
];

/* ── Typewriter hook ── */
function useTypewriter(words, speed = 80, pause = 2000) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, speed);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      }, speed / 2);
    } else {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

/* ── Main component ── */
export default function Hero() {
  const roleText = useTypewriter(roles);
  const [mounted, setMounted] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    // stagger entrance
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  /* subtle parallax on profile image */
  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 10;
    const y = (e.clientY / innerHeight - 0.5) * 10;
    imageRef.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  return (
    <section
      className="hero"
      id="home"
      onMouseMove={handleMouseMove}
    >
      {/* ── background ── */}
      <div className="hero-orb hero-orb--1" />
      <div className="hero-orb hero-orb--2" />
      <div className="hero-orb hero-orb--3" />
      <div className="hero-grid" />
      <div className="hero-scanline" />

      <div className={`hero-inner ${mounted ? "hero-inner--mounted" : ""}`}>

        {/* ══════════════════════
            LEFT — CONTACT CARD
        ══════════════════════ */}
        <aside className="hero-contact">
          <div className="hero-contact__label">
            <div className="hero-pulse" />
            <span>Available for work</span>
          </div>

          <ul className="hero-contact__list">
            {contacts.map(({ label, href, icon }) => (
              <li key={label} className="hero-contact__item">
                <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="hero-contact__link">
                  <span className="hero-contact__icon">{icon}</span>
                  <span className="hero-contact__text">{label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="hero-avail">
            {["Full Time", "Part Time", "Freelance"].map((t) => (
              <span key={t} className="hero-avail__tag">{t}</span>
            ))}
          </div>

          <div className="hero-contact__location">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            Pune, Maharashtra, India
          </div>
        </aside>

        {/* ══════════════════════
            CENTER — PHOTO
        ══════════════════════ */}
        <div className="hero-photo-wrap">
          <div className="hero-photo-ring" />
          <div className="hero-photo-ring hero-photo-ring--2" />
          <div className="hero-photo" ref={imageRef}>
            <img src={profile} alt="Keyur Sanglikar" />
          </div>
          {/* floating status badge */}
          <div className="hero-photo-badge">
            <span className="hero-photo-badge__dot" />
            Open to opportunities
          </div>
        </div>

        {/* ══════════════════════
            RIGHT — INTRO
        ══════════════════════ */}
        <div className="hero-content">

          {/* label */}
          <div className="hero-content__eyebrow">
            <span className="hero-content__chip">✦ Portfolio 2026</span>
          </div>

          {/* name */}
          <h1 className="hero-content__name">
            Keyur<br />
            <span className="hero-content__name--accent">Sanglikar</span>
          </h1>

          {/* typewriter role */}
          <div className="hero-content__role">
            <span className="hero-content__role-label">I'm a</span>
            <span className="hero-content__role-text">
              {roleText}
              <span className="hero-content__cursor" />
            </span>
          </div>

          {/* short bio */}
          <p className="hero-content__bio">
            B.Tech CSE graduate (2024) passionate about building
            <span className="hero-highlight"> scalable web apps</span> and crafting
            clean, performant software with modern technologies.
          </p>

          {/* skills */}
          <div className="hero-skills">
            {skills.map((s, i) => (
              <span
                key={s}
                className="hero-skill"
                style={{ animationDelay: `${0.6 + i * 0.07}s` }}
              >
                {s}
              </span>
            ))}
          </div>

          {/* education strip */}
          <div className="hero-edu">
            <div className="hero-edu__item">
              <span className="hero-edu__year">2024</span>
              <span className="hero-edu__degree">B.Tech · Computer Science Engineering</span>
            </div>
            <div className="hero-edu__item">
              <span className="hero-edu__year">2021</span>
              <span className="hero-edu__degree">Diploma · Electronics & Telecom</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="hero-ctas">
            <a href="#projects" className="hero-cta hero-cta--primary">
              View Projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
            <a href="#contact" className="hero-cta hero-cta--ghost">
              Contact Me
            </a>
          </div>

          {/* stats row */}
          <div className="hero-stats">
            {[
              { val: "5+", label: "Projects" },
              { val: "2+", label: "Years Exp" },
              { val: "3+", label: "Internships" },
            ].map(({ val, label }) => (
              <div key={label} className="hero-stat">
                <span className="hero-stat__val">{val}</span>
                <span className="hero-stat__label">{label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}








