import "./Loading.css";

const Loading = () => {
    return (
        <div id="loader-container">
            <svg
                id="loader"
                width="180"
                height="30"
                viewBox="0 0 210 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="15"
                    cy="15"
                    r="14"
                    stroke="#111111"
                    stroke-width="2"
                />
                <circle
                    cx="45"
                    cy="15"
                    r="14"
                    stroke="#111111"
                    stroke-width="2"
                />
                <circle
                    cx="75"
                    cy="15"
                    r="14"
                    stroke="#111111"
                    stroke-width="2"
                />
                <circle
                    cx="105"
                    cy="15"
                    r="14"
                    stroke="#111111"
                    stroke-width="2"
                />
                <circle
                    cx="135"
                    cy="15"
                    r="14"
                    stroke="#111111"
                    stroke-width="2"
                />
                <circle
                    cx="165"
                    cy="15"
                    r="14"
                    stroke="#111111"
                    stroke-width="2"
                />
            </svg>
        </div>
    );
};
export default Loading;
