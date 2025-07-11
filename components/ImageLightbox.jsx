import { useState, useEffect } from "react";
import "./ImageLightbox.css";

export default function ImageLightbox({ children }) {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (e) => {
        const img = e.target;
        if (img.tagName === "IMG") {
            setSelectedImage({
                src: img.src,
                alt: img.alt,
            });
        }
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    // Close with ESC key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                handleClose();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <>
            <div className="page-container" onClick={handleImageClick}>
                {children}
            </div>

            {selectedImage && (
                <div className="image-viewer" onClick={handleClose}>
                    <div className="image-viewer-overlay" />

                    <img
                        className="image-viewer-img"
                        src={selectedImage.src}
                        alt={selectedImage.alt}
                        onClick={(e) => e.stopPropagation()}
                    />

                    <button
                        className="image-viewer-close"
                        onClick={handleClose}
                        aria-label="Close image"
                    >
                        &times;
                    </button>
                </div>
            )}
        </>
    );
}
