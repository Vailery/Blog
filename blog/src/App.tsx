import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { PostList } from "./components/PostList/PostList";
import { RootRouter } from "./navigation/RootRouter";

function App() {
  return (
    <div className="App">
      <RootRouter />
    </div>
  );
}

export default App;
