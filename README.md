# digitalhumanities.stanford.edu


## Articles

**Articles** are found in the [`src/`](src/) folder; they are in markdown format and can be edited directly in that folder using the GitHub interface if desired.  New posts/pages can also be created there.

**Images** should be placed in the [`post-images/`](post-images/) folder.  Multiple images can be added per article and used in the main content; at least one should be listed in the `post_images` section of the frontmatter -- the first of these will be used on collection pages (others may or may not be used in future).

**Frontmatter** (in YAML) should follow the form:

```md
---
layout: templates/article
title: Your title here
author: Author
date: yyyy-mm-dd
post_images:
  - ../post-images/image.jpg
---

Content in **markdown** goes here :)
```


## Working Locally

1. Checkout the repo using

   ```
   git clone git@github.com:dh-stanford/ digitalhumanities.stanford.edu.git
   ```

   or similar.

2. Install node dependencies

   ```
   cd  digitalhumanities.stanford.edu
   yarn install --frozen-lockfile
   ```

4. Edit, commit, and push changes as appropriate.

5. Anyone with write privileges on the repo can deploy the site to GitHub Pages using

   ```
   yarn gh-deploy
   ```


## Development Notes

This site is built using Eleventy and the templates are ported from the [Mundana Jeykll theme](https://github.com/wowthemesnet/mundana-theme-jekyll).  The Jekyll templates have been minimally adapted for use with Eleventy, and the client-side JS has been stripped and rewritten in modern Javascript so that the dependencies on jQuery, Popper, and the Bootstrap v4 JS could be dropped.
