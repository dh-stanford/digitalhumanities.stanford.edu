---
layout: templates/article
title: "DLCL ATS round-up, fall 2019"
author: Quinn Dombrowski
date: 2019-12-20
post_images:
  - ../post-images/fanfic.jpg
---

It's been an eventful quarter in the Division of Literatures, Cultures, and Languages and Stanford Libraries! Writing it up, it's hard to believe it was packed into just three months.


Existing projects
-----------------


### Global Medieval Sourcebook


This quarter, I got the paperwork signed to start accessioning texts from the Global Medieval Sourcebook into the Stanford Digital Repository. At the end of the quarter, we had a meeting with metadata and technical staff about the next steps, and I’m excited to start experimenting with getting these texts into the repository and out to the world via WorldCat. This quarter an opportunity arose to co-author a paper with Prof. Kathryn Starkey and Mae Lyons-Penner on the evolution of the project and our current approach, for a special issue of “Seminar” (a German Studies journal) on digital curation. I’m looking forward to having the chance to articulate the considerations that led to the project’s current trajectory.


### French Revolution Digital Archive


It’s been a big quarter for FRDA. Interning at Stanford Libraries, Diane Otosaka migrated the [images portion of the project into a Spotlight exhibit](https://exhibits.stanford.edu/frenchrevolution). Once that was complete, we were able to replace the legacy, custom FRDA site with a [lightweight FRDA landing page](https://frda.sites.stanford.edu/) created using Stanford Sites, with pointers to the image collection and the Philologic-based interface for the texts. We’ve also got more volumes of the Archives Parlementaires to digitize, and I’ve been working with our French librarian, Sarah Sussman, on navigating the digitization / OCR / TEI markup process for those materials.


### Poetic Media Lab projects


Prof. Amir Eshel’s Poetic Media Lab continues to be a hub of DH activity and projects within the DLCL. The fall, I helped edit the technical portions of the prose [on the Poetic Media Lab website](https://poeticmedia.stanford.edu/) about the projects, and worked with a couple of the students on DH postdoc applications involving their projects. I had the chance to talk with students across a number of projects (including [Transit](https://poeticmedia.stanford.edu/transit-human-dignity-and-visa-law-and-policy), [MaPaLiterature](https://poeticmedia.stanford.edu/mapaliterature-map-palestinian-literature), and [DIALOG דִּיאָלוֹג](https://poeticmedia.stanford.edu/dialog-german-hebrew-literary-conversation)) about how to scope these projects to have some sort of feasible short-term output that could be expanded in the future. I wrote a Jupyter notebook for doing German named-entity recognition using Spacy for the "Free Speech, Regulation, and Democracy in the Digital Age” project. I read and wrote feedback on multiple grant applications for the Poetic Media Lab this quarter. For the [Florentine Codex Project](https://poeticmedia.stanford.edu/florentine-codex-project), I’ve been working on trying to access high-resolution page images via IIIF, and create correctly-structured training data for the Transkribus handwritten text recognition software out of the page images and TEI-encoded transcriptions (which has been challenging due to the TEI structure of this bilingual, columnar text, and my XSLT being a little rusty). At the “Fantastic Futures” library AI conference, I used the Florentine Codex as an example both of how we can reuse existing manual transcription work as training data, and of how going from manual, TEI-encoded transcriptions to properly formatted files for Transkribus is not necessarily a straightforward process. Afterwards, I spoke with someone from the Getty where, it turns out, they are also working on transcribing the same text. Prof. Obed Lira at Bucknell will be meeting with the Getty folks in person in March to see if we can arrange a formal collaboration between these efforts.


### Other web-based projects


I continue to await the new centrally-supported web platform options from Stanford Web Services, to get *Entitled Opinions* and *Book Haven* on steadier technical footing. I’m hopeful that something will be available starting this coming winter.


### Multilingual Harry Potter Fanfic


This project has felt like a seemingly endless slog through cleaning three giant, web-scraped data sets before we can actually say anything interesting about them. Steele Douris, Masha Gorshkova, and Antonio Lenzo, and I signed up to give a talk at the Stanford Literary Lab on the project in early December, and having a hard deadline was helpful for getting through it all. What I realized though this process is that the project surpasses the limit of where OpenRefine can reasonably be used, and data cleaning at this scale and complexity really is a job for Python. It’s a testament to how much Python I’ve learned in the last 9 months that I find the prospect of redoing all the cleaning in Python to be tedious but not terrifying — and I even have a rough idea of how to go about doing it. With the caveat that we need to redo the cleaning and analysis before publishing the results, we were able to put together a pretty compelling argument that language and culture (including the cultures and policies of the fanfic archives themselves) play a meaningful role in what gets written in fanfic, even in a single fandom. I’m grateful to Mike Kestemont from the University of Antwerp for his particularly helpful feedback on what we presented. Our next step from here is to revisit the data cleaning using Python, and write up the results for a paper.


### Networked novel


This quarter, I had a chance to learn about the [Networkx](https://networkx.github.io/) Python package while working with Prof. Yulia Ilchuk on [generating lists of network triads](https://github.com/quinnanya/network-triads) from her character conversation network data, along with some Python-based data wrangling to modify the input files she uses with Gephi into something that works better for Networkx. Helping her get started with Jupyter notebooks, even while she was in Ukraine and I was in Palo Alto, was one of my more satisfying accomplishments this quarter.


### Palladio bricks


In a brief gap between major projects, Simon Wiles (one of the developers in CIDR) completely rewrote how Palladio gets packaged and deployed, subbing out the deprecated bower system for webpack. I worked with him to test and debug issues with this new version of Palladio that has more modern technical underpinnings, but no new features … yet. There’s some exciting developments on that front coming in the new year. It’s been a struggle to make progress on the Palladio Bricks documentation. Even though I know there are people who’d like to test and use it, I’ve been pulled along this quarter from one deadline to another, and there hasn’t been a deadline, as such, on the Palladio Bricks documentation. Maybe it’s time to come up with one for the winter or spring.


### Tools for Japanese text analysis


I’ve continued the conversation with Regan Murphy Kat and others on what better digital support for East Asian languages looks like. It’s been inspiring to see what’s been going on more broadly in that area, including a Japanese language text mining workshop at the University of Chicago next June. Locally, she and I put together a proposal for next year’s sprint planning in the Digital Library Systems and Services (DLSS) group, around adding support for searching in our exhibits platform using East Asian languages.


### Machine learning & medieval


I’m still undecided on what I’ll present at CMEMS in the spring — with everything else going on, I haven’t had a chance to explore what I might be able to do with applying machine learning to the Old Novgorod Birchbark Letter corpus (or the watermark catalogs). But I’m hoping that next quarter’s continuation of the “Six Septembers” reading group might give me a more immediate excuse to work on it.


New Projects
------------


### Data-Sitters Club


I went on my first real vacation in four years this quarter, and swore off working on non-English DH for the week. But somehow, I still came home with a new project. [The Data-Sitters Club](http://datasittersclub.github.io/site) is a collaborative project with Roopika Risam, Katia Bowers, Maria Cecire, and Anouk Lang, where we’re working on applying computational text analysis methods to the Baby-Sitters Club book series of our childhoods, and explaining every step of the process in detail — in a chatty, conversational manner reminiscent of the original series. Even though the focus is an English-language series, the methods are largely applicable cross-linguistically. I’m hoping it’ll help people in a situation similar to my own when I started this job, where I was interested in computational text analysis but wasn’t sure where exactly you go from there. This quarter we published two pieces, “[DSC #1: Quinn’s Great Idea](https://datasittersclub.github.io/site/dsc1/)” and “[DSC #2: Katia and the Phantom Corpus](https://datasittersclub.github.io/site/dsc2/)”, and written a proposal for the group to become an official Stanford Literary Lab project. The resulting funding has brought the project back to my home base in non-English languages, by enabling us to purchase Spanish and French translation of some of the books as well. I’m looking forward to reading El club de las canguro (“Kangaroo Club”, the rendering of the Baby-Sitters Club in its Spanish translations) over the holidays.


### Twitter scraping with Python


This quarter, I had the chance to learn about the Twitter developer approval process, their APIs, and how to work with them using Python, thanks to a new project with Prof. Cécile Alduy where I [wrote a Jupyter notebook for scraping tweets from particular user accounts](https://github.com/quinnanya/twitter-user-scraper-notebook).


### JSTOR Data for Research


Exploring new ways of getting data was a recurring theme this quarter. In addition to the Twitter scraping, I’m also working with Slavic grad student Masha Gorshkova on filing a request with JSTOR’s Data for Research. It’s a more complex query than their self-service interface supports, so we’re now in the queue waiting for a response. Once we get all the way through this process, I may write a blog post about the experience.


### Ostrov: Russian radical feminist zine


Stanford Libraries has the full run of [Остров (Ostrov)](https://issuu.com/journal-ostrov), a Russian radical feminist literary zine published between 1999-2014. It’s a marvel: a mix of poetry, essays, translations, letters to the editor, lesbian personal ads, and art — all between split covers that sometimes obscure the nudity in the cover art. I’ve been working with Slavic Librarian Margarita Nafpaktitis on getting these digitized (scanned and OCR’d), and detail-catalogued, as a prelude to using this as a corpus for the Russian NLP research unit (more on that below). We’re interested in the ways that these writers adopt western feminist discourse, versus developing a different, particularly Russian way of talking about related issues. This project is a funny one, insofar as it’s a real project I’m doing, but it’s also something I’m semi-fictionalizing for my course next quarter. Which leads me to…


### Course planning: “Project Management and Ethical Collaboration for Humanists”


The DH project management course that uses a “Dungeons and Dragons” style tabletop RPG as a major pedagogical device is happening next quarter! The students will create characters based on various institutional roles (assistant professor, grad student, undergrad, librarian), and with the premise that the faculty member has received a grant to do — in essence — what Margarita and I are doing with Ostrov, they’ll play through a year in the life of a DH project. It will be a disaster. Then we’ll play through it again, once the students have learned more about project management and collaboration, and hopefully it will go better. For purposes of the game, it doesn’t really matter what the DH project is (though it helps if it involves methods and types of materials I’ve worked with before — which, at this point, includes a lot of different things.) Since it doesn’t matter, I figure that also means there’s no reason not to run with a queer, modern, Russian-language project. Representation matters. While the class is about the general skills that apply to any project, rather than the particular technical methods we’ll (fictionally) be using in the game, I’m planning on doing some optional hands-on activities that students can choose to do in lieu of other homework that will let them actually experience what it’s like to scan and OCR things, proofread OCR, clean and organize the data, etc., and it’s wonderful that we’ll be able to do that with the real-life materials that their fictional project is based on.


### Helping both my organizations


One of the joys of a split appointment (between the DLCL and the Library) is that I can take on small tasks that have a big impact, even when they’re not directly connected to my job. In the DLCL, I held a couple office hours for getting Canvas set up at the start of the quarter, after helping out a couple grad students in passing. I also spent a couple hours using the Stanford Sites Drupal platform to create a DLCL course scheduler web form for instructors to fill out, and reduce the amount of email the department admins have to deal with around course requests.


On the Library side, I did some translation work for some requests that subject area librarian colleagues have for the Digital Library Systems & Services (DLSS) group — around adding CJK searching functionality in the exhibits platform, and supporting collection-level bulk download of digital objects accessioned into the repository. There’s been a long history of understandable frustration on both sides with requests like these, but my unusual background (having spent a decade working in central IT, in groups not dissimilar to DLSS) has made it feasible for me to serve as an interpreter and advocate in both directions.


There’s also been a few non-English requests that have come up this quarter out of History — Persian OCR and Chinese web scraping — that I’ve helped with this quarter.


Workshops
---------


I started the quarter with a Zotero + Tropy workshop for incoming Art History grad students, at the invitation of Art History librarian Vanessa Kam. Our new History ATS, Marie Saldaña, presented Tropy, while I focused on Zotero. It wasn’t without its technical hitches, but was definitely a reminder that Tropy’s Twitter tech support, thanks to Abby Mullen, is absolutely second to none. Later in the quarter, we ran the workshop again under the CIDR workshop series.


At the “Gear up for Data” event in the Library, I ran a workshop on considerations for non-English natural language processing. Finally, at the end of the quarter, I gave a presentation on the text track of the “Fantastic Futures” Library AI conference, talking about [Transkribus](https://transkribus.eu/) for handwritten text recognition for many languages and different types of materials.


Writing
-------


This fall, I’ve been working with Elaine Trehane and Glen Worthey on wrangling together papers from last May’s “Women and Gender Minorities in DH” event. One portion of this edited volume will be “love letters” from women and gender minorities in DH, to pieces of DH scholarship. If you’re a woman or gender minority, and would like to write a love letter to a piece of DH (broadly defined) scholarship that’s meaningful to you, please send it to us! [All the details about the love letters](http://www.dhwogem.org/annotated-bibliography/) are available on the DH-WoGeM site.


I finished up and submitted a tutorial on pre-processing considerations for non-English languages, as part of this summer’s [Language Acts and Worldmaking tutorial write-a-thon](https://www.languageacts.org/) hosted by Kings College London. At the end of the quarter, I got feedback from the peer reviewers, and I’m happy to have just learned that it’ll be published, with a few revisions.


After my non-English DH course last winter, I had a conversation with Adam Crymble (founder of Programming Historian) about writing some more tutorials around doing DH in non-English languages. My first suggestion was that first the site needed a tutorial on Jupyter notebooks, since everything I work with, code-wise, is in Jupyter notebooks, and it’s not entirely intuitive what they are or how they work. I’m really happy to finally have [that tutorial on Jupyter Notebooks published on Programming Historian](https://programminghistorian.org/en/lessons/jupyter-notebooks), co-authored with Tassie Gniady and David Kloster, and using Italian Harry Potter fanfic data wrangling as the example. I needed an example of an R notebook, and I was happy to have managed to put together [an example using some R code](https://github.com/quinnanya/enumerations) from Andrew Piper’s [Enumerations](https://github.com/piperandrew/enumerations), with some R wrangling help from Shawn Graham. The most exciting part of getting this piece published, personally, was seeing the reception: a French translation was underway within a couple days, and a Spanish translation is also in the works.


I co-authored an abstract with Patrick Burns for the Debates in DH 2021 volume, about multilingual DH, and we were both excited to have that accepted.


Around Thanksgiving, I submitted a full draft of my piece, “Non-English DH Means Resilience”, about my non-English DH course last winter, to Debates in DH: Pedagogy. I’m really pleased with how this piece came together, though we’ll see if the coda (which includes a gut-punch for anyone teaching DH) makes it through peer review intact.


Fall is the time to submit (and review) abstracts for DH 2020. I wrote a [guide to writing an abstract for a DH conference](https://digitalhumanities.stanford.edu/guide-writing-dh-conference-submissions) on this blog, and then wrote five different abstracts on five very different topics — submitting two in my own name (tool directories and DH-WoGeM), serving as an additional collaborator on one (Russian NLP), and helping shape two others that colleagues submitted (Multilingual DH and Demystifying ADHO). In addition, I coordinated with [Global Outlook::DH](http://www.globaloutlookdh.org/) (where I’m on the Exec Board) and the [Multilingual DH](http://multilingualdh.org/) group on planning for a pre-conference workshop / tutorial-writing hackathon at DH 2020. I reviewed three abstracts for DH 2020, and five for the [University of Michigan’s Global DH Symposium](http://www.msuglobaldh.org/).


This quarter, I finalized and submitted the proposal to ADHO for DH-WoGeM to become an official Special Interest Group (SIG). I also drafted a SIG proposal for Multilingual DH, which we’ll submit early in 2020. In addition, I continue to work with other members of the Global Outlook::DH exec board, and the ADHO admissions committee, on a proposal for GO::DH to become an official constituent member of ADHO.


Talks and Events
----------------


This quarter, I’ve given talks for two courses: one on Bible fanfic for Prof. Michael Penn’s course on what didn’t make it into the Bible, and a sort of free-wheeling tour of digital humanities tools and methods for the Modern Thought and Literature graduate seminar. The Bible fanfic talk took the same approach as the Harry Potter fanfic project (scraping, cleaning, and analyzing multilingual metadata around a fandom), albeit only with English and Russian: the Bible isn’t an available fandom in the Italian corpus I’ve been working with, probably due to the site’s ban on content that may offend religious sensibilities.


I also gave a talk through the Library’s Trending series about the multilingual DH course I taught, and pivoted from there to making a broader point about how language matters. If it wouldn’t be acceptable to develop a new library technical feature that throws an error whenever it encounters a female author, is it any more acceptable to build something that chokes on non-Latin characters? It was an expansion of a talk I gave at UCLA last spring, with a lot of local context. The timing turned out to be unfortunate (most of the folks from the digital library group were at a conference, leaving me preaching to a choir of librarians), but it’s a talk I can see reworking for other audiences in the future.


For the first time in precisely a decade, I gave a talk at the disciplinary conference associated with my humanities degree (ASEEES — the Association for Slavic, East European & Eurasian Studies), which was held in San Francisco. Between a sick kid and BART not running until after my roundtable started, I ended up missing one of the things I was scheduled for, and was grateful to Andy Janco for filling in. I did have a chance to present on a panel about DH and migration, where I was the weirdo musing about technical migration in this context. Still, it’s hard to describe how inspiring it was to see 25 people come to — and stay in — the room for the entire panel, when 10 years ago the level of interest in DH was nothing close to that.


In December, as mentioned above, my grad student collaborators and I presented on the multilingual Harry Potter fanfic at the Lit Lab. We’ll be largely reprising the presentation in January at CESTA, for theJanuary 21st iteration of their lunchtime talk series.


Working Groups and Organizations
--------------------------------


### DH-WoGeM


With everything else going on, DH-WoGeM “conversations" have had to take a back seat this quarter. I organized one about [parenthood and DH](http://www.dhwogem.org/dh-parenting-2/), this time with a group of people who already had young-ish children. As mentioned above, there’s also the edited volume underway from last May’s event, a DH 2020 submission, and a SIG proposal to ADHO. I’ve also been in ongoing discussions with Zhenya Samoilova, Isabel Galina, and Deb Verhoeven about a global survey of DH and care responsibilities.


Towards the beginning of the quarter, I started up a sort of meet-up group for people who are working on learning Python, R, and other common DH programming languages, dubbed “Danger Noodle Club”. We’ve been meeting more-or-less weekly, right after the Textile Makerspace sessions. I particularly relish the liminal space where some people are still wrapping up their sewing, and other people are getting settled in with laptops — the way that crafting and coding became porous.


### Textile Makerspace


Speaking of the [Textile Makerspace](https://textilemakerspace.sites.stanford.edu/), it continues to flourish. All quarter, we had a group of three undergrads reliably there every Thursday, learning how to make a tote bag, as research for their project to develop an AR app to teach people how to sew. A library conference brought us some surprise librarian visitors, who made some fun “Untitled Goose Game” vinyl stickers with our Cricut machine. I was able to use the Makerspace in direct service of my department by sewing a DLCL t-shirt as a thank-you present for our outgoing chair, Dan Edelstein. At the very end of the quarter, an interview I did last spring was finally published as part of a [round-up of campus makerspaces in Stanford News](https://news.stanford.edu/2019/12/09/makerspaces-at-stanford/), with lots of love for the Textile Makerspace. I’m hopeful that it’ll bring more people to our space next quarter, and perhaps arts funding as well?


### Russian NLP


The Russian NLP “research unit” / working group in DLCL, co-led with Prof. Yulia Ilchuk and Masha Gorshkova, got underway this quarter, with a mix of faculty, grad student, and librarian attendees from around the country, and the world. It’s been a wonderful group to work with, sharing experiences with different tools and libraries as applied to different kinds of Russian texts. While the last couple months got away from many of us (myself included), due to the ASEEES conference and other obligations, it’s been amazing to see what Andy Janco (the Digital Scholarship Librarian at Haverford) has been able to do with training Spacy models and pipelines for Russian as one example of improving the tool landscape for Russian NLP for DH.


### Six Septembers: Mathematics for the Humanist


In December, I wrapped up the first phase of the “[Six Septembers: Mathematics for the Humanist](https://six-septembers.github.io/)” working group, by finishing all six chapters of that book. I’m particularly grateful to my CIDR colleague Peter Broadwell for his help in answering my questions on the material, and translating it into DH contexts. In our last meeting, we talked about where we wanted to go from here to continue to improve our collective understanding of both math and its applications for DH. We decided to spend the next six months on machine learning: both how it ties into the math we’ve learned from “Six Septembers”, and how to actually apply it by building the code up from scratch. Conveniently, it also serves as a good follow up to this December’s “Fantastic Futures” conference.


### Multilingual DH


As mentioned earlier, the Multilingual DH group now has a mailing list and an official SIG proposal that we’ll be submitting to ADHO in January. I’m grateful to Jonathan Reeve (a grad student at Columbia) for his help with Jekyll wrangling and translating the site, after I’d been at an impasse for months, trying to make Jekyll work. After I wrote a [personal blog post apologizing for all the Drupal](http://quinndombrowski.com/blog/2019/11/08/sorry-all-drupal-reflections-3rd-anniversary-drupal-humanists) on the third anniversary of the publication of Drupal for Humanists, I got into a discussion with Alex Gil about my general befuddlement with Jekyll, and he was kind enough to sit down with me and clear up many of my misunderstandings one morning.


### DH Reading Group


I’ve been particularly enjoying attending the grad student oriented DH reading group organized by Mae Lyons-Penner in the DLCL. This quarter we discussed the [Lit Lab pamphlet on “Popularity and Prestige”](https://litlab.stanford.edu/pamphlets/), and Laura McGrath et al’s “[Measuring Modernist Novelty](https://culturalanalytics.org/2018/11/measuring-modernist-novelty/)”. The latter, in particular, opened up a lot of questions about what would happen if you attempt to look at this same metric for other kinds of texts, and I’m hoping to follow up in time for our next meeting. Modeling this kind of DH behavior — we don’t need to just wonder about things with DH, we can actually go off and try them, particularly when code is made public — feels like one of the more significant things I’m able to contribute to the group.


### Global Outlook::DH


I’ve struggled with planning the work for “Around DH 2020”, which will debuting with the start of the year, and the revised quantifying DH infographic, both [projects under the auspices of Global Outlook::DH](http://www.globaloutlookdh.org/around-dh-2020-and-quantifying-dh-infographic-revisited/), but closely aligned with the cause of cultivating DH in the DLCL and other areas of non-English work. The lack of immediate deadlines, and the enormity of both tasks, have both been factors. I do have an approach worked out for Around DH, and a set of questions for each participating project, and I’m hoping to bring together the people who’ve expressed interest in the project at the start of the year. The new Quantifying DH project faces the challenge of too many options and ideas. So much has changed in the DH landscape that there isn’t one canonical anything anymore — not a mailing list, not a Twitter list, not a conference. It points to a much richer landscape, but also a much more troublesome one to try to nail down. I’m hoping for some inspiration and clarity over the holidays.


### ACH


Finally, after a lot of consideration and uncertainty, I accepted a nomination to run for Vice President of ACH (where I served on the board, 2015-2019), and thought through what I would take up as a platform for the position. Given the opportunity, I’d like to focus on cultivating the community of ACH online. The conference this year was inspiring, but at least for those of us on the west coast, it was a stark reminder of all the things going on in US-based DH that are out of reach for us, even as colleagues along the eastern seaboard are able to have an ongoing cross-institutional exchange, without racking up the carbon footprint (or budgetary damage) of flying everywhere. It would be wonderful if our local students could have more venues for presenting their DH work, and participating in dialogue with colleagues from other institutions, but it’s very difficult to arrange something in-person locally, let alone regionally, and I think there are opportunities to do more community-building in online spaces.


Colleagues
----------


Marie Saldaña started in September as the new ATS for History. But shortly thereafter, it was with both surprise and sadness that CIDR bade farewell to both Glen Worthey (after 20 years, to Hathi Trust Research Center at UIUC) and Scott Bailey (after 3 years, to NC State University Libraries) this quarter. I’ve only been at Stanford 15 months, but that still leaves me the most long-standing person in a DH role in Stanford Libraries. Particularly with the public perception of Stanford DH being so closely tied to people who are no longer here, and the projects they created, it feels like we’re on the brink of a turning point. At CIDR’s strategic retreat last week, it was heartening to hear a reaffirmation of the Library’s support for DH. Suffice it to say, I’ll be doing a lot of thinking over the break about where Stanford DH might go from here, as we start a new decade.


As a closing thought, this entire year — but particularly this last quarter — has reminded me of the many ways in which digital humanities ultimately comes down to people. It's a praxis that, in so many cases, is ultimately centered on people, even though the technology is more likely to get top billing in the discourse. I feel very fortunate to work with many wonderful people on all these projects, at Stanford and beyond, and to have the opportunity to bring students into those communities. I'm looking forward to seeing where it all goes in the new year.


