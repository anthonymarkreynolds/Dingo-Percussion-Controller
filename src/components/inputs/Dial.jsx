import { useState, useContext, useEffect } from "react";
import CursorCTX from "../../util/CursorCTX";

const Dial = ({
  parameterCallback,

  // default to identity function
  valueModifier = (x) => x,
  label,
  initValue = 0,

  // Panoramic dial
  pan,

  // dial sizes
  sm,
  md,
  lg,

  // value stepping / snapping
  step,
}) => {
  const [cursor, setCursor] = useContext(CursorCTX);

  // toggle snapping behaviour
  const [_step, setStep] = useState(!!step);

  // Internal value used to dial position
  // This value is used to calculate the dashstroke-offset of the dial ring
  const [dialValue, setDialValue] = useState(initValue || 0);

  // This value is calculated using the parameterCallback which accepts the dialValue as an argument and updates the associated audio node paramaeter.
  // This value is also displayed under the dial.
  const [parameterValue, setParameterValue] = useState(initValue || 0);

  // When the dial turns some valueModifier's may update the parameterValue in steps, useEffect I used to run the parameterCallback only if the dial has turned enough to update the parameterValue.
  useEffect(() => {
    // Runs only when a parameterCallback is passed
    if (parameterCallback) {
      parameterCallback(parameterValue);
    }
    // when parameterValue changes, run parameterCallback to update associated audio node value.
  }, [parameterValue]);

  //min max is used to prevent the dial from overturning
  const [min, max] = pan ? [-0.5, 0.5] : [0, 1];

  const updateDial = (prevY, currY, skip) => {
    console.log("updateDial has run");

    // if update dial was trigged without turning the dial
    if (skip) {
      setParameterValue(valueModifier(pan ? dialValue * 2 : dialValue, !_step));
    } else {
      // update dialValue
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
