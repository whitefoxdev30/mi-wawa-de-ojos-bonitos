import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function SunGlow() {
  const glow = useRef();

  useFrame((state) => {
    glow.current.material.opacity =
      0.6 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
  });

  return (
    <mesh position={[0, 10, -29]}>
      <circleGeometry args={[4, 32]} />
      <meshBasicMaterial
        color="#ffcc88"
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}
