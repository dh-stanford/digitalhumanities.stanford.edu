---
title: Publicat
layout: templates/page.liquid
permalink: /slavic/projects/Publicat/
scholar: Student_name
---

<h1><span style="transform: scaleY(0.95); display: inline-block;">Publicat</span></h1>

**Georgii Korotkov**

<!-- Add project image here when available:
<img src="/post-images/your-image.jpg" class="img-fluid mb-4" alt="Project image">
-->

## Project Overview

**Publicat** is a fast and scalable web application that converts any structured CSV bibliography into an interactive scholarly explorer of journal archives. Combining timeline-based discovery, full-text metadata search, and D3.js visualizations, Publicat makes archival metadata, issue- and article-level records, immediately discoverable, explorable, and shareable. Built as a generalization of the **[https://vsesvit.vercel.app](https://vsesvit.vercel.app)** structure, Publicat is intended for use by scholars, archivists, and cultural heritage projects that maintain CSV-based catalogs and wish to publish them as navigable, analyzable corpus interfaces.

The system accepts a canonical CSV schema, ingests it client-side via PapaParse, and renders a set of interoperable views: chronological timelines (decade and issue level), faceted search across metadata fields (author, title, translator, language, country), and explorable visual analytics (author diversity by decade, language and country distributions, maps of contributors, and network graphs). The application is implemented in **Next.js** and **React**, and is optimized for rapid deployment on **Vercel**.


## Methodology

Publicat operationalizes a research workflow that interleaves close reading with quantitative, corpus-level description. The methodological stance is explicitly hybrid: metadata-driven aggregation produces hypotheses about temporal and spatial patterns (for example, shifts in language distribution or concentrations of unique contributors), which are then investigated through targeted close reading of issues and articles surfaced by the interface.

Concretely, the project pipeline follows these steps:

1. **Canonicalization.** Source CSVs are normalized to a fixed header schema so that heterogeneous archival exports become interoperable units of analysis.  
2. **Ingestion & Parsing.** Client-side parsing loads the dataset without server-side preprocessing, enabling rapid iteration and lowering barriers for non-technical users.  
3. **Exploratory Visualization.** D3 visualizations provide descriptive overviews that reveal macro-patterns and inform micro-analytic choices.  
4. **Iterative Reading.** Visualized patterns guide archival close reading: clusters, outliers, and discontinuities identified visually are inspected in their original metadata context (issue, article, translator), producing interpretive claims grounded in both quantitative description and textual evidence.  
5. **Documented Interpretation.** Findings are recorded alongside the dataset and interface, enabling reproducible interpretive chains from visual observation to textual quotation.

This mixed-methods workflow privileges transparency: every visualization is traceable back to the CSV rows that produced it, and the UI is designed to let researchers move from pattern to primary source rapidly.


## Support

The project has been featured at the **Stanford Open Source Projects Registry**: [https://opensource.stanford.edu/projects-registry](https://opensource.stanford.edu/projects-registry)

The project has been awarded **Vercel Open Source Sponsorship**: [https://vercel.com/open-source-program](https://vercel.com/open-source-program)

## Resources
**[Publicat](https://github.com/KGeorgii/Publicat)**