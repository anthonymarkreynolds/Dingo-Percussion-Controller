import { useContext } from "react";
import AudioCTX from "../../audio/AudioCTX.js";
import NightMode from "../../util/NightMode";

const Pads = () => {
  const [nightMode] = useContext(NightMode);
  const { pads } = useContext(AudioCTX);
  return (
    <div className={`pads ${nightMode && "night"}`}>
      {Object.entries(pads).map(([name, nodes], i) => (
        <div className="pad" key={i + 100} onClick={() => nodes.trigger()}>
          <h3 className="noselect">{name}</h3>
        </div>
      ))}
      <div className="pad" key={1}>
        <h3>Ride Cym</h3>
      </div>
      <div key={0} className="pad">
        <h3>Crash Cym</h3>
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
