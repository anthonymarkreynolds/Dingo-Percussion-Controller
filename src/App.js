import { useState, useEffect } from "react";
import NightMode from "./util/NightMode";
import MainLayout from "./layouts/MainLayout";
import KeyPress from "./util/KeyPress";

function App() {
  const toggle = useState(false);
  return (
    <NightMode.Provider value={toggle}>
      <KeyPress />
      <MainLayout />
    </NightMode.Provider>
  );
}

export default App;
