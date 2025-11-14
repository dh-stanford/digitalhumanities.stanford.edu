---
title: Vsesvit
layout: templates/page.liquid
permalink: /slavic/projects/vsesvit/
scholar: Student_name
---

<h1><span style="transform: scaleY(0.95); display: inline-block;">Vsesvit: Digital Storytelling</span></h1>

**Georgii Korotkov, Valeriia Korotkova**

<!-- Image Slider -->
<div id="vsesvitCarousel" class="carousel slide mb-4" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#vsesvitCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#vsesvitCarousel" data-slide-to="1"></li>
    <li data-target="#vsesvitCarousel" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/slavic/post-images/vsesvit/1.jpg" class="d-block w-100" alt="Vsesvit slide 1">
    </div>
    <div class="carousel-item">
      <img src="/slavic/post-images/vsesvit/2.jpg" class="d-block w-100" alt="Vsesvit slide 2">
    </div>
    <div class="carousel-item">
      <img src="/slavic/post-images/vsesvit/3.jpg" class="d-block w-100" alt="Vsesvit slide 3">
    </div>
  </div>
  <a class="carousel-control-prev" href="#vsesvitCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#vsesvitCarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

<style>
.carousel-inner img {
  height: 500px;
  object-fit: cover;
  border-radius: 10px;
}
</style>

## Project Overview

**Vsesvit (The Universe)** has been Ukraine’s premier journal of translated world literature since its founding in 1925, serving as a vital cultural bridge between Ukraine and global literary traditions. The **Vsesvit Digital Archive** extends this legacy into the digital age by preserving, cataloging, and analyzing a century of the journal’s publication history.  

This project provides an interactive and data-driven exploration of Ukrainian engagement with world literature, highlighting the transnational flows of translation, authorship, and cultural exchange that have defined Ukraine’s literary modernity. Through structured metadata, network visualizations, and search-based discovery, the archive makes visible the contours of Ukraine’s dialogue with world literature across historical periods of constraint and renewal.

The digital interface is designed as both a scholarly research tool and a pedagogical resource, enabling users to explore the global reach of Vsesvit through its translators, source languages, and countries of origin.


## Methodology

The **Vsesvit Digital Archive** integrates bibliographic data curation, quantitative visualization, and interpretive literary analysis. Its methodological framework rests on three intersecting dimensions:

1. **Data Collection and Structuring.** The metadata has been manually extracted and standardized into a structured CSV format containing publication year, issue number, author, translator, source language, and country of origin.  
2. **Computational Analysis.** Using D3.js and Cosmograph, the data were analyzed for temporal, geographical, and linguistic trends. Visual outputs include frequency distributions of translated works, translator networks, and country-language correlations.  
3. **Interpretive Contextualization.** Quantitative findings were situated within broader literary-historical narratives, including periods of Soviet censorship and Ukraine’s ongoing negotiation of cultural sovereignty within global literary circulation.

This hybrid methodology allows for both descriptive analytics and interpretive depth: numerical trends illuminate the evolving geopolitical and cultural networks that shaped Vsesvit’s editorial and translational practices.


## Theoretical Framework

The project is grounded in theories of **world literature** and **translation studies**. It interprets *Vsesvit* as a site of mediated globalism – an institutional mechanism through which Ukrainian readers encountered, translated, and domesticated world literature while negotiating their own cultural positionality.

Key conceptual underpinnings include:

- **Cultural Mediation.** The archive treats translation not as passive transmission but as an act of world-making, reflecting Ukraine’s dynamic participation in world literary systems.  
- **Networked Literary Exchange.** Network analysis foregrounds the relationships among authors, translators, and linguistic traditions, revealing how individual mediators (e.g., translators) served as cultural nodes connecting Ukrainian readership to diverse literary geographies.


## Explore the Collection

### 📊 Data Visualizations  
Interactive charts and graphs reveal publication trends, geographical distribution, and the temporal evolution of translated works.  
→ [*View Visualizations*](https://vsesvit.vercel.app/visualizations)

### 🔍 Advanced Search  
Search across the full journal collection for authors, titles, translators, or time periods.  
→ [*Search the Archive*](https://vsesvit.vercel.app/search)

### 🔗 Network Analysis  
Interactive network graphs illuminate connections between authors, translators, and literary movements, offering a structural view of Ukraine’s global literary network.  
→ [*View Networks*](https://vsesvit.vercel.app/network)


## Archive Scale
| Metric | | Description |
|:--|:--|:--|
| **100+** | |Years of Publication |
| **1000+** | |Journal Issues |
| **5000+** | |Translated Works |
| **120+** | |Source Countries |


## Resources

1. The project is featured at Columbia University [Narrative Intelligence Lab](https://nil.columbia.edu/projects/vsevit/)
2. Navigate Vsesvit [here](https://vsesvit.vercel.app/)

<!-- Bootstrap Carousel Scripts (only for this page) -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>