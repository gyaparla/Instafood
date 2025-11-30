import useTheme from "../hooks/useTheme";

const SwitchButton = () => {
  const [themeMode, setThemeMode] = useTheme();

  const handleTheme = () => {
    themeMode === "light" ? setThemeMode("dark") : setThemeMode("light");
  };

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
