// ApTo.jsx
import React from "react";

// Project data constant
export const AptoProjectData = {
    id: 2,
    date: "2022",
    slug: "apto-app",
    title: { rendered: "APTO — App Design" },
    _links: {
        featuredmedia: [{ href: "/images/APTO-featured.png" }],
    },
};

export default function ApTo() {
    return (
        <div>
            <h1>{AptoProjectData.title.rendered}</h1>
            <p className="project-meta">
                Marta Wlusek | UX/UI Design | APTO ({AptoProjectData.date})
            </p>
            <img
                src={AptoProjectData._links.featuredmedia[0].href}
                alt={AptoProjectData.title.rendered}
                style={{ maxWidth: "100%" }}
            />
            <h2>App Definition</h2>
            <p>
                An app for keen out-goers who want to search for and discover
                interesting places to visit in a specified city or area and then
                save their searches and favourite places to an intuitive,
                minimal, and easy-to-use app.
            </p>
            <p>
                The users can save their findings to an uncomplicated app with
                an intuitive interface to plan their visits in advance or refer
                to already visited places. They can narrow their search results
                to the highest-rated and most reviewed businesses and preview
                them on a map, see star ratings, and read top reviews in the
                app.
            </p>
            <h3>Tagline:</h3>
            <em>Like a travel planner, but also for locals</em>
            <h3>App roles:</h3>
            <ul>
                <li>
                    <b>Social:</b> People who want to discover new places to
                    visit in their own town, who like to eat out, who like to
                    travel.
                </li>
                <li>
                    <b>Functional:</b> People who like to be organized, who like
                    to take notes, who like to plan things and save time.
                </li>
                <li>
                    <b>Political:</b> People who want to support local or new
                    initiatives.
                </li>
                <li>
                    <b>Personal Growth:</b> People who are adventurous and want
                    to experience new things in life.
                </li>
            </ul>
            <h3>Persona:</h3>
            <p>
                Jeni, 40 years old, single, primary art teacher, lives in
                Berlin, knows her city very well but needs to constantly
                discover new things to do in her town.
            </p>
            <img
                src="/images/APTO-user_flow.png"
                alt="APTO app user flow"
                style={{ maxWidth: "100%", marginTop: "1rem" }}
            />
            <h3>Client/Designer Goals:</h3>
            <ol>
                <li>Provide a useful app</li>
                <li>Support local or new organizations and businesses</li>
                <li>Connect to the businesses</li>
            </ol>
            <h2>Wireframes</h2>
            <img
                src="/images/APTO-wireframes.png"
                alt="APTO app wireframes"
                style={{ maxWidth: "100%" }}
            />
            <h2>Specifications</h2>
            <img
                src="/images/APTO-specifications.png"
                alt="APTO app specifications"
                style={{ maxWidth: "100%" }}
            />
            <img
                src="/images/APTO-design.png"
                alt="APTO app design system"
                style={{ maxWidth: "100%", marginTop: "1rem" }}
            />
            <h2>Prototype</h2>
            <img
                src="/images/APTO-prototype.gif"
                alt="Apto - Prototype"
                style={{ maxWidth: "100%" }}
            />
            <p>
                To test it yourself in Figma{" "}
                <a
                    href="https://www.figma.com/proto/nVQC4IiwZ9sfKd0DjRDUvY/DoWo?node-id=283%3A1056&scaling=scale-down&page-id=0%3A1&starting-point-node-id=645%3A741&hide-ui=1"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <strong>click here</strong>
                </a>
            </p>
        </div>
    );
}
