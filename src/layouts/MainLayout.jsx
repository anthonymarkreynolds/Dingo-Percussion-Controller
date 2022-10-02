import { useContext } from "react";
import NightMode from "../util/NightMode";
import DrumMachine from "./DrumMachine";

const MainLayout = () => {
  const { nightMode } = useContext(NightMode);
  return (
    <div className={`layout ${nightMode && "night"}`}>
      <h1>D3M</h1>
      <h2>Dingo Digital Drum Machine</h2>
      <DrumMachine />
    </div>
  );
};
export default MainLayout;
