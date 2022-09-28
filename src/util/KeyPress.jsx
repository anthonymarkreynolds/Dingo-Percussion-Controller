import { useEffect, useContext } from "react";
import AudioCTX from "../audio/AudioCTX";
import SelectCTX from "./SelectCTX";

const KeyPress = () => {
  let { pads } = useContext(AudioCTX);
  let [, setSelected] = useContext(SelectCTX);
  pads = Object.values(pads);
  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  }, []);

  const detectKeyDown = ({ key }) => {
    console.log("key pressed: ", key);
    if (key.match(/[123]/)) {
      pads[Number(key) - 1 + 6].trigger();
      setSelected(pads[Number(key) - 1 + 6]);
    }
    if (key.match(/[456]/)) {
      pads[Number(key) - 1].trigger();
      setSelected(pads[Number(key) - 1]);
    }
    if (key.match(/[789]/)) {
      pads[Number(key) - 1 - 6].trigger();
      setSelected(pads[Number(key) - 1 - 6]);
    }
    // switch (key) {
    //   case "7":
    //     pads[1].trigger();
    //     break;
    //   case "8":
    //     pads[0].trigger();
    //     break;
    //   default:
    //     break;
    // }
  };
};

export default KeyPress;
