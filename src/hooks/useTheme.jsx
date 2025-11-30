// Custom Context Hook

import { useEffect, useState } from "react";

const prevTheme = localStorage.getItem("theme");
const useTheme = () => {
  const [themeMode, setThemeMode] = useState(prevTheme ?? "light");

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");

    document.querySelector("html").classList.add(themeMode);
    localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  // return {
  //   themeMode,
  //   setThemeMode,
  // };

  return [themeMode, setThemeMode];
};

export default useTheme;
