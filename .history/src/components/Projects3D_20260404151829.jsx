// import React, { useState, useRef } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Environment, PerspectiveCamera, Sparkles } from '@react-three/drei';
// import { motion, AnimatePresence } from 'framer-motion';
// import RealisticCharacter from './RealisticCharacter';
// import './CSS/Projects.css';

// const projects = [
//   {
//     id: 1,
//     title: "MERN Stack App",
//     desc: "Full stack web application with authentication, CRUD operations, and real-time features.",
//     longDesc: "Built a complete MERN stack application with JWT authentication, MongoDB database, and responsive UI. Features include user profiles, post creation, comments, and real-time notifications.",
//     tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
//     icon: "⚛️",
//     gradient: "linear-gradient(135deg, #61DAFB, #00aaff)",
//     color: "#61DAFB",
//     features: ["User Authentication", "CRUD Operations", "RESTful API", "Real-time Updates", "Responsive Design"],
//     demoLink: "#",
//     githubLink: "#"
//   },
//   {
//     id: 2,
//     title: "Java Backend System",
//     desc: "Scalable backend system with multi-threading and optimized database queries.",
//     longDesc: "Enterprise-level backend system built with Java and JDBC. Implements multi-threading for concurrent processing, connection pooling, and optimized SQL queries.",
//     tech: ["Java", "MySQL", "JDBC", "Threads", "Maven"],
//     icon: "☕",
//     gradient: "linear-gradient(135deg, #ff5500, #007396)",
//     color: "#ff5500",
//     features: ["Multi-threading", "Connection Pooling", "Query Optimization", "Transaction Management", "REST APIs"],
//     demoLink: "#",
//     githubLink: "#"
//   },
//   {
//     id: 3,
//     title: "Portfolio 3D Website",
//     desc: "Immersive portfolio with 3D animations and interactive elements.",
//     longDesc: "Modern portfolio website featuring 3D models, smooth animations, and interactive UI components. Built with React and Three.js.",
//     tech: ["React", "Three.js", "Framer Motion", "CSS3"],
//     icon: "🎨",
//     gradient: "linear-gradient(135deg, #E34F26, #1572B6)",
//     color: "#E34F26",
//     features: ["3D Animations", "Smooth Transitions", "Interactive UI", "Responsive Design", "Dark Mode"],
//     demoLink: "#",
//     githubLink: "#"
//   },
//   {
//     id: 4,
//     title: "Python Automation Tool",
//     desc: "Automation scripts with GUI for data processing and task scheduling.",
//     longDesc: "Comprehensive automation tool with user-friendly GUI. Handles web scraping, data processing, file operations, and scheduled tasks automatically.",
//     tech: ["Python", "Pandas", "Selenium", "PyQt5", "Schedule"],
//     icon: "🐍",
//     gradient: "linear-gradient(135deg, #3776AB, #ffd43b)",
//     color: "#3776AB",
//     features: ["Web Scraping", "Data Processing", "GUI Interface", "Task Scheduling", "Email Reports"],
//     demoLink: "#",
//     githubLink: "#"
//   }
// ];

// function Projects3D() {
//   const [currentPage, setCurrentPage] = useState(0);
//   const [isPointing, setIsPointing] = useState(false);
//   const [isReaching, setIsReaching] = useState(false);
//   const [isFlipping, setIsFlipping] = useState(false);
//   const [showDetails, setShowDetails] = useState(false);
//   const [autoRotate, setAutoRotate] = useState(true);
//   const cardRef = useRef();

//   const handlePageFlip = () => {
//     setIsFlipping(true);
//     setTimeout(() => {
//       setIsFlipping(false);
//     }, 800);
//   };

//   const handleNext = () => {
//     if (currentPage < projects.length - 1 && !isReaching) {
//       setIsPointing(true);
//       setTimeout(() => {
//         setIsPointing(false);
//         setIsReaching(true);
        
//         if (cardRef.current) {
//           cardRef.current.classList.add('flipping');
//           setTimeout(() => {
//             setCurrentPage(prev => prev + 1);
//             setShowDetails(false);
//             setTimeout(() => {
//               if (cardRef.current) cardRef.current.classList.remove('flipping');
//             }, 500);
//           }, 400);
//         }
        
//         setTimeout(() => {
//           setIsReaching(false);
//         }, 1000);
//       }, 500);
//     }
//   };

//   const handlePrev = () => {
//     if (currentPage > 0 && !isReaching) {
//       setIsPointing(true);
//       setTimeout(() => {
//         setIsPointing(false);
//         setIsReaching(true);
        
