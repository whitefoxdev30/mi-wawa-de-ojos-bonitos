import MoonLayer from "./MoonLayer";
import CloudsLayer from "./CloudsLayer";
import StarsLayer from "./StarsLayer";
import Lake from "./Lake";
import CherryTreesLayer from "./CherryTreesLayer";
import MountainsLayer from "./MountainsLayer";
import FarTreesLayer from "./FarTreesLayer";

export default function BackgroundScene() {
  return (
    <>
      <CloudsLayer />
      <StarsLayer />
      <MoonLayer />
      <MountainsLayer />
      <FarTreesLayer /> 
      <Lake />
      <CherryTreesLayer />
    </>
  );
}
