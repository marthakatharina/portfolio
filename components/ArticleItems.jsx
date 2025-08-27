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
// Function to extract image from HTML string using regex patterns
function extractImageFromDescription(htmlString) {
    const imgPattern = /<img[^>]*src="([^"]+)"[^>]*>/;
    const imgMatch = htmlString.match(imgPattern);

    return imgMatch ? imgMatch[1] : null;
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
    // Extract image, content and format date for rendering
    const thumbnailSrc =
        article.thumbnail || extractImageFromDescription(article.description);
    const content = extractContent(article.description);
    const formattedDate = formatDate(article.pubDate);

    return (
        <div className="article--card" key={index}>
            <a
                href={article.link}
                target="_blank"
                className="articleImage--link"
                rel="noreferrer"
            >
                <img
                    className="article--img"
                    src={thumbnailSrc}
                    alt={article.title}
                />
            </a>

            <div className="article--meta">
                <p className="article--author">{article.author}</p>
                <span>·</span>
                <p className="article--date">{formattedDate}</p>
            </div>
            <div className="article--body">
                <div className="article--header">
                    <h3 className="article--title">{article.title}</h3>
                    <p className="article--description">{content}</p>
                </div>
                <div className="article--button">
                    <a
                        href={article.link}
                        target="_blank"
                        className="article--link"
                        rel="noreferrer"
                    >
                        Read more →
                    </a>
                </div>
            </div>
        </div>
    );
}