//         if (cardRef.current) {
//           cardRef.current.classList.add('flipping');
//           setTimeout(() => {
//             setCurrentPage(prev => prev - 1);
//             setShowDetails(false);
//             setTimeout(() => {
//               if (cardRef.current) cardRef.current.classList.remove('flipping');
//             }, 500);
//           }, 400);
//         }
        
//         setTimeout(() => {
//           setIsReaching(false);
//         }, 1000);
//       }, 500);
//     }
//   };

//   const handleDotClick = (index) => {
//     if (index !== currentPage && !isReaching) {
//       if (index > currentPage) {
//         handleNext();
//       } else {
//         handlePrev();
//       }
//     }
//   };

//   const speakProject = () => {
//     const utterance = new SpeechSynthesisUtterance(
//       `${projects[currentPage].title}. ${projects[currentPage].desc}`
//     );
//     utterance.rate = 0.8;
//     utterance.pitch = 1;
//     utterance.volume = 0.6;
//     window.speechSynthesis.cancel();
//     window.speechSynthesis.speak(utterance);
//   };

//   return (
//     <section className="projects-3d-section" id="projects">
//       <div className="projects-3d-container">
//         <h2 className="section-title-3d">
//           <span className="title-glow">✨</span>
//           Interactive Projects
//           <span className="title-line-3d"></span>
//         </h2>
        
//         <div className="projects-3d-layout">
//           {/* 3D Canvas with Realistic Character */}
//           <div className="canvas-3d-wrapper">
//             <Canvas 
//               shadows 
//               camera={{ position: [0, 1.5, 8], fov: 45 }}
//               style={{ background: 'transparent' }}
//             >
//               <PerspectiveCamera makeDefault position={[0, 1.5, 8]} />
//               <ambientLight intensity={0.6} />
//               <directionalLight 
//                 position={[5, 5, 5]} 
//                 intensity={1} 
//                 castShadow 
//                 shadow-mapSize-width={1024}
//                 shadow-mapSize-height={1024}
//               />
//               <pointLight position={[0, 3, 2]} intensity={0.5} color="#ffaa66" />
//               <pointLight position={[2, 1, 3]} intensity={0.3} color="#4466ff" />
//               <Environment preset="city" background={false} />
              
//               <RealisticCharacter 
//                 isPointing={isPointing}
//                 isReaching={isReaching}
//                 currentPage={currentPage}
//                 totalPages={projects.length}
//                 onPageFlip={handlePageFlip}
//                 position={[0, -1, 0]}
//               />
              
//               <Sparkles 
//                 count={100}
//                 scale={[8, 8, 8]}
//                 size={0.2}
//                 speed={0.5}
//                 color="#61DAFB"
//               />
              
//               <OrbitControls 
//                 enableZoom={true}
//                 enablePan={true}
//                 minDistance={4}
//                 maxDistance={12}
//                 autoRotate={autoRotate}
//                 autoRotateSpeed={1.2}
//                 enableDamping
//                 dampingFactor={0.05}
//                 target={[0, 1, 0]}
//               />
//             </Canvas>
            
//             <button 
//               className="rotate-toggle"
//               onClick={() => setAutoRotate(!autoRotate)}
//             >
//               {autoRotate ? '🔒 Lock View' : '🔄 Auto Rotate'}
//             </button>
//           </div>
          
//           {/* Project Card */}
//           <div className="project-card-3d-wrapper">
//             <div 
//               ref={cardRef}
//               className={`project-card-3d ${isFlipping ? 'flipping' : ''}`}
//               style={{
//                 background: `linear-gradient(135deg, rgba(10, 10, 40, 0.95), rgba(20, 20, 60, 0.95))`,
//                 borderLeft: `4px solid ${projects[currentPage].color}`
//               }}
//             >
//               <div className="card-glow" style={{ background: projects[currentPage].color }}></div>
              
//               <div className="card-header-3d">
//                 <div className="project-icon-3d" style={{ background: projects[currentPage].gradient }}>
//                   {projects[currentPage].icon}
//                 </div>
//                 <div className="page-counter">
//                   <span className="current-page">{String(currentPage + 1).padStart(2, '0')}</span>
//                   <span className="total-pages">/{String(projects.length).padStart(2, '0')}</span>
//                 </div>
//               </div>
              
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={currentPage}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.4 }}
//                   className="card-content-3d"
//                 >
//                   <h3 className="project-title-3d" style={{ color: projects[currentPage].color }}>
//                     {projects[currentPage].title}
//                   </h3>
                  
