import { useContext } from "react";
import NightMode from "../util/NightMode";
import DrumMachine from "./DrumMachine";

const MainLayout = () => {
  const [nightmode] = useContext(NightMode);
  return (
    <div className={`layout ${nightmode && "night"}`}>
      <h1>DPC</h1>
      <h2>Dingo Percussion Controller</h2>
      <DrumMachine />
    </div>
  );
};
export default MainLayout;
