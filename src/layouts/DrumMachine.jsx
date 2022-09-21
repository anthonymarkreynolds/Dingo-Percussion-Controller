import Explorer from "../components/Explorer";
import Pads from "../components/Pads";
import PadControls from "../components/PadControls";
import Sequencer from "../components/Sequencer";

const DrumMachine = () => {
  return (
    <div className="underlay">
      <div className="drum-machine">
        <Explorer />
        <Pads />
        <PadControls />
        <Sequencer />
      </div>
    </div>
  );
};

export default DrumMachine;
