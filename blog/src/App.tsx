import { createContext, useState } from "react";
import { RootRouter } from "./navigation/RootRouter";
import "./App.css";

export const darkTheme = {
  text: "#FFFFFF",
  grayText: "#FFFFFF",
  timeText: "#FFFFFF",
  colorOfCard: "#016EFC",
  backgroundColor: "#0060DC",
  filter: "brightness(0) invert(1)",
};

export const lightTheme = {
  text: "#4F4F4F",
  grayText: "#979797",
  timeText: "#016EFC",
  colorOfCard: "#FFFFFF",
  backgroundColor: "#F8FAFE",
  filter: "none",
};

export const Context = createContext({
  isDark: false,
  changeIsDark: () => {},
  theme: lightTheme,
});

function App() {
  const [isDark, setIsDark] = useState(false);

  const changeIsDark = () => {
    setIsDark((isDark) => !isDark);
  };

  return (
    <Context.Provider
      value={{ isDark, changeIsDark, theme: isDark ? darkTheme : lightTheme }}
    >
      <div
        className="App"
        style={{
          background: isDark
            ? darkTheme.backgroundColor
            : lightTheme.backgroundColor,
        }}
      >
        <RootRouter />
      </div>
    </Context.Provider>
  );
}

export default App;
