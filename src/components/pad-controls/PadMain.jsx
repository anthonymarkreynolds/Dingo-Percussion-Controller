import { useContext } from "react";
import AudioCTX from "../../audio/AudioCTX";

import Dial from "../inputs/Dial";
const PadMain = () => {
  const actx = useContext(AudioCTX);
  return (
    <div className="pad-main">
      <h2 style={{ alignSelf: "center" }}> {"<Pad name>"} </h2>
      <div className="dial-group">
        <Dial
          sm
          label="Volume"
          initValue={0.25}
          parameterCallback={actx.pads["Hi Tom"].setVol}
        />
        <Dial
          sm
          pan
          label="Pan"
          parameterCallback={actx.pads["Hi Tom"].setPan}
        />
        <Dial
          valueModifier={(value, step) =>
            step ? Math.trunc(value * 12) : value * 12
          }
          sm
          pan
          label="Pitch"
          step="semi"
          parameterCallback={actx.pads["Hi Tom"].setPitch}
        />
        <Dial sm initValue={0.5} md label="Duration" />
      </div>
    </div>
  );
};
export default PadMain;
