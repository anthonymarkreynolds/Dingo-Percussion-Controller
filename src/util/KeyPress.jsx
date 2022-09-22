import { useEffect, useContext } from "react";
import AudioCTX from "../audio/AudioCTX";

const KeyPress = () => {
  let { pads } = useContext(AudioCTX);
  pads = Object.values(pads).reverse();
  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  }, []);

  const detectKeyDown = ({ key }) => {
    console.log("key pressed: ", key);
    switch (key) {
      case "7":
        pads[1].trigger();
        break;
      case "8":
        pads[0].trigger();
        break;
      default:
        break;
    }
  };
};

export default KeyPress;
