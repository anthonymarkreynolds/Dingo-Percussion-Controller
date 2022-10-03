import { useContext, useState } from "react";
import SelectCTX from "../../util/SelectCTX";
import NightMode from "../../util/NightMode";
import PadMain from "./PadMain";
import ADSR from "./ADSR";
import Dial from "../inputs/Dial";

const PadControls = () => {
  const { nightMode } = useContext(NightMode);
  const { selected } = useContext(SelectCTX);
  const [envelope, setEnvelope] = useState("volume");
  return (
    <div className={`pad-controls ${nightMode && "night"}`}>
      <h3 className="area-label">Pad Controls</h3>
      {selected && (
        <>
          <PadMain parameters={selected.parameters} name={selected.name} />
          <div className="params">
            <div>
              <h2>Envelope - {envelope}</h2>
              <ADSR envelope={selected.envelopes[envelope]} />
              <div className="env-buttons">
                {["volume", "pan", "pitch", "cutoff"].map((s, i) => (
                  <button
                    className={`${envelope === s && "selected"}`}
                    key={i}
                    onClick={() => setEnvelope(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h2>Filter</h2>
              <div className="dial-group ">
                {selected && (
                  <>
                    <Dial
                      lg
                      label="cutoff"
                      pan
                      parameter={selected.parameters.cutoff}
                    />
                    <Dial lg label="res" parameter={selected.parameters.res} />
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PadControls;
