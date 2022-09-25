import { useContext } from "react";
import NightMode from "../../util/NightMode";
import PadMain from "./PadMain";
import ADSR from "./ADSR";
import SelectCTX from "../../util/SelectCTX";

const PadControls = () => {
  const [nightMode] = useContext(NightMode);
  const [selected] = useContext(SelectCTX);
  return (
    <div className={`pad-controls ${nightMode && "night"}`}>
      <h3 className="area-label">Pad Controls</h3>
      <PadMain selected={selected} />
      <ADSR />
    </div>
  );
};

export default PadControls;
