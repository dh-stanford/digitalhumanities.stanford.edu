const lunr = require("lunr");

const { extractExcerpt } = require("../lib/utils");

class LunrIndex {
  data() {
    return {
      permalink: "/lunr-index.json",
      eleventyExcludeFromCollections: true,
    };
  }

  render(data) {
    const pages = data.collections.pages;

    const documents = pages.map((page, idx) => ({
      id: idx,
      title: page.data.title,
      url: page.url,
      body: page.templateContent,
      excerpt: extractExcerpt(page),
    }));

    const index = lunr(function () {
      this.ref("id");
      this.field("title");
      this.field("body");
      documents.forEach((doc) => this.add(doc));
    });

    return JSON.stringify({
      index,
      documents: documents.map(({ body, ...doc }) => doc),
    });
  }
}

module.exports = LunrIndex;
