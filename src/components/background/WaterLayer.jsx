import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function WaterLayer() {
  const water = useRef();

  useFrame((state) => {
    water.current.material.opacity =
      0.9 + Math.sin(state.clock.elapsedTime * 2) * 0.02;
  });

  return (
    <mesh position={[0, -5, -25]}>
      <planeGeometry args={[80, 20]} />
      <meshBasicMaterial
        color="#ffbb66"
        transparent
        opacity={0.9}
      />
    </mesh>
  );
}
