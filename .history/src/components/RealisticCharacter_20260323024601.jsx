import React, { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations, Html, Box } from '@react-three/drei';
import * as THREE from 'three';

function RealisticCharacter({ 
  isPointing, 
  isReaching, 
  currentPage, 
  totalPages, 
  onPageFlip,
  position = [0, -1.5, 0] 
}) {
  const group = useRef();
  const [modelError, setModelError] = useState(false);
  const [reachProgress, setReachProgress] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  
  // Try to load model, with fallback
  let scene = null;
  let animations = [];
  
  try {
    const gltf = useGLTF('/public/models/character.glb');
    scene = gltf.scene;
    animations = gltf.animations;
  } catch (error) {
    console.error('Failed to load model:', error);
  }
  
  useEffect(() => {
    // If model didn't load, show error
    if (!scene) {
      setModelError(true);
    }
  }, [scene]);
  
  useEffect(() => {
    // Hand reaching animation
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
  
  // Animation for floating
  useFrame((state) => {
    if (group.current) {
      // Gentle floating motion
      group.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.05;
    }
  });
  
  return (
    <group ref={group} position={position} scale={0.8}>
      {modelError ? (
        // Fallback 3D character when model doesn't load
        <group>
          {/* Body */}
          <mesh position={[0, 0.8, 0]}>
            <cylinderGeometry args={[0.5, 0.5, 1.2, 32]} />
            <meshStandardMaterial color="#4a90e2" />
          </mesh>
          
          {/* Head */}
          <mesh position={[0, 1.5, 0]}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color="#ffdd99" />
          </mesh>
          
          {/* Eyes */}
          <mesh position={[-0.2, 1.65, 0.45]}>
            <sphereGeometry args={[0.1, 32, 32]} />
            <meshStandardMaterial color="white" />
          </mesh>
          <mesh position={[0.2, 1.65, 0.45]}>
            <sphereGeometry args={[0.1, 32, 32]} />
            <meshStandardMaterial color="white" />
          </mesh>
          <mesh position={[-0.2, 1.65, 0.55]}>
            <sphereGeometry args={[0.05, 32, 32]} />
            <meshStandardMaterial color="black" />
          </mesh>
          <mesh position={[0.2, 1.65, 0.55]}>
            <sphereGeometry args={[0.05, 32, 32]} />
            <meshStandardMaterial color="black" />
          </mesh>
          
          {/* Arms */}
          <mesh position={[-0.6, 1.1, 0]} rotation={[0, 0, 0.5]}>
            <cylinderGeometry args={[0.15, 0.15, 0.8, 8]} />
            <meshStandardMaterial color="#357abd" />
          </mesh>
          <mesh position={[0.6, 1.1, 0]} rotation={[0, 0, -0.5]}>
            <cylinderGeometry args={[0.15, 0.15, 0.8, 8]} />
            <meshStandardMaterial color="#357abd" />
          </mesh>
          
          {/* Hand that reaches */}
          <mesh 
            ref={handRef}
            position={[0.8 + reachProgress * 0.5, 0.9 - reachProgress * 0.2, reachProgress * 0.5]} 
          >
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshStandardMaterial color="#ffcc88" />
          </mesh>
        </group>
      ) : (
        // Actual 3D model
        <primitive 
          object={scene} 
          scale={0.8}
          position={[0, -0.5, 0]}
        />
      )}
      
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