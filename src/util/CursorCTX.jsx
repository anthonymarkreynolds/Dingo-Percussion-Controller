import { createContext } from "react";

const CursorCTX = createContext({ callback: () => console.log("no callback") });
export default CursorCTX;
