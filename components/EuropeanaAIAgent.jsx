import React from "react";
import "./EuropeanaAIAgent.css";

// Project data constant
export const EuropeanaAIAgentProjectData = {
    id: 3,
    date: "2025",
    slug: "europeana-ai-agent",
    title: {
        rendered: "Europeana AI Search Assistant — AI Agent",
    },
    _links: {
        featuredmedia: [{ href: "/images/EuropeanaAIAgent - featured.png" }],
    },
};

export default function EuropeanaAIAgent() {
    return (
        <>
            <h1 className="project-title">
                {EuropeanaAIAgentProjectData.title.rendered}
            </h1>
            <p className="project-meta">
                <a href="/">Marta Wlusek</a> | Product Designer, UX Researcher,
                AI Agent Developer | {EuropeanaAIAgentProjectData.date}
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
                irrelevant and overwhelming search results, as well as a lack of
                contextual information, when navigating classical search
                interfaces, such as those of Europeana - especially with
                semantic search queries.
            </p>

            <h3>Hypothesis:</h3>
            <p>
                Generative, chat-based AI agent that queries data from Europeana
                and adheres to the cultural heritage data principles: Findable,
                Accessible, Interoperable, Reusable (FAIR)
            </p>

            <div className="flex">
                <h4 className="two-col">
                    An <span className="italic">AI Agent</span> for Europeana
                    can:
                </h4>
                <ul className="no-bullets two-col">
                    <li>
                        💡 Enhance intuitive and efficient discovery of cultural
                        heritage{" "}
                        <span className="inline-bracket">(Findable)</span>
                    </li>
                    <li>
                        💡 Reduce search time, making resources more accessible{" "}
                        <span className="inline-bracket">(Accessible)</span>
                    </li>
                    <li>
                        💡 Improve understanding and engagement with cultural
                        assets{" "}
                        <span className="inline-bracket">(Reusable)</span>
                    </li>
                    <li>
                        💡 Boost usage of digital heritage platforms{" "}
                        <span className="inline-bracket">(Interoperable)</span>
                    </li>
                    <li>
                        💡 Promote ethical and responsible AI in public
                        applications{" "}
                        <span className="inline-bracket">
                            (Bonus: aligns with EU AI Act and relevant ISO
                            standards)
                        </span>
                    </li>
                </ul>
            </div>
            <h3>User Research:</h3>
            <p>
                I conducted formative research with Europeana.eu users. The
                survey was distributed via Europeana’s mailing lists.
                Quantitative data were analyzed using Python.​ ​
            </p>
            <div className="flex">
                <h4 className="two-col">
                    Identified <span className="italic">Painpoints</span> in
                    order of importance:
                </h4>
                <ol
                    className="no-bullets two-col"
                    style={{ marginTop: "1rem" }}
                >
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

            <h2>Idea Development</h2>
            <div className="flex">
                <h4 className="two-col">
                    The research <span className="italic">insights</span>{" "}
                    informed the following design ideas:
                </h4>
                <ul className="no-bullets two-col">
                    <li>
                        💡 An AI agent as a complementary tool to the classic
                        search interface.
                    </li>
                    <li>
                        💡 Filters that can be combined directly in the chat
                        input.
                    </li>
                    <li>💡 Dynamic prompt suggestions.</li>
                    <li>
                        💡 Context view that explains the historical background,
                        geographical references or thematic connections of
                        objects.
                    </li>
                </ul>
            </div>
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
                        <p>
                            Save media and bookmark answers, download, export,
                            and share
                        </p>
                    </div>
                </div>
            </div>

            <h2>Prototype</h2>
            <p>
                Here is a demo of the first itearation of the MVP prototype
                created in Figma, explaining usability testing tasks performed
                by users.
            </p>
            <iframe
                className="EuropeanaDemo"
                style={{ borderRadius: "14px" }}
                width="100%"
                height="642"
                src="https://www.youtube.com/embed/IJo6cFcxd8I?si=FjeDoX9br9WRdMir"
                title="Europeana AI Agent - Usability Testing Demo"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            />
            <h2>Usability Testing</h2>
            <p>
                Qualitative feedback was collected using two methods: think
                aloud, conducted with 2 users (including one pilot tester), and
                online asynchronous usability testing, in which 2 users provided
                their responses and feedback after completing the tasks on their
                own schedule.{" "}
            </p>
            <div className="flex">
                <h4 className="two-col">
                    Problems were observed with "Explain Context" &
                    "Verify Facts" buttons in the{" "}
                    <span className="italic">first iteration</span> of the
                    design:
                </h4>
                <ul className="no-bullets two-col">
                    <li>
                        ⚠️ Some users struggled to locate and interpret the
                        functions.
                    </li>
                    <li>
                        ⚠️ "Verify Facts" in particular caused confusion and was
                        not easily findable.
                    </li>
                    <li>
                        ⚠️ Both A/B tested icons for "Verify Facts" did not
                        match their mental models.
                    </li>
                    <li>
                        ⚠️ All users had different expectations regarding the
                        implementation of the fact-checking function and the
                        choice of icon to represent it.
                    </li>
                </ul>
            </div>
            <div className="flex">
                <h4 className="two-col">
                    The insights were used to refine and improve these
                    functionalities in the{" "}
                    <span className="italic">second iteration</span> of the
                    design.
                </h4>
                <p className="two-col">
                    The "Verify Facts" button was replaced with a toggle button
                    allowing the user to switch between a faster and concise
                    response and a slower but fact-verified response.{" "}
                </p>
            </div>

            <div className="table-grid screenshot-column">
                <div className="table-container">
                    <div className="table-row">
                        <img
                            src={"/images/EuropeanaFirstIteration-1.png"}
                            alt="First iteration of Europeana AI Agent"
                            style={{ maxWidth: "100%" }}
                        />
                    </div>

                    <div className="table-row">
                        <img
                            src={"/images/EuropeanaSecondIteration-1.png"}
                            alt="Second iteration of Europeana AI Agent"
                            style={{ maxWidth: "100%" }}
                        />
                    </div>
                </div>

                <div className="table-container">
                    <div className="table-row">
                        <img
                            src={"/images/EuropeanaFirstIteration-2.png"}
                            alt="First iteration of Europeana AI Agent"
                            style={{ maxWidth: "100%" }}
                        />
                    </div>

                    <div className="table-row">
                        <img
                            src={"/images/EuropeanaSecondIteration-2.png"}
                            alt="Second iteration of Europeana AI Agent"
                            style={{ maxWidth: "100%" }}
                        />
                    </div>
                </div>
            </div>

            <p>
                To test it yourself in Figma click{" "}
                <a
                    href="https://www.figma.com/proto/xQFdYs8QLYHnUlWSRLiqWz/AI-Search-Agent?page-id=1%3A2&node-id=15-541&viewport=86%2C312%2C0.12&t=DonWCPSqBEiAhKgm-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=15%3A541&show-proto-sidebar=1"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <strong className="italic">here ↗</strong>
                </a>
            </p>

            <h2>Future Implementation & Research</h2>
            <p>
                The next step, which is already underway, is the development of
                a working prototype using OpenAI tools and the available
                Europeana APIs with data and metadata.
            </p>
            <p>
                The objective of the prototype, that will be measured, is for at
                least 70% of users to find relevant objects within 5 minutes
                using the chat interface and rate their results as helpful.
            </p>
            <p>
                In addition, guidelines on AI systems will be applied as
                usability heuristics to ensure that the Europeana AI Assistant
                is designed with a human-centred approach.​ ​
            </p>
        </>
    );
}
