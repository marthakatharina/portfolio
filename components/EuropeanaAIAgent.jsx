import React from "react";
import "./EuropeanaAIAgent.css";

// Project data constant
export const EuropeanaAIAgentProjectData = {
    id: 3,
    date: "2025",
    slug: "europeana-ai-agent",
    title: {
        rendered: "Europeana AI Assistant — AI Agent",
    },
    _links: {
        featuredmedia: [{ href: "/images/EuropeanaAIAgent - featured.png" }],
    },
};

export default function EuropeanaAIAgent() {
    return (
        <>
            <h1>{EuropeanaAIAgentProjectData.title.rendered}</h1>
            <p className="project-meta">
                Marta Wlusek | Product Design |{" "}
                {EuropeanaAIAgentProjectData.date}
            </p>
            <img
                src={EuropeanaAIAgentProjectData._links.featuredmedia[0].href}
                alt="Europeana AI Assistant"
                style={{ maxWidth: "100%" }}
            />
            <h2>What is Europeana?</h2>
            <p>
                Europeana is a digital platform, launched by the European
                Commission, which provides access to millions of digitized
                cultural heritage items, mostly from European institutions.​
            </p>
            <figure>
                <img
                    src={"/images/EuropeanaObjects.png"}
                    alt="Europeana Objects"
                    style={{ maxWidth: "100%" }}
                />
                <figcaption>
                    Image Source: Screenshot from{" "}
                    <a
                        href="https://www.europeana.eu/en/about-us"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Europeana.eu
                    </a>
                </figcaption>
            </figure>
            <h2>Problem Definition</h2>
            <p>
                Users exploring digital cultural assets often encounter
                irrelevant and cluttered search results, as well as a lack of
                contextual information, when navigating classical search
                interfaces, such as those of Europeana.
            </p>
            <h3>Hypothesis:</h3>
            <p>
                Generative, chat-based AI that adhers to the cultural heritage
                data principles: Findable, Accessible, Interoperable, Reusable
                (FAIR)
            </p>
            <p>An AI Agent for Europeana can:</p>
            <ul className="no-bullets">
                <li>
                    💡 Enhance intuitive and efficient discovery of cultural
                    heritage <span className="inline-bracket">(Findable)</span>
                </li>
                <li>
                    💡 Reduce search time, making resources more accessible{" "}
                    <span className="inline-bracket">(Accessible)</span>
                </li>
                <li>
                    💡 Improve understanding and engagement with cultural assets{" "}
                    <span className="inline-bracket">(Reusable)</span>
                </li>
                <li>
                    💡 Boost usage of digital heritage platforms{" "}
                    <span className="inline-bracket">(Interoperable)</span>
                </li>
                <li>
                    💡 Promote ethical and responsible AI in public applications{" "}
                    <span className="inline-bracket">
                        (Bonus: aligns with EU AI Act and relevant ISO
                        standards)
                    </span>
                </li>
            </ul>
            <h3>User Research:</h3>
            <p>
                I conducted formative research with Europeana.eu users. The
                survey was distributed via Europeana’s mailing lists.
                Quantitative data were analyzed using Python.​ ​
            </p>
            <h4>
                Identified <span className="italic">Painpoints</span> in order
                of importance:
            </h4>
            <div className="center">
                <ol className="no-bullets">
                    <li>① Spending too much time to find relevant items</li>
                    <li>② Irrelevant search results​</li>
                    <li>③ Too many search results​</li>
                    <li>④ Too broad search results​</li>
                    <li>⑤ Difficulty refining searches</li>
                    <li>⑥ Lack of context about objects</li>
                </ol>
            </div>
            <figure>
                <img
                    src={"/images/EuropeanaDataAnalysis.png"}
                    alt="Data analysis"
                    style={{ maxWidth: "100%" }}
                />
                <figcaption>
                    Data analyzed with Python: The features "Basic search by
                    keyword", "Search filters", and "Advanced search" cost users
                    too much time to find information on Europeana.eu
                </figcaption>
            </figure>

            <h4>
                The most common <span className="italic">opinions</span> about
                AI Agents:
            </h4>
            <img
                src={"/images/EuropeanaDataAnalysis-2.png"}
                alt="Data analysis"
                style={{ maxWidth: "100%" }}
            />

            <h2>Idea Development</h2>
            <p>The research insights informed the following design ideas:</p>
            <ul className="no-bullets">
                <li>
                    💡 An AI agent as a complementary tool to the classic search
                    interface.
                </li>
                <li>
                    💡 Filters that can be combined directly in the chat input.
                </li>
                <li>💡 Dynamic prompt suggestions.</li>
                <li>
                    💡 Context view that explains the historical background,
                    geographical references or thematic connections of objects.
                </li>
            </ul>
            <p>
                Based on the analysis of user journey mapping and use case
                scenarios, the following{" "}
                <span className="italic">activity model</span> was developed,
                which guided the definition of MVP functionality.
            </p>
            <div className="table-container">
                <div className="table-row">
                    <div className="table-cell-left">
                        <p className="activity">Search</p>
                    </div>
                    <div className="table-cell-right">
                        <p>
                            Prompt with text or image, or per suggestion prompt
                        </p>
                    </div>
                </div>

                <div className="table-row">
                    <div className="table-cell-left">
                        <p className="activity">Refine</p>
                    </div>
                    <div className="table-cell-right">
                        <p>
                            Filter options and dynamic prompts direct in chat
                            input
                        </p>
                    </div>
                </div>

                <div className="table-row">
                    <div className="table-cell-left">
                        <p className="activity">Evaluate</p>
                    </div>
                    <div className="table-cell-right">
                        <p>"Explain Context" and "Verify Facts" buttons</p>
                    </div>
                </div>

                <div className="table-row">
                    <div class="table-cell-left">
                        <p className="activity">Save</p>
                    </div>
                    <div class="table-cell-right">
                        <p>Save media and bookmark answers, export and share</p>
                    </div>
                </div>
            </div>

            <h2>Prototype</h2>
            <h2>Usability testing</h2>
            <h2>Future implementation & Research</h2>
        </>
    );
}
