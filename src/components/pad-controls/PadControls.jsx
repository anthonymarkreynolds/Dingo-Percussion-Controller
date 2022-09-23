import PadMain from "./PadMain";
import ADSR from "./ADSR";
const PadControls = () => {
  return (
    <div className="pad-controls">
      <PadMain />
      <ADSR />
    </div>
  );
};

export default PadControls;
