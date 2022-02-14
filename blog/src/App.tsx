import React, { createContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { RootRouter } from "./navigation/RootRouter";

export const Context = createContext({
  isDark: false,
  changeIsDark: () => {},
  theme: {},
});

export const darkTheme = {
  text: "#FFFFFF",
  grayText: "#FFFFFF",
  timeText: "#FFFFFF",
  colorOfCard: "#016EFC",
  backgroundColor: "#0060DC",
};

export const lightTheme = {
  text: "#4F4F4F",
  grayText: "#979797",
  timeText: "#016EFC",
  colorOfCard: "#FFFFFF",
  backgroundColor: "#E5E5E5",
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
