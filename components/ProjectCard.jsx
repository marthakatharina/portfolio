import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./PostCard.css";

export default function ProjectCard({ project }) {
    const [featuredImage, setFeaturedImage] = useState("");

    const getImage = () => {
        axios
            .get(project?._links["wp:featuredmedia"][0]?.href)
            .then((response) => {
                setFeaturedImage(response.data.source_url);
            });
    };

    useEffect(() => {
        getImage();
    }, []);

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
                <img
                    src={featuredImage}
                    className="post-card--img"
                    alt="Featured"
                />
            </div>
        </div>
    );
}
