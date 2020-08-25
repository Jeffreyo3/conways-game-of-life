import React from "react";
import "./App.css";

import Display from "./components/gridDisplay/Display";
import Settings from "./components/Settings";

function App() {
  return (
    <div className="App">
      <Settings />
      <Display />
    </div>
  );
}

export default App;
