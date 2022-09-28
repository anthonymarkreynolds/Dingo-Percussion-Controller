import { useContext, useState, useEffect } from "react";
import SelectCTX from "../../util/SelectCTX";
import Dial from "../inputs/Dial";

const PadMain = () => {
  const [selected] = useContext(SelectCTX);
  const [current, setCurrent] = useState({ vol: selected?.baseVol });
  useEffect(() => {
    setCurrent({ vol: selected?.baseVol });
  }, [selected?.name]);
  return (
    <div className="pad-main">
      <h2 style={{ alignSelf: "center" }}>{selected?.name || "<Pad name>"} </h2>
      <div className="dial-group">
        <Dial
          sm
          label="Volume"
          initValue={current?.vol}
          parameterCallback={selected?.setVol}
        />
        <Dial
          sm
          pan
          initValue={selected?.pan.pan.value}
          label="Pan"
          parameterCallback={selected?.setPan}
        />
        <Dial
          valueModifier={(value, step) =>
            step ? Math.trunc(value * 12) : value * 12
          }
          sm
          pan
          label="Pitch"
          step="semi"
          parameterCallback={selected?.setPitch}
          initValue={0}
        />
        <Dial sm initValue={0.5} md label="Duration" />
      </div>
    </div>
  );
};
export default PadMain;
