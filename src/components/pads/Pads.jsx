import { useContext } from "react";
import AudioCTX from "../../audio/AudioCTX.js";
import NightMode from "../../util/NightMode";
import SelectCTX from "../../util/SelectCTX";

const Pads = () => {
  const { nightMode } = useContext(NightMode);
  const { setSelected } = useContext(SelectCTX);
  const { pads } = useContext(AudioCTX);
  return (
    <div className={`pads ${nightMode && "night"}`}>
      {Object.entries(pads).map(([name, pad], i) => (
        <div
          className="pad"
          key={i}
          onClick={() => {
            pad.trigger();
            setSelected(pads[name]);
            console.log("selected: ", pads[name]);
          }}
        >
          <h3 className="noselect">{name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Pads;
