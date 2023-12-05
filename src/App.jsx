import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ProjectCard from "/components/ProjectCard";
import ProjectPage from "/components/ProjectPage";
import ThemeContext from "/components/ThemeContext";
import ThemeSwitcher from "/components/ThemeSwitcher";
import { useContext } from "react";
import "./App.css";

export default function App() {
    const [projects, setProjects] = useState([]);
    const [theme, setTheme] = useState("dark");

    const contextValues = {
        theme,
        setTheme,
    };

    const fetchProjects = async () => {
        try {
            const res = await axios.get(
                "http://localhost:8888/headless-cms/wp-json/wp/v2/pages"
            );

            setProjects(res.data);
        } catch (error) {
            console.error("Error fetching projects:", error);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <ThemeContext.Provider value={contextValues}>
            <Content>
                <ThemeSwitcher />
                <BrowserRouter>
                    <div>
                        <Link to="/">Projects</Link>
                    </div>
                    <Routes>
                        <Route
                            path="/"
                            element={<ProjectList projects={projects} />}
                        />
                        <Route path="/:slug" element={<ProjectPage />} />
                    </Routes>
                </BrowserRouter>
            </Content>
        </ThemeContext.Provider>
    );
}

function ProjectList({ projects }) {
    return (
        <div style={{ display: "flex" }}>
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
}

function Content({ children }) {
    const { theme } = useContext(ThemeContext);
    return <div className={theme}>{children}</div>;
}
