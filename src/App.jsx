import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ProjectCard from "/components/ProjectCard";
import ProjectPage from "/components/ProjectPage";
import Context from "/components/Context";
import ThemeSwitcher from "/components/ThemeSwitcher";
import ScrollToTop from "/components/ScrollToTop";
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
                        <ScrollToTop />
                        {isHeaderHidden && (
                            <div className="open-button-container">
                                <span
                                    id="open-button"
                                    className="menu-button"
                                    onClick={handleHeaderToggle}
                                >
                                    <img
                                        src="/images/icons/menu-svgrepo-com.svg"
                                        alt="menu"
                                    />
                                </span>
                            </div>
                        )}
                        {!isHeaderHidden && (
                            <div className="close-button-container">
                                <span
                                    id="close-button"
                                    className="menu-button"
                                    onClick={() => setIsHeaderHidden(true)}
                                >
                                    <img
                                        src="/images/icons/close-svgrepo-com.svg"
                                        alt="close menu"
                                    />
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
                                <div className="logo">
                                    MARTA WLUSEK | PORTFOLIO
                                </div>
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
                <footer>
                    <div>
                        <ul>
                            <li>
                                <a href="https://martawlusek.netlify.app/CV_MartaWlusek.pdf/">
                                    Curriculum Vitae
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/marta-wlusek/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/marthakatharina"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://cargocollective.com/martawlusek/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    My Art Projects
                                </a>
                            </li>
                        </ul>
                    </div>
                    <p>
                        © Marta Wlusek 2024. Designed and developed with ♡
                        React.js by Marta. All rights reserved.
                    </p>
                </footer>
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
                    Hi! I'm Marta, a Digital Product Designer and UX/UI Design
                    Engineer passionate about making AI-powered and data
                    products easy and enjoyable to use. I love finding ways to
                    simplify complex data and interactions. Let's collaborate to
                    create seamless and delightful user experiences!
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
            <h1 className="about-heading">About me</h1>
            <div className="about">
                <div>
                    <p>
                        I am a passionate Digital Product Designer, focused on
                        creating visually engaging, innovative, and
                        user-centered digital experiences. With a strong
                        foundation in arts, web development, and UI/UX design, I
                        bring creativity and problem-solving to every project,
                        delivering solutions that are both aesthetically
                        appealing and functional.
                    </p>
                    <p>
                        Committed to continuous learning, I have recently
                        completed a master’s-level program in Human-Centered
                        Design for AI. This dedication to professional growth
                        enables me to stay on top of industry trends and
                        consistently enhance my skills, ensuring that the
                        designs I create are both innovative and aligned with
                        evolving user needs and business goals.
                    </p>
                    <p>
                        Beyond my fondness for design, I have a deep passion for
                        traveling, which not only inspires my creativity and
                        broadens my perspective but also helps me understand and
                        appreciate unique cultures. Ultimately, I owe my love
                        for authentic Indian and Japanese cuisine to my travels.
                    </p>
                    <p>
                        Feel free to review and download my CV
                        <a href="/CV_MartaWlusek.pdf/">
                            <b> here</b>
                        </a>
                        .
                    </p>
                </div>
                <div className="about--img">
                    <img src="/images/me.jpg" alt="Marta" />
                </div>
            </div>
        </div>
    );
}

const Blog = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchArticles = async () => {
        try {
            const res = await fetch(
                "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@martawlusek"
            );
            const data = await res.json();
            // console.log(data);
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
                <h1>Medium Articles</h1>
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
};
