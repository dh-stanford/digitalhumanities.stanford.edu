---
layout: layouts/article
title: "DLCL ATS round-up, winter 2019"
submitted_by: Quinn Dombrowski
submitted_at: 2019-04-02T09:49:39-07:00
post_images:
  - ../post-images/20190401_124502.jpg
---

Winter quarter 2019 was almost entirely devoured by the time demands of developing and running “[Digital Humanities Across Borders](https://github.com/quinnanya/dlcl204)”, my non-English textual DH course. I was grateful to be granted the space to do this; fortunately, none of the projects I’ve been supporting had any deadlines at the beginning of the year, and everyone has been very gracious and understanding about delays on my end on account of class prep.


There were two aspects of the class that made time-consuming, "just-in-time" class prep an inevitability: first, I initially packed everything I could imagine doing into the draft syllabus, and asked the students to fill out a survey to help prioritize the topics. Not all of my favorites made the cut (I regret not making them spend more time working through technical documentation), but I wasn’t unhappy with the results overall. Thematic research collections (AKA Drupal/WordPress/Omeka sites) were cut from the revised syllabus, as was TEI. The convenient elimination of those two topics leaves me with some suspicions that my attempt to present all the topics impartially before sending out the survey was not entirely successful. Not knowing what we’d actually cover in the class before it was underway meant I couldn’t easily work ahead with my class prep before the quarter started. Now that I’ve run the course once, I have materials to draw from next time, even if there’s incomplete topical overlap.


The second time-intensive aspect of the class was its core premise that all students should be able to do the hands-on portions of the course in a non-English language of their choosing. I didn’t know until the second week, when it was more evident who would be staying with the course, what that set of languages would end up being. In the end, we had seven: Chinese, German, Italian, Japanese, Portuguese, Russian, and Spanish. Many of the tools we worked with are not language-specific (e.g. Voyant, Topic Modeling Tool) but that didn’t mean students had the same experience regardless of language. For instance, Chinese and Japanese text has to be segmented (to artificially insert spaces between words), and all texts that use non-ASCII characters (which is to say, every one of the class languages) had to be saved as UTF-8 to word avoid truncation in the Topic Modeling Tool. Then there were our natural language processing class sessions (covering part-of-speech tagging and named entity recognition), which required seven separate tutorials and up to five different tools between them. To my chagrin, I was never able to find a functional NER tagger for Portuguese. Training a model using resources developed for someone’s master’s thesis and posted to Github proved too much for my laptop, and I ran out of time to try it out on the Sherlock cluster. It’s a loose end that still bothers me, and I hope to resolve it this upcoming quarter.


And while it was extra work of my own making during a time when I already had no shortage of things to finish by 1:30 PM on any given Tuesday or Thursday, I can’t say I regret my “20 dresses of DLCL 204” project, where I wore a different topically-linked dress for every day of teaching, thereby realizing my goal of being Ms. Frizzle (of the Magic Schoolbus) of digital humanities. This necessitated sewing 15 dresses, in addition to ones I had already made, and I published [photos, metadata, and notes on all the dresses](https://github.com/quinnanya/dlcl204/tree/master/20dresses) with the rest of the class materials on Github.


I have much more to write about this course, both here and elsewhere, and I hope to bring some of the students’ work to the Stanford Digital Humanities blog (with their permission) in the coming months. I also submitted an abstract about the course to the new “Debates in DH” volume on pedagogy, and a proposal for a tutorial based on some class materials to the “Language Acts and Worldmaking” project, as part of their [tutorial writing sprint](https://languageacts.org/news/call-proposals-tutorial-writing-sprint/). For the moment, though, I’ll set the course aside to say a few words about the other things I managed to work on in the margins of class prep, and after the class wrapped up.


Existing projects
-----------------


### Global Medieval Sourcebook


One of the most exciting project developments this quarter has been with the Global Medieval Sourcebook. The project has been at a crossroads, facing multiple options for how to move forward. We considered what a Mellon publishing grant might look like, in order to set up some kind of organization for publishing digital editions of medieval texts, but concluded that the grant funds would end up going towards work created by the grant itself — work that wouldn’t otherwise be on the project’s roadmap. We discussed a summer migration from Drupal to Backdrop with help from a part-time CESTA undergrad intern, and continuing the time-consuming work of soliciting submissions and adding them to the Drupal site. Ultimately, though, we decided to pivot the project towards a closer partnership with the library. Rather than continuing to use and maintain our own database-driven website infrastructure, with all the concurrent pressures to add more content to the site so that it appears active, we’ll be encapsulating the current text collections as a static “online textbook”, and will deposit each text individually into the [Stanford Digital Repository (SDR)](https://sdr.stanford.edu/). We’ll work with metadata librarians to develop rich metadata about each text so they can be findable as electronic resources in environments like WorldCat, even by people who may be interested in the topic discussed in the text, but would never think to check a medieval text website for material relevant to their research. Prof. Kathryn Starkey will continue working with graduate students to translate new texts and publish them in this way via SDR, and we can provide a conduit for others working on medieval text translation to do the same, if they wish. While Global Medieval Sourcebook isn’t the first project to take this approach (Thomas Padilla pointed me to the [English Broadside Ballad Archive](https://www.worldcat.org/title/english-broadside-ballad-archive/oclc/463031211&referer=brief_results) as a precedent), it’s an idea that I think is worth popularizing. Many library systems groups, including Stanford’s, are always looking for opportunities to directly engage with scholars and their research needs. It serves everyone’s goalsto shift the financial and technical burden of infrastructure from scholars building ad-hoc websites to library systems groups that are better staffed to accomplish the same goals in a more sustainable way. Doing so frees up scholars to re-center their time on research questions involving these texts — doing what they do well, rather than being in a position of muddling through technical development and sustainability.


### Teaching Human Rights


I worked with the web archiving folks in the library to capture David Palumbo-Liu’s “Teaching Human Rights” site in its current form before it is shut down. I’ve exported all the site’s content in CSV files, and have a backup of the full database and filesystem if there’s ever a need to stand the site back up again. The web archived copy of the site resides (and is findable) via SDR, and the database, filesystem, and CSV exports are in a Google Team Drive.


### Entitled Opinions


Late in the quarter, I was introduced to another ongoing project, the “[Entitled Opinions](http://entitledopinions.stanford.edu)” podcast. This currently exists as a Drupal site, the product of a painful migration from an older HTML version. “Entitled Opinions” has “seasons”, meaning the project is only active for a few months over the course of the year. There’s a lot to sort through with this project, including exploring options for moving it to a technical platform that doesn’t require weekly or monthly updates. (I’m heartened by the existence of a Jekyll add-on for podcasts, as one possible option.) Making any major changes as the project moves into production for a new season would be courting disaster, so the goal for now is to ensure the site is stable and secure, and revisit bigger decisions in the summer.


### Performing Trobar


I had a co-consultation with Kenny Ligda from VPTL around the future of the Performing Trobar site. We talked with Prof. Marisa Galvez about the pedagogical goals for the course, and how the site as it currently exists supports those goals. *Performing Trobar* is hosted from the legacy AFS server, and, realistically, needs to be completely rebuilt. At Kenny’s suggestion, I’ll be exploring the degree to which the Stanford Sites Drupal environment might fit the project’s requirements. Even if we have to get creative about how to accommodate some of the content, using a managed service that handles all Drupal core and module updates is a very attractive option. I may end up helping with this course in other ways, including writing tutorials for how to implement certain kinds of projects, and consulting with students remotely via Zoom (the course will be taking place this summer in a castle in Europe). I’m looking forward to seeing how it develops.


### French Revolution Digital Archive (FRDA)


With the departure of our History ATS, Katie McDonough, I’ve taken over a project with Prof. Dan Edelstein and French and Italian curator Sarah Sussman on reconceptualizing and rebuilding the [French Revolution Digital Archive](https://frda.stanford.edu/), which includes both transcripts of post-revolutionary French parliamentary meetings, and digitized images. These collections will probably need to be separated, with the former materials going into a Stanford instance of Philologic that CIDR is setting up, and the platform for the latter remaining an open question. We’re also hoping to make the texts available for download and reuse through a *[French Revolutionary data](https://frenchrevdata.github.io/)* site.


### French political rhetoric


Another existing project I recently became involved with has involved data cleaning from surveys about people’s associations with certain politically-charged words, such as ordre, égalité, and liberté. The environment that Prof. Cécile Alduy has used for data analysis only accepts ISO-8859-1 encoded ASCII as input, so I wrote a [Jupyter notebook for converting Unicode to that format](https://github.com/quinnanya/unicode2ascii).


### Bulgarian Dialectology as Living Tradition


[Bulgarian Dialectology as Living Tradition](http://bulgariandialectology.org), a richly annotated corpus of transcripts of natural conversations recorded during field work in rural Bulgaria between the 1980’s and 2010’s,officially launched this quarter, after many years in “beta”. The project predates both my time at Stanford and at UC Berkeley, but lessons learned in building and maintaining it have informed a lot of my work since. Many of those lessons are captured in a paper I co-authored with project directors Ronelle Alexander (UC Berkeley) and Vladimir Zhobov (Sofia University "St. Kliment Ohridski”) tracing the project’s development, for theSlavic & East European Information Resources special edition on digital humanities.


New projects
------------


### Marine biology theses


A serendipitous Twitter exchange introduced me to Amanda Whitmire, Head Librarian & Bibliographer at Harold A. Miller Library out at Hopkins Marine Station. She has hundreds of uncatalogued, printed marine biology masters’ theses from past decades that she doesn’t have permission to publish in their entirety, but these theses can contain valuable and reusable data tables, charts, graphs, etc. In a delightful inversion of the typical narrative, the (digital) humanities came to the rescue of the sciences. We talked about scanning and OCRing these theses, and used Voyant to generally explore their contents. Working with Scott Bailey from CIDR, we looked at a few different tools for doing named entity recognition for species names; Scispacy initially seemed like a good option, but it was a challenge to get it running, and it also pulled out lots of things we didn’t want (e.g. “animals”, “experiment”, “results”, etc.) I was able to cook up some regex to pull out abbreviated scientific names (e.g.*s. purpuratus*), but the biology databases we tried to query didn’t support that as input. We have a number of angles and leads we’re pursuing at this point, including trying to extract tables and graphs from the source images rather than the OCR, and setting up our own NER training data based on the theses themselves.


### Hebrew NLP


Prof. Amir Eshel introduced me to Renana Keydar, a former student of his who is now a professor at Hebrew University in Israel, where she’s working on setting up a law and digital humanities center. Together with Hebrew and Judaica curator Eitan Kensky, we’re looking into doing topic modeling and sentiment analysis on modern Hebrew legal testimonies. Academic Twitter has come through once again in connecting us with other people working on modern Hebrew text analysis, including Yoav Goldberg, Reut Tsarfaty, and Yael Netzer. Converting the testimony transcripts from Word files to UTF-8 encoded plain text has given me a new appreciation for the difficulty involved in working with right-to-left languages, particularly when file names mix right-to-left and left-to-right. The project is just now getting underway, so I don’t have much to report yet, but it’s quickly become clear that the first step for me is to learn the Hebrew alphabet so I have some orientation within the text — it doesn’t usually end well when I’m reduced to playing match-the-squigglies.


### Multilingual Harry Potter fanfic


This quarter I grafted myself onto an existing LitLab project that is looking at Harry Potter fanfic. Prior to this job, I had little experience with computational literary analysis, and I wanted to get a first-hand look at how it was done, and try to replicate that with a Russian fanfic corpus. During winter quarter, I presented on a few preliminary findings using that Russian corpus as part of the fanfic project’s LitLab presentation. This ultimately led me down the road to using fanfic as a corpus for a few exercises in my “Digital Humanities Across Borders" course, since I was able to find large quantities of Harry Potter fanfic written in all 7 languages. I co-authored an abstract with Steele Douris (who is leading the LitLab project), Antonio Lenzo, and Masha Gorshkova (both students in my course) on a project taking a comparative look at metadata across the English, Russian, and Italian Harry Potter fanfic corpora. The metadata for these corpora is roughly parallel, unlike other corpora that capture fewer attributes about the texts. While the abstract didn’t make it into post-45/Journal of Cultural Analytics special volume on "Computational Approaches to Contemporary Culture”, we’re still going to put together a paper to submit elsewhere this fall.


### Translation


The upcoming workshop "[Digital Humanities to Preserve Knowledge and Cultural Heritage: Collaborate, Compute, Share and Visualize](https://cesta.stanford.edu/events/workshop-digital-humanities-preserve-knowledge-and-cultural-heritage)”, to be held at CESTA on April 15th, provided the perfect deadline to start making progress on a project I had been discussing with J.D. Porter of the LitLab, Prof. Yulia Ilchuk, and Antonio Lenzo. We’ll be taking a look at English translations of texts originally written in other languages, to see if we can meaningfully train a classifier to group the texts by source language. While time constraints are going to limit our ability to implement this aspect of the project in the first phase, we initially planned to build the corpus around genre (sci-fi, noir, and 19th century realism) as well as source language. Noir proved to be comparatively easy, thanks to the Akashic Noir translation series, but the sci-fi involved a lot of inter-library loan requests. Rose Harrington in ILL has been wonderful with helping me sleuth down obscure books from hither and yon.


Workshops
---------


This quarter I taught my first two CIDR workshops: “Documenting Workflow and Data Management” with Ron Nakao, and “Data Modeling: From Research Materials to Data”, which was based on a section of my “Drupal for Humanists” DHSI course, abstracted to talk about structured data in general. Both were well attended, and I was able to follow up on the data modeling workshop through a consult with one of the workshop attendees on how to clean and structure her data (exported chats from WhatsApp) using regular expressions and OpenRefine.


Conferences
-----------


While I didn’t attend any conferences during winter quarter, I reviewed abstracts for DH 2019 and the new ACH conference (and did more reviews to pick up the slack). Reviewing extra abstracts, which primarily had in common the fact that one of their reviewers hadn’t finished their assigned batch, was an interesting change of pace. What I usually review is a pretty predictable set of things related to infrastructure — I know about DH infrastructure, I like the topic, and I suspect it’s not a topic where there’s a lot of wiling reviewers. But reading abstracts on other subjects reminded me that I know things about other areas of DH as well, and perhaps I should branch out in my topic selections. With both DH and ACH, I agreed with the decisions made by the program committee on all the abstracts I reviewed, and I’m really looking forward to both conferences this summer. I’ll be presenting a poster at DH on the “DARIAH Beyond Europe” work, and a panel on Slavic digital humanities — using methodology as the basis for building an international community. At ACH, Glen Worthey, Thea Lindquist and I will be organizing a discussion about “DARIAH Beyond Europe” as well: how (through what existing or potential organization, and to what extent) should the US engage with DARIAH? At both DH and ACH, I’m also involved on the side with submissions put in by other folks involved with DH-WoGEM.


DH-WoGeM
--------


[DH-WoGeM](http://dhwogem.org) is a grassroots group centered on women and gender minorities in digital humanities. The group organizes “conversations" about lived experience in DH, through a gendered lens, and advocates for change. During winter quarter, I hosted a conversation on [becoming a parent in DH](http://www.dhwogem.org/talk-about/), and Jennifer Guiliano and Roopika Risam hosted a conversation about [happiness, security, and compromises](http://www.dhwogem.org/happiness-security/). I haven’t been great about following through with the next steps from the parenting conversation (putting together a survey about what kinds of parental accommodations people would like to see conferences and events provide), but I hope to turn my attention to it soon.


Materiality-focused experimental lab
------------------------------------


After a successful pilot at the end of fall quarter, winter saw the debut of the [Textile Makerspace](https://textilemakerspace.sites.stanford.edu/), which has brought together a wonderful mix of folks from the Library, DLCL, and beyond. On my first day of work at Stanford, I was shown to room 260-238, labeled the “DLCL Digital Humanities Lab”, and was told I could do with it as I saw fit. The ancient Mac towers go into boot-loop (when they turn on at all), and the large display at the front of the room flashes like a rave when you power it up, but the floor and table space are ideal for sewing. I’ve recently started up [Twitter](https://twitter.com/txtilemkerspace) and [Instagram](https://www.instagram.com/textilemakerspace/) accounts for the space, to start highlighting some of the things that people have made there. We’re currently looking into finding someone to build a loom compatible with some of the loom pattern books in the library’s holdings, and there’s a sewing machine and a serger (plus a cutting board, rotary cutter, iron, and various scraps that anyone can experiment with). During spring quarter, we even have a special guest visit from Prof. Miriam Posner from UCLA, who has [her own sewing blog](http://miriamposner.com/classes/sewing/author/miriamposner/). The Textile Makerspace is open most Mondays and Thursdays this quarter; check the schedule on the website and come on by!


Colleagues
----------


It’s been a quarter of churn in CIDR, as we’ve said goodbye to our colleagues Javier de la Rosa (developer) and Katie McDonough (History ATS). In the last few weeks, I’ve been involved with the interview processes for the IRISS (Social Sciences) ATS position, as well as the CIDR developer position. I wrote up a blog post describing [what it means to be an ATS, as I’ve experienced it](https://digitalhumanities.stanford.edu/ats-unpacked-why-i-love-my-job-and-you-might-too). If this quarterly update sounds like the sort of thing you’d enjoy doing, and you have a background in history, check out that blog post and consider applying for our open position!


Goals
-----


In my [fall quarterly round-up](https://digitalhumanities.stanford.edu/my-first-quarter-stanford-dlcl-ats-round-fall-2018), I mentioned looking for opportunities to work with folks from Iberian and Latin American Cultures. While I did have two students working on Spanish in my class during winter quarter, I don’t yet have a project going with that department. Here’s hoping spring 2019 will be my opportunity to find one!


