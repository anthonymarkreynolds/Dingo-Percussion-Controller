import { useContext } from "react";
import AudioCTX from "../../audio/AudioCTX";
import NightMode from "../../util/NightMode";
import ToggleSwitch from "../inputs/ToggleSwitch";
import ThemeStyleSwitch from "../inputs/ThemeStyleSwitch";
import CursorCTX from "../../util/CursorCTX";

const MainControls = () => {
  const { play } = useContext(AudioCTX);
  const [nightMode] = useContext(NightMode);
  const [cursor] = useContext(CursorCTX);
  return (
    <div className={`main-controls ${nightMode && "night"}`}>
      <h3 className="area-label">Main Controls</h3>
      <h4>mouse x: {cursor.x}</h4>
      <h4>mouse y: {cursor.y}</h4>
      <ToggleSwitch callback={(playing) => !playing && play()} />
      <ThemeStyleSwitch />
    </div>
  );
};
export default MainControls;
