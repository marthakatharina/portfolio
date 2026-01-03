// Home.jsx
import React from "react";
import ProjectCard from "/components/ProjectCard";
import "./Home.css";

export default function Home({ projects }) {
    return (
        <>
            <div className="home-intro">
                <p id="intro-line">
                    <span className="greeting">
                        Hi <span className="wave">👋</span>,{" "}
                    </span>

                    <span className="intro-name">
                        I'm Marta Wlusek, a UX Researcher, Product Designer and
                        Developer.
                    </span>
                </p>
                <p id="subintro-line">
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
