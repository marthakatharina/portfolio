import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import PropTypes from "prop-types";
import "./App.css";
import Main from "/components/Main";
import Dot from "/components/Dot";
import Home from "/components/Home";
import ProjectPage from "/components/ProjectPage";
import About from "/components/About";
import Articles from "/components/Articles";
import Context from "/components/Context";
import ThemeSwitcher from "/components/ThemeSwitcher";
import ScrollToTop from "/components/ScrollToTop";
import { AptoProjectData } from "/components/ApTo";
import { AiTandemProjectData } from "/components/AITandem";
import { EuropeanaAIAgentProjectData } from "/components/EuropeanaAIAgent";
import { ImageTagExtractorProjectData } from "/components/ImageTagExtractor";
import { NotelistaProjectData } from "/components/Notelista";
import { AIActAssistantProjectData } from "/components/AIActAssistant";

const THEME_STORAGE_KEY = "theme";
const CV_URL = "/CV_Marta_Ratajski.pdf";
const CV_PASSWORD = "482731";
const CV_CONTACT_EMAIL = "martaratajski@gmail.com";

const getInitialTheme = () => {
    if (typeof window === "undefined") {
        return "light";
    }

    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    return savedTheme === "dark" ? "dark" : "light";
};

function CvPasswordDialog({ theme, isOpen, onClose }) {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (!isOpen) {
            setPassword("");
            setError("");
        }
    }, [isOpen]);

    if (!isOpen) {
        return null;
    }

    const accessCv = () => {
        if (password !== CV_PASSWORD) {
            setError("That password is not correct.");
            return;
        }

        window.open(CV_URL, "_blank", "noopener,noreferrer");
        onClose();
    };

    return (
        <div className={`cv-dialog-backdrop ${theme}`} onClick={onClose}>
            <div
                className="cv-dialog"
                role="dialog"
                aria-modal="true"
                aria-labelledby="cv-dialog-title"
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    className="cv-dialog-close"
                    type="button"
                    aria-label="Close CV password dialog"
                    onClick={onClose}
                >
                    ×
                </button>
                <h2 id="cv-dialog-title">Access my CV</h2>
                <p>
                    Enter the password to open my CV.</p>
                <p>
                    To request the
                    password, email{" "}
                    <a href={`mailto:${CV_CONTACT_EMAIL}`}>
                        {CV_CONTACT_EMAIL}
                    </a>
                    .
                </p>
                <label htmlFor="cv-password">Password</label>
                <input
                    id="cv-password"
                    type="password"
                    inputMode="numeric"
                    pattern="[0-9]{6}"
                    maxLength={6}
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value.replace(/\D/g, ""));
                        setError("");
                    }}
                    autoFocus
                />
                {error && <p className="cv-dialog-error">{error}</p>}
                <div className="cv-dialog-actions">
                    <button type="button" onClick={accessCv}>
                        Open CV
                    </button>
                </div>
            </div>
        </div>
    );
}

CvPasswordDialog.propTypes = {
    theme: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default function App() {
    const [projects] = useState([
        AIActAssistantProjectData,
        NotelistaProjectData,
        EuropeanaAIAgentProjectData,
        ImageTagExtractorProjectData,
        AiTandemProjectData,
        AptoProjectData,
    ]);
    const [theme, setTheme] = useState(getInitialTheme);
    const [coordinates, setCoordinates] = useState({ x: 20, y: 20 });
    const [hideDot, setHideDot] = useState(false);
    const [isHeaderHidden, setIsHeaderHidden] = useState(true);
    const [isTopHeaderStuck, setIsTopHeaderStuck] = useState(false);
    const [isTopHeaderHidden, setIsTopHeaderHidden] = useState(false);
    const [isCvDialogOpen, setIsCvDialogOpen] = useState(false);

    useEffect(() => {
        window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    }, [theme]);

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

    const openCvDialog = (event) => {
        event.preventDefault();
        setIsCvDialogOpen(true);
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
                                <div className="logo"><Link to="/">MR</Link></div>
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
                                                                "projects",
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
                                            <Link to="/articles">
                                                Publications
                                            </Link>
                                        </li>
                                        <li>
                                            <a
                                                href={CV_URL}
                                                target="_blank"
                                                rel="noreferrer"
                                                onClick={openCvDialog}
                                            >
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
                                                                "projects",
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
                                                to="/articles"
                                                onClick={() =>
                                                    setIsHeaderHidden(true)
                                                }
                                            >
                                                Publications
                                            </Link>
                                        </li>
                                        <li>
                                            <a
                                                href={CV_URL}
                                                target="_blank"
                                                rel="noreferrer"
                                                onClick={openCvDialog}
                                            >
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
                                <Route
                                    path="/articles"
                                    element={<Articles />}
                                />
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
                                <a
                                    href={CV_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={openCvDialog}
                                >
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
                        </ul>
                    </div>
                    <p>
                        © Marta Ratajski 2026. Designed and developed with ♡ React
                        by Marta Ratajski.
                    </p>
                </footer>
                <CvPasswordDialog
                    theme={theme}
                    isOpen={isCvDialogOpen}
                    onClose={() => setIsCvDialogOpen(false)}
                />
            </Context.Provider>
        </>
    );
}
