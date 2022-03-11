import { createContext, ReactNode, useEffect, useState } from "react";

interface IProps {
  children: ReactNode;
}

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

export const ThemeContext = createContext({
  isDark: false,
  changeIsDark: () => {},
  theme: lightTheme,
});

export const ThemeProdiver = ({ children }: IProps) => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("isDark") === "true"
  );

  const changeIsDark = () => {
    setIsDark((isDark) => !isDark);
  };

  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);

  return (
    <ThemeContext.Provider
      value={{ isDark, changeIsDark, theme: isDark ? darkTheme : lightTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
