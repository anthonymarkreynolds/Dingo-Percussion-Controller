import { useState, useContext, useEffect } from "react";
import CursorCTX from "../../util/CursorCTX";

const Dial = ({
  //default to nullary function
  parameterCallback,
  // default to identity function
  valueModifier = (x) => x,
  label,
  initValue = 0,
  pan,
  sm,
  md,
  lg,
  step,
}) => {
  const [, setCursor] = useContext(CursorCTX);

  // toggle snapping behaviour
  const [_step, setStep] = useState(!!step);

  //internal value used to dial position
  const [dialValue, setDialValue] = useState(initValue);

  //calculated value for use with paramaeter
  const [parameterValue, setParameterValue] = useState(initValue);

  // When the dial turns some valueModifier's may update the parameterValue in steps, useEffect I used to run the parameterCallback only if the dial has turned enough to update the parameterValue.
  useEffect(() => {
    if (parameterCallback) parameterCallback(parameterValue);
  }, [parameterValue]);

  //min max is used to prevent the dial from overturning
  const [min, max] = pan ? [-0.5, 0.5] : [0, 1];

  const updateDial = (prevY, currY, skip) => {
    console.log("updateDial has run");
    if (skip) {
      //this is  weird
      setParameterValue(valueModifier(pan ? dialValue * 2 : dialValue, !_step));
    } else {
      setDialValue((prev) => {
        // compare previous mouseY position
        let next = prev + (prevY - currY) * 0.001;
        //clamp max
        if (next > max) {
          next = max;
        }
        // clamp min
        if (next < min) {
          next = min;
        }
        //set the param value
        setParameterValue(valueModifier(pan ? next * 2 : next, _step));
        return next;
      });
    }
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
      <span className="dial-value noselect">{parameterValue.toFixed(2)}</span>
      {label && <h6 className="dial-label noselect">{label}</h6>}
      {step && (
        <button
          onClick={() => {
            updateDial(0, 0, true);
            setStep(!_step);
          }}
        >
          {_step ? step : "free"}
        </button>
      )}
    </div>
  );
};

export default Dial;
