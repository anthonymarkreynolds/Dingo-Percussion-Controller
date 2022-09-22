import Dial from "./Dial";
const PadControls = () => {
  return (
    <div className="pad-controls">
      <h3>Pad Controls</h3>
      <div className="dial-group">
        <Dial lg initValue={0.2} label="test2" />
        <Dial md pan initValue={0.7} label="test1" />
        <Dial sm initValue={0.4} label="test" />
      </div>
    </div>
  );
};

export default PadControls;
