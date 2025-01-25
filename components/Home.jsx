// Home.jsx
import React from "react";
import ProjectCard from "/components/ProjectCard";

export default function Home({ projects }) {
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Design Projects</h1>
            <div className="home-intro">
                <p>
                    Hi! I'm Marta, a Digital Product Designer and UX/UI Design
                    Engineer passionate about making AI-powered and data
                    products easy and enjoyable to use. I love finding ways to
                    simplify complex data and interactions. Let's collaborate to
                    create seamless and delightful user experiences!
                </p>
            </div>
            <div className="project-cards">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </>
    );
}
