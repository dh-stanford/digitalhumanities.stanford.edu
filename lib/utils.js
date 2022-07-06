const markdownIt = require("markdown-it");
const striptags = require("striptags");

const md = markdownIt();

const renderMarkdown = (markdownString, inline = null) =>
  inline ? md.renderInline(markdownString) : md.render(markdownString);

const extractExcerpt = (article) => {
  if (!article.hasOwnProperty("templateContent")) {
    console.warn(
      'Failed to extract excerpt: Document has no property "templateContent".',
    );
    return null;
  }

  let excerpt = null;
  const content = article.templateContent;

  excerpt = striptags(content)
    .substring(0, 200) // Cap at 200 characters
    .replace(/^\s+|\s+$|\s+(?=\s)/g, "")
    .trim()
    .concat("...");
  return excerpt;
};

module.exports = { renderMarkdown, extractExcerpt };
