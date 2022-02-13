import React, { createContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { RootRouter } from "./navigation/RootRouter";

export const Context = createContext({
  isDark: false,
  changeIsDark: () => {},
  theme: {},
});

// добавить эелементы текста
const darkTheme = {
  text: "#FFFFFF",
  colorOfCard: "#016EFC",
  backgroundColor: "#0060DC",
};
const lightTheme = {
  text: "#4F4F4F",
  colorOfCard: "#FFFFFF",
  backgroundColor: "#FFFFFF",
};

function App() {
  const [isDark, setIsDark] = useState(false);

  const changeIsDark = () => {
    setIsDark((isDark) => !isDark);
  };

  return (
    <Context.Provider
      value={{ isDark, changeIsDark, theme: isDark ? darkTheme : lightTheme }}
    >
      <div className="App">
        <RootRouter />
      </div>
    </Context.Provider>
  );
}

export default App;
