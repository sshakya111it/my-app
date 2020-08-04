import React from 'react';
import './App.css';
import Forms from "./Form.js";
import Top from "./Top.js";
import PropertyDetails from "./PropertyDetails.js";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Top />
      </div>

      <Forms />
      <PropertyDetails />
    </div>
  );
}

export default App;
