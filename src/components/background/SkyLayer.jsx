import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

export default function SkyLayer() {
  const texture = useLoader(THREE.TextureLoader, "/textures/sky.png");

  return (
    <mesh position={[0, 5, -30]}>
      <planeGeometry args={[80, 50]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
}
