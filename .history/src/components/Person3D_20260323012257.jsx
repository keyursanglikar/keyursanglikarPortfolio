import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations, Html } from '@react-three/drei';

function Person3D({ isPointing, currentPage, totalPages, onNext, onPrev }) {
  const group = useRef();
  
  // Load a free 3D character model (you can replace with your own)
  // Using a free model from GitHub - replace with your actual model path
  const { scene, animations } = useGLTF('https://models.readyplayer.me/64f6c2b2d4e3c4f2d8c9a7b3.glb');
  const { actions } = useAnimations(animations, group);
  
  useEffect(() => {
    // Play pointing animation when pointing
    if (isPointing && actions?.pointing) {
      actions.pointing.play();
    } else if (actions?.idle) {
      actions.idle.play();
    }
  }, [isPointing, actions]);
  
  useFrame((state) => {
    // Gentle idle floating motion
    if (group.current) {
      group.current.position.y = Math.sin(state.clock.elapsedTime) * 0.05;
    }
  });
  
  return (
    <group ref={group} position={[0, -1.5, 0]} scale={1.2}>
      <primitive object={scene} />
      
      {/* Project indicator above person's head */}
      <Html position={[0, 2.5, 0]} center>
        <div className="project-indicator">
          <span>{currentPage + 1} / {totalPages}</span>
        </div>
      </Html>
      
      {/* Navigation buttons floating near person */}
      <Html position={[1.5, 0, 1]} center>
        <button 
          className="nav-btn-3d prev-btn"
          onClick={onPrev}
          disabled={currentPage === 0}
        >
          ◀
        </button>
      </Html>
      
      <Html position={[-1.5, 0, 1]} center>
        <button 
          className="nav-btn-3d next-btn"
          onClick={onNext}
          disabled={currentPage === totalPages - 1}
        >
          ▶
        </button>
      </Html>
    </group>
  );
}

export default Person3D;