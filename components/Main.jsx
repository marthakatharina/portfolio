import { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function Main({ children, onPointerMove }) {
    const { theme } = useContext(ThemeContext);
    const handlePointer = (e) => {
        onPointerMove({ x: e.clientX, y: e.clientY });
    };

    return (
        <main className={theme} onPointerMove={handlePointer}>
            {children}
        </main>
    );
}
