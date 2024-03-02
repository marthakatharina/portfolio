import { useContext } from "react";
import Context from "./Context";

export default function Dot({ coordinates }) {
    const { hideDot } = useContext(Context);

    return (
        <div
            className="dot"
            style={{
                transform: `translate(${coordinates.x}px, ${coordinates.y}px) ${
                    hideDot ? "scale(0.0)" : ""
                }`,
                // visibility: hideDot ? "hidden" : "visible",
            }}
        />
    );
}
