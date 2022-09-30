import { useContext } from "react";
import AudioCTX from "../../audio/AudioCTX.js";
import NightMode from "../../util/NightMode";
import SelectCTX from "../../util/SelectCTX";

const Pads = () => {
  const [nightMode] = useContext(NightMode);
  const { pads } = useContext(AudioCTX);
  return (
    <div className={`pads ${nightMode && "night"}`}>
      {Object.entries(pads).map(([name, pad], i) => (
        <div
          className="pad"
          key={i}
          onClick={() => {
            console.log(pad);
            pad.trigger();
          }}
        >
          <h3 className="noselect">{name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Pads;
