import { useState } from "react";

const ToggleSwitch = ({ callback }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="toggle-switch">
      <label className="switch">
        <input
          type="checkbox"
          checked={toggle}
          onChange={() => {
            setToggle(!toggle);
            callback && callback(toggle);
          }}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
