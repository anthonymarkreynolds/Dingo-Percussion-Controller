import { useContext, useEffect } from "react";
import SelectCTX from "../../util/SelectCTX";
import AudioCTX from "../../audio/AudioCTX";
import Dial from "../inputs/Dial";

const PadMain = () => {
  const { selected } = useContext(SelectCTX);
  const { setParam } = useContext(AudioCTX);
  console.log(selected);
  return (
    <div className="pad-main">
      <h2 style={{ alignSelf: "center" }}>{selected?.name || "<Pad name>"} </h2>
      <div className="dial-group">
        {selected && (
          <>
            <Dial sm pan label="Pan" parameter={selected.parameters.pan} />
            <Dial sm label="Vol" parameter={selected.parameters.volume} />
            <Dial
              sm
              pan
              label="Pitch"
              stepUnit="semi"
              parameter={selected.parameters.pitch}
            />
          </>
        )}
      </div>
    </div>
  );
};
export default PadMain;
