import { useContext } from "react";
import Context from "./Context";

const themes = ["light", "dark"];

export default function ThemeSwitcher() {
    const { theme, setTheme } = useContext(Context);

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
