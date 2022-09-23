import { useContext } from "react";
import AudioCTX from "../../audio/AudioCTX";
import ToggleSwitch from "../inputs/ToggleSwitch";
import ThemeStyleSwitch from "../../util/ThemeStyleSwitch"

const MainControls = () => {
  const { play } = useContext(AudioCTX);
  return (
    <div className="main-controls">
      <h3>Main Controls</h3>
      <ToggleSwitch callback={(playing) => !playing && play()} />
      <ThemeStyleSwitch />
    </div>
  );
};
export default MainControls;
