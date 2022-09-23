import { useContext } from "react";
import AudioCTX from "../../audio/AudioCTX";
import NightMode from "../../util/NightMode";
import ToggleSwitch from "../inputs/ToggleSwitch";
import ThemeStyleSwitch from "../inputs/ThemeStyleSwitch";

const MainControls = () => {
  const { play } = useContext(AudioCTX);
  const [nightMode] = useContext(NightMode);
  return (
    <div className={`main-controls ${nightMode && "night"}`}>
      <h3>Main Controls</h3>
      <ToggleSwitch callback={(playing) => !playing && play()} />
      <ThemeStyleSwitch />
    </div>
  );
};
export default MainControls;
