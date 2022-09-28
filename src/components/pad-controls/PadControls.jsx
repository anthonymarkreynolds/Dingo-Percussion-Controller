import { useContext, useState } from "react";
import NightMode from "../../util/NightMode";
import PadMain from "./PadMain";
import ADSR from "./ADSR";

const PadControls = () => {
  const [nightMode] = useContext(NightMode);
  return (
    <div className={`pad-controls ${nightMode && "night"}`}>
      <h3 className="area-label">Pad Controls</h3>
      <PadMain />
      <ADSR />
    </div>
  );
};

export default PadControls;
