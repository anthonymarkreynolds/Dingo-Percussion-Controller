import ADSR from "./ADSR";
const PadControls = () => {
  return (
    <div className="pad-controls">
      <h3>Pad Controls</h3>
      <div className="dial-group">
        <ADSR />
      </div>
    </div>
  );
};

export default PadControls;
