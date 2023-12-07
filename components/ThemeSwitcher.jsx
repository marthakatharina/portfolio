import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const themes = ["light", "dark", "surprise"];

export default function ThemeSwitcher() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <>
            {themes.map((themeName) => (
                <button
                    disabled={themeName === theme}
                    onClick={() => setTheme(themeName)}
                >
                    {themeName}
                </button>
            ))}
        </>
    );
}
