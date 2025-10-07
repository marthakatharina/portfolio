// Home.jsx
import React from "react";
import ProjectCard from "/components/ProjectCard";
import "./Home.css";

export default function Home({ projects }) {
    return (
        <>
            <div className="home-intro">
                <p>
                    Hi 👋, and welcome to my Portfolio showcasing design
                    projects!
                </p>
                <p>
                    I'm <strong>Marta Wlusek</strong>, a{" "}
                    <strong>Digital Product Designer</strong> and{" "}
                    <strong>UX/UI Design Engineer</strong>.
                </p>
                <p>
                    I help companies and organizations design and develop GenAI
                    and Machine Learning-based solutions to optimize
                    productivity, accessibility, and engagement.
                </p>
            </div>

            <h1 style={{ textAlign: "center" }}>Projects</h1>
            <div className="project-cards">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </>
    );
}
