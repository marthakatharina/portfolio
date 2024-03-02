import { useContext } from "react";
import Context from "./Context";

const themes = ["light", "dark", "surprise"];

export default function ThemeSwitcher() {
    const { theme, setTheme } = useContext(Context);

    return (
        <div className="theme-switcher--container">
            {themes.map((themeName) => (
                <button
                    className="theme-switcher"
                    id={themeName}
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
