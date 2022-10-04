import { useContext } from "react";
import AudioCTX from "../../audio/AudioCTX";
import NightMode from "../../util/NightMode";
import ToggleSwitch from "../inputs/ToggleSwitch";
import ThemeStyleSwitch from "../inputs/ThemeStyleSwitch";
import Dial from "../inputs/Dial";

const MainControls = () => {
  const { play } = useContext(AudioCTX);
  const { nightMode } = useContext(NightMode);
  return (
    <div className={`main-controls ${nightMode && "night"}`}>
      <h3 className="area-label">Main Controls</h3>
      <div className="area">
        <div>
          <h2>Enable Sound</h2>
          <ToggleSwitch callback={(playing) => !playing && play()} />
        </div>
        <div>
          <h3>Theme</h3>
          <ThemeStyleSwitch />
        </div>
      </div>
    </div>
  );
};
export default MainControls;
