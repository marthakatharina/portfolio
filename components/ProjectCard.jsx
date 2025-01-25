// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./ProjectCard.css";

// export default function ProjectCard({ project }) {
//     const [featuredImage, setFeaturedImage] = useState("");

//     // const getImage = async () => {
//     //     try {
//     //         const res = await fetch(project?._links["featuredmedia"][0]?.href);
//     //         const data = await res.json();
//     //         setFeaturedImage(data.source_url);
//     //     } catch (error) {
//     //         console.error("Error fetching projects:", error);
//     //     }
//     // };

//     // useEffect(() => {
//     //     getImage();
//     // }, [project.featured_media]);

//     return (
//         <div className="container">
//             <div className="project-card--container">
//                 {project?._links["featuredmedia"][0]?.href !== "" ? (
//                     <Link to={`/${project.slug}`}>
//                         {" "}
//                         <img
//                             src={project._links["featuredmedia"][0]?.href}
//                             className="project-card--img"
//                             alt="Featured"
//                         />
//                     </Link>
//                 ) : (
//                     ""
//                 )}

//                 <div className="project-card--content">
//                     <h2 className="project-card--title">
//                         {project.title.rendered}
//                     </h2>

//                     <Link to={`/${project.slug}`}>View project →</Link>
//                 </div>
//             </div>
//         </div>
//     );
// }

import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

export default function ProjectCard({ project }) {
    return (
        <div className="container">
            <div className="project-card--container">
                {project?._links?.featuredmedia?.[0]?.href ? (
                    <Link to={`/${project.slug}`}>
                        <img
                            src={project._links.featuredmedia[0].href}
                            className="project-card--img"
                            alt={project.title.rendered}
                        />
                    </Link>
                ) : (
                    <p>No featured image available</p>
                )}

                <div className="project-card--content">
                    <h2 className="project-card--title">
                        {project.title.rendered}
                    </h2>
                    <Link to={`/${project.slug}`}>View project →</Link>
                </div>
            </div>
        </div>
    );
}
