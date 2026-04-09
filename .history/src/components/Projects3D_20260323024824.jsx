import React, { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera, Sparkles } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import RealisticCharacter from './RealisticCharacter';
import './CSS/Projects.css';

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

function Projects3D() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPointing, setIsPointing] = useState(false);
  const [isReaching, setIsReaching] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const cardRef = useRef();

  const handlePageFlip = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setIsFlipping(false);
    }, 800);
  };

  const handleNext = () => {
    if (currentPage < projects.length - 1 && !isReaching) {
      setIsPointing(true);
      setTimeout(() => {
        setIsPointing(false);
        setIsReaching(true);
        
        if (cardRef.current) {
          cardRef.current.classList.add('flipping');
          setTimeout(() => {
            setCurrentPage(prev => prev + 1);
            setShowDetails(false);
            setTimeout(() => {
              if (cardRef.current) cardRef.current.classList.remove('flipping');
            }, 500);
          }, 400);
        }
        
        setTimeout(() => {
          setIsReaching(false);
        }, 1000);
      }, 500);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0 && !isReaching) {
      setIsPointing(true);
      setTimeout(() => {
        setIsPointing(false);
        setIsReaching(true);
        
        if (cardRef.current) {
          cardRef.current.classList.add('flipping');
          setTimeout(() => {
            setCurrentPage(prev => prev - 1);
            setShowDetails(false);
            setTimeout(() => {
              if (cardRef.current) cardRef.current.classList.remove('flipping');
            }, 500);
          }, 400);
        }
        
        setTimeout(() => {
          setIsReaching(false);
        }, 1000);
      }, 500);
    }
  };

  const handleDotClick = (index) => {
    if (index !== currentPage && !isReaching) {
      if (index > currentPage) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const speakProject = () => {
    const utterance = new SpeechSynthesisUtterance(
      `${projects[currentPage].title}. ${projects[currentPage].desc}`
    );
    utterance.rate = 0.8;
    utterance.pitch = 1;
    utterance.volume = 0.6;
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
          {/* 3D Canvas with Realistic Character */}
          <div className="canvas-3d-wrapper">
            <Canvas 
              shadows 
              camera={{ position: [0, 1.5, 8], fov: 45 }}
              style={{ background: 'transparent' }}
            >
              <PerspectiveCamera makeDefault position={[0, 1.5, 8]} />
              <ambientLight intensity={0.6} />
              <directionalLight 
                position={[5, 5, 5]} 
                intensity={1} 
                castShadow 
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
              />
              <pointLight position={[0, 3, 2]} intensity={0.5} color="#ffaa66" />
              <pointLight position={[2, 1, 3]} intensity={0.3} color="#4466ff" />
              <Environment preset="city" background={false} />
              
              <RealisticCharacter 
                isPointing={isPointing}
                isReaching={isReaching}
                currentPage={currentPage}
                totalPages={projects.length}
                onPageFlip={handlePageFlip}
                position={[0, -1, 0]}
              />
              
              <Sparkles 
                count={100}
                scale={[8, 8, 8]}
                size={0.2}
                speed={0.5}
                color="#61DAFB"
              />
              
              <OrbitControls 
                enableZoom={true}
                enablePan={true}
                minDistance={4}
                maxDistance={12}
                autoRotate={autoRotate}
                autoRotateSpeed={1.2}
                enableDamping
                dampingFactor={0.05}
                target={[0, 1, 0]}
              />
            </Canvas>
            
            <button 
              className="rotate-toggle"
              onClick={() => setAutoRotate(!autoRotate)}
            >
              {autoRotate ? '🔒 Lock View' : '🔄 Auto Rotate'}
            </button>
          </div>
          
          {/* Project Card */}
          <div className="project-card-3d-wrapper">
            <div 
              ref={cardRef}
              className={`project-card-3d ${isFlipping ? 'flipping' : ''}`}
              style={{
                background: `linear-gradient(135deg, rgba(10, 10, 40, 0.95), rgba(20, 20, 60, 0.95))`,
                borderLeft: `4px solid ${projects[currentPage].color}`
              }}
            >
              <div className="card-glow" style={{ background: projects[currentPage].color }}></div>
              
              <div className="card-header-3d">
                <div className="project-icon-3d" style={{ background: projects[currentPage].gradient }}>
                  {projects[currentPage].icon}
                </div>
                <div className="page-counter">
                  <span className="current-page">{String(currentPage + 1).padStart(2, '0')}</span>
                  <span className="total-pages">/{String(projects.length).padStart(2, '0')}</span>
                </div>
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
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
                      <span 
                        key={idx} 
                        className="tech-tag-3d"
                        style={{ 
                          background: `${projects[currentPage].color}20`,
                          borderColor: projects[currentPage].color,
                          color: projects[currentPage].color
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="features-grid-3d">
                    {projects[currentPage].features.map((feature, idx) => (
                      <div key={idx} className="feature-item-3d">
                        <span className="feature-check">✓</span>
                        <span className="feature-text-3d">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
              
              <div className="card-footer-3d">
                <div className="project-actions">
                  <a 
                    href={projects[currentPage].demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="demo-btn-3d"
                    style={{ background: projects[currentPage].gradient }}
                  >
                    Live Demo
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </a>
                  <a 
                    href={projects[currentPage].githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="github-btn-3d"
                    style={{ borderColor: projects[currentPage].color }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    Code
                  </a>
                </div>
                
                <button className="speak-btn" onClick={speakProject}>
                  🔊 Listen
                </button>
              </div>
            </div>
            
            {/* Navigation Controls */}
            <div className="navigation-3d">
              <button 
                className="nav-3d prev-3d"
                onClick={handlePrev}
                disabled={currentPage === 0}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Previous
              </button>
              
              <div className="dots-3d">
                {projects.map((_, idx) => (
                  <button
                    key={idx}
                    className={`dot-3d ${idx === currentPage ? 'active' : ''}`}
                    onClick={() => handleDotClick(idx)}
                    style={{
                      background: idx === currentPage ? projects[currentPage].color : 'rgba(255,255,255,0.3)',
                      width: idx === currentPage ? '30px' : '8px'
                    }}
                  />
                ))}
              </div>
              
              <button 
                className="nav-3d next-3d"
                onClick={handleNext}
                disabled={currentPage === projects.length - 1}
              >
                Next
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects3D;