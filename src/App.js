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

const PadControls = () => {
  return (
    <div className="pad-controls">
      <h3>Pad Controls</h3>
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
