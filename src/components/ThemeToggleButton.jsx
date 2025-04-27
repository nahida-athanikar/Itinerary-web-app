import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="text-2xl m-2 fixed top-4 right-4 z-50"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
