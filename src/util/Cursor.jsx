import { useEffect, useContext } from "react";
import CursorCTX from "./CursorCTX";

const Cursor = () => {
  const [cursor, setCursor] = useContext(CursorCTX);

  useEffect(() => {
    document.addEventListener("mouseup", () => {
      setCursor((prev) => ({
        ...prev,
        mouseDown: false,
        callback: undefined,
      }));
    });
    document.addEventListener("mousemove", (e) => {
      setCursor((prev) => {
        if (prev.callback) {
          prev.callback(prev.y, e.screenY);
        }
        return { ...prev, x: e.screenX, y: e.screenY };
      });
    });
  }, []);
};

export default Cursor;
