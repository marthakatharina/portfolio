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
            }}
            aria-hidden="true"
        >
            <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
            >
                <path
                    fill="#ffce00"
                    d="M12 2
           L14.5 9.5
           L22 12
           L14.5 14.5
           L12 22
           L9.5 14.5
           L2 12
           L9.5 9.5
           Z"
                />
            </svg>
        </div>
    );
}
