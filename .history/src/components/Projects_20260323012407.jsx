import React, { useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import useSound from 'use-sound';
import Person3D from './Person3D';
import './CSS/p';

const projects = [
  {
    id: 1,
    title: "MERN Stack App",
    desc: "Full stack web app using MongoDB, Express, React, Node.js with authentication and CRUD features.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    icon: "⚛️",
    gradient: "linear-gradient(135deg, #61DAFB, #00aaff)",
    color: "#61DAFB",
    features: ["User Authentication", "CRUD Operations", "REST API", "Responsive Design"],
    demoLink: "https://github.com/yourusername/mern-app",
    githubLink: "https://github.com/yourusername/mern-app"
  },
  {
    id: 2,
    title: "Java Backend System",
    desc: "Built scalable backend using Java and JDBC with optimized database queries and multi-threading.",
    tech: ["Java", "MySQL", "JDBC", "Threads"],
    icon: "☕",
    gradient: "linear-gradient(135deg, #ff5500, #007396)",
    color: "#ff5500",
    features: ["Multi-threading", "Database Optimization", "REST APIs", "JWT Authentication"],
    demoLink: "https://github.com/yourusername/java-backend",
    githubLink: "https://github.com/yourusername/java-backend"
  },
  {
    id: 3,
    title: "Portfolio Website",
    desc: "Personal portfolio website with 3D animations, smooth transitions, and responsive design.",
    tech: ["React", "Three.js", "Framer Motion", "CSS"],
    icon: "🎨",
    gradient: "linear-gradient(135deg, #E34F26, #1572B6)",
    color: "#E34F26",
    features: ["3D Animations", "Smooth Transitions", "Responsive", "Dark Mode"],
    demoLink: "https://your-portfolio.com",
    githubLink: "https://github.com/yourusername/portfolio"
  },
  {
    id: 4,
    title: "Python Automation Tool",
    desc: "Automation scripts for data processing, web scraping, and task optimization with GUI interface.",
    tech: ["Python", "Pandas", "Selenium", "PyQt5"],
    icon: "🐍",
    gradient: "linear-gradient(135deg, #3776AB, #ffd43b)",
    color: "#3776AB",
    features: ["Web Scraping", "Data Processing", "GUI Interface", "Task Scheduling"],
    demoLink: "https://github.com/yourusername/python-automation",
    githubLink: "https://github.com/yourusername/python-automation"
  }
];

function Projects() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPointing, setIsPointing] = useState(false);
  const [showVoice, setShowVoice] = useState(true);
  const audioRef = useRef(null);
  
  // Load sound effects
  const [playFlip] = useSound('/sounds/page-flip.mp3', { volume: 0.5 });
  const [playClick] = useSound('/sounds/click.mp3', { volume: 0.3 });
  
  // Voice narration for each project
  const narrations = [
    "MERN Stack Application. A full stack web app with authentication and CRUD features.",
    "Java Backend System. A scalable backend with optimized database queries.",
    "Portfolio Website. A personal portfolio with 3D animations and responsive design.",
    "Python Automation Tool. Automation scripts for data processing and task optimization."
  ];
  
  useEffect(() => {
    // Auto-play voice narration when page changes
    if (showVoice) {
      const utterance = new SpeechSynthesisUtterance(narrations[currentPage]);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 0.8;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    }
  }, [currentPage, showVoice]);
  
  const handleNext = () => {
    if (currentPage < projects.length - 1) {
      playFlip();
      playClick();
      setIsPointing(true);
      setCurrentPage(prev => prev + 1);
      setTimeout(() => setIsPointing(false), 1000);
    }
  };
  
  const handlePrev = () => {
    if (currentPage > 0) {
      playFlip();
      playClick();
      setIsPointing(true);
      setCurrentPage(prev => prev - 1);
      setTimeout(() => setIsPointing(false), 1000);
    }
  };
  
  const toggleVoice = () => {
    setShowVoice(!showVoice);
    if (!showVoice) {
      window.speechSynthesis.cancel();
    }
  };
  
  return (
    <section className="projects-3d" id="projects">
      <div className="projects-header">
        <h2 className="projects-title">My Projects</h2>
        <button className="voice-toggle" onClick={toggleVoice}>
          {showVoice ? '🔊 Voice ON' : '🔇 Voice OFF'}
        </button>
      </div>
      
      <div className="projects-3d-container">
        {/* 3D Canvas */}
        <div className="canvas-container">
          <Canvas shadows camera={{ position: [0, 2, 5], fov: 45 }}>
            <PerspectiveCamera makeDefault position={[0, 2, 5]} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
            <pointLight position={[0, 3, 2]} intensity={0.5} />
            <Environment preset="city" />
            
            <Person3D 
              isPointing={isPointing}
              currentPage={currentPage}
              totalPages={projects.length}
              onNext={handleNext}
              onPrev={handlePrev}
            />
            
            <OrbitControls 
              enableZoom={true}
              enablePan={false}
              minDistance={3}
              maxDistance={8}
              autoRotate={false}
            />
          </Canvas>
        </div>
        
        {/* Project Card with Flip Animation */}
        <div className="project-card-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, rotateY: -90, x: -100 }}
              animate={{ opacity: 1, rotateY: 0, x: 0 }}
              exit={{ opacity: 0, rotateY: 90, x: 100 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              className="project-card-3d"
              style={{
                background: `linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.9))`,
                borderImage: `linear-gradient(135deg, ${projects[currentPage].color}, transparent) 1`
              }}
            >
              <div className="project-icon-large" style={{ color: projects[currentPage].color }}>
                {projects[currentPage].icon}
              </div>
              
              <h3 className="project-title-3d" style={{ 
                background: projects[currentPage].gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>
                {projects[currentPage].title}
              </h3>
              
              <p className="project-desc-3d">{projects[currentPage].desc}</p>
              
              <div className="project-tech-stack">
                {projects[currentPage].tech.map((tech, idx) => (
                  <span key={idx} className="tech-badge-3d" style={{ borderColor: projects[currentPage].color }}>
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="project-features">
                <h4>✨ Key Features</h4>
                <ul>
                  {projects[currentPage].features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="project-links">
                <motion.a
                  href={projects[currentPage].demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ background: projects[currentPage].gradient }}
                >
                  Live Demo 🚀
                </motion.a>
                <motion.a
                  href={projects[currentPage].githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GitHub 💻
                </motion.a>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Dots */}
          <div className="project-dots">
            {projects.map((_, idx) => (
              <button
                key={idx}
                className={`dot ${idx === currentPage ? 'active' : ''}`}
                onClick={() => {
                  if (idx !== currentPage) {
                    playClick();
                    setCurrentPage(idx);
                  }
                }}
                style={{ background: idx === currentPage ? projects[currentPage].color : '#fff' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;