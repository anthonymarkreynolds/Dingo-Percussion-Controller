import { useState } from "react";
import Dial from "../inputs/Dial";
import ToggleSwitch from "../inputs/ToggleSwitch";

const ADSR = ({ envelope }) => {
  // state for envelope parameters
  const [{ attack, decay, sustain, release, amount }, setEnvParams] = useState(
    envelope || {
      attack: 0.25,
      decay: 0.25,
      sustain: 0.5,
      release: 0.5,
      amount: 0.25,
    }
  );
  return (
    <>
      <div className="dial-group">
        <Dial initValue={attack} sm label="Attack" />
        <Dial initValue={decay} sm label="Decay" />
        <Dial initValue={sustain} sm label="Sustain" />
        <Dial initValue={release} sm label="Release" />
      </div>
      <div className="dial-group">
        <Dial initValue={amount} md label="ADSR Length" />
        <Dial pan initValue={amount} md label="Amount" />
        <ToggleSwitch />
      </div>
    </>
  );
};

export default ADSR;
