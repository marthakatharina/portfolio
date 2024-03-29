import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ProjectCard from "/components/ProjectCard";
import ProjectPage from "/components/ProjectPage";
import Context from "/components/Context";
import ThemeSwitcher from "/components/ThemeSwitcher";
// import { useContext } from "react";
import "./App.css";
import Main from "../components/Main";
// import Dot from "../components/Dot";
import ArticleItems from "../components/ArticleItems";
// import RSSFeed from "../components/RSSFeed";
import Loading from "../components/Loading";

export default function App() {
    const [projects, setProjects] = useState([]);
    const [theme, setTheme] = useState("light");
    const [coordinates, setCoordinates] = useState({ x: 45, y: 30 });
    const [hideDot, setHideDot] = useState(false);
    const [isHeaderHidden, setIsHeaderHidden] = useState(true);

    const contextValues = {
        theme,
        setTheme,
        hideDot,
        setHideDot,
    };

    const handleHeaderToggle = () => {
        setIsHeaderHidden(!isHeaderHidden); // Toggle the state on large vieports
    };

    const fetchProjects = async () => {
        try {
            const res = await fetch("/projects.json");
            const data = await res.json();
            setProjects(data);
        } catch (error) {
            console.error("Error fetching projects:", error);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <>
            <Context.Provider value={contextValues}>
                <ThemeSwitcher />
                <Main onPointerMove={setCoordinates} id="main-container">
                    {/* <Dot coordinates={coordinates} /> */}

                    <BrowserRouter>
                        {isHeaderHidden && (
                            <div className="open-button-container">
                                <span
                                    id="open-button"
                                    onClick={handleHeaderToggle}
                                >
                                    →
                                </span>
                            </div>
                        )}
                        {!isHeaderHidden && (
                            <div className="close-button-container">
                                <span
                                    id="close-button"
                                    onClick={() => setIsHeaderHidden(true)}
                                >
                                    ←
                                </span>
                            </div>
                        )}

                        <header
                            id="header"
                            className={
                                isHeaderHidden ? "hide-header" : "show-header"
                            }
                        >
                            <div className="menu-container">
                                <div className="logo"></div>
                                <nav className="menu">
                                    <ul>
                                        <li>
                                            <Link
                                                to="/"
                                                onClick={() =>
                                                    setIsHeaderHidden(true)
                                                }
                                            >
                                                Projects
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/about"
                                                onClick={() =>
                                                    setIsHeaderHidden(true)
                                                }
                                            >
                                                About
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/blog"
                                                onClick={() =>
                                                    setIsHeaderHidden(true)
                                                }
                                            >
                                                Blog
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </header>
                        <div className="content">
                            <Routes>
                                <Route
                                    path="/"
                                    element={<Home projects={projects} />}
                                />
                                <Route path="/about" element={<About />} />
                                <Route path="/blog" element={<Blog />} />
                                {/* <Route path="/blog" element={<RSSFeed />} /> */}
                                <Route
                                    path="/:slug"
                                    element={<ProjectPage />}
                                />
                            </Routes>
                        </div>
                    </BrowserRouter>
                </Main>
            </Context.Provider>
        </>
    );
}

function Home({ projects }) {
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Design Projects</h1>
            <div className="home-intro">
                <p>
                    Hi, I'm Marta Wlusek, a UX/UI designer and developer with
                    experience at a digital PR agency and a software development
                    company in Berlin. With my hands-on experience in designing
                    and developing digital products, along with a deep
                    understanding of both disciplines, I efficiently bridge the
                    gap between design and development.
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
function About() {
    return (
        <div className="page-container">
            <p>Page under construction.</p>
            <p>
                Meanwhile, you can see and download my CV
                <a href="/CV_MartaWlusek.pdf/">
                    <b> here</b>
                </a>
                .
            </p>
        </div>
    );
}

const Blog = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchArticles = async () => {
        try {
            const res = await fetch(
                "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@marta.wlusek"
            );
            const data = await res.json();
            // console.log(data);
            setArticles(data.items);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching Medium articles:", error);
        }
    };

    useEffect(() => {
        fetchArticles();
    }, []);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="article--container">
                    <div className="article--heading">
                        <h1>Medium Articles</h1>
                        <p>I write about UX design for AI</p>
                    </div>

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
                </div>
            )}
        </>
    );
};
