---
layout: layouts/article
title: "DLCL ATS round-up, spring 2019"
submitted_by: Quinn Dombrowski
submitted_at: 2019-06-24T15:42:59-07:00
has-comments: False
---

![](https://digitalhumanities.stanford.edu/sites/g/files/sbiybj8071/f/styles/large/public/IMG_20190620_160937.jpg?itok=_YB_vCb3)My first academic year at Stanford has come to a close, ushering in a summer that promises to be surprisingly busy, despite the relatively empty hallways and offices around campus. Working in central IT, I’d forgotten what it’s like to be so directly impacted by the rhythms of the school year, and the way everyone heads overseas as soon as finals wrap up.


Summer is already underway, with CESTA’s undergraduate interns starting yesterday, and deadlines drawing near for finishing things in time for the international DH conference. But before I get too far into things this summer, here’s what I’ve been up to over the course of the spring.


### Existing projects


#### Global Medieval Sourcebook


The Global Medieval Sourcebook has taken an exciting turn. After mulling over the possibility of applying for a Mellon grant to build the infrastructure to become a (hopefully self-sustaining) publisher, the project team has instead decided to focus our collective efforts on research rather than all the ongoing work involved in soliciting, editing, and publishing translations as the project’s primary goal. We’ve started conversations with the Stanford Digital Repository (SDR) about what it might look like to publish each text and translation in the repository with a full MODS record and as much metadata as the team is able to provide. This could potentially bring medieval texts into conversation with modern research questions and materials. Texts disseminated in this way would share search results with a wide range of content that shares similar metadata in contexts like SearchWorks and WorldCat. By no longer focusing on maintaining our own infrastructure, it frees us up to focus on actually doing computationally-supported research on these and other texts.


In the short term, we’ll continue with the Drupal site until we work out how to publish texts through SDR, and potentially supplemented by a static HTML display using [Versioning Machine](http://v-machine.org/). Versioning Machine provides a great interface for comparing different versions of a text (including translations, textual variants, etc.), but it wasn’t designed for use on mobile. A trip to UCLA this quarter brought to my attention the growing set of folks who are engaging with digital humanities methods — including at community colleges in the US, and in the Global South — without access to a laptop and the screen space that comes with it. Add to that the number of people who have more frequent access to a mobile device than a laptop (including myself, during my morning commute), and it’s gotten me thinking about how the usability of even our “easy” web-based tools and interfaces start to fall apart in a major way in a mobile environment. It’s an issue I want to pursue further — “how does it work on mobile?” has become my second predictable question, after “does it work on languages besides English?”. Luckily, the Global Medieval Sourcebook project has two summer interns through CESTA, and one of them will be working on designing, and hopefully implementing, changes to the CSS/JS in the Versioning Machine code to make it more usable on mobile devices.


#### Entitled Opinions


This podcast just wrapped up its most recent season. It’s published through a Drupal website hosted on library servers, but being Drupal means that it needs weekly- to monthly-updates year-round, which doesn’t make sense for a site that’s only actively used three months out of the year. The migration from their previous website to Drupal was a painful one that was poorly managed on the technical side, so there’s some understandable reluctance to migrate again. I’m hoping to spend a bit of time this summer looking at Jekyll-based podcast website options, and put together a proof-of-concept for how that could work as site infrastructure. We’ve also kicked off discussions with SDR to get all the episodes and associated metadata into the repository — a much better place to keep the files safe than everyone having their own backup on their own laptop. This project has been a good reminder that when it comes to digital humanities projects, a lot of effort can get poured into technical systems whose purpose is, fundamentally, to mitigate distrust between the content and the technical sides of the project team. Addressing that underlying issue is a prerequisite for simplifying the technology in ways that make everyone’s life easier.


#### Performing Trobar


This quarter I got a Stanford Sites website set up for Performing Trobar, and I’m working on migrating the student final projects (but not some of the more ephemeral comments, responses, and other material that is more reflective of the site’s use as a homegrown LMS) to the new site. I’m also migrating a directory of song performances. My goal is to have it up and running by the time this summer’s iteration of the class starts, at which point I’ll be available via Zoom as a technical consultant for the students as they’re working on their own projects.


#### French Revolution Digital Archive (FRDA)


We’re making progress on replacing the current bespoke search interface for the French Revolutionary Digital Archive with a landing page that highlights current research on the data, a text search for the Archives Parlementaires using Philologic, and a “coming soon” placeholder for the current image search. We’ve considered the [Library’s Spotlight exhibit-building platform](https://exhibits.stanford.edu/) for it, but it’s not really an exhibit, it’s a data collection, and we want things like CoInS embedded metadata so that people can get meaningful results from saving the records to Zotero. We’ve started experimenting with Stanford Sites as the infrastructure for that, but I’ll be spending more time on it this summer and into the fall.


#### Marine Biology Theses


By the end of last quarter, I got enough of a proof-of-concept for Amanda Whitmire to present at a conference. This quarter, my CIDR developer colleague Scott Bailey picked up the torch and has helped her try other approaches to getting the data she needs. My role in the technical development of this project may be finished, but I'm looking forward to helping her sew a thematic dress for a conference where she’s giving a talk on the project this fall!


#### Bulgarian Dialectology as Living Tradition


My longest-running project got one of its first publications this quarter, with a paper accepted to “Slavic and East European Information Resources” describing the site, how we built it (including a frank discussion of labor issues), and where we see it going now that it’s almost “done”. It was published last week, and you can find an [open-access version on Humanities Commons](http://dx.doi.org/10.17613/901g-z264).


#### Hebrew NLP


Three months later, I’m embarrassed to admit that I’m still dragging my feet on learning the Hebrew alphabet. This project has, however, taught me about the Python package Pandas for data wrangling (including its bizarre propensity for eating long strings if you don’t tell it not to), as well as orthographic challenges for correct Hebrew lemmatization (an unpaired quotation mark indicates abbreviations). I’ve been very grateful for Yael Netzer from the [Department of Computer Science at Ben Gurion University](https://www.cs.bgu.ac.il/~yaeln/) on this project; her knowledge of both Python and Hebrew have been invaluable.


Through this project I have also discovered the computer-generated poetic wonders that result from sticking topics generated by Mallet into Google Translate as entire lines, forcing the algorithm to attempt to wrestle semantics out of lists of words: "In the end, he was not a crossroads, and there came a name that recalls the hour we were”, "It is not about whether or not an event is what you remember", and "No I am the one who is right to know that omnipotent with anyone can be either garlic or".


#### Multilingual Harry Potter fanfic


This quarter we’ve started some work on the paper we hope to submit to Journal of Cultural Analytics this fall, about the metadata in Harry Potter fanfic across English, Italian, and Russian corpora. This forced me to sit down and actually figure out web scraping using the Beautiful Soup package. I found it really hard to understand at first, but once I realized I could select things using CSS syntax, things fell into place. The web scraping part of the project inspired me to send a thank-you email to Mary Mathiesen, the elementary school teacher who first taught me HTML.


This summer we’re going to have a lot of data cleaning and normalization to do. The Russian corpus seems to use an uncontrolled vocabulary for indicating character names, so there’s been wild variation (over 3,000 unique names) for Masha Gorshkova to sort out, compared to about 90 in the English corpus, and 184 in the Italian. Once the data has been formatted correctly, we’ll be able to generate a table for each language showing relative character power/agentivity in relationships (i.e. which character gets listed first in pairings); Mark Algee-Hewitt performed an act of true art and craftsmanship in putting together the code for it in R, and I can only dream of being that fluent with any coding language someday. While we’re focusing on the metadata for this phase of the analysis, we’re just starting to think of the kinds of questions we’ll be able to answer in the second phase, when we scrape the full texts of the stories themselves. That work will be the basis for a future LitLab pamphlet. To celebrate the end of the school year and the work we’ve done so far, Masha, Antonio Lenzo (Italian), and Steele Douris (English) and I got together in the [Textile Makerspace](https://textilemakerspace.sites.stanford.edu) and sewed Hogwarts clothes. This alone is making me look forward to future presentations!


#### Translation


I co-presented some initial findings from the translation project with Yulia Ilchuk, Antonio Lenzo, and J.D. Porter at the "Workshop on Digital Humanities to Preserve Knowledge and Cultural Heritage” ([as described in this previous blog post](https://digitalhumanities.stanford.edu/translating-language-culture-form-workshop-digital-humanities-preserve-knowledge-and-cultural)). We ended up having to simplify our corpus to 20th century short-stories (including, but not limited to, mystery/noir), to be able to get enough unique authors and translators. In the process of working on this project, I also discovered — to my initial chagrin, and then delight — that what we were doing fits squarely in the field of corpus-based translation studies, making the project less novel, but giving it other work to be in dialogue with. 


### New projects


#### Rosetta


The "Workshop on Digital Humanities to Preserve Knowledge and Cultural Heritage” introduced me to the [Rosetta project](https://francestanford.stanford.edu/projects/rosetta-resources-endangered-languages-through-translated-texts), which is working to use aligned translations of literary text as the basis of developing NLP tools for under-resourced languages. Zheng Zhang (PhD student in Natural Language Processing at Université Paris-Saclay) stayed at CESTA for a month after the conference, and I helped with paragraph alignment for their Slavic corpora. We discussed what a translation studies dashboard might look like for bringing differences within an aligned corpus to the attention of translation studies scholars. I hope to contribute to this project more going forward, and see whether it might be of use to translation studies folks in DLCL.


#### Poetic Media Lab projects


I’ve started working with a number of students affiliated with Amir Eshel’s Poetic Media Lab group on their individual projects, while they have time for them over the summer. These include overhauling the [Poetic Media Lab website](http://poeticmedia.stanford.edu), looking into Arabic OCR and diaspora mapping for a project involving Palestinian literature, and exploring ways we can contribute to Prof. Obed Lira’s project on the Florentine codex (described in the [blog post on the "Workshop on Digital Humanities to Preserve Knowledge and Cultural Heritage”](https://digitalhumanities.stanford.edu/translating-language-culture-form-workshop-digital-humanities-preserve-knowledge-and-cultural)).


#### Automated vs. manual Russian NER


Around a year ago, Yulia Ilchuk worked with a student to manually count all instances of character co-occurrence in *Anna Karenina*. I’ve been investigating what the results look like if you attempt to use a Russian-specific named-entity recognition library, [Natasha](https://github.com/natasha/natasha), to do the same thing. One issue that we’ve quickly discovered is that it doesn’t work at all for identifying characters who aren’t named as such — servants, sisters, etc. What we really need is something closer to the Russian version of [David Bamman’s annotated dataset of literary entities](https://github.com/dbamman/NAACL2019-literary-entities), and I'm looking into what it might take to build a similar annotated corpus as a training set for a tagger.


#### Palladio Bricks


Did you know that the [DH visualization tool Palladio](http://hdlab.stanford.edu/palladio/) can be embedded in any website, because the visualizations are all generated client-side? For a couple years, there’s been work towards this concept of “Palladio bricks”, but it’s needed a little more work and a lot more documentation before it can really be promoted. I’ve started working on the documentation side, hoping to get something usable done this summer, and my CIDR developer colleagues may be lending a hand with a few specific tasks on the coding end. 


#### Tools for Japanese text analysis


I’ve been working with Japanese curator Regan Murphy Kao on a Jupyter notebook that does simple segmentation for Japanese text, which makes it feasible for scholars to use tools like Voyant and Mallet for Japanese. We’re also looking at ways of incorporating full-text search for the [Magario family dairies](https://searchworks.stanford.edu/view/11856079), some of which have been transcribed, but the transcription isn’t currently compatible with the infrastructure that the library uses for full-text search.


### Workshops


This quarter I gave two workshops through CIDR’s workshop series: one on Tableau (based on [these](http://miriamposner.com/classes/dh201w19/tutorials-guides/data-visualization/getting-started-with-tableau-public/) [two](http://miriamposner.com/classes/dh201w19/tutorials-guides/mapping/create-a-map-with-tableau/) tutorials by Miriam Posner), and one on Cytoscape (based on material from last quarter’s class and [these](http://miriamposner.com/classes/dh201w19/tutorials-guides/network-analysis/create-a-network-graph-with-cytoscape/) [three](http://miriamposner.com/classes/dh201w19/tutorials-guides/network-analysis/cytoscape-working-with-attributes/) [tutorials](http://miriamposner.com/classes/dh201w19/tutorials-guides/network-analysis/cytoscape-working-with-selections/) by Miriam Posner).


### Writing


I submitted an abstract to a “Debates in DH” volume on pedagogy, about the “Digital Humanities Across Borders” multilingual DH course last quarter. They received over 90 submissions, which has delayed the timeline for responses, but I hope to hear back about it this summer.


After last quarter’s course was over, I wanted to look into making some of the materials I prepared available in a more widely-usable way. I ended up approaching [Programming Historian](http://programminghistorian.org/en/lessons/) about it, and started working on developing a lesson on Jupyter notebooks, as a necessary first step towards some of the language-specific work I’ve been doing. I’ve been co-writing it with Tassie Gniady and David Kloster from IU, and we’re close to being done with our first draft.


### Talks and events


In addition to the translation talk mentioned above, I gave a talk at this year’s Stanford Drupal Camp (now rebranded Web Camp), "[Academic research sites: where do we go from here?](https://drupalcamp.stanford.edu/session/academic-research-sites-where-do-we-go-here)", about the mismatch between Drupal 8 and the needs of digital humanities research projects, and how [Backdrop](https://backdropcms.org) is a better fit. It was heartening to see Web Services folks in the audience, who were interested in how they and Stanford Sites can serve the needs of researchers, even as they plan a Drupal 8 migration for the system.


I also participated in a [“Digital Brandes” hackathon at UC Berkeley](https://digitalhumanities.stanford.edu/brandes-translation-multilingual-corpora-digital-brandes-hackathon), where I took a multilingual approach to the task and looked at his work in translation.


Miriam Posner and Chris Johanson invited me to their DH pedagogy course at UCLA, where I gave a talk about doing multilingual digital humanities, or at least supporting students who want to work in other languages. In the process, I developed a list of [multilingual NLP resources](https://github.com/multilingual-dh/nlp-resources) for a wide range of living and dead languages.


![](https://digitalhumanities.stanford.edu/sites/g/files/sbiybj8071/f/48096102628_cda020b592_z.jpg)I wrapped up the quarter with the Text Technologies [“Women and Gender Minorities in DH” workshop](https://texttechnologies.stanford.edu/news/women-and-gender-minorities-digital-humanities) at CESTA, which I’d been helping organize through the winter and spring. We were able to bring in a wonderful group of guest speakers from around the country (with a few international participants) for a thought-provoking and engaging event. Before the workshop formally started, I ran a special session of the Textile Makerspace with Miriam Posner and her daughter Dora (both sewists), and we continued the joy of making during the workshop with the vinyl cutter that now resides in the Textile Makerspace. On the last day of the workshop, I gave a personal talk called “Bridges”, about identifying as non-binary, and the ways that language, gender, sexuality, and family impose constraints that we have to work within. We’ll be publishing videos from that workshop over the summer.


### Working groups


The [DH-WoGeM](http://dhwogem.org) (Women and Gender Minorities in DH) working group has continued throughout the spring, making preparations for presentations at the international DH conference and at ACH over the summer.


During the fracas over Nan Z. Da’s article “[The Computational Case against Computational Literary Studies](https://www.journals.uchicago.edu/doi/abs/10.1086/702594?journalCode=ci)”, it occurred to me that her critique of the mathematical and statistical competency of people who use computational and quantitative methods in DH absolutely applies to me. For years I’ve been meaning to read *[Six Septembers: Mathematics for the Humanist](https://digitalcommons.unl.edu/zeabook/55/)* by Stephen Ramsay and Patrick Juola, but never got around to it. So, if only to hold myself accountable for doing it, I sent out a poll on Twitter to see who might be interested in a reading group around the book. We’ve got over 50 people (including multiple folks from Stanford) on our Slack channel, annotating the text online using Hypothesis, and coming to monthly synchronous meetings to get through the book between now and December. There’s still time to join, if you’re interested; all the info is on the [Six Septembers reading group website](http://six-septembers.github.io).


This quarter I learned that the DLCL funds “research units”: small working groups around a particular topic or area of study. Mae Lyons-Penner put in a proposal that got approved for a graduate reading group around digital humanities, and I’ve attended the first meeting, where we read the first chapter of Andrew Piper’s *Enumerations*. The students had some questions about his conclusions, wanting to differentiate between the use of single periods and ellipses, whereas he treats ellipses as just a sequence of periods. I inquired with Andrew Piper about it, and hope to have some answers to the students’ questions (about whether the results change if you treat periods and ellipses separately) before the next session.


I also put in a research unit proposal around Russian natural-language processing. The research unit brings together a mix of local grad students and faculty with grad students and faculty in other institutions, who are all using computational text analysis methods on Russian. In addition to holding meetings where we discuss our current work, troubleshoot problems, and discuss details of how to implement certain techniques on Russian, we’re going to work on adapting [David Bamman’s BookNLP pipeline](https://github.com/dbamman/book-nlp) for Russian, holding a small hackathon in the winter.


### Russian


Speaking of Russian, Rima Greenhill was kind enough to let me audit one of her Russian classes this quarter, to work on recovering some speaking ability with Russian after 13 years of disuse. It was a good, if sometimes frustrating, experience, working on remembering the things I’ve forgotten, and learning things I never quite had down to begin with. My contribution to the Russian cultural night at Russian House was a fashion show of Russian-themed dresses I’ve sewn, and I’m grateful to the other students in the program (and Rima) for modeling.


### Global Outlook::DH


This quarter I was elected to the board of the [Global Outlook::DH](http://www.globaloutlookdh.org/) group, which is becoming re-activated after a few quiet years. The group’s focus on highlighting the perspectives of the Global South, and taking a multilingual, international, collaborative approach to DH fits well with the work I’ve been doing in the DLCL, and I’m excited to be part of it.


### Textile Makerspace


The Textile Makerspace came into being as something greater than an old computer lab with mostly-not-functioning technology this quarter. I worked with facilities to clean out all the dead computers and equipment, leaving us space for sewing machines and a vinyl cutter. I also replaced the black-and-white film stills on the walls with colorful textiles, embroidery, and other sewing-related items. It’s become a lively space that brings together people from a wide variety of roles, from faculty and grad students to staff and undergrads. During the special event for “Women and Gender Minorities in DH”, I had the chance to talk with Nichole Nomura, a grad student in English, about her background as a maker, and I’m delighted to now have her as the co-director of the Textile Makerspace. We’re going to be exploring options ranging from arts grants to course grants to grad student quality-of-life funds to do more with the Makerspace starting in the fall. The Textile Makerspace will also be included in an upcoming Stanford News article about makerspaces on campus.


### Colleagues


Over the course of the spring, I spoke with a number of potential candidates for the History ATS position we currently have open. We had a robust pool of applicants, and are still currently in the interview process. But I’m looking forward to starting the fall with a colleague in history who I can work closely with on building up a digital humanities community at Stanford, beyond our many individual projects.


 