import { useState } from "react";
import NightMode from "./util/NightMode";
import MainLayout from "./layouts/MainLayout";
import KeyPress from "./util/KeyPress";
import SelectCTX from "./util/SelectCTX";
import CursorCTX from "./util/CursorCTX";
import Cursor from "./util/Cursor";

function App() {
  const toggle = useState(false);
  const select = useState(null);
  const cursorState = useState({ x: 0, y: 0, mouseDown: false });
  return (
    <SelectCTX.Provider value={select}>
      <CursorCTX.Provider value={cursorState}>
        <NightMode.Provider value={toggle}>
          <Cursor />
          <KeyPress />
          <MainLayout />
        </NightMode.Provider>
      </CursorCTX.Provider>
    </SelectCTX.Provider>
  );
}

export default App;
