import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export default ThemeContext;

// Context Provider
export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light");
  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Context Hook

export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};
