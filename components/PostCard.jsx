//import axios from "axios";
import React, { useEffect, useState } from "react";
import "./PostCard.css";

export default function PostCard({ post }) {
    const [featuredImage, setFeaturedimage] = useState();

    const getImage = () => {
        axios
            .get(post?._links["wp:featuredmedia"][0]?.href)
            .then((response) => {
                setFeaturedimage(response.data.source_url);
            });
    };

    useEffect(() => {
        getImage();
    }, []);

    return (
        <div className="container">
            <div className="post-card--container">
                <p className="post-card--date">
                    {new Date(Date.now()).toLocaleDateString("en-UK", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                    })}
                </p>
                <h2 className="post-card--title">{post.title.rendered}</h2>
                <p
                    className="post-card--excerpt"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />
                <img src={featuredImage} className="post-card--img" />
            </div>
        </div>
    );
}
