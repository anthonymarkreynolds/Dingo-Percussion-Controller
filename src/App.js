import DrumMachine from "./layouts/DrumMachine";
import KeyPress from "./util/KeyPress";

function App() {
  return (
    <>
      <KeyPress />
      <div className="layout">
        <h1>DPC</h1>
        <h2>Dingo Percussion Controller</h2>
        <DrumMachine />
      </div>
    </>
  );
}

export default App;
