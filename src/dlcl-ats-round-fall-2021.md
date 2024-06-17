---
layout: templates/article
title: "DLCL ATS round-up, fall 2021"
author: Quinn Dombrowski
date: 2021-12-16
post_images:
  - ../post-images/51707706461_87e3368a6c_k.jpg
---

This fall was not at all what I planned. The DH Role-Playing Game class I'd spent 18 months planning for and thinking about only had one student enroll. That bad surprise (which will, in its time, find its way back into a future iteration of the DH RPG guide) was soon followed by the announcement of a major library reorg that moved me and my group into a new AUL-led group, Research Data Services. As part of this process, I was able to arrange for a second dotted-line report back to the Humanities & Area Studies (HAS+) librarian group that I'd informally been joining for meetings on and off during the pandemic. Officially being part of HAS+ has meant invites to more library meetings, but getting that perspective has been eye-opening and I can honestly say it's helped me do my job better. Having a joint position with a department has put me on the periphery of the library, which means a lot of how things work has been a mystery. This includes how things get prioritized for funding; I hadn't appreciated how being both "digital" and "humanities" represent different kinds of power in the library. Particularly as the new Research Data Services unit, which concentrates a lot of the "digital" power, takes form, I've been thinking a lot about how to bring others in and share the power and resources, and be mindful of the labor implications (often for other people) of any grandiose data plans.


This has become a recurring theme in a lot of the things I've been writing about DH lately. DH, fundamentally, comes down to how we choose to allocate labor.


Here's how I've spent my quarter.


### Existing Projects


