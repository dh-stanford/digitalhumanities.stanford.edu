---
layout: templates/article
title: "Discovering Regions with ORBIS v2"
submitted_by: Elijah Meeks
submitted_at: 2013-08-19T10:46:29-07:00
post_images:
  - ../post-images/borders.gif
---

[![Animated difference in clusters in ORBIS v2](../post-images/borders.gif)](/sites/g/files/sbiybj8071/f/borders.gif)


A simple demonstration of the kind of higher-level analysis possible with the new cartograms and clustering in the v2 version of ORBIS. This is accomplished entirely within the browser (except for turning it into a gif) first by running cartograms for selected sites (in this case the 9 sites that are labeled by default) according to each priority, then clustering them and then drawing borders around the clusters. Notice the borders are drawn using convex hulls, and so you have overlap on border regions. It may be better (or perhaps provide an interesting alternative) to derive borders using Voronoi diagrams.


