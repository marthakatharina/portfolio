import "./Loading.css";

const Loading = () => {
    return (
        <div id="loader-container">
            <svg
                id="loader"
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="50" cy="50" r="48" stroke="black" strokeWidth="4" />
            </svg>
        </div>
    );
};
export default Loading;
