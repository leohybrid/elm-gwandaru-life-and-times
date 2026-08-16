'use client';

import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Points, PointMaterial } from '@react-three/drei';

const StarField = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none -z-10 bg-transparent">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }} gl={{ alpha: true }}>
        <Stars />
      </Canvas>
    </div>
  );
};

const starVertexShader = `
  attribute float size;
  attribute vec3 color;
  attribute float phase;
  
  varying vec3 vColor;
  varying float vPhase;
  
  void main() {
    vColor = color;
    vPhase = phase;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const starFragmentShader = `
  uniform float time;
  uniform bool reducedMotion;
  
  varying vec3 vColor;
  varying float vPhase;
  
  void main() {
    float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
    if (distanceToCenter > 0.5) discard;
    
    float alpha = 1.0 - (distanceToCenter * 2.0);
    
    if (!reducedMotion) {
      float twinkle = (sin(time + vPhase) + 1.0) * 0.5;
      alpha *= 0.5 + twinkle * 0.5;
    }
    
    gl_FragColor = vec4(vColor, alpha);
  }
`;

const Stars = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const numStars = 4000;

  const [positions, colors, sizes, phases] = useMemo(() => {
    const positions = new Float32Array(numStars * 3);
    const colors = new Float32Array(numStars * 3);
    const sizes = new Float32Array(numStars);
    const phases = new Float32Array(numStars);
    
    const colorOptions = [
      new THREE.Color('#FFFFFF'), // warm white
      new THREE.Color('#F4E5C1'), // pale gold
      new THREE.Color('#C8A35B'), // darker gold
      new THREE.Color('#E0F0FF'), // subtle blue
    ];

    for (let i = 0; i < numStars; i++) {
      // Random position in a sphere
      const r = 50 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      
      // Random color
      const color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
      
      // Random size
      sizes[i] = (Math.random() * 1.5 + 0.5);
      
      // Random phase for twinkle
      phases[i] = Math.random() * Math.PI * 2;
    }
    
    return [positions, colors, sizes, phases];
  }, [numStars]);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.elapsedTime;
      materialRef.current.uniforms.reducedMotion.value = prefersReducedMotion;
    }
    if (pointsRef.current && !prefersReducedMotion) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  const uniforms = useMemo(
    () => ({
      time: { value: 0 },
      reducedMotion: { value: prefersReducedMotion }
    }),
    [prefersReducedMotion]
  );

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
        <bufferAttribute
          attach="attributes-phase"
          args={[phases, 1]}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={starVertexShader}
        fragmentShader={starFragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default StarField;
