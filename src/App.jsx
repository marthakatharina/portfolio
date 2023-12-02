import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "/components/PostCard";

export default function App() {
    const [posts, setPosts] = useState([]);

    const fetchPosts = () => {
        axios
            .get("http://localhost:8888/headless-cms/wp-json/wp/v2/posts")
            .then((res) => {
                setPosts(res.data);
            });
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div>
            {posts.map((item) => (
                <PostCard post={item} />
            ))}
        </div>
    );
}
