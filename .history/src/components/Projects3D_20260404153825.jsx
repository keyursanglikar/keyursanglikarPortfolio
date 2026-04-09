// Projects3D.jsx
import React, { useState, useRef, useCallback, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  OrbitControls, 
  Environment, 
  PerspectiveCamera, 
  Html, 
  Sparkles,
  MeshReflectorMaterial,
  useGLTF,
  useAnimations,
  Float,
  Stars
} from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import './Projects3D.css';

// ============================================
// PROJECTS DATA
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
// REALISTIC 3D HUMAN CHARACTER
// Using a high-quality GLB model or detailed mesh
// ============================================
function RealisticHuman({ isReaching, onReachComplete, currentPage }) {
  const groupRef = useRef();
  const rightArmRef = useRef();
  const leftArmRef = useRef();
  const headRef = useRef();
  const [reachProgress, setReachProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [eyeBlink, setEyeBlink] = useState(0);
  const [mouthOpen, setMouthOpen] = useState(0);
  
  // Eye blink animation
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setEyeBlink(1);
      setTimeout(() => setEyeBlink(0), 100);
    }, 3500);
    return () => clearInterval(blinkInterval);
  }, []);
  
  // Random mouth movement for realism
  useEffect(() => {
    const mouthInterval = setInterval(() => {
      setMouthOpen(Math.random() * 0.3);
      setTimeout(() => setMouthOpen(0), 200 + Math.random() * 300);
    }, 8000);
    return () => clearInterval(mouthInterval);
  }, []);
  
  // Reaching animation
  useEffect(() => {
    if (isReaching && !isAnimating) {
      setIsAnimating(true);
      setReachProgress(0);
      
      const interval = setInterval(() => {
        setReachProgress(prev => {
          const newProgress = prev + 0.1;
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
      }, 40);
      
      return () => clearInterval(interval);
    }
  }, [isReaching, onReachComplete]);
  
  // Advanced idle animation with body sway
  useFrame(({ clock }) => {
    if (groupRef.current && !isAnimating) {
      // Body sway
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 1.5) * 0.005;
      groupRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.7) * 0.015;
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.5) * 0.01;
    }
    
    // Head movement - looks around naturally
    if (headRef.current && !isAnimating) {
      headRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.15;
      headRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.4) * 0.05;
    }
    
    // Right arm reaching animation
    if (rightArmRef.current && reachProgress > 0) {
      const reachAngle = reachProgress * Math.PI * 0.8;
      rightArmRef.current.rotation.x = -reachAngle * 0.7;
      rightArmRef.current.rotation.z = 0.2 + reachAngle * 0.9;
      rightArmRef.current.position.x = 0.55 + reachProgress * 0.4;
      rightArmRef.current.position.z = reachProgress * 0.7;
    } else if (rightArmRef.current && !isAnimating) {
      rightArmRef.current.rotation.x = 0;
      rightArmRef.current.rotation.z = -0.25;
      rightArmRef.current.position.x = 0.55;
      rightArmRef.current.position.z = 0;
    }
    
    // Left arm idle sway
    if (leftArmRef.current && !isAnimating && reachProgress === 0) {
      leftArmRef.current.rotation.z = -0.2 + Math.sin(clock.getElapsedTime() * 1.2) * 0.05;
    }
  });
  
  return (
    <group ref={groupRef} position={[-1.5, -0.8, 0]} scale={0.9}>
      {/* ========== BODY ========== */}
      {/* Torso */}
      <mesh position={[0, 0.9, 0]} castShadow receiveShadow>
        <capsuleGeometry args={[0.4, 0.9, 16, 32]} />
        <meshStandardMaterial color="#2c3e6d" roughness={0.3} metalness={0.1} emissive="#1a2a4a" emissiveIntensity={0.1} />
      </mesh>
      
      {/* Chest detail */}
      <mesh position={[0, 1.1, 0.42]} castShadow>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color="#3a4e7d" roughness={0.25} />
      </mesh>
      
      {/* Shirt collar */}
      <mesh position={[0, 1.25, 0.38]} castShadow>
        <boxGeometry args={[0.6, 0.1, 0.1]} />
        <meshStandardMaterial color="#1a2a4a" />
      </mesh>
      
      {/* ========== NECK ========== */}
      <mesh position={[0, 1.42, 0.05]} castShadow>
        <cylinderGeometry args={[0.14, 0.16, 0.12, 16]} />
        <meshStandardMaterial color="#d4a574" roughness={0.25} />
      </mesh>
      
      {/* ========== HEAD ========== */}
      <group ref={headRef} position={[0, 1.68, 0]}>
        {/* Main head shape */}
        <mesh castShadow receiveShadow>
          <sphereGeometry args={[0.44, 64, 64]} />
          <meshStandardMaterial color="#e8c5a0" roughness={0.22} />
        </mesh>
        
        {/* Jaw definition */}
        <mesh position={[0, -0.12, -0.4]} castShadow>
          <sphereGeometry args={[0.4, 48, 48]} />
          <meshStandardMaterial color="#e0be95" roughness={0.2} />
        </mesh>
        
        {/* ========== HAIR ========== */}
        {/* Main hair volume */}
        <mesh position={[0, 0.25, -0.38]} castShadow>
          <sphereGeometry args={[0.48, 32, 32]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.5} metalness={0.05} />
        </mesh>
        <mesh position={[0, 0.32, -0.3]} castShadow>
          <sphereGeometry args={[0.46, 32, 32]} />
          <meshStandardMaterial color="#2a2a2a" roughness={0.45} />
        </mesh>
        
        {/* Hair side strands */}
        <mesh position={[-0.38, 0.15, -0.35]} castShadow>
          <sphereGeometry args={[0.18, 24, 24]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
        <mesh position={[0.38, 0.15, -0.35]} castShadow>
          <sphereGeometry args={[0.18, 24, 24]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
        
        {/* Hair front strands */}
        {[...Array(8)].map((_, i) => (
          <mesh key={i} position={[-0.2 + i * 0.06, 0.28, -0.48]} castShadow>
            <coneGeometry args={[0.035, 0.1, 6]} />
            <meshStandardMaterial color="#1a1a1a" />
          </mesh>
        ))}
        
        {/* ========== EYES ========== */}
        {/* Eye whites */}
        <mesh position={[-0.15, 0.08, 0.44]} castShadow>
          <sphereGeometry args={[0.095, 64, 64]} />
          <meshStandardMaterial color="#ffffff" roughness={0.02} metalness={0.95} />
        </mesh>
        <mesh position={[0.15, 0.08, 0.44]} castShadow>
          <sphereGeometry args={[0.095, 64, 64]} />
          <meshStandardMaterial color="#ffffff" roughness={0.02} metalness={0.95} />
        </mesh>
        
        {/* Irises */}
        <mesh position={[-0.15, 0.07, 0.49]} castShadow>
          <sphereGeometry args={[0.058, 64, 64]} />
          <meshStandardMaterial color="#4a7a4a" roughness={0.08} emissive="#2a5a2a" emissiveIntensity={0.08} />
        </mesh>
        <mesh position={[0.15, 0.07, 0.49]} castShadow>
          <sphereGeometry args={[0.058, 64, 64]} />
          <meshStandardMaterial color="#4a7a4a" roughness={0.08} emissive="#2a5a2a" emissiveIntensity={0.08} />
        </mesh>
        
        {/* Pupils */}
        <mesh position={[-0.15, 0.06, 0.53]} castShadow>
          <sphereGeometry args={[0.03, 48, 48]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        <mesh position={[0.15, 0.06, 0.53]} castShadow>
          <sphereGeometry args={[0.03, 48, 48]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        
        {/* Eye highlights (corneal reflection) */}
        <mesh position={[-0.18, 0.115, 0.54]} castShadow>
          <sphereGeometry args={[0.018, 32, 32]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.8} />
        </mesh>
        <mesh position={[0.12, 0.115, 0.54]} castShadow>
          <sphereGeometry args={[0.018, 32, 32]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.8} />
        </mesh>
        
        {/* Eyelids (blink) */}
        {eyeBlink === 1 && (
          <>
            <mesh position={[-0.15, 0.08, 0.52]} castShadow>
              <boxGeometry args={[0.22, 0.035, 0.06]} />
              <meshStandardMaterial color="#e0be95" />
            </mesh>
            <mesh position={[0.15, 0.08, 0.52]} castShadow>
              <boxGeometry args={[0.22, 0.035, 0.06]} />
              <meshStandardMaterial color="#e0be95" />
            </mesh>
          </>
        )}
        
        {/* Eyebrows */}
        <mesh position={[-0.18, 0.22, 0.43]} rotation={[0, 0, 0.2]} castShadow>
          <boxGeometry args={[0.14, 0.045, 0.06]} />
          <meshStandardMaterial color="#2a2a2a" />
        </mesh>
        <mesh position={[0.18, 0.22, 0.43]} rotation={[0, 0, -0.2]} castShadow>
          <boxGeometry args={[0.14, 0.045, 0.06]} />
          <meshStandardMaterial color="#2a2a2a" />
        </mesh>
        
        {/* ========== NOSE ========== */}
        <mesh position={[0, 0.02, 0.5]} castShadow>
          <sphereGeometry args={[0.065, 48, 48]} />
          <meshStandardMaterial color="#e0be95" />
        </mesh>
        <mesh position={[0, -0.03, 0.54]} castShadow>
          <sphereGeometry args={[0.04, 32, 32]} />
          <meshStandardMaterial color="#d4a574" />
        </mesh>
        {/* Nostrils */}
        <mesh position={[-0.025, -0.04, 0.56]} castShadow>
          <sphereGeometry args={[0.012, 16, 16]} />
          <meshStandardMaterial color="#b89470" />
        </mesh>
        <mesh position={[0.025, -0.04, 0.56]} castShadow>
          <sphereGeometry args={[0.012, 16, 16]} />
          <meshStandardMaterial color="#b89470" />
        </mesh>
        
        {/* ========== MOUTH ========== */}
        {/* Upper lip area */}
        <mesh position={[0, -0.07, 0.48]} castShadow>
          <torusGeometry args={[0.12, 0.018, 16, 64, Math.PI]} />
          <meshStandardMaterial color="#d46a48" />
        </mesh>
        
        {/* Mouth opening */}
        <mesh position={[0, -0.09, 0.47]} scale={[1, 1 + mouthOpen * 0.5, 1]} castShadow>
          <torusGeometry args={[0.11, 0.02, 16, 64, Math.PI]} />
          <meshStandardMaterial color="#c45a38" />
        </mesh>
        
        {/* Lower lip */}
        <mesh position={[0, -0.11, 0.465]} castShadow>
          <torusGeometry args={[0.11, 0.015, 16, 64, Math.PI]} />
          <meshStandardMaterial color="#d46a48" />
        </mesh>
        
        {/* ========== EARS ========== */}
        <group position={[-0.44, 0.05, 0]}>
          <mesh castShadow>
            <sphereGeometry args={[0.12, 32, 32]} />
            <meshStandardMaterial color="#e8c5a0" />
          </mesh>
          <mesh position={[-0.03, 0, 0.05]} castShadow>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial color="#d4a574" />
          </mesh>
        </group>
        <group position={[0.44, 0.05, 0]}>
          <mesh castShadow>
            <sphereGeometry args={[0.12, 32, 32]} />
            <meshStandardMaterial color="#e8c5a0" />
          </mesh>
          <mesh position={[0.03, 0, 0.05]} castShadow>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial color="#d4a574" />
          </mesh>
        </group>
        
        {/* ========== GLASSES (Cool factor) ========== */}
        <Float speed={2} rotationIntensity={0.1} floatIntensity={0.05}>
          <mesh position={[-0.16, 0.09, 0.52]} castShadow>
            <torusGeometry args={[0.12, 0.022, 16, 64]} />
            <meshStandardMaterial color="#c9b038" metalness={0.85} roughness={0.15} />
          </mesh>
          <mesh position={[0.16, 0.09, 0.52]} castShadow>
            <torusGeometry args={[0.12, 0.022, 16, 64]} />
            <meshStandardMaterial color="#c9b038" metalness={0.85} roughness={0.15} />
          </mesh>
          <mesh position={[0, 0.09, 0.52]} castShadow>
            <boxGeometry args={[0.2, 0.03, 0.02]} />
            <meshStandardMaterial color="#c9b038" metalness={0.85} />
          </mesh>
        </Float>
      </group>
      
      {/* ========== RIGHT ARM (Reaching Arm) ========== */}
      <group ref={rightArmRef} position={[0.55, 1.25, 0]}>
        {/* Upper arm */}
        <mesh rotation={[0, 0, -0.25]} castShadow>
          <capsuleGeometry args={[0.13, 0.6, 12, 20]} />
          <meshStandardMaterial color="#2c3e6d" />
        </mesh>
        {/* Forearm */}
        <mesh position={[0, -0.45, 0]} rotation={[0.15, 0, 0.05]} castShadow>
          <capsuleGeometry args={[0.11, 0.5, 10, 18]} />
          <meshStandardMaterial color="#2c3e6d" />
        </mesh>
        {/* Hand */}
        <mesh position={[0, -0.75, 0.08]} castShadow>
          <sphereGeometry args={[0.12, 24, 24]} />
          <meshStandardMaterial color="#e8c5a0" />
        </mesh>
        {/* Thumb */}
        <mesh position={[0.06, -0.7, 0.12]} castShadow>
          <capsuleGeometry args={[0.035, 0.09, 6, 8]} />
          <meshStandardMaterial color="#e8c5a0" />
        </mesh>
        
        {/* Fingers when reaching out */}
        {reachProgress > 0.2 && (
          <>
            <mesh position={[0.045, -0.8, 0.16]} castShadow>
              <capsuleGeometry args={[0.03, 0.1, 6, 8]} />
              <meshStandardMaterial color="#e8c5a0" />
            </mesh>
            <mesh position={[-0.01, -0.81, 0.17]} castShadow>
              <capsuleGeometry args={[0.03, 0.1, 6, 8]} />
              <meshStandardMaterial color="#e8c5a0" />
            </mesh>
            <mesh position={[-0.06, -0.8, 0.16]} castShadow>
              <capsuleGeometry args={[0.03, 0.1, 6, 8]} />
              <meshStandardMaterial color="#e8c5a0" />
            </mesh>
          </>
        )}
      </group>
      
      {/* ========== LEFT ARM (Idle) ========== */}
      <group ref={leftArmRef} position={[-0.55, 1.25, 0]}>
        <mesh rotation={[0, 0, 0.25]} castShadow>
          <capsuleGeometry args={[0.13, 0.6, 12, 20]} />
          <meshStandardMaterial color="#2c3e6d" />
        </mesh>
        <mesh position={[0, -0.45, 0]} rotation={[-0.1, 0, -0.05]} castShadow>
          <capsuleGeometry args={[0.11, 0.5, 10, 18]} />
          <meshStandardMaterial color="#2c3e6d" />
        </mesh>
        <mesh position={[0, -0.73, 0.05]} castShadow>
          <sphereGeometry args={[0.12, 24, 24]} />
          <meshStandardMaterial color="#e8c5a0" />
        </mesh>
      </group>
      
      {/* ========== LEGS ========== */}
      {/* Left leg */}
      <group position={[-0.24, 0.3, 0]}>
        <mesh castShadow>
          <capsuleGeometry args={[0.13, 0.7, 12, 18]} />
          <meshStandardMaterial color="#1a2a4a" />
        </mesh>
        {/* Knee detail */}
        <mesh position={[0, -0.2, 0.08]} castShadow>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#2a3a5a" />
        </mesh>
      </group>
      
      {/* Right leg */}
      <group position={[0.24, 0.3, 0]}>
        <mesh castShadow>
          <capsuleGeometry args={[0.13, 0.7, 12, 18]} />
          <meshStandardMaterial color="#1a2a4a" />
        </mesh>
        <mesh position={[0, -0.2, 0.08]} castShadow>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#2a3a5a" />
        </mesh>
      </group>
      
      {/* ========== SHOES ========== */}
      <mesh position={[-0.24, -0.1, 0.08]} castShadow>
        <boxGeometry args={[0.3, 0.12, 0.38]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.35} metalness={0.05} />
      </mesh>
      <mesh position={[0.24, -0.1, 0.08]} castShadow>
        <boxGeometry args={[0.3, 0.12, 0.38]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.35} metalness={0.05} />
      </mesh>
      
      {/* Shoe soles */}
      <mesh position={[-0.24, -0.16, 0.08]} castShadow>
        <boxGeometry args={[0.32, 0.04, 0.4]} />
        <meshStandardMaterial color="#333" roughness={0.7} />
      </mesh>
      <mesh position={[0.24, -0.16, 0.08]} castShadow>
        <boxGeometry args={[0.32, 0.04, 0.4]} />
        <meshStandardMaterial color="#333" roughness={0.7} />
      </mesh>
      
      {/* ========== ACCESSORIES ========== */}
      {/* Wrist watch */}
      <mesh position={[-0.58, 1.0, 0.12]} castShadow>
        <boxGeometry args={[0.08, 0.1, 0.06]} />
        <meshStandardMaterial color="#c9b038" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[-0.58, 1.0, 0.16]} castShadow>
        <cylinderGeometry args={[0.03, 0.03, 0.02, 8]} />
        <meshStandardMaterial color="#fff" metalness={0.9} />
      </mesh>
      
      {/* Name Badge */}
      <Html position={[0, 1.3, 0.55]} center distanceFactor={10}>
        <div className="character-badge">
          <span className="badge-icon">👨‍💻</span>
          <span className="badge-text">Alex Chen</span>
          <span className="badge-title">Full Stack Dev</span>
        </div>
      </Html>
      
      {/* Floating particles around character */}
      <Sparkles count={60} scale={[1.5, 2.2, 1.5]} size={0.045} speed={0.5} color="#61dafb" position={[0, 1.1, 0]} />
      <Sparkles count={30} scale={[1.5, 2.2, 1.5]} size={0.03} speed={0.7} color="#ff66aa" position={[0, 1.1, 0]} />
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
  const lightRef = useRef();
  
  useEffect(() => {
    if (isBeingPressed) {
      setPressAnim(1);
      const timer = setTimeout(() => setPressAnim(0), 200);
      return () => clearTimeout(timer);
    }
  }, [isBeingPressed]);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const targetScale = 1 - pressAnim * 0.08;
      meshRef.current.scale.setScalar(targetScale);
    }
    if (lightRef.current && isHovered && !disabled) {
      const intensity = 0.5 + Math.sin(clock.getElapsedTime() * 10) * 0.3;
      lightRef.current.intensity = intensity;
    }
  });
  
  return (
    <group position={position}>
      {/* Button shadow */}
      <mesh position={[0, -0.05, -0.08]}>
        <boxGeometry args={[1.5, 0.65, 0.1]} />
        <meshStandardMaterial color="#000000" transparent opacity={0.4} />
      </mesh>
      
      {/* Button glow light */}
      <pointLight ref={lightRef} position={[0, 0, 0.2]} intensity={isHovered && !disabled ? 0.6 : 0} color={color} />
      
      {/* Main button */}
      <mesh 
        ref={meshRef}
        onPointerOver={() => setIsHovered(true)}
        onPointerOut={() => setIsHovered(false)}
        onClick={onClick}
        castShadow
      >
        <boxGeometry args={[1.5, 0.65, 0.18]} />
        <meshStandardMaterial 
          color={disabled ? "#444" : color} 
          emissive={!disabled && (isHovered || isBeingPressed) ? color : "#000"}
          emissiveIntensity={isHovered && !disabled ? 0.5 : 0.1}
          metalness={0.85}
          roughness={0.15}
        />
      </mesh>
      
      {/* Button border */}
      <mesh position={[0, 0, 0.11]} scale={[1.03, 1.03, 1]}>
        <boxGeometry args={[1.5, 0.65, 0.02]} />
        <meshStandardMaterial color={!disabled ? color : "#666"} metalness={0.9} transparent opacity={0.5} />
      </mesh>
      
      {/* Button text */}
      <Html position={[0, 0, 0.14]} center distanceFactor={8}>
        <div className={`virtual-3d-btn ${disabled ? 'disabled' : ''}`} style={{ color: !disabled ? '#fff' : '#888' }}>
          {direction === 'prev' ? '◀ PREVIOUS PROJECT' : 'NEXT PROJECT ▶'}
        </div>
      </Html>
    </group>
  );
}

