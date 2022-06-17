---
layout: layouts/article
title: "Brandes in translation: multilingual corpora at the Digital Brandes Hackathon"
submitted_by: Quinn Dombrowski
submitted_at: 2019-05-23T21:40:57-07:00
---

What do you do when you're invited to a hackathon around a text in a language you can't read? In keeping with my tendency to navigate difficulty by means of additional complications, I added more languages!


Prof. Tim Tangherlini (UCLA) organized the Digital Brandes hackathon at the UC Berkeley Scandinavian department on April 25-26, which brought together the Danish team of Brandes and Danish computational linguistics experts behind an upcoming digital edition of Georg Brandes's groundbreaking work on 19th century literature. While not all the technical folks (which included my CIDR developer colleague Peter Broadwell, Dave Shepherd from UCLA, and Peter Leonard—virtually— from Yale) could read Danish, I was at a double disadvantage by having a background in Slavic (not Scandinavian) linguistics (not literature). The first thing I had to learn was who Georg Brandes was. The second thing  I had to learn was what romanticism was, and what followed it, and I'm grateful to Peter Broadwell for his Cliff Notes version thereof.


Not knowing from Danish, Brandes, or 19th century literature, I didn't think I'd be able to get much out of a close examination of Brandes on his own terms, especially when mediated by Google Translate for gisting. But I did quickly discover that the work was widely translated in the half-century after its publication (with more translations subsequently). How accurate are these translations? What, exactly, got translated at the macro level (how many of the six volumes?), the meso level (were chapters or paragraphs omitted?), the micro level (were words or phrases changed in ways that impact readers' understanding of the text?) This sort of translation alignment is one facet of the [Rosetta Project](https://francestanford.stanford.edu/projects/rosetta-resources-endangered-languages-through-translated-texts) I've recently gotten involved with, and I wanted to see how far I could get in replicating it in a short time frame for Brandes.


The first problem with this plan? The hackathon as conceived was intended to apply different DH methodologies and tools (topic modeling, word vectors, Philologic) to the original Danish text, which had been provided in multiple formats (plain text, plain text chunked, TEI-XML). As with so much DH work, my project morphed from being about writing some algorithm that could show off one's skills as a developer (hardly my forte to begin with), into a time-consuming, unglamorous, but very necessary data discovery and remediation job.


**Finding translations through a nest of metadata**


HathiTrust was my first stop, where I quickly discovered that there are two records for Georg Brandes, and each of these author facets has a different set of languages:
![](../post-images/htrc-brandes.png)


Despite some early musings over working with one of Brandes's other writings (I really wanted to take a look at the Russian and Polish translations of his book on Russia), I realized I'd get the most linguistic overlap sticking to 19th century literature. Tempted as I was by book 5 (French Romanticism, the only volume translated into French), only volumes 1 and 2 of the Russian translation had found their way online, via a moderately blurry PDF that has propagated through all the Russian ebook sites. Add to that the fact that it's the shortest volume at (X) words in the original, and I was sold on "The Emigrant Literature".


Digital humanities work is widely touted for being highly collaborative. Doing multilingual DH, you have to get comfortable asking for help with even the most basic things, like figuring out the title of a text — not to mention more complex evaluations, like telling the difference between not-great OCR and completely unusable garbage OCR. Never have I been more grateful for the network of people with specialist knowledge of obscure things around Stanford than while working on this project. Via our retired Jewish Studies librarian, Zachary Baker, I was able to ask emeritus professor of Armenian James Russell about the one Armenian translation of Brandes in HathiTrust (not 19th Century Literature, but "Armenia and Europe, a Lecture read in Berlin, 2nd February 1903"). Our current Jewish Studies librarian, Eitan Kensky, gave me a rundown on the current state-of-the-art for Yiddish OCR and helped me get a usable plain-text version of a Yiddish translation of 19th Century Literature. What’s more, he was able to map the 11 Yiddish volumes to the 6 original Danish volumes, give me the names of the translators — themselves notable literary critics — and read the introduction, where volume 1 translator Chaim Liberman states that he consulted three translations of Brandes when writing his Yiddish translation, to try to get to the “real Brandes” through the translator signal. (That translation, plus the fact that we have other writings by the translators, has left me wanting to try a Yiddish stylometry project.)


I ended up with seven versions of the text for the hackathon:


* Danish (plain text files — but not the ones originally provided for the hackathon; I didn’t want the original text, but the revised edition that was the basis of the translations)
* Yiddish (plain text files, one per volume),
* English (copied and pasted from the Project Gutenberg HTML, to avoid the line-break artifacts in the plain text version)'
* Polish (djvu files from a digital Polish library, converted to plain text using Calibre — a process that completely eliminated the paragraph and chapter breaks)
* Russian (blurry PDF, had to be OCR’d)
* Spanish (had to be recalled from the UC system's Northern California storage facility by a friend, scanned, then OCR’d)
* German (PDFs from HathiTrust with completely unusable Fraktur OCR; re-running Tesseract on them with the fraktur training data had a much better output)

Figuring what text to work with, researching what translations were available, searching for digitized versions, and scanning and OCRing where necessary, probably took in the range of 15-20 hours prior to the hackathon itself.


**Text Cleaning**
![](../post-images/brandes_hackathon.jpg)The first day of the hackathon was largely dedicated to presentations about the ongoing role Brandes plays in Danish political discourse, the development and state of the Digital Brandes project, an overview of topic modeling for the non-DH attendees from Berkeley's Scandinavian department, and an overview of methods for visualizing and making use of word vectors (e.g. for machine-generation of text) by Peter Leonard, with the caveat that all of Brandes's writings together (under a million words) comprise a small enough corpus that word vectors aren't going to be particularly useful for any kind of analysis.


Meanwhile, I was engaged in light multitasking during these presentations. I'd decided to manually clean up the running page headers in my text files, and split volume one in each of the languages into its constituent chapters. In retrospect, the situation was a good litmus test for where one falls on the humanist / technologist spectrum. It could've been automated, with a set of fuzzy regexes to accommodate the dirty OCR, but figuring out what those regexes should look like would've required more attention and focus (and grumbling and swearing) than would be feasible while multitasking during presentations. Worse, it'd impose a binary status on this aspect of data cleaning: for a given language, it'd be done, or not done. If I ran out of time, I'd have to start jettisoning languages, rather than scoping the project down to the first three or four chapters in each language. I knew I could get enough done if I did it manually; automating it introduced too much uncertainty, and this wasn't a project I planned to do more with, where the work put into automation would pay off at scale.


This process of data cleaning extended into the second day of the hackathon, when the official "hacking" commenced. While my colleagues worked in silence or quiet consultation, I found myself frequently laughing out loud. The Yiddish translators' decision to render "Emigrant Literature" as "French Emigrant Literature" opened the door for all sorts of variations on OCR errors, rendered hilarious by Google Translate.


* Frantic inside the immigrant literature (פראַנצו ין ישע עמיגראַנטען ליטעראַטור)
* For technical emigrants (פראָנצו זישע עמיגראַנטען ליטעראַטור)
* French emigrated liquor store (פראנצױזישע עמיגראנטען ליסעראסור)
* Russian emigrant literature (—ראַנצו יז ישע עמיגראַנטען ליטעראַטור)
* Annotate emigrant literature (מראַנצו יז ישע עמיגראַנטען ליטעראַטור)
* Munches up the big grass of the earth(?!) (מראַנצו יז ישע עמ יגראַנטען לי טעראַטור)

And my two favorites:


* "Yeah. Yeah, you emigrants” (פראַנצן יז יע עמיגראַנטען לי מעראַטור) and
* "Francis, it is the liquidator” (פראַנצו יז ישע עס י גראַנטען לי עראַטור).

The data cleaning took about seven hours, with half of that time spent multitasking.


**Interlude**
As luck would have it, the 0-2 program at my kids’ daycare closed early the second day of the hackathon to support teacher professional development, so in the afternoon I brought along my junior collaborator, Eliza, who drank a bottle and fell asleep in her stroller while I wrangled the data extraction. Everyone was very kind towards the hackathon’s youngest participant, who woke up in time to sprawl on my lap while I made the visualization, and give her first academic co-presentation on the eve of her first birthday.


**Data extraction**
The data cleaning convinced me of the futility of attempting paragraph alignment (or even paragraph-count alignment) between the texts. Paragraph breaks were lost in converting the Polish text from .djvu, and with the other texts, I’d have needed to write a script to try to get every paragraph onto a single line in the text file. Instead, I decided for an even cruder metric: word counts. They’re not directly comparable across languages (e.g. in Russian and Polish, the grammatical cases and lack of articles


After cleaning up each text and splitting it into chapters, I started copying and pasting each chapter into an online word count tool and manually constructing a  table. In that moment, I remembered that I do know how to automate some things, and cobbled together a Jupyter notebook for getting what I needed from my files. Voila — data!


It took about 45 minutes — including a little bit of additional text cleaning — to finish this part of the project, the only code I wrote over the two-day hackathon.


**Visualization**
![](../post-images/quinn_eliza_brandes_hackathon.jpg)Earlier in the week, I'd taught a workshop on Tableau — and just previous week, I'd learned some Tableau myself with help from Miriam Posner's [wonderful](http://miriamposner.com/classes/dh201w19/tutorials-guides/data-visualization/getting-started-with-tableau-public/) [tutorials](http://miriamposner.com/classes/dh201w19/tutorials-guides/mapping/create-a-map-with-tableau/) — so it made an appealing option for doing a visualization of my word count data to use for my final hackathon presentation. Once you've gotten the hang of the major elements of Tableau's visual vocabulary and some UI quirks, putting together new visualizations is quick and easy.


I used the data from the Jupyter notebook to create a [heat map table visualization based on the word counts](https://public.tableau.com/views/multilingual-brandes-viz/Sheet1?:embed=y&:display_count=yes&publish=yes&:origin=viz_share_link). Putting that together took about 10 minutes (even with my wriggly collaborator periodically requiring attention), which took me up until the beginning of the final presentations.


**Presentation**
For somewhere around 24 hours of work, what I had felt modest, particularly when juxtaposed with word vectors, deep-learning based text generator, or the permutations on topic modeling, or the Philologic instance with Brandes running. It was just a word-count visualization, punctuated by a few examples of the best OCR errors. It’s not, by itself, anything particularly interesting — it’s a distant proxy for what I really would want to look at. It only hinting at the promise of potentially meaningful discoveries that could be possible through much more work. But it was striking that the less-technical Scandinavian scholars seemed to get what I was trying to do, even while appearing to struggle somewhat with how topic modeling or word vectors further scholarship as such. As digital humanists, we commonly fall back on minimizing such questions with words like “exploratory”, but I don’t think that’s a satisfactory answer particularly when presenting outside of DH circles. Andrew Piper’s Enumerations deliberately builds a navigable path through some of these methods for scholars without a technical background, but it’s not something you can easily encapsulate in an answer to a question, or a framing device for a lightning talk. At least for myself, I feel like I need a better set of examples of meaningful — and, if possible, surprising — discoveries that build on digital humanities methods, readily on hand for moments like this.


**Post-hackathon**
I recently finished the aspect of my project that I didn’t have time for during the hackathon itself: using Voyant to compare the translations beyond just the word counts. The distinctive word information is particularly useful: we can see that everything seems to line up through chapter 4, after which point Russian and Polish diverge (together? Note the parallel in some of the not-named-entities like babko/бабушка in Ch. 8) from the rest of the translations, and they start running a chapter behind in named entities (e.g. see констанъ in Russian chapter 8 instead of 7 for constant; элеонора in 9 instead of 8 for eleonore, etc.)


All of the chapter-separated text files for volume 1 are [up on Github](https://github.com/quinnanya/multilingual-brandes), along with the Voyant stats, Jupyter notebook, and Tableau file for the visualization. I’ve also stuck in various other text files and PDFs of translations of Brandes’s writing that I came across along the way, but didn’t end up using. Until I hear otherwise from a Scandinavian studies scholar in my division, I think my time with Brandes may have come to an end. Nevertheless, I hope this project and the texts I tracked down may be of value someday for someone else with a longer-term commitment to Brandes and his work.


