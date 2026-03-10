import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import "./Articles.css";
import ArticleItems from "/components/ArticleItems";
import Loading from "/components/Loading";

export default function Articles() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState("medium"); // 'medium' | 'scholarly'
    const [didMount, setDidMount] = useState(false); // controls initial no-animation state
    const tabsRef = useRef(null);
    const mediumBtnRef = useRef(null);
    const scholarlyBtnRef = useRef(null);

    const updateIndicator = () => {
        const container = tabsRef.current;
        const target =
            activeTab === "medium"
                ? mediumBtnRef.current
                : scholarlyBtnRef.current;
        if (!container || !target) return;
        const contRect = container.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        const left = targetRect.left - contRect.left;
        const width = targetRect.width;
        container.style.setProperty("--indicator-left", `${left}px`);
        container.style.setProperty("--indicator-width", `${width}px`);
    };

    const fetchArticles = async () => {
        try {
            const res = await fetch(
                "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@martawlusek" ||
                    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40martawlusek",
            );
            const data = await res.json();
            setArticles(data.items);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching Medium articles:", error);
            const timer = setTimeout(() => {
                setError(
                    `API failed to fetch articles from Medium.com at this time. Please try again later or visit my Medium profile at <a href="https://medium.com/@martawlusek" target="_blank"><strong>https://medium.com/@martawlusek</strong></a>`,
                );
                setLoading(false);
            }, 10000); // 10 seconds
            return () => clearTimeout(timer);
        }
    };

    useEffect(() => {
        fetchArticles();
    }, []);

    // After first paint, allow underline transitions
    useEffect(() => {
        setDidMount(true);
    }, []);

    useLayoutEffect(() => {
        // Position underline before first paint and on tab changes
        updateIndicator();
        const onResize = () => updateIndicator();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTab]);

    return (
        <div className="article--container">
            <div className="article--heading">
                <h1>Publications</h1>
            </div>

            {/* Tabs */}
            <div
                className={`tabs ${!didMount ? "tabs--initial" : ""}`}
                role="tablist"
                aria-label="Articles tabs"
                ref={tabsRef}
            >
                <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === "medium"}
                    id="medium"
                    className={`tab-button ${
                        activeTab === "medium" ? "active" : ""
                    }`}
                    ref={mediumBtnRef}
                    onClick={() => setActiveTab("medium")}
                >
                    Medium articles
                </button>
                <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === "scholarly"}
                    id="scholarly"
                    className={`tab-button ${
                        activeTab === "scholarly" ? "active" : ""
                    }`}
                    ref={scholarlyBtnRef}
                    onClick={() => setActiveTab("scholarly")}
                >
                    Scholarly articles
                </button>
            </div>

            {activeTab === "medium" ? (
                <>
                    <p className="article-type__subtitle">
                        <strong>I write about UX design for AI</strong>
                    </p>
                    {loading ? (
                        <Loading />
                    ) : error ? (
                        <div
                            className="article--error-message"
                            dangerouslySetInnerHTML={{ __html: error }}
                        ></div>
                    ) : (
                        <div className="container grid">
                            {articles.map((article, index) => (
                                <ArticleItems
                                    key={index}
                                    article={article}
                                    index={index}
                                />
                            ))}
                        </div>
                    )}
                </>
            ) : (
                <>
                    <p className="article-type__subtitle">
                        <strong>My peer-reviewed publications</strong>
                    </p>

                    <ul className="scholarly-articles--list">
                        <li>
                            📚 Wlusek, M. (2026).{" "}
                            <a
                                className="scholarly-article--link"
                                href="https://diva-portal.org/smash/record.jsf?dswid=3870&pid=diva2%3A2040670"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Designing Human-Centered Generative AI
                                Conversational Agents For Digital Cultural
                                Heritage: A Case Study On Europeana.
                            </a>{" "}
                            <em>
                                {" "}
                                Retrieved from
                                https://urn.kb.se/resolve?urn=urn:nbn:se:lnu:diva-145226
                            </em>
                        </li>

                        <li>
                            📚 Włusek, M. (2025).{" "}
                            <a
                                className="scholarly-article--link"
                                href="https://ejournals.eu/en/journal/przeglad-kulturoznawczy/article/from-mechanical-reproduction-to-generative-ai-a-critical-intervention-into-ai-generated-images"
                                target="_blank"
                                rel="noreferrer"
                            >
                                From Mechanical Reproduction to Generative AI: A
                                Critical Intervention into AI-Generated Images.
                            </a>{" "}
                            <em>Arts & Cultural Studies Review</em>, 2025.
                        </li>

                        <li style={{ paddingBottom: "100vh" }}>
                            <em>More coming soon...</em>
                        </li>
                    </ul>
                </>
            )}
        </div>
    );
}
