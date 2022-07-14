import React from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */
//{ nrows=5, ncols=5, chanceLightStartsOn=false }
function App() {
  return (
      <div className="App">
        <Board  />
      </div>
  );
}

export default App;
