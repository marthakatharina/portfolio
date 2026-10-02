import React from "react";
import "./AIActAssistant.css";

// Project data constant
export const AIActAssistantProjectData = {
    id: 6,
    date: "2026",
    slug: "ai-act-assistant",
    title: {
        rendered: "AI Act Assistant — RAG-chatbot for the EU AI Act",
    },
    _links: {
        featuredmedia: [{ href: "/images/AIActAssistant-featured.png" }],
    },
    category: "Prototype",
};

export default function AIActAssistant() {
    return (
        <>
            <h1 className="project-title">
                {AIActAssistantProjectData.title.rendered}
            </h1>
            <p className="project-meta">
                <a href="/">Marta Wlusek</a> | AI Product Manager | {AIActAssistantProjectData.date}
            </p>
            <img
                src={AIActAssistantProjectData._links.featuredmedia[0].href}
                alt="AI Act Assistant"
                style={{ maxWidth: "100%" }}
            />
 <p style={{ textAlign: "center", fontSize: "16px", color: "#7f7f7f" }}>
                Link to the shipped Lovable prototype{" "}
                <a
                    href="https://ai-act-assistant.lovable.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {" "}
                    <strong className="italic">https://ai-act-assistant.lovable.app/ ↗</strong>
                </a>
               
            </p>

            <h2>AI Act Assistant pitch</h2>

            <iframe
                width="1200"
                height="675"
                src="https://app.heygen.com/embeds/f6793c17d27d4377ae930f22d8391924"
                title="AI Act Assistant"
                frameBorder="0"
                allow="encrypted-media; fullscreen;"
                allowFullScreen
            />

            <h2>More about the project coming soon!</h2>

        </>
    );
}
