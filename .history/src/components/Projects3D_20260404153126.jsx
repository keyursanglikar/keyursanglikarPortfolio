// Projects3D.jsx - Complete working file
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  OrbitControls, 
  Environment, 
  PerspectiveCamera, 
  Html, 
  Sparkles,
  MeshReflectorMaterial
} from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import './CSS/Projects.css';

// ============================================
// PROJECTS DATA - ADD THIS BACK
// ============================================
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

// ============================================
// REALISTIC HUMAN CHARACTER COMPONENT
// ============================================
function RealisticHuman({ isReaching, onReachComplete, currentPage }) {
  const groupRef = useRef();
  const armRef = useRef();
  const [reachProgress, setReachProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [eyeBlink, setEyeBlink] = useState(0);
  
  // Eye blink animation
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setEyeBlink(1);
      setTimeout(() => setEyeBlink(0), 100);
    }, 3000);
    return () => clearInterval(blinkInterval);
  }, []);
  
  // Reaching animation
  useEffect(() => {
    if (isReaching && !isAnimating) {
      setIsAnimating(true);
      setReachProgress(0);
      
      const interval = setInterval(() => {
        setReachProgress(prev => {
          const newProgress = prev + 0.08;
          if (newProgress >= 1) {
            clearInterval(interval);
            setTimeout(() => {
              if (onReachComplete) onReachComplete();
              setTimeout(() => {
                setReachProgress(0);
                setIsAnimating(false);
              }, 300);
            }, 150);
            return 1;
          }
          return newProgress;
        });
      }, 30);
      
      return () => clearInterval(interval);
    }
  }, [isReaching, onReachComplete]);
  
  // Idle animation
  useFrame(({ clock }) => {
    if (groupRef.current && !isAnimating) {
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 1.2) * 0.008;
      groupRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.8) * 0.02;
    }
    
    if (armRef.current && reachProgress > 0) {
      const reachAngle = reachProgress * Math.PI * 0.7;
      armRef.current.rotation.x = -reachAngle * 0.6;
      armRef.current.rotation.z = 0.3 + reachAngle * 0.8;
      armRef.current.position.x = -0.55 + reachProgress * 0.45;
      armRef.current.position.z = reachProgress * 0.6;
    } else if (armRef.current && !isAnimating) {
      armRef.current.rotation.x = 0;
      armRef.current.rotation.z = 0.25;
      armRef.current.position.x = -0.55;
      armRef.current.position.z = 0;
    }
  });
  
  return (
    <group ref={groupRef} position={[-1.2, -0.6, 0]} scale={0.85}>
      {/* Body */}
      <mesh position={[0, 0.85, 0]} castShadow receiveShadow>
        <capsuleGeometry args={[0.38, 0.85, 12, 24]} />
        <meshStandardMaterial color="#2c3e6d" roughness={0.35} metalness={0.1} />
      </mesh>
      
      {/* Shirt collar */}
      <mesh position={[0, 1.15, 0.4]} castShadow>
        <boxGeometry args={[0.55, 0.12, 0.08]} />
        <meshStandardMaterial color="#1a2a4a" />
      </mesh>
      
      {/* Neck */}
      <mesh position={[0, 1.32, 0.05]} castShadow>
        <cylinderGeometry args={[0.16, 0.18, 0.12, 12]} />
        <meshStandardMaterial color="#d4a574" roughness={0.3} />
      </mesh>
      
      {/* Head */}
      <group position={[0, 1.55, 0]}>
        <mesh castShadow receiveShadow>
          <sphereGeometry args={[0.42, 64, 64]} />
          <meshStandardMaterial color="#e8c5a0" roughness={0.25} />
        </mesh>
        
        {/* Hair */}
        <mesh position={[0, 0.22, -0.35]} castShadow>
          <sphereGeometry args={[0.46, 32, 32]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.6} />
        </mesh>
        <mesh position={[0, 0.3, -0.28]} castShadow>
          <sphereGeometry args={[0.44, 32, 32]} />
          <meshStandardMaterial color="#2a2a2a" roughness={0.5} />
        </mesh>
        
        {/* Eyes */}
        <mesh position={[-0.14, 0.08, 0.42]} castShadow>
          <sphereGeometry args={[0.09, 48, 48]} />
          <meshStandardMaterial color="#ffffff" roughness={0.05} metalness={0.9} />
        </mesh>
        <mesh position={[0.14, 0.08, 0.42]} castShadow>
          <sphereGeometry args={[0.09, 48, 48]} />
          <meshStandardMaterial color="#ffffff" roughness={0.05} metalness={0.9} />
        </mesh>
        
        {/* Irises */}
        <mesh position={[-0.14, 0.07, 0.47]} castShadow>
          <sphereGeometry args={[0.055, 48, 48]} />
          <meshStandardMaterial color="#4a6a3a" roughness={0.1} emissive="#2a4a1a" emissiveIntensity={0.05} />
        </mesh>
        <mesh position={[0.14, 0.07, 0.47]} castShadow>
          <sphereGeometry args={[0.055, 48, 48]} />
          <meshStandardMaterial color="#4a6a3a" roughness={0.1} emissive="#2a4a1a" emissiveIntensity={0.05} />
        </mesh>
        
        {/* Pupils */}
        <mesh position={[-0.14, 0.06, 0.5]} castShadow>
          <sphereGeometry args={[0.028, 32, 32]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        <mesh position={[0.14, 0.06, 0.5]} castShadow>
          <sphereGeometry args={[0.028, 32, 32]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        
        {/* Eye highlights */}
        <mesh position={[-0.17, 0.11, 0.52]} castShadow>
          <sphereGeometry args={[0.02, 16, 16]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
        </mesh>
        <mesh position={[0.11, 0.11, 0.52]} castShadow>
          <sphereGeometry args={[0.02, 16, 16]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
        </mesh>
        
        {/* Blink animation */}
        {eyeBlink === 1 && (
          <>
            <mesh position={[-0.14, 0.08, 0.51]} castShadow>
              <boxGeometry args={[0.2, 0.03, 0.05]} />
              <meshStandardMaterial color="#e0be95" />
            </mesh>
            <mesh position={[0.14, 0.08, 0.51]} castShadow>
              <boxGeometry args={[0.2, 0.03, 0.05]} />
              <meshStandardMaterial color="#e0be95" />
            </mesh>
          </>
        )}
        
        {/* Eyebrows */}
        <mesh position={[-0.17, 0.2, 0.42]} rotation={[0, 0, 0.15]} castShadow>
          <boxGeometry args={[0.13, 0.04, 0.05]} />
          <meshStandardMaterial color="#2a2a2a" />
        </mesh>
        <mesh position={[0.17, 0.2, 0.42]} rotation={[0, 0, -0.15]} castShadow>
          <boxGeometry args={[0.13, 0.04, 0.05]} />
          <meshStandardMaterial color="#2a2a2a" />
        </mesh>
        
        {/* Nose */}
        <mesh position={[0, 0.02, 0.48]} castShadow>
          <sphereGeometry args={[0.06, 32, 32]} />
          <meshStandardMaterial color="#e0be95" />
        </mesh>
        
        {/* Mouth */}
        <mesh position={[0, -0.08, 0.46]} rotation={[0.15, 0, 0]} castShadow>
          <torusGeometry args={[0.11, 0.022, 16, 48, Math.PI]} />
          <meshStandardMaterial color="#c45c3a" />
        </mesh>
        
        {/* Ears */}
        <mesh position={[-0.42, 0.05, 0]} castShadow>
          <sphereGeometry args={[0.11, 24, 24]} />
          <meshStandardMaterial color="#e8c5a0" />
        </mesh>
        <mesh position={[0.42, 0.05, 0]} castShadow>
          <sphereGeometry args={[0.11, 24, 24]} />
          <meshStandardMaterial color="#e8c5a0" />
        </mesh>
      </group>
      
      {/* Left Arm - The reaching arm */}
      <group ref={armRef} position={[-0.55, 1.15, 0]}>
        <mesh rotation={[0, 0, 0.25]} castShadow>
          <capsuleGeometry args={[0.12, 0.55, 10, 16]} />
          <meshStandardMaterial color="#2c3e6d" />
        </mesh>
        <mesh position={[0, -0.4, 0]} rotation={[0.2, 0, 0.1]} castShadow>
          <capsuleGeometry args={[0.1, 0.45, 8, 14]} />
          <meshStandardMaterial color="#2c3e6d" />
        </mesh>
        <mesh position={[0, -0.7, 0.08]} castShadow>
          <sphereGeometry args={[0.11, 16, 16]} />
          <meshStandardMaterial color="#e8c5a0" />
        </mesh>
        
        {/* Fingers when reaching */}
        {reachProgress > 0.3 && (
          <>
            <mesh position={[0.04, -0.75, 0.15]} castShadow>
              <capsuleGeometry args={[0.035, 0.1, 6, 8]} />
              <meshStandardMaterial color="#e8c5a0" />
            </mesh>
            <mesh position={[-0.02, -0.76, 0.16]} castShadow>
              <capsuleGeometry args={[0.035, 0.1, 6, 8]} />
              <meshStandardMaterial color="#e8c5a0" />
            </mesh>
          </>
        )}
      </group>
      
      {/* Right Arm */}
      <group position={[0.55, 1.15, 0]}>
        <mesh rotation={[0, 0, -0.3]} castShadow>
          <capsuleGeometry args={[0.12, 0.55, 10, 16]} />
          <meshStandardMaterial color="#2c3e6d" />
        </mesh>
        <mesh position={[0, -0.68, 0.05]} castShadow>
          <sphereGeometry args={[0.11, 16, 16]} />
          <meshStandardMaterial color="#e8c5a0" />
        </mesh>
      </group>
      
      {/* Legs */}
      <mesh position={[-0.22, 0.25, 0]} castShadow>
        <capsuleGeometry args={[0.12, 0.65, 10, 14]} />
        <meshStandardMaterial color="#1a2a4a" />
      </mesh>
      <mesh position={[0.22, 0.25, 0]} castShadow>
        <capsuleGeometry args={[0.12, 0.65, 10, 14]} />
        <meshStandardMaterial color="#1a2a4a" />
      </mesh>
      
      {/* Shoes */}
      <mesh position={[-0.22, -0.08, 0.06]} castShadow>
        <boxGeometry args={[0.28, 0.1, 0.32]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.4} />
      </mesh>
      <mesh position={[0.22, -0.08, 0.06]} castShadow>
        <boxGeometry args={[0.28, 0.1, 0.32]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.4} />
      </mesh>
      
      {/* Name Badge */}
      <Html position={[0, 1.2, 0.52]} center distanceFactor={10}>
        <div className="character-badge">
          <span className="badge-icon">👨‍💻</span>
          <span className="badge-text">Alex</span>
        </div>
      </Html>
      
      {/* Particles */}
      <Sparkles count={40} scale={[1.2, 1.8, 1.2]} size={0.04} speed={0.6} color="#61dafb" position={[0, 1, 0]} />
    </group>
  );
}

// ============================================
// INTERACTIVE 3D BUTTON
// ============================================
function Interactive3DButton({ position, onClick, disabled, direction, color, isBeingPressed }) {
  const [isHovered, setIsHovered] = useState(false);
  const [pressAnim, setPressAnim] = useState(0);
  const meshRef = useRef();
  
  useEffect(() => {
    if (isBeingPressed) {
      setPressAnim(1);
      const timer = setTimeout(() => setPressAnim(0), 200);
      return () => clearTimeout(timer);
    }
  }, [isBeingPressed]);
  
  useFrame(() => {
    if (meshRef.current) {
      const targetScale = 1 - pressAnim * 0.1;
      meshRef.current.scale.setScalar(targetScale);
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
        <boxGeometry args={[1.4, 0.6, 0.15]} />
        <meshStandardMaterial 
          color={disabled ? "#444" : color} 
          emissive={!disabled && (isHovered || isBeingPressed) ? color : "#000"}
          emissiveIntensity={isHovered && !disabled ? 0.4 : 0.1}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      <Html position={[0, 0, 0.12]} center distanceFactor={8}>
        <div className={`virtual-3d-btn ${disabled ? 'disabled' : ''}`} style={{ color: !disabled ? color : '#888' }}>
          {direction === 'prev' ? '◀ PREVIOUS' : 'NEXT ▶'}
        </div>
      </Html>
    </group>
  );
}

// ============================================
// WINDOW FRAME
// ============================================
function WindowFrame({ children }) {
  const frameRef = useRef();
  
  useFrame(({ clock }) => {
    if (frameRef.current) {
      frameRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 2) * 0.03;
    }
  });
  
  return (
    <group ref={frameRef} position={[-2.5, 0.5, -0.5]}>
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[2.2, 3.2, 0.15]} />
        <meshStandardMaterial color="#8B7355" metalness={0.3} roughness={0.4} />
      </mesh>
      
      <mesh position={[0, 0, 0.1]} castShadow>
        <boxGeometry args={[1.9, 2.9, 0.05]} />
        <meshStandardMaterial color="#87CEEB" transparent opacity={0.3} metalness={0.9} roughness={0.1} />
      </mesh>
      
      <mesh position={[0, 0, 0.12]}>
        <boxGeometry args={[0.08, 3, 0.05]} />
        <meshStandardMaterial color="#8B7355" />
      </mesh>
      <mesh position={[0, 0, 0.12]}>
        <boxGeometry args={[2, 0.08, 0.05]} />
        <meshStandardMaterial color="#8B7355" />
      </mesh>
      
      <mesh position={[0, -1.55, 0.1]}>
        <boxGeometry args={[2.4, 0.1, 0.3]} />
        <meshStandardMaterial color="#A0845C" />
      </mesh>
      
      {children}
    </group>
  );
}

// ============================================
// FLOATING PROJECT PREVIEW
// ============================================
function FloatingProjectPreview({ project, position, isActive, color, onClick }) {
  const cardRef = useRef();
  
  useFrame(({ clock }) => {
    if (cardRef.current && isActive) {
      cardRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.03;
      cardRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 1.5) * 0.02;
    }
  });
  
  return (
    <group ref={cardRef} position={position} onClick={onClick}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2, 2.6, 0.08]} />
        <meshStandardMaterial 
          color="#1a1a2e" 
          metalness={0.3} 
          roughness={0.3} 
          emissive={color} 
          emissiveIntensity={isActive ? 0.1 : 0.02}
        />
      </mesh>
      
      <Html position={[0, 0, 0.07]} center distanceFactor={8} transform>
        <div className={`floating-preview ${isActive ? 'active' : ''}`} style={{ borderLeftColor: color }}>
          <div className="preview-icon" style={{ background: project.gradient }}>
            {project.icon}
          </div>
          <h4 style={{ color }}>{project.title}</h4>
          <p>{project.desc.substring(0, 45)}...</p>
          <div className="preview-tech">
            {project.tech.slice(0, 2).map((t, i) => (
              <span key={i} style={{ background: `${color}20`, borderColor: color, color }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </Html>
    </group>
  );
}

// ============================================
// MAIN PROJECTS3D COMPONENT
// ============================================
function Projects3D() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isCharacterReaching, setIsCharacterReaching] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [pendingAction, setPendingAction] = useState(null);
  const [buttonPress, setButtonPress] = useState(null);
  
  const handlePageChange = useCallback((direction) => {
    if (isCharacterReaching) return;
    
    const newPage = direction === 'next' ? currentPage + 1 : currentPage - 1;
    if (newPage < 0 || newPage >= projects.length) return;
    
    setPendingAction(direction);
    setIsCharacterReaching(true);
    setButtonPress(direction);
    
    setTimeout(() => {
      setButtonPress(null);
      setCurrentPage(newPage);
      setShowDetails(false);
      
      setTimeout(() => {
        setIsCharacterReaching(false);
        setPendingAction(null);
      }, 500);
    }, 800);
  }, [currentPage, isCharacterReaching]);
  
  const handleNext = () => handlePageChange('next');
  const handlePrev = () => handlePageChange('prev');
  
  const handleDotClick = (index) => {
    if (index !== currentPage && !isCharacterReaching) {
      handlePageChange(index > currentPage ? 'next' : 'prev');
    }
  };
  
  const speakProject = () => {
    const utterance = new SpeechSynthesisUtterance(
      `${projects[currentPage].title}. ${projects[currentPage].desc}`
    );
    utterance.rate = 0.85;
    utterance.pitch = 1.1;
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
              camera={{ position: [0, 1.2, 6.5], fov: 50 }}
              style={{ background: 'radial-gradient(circle at 30% 40%, #0a0a2a 0%, #030310 100%)' }}
              gl={{ antialias: true, alpha: false }}
            >
              <PerspectiveCamera makeDefault position={[0, 1.2, 6.5]} />
              
              {/* Lighting */}
              <ambientLight intensity={0.45} />
              <directionalLight 
                position={[3, 5, 4]} 
                intensity={1.2} 
                castShadow 
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
              />
              <directionalLight position={[-2, 3, -1]} intensity={0.5} color="#ffaa88" />
              <pointLight position={[0, 2.5, 2]} intensity={0.6} color="#ffaa66" />
              <pointLight position={[2, 1.5, 3]} intensity={0.4} color="#4488ff" />
              <pointLight position={[-1.5, 1, 2.5]} intensity={0.35} color="#ff66aa" />
              
              <Environment preset="night" background={false} />
              
              {/* Floor */}
              <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.95, 0]} receiveShadow>
                <circleGeometry args={[5, 32]} />
                <MeshReflectorMaterial
                  blur={[300, 100]}
                  resolution={1024}
                  mixBlur={1}
                  mixStrength={40}
                  roughness={1}
                  depthScale={1.2}
                  color="#0a0a2a"
                  metalness={0.8}
                />
              </mesh>
              
              {/* Window with Character */}
              <WindowFrame>
                <RealisticHuman 
                  isReaching={isCharacterReaching}
                  onReachComplete={() => {}}
                  currentPage={currentPage}
                />
              </WindowFrame>
              
              {/* Floating project cards */}
              {projects.map((project, idx) => {
                const offset = idx - currentPage;
                const xPos = offset * 2.4;
                const isActive = idx === currentPage;
                return (
                  <FloatingProjectPreview
                    key={project.id}
                    project={project}
                    position={[xPos, 0.1, -1.2]}
                    isActive={isActive}
                    color={project.color}
                    onClick={() => handleDotClick(idx)}
                  />
                );
              })}
              
              {/* Interactive 3D Buttons */}
              <Interactive3DButton 
                position={[2.8, -0.3, 0.8]}
                onClick={handleNext}
                disabled={currentPage === projects.length - 1 || isCharacterReaching}
                direction="next"
                color={projects[currentPage]?.color || "#61DAFB"}
                isBeingPressed={buttonPress === 'next'}
              />
              
              <Interactive3DButton 
                position={[-2.8, -0.3, 0.8]}
                onClick={handlePrev}
                disabled={currentPage === 0 || isCharacterReaching}
                direction="prev"
                color={projects[currentPage]?.color || "#61DAFB"}
                isBeingPressed={buttonPress === 'prev'}
              />
              
              {/* Particles */}
              <Sparkles count={300} scale={[15, 10, 15]} size={0.06} speed={0.3} color="#61DAFB" opacity={0.4} />
              <Sparkles count={150} scale={[15, 10, 15]} size={0.04} speed={0.5} color="#ff66aa" opacity={0.3} />
              
              <OrbitControls 
                enableZoom={true}
                enablePan={true}
                minDistance={4}
                maxDistance={9}
                autoRotate={autoRotate}
                autoRotateSpeed={0.6}
                enableDamping
                dampingFactor={0.05}
                target={[0, 0.6, 0]}
              />
            </Canvas>
            
            <button className="rotate-toggle" onClick={() => setAutoRotate(!autoRotate)}>
              {autoRotate ? '🔒 Lock Camera' : '🔄 Auto Rotate'}
            </button>
          </div>
          
          {/* Project Details Card */}
          <div className="project-card-3d-wrapper">
            <motion.div
              className={`project-card-3d ${isCharacterReaching ? 'pulse-effect' : ''}`}
              style={{
                background: `linear-gradient(135deg, rgba(10, 10, 40, 0.95), rgba(20, 20, 60, 0.95))`,
                borderLeft: `4px solid ${projects[currentPage].color}`
              }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="card-glow" style={{ background: projects[currentPage].color }}></div>
              
              <div className="card-header-3d">
                <motion.div 
                  className="project-icon-3d" 
                  style={{ background: projects[currentPage].gradient }}
                  animate={{ 
                    scale: isCharacterReaching ? [1, 1.1, 1] : 1,
                    rotate: isCharacterReaching ? [0, 10, -10, 0] : 0
                  }}
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
                  initial={{ opacity: 0, x: pendingAction === 'next' ? 30 : -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: pendingAction === 'next' ? -30 : 30 }}
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
                disabled={currentPage === 0 || isCharacterReaching}
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
                      width: idx === currentPage ? 32 : 8,
                      opacity: idx === currentPage ? 1 : 0.5
                    }}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>
              
              <motion.button 
                className="nav-3d next-3d"
                onClick={handleNext}
                disabled={currentPage === projects.length - 1 || isCharacterReaching}
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