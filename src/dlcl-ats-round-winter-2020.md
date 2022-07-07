---
layout: templates/article
title: "DLCL ATS round-up, winter 2020"
author: Quinn Dombrowski
date: 2020-03-23
post_images:
  - ../post-images/dhrpg-lastday.jpg
---

It is a strange time to be writing my quarter-in-review blog post. The quarter is over (according to the calendar we started the year with, it’s spring break right now) but I feel like a normal sense of time is one of the things that’s already started to dissolve, and the shelter-in-place order in the Bay Area has only been in place a week.


February’s monthly blog post was supposed to be a reflection on the [Russian NLP hackathon that we held on Valentine’s Day at CESTA](https://dlcl.stanford.edu/news/dlcl-hosts-hackathon-computational-criticism-russian-literature). I’d still like to write that reflection, but I need to think it through some more; the conclusions I’d reached assume a level of freedom of time and travel that we might not have back anytime soon.


In the current working conditions (and I’ve [written about my own, here](http://quinndombrowski.com/blog/2020/03/21/working-conditions)) there’s a balance to be struck between maintaining standing meetings, monthly blog post schedules, and other structures that arose under very different circumstances, and rethinking everything from the ground up, at a point where decision fatigue (and straight-up fatigue) are major factors. Tentatively, I’m inclined to try to keep up my monthly blogging. If nothing else, I’ve always seen these quarterly round-ups as an important form of accountability to myself, my bosses, and my communities, given the very unstructured nature of my job.


### Teaching


While I’m anticipating that my teaching quarter will shift to autumn starting next academic year, I taught a new course this winter: “Project Management and Ethical Collaboration for Humanists”. I expect to teach it in alternating years with my other course, “Digital Humanities Across Boundaries”, AKA Non-English DH. This new course covered a lot of ground, including the labor conditions of digitization, what goes into getting tenure and alternative structures of promotion, Gantt charts and how to use them, and what alt-ac careers look like in practice. We spent half of our classroom time discussing readings, and the other half playing a simulation of a year in the life of a DH project — as a Dungeons and Dragons-style tabletop role-playing game, complete with character sheets and dice. I’d hoped that we’d be able to play through the game twice, learning from mistakes made in the first round. Instead, having 8 regular attendees, each with their own character, meant that we weren’t able to get through more than one month of game time per class — sometimes less. Even so, it was an experience that will stay with me for a long time, and from the feedback I’ve received from some of the students, it may have accomplished more than I even imagined.


The [syllabus and other class materials](https://github.com/quinnanya/dlcl205) are available on GitHub, and one of my small goals over the next few weeks is to update the RPG guidebook to reflect some of things I discovered that I hadn’t initially thought about when designing the game (e.g. the original version of the handbook  didn’t have a character skill for teaching).


While the weekly prep for this course was trivial in comparison to last year’s course (where I was writing technical tutorials for multiple languages for much of the quarter), I was still surprised at how much time teaching and teaching-related activities took up. My goal of continuing to make progress on all the DLCL collaborative research projects while also teaching was completely unrealistic. The quarter was largely a scramble from one deadline to another, with every expectation of catching up on everything else as soon as the quarter ended. Suffice it to say, I’m now re-evaluating those expectations as well. Here’s where things currently stand, as of the end of the quarter.


### Existing Projects


#### Global Medieval Sourcebook


The big meeting we had planned with the Stanford Digital Repository folks about the new shape of this project (i.e. accessioning texts into the repository, and adding metadata to make them findable within our own library catalog and WorldCat) had to be postponed. It’s now scheduled for April 20th. Dates more than a month out have always had a sort of imaginary quality to them, but now more than ever it’s hard to fathom what things will look like by then. Circumstances may well push it back further. But in the meantime, I managed to work through all of the tags used by the current Global Medieval Sourcebook, aligning them to Library of Congress Subject Headings. This was [an adventure](https://twitter.com/quinnanya/status/1234534180840542208), leading to discoveries such as the fact that there’s no subject heading for “evil”: your only choice is “good and evil”. More immediately, we’re trying to write a paper on the project for the Germanic Studies journal Seminar. The writing was derailed by more immediate deadlines during the quarter, and then all the chaos at the end of the quarter, but I’m hoping to be able to spend some time fishing up my piece in the next few weeks.


#### French Revolution Digital Archive


The relaunch of FRDA using a combination of a [Spotlight exhibit for images](https://exhibits.stanford.edu/frenchrevolution), a [Philologic searchable-text instance](http://sul-philologic.stanford.edu/philologic/archparl/), and a lightweight landing page connecting all the pieces, surfaced large user communities that had been using FRDA in a very different way than the faculty members behind the project, whose needs drove the reformulation of the site. While sophisticated search queries are now better supported on the new site, the interface is more awkward for users who just want to flip through and read the text. French and Italian librarian Sarah Sussman has been fielding queries from these users, and we’ve worked together on trying to develop documentation to help bridge the gap between those kinds of use cases and what the new site can offer.


#### Poetic Media Lab projects


This quarter, I worked with some of the Poetic Media Lab student (and recent-graduate) collaborators on applying for postdocs, and was delighted to learn that one of them received a prestigious four-year fellowship that will enable her to continue working on her project and develop parts of it into a book. I’d hoped we could meet in person at this year’s convocation, but it’ll have to wait for another time. Still, I’m grateful to have had a chance to meet another long-distance Poetic Media Lab collaborator in person while she was in town, and show her around the Textile Makerspace.


My work on the Poetic Media Lab projects has largely been on hold this quarter, other than corresponding with partners at Bucknell about putting together training data to attempt to train a Transkribus model for the Spanish and Nahuatl hands of the [Florentine Codex](https://poeticmedia.stanford.edu/florentine-codex-project). Thanks to Diane Jakacki’s brilliance with XSLT, I have the data I need — now to just sort through renaming all the files properly, and actually try to train a model.


#### Other web-based projects


Apparently Web Services was still on track with their timeline for finding a vendor for supporting WordPress sites as of earlier this quarter, but we’ll see how the COVID-19 situation impacts things. Such a service would be the ideal long-term infrastructure for [The Book Haven](http://bookhaven.stanford.edu/) and [Entitled Opinions](http://entitledopinions.stanford.edu/). This quarter I also met with the Entitled Opinions team about getting all of their content accessioned into the Stanford Digital Repository, which is on my to-do list now that the quarter is over.


#### Multilingual Harry Potter fanfic


This quarter brought two more opportunities to present on this project: once at CESTA (with Steele Douris and Masha Gorshkova) for the broader Stanford DH community, and one at the University of Virginia, for the Slavic department. While I haven’t been able to make more progress on the data cleaning (again, due to teaching), the UVA talk gave me an excuse to start looking into Archive of Our Own (AO3) as another point of comparison. AO3 is a more recent fanfic archive, and much better supported in terms of existing web-scraping scripts. While I only had a day or so to work with it before the talk, I found a few interesting things in comparing it to [fanfiction.net](http://fanfiction.net/) — notably, that AO3 is more Anglophone in its Harry Potter fanfic, but with a very different distribution of non-English languages. Spanish, French, Portuguese, and German appear *much less frequently*, and Russian, Chinese, and (to a lesser extent) Italian appear more frequently.


#### The Data-Sitters Club


This autumnal-vacation Anglophone project has taken a turn towards the multilingual with the acquisition of French translations of “The Baby-Sitters Club” books, from Quebec, Belgium, and France. Together, Lee Skallerup Bessette and I wrote two “multilingual mysteries” this quarter: one on [metadata](https://datasittersclub.github.io/site/dscm1/), and one on [French named-entity recognition](https://datasittersclub.github.io/site/dscm2/). I’ve been scanning and OCRing the French translations we’ve purchased, but wasn’t even halfway through them when I left campus for the last time for … a still-indefinite span of time. They’ll be waiting in my office, whenever I get back.


To my surprise, the Data-Sitters Club was nominated for two [DH Awards](http://dhawards.org/) this year: Best Series of Blog Posts and Best Use of DH for Fun. Figuring we’d have better odds with fun than blog posts, I started posting ads for the project on Twitter, using remixed old book covers, ads, and other retro BSC content. And it seems to have worked! We won Best Use of DH for Fun (in a tie), and got third place (also in a multi-way tie) for Best Series of Blog Posts. You can [check out all the ads here](https://datasittersclub.github.io/site/dhawards2019).


Perhaps more satisfying, even, than winning the DH Awards was when Dan Sinykin taught the Data-Sitters club as part of his [Intro to Digital Humanities course](http://www.dansinykin.com/teaching.html) at Emory, and we heard from them on Twitter. Much like with the DH RPG, it’s an incredible feeling to discover that one of your wild, random projects has worked, beyond even what you imagined possible.


#### JSTOR Data for Research


Shortly after the quarter started, Slavic grad student Masha Gorshkova and I both signed a contract with JSTOR’s Data for Research to obtain a bulk download of OCR’d texts potentially relevant to her research. I was surprised at how easy and straightforward the process was. Less straightforward is the question of what do we do next, now that we have the texts. Fellow Data-Sitter Anouk Lang was wonderful about answering questions and offering suggestions, and I suspect her next Data-Sitters Club book on AntConc, coming out soon, will be a helpful resource as we try to sort things out.


#### Ostrov: Russian radical feminist zine


I spent a lot of imaginary-world time on this project, since it was the project we “did” in the DH RPG. It was wonderful to have an imaginary project based on real materials that the students could look at, and even have a chance to try to scan one volume on a real flatbed scanner. All the imaginary-world time spent creating metadata, building some sort of web interface, and doing text analysis sadly did not translate into the real world, and between one thing and another we got nothing done on the real-world version this quarter. But as a silver lining, it gives us a great virtual co-working project to chip away at together, and we’ve set up a time every week going forward to work on it over Zoom.


#### Palladio Bricks


I set myself the goal of trying to have some preliminary documentation for Palladio Bricks ready by the end of the quarter, but got tripped up over the fact that the main Palladio app has been updated to address some deprecated dependencies (thanks to my CIDR developer colleague Simon Wiles), but the individual brick components have not yet. I’m reluctant to write documentation for things that I know will change soon. While I was visiting the Scholar’s Lab at the University of Virginia, we came up with the idea of a DH developer “code-op” (like a co-op) where each DH development group could host a one-day hackathon for all participants, and everyone would pitch in on a particular project. Palladio seems like a great candidate for piloting that idea in the near future.


#### Other projects


No new developments of note this quarter on Prof. Yulia Ilchuk’s networked novel project, but the Russian NLP hackathon (more on that below) provided an opportunity to brainstorm some ideas for tools we could develop that might shed new light on this work. Also, nothing of note around tools for Japanese text analysis, though I got to put my childhood katakana skills to the test in locating the “download” button in a Japanese corpus interface as part of a web scraping consult. I also haven’t had any time at all to think about what I’ll present at CMEMS in the spring — if there is CMEMS in the spring given everyone’s remote working conditions? Perhaps my contribution may end up being simply supporting the group meeting online nexts quarter.


### New projects


I was too busy teaching this quarter to accrue many new projects. I offered to experiment with some computational approaches to analyzing translations, for a project Héctor Hoyos is working on aboutMichael Kohlhaasby Heinrich von Kleist. Due to various data-acquisition delays, and then the world unraveling at the end of the quarter, it’s taking longer than I anticipated, and the graduate student who’s done the comparative work manually has finished her analysis before I’ve even succeeded in aligning my texts. (Ah, digital humanities!) But I’m really curious about what I might be able to find, and even if it takes too long to be useful for this project, I’d like to have a good example of how DH can be useful to translation studies, and ideally, a Jupyter notebook to go with it.


This quarter — albeit with some delay — I launched [Around DH 2020](http://arounddh.org/) through Global Outlook::DH, which highlights one non-English DH project somewhere in the world every week, through an interview with a person affiliated with the project. The goal of this effort is to raise the visibility of DH work in languages other than English, and I’m hoping that it also opens up opportunities for collaboration.


I had the chance to meet with Alexander Key about  the possibility of making DH options more visible and accessible to students pursuing the honors program in the DLCL, especially Comp Lit. It’s hard to know how feasible that would be to roll out this coming fall, given the uncertainty around everything undergrad-related at the moment, but I look forward to future discussions and planning in the coming months.


### Workshops


I was scheduled to co-teach an OpenRefine CIDR workshop with Simon Wiles, but I was out sick for a week at the end of January with something flu-like, and couldn’t make it (or do much besides sleep, sweat, and shiver). It’ll be nice to get back to teaching workshops, though I’m not sure yet when that will be, or what it’ll look like. Navigating which services we can offer virtually, and how, is high on the list of CIDR priorities right now.


While it wasn’t exactly a workshop, this was my first year experiencing the prospective student campus visit in DLCL, which took place the week before everything began to shut down and go online. I held office hours for DH-interested students, along with a Textile Makerspace session one afternoon in case any of our guests wanted a creative break from all the interviewing. In what has been one of the most fun assignments I’ve gotten from my department, I made runners for all the tables at the interdisciplinary dinner, each connected to that table’s “theme” (e.g. medieval, digital humanities, poetry, pedagogy, etc.)


### Writing


This quarter, Patrick Burns and I wrote our short chapter on multilingual DH for the Debates in DH 2020 collection, and I did some extensive revisions of my chapter on the non-English DH class for Debates in DH: Pedagogy. The original coda, as expected, did not make it through peer review, so I published an expanded version of it on my own blog, entitled “[The Stakes of Multilingual DH in the United States](http://quinndombrowski.com/blog/2020/03/13/stakes-multilingual-dh-united-states)”, which incorporates some additional material from a talk I gave at the Scholar’s Lab’s Feminist DH symposium in February.


My tutorial from last summer’s [Language Acts and Worldmaking](https://www.languageacts.org/) tutorial write-a-thon hosted by Kings College London is in final revisions, and should be published soon.


Along with colleagues from a High-Performance/Research Computing for DH group I used to run, I put in an abstract over the holidays for the Computational Humanities volume of *Debates in DH*, but haven’t heard anything yet. I’ve had a few more abstracts accepted recently: one about collaboration and failure for Heather Froehlich and Kim Martin’s "Revealing Meaning: Feminist Methods in Digital Scholarship” edited volume, and another for Alex Gil and Roopika Risam’s DH Quarterly special issue on minimal computing, which will raise questions about how widely adoptable minimal computing technologies can be without better tooling or at least much more detailed documentation.


We extended the deadline for “love letters” from women and gender minorities in DH, to pieces of DH scholarship, for the edited volume coming out of last year’s “Women and Gender Minorities in DH” event. Realistically, we’ll probably extend it again — I suspect March is a lost cause for everyone. And I still need to write up my talk from the event as well.


I finished and submitted the “Multilingual DH” ADHO special interest group proposal this quarter, which garnered 39 signatures from scholars around the world by the time it was submitted. It’s the second SIG proposal I’ve sent in this year (after DH-WoGeM), and it seems unlikely that any decision will be made before the DH 2020 conference in July — if the conference ends up happening, and there’s a quorum of CO representatives attending. Meanwhile, we’re also in the process of developing a DARIAH working group proposal for Multilingual DH, as a kind of follow-up to the “DARIAH Beyond Europe” event held at Stanford in 2018, and as a way to draw on the strengths, connections, and resources of two different kinds of organizational infrastructure.


I submitted a proposal for a short paper / presentation at the Digital Humanities Summer Institute (DHSI) weekend workshop on project management, talking about the course I taught this quarter. Even though DHSI has been canceled for this year, the workshops are still going to be held virtually, and it’ll be great to have a chance to share some reflections on this year’s course.


Finally, I’m happy to say that DH 2020 didn’t break my (freakish?) acceptance streak at the DH conference. All five of the abstracts I wrote/ghostwrote were accepted. We’ll see if any of them happen.


### Talks and Events


In addition to the CESTA and UVA presentations on Harry Potter fanfic this quarter, I had my first experience with a Twitter conference, presenting on Multilingual DH at the DHARTI (Indian DH organization) [Twitter conference on Innovating for DH in India](https://dhaindia.wordpress.com/dharti-twitter-conference-2020/). It’s a conference modality I’ll be trying again in the near future; I was invited to present at “[DH in the Time of Virus](https://www.dariah.eu/event/twitter-conference-dh-in-the-time-of-virus/)”, organized by APOLLONIS (the Greek Infrastructure for Digital Arts, Humanities and Language Research and Innovation) and co-ordinated by the Athena Research and Innovation Center, on April 2nd. (I’m very much looking forward to the talk, tentatively entitled “Getting Serious About Fun”, even though I’ll be tweeting at 4 or 5 AM.)


I co-presented with Yulia Ilchuk and J.D. Porter at the Literary Lab this quarter, about our “Translation” project (looking at distinctive features of short stories translated into English from other languages); we’re hoping to make some progress on putting together a paper based on the project’s current state.


All the Academic Technology Specialists in CIDR gave the first all-virtual presentation of the “Concierge” library series, where people from less-well-understood groups in the library talk about their work and how it can connect with the rest of the library.


I virtually attended and [live-tweeted](https://twitter.com/quinnanya/status/1238257085806231553) a wonderful Berkeley Center for New Media event on [Feminist Open Access and Internet Publishing](http://bcnm.berkeley.edu/events/22/history-theory/3207/online-feminist-open-access-and-internet-publishing) on March 12th. I’d been planning on arranging for transportation to get Stanford colleagues to Berkeley and back when the event was supposed to be held in person, but I was happy that everyone who was available could just call in.


I put in a proposal for giving a talk at Stanford WebCamp, reflecting on the work I’ve been doing to think through sustainable infrastructure for DLCL’s web-based DH projects, and the way that is — and isn’t — compatible with a minimal computing toolset. The proposal was accepted, but my talk is scheduled for this Friday during hours that I can’t work on account of running a kindergarten/preschool at home, and my work hours that day are already filled with online course support, so I’ve had to withdraw.


I was delighted to be accepted to the “[Building Legal Literacies for Text and Data Mining](https://buildinglltdm.org/)” NEH-funded institute hosted by UC Berkeley this June. Thorny, multi-national legal questions are a mainstay of the work I’ve been doing, and I’m still very excited to do it, even though it was just announced this morning that it’s going to be held entirely online.


The [Feminist DH symposium](https://scholarslab.lib.virginia.edu/events/event-2020-02-28-feminist-dh-uva-symposium-3/) at the Scholar’s Lab at the University of Virginia was one of the highlights of the quarter for me: a chance to catch up with old friends and finally, for the first time, see the world-famous Scholar’s Lab right before its renovation. The other speakers, Gabriela Baeza Ventura and Carolina A. Villarroel, are doing amazing work on recovering Spanish-language literature, newspapers, manifestos, and other compelling documents published in the United States, and I wonder what opportunities there might be for students in the DLCL to collaborate with them on a “Spanish NLP” effort modeled after what we’ve done with the Russian NLP research unit this year.


My talk at the symposium, “The 2040 Plan”, was partly an abbreviated version of these write-ups (looking at some of the things I’ve done recently, and whether they worked or not), and partly a reflection on the challenges we’ll see more of between now and 2040 — and what kind of projects and collaborations can help us make it through. Already, it’s a talk that feels prescient, even though at the time — less than a month ago — there was still a solid mental wall between me and how things might change in my own day-to-day life as fall-out from the accelerating number of COVID-19 cases in the Bay Area. It meant a lot to be invited to the symposium, and to be able to make the trip and meet in person with colleagues I usually only see online. It means even more now, knowing that it may have been my only trip outside the Bay Area this year.


### Working Groups and Organizations


#### Stanford DH Community


My fellow DH colleagues in CIDR and I started running a monthly series of consulting hours, lightning talks, and social hour at CESTA for the broader DH community. We managed to hold two of our three planned events this quarter, before things started going virtual. It seemed got a fair amount of initial traction; now we'll have to face the challenge of how to reconceptualize it in an online environment.


#### DH-WoGeM


I tried to hold the quarterly "Parenting and DH" [DH-WoGeM](http://www.dhwogem.org/) call in January, but only one person came. Since then, I haven’t had much time to organize anything, but with April approaching, I may try another "Parenting and DH (and COVID-19)” call, where everyone is welcome with however many kids they have at home.


#### Danger Noodle Club


My Python co-learning meet-up group, Danger Noodle Club, was one thing too many to try to schedule this quarter. Things kept coming up, and we eventually agreed to just re-convene in spring. Now it may play a bigger role than I imagined in trying to maintain — however tenuously — at least one corner of the campus DH community while everyone is remote.


#### Textile Makerspace


The inclusion of the Textile Makerspace in a [Stanford News article on campus makerspaces](https://news.stanford.edu/2019/12/09/makerspaces-at-stanford/) late last quarter continued to pay off, and I feel like this was the quarter where the Textile Makerspace really solidified as a space and organization. Having regular weekly hours (Tuesday, Wednesdays, and Thursdays at lunch time), rather than a set of specifically-scheduled dates, definitely helped, as did having more people around to cover shifts. (We had two undergrads offer to open it for more, non-lunch, hours, and enthusiastically accepted their offer.) German Librarian Kathleen Smith brought in a loom towards the end of the quarter for us to try out weaving, and the quarter’s creations included a giant Pusheen pillow, multiple shoulder bags, the beginnings of an art quilt, numerous stickers, and a few pairs of toddler pants. Of all my on-campus work, I’m saddest about the necessary shutdown of the Textile Makerspace (which doesn’t translate well into virtual alternatives) just as things were starting to really flourish. The departure of almost all the undergrads from campus means it’ll be fall, at the earliest, before we have a chance of getting back to where we were.


#### Russian NLP


This quarter, we had the culminating event for the Russian NLP Research Unit in the DLCL: a hackathon that brought three participants in the virtual working group to campus, along with Prof. David Bamman from UC Berkeley. I put together a [write-up of the event on the DLCL website](https://dlcl.stanford.edu/news/dlcl-hosts-hackathon-computational-criticism-russian-literature). I’d meant to follow up on the ideas and work at the hackathon after returning from the Scholar’s Lab trip, but then the world started falling apart. I hope to have a chance to regroup and think through next steps soon.


#### Six Septembers: Mathematics for the Humanist


It took until early March, but we finally kicked off the second round of the [“Six Septembers” reading group](https://six-septembers.github.io/), which is scheduled to run through the end of 2020. This time, we’re working through understanding neural networks — both mathematically and practically. There’s a schedule on the webpage, if you find yourself with time on your hands now and would like to catch up and join us in April.


#### DH Reading Group


The DH reading group for grad students was on hiatus during winter quarter, and it seems unlikely that it will resume this academic year under the current circumstances.


#### ACH


As mentioned in last quarter’s round-up, I agreed to run for VP/President-elect of the Association for Computers and the Humanities (ACH), the US-based DH organization. To my surprise, I discovered I was running against my fellow Data-Sitters Club member Roopika Risam. The election window was supposed to wrap up yesterday, but has now been extended until March 30th — and along with it, my series of Baby-Sitters Club book cover remixes that [support voting for either of us](https://twitter.com/quinnanya/status/1238511389397811200).


### Moving forward from here


For the next two weeks, at least half my working time will be going towards supporting faculty and lecturers in my department as they figure out what they’re going to do for their spring courses. It’s something I’ve done before; I worked in “Academic Technology” (which included instructional support) for six years at the University of Chicago, ultimately leading the IT / instructional design part of the team that developed some of the university’s first MOOCs, back when that was a huge thing. I’m very happy that my job, under normal circumstances, is focused specifically on research support, but in a crisis there’s no question about helping out. Hats off to everyone in the Center for Teaching and Learning who’s been working non-stop for weeks (including answering some questions from me when I’ve gotten stuck when trying to support faculty in my department). What’s left of the time I have will go towards catching up on projects that have been on hold during winter quarter while I was teaching.


After that, we’ll see where people are at, who needs support, what that might look like, and how many kids are still attending my home-preschool. But as we talked about in our “Concierge” presentation in the library, there’s never been a way to describe a typical day in the life of an ATS: every day is something different. So as spring quarter comes, I’ll be sorting through challenges they arise, same as always, even as the number of uncertainties skyrockets.