//                   <p className="project-desc-3d">
//                     {showDetails ? projects[currentPage].longDesc : projects[currentPage].desc}
//                   </p>
                  
//                   <button 
//                     className="read-more-3d"
//                     onClick={() => setShowDetails(!showDetails)}
//                     style={{ color: projects[currentPage].color }}
//                   >
//                     {showDetails ? 'Show Less' : 'Read More'}
//                     <span className="arrow">{showDetails ? '↑' : '↓'}</span>
//                   </button>
                  
//                   <div className="tech-stack-3d">
//                     {projects[currentPage].tech.map((tech, idx) => (
//                       <span 
//                         key={idx} 
//                         className="tech-tag-3d"
//                         style={{ 
//                           background: `${projects[currentPage].color}20`,
//                           borderColor: projects[currentPage].color,
//                           color: projects[currentPage].color
//                         }}
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
                  
//                   <div className="features-grid-3d">
//                     {projects[currentPage].features.map((feature, idx) => (
//                       <div key={idx} className="feature-item-3d">
//                         <span className="feature-check">✓</span>
//                         <span className="feature-text-3d">{feature}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
              
//               <div className="card-footer-3d">
//                 <div className="project-actions">
//                   <a 
//                     href={projects[currentPage].demoLink} 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="demo-btn-3d"
//                     style={{ background: projects[currentPage].gradient }}
//                   >
//                     Live Demo
//                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//                       <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2"/>
//                     </svg>
//                   </a>
//                   <a 
//                     href={projects[currentPage].githubLink} 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="github-btn-3d"
//                     style={{ borderColor: projects[currentPage].color }}
//                   >
//                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//                       <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2"/>
//                     </svg>
//                     Code
//                   </a>
//                 </div>
                
//                 <button className="speak-btn" onClick={speakProject}>
//                   🔊 Listen
//                 </button>
//               </div>
//             </div>
            
//             {/* Navigation Controls */}
//             <div className="navigation-3d">
//               <button 
//                 className="nav-3d prev-3d"
//                 onClick={handlePrev}
//                 disabled={currentPage === 0}
//               >
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//                   <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//                 </svg>
//                 Previous
//               </button>
              
//               <div className="dots-3d">
//                 {projects.map((_, idx) => (
//                   <button
//                     key={idx}
//                     className={`dot-3d ${idx === currentPage ? 'active' : ''}`}
//                     onClick={() => handleDotClick(idx)}
//                     style={{
//                       background: idx === currentPage ? projects[currentPage].color : 'rgba(255,255,255,0.3)',
//                       width: idx === currentPage ? '30px' : '8px'
//                     }}
//                   />
//                 ))}
//               </div>
              
//               <button 
//                 className="nav-3d next-3d"
//                 onClick={handleNext}
//                 disabled={currentPage === projects.length - 1}
//               >
//                 Next
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//                   <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects3D;



// Projects3D.jsx
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera, Sparkles, Html, Text, Float } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import './Projects3D.css';

