import { useContext } from "react";
import Context from "./Context";

export default function Main({ children, onPointerMove }) {
    const { theme, setHideDot } = useContext(Context);

    const handlePointer = (e) => {
        onPointerMove({ x: e.clientX, y: e.clientY });
    };

    const hasAncestorMatching = (el, testFn) => {
        let node = el;
        while (node && node.nodeType === 1) {
            if (testFn(node)) return true;
            node = node.parentElement;
        }
        return false;
    };

    const handleAnyLinkHover = (e) => {
        const target = e.target;

        const interactiveFound = hasAncestorMatching(target, (n) => {
            const tag = n.tagName;
            if (tag === "A" || tag === "BUTTON" || tag === "LINK") return true;
            if (tag === "IMG") return true;
            try {
                const cs = window.getComputedStyle(n);
                if (cs && cs.cursor && cs.cursor.includes("zoom-in"))
                    return true;
            } catch (err) {
                /* ignore - getComputedStyle may throw in some environments */
            }
            return false;
        });

        if (interactiveFound) setHideDot(true);
    };

    const handleAnyLinkLeave = (e) => {
        // When leaving, check if pointer is still inside an interactive ancestor; if not, show dot.
        // Use relatedTarget to see where the pointer went.
        const to = e.relatedTarget;
        if (
            to &&
            hasAncestorMatching(to, (n) => {
                const tag = n.tagName;
                if (tag === "A" || tag === "BUTTON" || tag === "LINK")
                    return true;
                if (tag === "IMG") return true;
                try {
                    const cs = window.getComputedStyle(n);
                    if (cs && cs.cursor && cs.cursor.includes("zoom-in"))
                        return true;
                } catch (err) {
                    /* ignore */
                }
                return false;
            })
        ) {
            // still inside interactive element
            return;
        }

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
