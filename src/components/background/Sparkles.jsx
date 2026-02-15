import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Sparkles() {
  const group = useRef();

  useFrame((state) => {
    group.current.rotation.z =
      Math.sin(state.clock.elapsedTime * 0.2) * 0.02;
  });

  return (
    <group ref={group}>
      <mesh position={[5, 5, -20]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshBasicMaterial color="#fff5aa" />
      </mesh>
    </group>
  );
}
