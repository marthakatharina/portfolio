// Home.jsx
import React, { useState } from "react";
import ProjectCard from "/components/ProjectCard";
import "./Home.css";

export default function Home({ projects }) {
    const [filter, setFilter] = useState("All");

    const filteredProjects =
        filter === "All"
            ? projects
            : projects.filter((project) => project.category === filter);

    return (
        <>
            <div className="home-intro">
                <p id="intro-line">
                    <span className="greeting">
                        Hi<span className="wave">👋</span>,{" "}
                    </span>

                    <span className="intro-name">
                        I'm Marta Wlusek, a UX Researcher, Product Designer and
                        Developer.
                    </span>
                </p>
                <p id="subintro-line">
                    I help companies and organizations research, design, and
                    develop AI-based solutions to automate workflows and enhance
                    productivity, accessibility, and engagement.
                </p>
            </div>

            <h1 id="projects" style={{ textAlign: "center" }}>
                Projects
            </h1>
            <div className="filter-buttons">
                <button
                    className={`filter-btn ${filter === "All" ? "active" : ""}`}
                    onClick={() => setFilter("All")}
                >
                    All
                </button>
                <button
                    className={`filter-btn ${filter === "Deployed" ? "active" : ""}`}
                    onClick={() => setFilter("Deployed")}
                >
                    Deployed
                </button>
            </div>
            <div className="project-cards">
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </>
    );
}
