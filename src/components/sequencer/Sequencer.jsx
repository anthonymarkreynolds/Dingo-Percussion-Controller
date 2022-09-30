import { useContext } from "react";
import NightMode from "../../util/NightMode";

const Sequencer = () => {
  const { nightMode } = useContext(NightMode);
  return (
    <div className={`sequencer ${nightMode && "night"}`}>
      <h3 className="area-label">Step Sequencer</h3>
    </div>
  );
};

export default Sequencer;
