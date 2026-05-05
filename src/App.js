import React from "react";
import { Gallery } from "./component/Gallery";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="header-box">
        <h1> 👥 Meet the NovaByte Team</h1>
      </div>

      <Gallery />
    </div>
  );
}

export default App;