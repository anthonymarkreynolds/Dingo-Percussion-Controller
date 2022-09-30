import MainLayout from "./layouts/MainLayout";
// import KeyPress from "./util/KeyPress";

import { SelectProvider } from "./util/SelectCTX";
import { CursorProvider } from "./util/CursorCTX";
import { NightModeProvider } from "./util/NightMode";
import { AudioCTXProvider } from "./audio/AudioCTX";

function App() {
  return (
    <CursorProvider>
      <SelectProvider>
        <AudioCTXProvider>
          <NightModeProvider>
            <MainLayout />
          </NightModeProvider>
        </AudioCTXProvider>
      </SelectProvider>
    </CursorProvider>
  );
}

export default App;
