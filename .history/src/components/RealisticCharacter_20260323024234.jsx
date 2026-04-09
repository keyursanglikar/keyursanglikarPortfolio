import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations, Html } from '@react-three/drei';
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
  const handRef = useRef();
  
  // Load your custom Blender model
  // Replace with your actual model path
  const { scene, animations } = useGLTF('../');
  const { actions, mixer } = useAnimations(animations, group);
  
  // Track animation states
  const [reachProgress, setReachProgress] = React.useState(0);
  const [isFlipping, setIsFlipping] = React.useState(false);
  
  useEffect(() => {
    // Play idle animation by default
    if (actions?.idle) {
      actions.idle.play();
    }
    
    // Play pointing animation when pointing
    if (isPointing && actions?.point) {
      actions.idle.fadeOut(0.3);
      actions.point.reset().fadeIn(0.3).play();
    } else if (actions?.idle && !isReaching) {
      if (actions.point) actions.point.fadeOut(0.3);
      actions.idle.reset().fadeIn(0.3).play();
    }
    
    // Hand reaching animation
    if (isReaching && !isFlipping) {
      setIsFlipping(true);
      setReachProgress(0);
      
      // Animate hand reaching
      const reachInterval = setInterval(() => {
        setReachProgress(prev => {
          if (prev >= 1) {
            clearInterval(reachInterval);
            // Flip the page when hand reaches full extension
            setTimeout(() => {
              if (onPageFlip) onPageFlip();
              // Retract hand
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
  }, [isPointing, isReaching, actions, onPageFlip]);
  
  // Hand movement based on reach progress
  useFrame(() => {
    if (handRef.current && reachProgress > 0) {
      // Calculate hand position for reaching forward
      const targetX = 0.5 + reachProgress * 1.5;
      const targetZ = -0.5 + reachProgress * -1.2;
      handRef.current.position.lerp(
        new THREE.Vector3(targetX, handRef.current.position.y, targetZ),
        0.1
      );
    }
  });
  
  return (
    <group ref={group} position={position} scale={1.2}>
      <primitive object={scene} />
      
      {/* Project indicator above head */}
      <Html position={[0, 2.2, 0]} center>
        <div className="project-indicator-3d">
          <div className="indicator-content">
            <span className="project-icon">{getProjectIcon(currentPage)}</span>
            <span className="project-count">{currentPage + 1}/{totalPages}</span>
          </div>
        </div>
      </Html>
      
      {/* Floating page effect during flip */}
      {isFlipping && (
        <Html position={[1, 1, -0.5]} center>
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