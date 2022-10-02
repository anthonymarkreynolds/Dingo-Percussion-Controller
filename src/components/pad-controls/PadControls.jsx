import { useContext, useState } from "react";
import SelectCTX from "../../util/SelectCTX";
import NightMode from "../../util/NightMode";
import PadMain from "./PadMain";
import ADSR from "./ADSR";

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
          <h2>Envelope - {envelope}</h2>
          <ADSR envelope={selected.envelopes[envelope]} />
          <div className="env-buttons">
            <button onClick={() => setEnvelope("volume")}>Volume</button>
            <button onClick={() => setEnvelope("pan")}>Pan</button>
            <button onClick={() => setEnvelope("pitch")}>Pitch</button>
            <button onClick={() => setEnvelope("filter")}>Filter</button>
          </div>
        </>
      )}
    </div>
  );
};

export default PadControls;
