import { useContext } from "react";
import NightMode from "../../util/NightMode";

export default function ThemeStyleSwitch() {
  const [themeSwitch, setThemeSwitch] = useContext(NightMode);

  const handleSwitch = () => {
    setThemeSwitch(!themeSwitch);
  };

  return (
    <div className="mid">
      <label className="rocker rocker-small noselect">
        <input type="checkbox" value={themeSwitch} onChange={handleSwitch} />
        <span className="switch-left">Nig</span>
        <span className="switch-right">Day</span>
      </label>
    </div>
  );
}