// ============================================
// WINDOW FRAME WITH GLASS EFFECT
// ============================================
function WindowFrame({ children }) {
  const frameRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  
  useFrame(({ clock }) => {
    if (frameRef.current && isHovered) {
      frameRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 3) * 0.03;
    } else if (frameRef.current) {
      frameRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 1.5) * 0.02;
    }
  });
  
  return (
    <group 
      ref={frameRef} 
      position={[-2.8, 0.6, -0.8]}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      {/* Window frame outer */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[2.5, 3.5, 0.18]} />
        <meshStandardMaterial color="#8B7355" metalness={0.4} roughness={0.35} />
      </mesh>
      
      {/* Window frame inner */}
      <mesh position={[0, 0, 0.05]}>
        <boxGeometry args={[2.2, 3.2, 0.08]} />
        <meshStandardMaterial color="#A0845C" metalness={0.3} roughness={0.4} />
      </mesh>
      
      {/* Glass pane */}
      <mesh position={[0, 0, 0.12]} castShadow>
        <boxGeometry args={[2.0, 3.0, 0.04]} />
        <meshStandardMaterial 
          color="#87CEEB" 
          transparent 
          opacity={0.25} 
          metalness={0.95} 
          roughness={0.08}
          emissive="#4488aa"
          emissiveIntensity={0.05}
        />
      </mesh>
      
      {/* Glass reflection */}
      <mesh position={[-0.5, 0.8, 0.16]} rotation={[0, 0, 0.3]}>
        <planeGeometry args={[0.8, 1.2]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.08} metalness={0.9} />
      </mesh>
      
      {/* Window cross bars */}
      <mesh position={[0, 0, 0.14]}>
        <boxGeometry args={[0.1, 3.3, 0.06]} />
        <meshStandardMaterial color="#8B7355" metalness={0.5} />
      </mesh>
      <mesh position={[0, 0, 0.14]}>
        <boxGeometry args={[2.3, 0.1, 0.06]} />
        <meshStandardMaterial color="#8B7355" metalness={0.5} />
      </mesh>
      
      {/* Window sill */}
      <mesh position={[0, -1.7, 0.12]}>
        <boxGeometry args={[2.7, 0.12, 0.35]} />
        <meshStandardMaterial color="#A0845C" metalness={0.2} />
      </mesh>
      
      {/* Curtain effect */}
      <mesh position={[-1.1, 0.5, -0.1]}>
        <planeGeometry args={[0.8, 3.2]} />
        <meshStandardMaterial color="#8B2252" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[1.1, 0.5, -0.1]}>
        <planeGeometry args={[0.8, 3.2]} />
        <meshStandardMaterial color="#8B2252" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
      
      {children}
    </group>
  );
}

