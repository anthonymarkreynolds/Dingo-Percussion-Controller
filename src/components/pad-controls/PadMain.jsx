import Dial from "../inputs/Dial";

const PadMain = ({ parameters: { volume, pan, pitch }, name }) => {
  return (
    <div className="pad-main">
      <h2>{name} </h2>
      <div className="dial-group">
        <>
          <Dial sm pan label="Pan" parameter={pan} />
          <Dial sm pan label="Pitch" stepUnit="semi" parameter={pitch} />
        </>
      </div>
    </div>
  );
};
export default PadMain;
