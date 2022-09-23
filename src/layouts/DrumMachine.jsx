import MainControls from "../components/main-controls/MainControls";
import Pads from "../components/pads/Pads";
import PadControls from "../components/pad-controls/PadControls";
import Sequencer from "../components/sequencer/Sequencer";

const DrumMachine = () => {
  return (
    <div className="underlay">
      <div className="drum-machine">
        <MainControls />
        <Pads />
        <PadControls />
        <Sequencer />
      </div>
    </div>
  );
};

export default DrumMachine;
