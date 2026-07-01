import { useState } from "react";
import Home from "./Home.jsx";
import ThemeSwitcher from "./ThemeSwitcher.jsx"
import { ThemeContext } from "./ThemeContext.jsx";
import "./styles.css";

export default function App() {
    const [theme, setTheme] = useState("barbie");

    // Toggle theme function
    function toggleTheme() {
        setTheme(function (prevTheme) {
        return prevTheme === "barbie" ? "oppenheimer" : "barbie";
        });
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme}}>
            <ThemeSwitcher />
            <Home />
        </ThemeContext.Provider>
    );
}
