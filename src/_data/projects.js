const fs = require("fs");
const matter = require("gray-matter");
const path = require("path");

const parseFile = (markdownFile) => {
  const markdownFileContents = fs.readFileSync(markdownFile, "utf-8");
  return matter(markdownFileContents);
};

module.exports = function () {
  return fs
    .readdirSync("./projects/")
    .filter(
      (file) =>
        fs.lstatSync(path.join("./projects/", file)).isFile() &&
        file.endsWith(".md"),
    )
    .map((file) => parseFile(path.join("./projects/", file)));
};
