import Dial from "../inputs/Dial";
import ToggleSwitch from "../inputs/ToggleSwitch";

const ADSR = ({
  envelope: { attack, decay, sustain, release, amount, length },
}) => {
  return (
    <>
      <div className="dial-group">
        <Dial parameter={attack} sm label="Attack" />
        <Dial parameter={decay} sm label="Decay" />
        <Dial parameter={length} sm label="Length" />
        <Dial pan parameter={amount} sm label="Amount" />
      </div>
    </>
  );
};

export default ADSR;
