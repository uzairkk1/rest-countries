import { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function setAppTheme(newTheme) {
    document.body.classList.remove(`theme-${theme}`);
    setTheme(newTheme);
    document.body.classList.add(`theme-${newTheme}`);
  }

  return (
    <ThemeContext.Provider value={{ theme, setAppTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
