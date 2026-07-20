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
                <div id="intro-line">
                    <div className="intro-name">
                        <p>Hi, I'm Marta Wlusek</p>{" "}
                        <span className="role-container">
                            <span className="role italic">
                                → Product Manager
                            </span>
                            <span className="role italic">→ Web Developer</span>
                            <span className="role italic">→ UX Researcher</span>
                        </span>
                    </div>
                </div>
                <p id="subintro-line">
                    I help companies and organisations research, design, and
                    develop AI-based solutions to automate workflows and enhance
                    productivity, efficiency, and user adoption.
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
                    className={`filter-btn shipped ${filter === "Shipped" ? "active" : ""}`}
                    onClick={() => setFilter("Shipped")}
                >
                    Shipped
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
