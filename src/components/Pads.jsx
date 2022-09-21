import { useContext } from "react";
import AudioCTX from "../audio/AudioCTX.js";

const Pads = () => {
  const { actx, osc1, gain1 } = useContext(AudioCTX);
  return (
    <div className="pads">
      <div key={2} className="pad">
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
        <h3>Ride Cym</h3>
      </div>
      <div key={0} className="pad">
        <h3>Cym Crash</h3>
      </div>

      <div key={3} className="pad">
        <h3>Lo Tom</h3>
      </div>
      <div key={4} className="pad">
        <h3>Open HiHat</h3>
      </div>
      <div key={5} className="pad">
        <h3>Closed HiHat</h3>
      </div>
      <div key={6} className="pad">
        <h3>Kick Drum</h3>
      </div>
      <div key={7} className="pad">
        <h3>Snare Drum</h3>
      </div>
      <div key={8} className="pad">
        <h3>Clap</h3>
      </div>
    </div>
  );
};

export default Pads;
