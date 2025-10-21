// About.jsx
import React from "react";

export default function About() {
    return (
        <div className="page-container">
            <h1 className="about-heading">About me</h1>
            <div className="about">
                <div>
                    <p>
                        I am a passionate Digital Product Designer, focused on
                        creating visually engaging, innovative, and
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
                    <img
                        src="/images/me.jpg"
                        alt="Marta"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            </div>
        </div>
    );
}
