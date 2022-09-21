import { useState } from "react";

export default function ToggleSwitch() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="toggle-switch">
      <label className="switch">
        <input
          type="checkbox"
          checked={toggle}
          onChange={() => setToggle(!toggle)}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
}
