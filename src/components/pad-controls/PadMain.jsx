import { useContext, useState, useEffect } from "react";
import ParameterCTX from "../../audio/ParameterCTX";
import Dial from "../inputs/Dial";

const PadMain = () => {
  const { parameters, setParameters } = useContext(ParameterCTX);
  const selected = parameters["hi tom"];
  console.log(selected);
  return (
    <div className="pad-main">
      <h2 style={{ alignSelf: "center" }}>{selected?.name || "<Pad name>"} </h2>
      <div className="dial-group">
        <Dial
          sm
          pan
          label="Pitch"
          stepUnit="semi"
          step={selected?.pitch.step}
          toggleStep={selected?.pitch.toggleStep}
          parameterCallback={selected?.pitch.setParam}
          offset={selected?.pitch.offset}
          parameter={selected?.pitch}
        />
      </div>
    </div>
  );
};
export default PadMain;
