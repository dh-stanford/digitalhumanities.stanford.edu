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

   ```sh
   git clone git@github.com:dh-stanford/ digitalhumanities.stanford.edu.git
   ```

   or similar.

2. Install node dependencies

   ```sh
   cd digitalhumanities.stanford.edu
   yarn install --frozen-lockfile
   ```

3. Edit, commit, and push changes as appropriate.

4. Anyone with write privileges on the repo can deploy the site to GitHub Pages using

   ```sh
   yarn gh-deploy
   ```

## Accessibility

This site follows WCAG 2 AA guidelines and includes:

- Skip link for keyboard navigation
- Semantic landmarks and ARIA labels
- Focus management in search modal
- Screen reader-friendly forms and navigation
- Visible focus indicators
- Accessible color contrast

### Testing Accessibility

Run automated accessibility tests with:

```sh
npm run a11y        # Test key pages (home, about, projects)
npm run a11y:full   # Test first 20 pages
```

Tests use @axe-core/cli to check WCAG 2 A, AA, and WCAG 2.1 AA compliance. Note that automated testing catches only 20-50% of accessibility issues - manual testing with screen readers and keyboard navigation is always required.


## Development Notes

This site is built using Eleventy and the templates are ported from the [Mundana Jeykll theme](https://github.com/wowthemesnet/mundana-theme-jekyll).  The Jekyll templates have been minimally adapted for use with Eleventy, and the client-side JS has been stripped and rewritten in modern Javascript so that the dependencies on jQuery, Popper, and the Bootstrap v4 JS could be dropped.
