import { useContext } from "react";
import NightMode from "../../util/NightMode";
import Step from "../inputs/Step";

const Sequencer = () => {
  const { nightMode } = useContext(NightMode);
  return (
    <div className={`sequencer ${nightMode && "night"}`}>
      <h3 className="area-label">Step Sequencer</h3>
      <div className="steps">
        {Array.from({ length: 9 }, (_, i) =>
          Array.from({ length: 16 }, (_, j) => {
            const offset = j % 8 > 3;
            return <Step {...{ offset }} key={j * (i + 1)} />;
          })
        )}
      </div>
    </div>
  );
};

export default Sequencer;
