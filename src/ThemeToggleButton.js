import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeToggleButton() {
  const { setDark } = useContext(ThemeContext);
  return (
    <button onClick={() => setDark((theme) => !theme)} className="themeToggleBtn">
      Toggle Theme
    </button>
  );
}
