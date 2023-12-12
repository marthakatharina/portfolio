import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const themes = ["light", "dark"];

export default function ThemeSwitcher() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className="theme-switcher--container">
            {themes.map((themeName) => (
                <button
                    className="theme-switcher"
                    disabled={themeName === theme}
                    onClick={() => setTheme(themeName)}
                    key={themeName}
                >
                    {themeName}
                </button>
            ))}
        </div>
    );
}
