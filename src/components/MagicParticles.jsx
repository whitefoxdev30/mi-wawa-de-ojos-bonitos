import { useFrame, useLoader } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

export default function MagicParticles() {
  const points = useRef();
  const texture = useLoader(THREE.TextureLoader, "/textures/glow.png");

  const count = 600;

  const { positions, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = Math.random() * 5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;

      speeds[i] = 0.001 + Math.random() * 0.002;
    }

    return { positions, speeds };
  }, []);

  useFrame(() => {
    const pos = points.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] += speeds[i];

      if (pos[i * 3 + 1] > 5) {
        pos[i * 3 + 1] = 0;
      }
    }

    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        map={texture}
        size={0.18}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        color="#ff9be6"
      />
    </points>
  );
}
