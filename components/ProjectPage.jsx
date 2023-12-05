import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ProjectPage() {
    const [page, setPage] = useState({});
    const { slug } = useParams();

    useEffect(() => {
        const fetchPage = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:8888/headless-cms/wp-json/wp/v2/pages?slug=${slug}`
                );
                setPage(res.data[0]);
            } catch (error) {
                console.error("Error fetching page:", error);
            }
        };
        fetchPage();
    }, [slug]);

    return (
        <div>
            <h1>{page.title?.rendered}</h1>
            <div dangerouslySetInnerHTML={{ __html: page.content?.rendered }} />
        </div>
    );
}
