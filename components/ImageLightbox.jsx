import { useState, useEffect, useRef, useCallback } from "react";
import "./ImageLightbox.css";
import PropTypes from "prop-types";

export default function ImageLightbox({ children }) {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [images, setImages] = useState([]);
    const containerRef = useRef(null);

    // Collect images inside the container for slideshow order
    useEffect(() => {
        if (!containerRef.current) return;
        const imgs = Array.from(
            containerRef.current.querySelectorAll("img")
        ).map((img) => ({ src: img.src, alt: img.alt }));
        setImages(imgs);
    }, [children]);

    const openImageAt = (index) => {
        setSelectedIndex(index);
    };

    const handleImageClick = (e) => {
        const img = e.target;
        if (img.tagName === "IMG") {
            const imgs = Array.from(
                containerRef.current.querySelectorAll("img")
            );
            const idx = imgs.indexOf(img);
            openImageAt(idx === -1 ? 0 : idx);
        }
    };

    const handleClose = () => setSelectedIndex(null);

    const showPrev = useCallback(
        (e) => {
            e?.stopPropagation();
            setSelectedIndex((prev) => {
                if (prev === null) return null;
                return (prev - 1 + images.length) % images.length;
            });
        },
        [images.length]
    );

    const showNext = useCallback(
        (e) => {
            e?.stopPropagation();
            setSelectedIndex((prev) => {
                if (prev === null) return null;
                return (prev + 1) % images.length;
            });
        },
        [images.length]
    );

    // Keyboard navigation: ESC to close, left/right to navigate
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedIndex === null) return;
            if (e.key === "Escape") handleClose();
            if (e.key === "ArrowLeft") showPrev();
            if (e.key === "ArrowRight") showNext();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedIndex, showPrev, showNext]);

    ImageLightbox.propTypes = {
        children: PropTypes.node,
    };

    return (
        <>
            <div
                className="page-container"
                ref={containerRef}
                onClick={handleImageClick}
            >
                {children}
            </div>

            {selectedIndex !== null && images[selectedIndex] && (
                <div className="image-viewer" onClick={handleClose}>
                    <div className="image-viewer-overlay" />

                    <button
                        className="image-viewer-arrow prev"
                        onClick={showPrev}
                        aria-label="Previous image"
                    >
                        ‹
                    </button>

                    <img
                        className="image-viewer-img"
                        src={images[selectedIndex].src}
                        alt={images[selectedIndex].alt}
                        onClick={(e) => e.stopPropagation()}
                    />

                    <button
                        className="image-viewer-arrow next"
                        onClick={showNext}
                        aria-label="Next image"
                    >
                        ›
                    </button>

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
