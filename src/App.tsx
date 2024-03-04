import React from "react";
import logo from "./logo.svg";
import List from "./components/list";
import "./App.css";
import { itemObj } from "./types";

function App() {
  const fauxItems: itemObj[] = [
    { name: "php", done: false },
    {
      name: "practice react",
      additionalInfo: "It's going slowly today but it will be alright",
      done: false,
      created: new Date(),
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <List initItems={fauxItems} listName="Vaughn's list" />
      </header>
    </div>
  );
}

export default App;