The relaunch of the Global Medieval Sourcebook was pushed back to January, and this quarter has involved an iterative process of tweaks to the new static website and the gradual addition of the remaining content. An [article on the Global Medieval Sourcebook](https://utpjournals.press/doi/full/10.3138/seminar.57.3.1) that Mae Velloso-Lyons, Kathryn Starkey, and I wrote on the project came out in the journal "Seminar" (hit me up if you need access). I finished up the documentation for the site, in the spirit of Miriam Posner's classic "[How did they make that?](https://miriamposner.com/blog/how-did-they-make-that/)", and the project was used as a model of a streamlined, static-site approach to creating simple websites for CESTSA projects.


From time to time, I've continued to tweak various departmental-support websites (like the course poster request system), and serve as a translator and guide when cryptic and confusing emails come in from central IT.


Progress with getting materials digitized using Transkribus has been slow, but it was a hit when I demoed it for the Comp Lit honors thesis class this quarter, and it seems to have lit a spark for a couple other scholars who I've gotten set up with it. Among my more hopeful ideas for the Library's new Research Data Services group are thinking about how to connect Special Collections in via things like handwritten text recognition. But it, like all things, will take time.


The Data-Sitters Club published two "books" this quarter, [DSC #11: Katia and the Sentiment Snobs](https://datasittersclub.github.io/site/dsc11.html), and [DSC #12: The DSC and the New Coding Language](https://datasittersclub.github.io/site/dsc12.html). The first is an in-depth look at sentiment analysis, where we tried multiple tools and concluded that it sounds like a great idea, but unless you're looking at reviews or other opinion pieces where the point is to convey good / bad, computational sentiment analysis as it currently exists lacks the nuance you need for it to give you anything meaningful. Layering fancy visualizations over it may hide some of the mess, but it's still too much mess to be valuable. In DSC #12, we shared our own "coding stories", and I talked a bit about working on learning R starting from a base of Python. It seems to have really struck a chord with people who work in various languages (I had to add a footnote contextualizing a snarky comment I made about LaTeX), and we added a "Dear Reader" section at the end for the stories other people shared with us.


Multilingual Harry Potter fanfic, which has been on hold since March 2020, has sprung back to life. While bringing the whole team together synchronously has been a challenge, individual chance encounters with everyone on the Harry Potter team has led to the decision that we'll try to actually write something up for that project. My Python skills have improved considerably since I last worked with this data in 2019, and I've written much more sophisticated web scrapers that produce much cleaner data. I've successfully re-scraped most of the data and I'm hoping the cleaning will be trivial enough that the pieces will fall together for a DH Unbound conference proposal in January.


### New Projects


This quarter has been an exciting one for new projects. Visiting Slavic faculty member Kat Hill has given me an excuse to get into exploring computer vision for the first time. My flailing about with OpenCV (which inverts the red and blue channels of images by default) even led to a new fabric design that will debut in some dress next quarter. [Her project](https://digitalhumanities.stanford.edu/soviet-periodicals) led me to wrangle together some code for detecting pixels within a specified color range, then calculating what percentage of the total pixels are in that range. I figured out how to do that for an individual image, and could turn that into a loop, but a conversation on Twitter with William Mattingly (who had created a Streamlit app pipeline for IIIF images, with an eye towards OCRing them) made me think bigger. He was kind enough to wrestle my code into his Streamlit IIIF processing framework and added an option for uploading a single image, creating [an app](https://share.streamlit.io/quinnanya/color-detection/main/measure_color.py) where you can submit a IIIF manifest or upload an image, define your own color ranges or use a pre-baked one, and see the % of pixels of a specific color for each image in the manifest. We were able to debut it as a demo as part of Kat's ASEEES panel in November.


My visit to the Comp Lit honors thesis class led to a short-term project helping a student access and process some of the library's data collections for a final paper. It was a moderatechallenge for me, even as someone reasonably familiar with this data set (the Chadwyck-Healey poetry collection); I don't know how she would have done it on her own, though. Certainly food for thought as we consider what Research Data Services might be able to do, concretely, to make data more accessible.


I had the opportunity to work with Cécile Alduy on text analysis of right-wing French political writing. It was a good opportunity to refine some of my named-entity recognition code for French, and expand my understanding of different methods for comparing texts, and when they should be used (e.g. depending on corpus size and nature). I'm grateful, as always, for the generosity of DH colleagues around the world who chime in with clarifications, suggestions, and help. I would not be able to do my job without the distributed network of DH Twitter folks. (Check out [this thread with my TF-IDF question and the responses](https://twitter.com/quinnanya/status/1450827419644936200) for an example.)


While I've spent time at the Literary Lab since I started at Stanford, this quarter I tried to make a push to get more of the computationally-interested grad students directly involved in projects under development. That didn't pan out as I'd hoped, but I've continued to sit in on the development of one of the Lab's classic large, amorphous projects that iteratively takes shape, and I've learned a lot from the process. The most striking thing is the extent to which metadata shapes what is possible with large data sets. I was already a big metadata fan, but even I underestimated it. Even as more non-English journals are digitized, metadata at the issue level isn't enough to be able to do the kind of work the Lab has been doing on this project, which relies on article-level metadata. Doing that kind of work as part of digitization is time-consuming, expensive, and dependent on linguistic and cultural expertise -- it's no surprise that it's available in an expensive vendor-provided data set, and not a library DIY undertaking like when we digitized the full run of a Russian feminist zine in 2019.


Relatedly, I've been working on gathering metadata and building corpora that I hope will eventually span the languages of the DLCL. The Library has recently acquired a large data collection from the New York Times, and this quarter I tried to extract the New York Times bestseller lists from 2000-2020. It was more of an adventure than I expected; the format for structuring this data changed 2-3x over the course of two decades, in ways that required writing new code for each. In parallel, I've been calling up these retroactively-bound issues of "Livres Hebdo" from off-campus storage, scanning them, and trying to use the HTML output of my OCR software (ABBYY FineReader, always) to parse the listings into something I could use to sample from for corpus-building. Russian has been more challenging, but I've found various lists online that I've been able to scrape.


I've been working on other corpus-building projects, as well -- trying to get a computation-friendly version of everything on the Slavic and French reading lists. It's been a mix of searching the web, and scanning and OCRing things. I'm hoping in the winter, when both our new Slavic grad students will be on campus, I'll be able to experiment with my "computational reading list" idea, to give early-stage grad students some exposure to DH methods (including what I've come to refer to as "stealth DH", using the power of lemmatization for leveled-up Ctrl+F searching and Voyant) in a way that supports their prep for quals.


Finally, I've been talking with grad student Nelson Endebo about what I can do in my role to support grad students who want to focus on non-academic jobs, particularly in the tech sphere. There's some precedent within my division (e.g. BiblioTECH in 2013, as David Palumbo-Liu described to me) but there hasn't been a lot of activity on that front in recent years. As a starting point that could serve students with a variety of different goals, I've signed up to teach a DH Practicum independent study this quarter -- and perhaps every quarter that I'm not teaching one of my main classes. In some sense, it's just a little more paperwork on my end for the job I already do, but on the student's end, it buys them some space to focus on a project that interests them.


### Writing


I haven't written much new this quarter, though I did recently put in an abstract for "Debates in DH: Critical Infrastructure Studies". I've done some edits for two pieces for the Bloomsbury Handbook of DH on coding and on multilingual DH, and I'll soon be finishing final edits for "Debates in DH: Computational Humanities" and "Debates in DH: Futures of Graduate Education".


### Talks and Events


I didn't give any talks this quarter, but we did hold two as part of our "[Animal Crossing: New Digital Humanities](https://digitalhumanities.stanford.edu/acndh)" series: Hannah Gunderman in October on "How to Avoid a Research Data Management Nightmare" and Ravynn K. Stringfield in November on "Thinking Like a Digital Black Feminist".


Looking ahead, in the last couple weeks, I've put in three 2022 conference proposals related to looking at explicit references to nationality in a large corpus of 21st literature for young readers that I've been working on for the last year, as an extension of the Data-Sitters Club.


### Other Things


I did a four-week workshop on how to use HathiTrust resources, which was a gap in my knowledge that had gone on far too long. I'll be writing up what I learned in a Data-Sitters Club book, and experimenting with putting it to use next quarter.


Towards the end of the quarter, I cleaned up the Textile Makerspace and attempted a soft-reopening, which ran into various scheduling complications. I'm hoping to have regular hours next quarter, and there are definitely more exciting announcements in the works there for 2022.


Finally, to end on some kind of celebratory note, one of the big developments of this quarter was the Librarian of Congress [granting a petition for an exemption to the DMCA that would make text and data mining possible in new ways](https://ach.org/blog/2021/12/08/ach-advocacy-leads-to-new-opportunities-for-text-and-video-analysis/), with a lot of caveats and in limited circumstances. Those caveats and limitations are enough to throw a wet blanket on my optimism for the usability of the exemption as it stands, but at least it paves a path forward for further advocacy.


I'm surveying my office before I leave today, hoping we'll all be back at the beginning of January as planned, but not wanting to leave behind anything I couldn't stand not having access to for a while. We'll see what the new year brings.


