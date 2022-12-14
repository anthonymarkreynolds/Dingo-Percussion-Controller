import { useContext } from "react";
import NightMode from "../../util/NightMode";

export default function ThemeStyleSwitch() {
  const { nightMode, setNightMode } = useContext(NightMode);

  return (
    <div className="mid">
      <label className="rocker rocker-small noselect">
        <input
          type="checkbox"
          value={nightMode}
          onChange={() => setNightMode(!nightMode)}
        />
        <span className="switch-left">☾</span>
        <span className="switch-right">☼</span>
      </label>
    </div>
  );
}
