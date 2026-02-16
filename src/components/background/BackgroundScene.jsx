import MoonLayer from "./MoonLayer";
import CloudsLayer from "./CloudsLayer";
import StarsLayer from "./StarsLayer";
import Lake from "./Lake";
import CherryTreesLayer from "./CherryTreesLayer";
import MountainsLayer  from "./MountainsLayer";

export default function BackgroundScene() {
  return (
    <>

      <CloudsLayer />
      <StarsLayer />
      <MoonLayer />
      <Lake />
      <CherryTreesLayer />
      <MountainsLayer />
    </>
  );
}
