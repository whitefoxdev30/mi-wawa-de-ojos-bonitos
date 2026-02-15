import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

export default function MountainLayer() {
  const texture = useLoader(
    THREE.TextureLoader,
    "/textures/mountains.png"   // solo montañas recortadas PNG
  );

  return (
    <mesh position={[0, 1.5, -20]}>
      <planeGeometry args={[40, 15]} />
      <meshBasicMaterial
        map={texture}
        transparent
        toneMapped={false}
      />
    </mesh>
  );
}
