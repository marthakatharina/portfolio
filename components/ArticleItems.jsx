import "./ArticleItems.css";

// Function to format a given date string
function formatDate(inputText) {
    const inputDate = new Date(inputText);
    const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
    };
    return inputDate.toLocaleDateString(undefined, options);
}

// Component to render article items
export default function ArticleItems({ article, index }) {
    // Extract content and format date for rendering
    const formattedDate = formatDate(article.date_published);

    return (
        <article>
            <div className="article--card" key={index}>
                <img
                    className="article--img"
                    src={article.image}
                    alt={article.title}
                />

                <div className="article--body">
                    <div className="article--meta">
                        <p className="article--author">
                            {article.authors[0].name}
                        </p>
                        <span>·</span>
                        <p className="article--date">{formattedDate}</p>
                    </div>
                    <div className="article--header">
                        <h3 className="article--title">{article.title}</h3>

                        <p
                            className="article--description"
                            dangerouslySetInnerHTML={{
                                __html: article.content_text,
                            }}
                        />
                    </div>
                    <div className="article--button">
                        <a
                            href={article.url}
                            target="_blank"
                            className="article--link"
                            rel="noreferrer"
                        >
                            Read more{" "}
                            <i className="bx bx-right-arrow-alt article__button-icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
}
