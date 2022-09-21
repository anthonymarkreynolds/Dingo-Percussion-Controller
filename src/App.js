const Explorer = () => {
  return (
    <div className="explorer">
      <h3>Sample Explorer</h3>
    </div>
  );
};

const Pads = () => {
  return (
    <div className="pads">
      {Array.from({ length: 9 }, (_, i) => (
        <div className="pad" key={i}></div>
      ))}
    </div>
  );
};

const Dial = ({ label, initValue }) => {
  return (
    <div className="dial-container">
      <svg viewBox="0 0 100 100" style={{ maxHeight: 100 }}>
        <circle
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={1 - initValue || 0.5}
          className="dial"
          cx="50"
          cy="50"
          r="40"
        />
      </svg>
      {label && <h6 className="dial-label">{label}</h6>}
    </div>
  );
};

const PadControls = () => {
  return (
    <div className="pad-controls">
      <h3>Pad Controls</h3>
      <Dial initValue={0.4} label="test" />
    </div>
  );
};

const Sequencer = () => {
  return (
    <div className="sequencer">
      <h3>Step Sequencer</h3>
    </div>
  );
};

const Sample = () => {
  <div className="sample"></div>;
};

function App() {
  return (
    <div className="layout">
      <h1>DPC</h1>
      <h2>Dingo Percussion Controller</h2>

      <div className="underlay">
        <div className="machine">
          <Explorer />
          <Pads />
          <PadControls />
          <Sequencer />
        </div>
      </div>
    </div>
  );
}

export default App;
