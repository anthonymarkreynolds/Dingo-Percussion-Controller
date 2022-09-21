import { useState, useContext } from "react";
import AudioCTX from "./audio/AudioCTX.js";

const Explorer = () => {
  return (
    <div className="explorer">
      <h3>Sample Explorer</h3>
    </div>
  );
};

const Pads = () => {
  const { actx, osc1, gain1 } = useContext(AudioCTX);
  return (
    <div className="pads">
      <div key={0} className="pad" onClick={() => osc1.start()}></div>
      <div
        className="pad"
        key={1}
        onClick={() => {
          const waveArray = new Float32Array(3);
          waveArray[0] = 1;
          waveArray[1] = 0.25;
          waveArray[2] = 0;
          gain1.gain.cancelScheduledValues(actx.currentTime);
          gain1.gain.setValueAtTime(0.25, actx.currentTime);
          gain1.gain.exponentialRampToValueAtTime(
            0.000000000001,
            actx.currentTime + 2
          );
        }}
      ></div>
    </div>
  );
};

const Dial = ({ label, initValue, pan, sm, md, lg }) => {
  return (
    <div className="dial-container">
      <svg
        viewBox="0 0 100 100"
        className={`${pan && "pan "} ${
          (sm && "sm") || (md && "md") || (lg && "lg")
        }`}
      >
        <circle className="dial" cx="50" cy="50" r="40" />
        <circle
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={1 - initValue || 0.5}
          className="dial-ring blur"
          cx="50"
          cy="50"
          r="40"
        />
        <circle
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={1 - initValue || 0.5}
          className={`dial-ring`}
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
      <div className="dial-group">
        <Dial lg initValue={0.2} label="test2" />
        <Dial md pan initValue={0.7} label="test1" />
        <Dial sm initValue={0.4} label="test" />
      </div>
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
