---
layout: layouts/article
title: "DLCL ATS round-up, summer 2019"
submitted_by: Quinn Dombrowski
submitted_at: 2019-09-23T11:31:59-07:00
---

![](https://digitalhumanities.stanford.edu/sites/g/files/sbiybj8071/f/styles/large/public/48096173597_76ef6dd607_k.jpg?itok=dS_9N3Ni)In my first summer as the DLCL ATS, I have concluded that the quarter’s reputation as a “slow” time is crucially overlooking all the conferences and events that get scheduled, precisely because it’s supposed to be “slow”. It’s certainly been quieter around the DLCL, with most faculty and students distributing themselves throughout the globe as soon as spring quarter ends, but distance has little impact on projects. Before the fall quarter gets too far underway, here’s a look back at the summer.


### Existing projects


#### Global Medieval Sourcebook


Two undergrads, Nina Du and Tina Zhang, joined the project over the summer, courtesy of CESTA’s summer internship program. The direction I’d suggested for their work turned out to be a dead-end: the [Versioning Machine](http://v-machine.org/) performs well enough on mobile, and making further refinement would involve getting deep into the weeds of CSS. Instead, the students primarily worked on transcription and translation, and Nina did some work on a more mobile-friendly theme for the website. More recently, an opportunity has arisen for us to write a paper about GMS for “Seminar: A Journal of Germanic Studies”. I’m glad to have a deadline for making some progress on the restructuring of the project, focusing on publishing texts through our institutional digital repository rather than as a stand-alone website.


#### Entitled Opinions


The podcast wrapped up its latest season in the spring, and the team wanted to wait until the fall to deal with the long-term preservation of the recordings through the Stanford Digital Repository and rethinking the website, so this project has been on hold during the summer. I’m hopeful that new developments around [how Stanford IT supports content management systems](https://uit.stanford.edu/program/content-management) will give us a middle ground between the current site (run on a library server, with me for all technical support) and a minimal-computing option like Jekyll, which is much better for sustainability, but less intuitive for people to add content.


#### French Revolution Digital Archive (FRDA)


Officially launching the [new Philologic-based text search](https://sul-philologic.stanford.edu/philologic/archparl/) is still on hold until an associated image collection is put in order. In the meantime, we’ve been talking about what will be involved in digitizing (and getting encoded in TEI) additional volumes of the Archives Parlementaires, which include some delightful and exceedingly miscellaneous content that will be a challenge to write a spec for.


#### Hebrew NLP


I was happy to meet up with Yael Netzer and Renata Keydar in person at DH 2019 in Utrecht. Other than preparing a description for the Poetic Media Lab website, this project has been mostly quiet over the summer, and I imagine work will resume in the fall.


#### Multilingual Harry Potter fanfic


With my collaborators away from the Bay Area this summer, I haven’t had the deadlines to make as much progress on this as I hoped. Luckily, CIDR had an intern for part of the summer, Christy Thompson, who helped with some of the data cleaning. She was a real trooper, not even balking when I presented her with OpenRefine and Russian. This project continues to be a fun example to bring up when people asked about the kinds of projects I work on. The response is usually pretty positive (and I learned some useful background on how AO3’s metadata is structured from Faith Lawrence at the DH conference), but at the SlavicDH workshop, I had to pull out my speech about fanfic as the literary studies equivalent of “public history” (h/t Kathleen Fitzpatrick), the value of seeing how monolithic, internationally-distributed corporate-controlled franchises fragment in the hands of readers/viewers in different cultural contexts, and the importance of having relatable multilingual data sets for teaching DH.


While our paths didn’t cross in person at the DH conference, it’s been great to be in touch with Federico Pianzola and Simone Rebora, who are working on “social reading” through looking at user comments at Wattpad. Over the summer, I was also introduced to Mike Kestemont, a medievalist at the University of Antwerp who has worked with his text analysis students on Harry Potter fanfic. More recently, it’s been exciting to learn about the ongoing interest in fanfic at the Berkeley Center for New Media, via Gail De Kosnick, which may present an opportunity for meaningful cross-Bay Area exchanges.


#### Translation


The LitLab also had a number of summer interns through CESTA, and they worked on expanding our corpus of texts for the translation project, which now includes Korean, German, and Indonesian. The group (Yulia Ilchuk, J.D. Porter, and Antonio Lenzo) has considered how to frame a paper on the topic, perhaps for the [special edition of the Journal of Data Mining and Digital Humanities connected to the workshop](https://jdmdh.episciences.org/page/collecting-preserving-and-disseminating-endangered-cultural-heritage-for-new-understandings-and-multilingual-approaches) where we originally presented the idea.


#### Rosetta


The paper we submitted on a translation dashboard for literary scholars didn’t make it into the Slavic NLP workshop at ACL, but the feedback we received was useful. The project seems to have mostly been on hold over the summer, but the more I look at the state of NLP for non-English languages with smaller speaker bases, the more I’m convinced of the value of what Rosetta aspires to do for turning literary translations into NLP training data.


#### Performing Trobar


Marisa Galvez held the first instance of her summer course in France using the [new Stanford Sites-based website](https://trobar.sites.stanford.edu/) for students to post final projects. I consulted with a few students about their projects, but on the whole, they seemed interested in creative but non-digital projects. I’m happy to say that the largest technical problem encountered by the course seemed to be the poor wifi in the French castle, rather than anything with the website.


#### Poetic Media Lab projects


The [Poetic Media Lab](https://poeticmedia.stanford.edu/) has been in a period of transition, as last year’s postdoc, Daniel Bush, has been moving to a new position at Stanford, and a number of newer graduate students have been stepping up. I’ve talked with them about everything from WordPress themes and plugins for the “Poetic Thinking” site, to Drupal configuration on the Poetic Media Lab website, to data modeling and how to go from manual notes to structured data, to the eternal “what happens next?” question after you’ve spent a lot of time encoding something in TEI.


#### Automated vs. manual Russian NER


At DH 2019, Yulia Ilchuk presented findings from comparing networks based on the hand-collected named (and unnamed) entities collected by her research assistant, vs. the results from the [Natasha](https://github.com/natasha/natasha) rule-based named-entity recognition library for Russian. Chatting with other Slavists at the conference pointed us towards other tools that may perform better for Russian named-entity recognition. As part of the new [Russian NLP research unit](https://russiannlp.sites.stanford.edu/), we will be collecting information about libraries and tools relevant to Russian NLP, along with reviews about how well they perform under different conditions.


#### Palladio bricks


The CIDR developer team had an opening in their schedule between work cycles on their major projects, and have recently been able to spend a little time helping update [Palladio](http://hdlab.stanford.edu/palladio-app/) from using the deprecated bower package manager for deployment, to using npm, and addressing a number of other issues related to out-of-date libraries. Simon Wiles has done an absolutely heroic job working through dependencies and untangling the underpinnings of Palladio. While it’s not as exciting as a release with new features, making these changes are a necessary step for new developments, including documenting Palladio bricks and potentially adding new visualization and analysis components.


#### Tools for Japanese text analysis


This project has been quiet over the summer, though I’ve been keeping tabs on developments in [Japanese DH](http://dhjapan.org/), and Stephanie Santschi’s DH 2019 presentation on wrangling bilingual XML records for a Hokusai project at the British museum was fascinating. I read and gave feedback on the [DLSS SUL Text Search Study Report](https://library.stanford.edu/blogs/special-collections-unbound/2019/08/sul-text-search-study-report), which includes a reference to building out support for incorporating Chinese-Japanese-Korean OCR into the search functionality as a “high-impact/longer-term” priority. More recently, Japanese curator Regan Murphy Kao and I have started thinking about how to lay the groundwork for an event with a digital humanities component in 2024 for the hundredth anniversary of the Immigration Act of 1924.


### New projects


#### Bible fanfic


German curator Kathleen Smith connected me with Biblical studies professor Michael Penn this summer, in relation to a course he’s teaching this fall on "What Didn't Make It into the Bible?". Now that I’ve gotten the hang of scraping and cleaning data from fanfic sites, it was easy to grab the metadata from the “Bible” fandom on [fanfiction.net](http://fanfiction.net/) and the Russian fanfic archive I’ve been working with, and put together a few visualizations for him. (Sadly, the Bible is not a fandom in my Italian fanfic archive.)


#### Book Haven


[Cynthia Haven’s long-running blog](http://bookhaven.stanford.edu/) needed a few tweaks — one of which was easy, though the other is looking more complicated. In the medium term, I’d like to get it moved onto a centrally-managed and supported environment, rather than being a stand-alone site. I’m hopeful that [the changes to how Stanford IT supports content management systems](https://uit.stanford.edu/program/content-management) will help make it a smooth transition.


#### Machine learning + medieval


By the time I got involved with the [Center for Medieval and Early Modern Studies (CMEMS)](https://cmems.stanford.edu/) group last year, they’d already booked all the talks for the academic year. This time, I’m looking forward to being on campus on more Wednesdays for CMEMS lunch talks, and I’ll be giving one on my birthday in the spring. I’d like to try out some machine learning on the handwriting of the [Old Novgorod birchbark letters](http://gramoty.ru/birchbark/) (which might have some value as a library AI experiment as well), but I’ve still got most of the year to sort it out.


One of my most exciting (re)discoveries of the summer was [Transkribus](https://transkribus.eu/). It didn’t seem that relevant to me when I first encountered it as a transcription environment, but new machine learning models that they’ve released for [Fraktur](https://read.transkribus.eu/2019/08/23/general-model-for-fraktur-released/) and [medieval Slavic manuscripts](https://read.transkribus.eu/2019/08/23/special-models-on-slavic-handwriting-released/) get truly magical results. I demo them every chance I get, and I think they could have a transformative impact on collections with a lot of these materials.


### Workshops


CIDR doesn’t run its workshop series over the summer, but at the beginning of September, I was at Princeton for a few days co-teaching the technical hands-on workshops at a [Slavic DH](https://slavic-dh.princeton.edu/2019-summer-workshop/) event we co-organized with them. This year’s focus on images was less relevant for Stanford’s Slavic faculty and grad students, but I’ll be reusing some of the materials in CIDR workshops later this year. The Slavic DH event also introduced me to a number of folks interested in joining the Russian NLP research unit, and it’ll be great to have their perspectives and experiences in that group.


### Writing


My tutorial on Jupyter Notebooks for Programming Historian is currently in review, after a substantive rewrite during the summer. I’m pretty pleased with the new version, which incorporates some Italian Harry Potter fanfic metadata. Once this tutorial is out, I plan to use it as a prerequisite for more language-specific text analysis tutorials.


I participated virtually in a tutorial write-a-thon as part of the [Language Acts and Worldmaking project](https://www.languageacts.org/) at Kings College London. The tutorial was too ambitious: I was trying to write something on how to create word vectors for texts in non-English languages, but after some useful feedback, I scoped it down to an overview of text cleaning/pre-processing needed for non-English languages. The tutorial is currently under review and should be published later this year or early next year.


There were over 90 submissions to the the “Debates in DH: Pedagogy” volume, and I was excited to learn this summer that mine was accepted.  The organization and abstracts for the whole book were recently sent out, and I wonder if my piece on the non-English DH course I taught last winter is going to be a little bit of an outlier (particularly in its section), but I’m happy there’ll be something in the volume that focuses on language.


### Talks and events


In July, I talked about the [importance of strengthening international collaboration and establishing a network of peer review that extends outside the US](http://quinndombrowski.com/blog/2019/07/12/future-slavic-dh-united-states) if Slavic DH is going to survive, as part of a Slavic DH panel at the international DH conference in Utrecht. I also co-presented a poster for [DH-WoGeM](http://dhwogem.org/), which won the innovative poster award. Late that month, I led a discussion about what affiliation with DARIAH might look like, at the ACH conference in Pittsburgh — and also brought along Dr. Cheese Bones, the skeleton poster. I’ve written [more about those conferences on the Stanford DH blog](https://digitalhumanities.stanford.edu/dh-and-ach-skeleton-tow).


### Working groups & organizations


For DH-WoGeM, over the summer I wrote and revised a proposal for the group to become an official Special Interest Group (SIG) of ADHO. I’ve also been working with Zhenya Samoilova on preparations for an international survey next year about work/life balance and caring (childcare, elder-care, self-care, etc.) responsibilities in DH. Last week I led another round of the “becoming a parent in DH” discussion.


The [Six Septembers: Mathematics for the Humanist](https://six-septembers.github.io/) reading group got underway this summer, and we’re halfway through the book. Setting up even brief synchronous check-in meetings has been really helpful for actually making me sit down and read through things like basic explanations of linear algebra. It seems like there’s interest in the group continuing even after we finish the book in December, trying to apply some of the underlying principles we’ve learned as we work through actual equations and algorithms used in DH.


Over the summer, I’ve been working on preparations for the Russian NLP research unit. It turns out that we’re not the only people who’ve given some thought to adapting David Bamman’s [BookNLP](https://github.com/dbamman/book-nlp) for another language: Patrick Burns (of the [Classical Language Toolkit](http://cltk.org/)) has an interest in doing it for Latin. If this works out, I’d love to expand it to other languages in the DLCL, so thinking about the project in a more generalized way makes a lot of sense.


Between the [pre-conference workshop at DH 2019 on DH in non-Latin scripts](http://multilingualdh.org/dh2019/), various conversations with folks working on non-English texts, [accumulating a list of Jupyter notebooks](https://github.com/quinnanya/dh-jupyter) in a variety of human and computer languages, and talking to other non-English folks about creating a space for that work at the next ACH conference, I think we’re beginning to reach a critical mass for visible DH work in other languages. One of our follow-up steps from the DH 2019 pre-conference workshop was to launch a [website](http://multilingualdh.org) and [mailing list](https://mailman.stanford.edu/mailman/listinfo/multilingual-dh) for multilingual DH, which just debuted this morning. We’ve also begun talking about putting together a proposal for an ADHO SIG for multilingual DH, as well as a DARIAH working group: the former comes with a guaranteed workshop at the conference, and the latter comes with funding opportunities.


It’s been a busy summer on the GO::DH exec board, where we’ve been working on a proposal for the group to become an official Constituent Organization of ADHO. We’re also in the early planning stages for [“Around DH 2020”](http://www.globaloutlookdh.org/around-dh-2020-and-quantifying-dh-infographic-revisited/), which will feature a write-up of a DH project somewhere in the world, every week, all year. We plan to have monthly “state of DH in…” pieces that take a broader view of the field (in a region, in a discipline, in a language, etc). Relatedly, we’re working with Melissa Terras to revisit the still-widely-cited “Quantifying DH” infographic from 2012, using more inclusive metrics that better capture the activity going on around the world. I’m hoping to involve my grad student colleagues in writing some of these pieces next year.


The Textile Makerspace was on hiatus for much of the summer, but we’ve recently [posted our fall hours](https://textilemakerspace.sites.stanford.edu). In October, we’ll have a special focus on Halloween costumes; in November, it’ll be reusable holiday gift bags and holiday presents. Anyone with an interest in textiles (including knitting, crochet, and our vinyl cutter for making stickers or iron-on designs) is welcome to come by and learn, and work on a project. We’ve got patterns for all genders and sizes, as well as a great new [guide to clothes hacking](https://drive.google.com/file/d/1-LE1b8Ba7rsWZ7DRcZggyySINgccfZFL/view) by Kirin Makker, Grace Hammett, Ethan Leon, & E. Ainsley Rhodes.


### Colleagues


It’s wonderful to be starting the year with all the ATS positions filled: Josh Quan joined CIDR as the [IRISS](https://iriss.stanford.edu/) (social science) ATS at the beginning of the summer, and Marie Saldaña started her new role as History ATS at the beginning of September. I’m really looking forward to having another DH ATS to work with on helping to build up the DH community at Stanford.


 