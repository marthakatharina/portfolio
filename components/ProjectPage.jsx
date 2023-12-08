import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProjectPage() {
    const [page, setPage] = useState({});
    const { slug } = useParams();

    useEffect(() => {
        const fetchPage = async () => {
            try {
                const res = await fetch(
                    `http://localhost:8888/headless-cms/wp-json/wp/v2/pages?slug=${slug}`
                );
                const data = await res.json();
                setPage(data[0]);
            } catch (error) {
                console.error("Error fetching page:", error);
            }
        };
        fetchPage();
    }, [slug]);

    return (
        <div className="page-container">
            <h1>{page.title?.rendered}</h1>
            <div dangerouslySetInnerHTML={{ __html: page.content?.rendered }} />
        </div>
    );
}
