import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ProjectCard from "/components/ProjectCard";
import ProjectPage from "/components/ProjectPage";
import ThemeContext from "/components/ThemeContext";
import ThemeSwitcher from "/components/ThemeSwitcher";
// import { useContext } from "react";
import "./App.css";
import Main from "../components/Main";
import Dot from "../components/Dot";

export default function App() {
    const [projects, setProjects] = useState([]);
    const [theme, setTheme] = useState("light");
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

    const contextValues = {
        theme,
        setTheme,
    };

    const fetchProjects = async () => {
        try {
            const res = await fetch(
                "http://localhost:8888/headless-cms/wp-json/wp/v2/pages"
            );
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
            <ThemeContext.Provider value={contextValues}>
                <Main onPointerMove={setCoordinates}>
                    <Dot coordinates={coordinates} />

                    <ThemeSwitcher />
                    <BrowserRouter>
                        <nav className="menu">
                            <Link to="/">Projects</Link>
                            <Link to="/about">About</Link>
                        </nav>
                        <Routes>
                            <Route
                                path="/"
                                element={<Home projects={projects} />}
                            />
                            <Route path="/about" element={<About />} />
                            <Route path="/:slug" element={<ProjectPage />} />
                        </Routes>
                    </BrowserRouter>
                </Main>
            </ThemeContext.Provider>
        </>
    );
}

// function Content({ children }) {
//     const { theme } = useContext(ThemeContext);
//     return <main className={theme}>{children}</main>;
// }

function Home({ projects }) {
    return (
        <div className="project-cards">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
}
function About() {
    return <div>Here will be a page about me.</div>;
}
