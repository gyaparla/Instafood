// Custom Context Hook

import { useEffect, useState } from "react";

const useTheme = () => {
  const [themeMode, setThemeMode] = useState(() => {
    return localStorage.getItem("theme") ?? "light";
  });

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
    localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  return [themeMode, setThemeMode];
};

export default useTheme;
