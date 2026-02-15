import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Book } from "./Book";
import MagicParticles from "./MagicParticles";

export const Experience = () => {
  return (
    <>
      {/* Fondo mágico */}
      <color attach="background" args={["#2a003f"]} />

      {/* Partículas mágicas */}
      <MagicParticles />

      {/* Libro flotando */}
      <Float
        rotation-x={-Math.PI / 4}
        floatIntensity={1}
        speed={2}
        rotationIntensity={2}
      >
        <Book />
      </Float>

      {/* Controles */}
      <OrbitControls />

      {/* Ambiente más suave */}
      <Environment preset="sunset" />

      {/* Luz romántica principal */}
      <directionalLight
        position={[3, 5, 2]}
        intensity={1.8}
        color="#ffd6f9"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />

      {/* Luz rosa suave */}
      <spotLight
        position={[0, 5, 5]}
        angle={0.4}
        intensity={2}
        penumbra={1}
        color="#ffb3ec"
      />

      {/* Sombra suelo */}
      <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.3} />
      </mesh>
    </>
  );
};
