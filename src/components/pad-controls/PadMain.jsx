import { useContext } from "react";
import AudioCTX from "../../audio/AudioCTX";

import Dial from "../inputs/Dial";
const PadMain = () => {
  const actx = useContext(AudioCTX);
  return (
    <div className="pad-main">
      <h2 style={{ alignSelf: "center" }}> {"<Pad name>"} </h2>
      <div className="dial-group">
        <Dial sm label="Volume" />
        <Dial sm pan label="Pan" />
        <Dial
          valueModifier={(value) => Math.trunc(value * 12)}
          sm
          pan
          label="Pitch"
          parameterCallback={actx.pads["Hi Tom"].setPitch}
        />
        <Dial sm initValue={0.5} md label="Duration" />
      </div>
    </div>
  );
};
export default PadMain;
