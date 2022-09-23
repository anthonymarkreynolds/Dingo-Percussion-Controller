import MainControls from "../components/main-controls/MainControls";
import Pads from "../components/pads/Pads";
import PadControls from "../components/pad-controls/PadControls";
import Sequencer from "../components/sequencer/Sequencer";
import { useContext } from "react";
import NightMode from "../util/NightMode";

const DrumMachine = () => {
  const [nightMode] = useContext(NightMode);
  return (
    <div className="underlay">
      <div className={`drum-machine ${nightMode && "night"}`}>
        <MainControls />
        <Pads />
        <PadControls />
        <Sequencer />
      </div>
    </div>
  );
};

export default DrumMachine;
