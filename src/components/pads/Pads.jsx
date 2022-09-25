import { useContext } from "react";
import AudioCTX from "../../audio/AudioCTX.js";
import NightMode from "../../util/NightMode";
import SelectCTX from "../../util/SelectCTX";

const Pads = () => {
  const [nightMode] = useContext(NightMode);
  const [, setSelected] = useContext(SelectCTX);
  const { pads } = useContext(AudioCTX);
  return (
    <div className={`pads ${nightMode && "night"}`}>
      {Object.entries(pads).map(([name, pad], i) => (
        <div
          className="pad"
          key={i + 100}
          onClick={() => {
            pad.trigger();
            setSelected(pads[name]);
            console.log(pads[name].name);
            console.log(pads[name].pan.pan.value);
          }}
        >
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
