import { useEffect, useContext } from "react";
import CursorCTX from "./CursorCTX";

const Cursor = () => {
  const [cursor, updateCursor] = useContext(CursorCTX);
  useEffect(() => {
    document.addEventListener(
      "mouseup",
      updateCursor({ ...cursor, mouseDown: false })
    );
    document.addEventListener(
      "mousedown",
      updateCursor({ ...cursor, mouseDown: true })
    );
    document.addEventListener("mouseover", (e) =>
      updateCursor({ ...cursor, x: e.screenX, y: e.screenY })
    );
  }, []);
};

export default Cursor;
