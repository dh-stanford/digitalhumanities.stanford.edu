---
layout: templates/article
title: "On Topic Modeling Tools for Workshops"
author: Quinn Daedal
date: 2026-09-21
post_images:
  - ../post-images/topic-words.jpg
---

Recently on Bluesky, I got to chatting topic modeling tools with Brandon Walsh, David Mimno, and others. My go-to for teaching topic modeling has always been the [Topic Modeling Tool](https://github.com/senderle/topic-modeling-tool) developed by Scott Enderle ([RIP](https://datasittersclub.github.io/site/dsc13/#scott-enderle)), but since he passed away 6 years ago, nobody has been maintaining it. David Mimno, who has [a browser-based topic modeling tool](https://mimno.infosci.cornell.edu/jsLDA/), asked what I like about Scott's tool. I generally had pretty warm feelings towards it, but to be honest, it'd been several years since I'd used it, since I haven't taught my non-English text analysis class in a bit and I just use Mallet myself. So I went digging to try to remember, and think about what makes it different from David's [jsLDA](https://mimno.infosci.cornell.edu/jsLDA/).

What I found -- to my surprise -- was how similar these two tools are in a lot of functional ways (with one major, important difference aroudn input files), while simultaneously being pretty dissimilar when it comes to user experience and overall *vibes*.

## The name

This seems like a trivial point, but one of these things is called "Topic Modeling Tool" and the other one is called "jsLDA". One of them you can pronounce, and you can tell immediately what it is and what it is for. If you're new to DH or doing computational stuff on literature, neither "js" nor "LDA" is going to mean anything to you, but the weird capitalization is a flag that it's Some Tech Stuff. You might find yourself hoping to not have to say it out loud, because are you supposed to name each letter, or quietly mumble "jizz-lda" and pray nobody laughs at you?

## The first encounter

I usually avoid sending students to GitHub if I can help it. It makes a bad first impression. But Scott's [Topic Modeling Tool](https://github.com/senderle/topic-modeling-tool) has a thoughtfully written readme.txt that appears on the page with clear, step-by-step instructions for how to get started for mulitple different platforms, a link (now broken) to the installers, and a link to the more detailed quick-start guide. There's familiar headers to the whole thing, too. Installing software is a familiar enough process for even non-technical students that it doesn't seem intimidating off the bat.

[jsLDA](https://mimno.infosci.cornell.edu/jsLDA/) greets you with a wall of text and two blue buttons: "Run a model" and "Get the source". Myself, I'm personally a fan of a wall of text! But I can understand how for a newcomer, already uncertain about how to pronounce this thing, the following goals laid out in the first paragraph may not be all that reassuring:

> The goals of this project are to (a) make running topic models easy for anyone with a modern web browser, (b) demonstrate the potential of statistical computing in Javascript and (c) allow tighter integration between models and web-based visualizations.

The first of those is comprehensible enough, but (b) and (c) aren't going to make a lot of sense if you're not already steeped in this world.

It's a small thing, but even though there's at least one header for "Instructions", it's not offset in an `<h2>` or the like, so it adds to the wall-of-text feeling rather than offering a way to orient yourself.

## Uploading documents

### Topic Modeling Tool

When you launch the Topic Modeling Tool, you get a little window where you can choose an Input Directory, Output Directory, change the default number of topics (10), and there's an Optional Settings button (the "optional" is key here for taking the pressure off newcomers), then a big button in the middle that says "Learn Topics".

There's some subtle clues here that I appreciate -- not that it's always saved students from going down the wrong path, but it helps. Having an input *directory* should be a hint that it should include *multiple things*. I don't think the Topic Modeling Tool documentation, as good as it is, does enough to be really explicit about the inputs: specifically, that you should have multiple text files, and each should be at a granularity that makes sense for topic modeling (e.g. a paragraph or two, not an entire novel), and ideally, should not be massively different lengths. (We talked about this a fair bit in [DSC #20: Xanda Rescues the Topic Modeling Disaster](https://datasittersclub.github.io/site/dsc20/)).

I also appreciate that the tool generates an output that lives somewhere on my computer, and I can specify where that is. It makes the whole process feel less ephemeral than a browser-based tool.

Under the optional settings, you can specify a metadata file and a stopwords file. The full documentation for the Topic Modeling Tool does a good job laying out what the format of those files should be, along with what some of the other settings mean. It's poignant, though, seeing the things marked "TODO", knowing Scott ran out of time to do them. Again, though, the fact that the settings are labeled as *optional* settings means that a newcomer can probably get something out of the tool even without touching that. I want to add a small #MultilingualDH caveat here: Scott's documentation says that the tokenization is based on an assumption that there's whitespace separating words, but I think it could be a little more explicit about how with some common languages (e.g. Chinese), pre-processing to add that whitespace is necessary. I know opinions vary about the necessity of lemmatizing highly-inflected languages when it comes to topic modeling, but I'd probably at least mention it.

I appreciate the fact that the "number of topics" isn't blank. Again, there's reasons for choosing more or fewer topics, but for newcomers, having a reasonable default already there helps a lot.

Then all you have to do is hit the "Train topics" button (with the cute little cogs to indicate that will do the processing) and you're on your way.

### jsLDA

If you successfully read through the text on the front page, it explains that there's some pre-loaded data with US State of the Union speeches. If you don't read the text (and if years of working in a computer lab taught me anything it's that "people don't read the text"), when you hit the "Run a model" button, it takes you to a screen jam-packed with unfamiliar text that you didn't upload.

Now, there's a gray box in the upper-right that offers "Use a different collection", but it only allows you to upload one file under "Documents". There's an option for uploading a "Stoplist" too, but that's given equal weight to the document upload through its placement.

The front page wall of text does a better job than Scott's documentation explaining the desirable granularity of text for topic modeling, and it does explain the format of the file you need to upload. But there isn't a link back to that documentation (or a pop-up with the information) on or near the upload form, so if (or, let's face it, **when**) a user didn't read the front page, they're left at a loss when they get to the place where that information is necessary.

I don't love the Mallet format that's also what jsLDA expects. I have lots of folders of text files lying around; I do not have this particular format lying around for things I want to work with. DSC #20 has a [script that Xanda wrote for splitting up the Baby-Sitters Club novels](https://datasittersclub.github.io/site/dsc20/#whats-a-document), but I would not want to inflict on beginners the step of making this kind of file. Scott's approach shunts the metadata over to "optional", but the output is just as usable if not more so without those tags, and using the filename as a label. (This is admittedly less the case if people don't use transparent filenames.)

For me, the file format requirement of jsLDA is what takes it off the table as a tool I'd use in an intro class or workshop. It would be easy enough to prep this kind of file in advance and distribute it in a workshop, but I feel pretty strongly about people trying out new tools on their own data -- ideally, data they're already familiar with -- and having access to all the steps to make that happen. 

I'll table that issue for now, though. I do have a correctly-formatted file thanks to DSC #20. Unfortunately, it's the full text of all the Baby-Sitters Club books. I double-checked the network activity (under the browser "developer tools") for jsLDA to confirm that everything is, indeed, happening in my local browser, and I'm not about to upload a whole bunch of in-copyright literature to a random server somewhere when I hit the "upload" button. But that word might (and should!) give people pause depending on the nature of the texts they're working with. It might be worth a note at the bottom of the upload box clarifying that all the data stays in your own browser and doesn't go anywhere.

Hitting the "upload" button does more than the user might be expecting, though: all the State of the Union addresses disappear, replaced with bits of your own data. This means that ideally, you should've thought through how many topics you wanted before uploading your data, and selected that using the slider in the upper right. The list of topics is on the left, but you can forgive a newcomer some confusion because it's 25 (the default number) identical nonsensical topics. To actually run the topic model and get different topics, you have to hit the "Run 50 iterations" button in the upper left. It could be helpful if these steps were laid out a little more clearly and sequentially: upload your document, choose the number of topics, and run iteration -- maybe all in that same right-side gray call-out box.

## Running the model

Running the model, once you've figured out the setup, is equally easy with the Topic Modeling Tool and jsLDA: it's a single button. The Topic Modeling Tool has a terminal window that's chatty with the output of various Java processes and such. jsLDA is quieter, ticking up the number of iterations without commentary. The next step -- analysis and visualization -- offers a point of greater differentiation between the two.

## Analysis and visualization

### Topic Modeling Tool

The Topic Modeling Tool creates output files on your own computer, in CSV and HTML format. As the Quickstart guide describes, "Inside the output_html folder, open the all_topics.html file to start browsing. That output is fairly self-explanatory, so we won’t dwell on it here." 

That may sound a bit cocky, but it's matched my experience: once the students open all_topics.html, I've found they can comfortably navigate it. Clicking on one of the topics gets you the top-ranked documents for the topic; clicking on one of those documents gives you a preview of the text, and the top topics for that document. That generally has been enough for students to determine if they feel satisfied or not with the output.

jsLDA shows that there's more you can offer in an interface like this. Clicking on a topic gets you a list of the documents, with the ones where the topic is more prominent sorted to the top. There's a tab for "topic correlations", showing every topic mapped to every other topic, with the ones that occur together more often than expected marked in blue. There's a time series visualization, but that only makes sense if the input file is sorted chronologically (which assumes there's any sort of meaningful "chronology" across all the documents to begin with, which isn't necessarily the case at all.)

One handy feature of jsLDA that's more convenient than the equivalent in the Topic Modeling Tool is the "Vocabulary" panel, where you can click a button next to a word to add it to the stopwords list. 

You can get similar files to the CSVs offered by the Topic Modeling Tool out of jsLDA using the Downloads tab. The "Doc-topic graph file (for Gephi)" is a particularly nice addition. 

## My Dream Topic Modeling Tool for Workshops

As of September 2026, Scott's Topic Modeling Tool no longer works on my Mac. It crashes out halfway through the training process; I had to dig up some old output files to remind myself how those work. As much as that tool makes me sentimental and wish that someone would keep it alive, it also looks pretty old and janky by modern standards. Scott made things that *worked for people*, and I sort of imagine he'd be happy that his tool lasted as long as it did, and for it to inspire a new thing with a similar spirit and vibes, rather than wanting his successors to cling to his old code.

I don't often indulge in daydreams and wishlists, preferring to think about what I can myself cobble together out of things that I know actually exist. But implicit in the conversation that started all this was "what would you like to see?", so I'll summarize in conclusion:

- **Name**: "Topic Modeling Tool" is a really great name, though it might need something new. But no acronyms, and nothing scarier than "topic modeling" already can be for newcomers!
- **Access**: Personally, I like things distributed as handy installer files! (Yeah, I know they're harder to do and maintain than web-based ones.) Knowing I can run it without an internet connection is convenient, and it feels safer than potentially uploading large in-copyright corpora to who-knows-where. I like having output files saved to my computer automatically instead of having to remember to download them.
- **Configuration**: It should be ready to go with sensible defaults out of the box. I really like Scott's framing of "optional settings" for additional configuration. Needless to say (I hope), UTF-8 support is a must. 
- **Input**: You need to be able to submit a folder of text files. Students shouldn't be spending workshop time trying to configure the right kind of tabular input. What they're most likely to have is a folder of plain text files, and they should be able to work with that.
- **Remediation**: Realistically, the plain text files that students have aren't at a good granularity to be "documents" for purposes of topic modeling. I really like what Xanda did in DSC #20 splitting things at the paragraph level, and glueing paragraphs together if they were under 100 words. Having a default option that does this splitting at newlines (and appends an incrementing number at the end of the original filename for the resulting documents) would shortcut a lot of woe where a student tries to topic model an entire novel as a single document. This option could be turned on by default but configurable and easy to disable in the settings.
- **Analysis and visualization**: I really like what the Topic Modeling Tool offered as a way to navigate the results, though the topic correltions visualization in jsLDA is a nice addition. I'd lose the time series, though, because it makes people want to read chronology into things that may not at all be chronological.
- **Output files**: Maybe solicit some short name for the corpus and use that plus a timestamp to automatically save the output files (which could be turned off in the settings if the files are getting large and people are running out of space). The CSV output files like jsLDA has are great, but having some way to re-access the topic / document / other visualization interface in the tool itself would also be handy.
- **Documentation**: I think Scott really nailed it with the documentation. There's more-or-less a "just the facts" on the GitHub readme page (what is this thing and how do you install it?), a link to a quickstart guide written in a friendly, colloquial manner, and more technical information in a separate "documentation" file.