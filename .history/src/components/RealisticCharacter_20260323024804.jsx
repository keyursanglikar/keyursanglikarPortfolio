import React, { useRef, useEffect } from 'react';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

function RealisticCharacter({ 
  isPointing, 
  isReaching, 
  currentPage, 
  totalPages, 
  onPageFlip,
  position = [0, -1.5, 0] 
}) {
  const groupRef = useRef();
  const armRef = useRef();
  const [reachProgress, setReachProgress] = React.useState(0);
  const [isFlipping, setIsFlipping] = React.useState(false);
  
  useEffect(() => {
    if (isReaching && !isFlipping) {
      setIsFlipping(true);
      setReachProgress(0);
      
      const reachInterval = setInterval(() => {
        setReachProgress(prev => {
          if (prev >= 1) {
            clearInterval(reachInterval);
            setTimeout(() => {
              if (onPageFlip) onPageFlip();
              setTimeout(() => {
                setReachProgress(0);
                setIsFlipping(false);
              }, 500);
            }, 200);
            return 1;
          }
          return prev + 0.05;
        });
      }, 30);
      
      return () => clearInterval(reachInterval);
    }
  }, [isReaching, onPageFlip]);
  
  return (
    <group ref={groupRef} position={position} scale={0.8}>
      {/* Body */}
      <mesh position={[0, 0.8, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.5, 0.5, 1.2, 32]} />
        <meshStandardMaterial color="#4a90e2" roughness={0.3} metalness={0.1} />
      </mesh>
      
      {/* Head */}
      <mesh position={[0, 1.5, 0]} castShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#ffdd99" roughness={0.2} />
      </mesh>
      
      {/* Eyes */}
      <mesh position={[-0.18, 1.65, 0.48]} castShadow>
        <sphereGeometry args={[0.08, 32, 32]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[0.18, 1.65, 0.48]} castShadow>
        <sphereGeometry args={[0.08, 32, 32]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[-0.18, 1.65, 0.55]} castShadow>
        <sphereGeometry args={[0.04, 32, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[0.18, 1.65, 0.55]} castShadow>
        <sphereGeometry args={[0.04, 32, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>
      
      {/* Smile */}
      <mesh position={[0, 1.45, 0.5]} rotation={[0, 0, 0]}>
        <torusGeometry args={[0.15, 0.03, 16, 32, Math.PI]} />
        <meshStandardMaterial color="#d44c2f" />
      </mesh>
      
      {/* Hair */}
      <mesh position={[0, 1.95, 0]} castShadow>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshStandardMaterial color="#4a3728" />
      </mesh>
      
      {/* Arms */}
      <group ref={armRef}>
        {/* Left Arm */}
        <mesh 
          position={[-0.7 + (reachProgress * 0.3), 1.2 - (reachProgress * 0.1), reachProgress * 0.4]} 
          rotation={[0, 0, 0.5 + (reachProgress * 0.8)]}
          castShadow
        >
          <cylinderGeometry args={[0.15, 0.12, 0.9, 8]} />
          <meshStandardMaterial color="#357abd" />
        </mesh>
        
        {/* Right Arm */}
        <mesh position={[0.7, 1.2, 0]} rotation={[0, 0, -0.5]} castShadow>
          <cylinderGeometry args={[0.15, 0.12, 0.9, 8]} />
          <meshStandardMaterial color="#357abd" />
        </mesh>
        
        {/* Hand that reaches out */}
        {reachProgress > 0 && (
          <mesh 
            position={[-0.85 + (reachProgress * 0.6), 1.05 - (reachProgress * 0.15), reachProgress * 0.6]} 
            castShadow
          >
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshStandardMaterial color="#ffcc88" />
          </mesh>
        )}
      </group>
      
      {/* Legs */}
      <mesh position={[-0.25, 0.2, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.1, 0.7, 8]} />
        <meshStandardMaterial color="#2c3e50" />
      </mesh>
      <mesh position={[0.25, 0.2, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.1, 0.7, 8]} />
        <meshStandardMaterial color="#2c3e50" />
      </mesh>
      
      {/* Project indicator above head */}
      <Html position={[0, 2.2, 0]} center distanceFactor={8}>
        <div className="project-indicator-3d">
          <div className="indicator-content">
            <span className="project-icon">{getProjectIcon(currentPage)}</span>
            <span className="project-count">{currentPage + 1}/{totalPages}</span>
          </div>
        </div>
      </Html>
      
      {/* Floating page effect during flip */}
      {isFlipping && (
        <Html position={[1, 1, -0.5]} center distanceFactor={8}>
          <div className="floating-page">
            <div className="page-flip-animation">
              📄
            </div>
          </div>
        </Html>
      )}
    </group>
  );
}

function getProjectIcon(page) {
  const icons = ['⚛️', '☕', '🎨', '🐍', '🛒'];
  return icons[page % icons.length];
}

export default RealisticCharacter;