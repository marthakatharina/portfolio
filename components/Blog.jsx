import React, { useState, useEffect } from "react";
import ArticleItems from "/components/ArticleItems";
import Loading from "/components/Loading";

export default function Blog() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchArticles = async () => {
        try {
            const res = await fetch(
                "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@martawlusek"
            );
            const data = await res.json();
            setArticles(data.items);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching Medium articles:", error);
            const timer = setTimeout(() => {
                setError(
                    `API failed to fetch articles from Medium.com at this time. Please try again later or visit my Medium profile at <a href="https://medium.com/@martawlusek" target="_blank"><strong>https://medium.com/@martawlusek</strong></a>`
                );
                setLoading(false);
            }, 10000); // 10 seconds
            return () => clearTimeout(timer);
        }
    };

    useEffect(() => {
        fetchArticles();
    }, []);

    return (
        <div className="article--container">
            <div className="article--heading">
                <h1>Articles</h1>
                <p>I write about UX design for AI</p>
            </div>
            {loading ? (
                <Loading />
            ) : error ? (
                <div
                    className="article--error-message"
                    dangerouslySetInnerHTML={{ __html: error }}
                ></div>
            ) : (
                <div className="container grid">
                    {articles.map((article, index) => {
                        return (
                            <ArticleItems
                                key={index}
                                article={article}
                                index={index}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
}
