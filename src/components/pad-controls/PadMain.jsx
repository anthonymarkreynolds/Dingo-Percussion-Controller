import Dial from "../inputs/Dial";

const PadMain = ({ parameters: { volume, pan, pitch }, name }) => {
  return (
    <div className="pad-main">
      <h2 className="pad-name">{name} </h2>
      <div>
        <h3>offsets</h3>
        <div className="dial-group">
          <>
            <Dial sm pan label="Pan" parameter={pan} />
            <Dial sm pan label="Pitch" stepUnit="semi" parameter={pitch} />
          </>
        </div>
      </div>
    </div>
  );
};
export default PadMain;
