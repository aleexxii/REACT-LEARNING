import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
  themeMode: null,
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    localStorage.setItem("theme", themeMode);
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, darkTheme, lightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
const useTheme = () => useContext(ThemeContext);

export default useTheme;
