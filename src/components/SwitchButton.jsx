import { useEffect } from "react";
import { useTheme } from "../context/themeContext";

const SwitchButton = () => {
  const { themeMode, setThemeMode } = useTheme();

  const handleTheme = () => {
    themeMode === "light" ? setThemeMode("dark") : setThemeMode("light")
  }

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");

    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <div>
      <input
        type="checkbox"
        checked={themeMode === "dark"}
        onChange={handleTheme}
      />
    </div>
  );
};

export default SwitchButton;
