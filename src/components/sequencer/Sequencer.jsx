import { useContext } from "react";
import NightMode from "../../util/NightMode";

const Sequencer = () => {
  const [nightMode] = useContext(NightMode);
  return (
    <div className={`sequencer ${nightMode && "night"}`}>
      <h3>Step Sequencer</h3>
    </div>
  );
};

export default Sequencer;
