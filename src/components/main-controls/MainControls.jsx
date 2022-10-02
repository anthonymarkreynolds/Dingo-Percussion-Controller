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
          <ThemeStyleSwitch />
          <ToggleSwitch callback={(playing) => !playing && play()} />
        </div>
        <div className="dial-group column">
          <Dial lg label="Volume" />
          <Dial lg label="Pan" />
        </div>
      </div>
    </div>
  );
};
export default MainControls;
