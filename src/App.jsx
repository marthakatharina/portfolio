import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ProjectPage from "/components/ProjectPage";
import About from "/components/About";
import Home from "/components/Home";
import Blog from "/components/Blog";
import Context from "/components/Context";
import ThemeSwitcher from "/components/ThemeSwitcher";
import ScrollToTop from "/components/ScrollToTop";
// import { useContext } from "react";
import "./App.css";
import Main from "/components/Main";
import Dot from "/components/Dot";
import { AptoProjectData } from "/components/ApTo";
import { AiTandemProjectData } from "/components/AITandem";
import { EuropeanaAIAgentProjectData } from "/components/EuropeanaAIAgent";

export default function App() {
    const [projects] = useState([
        EuropeanaAIAgentProjectData,
        AiTandemProjectData,
        AptoProjectData,
    ]);
    const [theme, setTheme] = useState("light");
    const [coordinates, setCoordinates] = useState({ x: 20, y: 20 });
    const [hideDot, setHideDot] = useState(false);
    const [isHeaderHidden, setIsHeaderHidden] = useState(true);
    const [isTopHeaderStuck, setIsTopHeaderStuck] = useState(false);
    const [isTopHeaderHidden, setIsTopHeaderHidden] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;
        let ticking = false;

        const updateHeaderState = () => {
            const scrollY = window.scrollY;
            const isAtTop = scrollY === 0;
            const scrollingDown = scrollY > lastScrollY;

            setIsTopHeaderStuck(!isAtTop);

            if (isAtTop) {
                setIsTopHeaderHidden(false);
            } else if (scrollingDown) {
                setIsTopHeaderHidden(true);
            } else {
                // Scrolling up
                setIsTopHeaderHidden(false);
            }

            lastScrollY = scrollY;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateHeaderState);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const contextValues = {
        theme,
        setTheme,
        hideDot,
        setHideDot,
    };

    const handleHeaderToggle = () => {
        setIsHeaderHidden(!isHeaderHidden); // Toggle the state on large vieports
    };

    return (
        <>
            <Context.Provider value={contextValues}>
                <Dot coordinates={coordinates} />
                <Main onPointerMove={setCoordinates} id="main-container">
                    <ThemeSwitcher />
                    <BrowserRouter>
                        <ScrollToTop />
                        {isHeaderHidden && (
                            <div className="open-button-container">
                                <button
                                    id="open-button"
                                    className="menu-button"
                                    onClick={handleHeaderToggle}
                                >
                                    <img
                                        style={{
                                            verticalAlign: "middle",
                                            background: "white",
                                        }}
                                        src="/images/icons/menu-svgrepo-com.svg"
                                        alt="menu"
                                    />
                                </button>
                            </div>
                        )}
                        {!isHeaderHidden && (
                            <div className="close-button-container">
                                <button
                                    id="close-button"
                                    className="menu-button"
                                    onClick={() => setIsHeaderHidden(true)}
                                >
                                    <img
                                        src="/images/icons/close-svgrepo-com.svg"
                                        alt="close menu"
                                        style={{ verticalAlign: "middle" }}
                                    />
                                </button>
                            </div>
                        )}

                        {/* Desktop sticky top header (shown only on >=769px via CSS) */}
                        <header
                            id="top-header"
                            className={`${theme} ${
                                isTopHeaderStuck ? "stuck" : ""
                            } ${isTopHeaderHidden ? "hidden" : ""}`}
                        >
                            <div className="menu-container">
                                <div className="logo"></div>
                                <nav className="menu">
                                    <ul>
                                        <li>
                                            <Link
                                                to={"/#projects"}
                                                onClick={() => {
                                                    // Keep same scrolling behavior but do not toggle mobile menu
                                                    setTimeout(() => {
                                                        const el =
                                                            document.getElementById(
                                                                "projects"
                                                            );
                                                        if (el) {
                                                            el.scrollIntoView({
                                                                behavior:
                                                                    "smooth",
                                                                block: "start",
                                                            });
                                                        }
                                                    }, 50);
                                                }}
                                            >
                                                Projects
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/about">About me</Link>
                                        </li>
                                        <li>
                                            <Link to="/blog">Articles</Link>
                                        </li>
                                        <li>
                                            <a href="https://martawlusek.netlify.app/CV_MartaWlusek.pdf/">
                                                CV
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </header>

                        <header
                            id="header"
                            className={`${
                                isHeaderHidden ? "hide-header" : "show-header"
                            } ${theme}`}
                        >
                            <div className="menu-container">
                                <div className="logo"></div>
                                <nav className="menu">
                                    <ul>
                                        <li>
                                            <Link
                                                to={"/#projects"}
                                                onClick={() => {
                                                    setIsHeaderHidden(true);
                                                    // Always attempt to scroll to the projects anchor
                                                    // even when already on the page.
                                                    setTimeout(() => {
                                                        const el =
                                                            document.getElementById(
                                                                "projects"
                                                            );
                                                        if (el) {
                                                            el.scrollIntoView({
                                                                behavior:
                                                                    "smooth",
                                                                block: "start",
                                                            });
                                                        }
                                                    }, 50);
                                                }}
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
                                                About me
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/blog"
                                                onClick={() =>
                                                    setIsHeaderHidden(true)
                                                }
                                            >
                                                Articles
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="https://martawlusek.netlify.app/CV_MartaWlusek.pdf/">
                                                CV
                                            </a>
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
                                    CV
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
                        © Marta Wlusek 2025. Designed and developed with ♡
                        React.js by Marta Wlusek. All rights reserved.
                    </p>
                </footer>
            </Context.Provider>
        </>
    );
}
