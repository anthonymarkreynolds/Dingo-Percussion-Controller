import Dial from "../inputs/Dial";
const PadMain = () => {
  return (
    <div className="pad-main">
      <h2 style={{ alignSelf: "center" }}> {"<Pad name>"} </h2>
      <div className="dial-group">
        <Dial sm label="Volume" />
        <Dial sm pan label="Pan" />
        <Dial sm pan label="Pitch" />
        <Dial sm initValue={0.5} md label="Note Length" />
      </div>
    </div>
  );
};
export default PadMain;
