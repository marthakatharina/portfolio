export default function Dot({ coordinates }) {
    return (
        <div
            className="dot"
            style={{
                transform: `translate(${coordinates.x}px, ${coordinates.y}px)`,
            }}
        />
    );
}
