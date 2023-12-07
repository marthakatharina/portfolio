import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

export default function ProjectCard({ project }) {
    const [featuredImage, setFeaturedImage] = useState("");

    const getImage = async () => {
        try {
            const res = await fetch(
                project?._links["wp:featuredmedia"][0]?.href
            );
            const data = await res.json();
            setFeaturedImage(data.source_url);
        } catch (error) {
            console.error("Error fetching projects:", error);
        }
    };

    useEffect(() => {
        getImage();
    }, [project.featured_media]);

    return (
        <div className="container">
            <div className="project-card--container">
                <h2 className="project-card--title">
                    {project.title.rendered}
                </h2>
                <p
                    className="project-card--excerpt"
                    dangerouslySetInnerHTML={{
                        __html: project.excerpt.rendered,
                    }}
                />
                <Link to={`/${project.slug}`}>View Project</Link>

                {featuredImage !== "" ? (
                    <img
                        src={featuredImage}
                        className="project-card--img"
                        alt="Featured"
                    />
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}
