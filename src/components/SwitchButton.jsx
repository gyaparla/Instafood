import useTheme from "../hooks/useTheme";
import { BsSun, BsMoon } from "react-icons/bs";

const SwitchButton = () => {
  const [themeMode, setThemeMode] = useTheme();

  const handleThemeToggle = () => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={handleThemeToggle}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-center"
      aria-label={`Switch to ${themeMode === "light" ? "dark" : "light"} mode`}
      data-testid="theme-switch"
      type="button"
    >
      {themeMode === "light" ? (
        <BsSun className="w-5 h-5 text-yellow-500" />
      ) : (
        <BsMoon className="w-5 h-5 text-slate-400" />
      )}
    </button>
  );
};

export default SwitchButton;
