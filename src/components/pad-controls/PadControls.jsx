import PadMain from "./PadMain";
import ADSR from "./ADSR";
const PadControls = () => {
  return (
    <div className="pad-controls">
      <h3>Pad Controls</h3>
      <PadMain />
      <ADSR />
    </div>
  );
};

export default PadControls;
