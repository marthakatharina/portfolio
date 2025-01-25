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
import Main from "../components/Main";
// import Dot from "../components/Dot";
import { AptoProjectData } from "/components/ApTo";
import { AiTandemProjectData } from "/components/AITandem";

export default function App() {
    const [projects] = useState([AiTandemProjectData, AptoProjectData]);
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
                            {/* <AptoProjectData
                                onProjectData={handleProjectData}
                            /> */}
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