// ============================================
// FLOATING PROJECT PREVIEW CARDS
// ============================================
function FloatingProjectPreview({ project, position, isActive, color, onClick }) {
  const cardRef = useRef();
  const [hoverProgress, setHoverProgress] = useState(0);
  
  useFrame(({ clock }) => {
    if (cardRef.current) {
      // Floating animation
      cardRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 1.2 + position[0]) * 0.03;
      if (isActive) {
        cardRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.8) * 0.05;
      }
    }
  });
  
  return (
    <group 
      ref={cardRef} 
      position={position}
      onClick={onClick}
      onPointerOver={() => setHoverProgress(0.2)}
      onPointerOut={() => setHoverProgress(0)}
    >
      {/* Card shadow */}
      <mesh position={[0, -0.05, -0.05]}>
        <boxGeometry args={[2.1, 2.8, 0.05]} />
        <meshStandardMaterial color="#000" transparent opacity={0.3} />
      </mesh>
      
      {/* Card body */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2.1, 2.8, 0.1]} />
        <meshStandardMaterial 
          color="#1a1a2e" 
          metalness={0.25} 
          roughness={0.35} 
          emissive={color} 
          emissiveIntensity={isActive ? 0.12 : 0.02}
        />
      </mesh>
      
      {/* Card border glow */}
      {isActive && (
        <mesh position={[0, 0, 0.07]} scale={[1.02, 1.02, 1]}>
          <boxGeometry args={[2.1, 2.8, 0.02]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} transparent opacity={0.4} />
        </mesh>
      )}
      
      <Html position={[0, 0, 0.09]} center distanceFactor={8} transform>
        <div 
          className={`floating-preview ${isActive ? 'active' : ''}`} 
          style={{ borderLeftColor: color, transform: `scale(${1 + hoverProgress})` }}
        >
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
    
    // Character reaches out and presses the button
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
              camera={{ position: [0, 1.2, 7], fov: 48 }}
              style={{ background: 'radial-gradient(circle at 30% 40%, #0a0a2a 0%, #030310 100%)' }}
              gl={{ antialias: true, alpha: false }}
            >
              <PerspectiveCamera makeDefault position={[0, 1.2, 7]} />
              
              {/* Advanced Lighting for realism */}
              <ambientLight intensity={0.4} />
              <directionalLight 
                position={[4, 6, 3]} 
                intensity={1.1} 
                castShadow 
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-bias={-0.0001}
              />
              <directionalLight position={[-3, 4, -2]} intensity={0.45} color="#ffaa88" />
              <pointLight position={[0, 2.8, 2.5]} intensity={0.7} color="#ffaa66" />
              <pointLight position={[2.5, 1.8, 3]} intensity={0.45} color="#4488ff" />
              <pointLight position={[-2, 1.5, 2.8]} intensity={0.4} color="#ff66aa" />
              <spotLight position={[0, 3.8, 2.5]} intensity={0.55} angle={0.35} penumbra={0.5} castShadow />
              
              {/* Fill light from below */}
              <pointLight position={[0, -1, 0]} intensity={0.25} color="#4488aa" />
              
              <Environment preset="night" background={false} />
              <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={0.5} />
              
              {/* Reflective floor */}
              <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
                <circleGeometry args={[6, 32]} />
                <MeshReflectorMaterial
                  blur={[400, 100]}
                  resolution={1024}
                  mixBlur={1.5}
                  mixStrength={50}
                  roughness={0.8}
                  depthScale={1.5}
                  minDepthThreshold={0.3}
                  maxDepthThreshold={1.5}
                  color="#0a0a2a"
                  metalness={0.85}
                  mirror={0.5}
                />
              </mesh>
              
              {/* Floor glow */}
              <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.98, 0]}>
                <circleGeometry args={[4.5, 32]} />
                <meshStandardMaterial color="#1a1a4a" transparent opacity={0.3} emissive="#2a2a6a" emissiveIntensity={0.2} />
              </mesh>
              
              {/* Window with Character popping out */}
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
                const xPos = offset * 2.6;
                const isActive = idx === currentPage;
                return (
                  <FloatingProjectPreview
                    key={project.id}
                    project={project}
                    position={[xPos, 0.15, -1.3]}
                    isActive={isActive}
                    color={project.color}
                    onClick={() => handleDotClick(idx)}
                  />
                );
              })}
              
              {/* Interactive 3D Buttons - Right side (where character reaches) */}
              <Interactive3DButton 
                position={[3.2, -0.4, 1]}
                onClick={handleNext}
                disabled={currentPage === projects.length - 1 || isCharacterReaching}
                direction="next"
                color={projects[currentPage]?.color || "#61DAFB"}
                isBeingPressed={buttonPress === 'next'}
              />
              
              <Interactive3DButton 
                position={[-3.2, -0.4, 1]}
                onClick={handlePrev}
                disabled={currentPage === 0 || isCharacterReaching}
                direction="prev"
                color={projects[currentPage]?.color || "#61DAFB"}
                isBeingPressed={buttonPress === 'prev'}
              />
              
              {/* Ambient particles */}
              <Sparkles count={400} scale={[18, 12, 18]} size={0.05} speed={0.35} color="#61DAFB" opacity={0.35} />
              <Sparkles count={200} scale={[18, 12, 18]} size={0.035} speed={0.55} color="#ff66aa" opacity={0.25} />
              <Sparkles count={150} scale={[18, 12, 18]} size={0.04} speed={0.45} color="#ffaa44" opacity={0.2} />
              
              <OrbitControls 
                enableZoom={true}
                enablePan={true}
                minDistance={4.5}
                maxDistance={10}
                autoRotate={autoRotate}
                autoRotateSpeed={0.5}
                enableDamping
                dampingFactor={0.05}
                target={[0, 0.7, 0]}
              />
            </Canvas>
            
            <button className="rotate-toggle" onClick={() => setAutoRotate(!autoRotate)}>
              {autoRotate ? '🔒 Lock Camera' : '🔄 Auto Rotate'}
            </button>
          </div>
          
          {/* Project Details Card - Right Section */}
          <div className="project-card-3d-wrapper">
            <motion.div
              className={`project-card-3d ${isCharacterReaching ? 'pulse-effect' : ''}`}
              style={{
                background: `linear-gradient(135deg, rgba(10, 10, 40, 0.96), rgba(20, 20, 60, 0.96))`,
                borderLeft: `4px solid ${projects[currentPage].color}`
              }}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            >
              <div className="card-glow" style={{ background: projects[currentPage].color }}></div>
              
              <div className="card-header-3d">
                <motion.div 
                  className="project-icon-3d" 
                  style={{ background: projects[currentPage].gradient }}
                  animate={{ 
                    scale: isCharacterReaching ? [1, 1.15, 1] : 1,
                    rotate: isCharacterReaching ? [0, 15, -15, 0] : 0
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
                  initial={{ opacity: 0, x: pendingAction === 'next' ? 40 : -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: pendingAction === 'next' ? -40 : 40 }}
                  transition={{ duration: 0.35, type: "spring", stiffness: 200 }}
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
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
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
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
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
                      width: idx === currentPage ? 35 : 8,
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