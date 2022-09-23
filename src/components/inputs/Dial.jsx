import { useState, useContext } from "react";
import CursorCTX from "../../util/CursorCTX";

const Dial = ({ label, initValue, pan, sm, md, lg }) => {
  const [cursor, setCursor] = useContext(CursorCTX);
  const [dialValue, setDialValue] = useState(initValue);
  return (
    <div className="dial-container">
      <svg
        viewBox="0 0 100 100"
        className={`${pan && "pan "} ${
          (sm && "sm") || (md && "md") || (lg && "lg")
        }`}
      >
        <circle
          className="dial"
          cx="50"
          cy="50"
          r="40"
          //TODO: create call back to update dial value
          // onMouseDownCapture={() => setCursor(prev => return  ({...prev, mouseDown: true}))}
        />
        <circle
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={1 - initValue || 0.5}
          className="dial-ring blur"
          cx="50"
          cy="50"
          r="40"
        />
        <circle
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={1 - initValue || 0.5}
          className={`dial-ring`}
          cx="50"
          cy="50"
          r="40"
        />
      </svg>
      {label && <h6 className="dial-label noselect">{label}</h6>}
    </div>
  );
};

export default Dial;
