const CleanCSS = require("clean-css");
const markdownIt = require("markdown-it");
const striptags = require("striptags");

const md = markdownIt();

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("post-images");
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addCollection("pages", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("./src/*.md")
      .sort(
        (a, b) => new Date(b.data.submitted_at) - new Date(a.data.submitted_at),
      );
  });

  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addShortcode("excerpt", (article) => extractExcerpt(article));

  eleventyConfig.addPairedShortcode(
    "markdown",
    (markdownString, inline = null) =>
      inline ? md.renderInline(markdownString) : md.render(markdownString),
  );

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
  };
};

function extractExcerpt(article) {
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
}
