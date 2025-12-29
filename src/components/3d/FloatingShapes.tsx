import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Icosahedron, Box, Octahedron, Ring } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingShapeProps {
  position: [number, number, number];
  color: string;
  speed?: number;
  rotationIntensity?: number;
  floatIntensity?: number;
  scale?: number;
}

const FloatingSphere = ({ position, color, speed = 1, rotationIntensity = 1, floatIntensity = 1, scale = 1 }: FloatingShapeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
      meshRef.current.scale.setScalar(scale * (hovered ? 1.2 : 1));
    }
  });

  return (
    <Float speed={speed * 2} rotationIntensity={rotationIntensity} floatIntensity={floatIntensity}>
      <Sphere 
        ref={meshRef} 
        args={[1, 64, 64]} 
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={hovered ? 0.6 : 0.4}
          speed={hovered ? 4 : 2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const FloatingTorus = ({ position, color, speed = 1, scale = 1 }: FloatingShapeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2 * speed;
    }
  });

  return (
    <Float speed={speed * 1.5} rotationIntensity={0.5} floatIntensity={1.5}>
      <Torus ref={meshRef} args={[1 * scale, 0.4 * scale, 32, 64]} position={position}>
        <meshStandardMaterial
          color={color}
          roughness={0.1}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </Torus>
    </Float>
  );
};

const FloatingIcosahedron = ({ position, color, speed = 1, scale = 1 }: FloatingShapeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15 * speed;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.8} floatIntensity={2}>
      <Icosahedron ref={meshRef} args={[1 * scale, 1]} position={position}>
        <meshStandardMaterial
          color={color}
          roughness={0.3}
          metalness={0.7}
          wireframe
        />
      </Icosahedron>
    </Float>
  );
};

const FloatingBox = ({ position, color, speed = 1, scale = 1 }: FloatingShapeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1 * speed;
    }
  });

  return (
    <Float speed={speed * 1.2} rotationIntensity={0.6} floatIntensity={1.8}>
      <Box ref={meshRef} args={[1 * scale, 1 * scale, 1 * scale]} position={position}>
        <meshStandardMaterial
          color={color}
          roughness={0.2}
          metalness={0.85}
          wireframe
        />
      </Box>
    </Float>
  );
};

const FloatingOctahedron = ({ position, color, speed = 1, scale = 1 }: FloatingShapeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.25 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.18 * speed;
    }
  });

  return (
    <Float speed={speed * 0.8} rotationIntensity={1} floatIntensity={1.2}>
      <Octahedron ref={meshRef} args={[1 * scale]} position={position}>
        <meshStandardMaterial
          color={color}
          roughness={0.15}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={0.15}
        />
      </Octahedron>
    </Float>
  );
};

const FloatingRing = ({ position, color, speed = 1, scale = 1 }: FloatingShapeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.PI / 2 + Math.sin(state.clock.elapsedTime * speed) * 0.3;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1 * speed;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={1}>
      <Ring ref={meshRef} args={[0.8 * scale, 1.2 * scale, 64]} position={position}>
        <meshStandardMaterial
          color={color}
          roughness={0.1}
          metalness={0.95}
          side={THREE.DoubleSide}
        />
      </Ring>
    </Float>
  );
};

const Particles = () => {
  const count = 300;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }
    return pos;
  }, []);

  const colors = useMemo(() => {
    const cols = new Float32Array(count * 3);
    const color1 = new THREE.Color('#00f0ff');
    const color2 = new THREE.Color('#a855f7');
    const color3 = new THREE.Color('#4a9eff');
    
    for (let i = 0; i < count; i++) {
      const rand = Math.random();
      const color = rand < 0.33 ? color1 : rand < 0.66 ? color2 : color3;
      cols[i * 3] = color.r;
      cols[i * 3 + 1] = color.g;
      cols[i * 3 + 2] = color.b;
    }
    return cols;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.015;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.008;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
};

const MouseLight = () => {
  const lightRef = useRef<THREE.PointLight>(null);
  const { viewport } = useThree();

  useFrame(({ mouse }) => {
    if (lightRef.current) {
      lightRef.current.position.x = (mouse.x * viewport.width) / 2;
      lightRef.current.position.y = (mouse.y * viewport.height) / 2;
    }
  });

  return (
    <pointLight
      ref={lightRef}
      position={[0, 0, 5]}
      intensity={0.5}
      color="#00f0ff"
      distance={15}
    />
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.25} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#00f0ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.6} color="#a855f7" />
      <pointLight position={[0, -10, 5]} intensity={0.4} color="#4a9eff" />
      <spotLight
        position={[0, 15, 0]}
        angle={0.4}
        penumbra={1}
        intensity={0.6}
        color="#4a9eff"
      />
      
      <MouseLight />

      {/* Main shapes */}
      <FloatingSphere position={[-4, 2, -2]} color="#00f0ff" speed={0.8} scale={0.9} />
      <FloatingSphere position={[5, -1, -3]} color="#a855f7" speed={1.2} floatIntensity={1.5} scale={0.7} />
      <FloatingSphere position={[2, 4, -5]} color="#4a9eff" speed={0.6} scale={0.5} />
      
      <FloatingTorus position={[3, 3, -4]} color="#4a9eff" speed={0.6} scale={0.8} />
      <FloatingTorus position={[-5, -2, -5]} color="#00f0ff" speed={0.9} scale={0.6} />
      
      <FloatingIcosahedron position={[0, -3, -2]} color="#a855f7" speed={0.7} scale={1.2} />
      <FloatingIcosahedron position={[-2, 4, -6]} color="#4a9eff" speed={1} scale={0.8} />
      
      {/* New shapes */}
      <FloatingBox position={[6, 1, -4]} color="#00f0ff" speed={0.5} scale={0.7} />
      <FloatingBox position={[-6, -3, -3]} color="#a855f7" speed={0.7} scale={0.5} />
      
      <FloatingOctahedron position={[-3, -4, -4]} color="#4a9eff" speed={0.8} scale={0.6} />
      <FloatingOctahedron position={[4, -4, -5]} color="#00f0ff" speed={0.6} scale={0.5} />
      
      <FloatingRing position={[0, 2, -3]} color="#a855f7" speed={0.4} scale={1.5} />
      <FloatingRing position={[-4, 0, -5]} color="#00f0ff" speed={0.3} scale={0.8} />
      
      <Particles />
    </>
  );
};

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default FloatingShapes;
