import { useState, useContext } from "react";
import CursorCTX from "../../util/CursorCTX";

const Dial = ({ label, initValue, pan, sm, md, lg }) => {
  const [, setCursor] = useContext(CursorCTX);
  const [dialValue, setDialValue] = useState(initValue || 0);
  const [min, max] = pan ? [-0.5, 0.5] : [0, 1];

  const updateDial = (prevY, currY) => {
    console.log("updateDial has run");
    setDialValue((prev) => {
      const next = prev + (prevY - currY) * 0.001;
      if (next > max) {
        return max;
      } else if (next < min) {
        return min;
      } else {
        return next;
      }
    });
  };
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
          onMouseDownCapture={() => {
            setCursor((prev) => {
              // console.log("setCursor fired");
              const newState = {
                ...prev,
                mouseDown: true,
                callback: updateDial,
              };
              // console.log("newState: ", newState);
              return newState;
            });
          }}
        />
        <circle
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={1 - dialValue}
          className="dial-ring blur"
          cx="50"
          cy="50"
          r="40"
        />
        <circle
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={1 - dialValue}
          className={`dial-ring`}
          cx="50"
          cy="50"
          r="40"
        />
      </svg>
      <span className="dial-value noselect">
        {(pan ? dialValue * 2 : dialValue).toFixed(3)}
      </span>
      {label && <h6 className="dial-label noselect">{label}</h6>}
    </div>
  );
};

export default Dial;