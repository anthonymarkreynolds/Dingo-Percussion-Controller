import { useState, useContext, useEffect } from "react";
import CursorCTX from "../../util/CursorCTX";

const Dial = ({
  parameter,

  stepUnit,
  // default to identity function
  label,

  // Panoramic dial
  pan,

  // dial sizes
  sm,
  md,
  lg,
}) => {
  const { offset, step, decimal, toggleStep, setParam } = parameter;

  const { setCursor } = useContext(CursorCTX);

  const [dialValue, setDialValue] = useState(decimal || 0);

  useEffect(() => {
    setDialValue(decimal);
    console.log("decimal changed in dial", decimal);
  }, [decimal]);

  //min max is used to prevent the dial from overturning
  const [min, max] = pan ? [-1, 1] : [0, 1];

  const updateDial = (prevY, currY) => {
    console.log("updateDial has run", dialValue);

    // if update dial was trigged without turning the dial
    // update dialValue
    setDialValue((prev) => {
      // compare previous mouseY position
      let next = prev + (prevY - currY) * (pan ? 0.002 : 0.001);
      //clamp max
      if (next > max) {
        next = max;
      }
      // clamp min
      if (next < min) {
        next = min;
      }
      //set the param value
      setParam(next);
      return next;
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
          // when dial is clicked down send the updateDial function to the cursorCTX so it can be trigged if the cursor is dragged outside the dial
          onMouseDownCapture={() => {
            setCursor((prev) => ({
              ...prev,
              mouseDown: true,
              callback: updateDial,
            }));
          }}
        />
        <circle
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={1 - (pan ? dialValue / 2 : dialValue)}
          className="dial-ring blur"
          cx="50"
          cy="50"
          r="40"
        />
        <circle
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={1 - (pan ? dialValue / 2 : dialValue)}
          className={`dial-ring`}
          cx="50"
          cy="50"
          r="40"
        />
      </svg>
      <span className="dial-value noselect">{offset?.toFixed(2)}</span>
      {label && <h6 className="dial-label noselect">{label}</h6>}

      {stepUnit && (
        <button
          onClick={() => {
            toggleStep();
            console.log("test from step button");
          }}
        >
          {step ? stepUnit : "free"}
        </button>
      )}
    </div>
  );
};

export default Dial;
