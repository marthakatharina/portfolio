// Home.jsx
import React from "react";
import ProjectCard from "/components/ProjectCard";

export default function Home({ projects }) {
    return (
        <>
            <div className="home-intro">
                <p style={{ textAlign: "center" }}>
                    Hi 👋, and welcome to my Portfolio showcasing design
                    projects!
                </p>
                <p>
                    I'm <strong>Marta Wlusek</strong>, a{" "}
                    <strong>Digital Product Designer</strong> and UX/UI Design
                    Engineer passionate about making AI-powered and data
                    products easy and enjoyable to use. I love finding ways to
                    simplify complex data and interactions. Let's collaborate to
                    create seamless and delightful user experiences!
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
