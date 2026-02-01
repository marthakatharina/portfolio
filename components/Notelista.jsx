import React from "react";
import "./Notelista.css";

// Project data constant
export const NotelistaProjectData = {
    id: 5,
    date: "2026",
    slug: "notelista",
    title: {
        rendered: "notelista.com - Productivity Web App & Website",
    },
    _links: {
        featuredmedia: [{ href: "/images/Notelista-featured.png" }],
    },
    category: "Deployed",
};

export default function Notelista() {
    return (
        <>
            <h1 className="project-title">
                {NotelistaProjectData.title.rendered}
            </h1>
            <p className="project-meta">
                <a href="/">Marta Wlusek</a> |Product Designer, UX/UI Designer,
                UI/Web Developer | {NotelistaProjectData.date}
            </p>
            <img
                src={NotelistaProjectData._links.featuredmedia[0].href}
                alt="Notelista"
                style={{ maxWidth: "100%" }}
            />
            <p style={{ textAlign: "center", fontSize: "16px", color: "gray" }}>
                Link to shipped notelista.com homepage and app{" "}
                <a
                    href="https://notelista.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {" "}
                    <strong className="italic">https://notelista.com ↗</strong>
                </a>
            </p>
            <h2>What is notelista?</h2>
            <p>
                <a
                    href="https://notelista.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <strong className="italic">notelista ↗ </strong>
                </a>{" "}
                is a Progressive Web App I designed and developed as a{" "}
                <strong className="italic">0-1 Product Designer</strong>. The
                project encompasses the complete product lifecycle - from
                initial idea and UX/UI design through web development and
                go-to-market strategy with a dedicated marketing website. The
                app reimagines task management by stripping away complexity.
                It's a responsive PWA, developed with lightweight technologies,
                such as <strong className="italic">HTML</strong>,{" "}
                <strong className="italic">CSS</strong>, and{" "}
                <strong className="italic">JavaScript</strong> that work
                seamlessly across all devices and browsers, offering the
                simplicity of a sticky note with the power of modern web
                technology.
            </p>
            <h2>The App's Value Proposition</h2>
            <p>
                The app's "digital sticky note" concept resonates with users who
                want organization without overwhelming complexity - no account
                creation, no complex features to navigate, just immediate
                productivity.
            </p>
            <div className="flex">
                <h4 className="two-col">
                    Key <span className="italic">features</span> with value
                    propositions:
                </h4>
                <ul className="no-bullets two-col">
                    <li>
                        💡 <b>Simple List Management:</b> Create custom lists
                        for separating to-do and shopping lists without
                        overwhelming clutter.
                    </li>
                    <li>
                        💡 <b>Privacy first:</b> No registration and login
                        required. All data saves automatically to local storage,
                        ensuring your lists are always accessible even offline.
                    </li>
                    <li>
                        💡 <b>Intuitive UI:</b> Tap to complete items with
                        satisfying animations, then delete or batch-clear when
                        ready.
                    </li>
                    <li>
                        💡 <b>Progressive Web App:</b> Install to your home
                        screen for instant access. No app store required, no
                        downloads weighing down your device.
                    </li>
                    <li>
                        💡 <b>Smart Reminders:</b> Push notification system
                        alerts users about uncompleted items.
                    </li>
                </ul>
            </div>
            <h2>Impact</h2>
            <p>
                The design philosophy centers on convenient simplicity,
                accessibility, and privacy of the sticky note - users understand
                the interface instantly with zero learning curve, increasing
                adoption.
            </p>
            <div className="flex">
                <h4 className="two-col">
                    By
                    <span className="italic"> eliminating friction </span>
                    points like mandatory registration and complex navigation
                    notelista delivers:
                </h4>
                <ul className="no-bullets two-col">
                    <li>
                        ✅ <b>Digital Sustainability:</b> Replaces paper sticky
                        notes with reusable digital notes.
                    </li>
                    <li>
                        ✅ <b>Universal Accessibility:</b> Offers simple access
                        across all browsers and devices with no app-store
                        downloads and sign-ups.
                    </li>
                    <li>
                        ✅ <b>Privacy-First Architecture:</b> Data never leaves
                        the user's device, providing complete control and peace
                        of mind.
                    </li>
                </ul>
            </div>
            <h2>End-to-End Execution</h2>
            <p>
                Beyond the core product, I designed and launched a dedicated{" "}
                <strong className="italic">marketing website</strong> featuring
                gradient animations, interactive feature cards, and
                conversion-optimized messaging. The landing page communicates
                the value proposition through clear benefit statements, driving
                conversion with strategic CTAs and browser-based installation
                prompts.
            </p>
            <img
                src="/images/Notelista-website.png"
                alt="Notelista marketing website"
                style={{ maxWidth: "100%" }}
            />
            <p>
                Experience the website and app in the browser at{" "}
                <a
                    href="https://notelista.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <strong className="italic">https://notelista.com ↗</strong>
                </a>
            </p>
        </>
    );
}
