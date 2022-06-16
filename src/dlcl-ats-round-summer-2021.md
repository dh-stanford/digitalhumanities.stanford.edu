---
layout: layouts/article
title: "DLCL ATS round-up, summer 2021"
submitted_by: Quinn Dombrowski
submitted_at: 2021-09-27T14:30:37-07:00
---

![](https://digitalhumanities.stanford.edu/sites/g/files/sbiybj8071/f/styles/large/public/20210927_113149.jpg?itok=OhqSJZYf)Summer always disappears too quickly, especially when it involves navigating childcare gaps at various points. I spent almost the whole summer at home, but started to go back to campus regularly after Labor Day. It's been a delight to have an office of my own for the Data-Sitters Club art by Claire Chenette, and the werewolf saint by Miles Smith, even if I haven't figured out how to hang them on the walls just yet.


### Existing projects


There was a tremendous amount of content work done on the Global Medieval Sourcebook this summer, creating beautifully-formatted PDFs of each text for download along with the XML. We also worked out some technical details with the project's ingestion into the Stanford Digital Repository and the creation of MODS records for the major text collections. I wrote up the process of going from Drupal to a static Jekyll site, which we'll publish along with the new version of the site. I also spent a lot of time trying and failing to wrangle the elaborate SASS code pile from the site we cloned into something that looked the way the team wanted. Thankfully, I was able to barter my way out of this dilemma: Karin Dalziel fixed everything, and I'll be sewing her something in exchange. We'll be launching the new version of the site this quarter.


I've continued supporting my department in various ways around websites: working through a few bugs in the poster-request system we rebuilt on more stable infrastructure, helping research units migrate to platforms that are a better fit for their aesthetic goals, answering questions about how to do certain content updates on our department's very elaborate Drupal site that predates me.


Most of the grad students' projects from the CESTA Grad Fellows program were on hold over the summer, though I anticipate some of them will resume later this year. I did consult with a few undergrad CESTA interns over the summer on data-wrangling topics, and undertook a large data-wrangling project myself, trying to extract metadata from ID3 tags on MP3 files and reconcile it with existing metadata and song variations for Marisa Galvez's "Performing Trobar" site.


Along with my Data-Sitters Club colleagues, we published two "books" this summer, one on [principal component analysis](https://datasittersclub.github.io/site/dsc10.html) (with guest Data-Sitter Heather Froehlich) and one on [the process we used to find food references in the corpus and see how they were translated](https://datasittersclub.github.io/site/dscm4.html) (introducing our Belgian Data-Sitter, Isabelle Gribomont). I continued working on the corpus of translations, and finished preparing the data for the larger multilingual team (including Maria Massucco, Courtney Hodrick, Masha Gorshkova, and Ella Elbaz from the DLCL) to annotate for our EADH poster presentation.


I've been working on other corpora as well, including a computer-readable version of all the texts on the Russian literature comps reading list -- all 19 pages of it. Visa delays for one of the incoming grad students have bought me some time to finish it this fall.


After being mired in indecision for a number of months, I decided to dive into experiments with digitizing Stanford Library's special collections holdings. One of the things I love about Transkribus is the growing collection of handwritten text recognition (HTR) models that work pretty well out-of-the-box for the kinds of materials we have. (I've got a [list with samples here](https://github.com/quinnanya/transkribus-models), that's easier to browse than the Transkribus interface.) I was surprised, for instance, at how decent the results came out when I used my phone to take pictures in the Special Collections reading room. My next step is to identify texts that have been officially digitized, and try running the IIIF images through Transkribus, with the hope of exporting the results as something compatible with IIIF annotation.


A few projects are still on hold. This quarter should be a decision point for the Harry Potter fanfic: whether to re-scrape the data, now that I know how to do it better, and try to write something on it; or call it a learning experience that's over. (Alternately, it could evolve into something else, as the English Harry Potter fanfic project has at the LitLab.) Text mining JSTOR for Solzhenitsyn has gotten another influx of energy from Kat Hill, a visiting faculty member in Slavic, who is interested in Solzhenitsyn's social networks and literary references to those networks. I haven't yet revisited the data, but I'm looking forward to it this quarter.


### New projects


Over the summer, I started learning some R, which I wrote some about in [Data-Sitters Club #10](https://datasittersclub.github.io/site/dsc10.html) and will write more about in #12 (forthcoming). When Matt Jockers's *Text Analysis with R for Students of Literature* first came out, I tried and failed to work through it. Now, with a solidly intermediate knowledge of Python under my belt, I'm finding it much more accessible, and I appreciate its focus from the beginning on doing the kinds of things I'm interested in, instead of starting from the most basic programming concepts.


Some of Henry Lowood's new acquisitions (including a gorgeous manual on textiles) have gotten me thinking about potential exhibit or event ideas, possibly as a partnership with the Textile Makerspace.


### Writing


This summer I finished a round of edits for the "Debates in DH: Computational Humanities" piece with my former DH HPC birds-of-a-feather group. I also did edits for a piece on minimal computing, which led to a great conversation and cross-pollination with another piece submitted to the same cluster. Complaining about Jekyll on Twitter turns out to be a great way to engage collaborators.


I wrote up my spring keynote for the El'Manuscript conference, on rethinking the focus of medieval Slavic investment from comprehensive editions of important manuscripts, to adequate annotation of more diverse materials, with the goal of unlocking a great number of overlooked manuscripts.


Early in the summer, J.D. Porter did a hero's job cohering the work he, Yulia Ilchuk, and I did on a project about texts in translation into a paper with a clear focus and argument; my contribution was a modest "applications" section. It underwent peer review through the *Journal of Data Mining and Digital Humanities* and we just published the [formatted, final version](https://hal.archives-ouvertes.fr/hal-03151249).


In another heroic write-up effort, Matt Warner put together a paper out of the Star Wars talk we did with Mark Algee-Hewitt and Nichole Nomura for *Digital Frontiers: Realizing Resistance Episode II: Uncharted Galaxies*. We've refined some of the analyses, and it's been thought-provoking to grapple with some name-clustering and coreference-resolution tools for English that are highly imperfect, but still a huge step up from what's easily available for other languages. (At least so far; I'm very enthusiastic about David Bamman's NEH grant to rebuild BookNLP and train models for many of my division's languages.)


### Talks and Events


At the beginning of the summer, I gave a keynote at the virtual Digital Humanities Summer Institute (DHSI) with Erica Cavanaugh, on graceful degradation in collaborative relationships. I also attended and livetweeted the other keynotes (which happened daily), [winning a Twitter award from DHSI](https://twitter.com/ETCLatUVic/status/1405933384887681031) in the process.


![](https://live.staticflickr.com/65535/51525978395_60ec97dcb1_c.jpg)The major conference of my summer was ACH 2021, which was held online. In addition to moderating a number of panels (including one by Merve Tekgürler from Stanford's History department, about Ottoman Turkish HTR), I was on a panel with Lisa Spiro, Geoffrey Rockwell, Frank Fischer, Edward Gray, and Alex Gil about DH directories. Admittedly, though, my favorite talk was an "other presentation format", where Liz Grumbach, Merve Tekgürler, and I did a "report from the field" where we interviewed people about their DH work while running around in a grassy field in Animal Crossing: New Horizons. I also decorated my Animal Crossing island as a real conference space, with different lunch options each day and a large coffee station.


Continuing in that spirit, we also gave a presentation -- again in Animal Crossing, projected as my Zoom video -- about the "Animal Crossing: New Digital Humanities" talk series for the Japanese Association for Digital Humanities (JADH) conference in September. Those were our only two ACNDigHum events for the summer, but our schedule is [filling up for fall talks](https://digitalhumanities.stanford.edu/acndh).


Finally, this summer I also got to experience my first (virtual) book launch event, for "[We are the Baby-Sitters Club](https://www.chicagoreviewpress.com/we-are-the-baby-sitters-club-products-9781641604901.php)" (ed. Marisa Crawford and Megan Milks), where the Data-Sitters Club wrote a chapter. I also got to enjoy the eerie experience of hearing your own words (a personal childhood narrative, no less) read by another person in audiobook form. (Whichever of the many readers was assigned my segment did an excellent job.)


### Other things


I did a daylong Intermediate Tableau workshop this summer, which inspired me to offer at some point this year a more focused Tableau workshop specifically for scholars visualizing research. I also did a couple workshops on machine learning classification algorithms, which I'm hoping to put into practice for a couple different projects.


I attended talks and sent feedback on the job searches for the Middle East curator and Scholarly Communications Director positions in the Library.


Finally, this writeup would be incomplete without mentioning two major losses within the US-based DH community this summer, both from cancer: Rebecca Munson and Scott Enderle. I knew them both from the internet, but it's a reminder that internet friendships are still very real. Rebecca is the [reason my hair is partly purple](https://shxperienced.blogspot.com/2020/11/2020-can-take-my-hair-but-not-my-hope.html); [Data-Sitters Club #8: Text-Comparison-Algorithm-Crazy Quinn](https://datasittersclub.github.io/site/dsc8.html) wouldn't have been possible without Scott. Matthew Lincoln has written a [beautiful tribute to Rebecca](https://matthewlincoln.net/2021/08/15/rebecca-munson.html), and Ben Schmidt has [done the same for Scott](http://benschmidt.org/post/2021-09-15-increasingly-stealthy/); both are very much worth reading and remembering.


I kicked off this fall with having to rethink my major plans, after not getting enough enrollment for my DH RPG project management course. As such, the fall remains very much a work in progress, but one I look forward to sharing here.


 