import React from "react";
import "./ImageTagExtractor.css";

// Project data constant
export const ImageTagExtractorProjectData = {
    id: 4,
    date: "2025",
    slug: "image-tag-extractor",
    title: {
        rendered: "Image Tag Extractor for Omeka — ML object detection",
    },
    _links: {
        featuredmedia: [{ href: "/images/ImageTagExtractor - featured.png" }],
    },
};

export default function ImageTagExtractor() {
    return (
        <>
            <h1 className="project-title">
                {ImageTagExtractorProjectData.title.rendered}
            </h1>
            <p className="project-meta">
                <a href="/">Marta Wlusek</a> | Product Design & Development |{" "}
                {ImageTagExtractorProjectData.date}
            </p>
            <img
                src={ImageTagExtractorProjectData._links.featuredmedia[0].href}
                alt="Image Tag Extractor"
                style={{ maxWidth: "100%" }}
            />
            <h2>What is Omeka?</h2>
            <p>
                Omeka is an open-source content management system widely used in
                Digital Humanities for curating, preserving, and sharing digital
                editions. It allows curators to build interactive collections
                and exhibitions enriched with standardized metadata and
                user-generated tags.
            </p>

            <h2>Problem Definition</h2>
            <p>
                Tagging and metadata management in Omeka are essential for
                organising and retrieving digital heritage content, but the
                manual process is time-consuming and inconsistent. Users often
                forget previously used tags, create duplicates (e.g.,
                “marketstall” vs. “market stall”), and struggle with maintaining
                tagging consistency across large collections.
            </p>

            <h3>Hypothesis:</h3>
            <p>
                An AI/ML-powered tagging system for Omeka can automatically
                extract and suggest relevant tags from uploaded images,
                supporting cultural heritage professionals while keeping human
                validation at the centre of the process.
            </p>

            <div className="flex">
                <h4 className="two-col">
                    The <span className="italic">AI Tagging Plugin</span> aims
                    to:
                </h4>
                <ul className="no-bullets two-col">
                    <li>💡 Automate image-based tag suggestions.</li>
                    <li>💡 Maintain consistency by reusing previous tags.</li>
                    <li>
                        💡 Allow curators to validate, edit, or reject tag
                        suggestions.
                    </li>
                    <li>
                        💡 Enhance discoverability and metadata quality in Omeka
                        collections.
                    </li>
                </ul>
            </div>

            <h2>User Research</h2>
            <p>
                Four Omeka users participated in a formative research to uncover
                their tagging challenges.
            </p>
            <div className="flex">
                <h4 className="two-col">
                    Top 4 tagging <span className="italic">pain points</span>:
                </h4>
                <ul className="no-bullets two-col">
                    <li>① Manual tagging is time-consuming.</li>
                    <li>② Consistency across tags is hard to maintain.</li>
                    <li>③ No easy way to reuse or manage existing tags.</li>
                    <li>
                        ④ Difficulties aligning tags with controlled
                        vocabularies.
                    </li>
                </ul>
            </div>

            <h2>User Scenario</h2>
            <p>
                Emma, a digital curator, struggles with repetitive manual
                tagging in Omeka. She spends hours assigning tags, often unsure
                whether she’s used, for example, “Apple” or “Apple logo” before.
                The tagging system is designed to support Emma by suggesting
                consistent and relevant tags automatically, saving time,
                reducing cognitive load, and enhancing productivity.
            </p>

            <h2>System Requirements</h2>
            <div className="flex">
                <h4 className="two-col">
                    <span className="italic">Must-Have</span> requirements:
                </h4>
                <ul className="no-bullets two-col">
                    <li>✅ Automatic tag suggestions via AI/ML classifier.</li>
                    <li>✅ Option to validate or reject tags.</li>
                    <li>✅ Display and reuse of previously applied tags.</li>
                </ul>
            </div>
            <div className="flex">
                <h4 className="two-col">
                    <span className="italic">Should-Have</span> requirements:
                </h4>
                <ul className="no-bullets two-col">
                    <li>
                        💡 Tracking of tag frequency and common combinations.
                    </li>
                    <li>
                        💡 Machine learning model training by the end-users.
                    </li>
                    <li>
                        💡 Integration with external controlled vocabularies and
                        thesauri.
                    </li>
                </ul>
            </div>
            <div className="flex">
                <h4 className="two-col">
                    <span className="italic">Could-Have</span> requirements:
                </h4>
                <ul className="no-bullets two-col">
                    <li>❓ Multi-language tagging suggestions.</li>
                    <li>
                        ❓ Analytics on tag usage trends and inconsistencies.
                    </li>
                </ul>
            </div>
            <div className="flex">
                <h4 className="two-col">
                    <span className="italic">Won’t-Have</span> requirements:
                </h4>
                <ul className="no-bullets two-col">
                    <li>❌ Full automation without human validation.</li>
                </ul>
            </div>

            <h2>Prototype</h2>
            <p>
                The prototype, built with HTML, CSS, and JavaScript, integrates
                the{" "}
                <a
                    href="https://ml5js.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <strong>ml5.js</strong>
                </a>{" "}
                image classifier (MobileNet model) to extract visual tags from
                uploaded images. It includes an intuitive interface for
                selecting, editing, and saving tags.
            </p>

            <div className="flex">
                <figure className="two-col">
                    <img
                        src="/images/iPhoneDemo_1.gif"
                        alt="Image Tag Extractor - Prototype"
                        style={{ maxWidth: "100%" }}
                    />
                    <figcaption>
                        Figure 1: Uploading first image - receiving tag
                        suggestions.
                    </figcaption>
                </figure>

                <figure className="two-col">
                    <img
                        src="/images/iPhoneDemo_2.gif"
                        alt="Image Tag Extractor - Prototype"
                        style={{ maxWidth: "100%" }}
                    />
                    <figcaption>
                        Figure 2: Uploading subsequent image - workflow.
                    </figcaption>
                </figure>
            </div>

            <p>
                You can try it yourself{" "}
                <a
                    href="https://marthakatharina.github.io/Image-Metadata-Enrichment/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <strong>here</strong>
                </a>
                .
            </p>

            <h2>Evaluation</h2>
            <p>
                Users found the system fast and enjoyable but noted a need for
                more detailed feedback (scores), and improved tag accuracy.
            </p>
            <p>
                The prototype demonstrated potential for computational
                enrichment in digital heritage. However, ml5.js struggled with
                historical imagery, emphasizing the need for domain-specific
                training data.{" "}
            </p>
            <p>
                Human validation remains essential to prevent bias and ensure
                interpretive accuracy in cultural contexts.
            </p>
            <p>
                The ML-powered tagging system for Omeka shows strong potential
                to enhance metadata creation and consistency. Future iterations
                will focus on improving ML accuracy with custom-trained models
                and deeper Omeka integration. The project demonstrates how
                human-centered design and AI can together advance digital
                cultural heritage curation.
            </p>

            <p>
                View source code on{" "}
                <a
                    href="https://github.com/marthakatharina/Image-Metadata-Enrichment"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <strong>GitHub</strong>
                </a>
            </p>
        </>
    );
}
