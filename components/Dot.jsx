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
                width="20"
                height="20"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
            >
                <path
                    fill="#af7aed"
                    d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.79 1.402 8.174L12 18.897 4.664 23.174l1.402-8.174L.132 9.21l8.2-1.192z"
                />
            </svg>
        </div>
    );
}
