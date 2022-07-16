import { useContext } from "react";
import "./App.css";
import { ThemeContext } from "./ThemeContext";
import ThemeToggleButton from "./ThemeToggleButton";

function App() {
  const { dark } = useContext(ThemeContext);
  return (
    <div className={`App ${dark ? "dark" : "light"}`}>
      <h1>Theme Changer</h1>
      <ThemeToggleButton />
    </div>
  );
}

export default App;
