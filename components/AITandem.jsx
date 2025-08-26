// AITandem.jsx
import React from "react";

// Project data constant
export const AiTandemProjectData = {
    id: 3,
    date: "2023/2024",
    slug: "ai-tandem",
    title: {
        rendered: "AI Tandem — Foreign Language Learning AI Agent",
    },
    _links: {
        featuredmedia: [{ href: "/images/AI Tandem - featured.png" }],
    },
};

export default function AITandem() {
    return (
        <>
            <h1>{AiTandemProjectData.title.rendered}</h1>
            <p className="project-meta">
                Marta Wlusek | Product Design |{AiTandemProjectData.date}
            </p>
            <img
                src={AiTandemProjectData._links.featuredmedia[0].href}
                alt="AI Tandem app"
                style={{ maxWidth: "100%" }}
            />
            <p>
                No time for reading the whole Case Study? Download the project
                presentation in Google Slides{" "}
                <a
                    href="https://docs.google.com/presentation/d/15TsXednx5UM_KJL2y4j3e4ZRgCvF_gUzQHHugdKyIG0/present?slide=id.SLIDES_API1305347420_0"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <strong>here</strong>
                </a>
            </p>
            <h2>Problem Definition</h2>
            <p>
                This project aims to develop AI Tandem, a voice-based
                conversational AI agent designed to help users improve their
                foreign language speaking skills through real-time, synchronous
                conversations with an AI friend and companion.
            </p>
            <p>
                Identifying the problem mirrored in the lack of opportunities
                non-fluent individuals have to practice speaking foreign
                languages, and the challenges this can pose in both personal and
                professional settings, this project aspires to create a
                solution.
            </p>
            <p>
                Initial ideation phase focused on an AI friend for lonely
                people, but this quickly transitioned into a more defined
                application: language learning assistance. Recognizing the
                limitations of existing AI-based conversation models in regard
                to not being trained to understand non-fluent or heavily
                accented speech, the project evolved into the AI Tandem concept.
            </p>
            <p>
                AI Tandem is designed to recognize and adapt to speech loaded
                with foreign accents and common grammatical errors, something
                even experienced human teachers may struggle with. This solution
                will offer non-fluent speakers a judgment-free and supportive
                environment to practice a language with a virtual AI friend and
                companion that is specifically trained to understand non-fluent
                language speakers and guide them toward improvement in a
                personalized, adaptive manner.
            </p>
            <h2>User Research</h2>
            <p>
                Initial user research involved open-ended unstructured
                interviews focusing on how potential users learn foreign
                languages and the challenges they face. Key findings include:
            </p>
            <ul>
                <li>
                    <b>Lack of practice opportunities: </b>Many learners lack
                    real-world environments to practice speaking a foreign
                    language on a regular basis.
                </li>
                <li>
                    <b>Grammar and pronunciation support: </b>Receiving
                    constructive feedback on these critical components can be
                    infrequent or inconsistent.
                </li>
                <li>
                    <b>Personalization: </b>Many learners feel a need for a more
                    flexible approach that adapts to their current skill level
                    and provides a tailored learning experience. For example,
                    some interviewees emphasized the need for adaptable settings
                    and potentially supplementing with explanations and
                    translations in the user's native language.
                </li>
            </ul>
            <h2>User Needs</h2>
            <p>
                To better understand the target audience, a Persona was created
                for Joanna, a new arrival to Sweden looking to improve her
                Swedish to pursue a marketing career. The Jobs-to-Be-Done (JTBD)
                framework was used to identify Joanna’s goals, problems, and
                needs. Overlaying these needs with the AI Tandem service
                persona's behavioral traits reveals a potential for alignment
                and the formation of a successful relationship to support
                Joanna’s goals.
            </p>
            <img
                src="/images/AI Tandem - Jobs to be Done.jpeg"
                alt="User's JTBD"
                style={{ maxWidth: "100%" }}
            />
            <h2>Personas</h2>
            <p>
                Understanding both the user and the AI agent as personas is
                crucial for effective interaction and user experience.
            </p>

            <h3>
                <em>User Persona: </em>Joanna
            </h3>

            <p>
                <b>Background: </b>A recent migrant to Sweden with previous
                experience in marketing, but with limited Swedish language
                skills.
            </p>
            <p>
                <b>Goals: </b>Improve Swedish for career development, gain
                conversational fluency, and overcome anxiety associated with
                speaking a non-fluent language.
            </p>
            <p>
                <b>Pain points: </b>Lack of Swedish-speaking networks,
                difficulty finding consistent practice opportunities, and fear
                of making mistakes when speaking.
            </p>
            <p>
                <b>Motivations: </b>Career advancement, a desire to integrate
                socially, and the wish to build confidence and feel more at ease
                when using Swedish.
            </p>
            <br />

            <h3>
                <em>AI Agent Persona: </em>AI Tandem
            </h3>

            <p>
                <b>Character: </b>Patient, supportive, encouraging, and
                non-judgmental.
            </p>
            <p>
                <b>Capabilities: </b>
            </p>
            <ul>
                <li>Adapts speech pace and vocabulary to the user's level.</li>
                <li>
                    Recognizes common grammar and pronunciation errors specific
                    to the language being learned and the learner’s language
                    background.
                </li>
                <li>
                    Provides contextually relevant corrections and suggests
                    alternative words and phrasings for vocabulary expansion.
                </li>
                <li>
                    Engages in personalized, topic-driven conversations that
                    reflect the user's interests.
                </li>
                <li>
                    Remembers previous interactions, personal information shared
                    by the user, and tracks learning progress.
                </li>
            </ul>
            <img
                src="/images/AI Tandem - Persona.png"
                alt="AI Tandem service persona"
                style={{ maxWidth: "100%" }}
            />
            <h2>Adaptivity & Personalization in User Journey</h2>
            <p>
                Here's a breakdown of how adaptivity and personalization would
                be integrated into each stage of Joanna's customer journey map:
            </p>
            <ol>
                <li>
                    <b>Onboarding</b>
                </li>
                <p>
                    <em>Adaptivity: </em>Short language assessment to gauge
                    Joanna's initial fluency. AI Tandem adjusts initial
                    conversation complexity accordingly.
                </p>
                <p>
                    <em>Personalization: </em>Joanna sets her learning goals
                    (conversational fluency, specific career vocabulary, etc.)
                    and indicates personal interests for conversation topics.
                </p>
                <li>
                    <b>Initial Engagement</b>
                </li>
                <p>
                    <em>Adaptivity: </em>AI Tandem continuously monitors speech
                    patterns, recognizing recurring errors or vocabulary gaps
                    (specific to Joanna’s native language) and provides
                    corrections.
                </p>
                <p>
                    <em>Personalization: </em>AI Tandem initiates conversations
                    on topics that match Joanna's interests.
                </p>
                <li>
                    <b>Personalized Interaction</b>
                </li>
                <p>
                    <em>Adaptivity: </em>As Joanna progresses, AI Tandem
                    increases conversational complexity, introduces new
                    vocabulary, and encourages her to practice more advanced
                    grammatical structures.
                </p>
                <p>
                    <em>Personalization: </em>Based on interests and previous
                    conversations, AI Tandem suggests relevant topics. Joanna
                    could potentially even provide news articles or other texts
                    for conversational analysis.
                </p>
                <li>
                    <b>Progress Tracking</b>
                </li>
                <p>
                    <em>Adaptivity: </em>Data analytics track Joanna's
                    improvement over time, decreasing the frequency of
                    corrections for common mistakes and increasing the
                    complexity of conversations.
                </p>
                <p>
                    <em>Personalization: </em>Specific feedback on progress
                    toward Joanna's initial goals is regularly provided.
                </p>
                <li>
                    <b>Continuous Development</b>
                </li>
                <p>
                    <em>Adaptivity: </em>Even as Joanna reaches higher fluency,
                    AI Tandem continues to monitor speech and offer targeted
                    practice, helping with fine-tuning and refinement.
                </p>
                <p>
                    <em>Personalization: </em>AI Tandem can introduce more
                    complex, niche, or formal topics that align with Joanna’s
                    interests, growing language needs and personal development.
                </p>
            </ol>
            <img
                src="/images/AI Tandem - Customer Journey Map - Customer Journey Map.jpeg"
                alt="Customer Journey Map"
                style={{ maxWidth: "100%" }}
            />
            <p>
                The success of AI Tandem depends on Joanna’s engagement and her
                perception of value. The service needs to maintain a
                personalized, empathetic feel and demonstrate clear progress,
                motivating continued use.
            </p>
            <h2>Design Requirements</h2>
            <p>
                The project design prioritizes an adaptive, conversation-driven
                approach to language learning.
            </p>
            <ul>
                <p>AI Tandem features include:</p>
                <li>
                    <b>Synchronous Voice and Video Communication</b> - simulates
                    real-time language interactions.
                </li>
                <li>
                    <b>Adaptive Difficulty and Personalization</b> - assesses
                    the user's level and tailors conversations accordingly.
                </li>
                <li>
                    <b>Grammar and Pronunciation Correction</b> - provides
                    targeted feedback and suggests alternative words for
                    vocabulary expansion.
                </li>
            </ul>
            <p>
                The design process incorporated user feedback from the initial
                research stage and considered guidelines for human-AI
                interaction (Amershi et al., 2019) and design principles from
                Wärnestål (2022).
            </p>
            <ul>
                <p>Selected guidelines emphasise:</p>
                <li>
                    <b>Clarity</b> - defining what AI Tandem can and cannot do.
                </li>
                <li>
                    <b>Memory</b> - remembering recent interactions for
                    seamless, progressive conversations.
                </li>
                <li>
                    <b>Bias Awareness</b> - ensuring the service avoids making
                    assumptions or reinforcing stereotypes through language or
                    tone.
                </li>
            </ul>
            <ul>
                <p>Key design requirements include:</p>
                <li>
                    <b>Ease of Use and Engagement</b> - AI Tandem must be
                    intuitive to use and engaging for users so they return to
                    the service regularly.
                </li>
                <li>
                    <b>Feedback</b> - providing clear feedback to users
                    regarding their progress and areas for improvement is
                    crucial for maintaining engagement and a sense of
                    accomplishment.
                </li>
            </ul>
            <p>
                The design of AI Tandem emphasizes seamless user onboarding and
                a personalized, adaptive feedback loop to facilitate effective
                language learning.
            </p>
            <img
                src="/images/AI Tandem - User Flow.png"
                alt="User Flow"
                style={{ maxWidth: "100%" }}
            />
            <h2>Designing Onboarding</h2>
            <p>
                The onboarding process is critical for establishing a tailored
                learning service and experience. Here's how it functions:
            </p>
            <p>
                <b>AI Tandem Introduction:</b> A brief introduction to how AI
                Tandem functions clarifies its capabilities and limitations,
                setting realistic expectations for the user.
            </p>
            <p>
                <b>Initial Questionnaire:</b> Joanna begins with answering a few
                basic questions to determine her age group, native language(s),
                language learning background, and desired languages along with
                their current levels. This step is crucial for learnability of
                AI Tandem, ensuring the AI's models are trained and algorithms
                adjusted, so that the user can receive a tailored, adaptable and
                valuable language learning experience.
            </p>
            <img
                src="/images/AI Tandem - Onboarding.png"
                alt="Onboarding process"
                style={{ maxWidth: "100%" }}
            />
            <p>Additional onboarding considerations:</p>
            <p>
                <b>Goal Setting:</b> Joanna outlines her specific goals for
                using AI Tandem (e.g., conversational fluency for daily life,
                preparation for job interviews, focusing on specific skills like
                grammar or pronunciation).
            </p>
            <p>
                <b>Interest Profile:</b> Joanna selects areas of interest (e.g.,
                hobbies, current events, professional topics) to guide AI
                Tandem's conversation starters and content suggestions.
            </p>
            <h2>Designing Feedback Loop</h2>
            <p>
                The core of AI Tandem's design lies in its continuous,
                personalized feedback loop:
            </p>
            <p>
                <b>Real-time Adaptations:</b> During conversations, AI Tandem
                analyzes Joanna's speech patterns, identifying common errors and
                areas for improvement. In real time, it subtly adjusts
                vocabulary complexity and sentence structures to provide
                appropriate challenges.
            </p>
            <p>
                <b>Targeted Corrections:</b> AI Tandem provides real-time
                feedback on pronunciation and grammar. These corrections are
                contextualized within the conversation, ensuring relevance and
                helping Joanna connect the rule to practical application.
            </p>
            <p>
                <b>Vocabulary Expansion:</b> AI Tandem suggests alternative
                words or phrases, aiming to expand Joanna's vocabulary within
                the context of her current knowledge and interests.
            </p>
            <p>
                <b>Progress Tracking:</b> AI Tandem monitors Joanna's
                improvement over time, tracking reductions in errors, expansion
                of vocabulary, and increased fluency. Visual representations of
                this progress (charts, graphs) enhance motivation and
                engagement.
            </p>
            <p>
                <b>User Feedback:</b> Joanna is asked to provide brief feedback
                after some interactions, indicating whether she found the
                conversation's pace and difficulty level appropriate and if she
                understood the provided corrections. This feedback continuously
                fine-tunes the AI's response to Joanna’s specific needs.
            </p>
            <figure>
                <img
                    src="/images/AI Tandem - Feedback Dialog.png"
                    alt="Feedback dialog"
                    style={{ maxWidth: "100%" }}
                />
                <figcaption>
                    The above image represents an end-of-call feedback dialogue.
                </figcaption>
            </figure>
            <p>
                To streamline user feedback and further enhance the adaptive
                learning experience, AI Tandem employs a feedback dialogue
                overlay that appears at the end of a video or voice call
                session. This dialogue can ask for feedback on pace and
                difficulty, i.e., simple prompts for Joanna to rate whether the
                conversation speed and complexity were appropriate. This data
                directly informs the AI’s adaptive adjustments.
            </p>
            <ul>
                <p>
                    The Feedback Dialogue UI element offers the following
                    advantages:
                </p>
                <li>
                    Keeps human in the loop, helping improve and refine AI
                    models.
                </li>
                <li>
                    Captures feedback immediately after the session while the
                    experience is fresh in the user's mind.
                </li>
                <li>
                    The overlay allows for quick, focused feedback without
                    significantly extending the session time or disrupting the
                    conversational flow. Additionally, the user should have the
                    freedom of choice whether to skip the feedback or adjust
                    information in settings.
                </li>
            </ul>
            <h3>Adaptivity & Personalization Within the Feedback Loop</h3>
            <p>
                The power of this feedback loop lies in its ability to adjust to
                Joanna's learning progress in real-time, and in its
                responsiveness to her individual goals and preferences.
            </p>
            <p>
                <b>Adaptivity:</b> If Joanna rapidly masters concepts, AI Tandem
                increases difficulty. If she struggles with specific topics, it
                provides additional focused practice and support. The key is to
                find the optimal 'challenge zone' to encourage growth without
                causing discouragement.
            </p>
            <p>
                <b>Personalization:</b> If Joanna is interested in sports,
                explanations and examples can use sports-related vocabulary.
                This enhances both engagement and memorability.
            </p>
            <p>Additional design considerations:</p>
            <p>
                <b>Interface:</b> The user interface should be intuitive and
                distraction-free, focusing on the voice or video conversation
                aspect. Visual elements augment learning but don't overwhelm the
                user.
            </p>
            <p>
                <b>Gamification:</b> Subtle gamification elements, like points
                or badges, can boost motivation for adolescent users who respond
                positively to them.
            </p>
            <p>
                <b>Error Tolerance:</b> AI Tandem needs to strike a balance
                between correction and allowing natural-sounding speech. A
                system that is too corrective could create frustration and break
                conversational flow. Striking a balance between correcting too
                little (letting mistakes become habits) and correcting too much
                (disrupting conversational flow and confidence) is a key
                challenge in designing the feedback loop.
            </p>
            <p>
                <b>Transparency:</b> Joanna should be able to review her
                progress and feedback history. This helps her understand areas
                for improvement and reinforces her learning journey.
            </p>
            <h2>Summative Evaluation</h2>
            <p>
                Evaluating the AI Tandem prototype will involve qualitative
                methods and user feedback. Key evaluation metrics will focus on:
            </p>
            <ul>
                <li>
                    <b>Effectiveness:</b> Does the service help users improve
                    their language skills?
                </li>
                <li>
                    <b>Usability:</b> Is the interface easy to use, and does it
                    guide users effectively?
                </li>
                <li>
                    <b>Engagement:</b> Do users find AI Tandem engaging and use
                    the service regularly?
                </li>
            </ul>
            <p>
                Feedback from potential users (as seen in the User Research
                section) will continue to be integrated into future development
                iterations. This feedback will guide changes as needed in order
                to increase user satisfaction. Further research into how users
                form an emotional connection with virtual companions as well as
                the impact of visual cues in the learning process will
                contribute to a more user-centered and effective language
                learning service.
            </p>
            <h2>Prototype</h2>
            <p>
                To access the prototype and to see the design in Figma{" "}
                <a
                    href="https://www.figma.com/proto/Y4TWnrDYqo4e7gyopQjmuZ/AI-Tandem-App?type=design&node-id=70-1343&t=gAJkVBq4WlZNtp4i-0&scaling=scale-down&page-id=63%3A1336&starting-point-node-id=70%3A1337&hide-ui=1"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <strong>click here</strong>
                </a>
            </p>
            <iframe
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                width="1000"
                height="700"
                src="https://embed.figma.com/proto/Y4TWnrDYqo4e7gyopQjmuZ/AI-Tandem-App?node-id=70-1343&starting-point-node-id=70%3A1337&embed-host=share"
                allowFullScreen
                title="AI Tandem App Prototype"
            />
        </>
    );
}
