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
    category: "Shipped",
};

export default function AIActAssistant() {
    return (
        <>
            <h1 className="project-title">
                {AIActAssistantProjectData.title.rendered}
            </h1>
            <p className="project-meta">
                <a href="/">Marta Wlusek</a> |AI Product Manager | {AIActAssistantProjectData.date}
            </p>
            <img
                src={AIActAssistantProjectData._links.featuredmedia[0].href}
                alt="AI Act Assistant"
                style={{ maxWidth: "100%" }}
            />
 <p style={{ textAlign: "center", fontSize: "16px", color: "gray" }}>
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

            <h2> More about the project coming soon!</h2>
        </>
    );
}
