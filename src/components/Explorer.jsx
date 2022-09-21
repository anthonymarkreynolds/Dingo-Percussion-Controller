import { useContext } from "react";
import AudioCTX from "../audio/AudioCTX";
import ToggleSwitch from "./ToggleSwitch";

const Explorer = () => {
  const { play } = useContext(AudioCTX);
  return (
    <div className="explorer">
      <h3>Sample Explorer</h3>
      <ToggleSwitch callback={(playing) => !playing && play()} />
    </div>
  );
};
export default Explorer;
