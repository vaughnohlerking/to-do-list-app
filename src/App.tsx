import React from "react";
import logo from "./logo.svg";
import List from "./components/list";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <List />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lernen Sie React
        </a>
      </header>
    </div>
  );
}

export default App;
