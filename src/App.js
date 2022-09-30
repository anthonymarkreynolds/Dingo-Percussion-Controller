import { useState } from "react";
import NightMode from "./util/NightMode";
import MainLayout from "./layouts/MainLayout";
// import KeyPress from "./util/KeyPress";
import CursorCTX from "./util/CursorCTX";
import Cursor from "./util/Cursor";
import { ParameterProvider } from "./audio/ParameterCTX";

function App() {
  const toggle = useState(false);
  const cursorState = useState({ x: 0, y: 0, mouseDown: false });
  return (
    <ParameterProvider>
      <CursorCTX.Provider value={cursorState}>
        <NightMode.Provider value={toggle}>
          <Cursor />
          <MainLayout />
        </NightMode.Provider>
      </CursorCTX.Provider>
    </ParameterProvider>
  );
}

export default App;
