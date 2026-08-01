// Home.jsx
import React, { useEffect, useState } from "react";
import ProjectCard from "/components/ProjectCard";
import "./Home.css";

export default function Home({ projects }) {
    const [filter, setFilter] = useState("All");
    const roles = ["Manager", "Developer", "Designer"];
    const [roleIndex, setRoleIndex] = useState(0);
    const [typedRole, setTypedRole] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    const filteredProjects =
        filter === "All"
            ? projects
            : projects.filter((project) => project.category === filter);

    useEffect(() => {
        const activeRole = roles[roleIndex];
        const typingDelay = isDeleting ? 65 : 110;
        const holdDelay = 1400;
        const restartDelay = 250;

        const timeout = setTimeout(() => {
            if (!isDeleting && typedRole === activeRole) {
                setIsDeleting(true);
                return;
            }

            if (isDeleting && typedRole === "") {
                setIsDeleting(false);
                setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length);
                return;
            }

            setTypedRole((currentText) =>
                isDeleting
                    ? currentText.slice(0, -1)
                    : activeRole.slice(0, currentText.length + 1)
            );
        },
        !isDeleting && typedRole === activeRole
            ? holdDelay
            : isDeleting && typedRole === ""
                ? restartDelay
                : typingDelay
        );

        return () => clearTimeout(timeout);
    }, [isDeleting, roleIndex, roles, typedRole]);

    return (
        <>
            <div className="home-intro">
                <div id="intro-line">
                    <div className="intro-name">
                        <p>Hi, I'm Marta Wlusek</p>{" "}
                        <span
                            className="role-container"
                            aria-label={`→ Product ${roles[roleIndex]}`}
                        >
                            <span className="role-prefix italic">→ Product</span>
                            <span className="role-text italic" aria-hidden="true">
                                {typedRole}
                                <span className="role-cursor" />
                            </span>
                        </span>
                    </div>
                </div>
                <p id="subintro-line">
                    I help companies and organisations research, define, and build AI-powered products that solve real user problems, streamline workflows, and drive meaningful business impact.
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
