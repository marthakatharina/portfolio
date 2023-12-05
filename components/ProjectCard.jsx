import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./PostCard.css";

export default function ProjectCard({ project }) {
    const [featuredImage, setFeaturedImage] = useState("");

    const getImage = () => {
        if (project.featured_media !== 0) {
            axios
                .get(project?._links["wp:featuredmedia"][0]?.href)
                .then((response) => {
                    setFeaturedImage(response.data.source_url);
                })
                .catch((error) => {
                    console.error("Error fetching image:", error);
                });
        } else {
            // No featured image available
            setFeaturedImage("");
        }
    };

    useEffect(() => {
        getImage();
    }, [project.featured_media]);

    return (
        <div className="container">
            <div className="post-card--container">
                <h2 className="post-card--title">{project.title.rendered}</h2>
                <p
                    className="post-card--excerpt"
                    dangerouslySetInnerHTML={{
                        __html: project.excerpt.rendered,
                    }}
                />
                <Link to={`/${project.slug}`}>View Project</Link>

                {featuredImage !== "" ? (
                    <img
                        src={featuredImage}
                        className="post-card--img"
                        alt="Featured"
                    />
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}
