const CleanCSS = require("clean-css");
const markdownIt = require("markdown-it");

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
