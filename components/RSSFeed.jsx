import React, { useEffect } from "react";
import "./RSSFeed.css";

export default function RSSFeed() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://widget.rss.app/v1/list.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="article--container">
            <div className="article--heading">
                <h1>Medium Articles</h1>
                <p>I write about UX design for AI</p>
            </div>

            <rssapp-list id="G2MwPBVp9LCyGUnf"></rssapp-list>
        </div>
    );
}
