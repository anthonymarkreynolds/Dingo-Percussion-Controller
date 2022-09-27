import { useEffect, useContext } from "react";
import AudioCTX from "../audio/AudioCTX";

const KeyPress = () => {
  let { pads } = useContext(AudioCTX);
  pads = Object.values(pads);
  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  }, []);

  const detectKeyDown = ({ key }) => {
    console.log("key pressed: ", key);
    if (key.match(/[123]/)) pads[Number(key) - 1 + 6].trigger();
    if (key.match(/[456]/)) pads[Number(key) - 1].trigger();
    if (key.match(/[789]/)) pads[Number(key) - 1 - 6].trigger();
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
