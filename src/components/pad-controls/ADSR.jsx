import { useState } from "react";
import Dial from "../inputs/Dial";

const ADSR = ({ envelope }) => {
  // state for envelope parameters
  const [{ attack, decay, sustain, release, amount }, setEnvParams] = useState(
    envelope || {
      attack: 0.25,
      decay: 0.25,
      sustain: 0.5,
      release: 0.5,
      amount: 1,
    }
  );
  return (
    <>
      <div className="dial-group">
        <Dial initValue={attack} md label="Attack" />
        <Dial initValue={decay} md label="Decay" />
        <Dial initValue={sustain} md label="Sustain" />
        <Dial initValue={release} md label="Release" />
      </div>
      <div className="dial-group">
        <Dial pan initValue={amount} md label="Amount" />
        <Dial pan initValue={amount} md label="ADSR Length" />
      </div>
    </>
  );
};

export default ADSR;
