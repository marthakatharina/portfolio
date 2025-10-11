// Home.jsx
import React, { useEffect } from "react";
import ProjectCard from "/components/ProjectCard";
import "./Home.css";

export default function Home({ projects }) {
    useEffect(() => {
        if (typeof window === "undefined" || !projects) return;

        const urls = projects
            .map((p) => p?._links?.featuredmedia?.[0]?.href)
            .filter(Boolean);

        const unique = Array.from(new Set(urls));

        unique.forEach((url) => {
            try {
                // Add a preload link if not already present
                if (
                    !document.querySelector(
                        `link[rel="preload"][href="${url}"]`
                    )
                ) {
                    const l = document.createElement("link");
                    l.rel = "preload";
                    l.as = "image";
                    l.href = url;
                    document.head.appendChild(l);
                }

                // Create an Image object to warm the browser cache
                const img = new Image();
                img.src = url;
            } catch (err) {
                // ignore any errors during preload
                // (e.g., invalid URL or cross-origin restrictions)
            }
        });
    }, [projects]);
    return (
        <>
            <div className="home-intro">
                <p className="intro-line">
                    <span className="greeting">
                        Hi <span className="wave">👋</span>,{" "}
                    </span>
                    <span className="typewriter" aria-hidden="false">
                        {" "}
                        I'm <strong>Marta Wlusek</strong>, a{" "}
                        <strong>Digital Product Designer</strong> and{" "}
                        <strong>UX/UI Design Engineer</strong>.
                    </span>
                </p>
                <p>
                    I help companies and organizations design and develop GenAI,
                    Machine Learning, and data based solutions to optimize
                    productivity, accessibility, and engagement.
                </p>
            </div>

            <h1 id="projects" style={{ textAlign: "center" }}>
                Projects
            </h1>
            <div className="project-cards">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </>
    );
}
