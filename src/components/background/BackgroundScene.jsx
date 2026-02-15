import SkyLayer from "./SkyLayer";
import SunGlow from "./SunGlow";
import MountainLayer from "./MountainLayer";
import WaterLayer from "./WaterLayer";
import Sparkles from "./Sparkles";

export default function BackgroundScene() {
  return (
    <>
      <SkyLayer />
      <SunGlow />
      <MountainLayer />
      <WaterLayer />
      <Sparkles />
    </>
  );
}