const projects = [
  {
    id: 1,
    title: "MERN Stack App",
    desc: "Full stack web application with authentication, CRUD operations, and real-time features.",
    longDesc: "Built a complete MERN stack application with JWT authentication, MongoDB database, and responsive UI. Features include user profiles, post creation, comments, and real-time notifications.",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    icon: "⚛️",
    gradient: "linear-gradient(135deg, #61DAFB, #00aaff)",
    color: "#61DAFB",
    features: ["User Authentication", "CRUD Operations", "RESTful API", "Real-time Updates", "Responsive Design"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 2,
    title: "Java Backend System",
    desc: "Scalable backend system with multi-threading and optimized database queries.",
    longDesc: "Enterprise-level backend system built with Java and JDBC. Implements multi-threading for concurrent processing, connection pooling, and optimized SQL queries.",
    tech: ["Java", "MySQL", "JDBC", "Threads", "Maven"],
    icon: "☕",
    gradient: "linear-gradient(135deg, #ff5500, #007396)",
    color: "#ff5500",
    features: ["Multi-threading", "Connection Pooling", "Query Optimization", "Transaction Management", "REST APIs"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 3,
    title: "Portfolio 3D Website",
    desc: "Immersive portfolio with 3D animations and interactive elements.",
    longDesc: "Modern portfolio website featuring 3D models, smooth animations, and interactive UI components. Built with React and Three.js.",
    tech: ["React", "Three.js", "Framer Motion", "CSS3"],
    icon: "🎨",
    gradient: "linear-gradient(135deg, #E34F26, #1572B6)",
    color: "#E34F26",
    features: ["3D Animations", "Smooth Transitions", "Interactive UI", "Responsive Design", "Dark Mode"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 4,
    title: "Python Automation Tool",
    desc: "Automation scripts with GUI for data processing and task scheduling.",
    longDesc: "Comprehensive automation tool with user-friendly GUI. Handles web scraping, data processing, file operations, and scheduled tasks automatically.",
    tech: ["Python", "Pandas", "Selenium", "PyQt5", "Schedule"],
    icon: "🐍",
    gradient: "linear-gradient(135deg, #3776AB, #ffd43b)",
    color: "#3776AB",
    features: ["Web Scraping", "Data Processing", "GUI Interface", "Task Scheduling", "Email Reports"],
    demoLink: "#",
    githubLink: "#"
  }
];

// Realistic 3D Character Component with arm animation
function RealisticCharacter({ isPointing, isReaching, currentPage, totalPages, onPageFlip, isInteracting, targetPosition }) {
  const groupRef = useRef();
  const leftArmRef = useRef();
  const rightArmRef = useRef();
  const headRef = useRef();
  const [armProgress, setArmProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Animate arm when interacting
  useEffect(() => {
    if (isInteracting && !isAnimating) {
      setIsAnimating(true);
      setArmProgress(0);
      
      const interval = setInterval(() => {
        setArmProgress(prev => {
          const newProgress = prev + 0.1;
          if (newProgress >= 1) {
            clearInterval(interval);
            setTimeout(() => {
              setArmProgress(0);
              setIsAnimating(false);
              if (onPageFlip) onPageFlip();
            }, 200);
            return 1;
          }
          return newProgress;
        });
      }, 50);
      
      return () => clearInterval(interval);
    }
  }, [isInteracting, onPageFlip]);
  
  // Smooth idle animation
  useFrame(({ clock }) => {
    if (groupRef.current && !isAnimating && !isInteracting) {
      // Subtle idle bounce
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 1.5) * 0.02;
    }
    
    // Arm animation when reaching
    if (leftArmRef.current && armProgress > 0) {
      // Reaching arm motion
      const reachAngle = armProgress * Math.PI * 0.6;
      leftArmRef.current.rotation.x = -reachAngle * 0.5;
      leftArmRef.current.rotation.z = 0.8 + reachAngle * 0.5;
      leftArmRef.current.position.x = -0.65 + armProgress * 0.4;
      leftArmRef.current.position.z = armProgress * 0.5;
    } else if (leftArmRef.current && !isAnimating) {
      // Return to idle
      leftArmRef.current.rotation.x = 0;
      leftArmRef.current.rotation.z = 0.5;
      leftArmRef.current.position.x = -0.65;
      leftArmRef.current.position.z = 0;
    }
    
    // Head tracking / subtle movement
    if (headRef.current && !isAnimating) {
      headRef.current.rotation.y = Math.sin(Date.now() * 0.001) * 0.1;
    }
  });
  
  return (
    <group ref={groupRef} position={[0, -0.8, 0]} scale={0.9}>
      {/* Body - Torso */}
      <mesh position={[0, 0.9, 0]} castShadow receiveShadow>
        <capsuleGeometry args={[0.45, 0.9, 8, 16]} />
        <meshStandardMaterial color="#3a7bd5" roughness={0.3} metalness={0.1} emissive="#1a3a6a" emissiveIntensity={0.2} />
      </mesh>
      
      {/* Shirt detail */}
      <mesh position={[0, 0.7, 0.46]} castShadow>
        <boxGeometry args={[0.7, 0.4, 0.05]} />
        <meshStandardMaterial color="#2c5aa0" />
      </mesh>
      
      {/* Head */}
      <group ref={headRef} position={[0, 1.55, 0]}>
        {/* Main head shape */}
        <mesh castShadow receiveShadow>
          <sphereGeometry args={[0.48, 64, 64]} />
          <meshStandardMaterial color="#f5d0a9" roughness={0.25} />
        </mesh>
        
        {/* Hair - stylish modern cut */}
        <mesh position={[0, 0.15, -0.38]} castShadow>
          <sphereGeometry args={[0.52, 32, 32]} />
          <meshStandardMaterial color="#2d1b0e" roughness={0.8} />
        </mesh>
        <mesh position={[0, 0.28, -0.32]} castShadow>
          <sphereGeometry args={[0.48, 32, 32]} />
          <meshStandardMaterial color="#3d2b1e" roughness={0.7} />
        </mesh>
        
        {/* Eyes */}
        <mesh position={[-0.16, 0.08, 0.47]} castShadow>
          <sphereGeometry args={[0.09, 48, 48]} />
          <meshStandardMaterial color="#ffffff" roughness={0.1} />
        </mesh>
        <mesh position={[0.16, 0.08, 0.47]} castShadow>
          <sphereGeometry args={[0.09, 48, 48]} />
          <meshStandardMaterial color="#ffffff" roughness={0.1} />
        </mesh>
        
        {/* Irises */}
        <mesh position={[-0.16, 0.07, 0.52]} castShadow>
          <sphereGeometry args={[0.055, 48, 48]} />
          <meshStandardMaterial color="#4a7c59" roughness={0.05} emissive="#2a5c39" emissiveIntensity={0.1} />
        </mesh>
        <mesh position={[0.16, 0.07, 0.52]} castShadow>
          <sphereGeometry args={[0.055, 48, 48]} />
          <meshStandardMaterial color="#4a7c59" roughness={0.05} emissive="#2a5c39" emissiveIntensity={0.1} />
        </mesh>
        
        {/* Pupils */}
        <mesh position={[-0.16, 0.06, 0.55]} castShadow>
          <sphereGeometry args={[0.028, 32, 32]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        <mesh position={[0.16, 0.06, 0.55]} castShadow>
          <sphereGeometry args={[0.028, 32, 32]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        
        {/* Eyebrows */}
        <mesh position={[-0.19, 0.22, 0.47]} rotation={[0, 0, 0.2]} castShadow>
          <boxGeometry args={[0.12, 0.04, 0.05]} />
          <meshStandardMaterial color="#3d2b1e" />
        </mesh>
        <mesh position={[0.19, 0.22, 0.47]} rotation={[0, 0, -0.2]} castShadow>
          <boxGeometry args={[0.12, 0.04, 0.05]} />
          <meshStandardMaterial color="#3d2b1e" />
        </mesh>
        
        {/* Nose */}
        <mesh position={[0, 0.02, 0.52]} castShadow>
          <sphereGeometry args={[0.055, 24, 24]} />
          <meshStandardMaterial color="#e8c4a0" />
        </mesh>
        
        {/* Mouth - friendly smile */}
        <mesh position={[0, -0.08, 0.5]} rotation={[0.2, 0, 0]} castShadow>
          <torusGeometry args={[0.1, 0.025, 16, 48, Math.PI]} />
          <meshStandardMaterial color="#c45c3a" />
        </mesh>
        
        {/* Ears */}
        <mesh position={[-0.48, 0.05, 0]} castShadow>
          <sphereGeometry args={[0.12, 24, 24]} />
          <meshStandardMaterial color="#f5d0a9" />
        </mesh>
        <mesh position={[0.48, 0.05, 0]} castShadow>
          <sphereGeometry args={[0.12, 24, 24]} />
          <meshStandardMaterial color="#f5d0a9" />
        </mesh>
        
        {/* Glasses (cool factor) */}
        <Float speed={2} rotationIntensity={0.1} floatIntensity={0.1}>
          <mesh position={[-0.16, 0.08, 0.56]} castShadow>
            <torusGeometry args={[0.11, 0.02, 16, 64]} />
            <meshStandardMaterial color="#c9b038" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh position={[0.16, 0.08, 0.56]} castShadow>
            <torusGeometry args={[0.11, 0.02, 16, 64]} />
            <meshStandardMaterial color="#c9b038" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0.08, 0.56]} castShadow>
            <boxGeometry args={[0.18, 0.03, 0.02]} />
            <meshStandardMaterial color="#c9b038" metalness={0.8} />
          </mesh>
        </Float>
      </group>
      
      {/* Left Arm - The reaching/interacting arm */}
      <group ref={leftArmRef} position={[-0.65, 1.2, 0]}>
        <mesh rotation={[0, 0, 0.5]} castShadow>
          <capsuleGeometry args={[0.13, 0.7, 8, 12]} />
          <meshStandardMaterial color="#3a7bd5" />
        </mesh>
        {/* Hand */}
        <mesh position={[0, -0.45, 0]} castShadow>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#f5d0a9" />
        </mesh>
        {/* Fingers when reaching */}
        {armProgress > 0.3 && (
          <>
            <mesh position={[0.05, -0.52, 0.08]} castShadow>
              <capsuleGeometry args={[0.04, 0.12, 4, 6]} />
              <meshStandardMaterial color="#f5d0a9" />
            </mesh>
            <mesh position={[-0.03, -0.52, 0.09]} castShadow>
              <capsuleGeometry args={[0.04, 0.12, 4, 6]} />
              <meshStandardMaterial color="#f5d0a9" />
            </mesh>
          </>
        )}
      </group>
      
      {/* Right Arm - idle */}
      <group ref={rightArmRef} position={[0.65, 1.2, 0]}>
        <mesh rotation={[0, 0, -0.5]} castShadow>
          <capsuleGeometry args={[0.13, 0.7, 8, 12]} />
          <meshStandardMaterial color="#3a7bd5" />
        </mesh>
        <mesh position={[0, -0.45, 0]} castShadow>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#f5d0a9" />
        </mesh>
      </group>
      
      {/* Legs */}
      <mesh position={[-0.25, 0.25, 0]} castShadow>
        <capsuleGeometry args={[0.14, 0.7, 8, 12]} />
        <meshStandardMaterial color="#2c5aa0" />
      </mesh>
      <mesh position={[0.25, 0.25, 0]} castShadow>
        <capsuleGeometry args={[0.14, 0.7, 8, 12]} />
        <meshStandardMaterial color="#2c5aa0" />
      </mesh>
      
      {/* Shoes */}
      <mesh position={[-0.25, -0.1, 0.08]} castShadow>
        <boxGeometry args={[0.28, 0.12, 0.35]} />
        <meshStandardMaterial color="#1a1a2e" />
      </mesh>
      <mesh position={[0.25, -0.1, 0.08]} castShadow>
        <boxGeometry args={[0.28, 0.12, 0.35]} />
        <meshStandardMaterial color="#1a1a2e" />
      </mesh>
      
      {/* Name tag / badge */}
      <Html position={[0, 1.2, 0.55]} center distanceFactor={10}>
        <div className="character-name-tag">
          <span className="wave-emoji">👋</span>
          <span>DevPro</span>
        </div>
      </Html>
      
      {/* Floating particles around character */}
      <Sparkles count={30} scale={[1.5, 2, 1.5]} size={0.05} speed={0.8} color="#61dafb" position={[0, 1, 0]} />
    </group>
  );
}

// Button component that character can "click"
function AnimatedButton({ position, onClick, disabled, direction, currentPage, totalPages, color }) {
  const [isHovered, setIsHovered] = useState(false);
  const meshRef = useRef();
  
  useFrame(({ clock }) => {
    if (meshRef.current && isHovered) {
      meshRef.current.scale.setScalar(1 + Math.sin(clock.getElapsedTime() * 10) * 0.03);
    } else if (meshRef.current) {
      meshRef.current.scale.setScalar(1);
    }
  });
  
  return (
    <group position={position}>
      <mesh 
        ref={meshRef}
        onPointerOver={() => setIsHovered(true)}
        onPointerOut={() => setIsHovered(false)}
        onClick={onClick}
        castShadow
      >
        <boxGeometry args={[1.2, 0.5, 0.2]} />
        <meshStandardMaterial 
          color={disabled ? "#555" : color} 
          emissive={!disabled ? color : "#333"}
          emissiveIntensity={isHovered && !disabled ? 0.3 : 0.1}
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>
      <Html position={[0, 0, 0.12]} center distanceFactor={8}>
        <div className={`virtual-button ${disabled ? 'disabled' : ''}`} style={{ color: !disabled ? color : '#888' }}>
          {direction === 'prev' ? '◀ PREV' : 'NEXT ▶'}
        </div>
      </Html>
    </group>
  );
}

// Floating project card in 3D space
function FloatingProjectCard({ project, position, isActive, color }) {
  const cardRef = useRef();
  
  useFrame(({ clock }) => {
    if (cardRef.current && isActive) {
      cardRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.05;
      cardRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 1.2) * 0.03;
    }
  });
  
  return (
    <group ref={cardRef} position={position}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2.2, 2.8, 0.1]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.2} roughness={0.4} emissive={color} emissiveIntensity={0.05} />
      </mesh>
      <Html position={[0, 0, 0.08]} center distanceFactor={8} transform>
        <div className="floating-card-3d" style={{ borderLeftColor: color }}>
          <div className="fc-icon" style={{ background: project.gradient }}>{project.icon}</div>
          <h4 style={{ color }}>{project.title}</h4>
          <p>{project.desc.substring(0, 40)}...</p>
          <div className="fc-tech">
            {project.tech.slice(0, 3).map((t, i) => (
              <span key={i} style={{ background: `${color}20`, borderColor: color, color }}>{t}</span>
            ))}
          </div>
        </div>
      </Html>
    </group>
  );
}

