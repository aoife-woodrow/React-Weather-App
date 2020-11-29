import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <Weather defaultCity="Londonderry"/>
          <footer>
            <a href="https://github.com/aoife-woodrow/React-Weather-App" target="_blank" rel="noreferrer">Open source code</a> by Aoife Woodrow
          </footer>
      </div>
    </div>
  )
}