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

// Function to extract content from HTML string using regex patterns
function extractContent(htmlString) {
    // Define regex patterns to match <h4> <p> <strong> <em> tags
    const h4Pattern = /<h4>(.*?)<\/h4>/s;
    const pPattern = /<p>(.*?)<\/p>/s;
    const strongPattern = /<strong>(.*?)<\/strong>/gs;
    const emPattern = /<em>(.*?)<\/em>/gs;

    // Remove <strong> and <em> tags from the HTML string
    htmlString = htmlString.replace(strongPattern, "");
    htmlString = htmlString.replace(emPattern, "");

    // Attempt to match patterns in the HTML string
    const h4Match = htmlString.match(h4Pattern);
    const pMatch = htmlString.match(pPattern);

    // If both <h4> and <p> tags are found, combine their content
    if (h4Match && pMatch) {
        const h4Content = h4Match[1];
        const pContent = pMatch[1];

        return `${h4Content} - ${pContent}`;
    } else if (pMatch) {
        // If only a <p> tag is found, use its content
        const pContent = pMatch[1];
        return pContent;
    }
    // Return null if no suitable content is found
    return null;
}

// Component to render article items
export default function ArticleItems({ article, index }) {
    // Extract content and format date for rendering
    const content = extractContent(article.description);
    const formattedDate = formatDate(article.pubDate);

    return (
        <div className="article__card" key={index}>
            <img
                className="article__img"
                src={article.thumbnail}
                alt={article.title}
            />
            <div className="article__body">
                <div className="article__header">
                    <h3 className="article__title">{article.title}</h3>
                    <p className="article__description">{content}</p>
                    {/* <p
                        className="article__description"
                        dangerouslySetInnerHTML={{
                            __html: article.description,
                        }}
                    /> */}
                </div>
                <div className="article__details">
                    <p className="article__date">{formattedDate}</p>
                    <a
                        href={article.link}
                        target="_blank"
                        className="article__button"
                    >
                        Read more{" "}
                        <i className="bx bx-right-arrow-alt article__button-icon"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}
