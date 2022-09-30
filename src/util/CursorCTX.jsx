import { createContext, useState, useEffect } from "react";

const CursorCTX = createContext({ callback: () => console.log("no callback") });
export const CursorProvider = ({ children }) => {
  const [cursor, setCursor] = useState({ x: 0, y: 0, mouseDown: false });

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
        if (prev.callback && prev.mouseDown) {
          prev.callback(prev.y, e.screenY);
        }
        return { ...prev, x: e.screenX, y: e.screenY };
      });
    });
  }, []);
  return (
    <CursorCTX.Provider value={{ cursor, setCursor }}>
      {children}
    </CursorCTX.Provider>
  );
};
export default CursorCTX;
