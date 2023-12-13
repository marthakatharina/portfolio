import { useContext } from "react";
import Context from "./Context";

export default function Main({ children, onPointerMove }) {
    const { theme, setHideDot } = useContext(Context);

    const handlePointer = (e) => {
        onPointerMove({ x: e.clientX, y: e.clientY });
    };

    const handleAnyLinkHover = (e) => {
        if (
            e.target.tagName === "A" ||
            e.target.tagName === "LINK" ||
            e.target.tagName === "BUTTON"
        ) {
            setHideDot(true);
        }
    };

    const handleAnyLinkLeave = () => {
        setHideDot(false);
    };

    return (
        <main
            className={theme}
            onPointerMove={handlePointer}
            onMouseOver={handleAnyLinkHover}
            onMouseOut={handleAnyLinkLeave}
        >
            {children}
        </main>
    );
}
