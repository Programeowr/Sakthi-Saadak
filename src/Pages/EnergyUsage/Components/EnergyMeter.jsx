import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function EnergyMeter({ value }) {
  const groupRef = useRef();
  const materialRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
    if (materialRef.current) {
      materialRef.current.emissiveIntensity = Math.sin(state.clock.elapsedTime) * 0.5 + 1;
    }
  });

  const normalizedValue = Math.min(Math.max(value / 5000, 0), 1);
  
  return (
    <group ref={groupRef}>
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[2, 0.3, 16, 100]} />
        <meshPhongMaterial
          ref={materialRef}
          color={new THREE.Color(0x00c2ff)}
          emissive={new THREE.Color(0x00ff00)}
          emissiveIntensity={1}
        />
      </mesh>
      <mesh position={[0, 0, 0.5]}>
        <cylinderGeometry args={[2, 2, 0.1, 32]} />
        <meshPhongMaterial
          color={0x1a1f35}
          transparent
          opacity={0.6}
        />
      </mesh>
      <mesh position={[0, 0, 0.6]}>
        <ringGeometry args={[0, 2, 32]} />
        <meshBasicMaterial
          color={0x00c2ff}
          transparent
          opacity={normalizedValue}
        />
      </mesh>
    </group>
  );
}

export default EnergyMeter;