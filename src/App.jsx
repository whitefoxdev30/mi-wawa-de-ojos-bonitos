import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "./components/Experience";
import { UI } from "./components/UI";
import { Tulips } from "./components/Tulips";
import { TulipGrass } from "./components/TulipGrass";
import { SakuraCorners } from "./components/SakuraCorners";
import CherryLeaves from "./components/CherryLeaves";
import BackgroundScene from "./components/background/BackgroundScene";


function App() {
  return (
    <>
      <UI />
      <Loader />

      <Canvas
        shadows
        camera={{
          position: [-0.5, 1, window.innerWidth > 800 ? 4 : 9],
          fov: 45,
        }}
      >
        <Suspense fallback={null}>

          {/* 🌸 Flores independientes */}
          <CherryLeaves />

          {/* 📖 Grupo SOLO del libro */}
          <group position-y={0}>
            <Experience />
          </group>

        </Suspense>
      </Canvas>

      {/* Elementos HTML fuera del Canvas */}
      <Tulips />
      <TulipGrass />
      <SakuraCorners />
      <BackgroundScene />
    </>
  );
}

export default App;
