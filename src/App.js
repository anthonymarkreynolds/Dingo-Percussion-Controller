import { useState, useContext } from "react";
import AudioCTX from "./audio/AudioCTX.js";
import ToggleSwitch from "./components/ToggleSwitch";

const Explorer = () => {
  return (
    <div className="explorer">
      <h3>Sample Explorer</h3>
      <ToggleSwitch />
    </div>
  );
};

const Pads = () => {
  const { actx, osc1, gain1 } = useContext(AudioCTX);
  return (
    <div className="pads">
      <div key={2} class="pad">
        <h3>Hi Tom</h3>
      </div>
      <div
        className="pad"
        key={1}
        onClick={() => {
          gain1.gain.cancelScheduledValues(actx.currentTime);
          gain1.gain.setValueAtTime(0.25, actx.currentTime);
          gain1.gain.exponentialRampToValueAtTime(
            0.000000000001,
            actx.currentTime + 2
          );
        }}
      >
        <h3>Ride Hat</h3>
      </div>
      <div key={0} className="pad">
        <h3>Cym Crash</h3>
      </div>

      <div key={3} class="pad">
        <h3>Lo Tom</h3>
      </div>
      <div key={4} class="pad">
        <h3>Open HiHat</h3>
      </div>
      <div key={5} class="pad">
        <h3>Closed HiHat</h3>
      </div>
      <div key={6} class="pad">
        <h3>Kick Drum</h3>
      </div>
      <div key={7} class="pad">
        <h3>Snare Drum</h3>
      </div>
      <div key={8} class="pad">
        <h3>Clap</h3>
      </div>
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
