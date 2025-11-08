// About.jsx
import React, { useState, useEffect, useRef } from "react";
import "./About.css";

export default function About() {
    const [showStars, setShowStars] = useState(false);
    const starsElementsRef = useRef(null); // cache stars so pointer-driven re-renders don't regenerate them

    useEffect(() => {
        // Check if stars have been shown in this session
        const starsShown = sessionStorage.getItem("starsShown");

        if (!starsShown) {
            // Generate the stars ONCE per session
            const starCount = 20;
            const elements = Array.from({ length: starCount }, (_, i) => {
                const left = Math.random() * 100; // 0-100%
                const animationDelay = Math.random() * 2; // 0-2s
                const animationDuration = 3 + Math.random() * 2; // 3-5s

                return (
                    <div
                        key={i}
                        className="falling-star"
                        style={{
                            left: `${left}%`,
                            animationDelay: `${animationDelay}s`,
                            animationDuration: `${animationDuration}s`,
                        }}
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            focusable="false"
                        >
                            <path
                                fill="#ffce00"
                                d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.79 1.402 8.174L12 18.897 4.664 23.174l1.402-8.174L.132 9.21l8.2-1.192z"
                            />
                        </svg>
                    </div>
                );
            });

            starsElementsRef.current = elements;
            setShowStars(true);
            sessionStorage.setItem("starsShown", "true");

            // Hide stars after 5 seconds
            const timer = setTimeout(() => {
                setShowStars(false);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <div className="page-container">
            {showStars && (
                <div className="stars-overlay">{starsElementsRef.current}</div>
            )}
            <h1 className="about-heading">About me</h1>
            <div className="about">
                <div>
                    <p>
                        I am a passionate Product Designer and Developer,
                        focused on creating visually engaging, innovative, and
                        human-centered digital experiences. With a strong
                        foundation in arts, web development, and UI/UX design, I
                        bring creativity and problem-solving to every project,
                        delivering solutions that are both aesthetically
                        appealing and functional.
                    </p>
                    <p>
                        Committed to continuous learning, I have recently
                        completed a master’s-level program in Human-Centered
                        Design for AI. This dedication to professional growth
                        enables me to stay on top of industry trends and
                        consistently enhance my skills, ensuring that the
                        designs I create are both innovative and aligned with
                        evolving user needs and business goals.
                    </p>
                    <p>
                        Beyond my fondness for design, I have a deep passion for
                        traveling, which not only inspires my creativity and
                        broadens my perspective but also helps me understand and
                        appreciate unique cultures. Ultimately, I owe my love
                        for authentic Indian and Japanese cuisine to my travels.
                    </p>
                    <p>
                        Feel free to review and download my CV
                        <a href="/CV_MartaWlusek.pdf/">
                            <b> here</b>
                        </a>
                        .
                    </p>
                </div>
                <div className="about--img">
                    <img src="/images/me.jpg" alt="Marta" />
                </div>
            </div>
        </div>
    );
}
