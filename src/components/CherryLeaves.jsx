import { useFrame, useLoader } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

export default function CherryLeaves() {
  const group = useRef();

  const textures = useLoader(THREE.TextureLoader, [
    "textures/HOJASCEREZO01.png",
    "textures/HOJASCEREZO02.png",
    "textures/HOJASCEREZO03.png",
    "textures/HOJASCEREZO04.png",
    "textures/HOJASCEREZO05.png",
    "textures/HOJASCEREZO06.png",
  ]);

  const count = 120;

  const leaves = useMemo(() => {
    return new Array(count).fill().map(() => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 15,
        Math.random() * 10,
        (Math.random() - 0.5) * 5
      ),
      speed: 0.001 + Math.random() * 0.01,
      drift: (Math.random() - 0.5) * 0.01,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      texture: textures[Math.floor(Math.random() * textures.length)],
      size: 0.1 + Math.random() * 0.1,
    }));
  }, [textures]);

  useFrame((state) => {

    leaves.forEach((leaf, i) => {
      leaf.position.y -= leaf.speed;
      leaf.position.x += Math.sin(state.clock.elapsedTime + i) * 0.01 + leaf.drift;

      if (leaf.position.y < -3) {
        leaf.position.y = 10;
        leaf.position.x = (Math.random() - 0.5) * 15;
      }
    });

    if (group.current) {
      group.current.children.forEach((mesh, i) => {
        mesh.position.copy(leaves[i].position);

        // 🔥 Mantener orientación hacia cámara
        mesh.quaternion.copy(state.camera.quaternion);

        mesh.rotateZ(leaves[i].rotationSpeed);
      });
    }

  });

  return (
    <group ref={group}>
      {leaves.map((leaf, i) => (
        <mesh key={i}>
          <planeGeometry args={[leaf.size, leaf.size]} />
          <meshBasicMaterial
            map={leaf.texture}
            transparent
            alphaTest={0.1}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}