// Main Projects3D Component
function Projects3D() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [flipDirection, setFlipDirection] = useState(null);
  const cardRef = useRef();
  
  const handlePageChange = useCallback((direction) => {
    if (isInteracting) return;
    
    const newPage = direction === 'next' ? currentPage + 1 : currentPage - 1;
    if (newPage < 0 || newPage >= projects.length) return;
    
    setFlipDirection(direction);
    setIsInteracting(true);
    
    // Simulate character clicking animation
    setTimeout(() => {
      setCurrentPage(newPage);
      setShowDetails(false);
      
      setTimeout(() => {
        setIsInteracting(false);
        setFlipDirection(null);
      }, 800);
    }, 600);
  }, [currentPage, isInteracting]);
  
  const handleNext = () => handlePageChange('next');
  const handlePrev = () => handlePageChange('prev');
  
  const handleDotClick = (index) => {
    if (index !== currentPage && !isInteracting) {
      handlePageChange(index > currentPage ? 'next' : 'prev');
    }
  };
  
  const speakProject = () => {
    const utterance = new SpeechSynthesisUtterance(
      `${projects[currentPage].title}. ${projects[currentPage].desc}`
    );
    utterance.rate = 0.85;
    utterance.pitch = 1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };
  
  return (
    <section className="projects-3d-section" id="projects">
      <div className="projects-3d-container">
        <h2 className="section-title-3d">
          <span className="title-glow">✨</span>
          Interactive Projects
          <span className="title-line-3d"></span>
        </h2>
        
        <div className="projects-3d-layout">
          {/* 3D Canvas */}
          <div className="canvas-3d-wrapper">
            <Canvas 
              shadows 
              camera={{ position: [0, 1.2, 7], fov: 50 }}
              style={{ background: 'radial-gradient(circle at center, #0a0a2a 0%, #050510 100%)' }}
              gl={{ antialias: true, alpha: false }}
            >
              <PerspectiveCamera makeDefault position={[0, 1.2, 7]} />
              
              {/* Lighting */}
              <ambientLight intensity={0.5} />
              <directionalLight 
                position={[5, 5, 5]} 
                intensity={1.2} 
                castShadow 
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
              />
              <pointLight position={[0, 3, 2]} intensity={0.8} color="#ffaa66" />
              <pointLight position={[2, 2, 3]} intensity={0.5} color="#4466ff" />
              <pointLight position={[-2, 1, 3]} intensity={0.4} color="#ff66aa" />
              <spotLight position={[0, 4, 2]} intensity={0.6} angle={0.3} penumbra={0.5} castShadow />
              
              {/* Environment */}
              <Environment preset="night" background={false} />
              
              {/* Floating project cards */}
              {projects.map((project, idx) => {
                const offset = idx - currentPage;
                const xPos = offset * 2.8;
                const isActive = idx === currentPage;
                return (
                  <FloatingProjectCard
                    key={project.id}
                    project={project}
                    position={[xPos, 0.2, -1.5]}
                    isActive={isActive}
                    color={project.color}
                  />
                );
              })}
              
              {/* Virtual buttons for character to interact with */}
              <AnimatedButton 
                position={[-2.5, -0.5, 1]}
                onClick={handlePrev}
                disabled={currentPage === 0 || isInteracting}
                direction="prev"
                currentPage={currentPage}
                totalPages={projects.length}
                color={projects[currentPage]?.color || "#61DAFB"}
              />
              
              <AnimatedButton 
                position={[2.5, -0.5, 1]}
                onClick={handleNext}
                disabled={currentPage === projects.length - 1 || isInteracting}
                direction="next"
                currentPage={currentPage}
                totalPages={projects.length}
                color={projects[currentPage]?.color || "#61DAFB"}
              />
              
              {/* Realistic Character */}
              <RealisticCharacter 
                isInteracting={isInteracting}
                currentPage={currentPage}
                totalPages={projects.length}
                onPageFlip={() => {}}
                targetPosition={isInteracting ? (flipDirection === 'next' ? [2.5, -0.5, 1] : [-2.5, -0.5, 1]) : null}
              />
              
              {/* Decorative elements */}
              <Sparkles 
                count={200}
                scale={[12, 8, 12]}
                size={0.08}
                speed={0.4}
                color="#61DAFB"
                opacity={0.5}
              />
              
              {/* Floor reflection glow */}
              <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.9, 0]} receiveShadow>
                <circleGeometry args={[4, 32]} />
                <meshStandardMaterial color="#1a1a4a" metalness={0.8} roughness={0.3} transparent opacity={0.4} />
              </mesh>
              
              <OrbitControls 
                enableZoom={true}
                enablePan={true}
                minDistance={4}
                maxDistance={10}
                autoRotate={autoRotate}
                autoRotateSpeed={0.8}
                enableDamping
                dampingFactor={0.05}
                target={[0, 0.8, 0]}
              />
            </Canvas>
            
            <button className="rotate-toggle" onClick={() => setAutoRotate(!autoRotate)}>
              {autoRotate ? '🔒 Lock View' : '🔄 Auto Rotate'}
            </button>
          </div>
          
          {/* Project Details Card */}
          <div className="project-card-3d-wrapper">
            <motion.div
              ref={cardRef}
              className={`project-card-3d ${isInteracting ? 'flipping' : ''}`}
              style={{
                background: `linear-gradient(135deg, rgba(10, 10, 40, 0.95), rgba(20, 20, 60, 0.95))`,
                borderLeft: `4px solid ${projects[currentPage].color}`
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="card-glow" style={{ background: projects[currentPage].color }}></div>
              
              <div className="card-header-3d">
                <motion.div 
                  className="project-icon-3d" 
                  style={{ background: projects[currentPage].gradient }}
                  animate={{ rotate: isInteracting ? 360 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {projects[currentPage].icon}
                </motion.div>
                <div className="page-counter">
                  <span className="current-page">{String(currentPage + 1).padStart(2, '0')}</span>
                  <span className="total-pages">/{String(projects.length).padStart(2, '0')}</span>
                </div>
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0, x: flipDirection === 'next' ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: flipDirection === 'next' ? -50 : 50 }}
                  transition={{ duration: 0.3 }}
                  className="card-content-3d"
                >
                  <h3 className="project-title-3d" style={{ color: projects[currentPage].color }}>
                    {projects[currentPage].title}
                  </h3>
                  
                  <p className="project-desc-3d">
                    {showDetails ? projects[currentPage].longDesc : projects[currentPage].desc}
                  </p>
                  
                  <button 
                    className="read-more-3d"
                    onClick={() => setShowDetails(!showDetails)}
                    style={{ color: projects[currentPage].color }}
                  >
                    {showDetails ? 'Show Less' : 'Read More'}
                    <span className="arrow">{showDetails ? '↑' : '↓'}</span>
                  </button>
                  
                  <div className="tech-stack-3d">
                    {projects[currentPage].tech.map((tech, idx) => (
                      <motion.span 
                        key={idx} 
                        className="tech-tag-3d"
                        style={{ 
                          background: `${projects[currentPage].color}20`,
                          borderColor: projects[currentPage].color,
                          color: projects[currentPage].color
                        }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  <div className="features-grid-3d">
                    {projects[currentPage].features.map((feature, idx) => (
                      <motion.div 
                        key={idx} 
                        className="feature-item-3d"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <span className="feature-check" style={{ color: projects[currentPage].color }}>✓</span>
                        <span className="feature-text-3d">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
              
              <div className="card-footer-3d">
                <div className="project-actions">
                  <motion.a 
                    href={projects[currentPage].demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="demo-btn-3d"
                    style={{ background: projects[currentPage].gradient }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Live Demo
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </motion.a>
                  <motion.a 
                    href={projects[currentPage].githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="github-btn-3d"
                    style={{ borderColor: projects[currentPage].color }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    Code
                  </motion.a>
                </div>
                
                <motion.button 
                  className="speak-btn" 
                  onClick={speakProject}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🔊 Listen
                </motion.button>
              </div>
            </motion.div>
            
            {/* Navigation Dots */}
            <div className="navigation-3d">
              <motion.button 
                className="nav-3d prev-3d"
                onClick={handlePrev}
                disabled={currentPage === 0 || isInteracting}
                whileHover={{ x: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Previous
              </motion.button>
              
              <div className="dots-3d">
                {projects.map((_, idx) => (
                  <motion.button
                    key={idx}
                    className={`dot-3d ${idx === currentPage ? 'active' : ''}`}
                    onClick={() => handleDotClick(idx)}
                    style={{
                      background: idx === currentPage ? projects[currentPage].color : 'rgba(255,255,255,0.3)',
                    }}
                    animate={{
                      width: idx === currentPage ? 30 : 8,
                      opacity: idx === currentPage ? 1 : 0.6
                    }}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>
              
              <motion.button 
                className="nav-3d next-3d"
                onClick={handleNext}
                disabled={currentPage === projects.length - 1 || isInteracting}
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.95 }}
              >
                Next
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects3D;