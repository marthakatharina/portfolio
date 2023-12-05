// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// //import PostCard from "/components/PostCard";
// import ProjectCard from "/components/ProjectCard";
// import ProjectPage from "/components/ProjectPage";

// export default function App() {
//     //  const [posts, setPosts] = useState([]);
//     const [pages, setPages] = useState([]);
//     const [projects, setProjects] = useState([]);

//     // const fetchPosts = async () => {
//     //     try {
//     //         const res = await axios.get(
//     //             "http://localhost:8888/headless-cms/wp-json/wp/v2/posts"
//     //         );

//     //         setPosts(res.data);
//     //     } catch (error) {
//     //         console.error("Error fetching data:", error);
//     //     }
//     // };
//     const fetchProjects = async () => {
//         try {
//             const res = await axios.get(
//                 "http://localhost:8888/headless-cms/wp-json/wp/v2/pages"
//             );

//             setProjects(res.data);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     };
//     const fetchPages = async () => {
//         try {
//             const res = await axios.get(
//                 "http://localhost:8888/headless-cms/wp-json/wp/v2/pages"
//             );

//             setPages(res.data);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     };

//     useEffect(() => {
//         // fetchPosts();
//         fetchProjects();
//         fetchPages();
//     }, []);

//     return (
//         <>
//             {/* <div>
//                 {posts.map((item) => (
//                     <PostCard post={item} />
//                 ))}
//             </div> */}
//             <BrowserRouter>
//                 <Link to={`/`}>Projects</Link>
//                 <br />
//                 {/* <Link to={`/project1`}>Project1</Link> */}
//                 <Routes>
//                     <Route path="/" />
//                     {/* <Route path="/project1" Component={fetchPages} /> */}
//                 </Routes>
//             </BrowserRouter>
//             <div>
//                 {projects.map((item) => (
//                     <ProjectCard project={item} />
//                 ))}
//             </div>
//             <div>
//                 {pages.map((item) => (
//                     <ProjectPage page={item} />
//                 ))}
//             </div>
//         </>
//     );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ProjectCard from "/components/ProjectCard";
import ProjectPage from "/components/ProjectPage";

export default function App() {
    const [projects, setProjects] = useState([]);

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
        <BrowserRouter>
            <div>
                <Link to="/">Projects</Link>
            </div>
            <Routes>
                <Route path="/" element={<ProjectList projects={projects} />} />
                <Route path="/:slug" element={<ProjectPage />} />
            </Routes>
        </BrowserRouter>
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
