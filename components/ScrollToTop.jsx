import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // If there's a hash in the URL (e.g. /#projects), try to scroll to that element.
        const { hash } = window.location;
        if (hash) {
            const id = hash.replace("#", "");
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
                return;
            }
        }

        // Fallback: scroll to top
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
