import Dial from "../inputs/Dial";

const PadMain = ({ selected }) => {
  const dials = [
    <Dial
      sm
      label="Volume"
      initValue={0.25}
      parameterCallback={selected?.setVol}
    />,

    <Dial
      sm
      pan
      initValue={selected?.pan.pan.value}
      label="Pan"
      parameterCallback={selected?.setPan}
    />,

    <Dial
      valueModifier={(value, step) =>
        step ? Math.trunc(value * 12) : value * 12
      }
      sm
      pan
      label="Pitch"
      step="semi"
      parameterCallback={selected?.setPitch}
    />,
    <Dial sm initValue={0.5} md label="Duration" />,
  ];
  return (
    <div className="pad-main">
      <h2 style={{ alignSelf: "center" }}>{selected?.name || "<Pad name>"} </h2>
      <div className="dial-group">{dials}</div>
    </div>
  );
};
export default PadMain;
