import React from "react";
import { useParams } from "react-router-dom";
import "./ProjectPage.css";
import ImageLightbox from "./ImageLightbox";
import ApTo from "./ApTo";
import AITandem from "./AITandem";
import EuropeanaAIAgent from "./EuropeanaAIAgent";
import ImageTagExtractor from "./ImageTagExtractor";
import Notelista from "./Notelista";

export default function ProjectPage() {
    const { slug } = useParams();

    // Mapping slugs to their respective content components
    const contentMap = {
        "ai-tandem": <AITandem />,
        "apto-app": <ApTo />,
        "europeana-ai-agent": <EuropeanaAIAgent />,
        "image-tag-extractor": <ImageTagExtractor />,
        notelista: <Notelista />,
        // Add other mappings here as needed
    };

    // Dynamically select the content component based on the slug
    const contentComponent = contentMap[slug];

    return (
        <ImageLightbox>
            <div className="page-container">
                {contentComponent ? (
                    contentComponent
                ) : (
                    <h1 className="page-title">Page not found</h1>
                )}
            </div>
        </ImageLightbox>
    );
}
