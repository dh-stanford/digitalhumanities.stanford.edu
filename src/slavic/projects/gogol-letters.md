---
title: A stylometric analysis of the corpus of Nikolai Gogol’s letters
layout: templates/page.liquid
permalink: /slavic/projects/gogol-letters/
scholar: Student_name
---

<h1><span style="transform: scaleY(0.95); display: inline-block;">A stylometric analysis of the corpus of Nikolai Gogol’s letters</span></h1>

**Yuliya Ilchuk**

<!-- Image Slider -->
<div id="lettersCarousel" class="carousel slide mb-4" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#lettersCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#lettersCarousel" data-slide-to="1"></li>
    <li data-target="#lettersCarousel" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/slavic/post-images/gogol-letters/1.jpg" class="d-block w-100" alt="Herbs slide 1">
    </div>
    <div class="carousel-item">
      <img src="/slavic/post-images/gogol-letters/2.jpg" class="d-block w-100" alt="Herbs slide 2">
    </div>
    <div class="carousel-item">
      <img src="/slavic/post-images/gogol-letters/3.jpg" class="d-block w-100" alt="Herbs slide 3">
    </div>
  </div>
  <a class="carousel-control-prev" href="#lettersCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#lettersCarousel" role="button" data-slide="next">
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

“Stylometric analysis” was originally developed for forensic authorship attribution and has recently been applied to the “distant reading” of various literary corpora. Obviously, many aspects of style are conscious and deliberate, and as such they can be easily imitated. Computational stylometry, however, prioritizes subconscious elements which are more difficult to imitate because they belong to the deep structures of language. The individual style of an author, or his/her “stylistic fingerprint,” can be captured with several quantitative criteria, or discriminators—whether they are identified with most unique words, with function words, or even with sentence type. In Professor Ilchuk’s application of the method to Gogol, the “bag of words” approach was used. She manually divided Gogol’s epistolary legacy by each individual correspondent and by three periods: early letters (1820–1835), mid-life letters (1836–1846), and late letters (1847–1852). Then, she created a “Term Document Matrix” of the most frequent words (MFW) of Gogol’s letters. Given the relatively small size of the epistolary corpus, the most frequent words present the most reliable stylistic features because they are considered to be topic-neutral. She has chosen the first 100 MFW for Gogol’s early letters and 200 MFW for his mid-life and late letters, and used Eder’s Delta. For visualization, the R-studio package “stylo” was applied. The arrangements of the “leaves” among the “clades” in the dendrogram exhibit similarities; the width differences between clades measures the degree of likeness: the closer to “0” the clade’s position, the lesser degree of likeness it exhibits with others. The results of hierarchical clustering are presented in the dendrograms.


<!--## Detailed Description

[Add more detailed information about the project here, including methodology, findings, significance, etc.]

## Resources

[Add links to the database, publications, presentations, etc.]-->

<!-- Bootstrap Carousel Scripts (only for this page) -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>