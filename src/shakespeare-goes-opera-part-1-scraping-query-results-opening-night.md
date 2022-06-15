---
layout: layouts/article
title: "Shakespeare Goes to the Opera Part 1: Scraping Query Results from Opening Night!"
submitted_by: Jacqueline Hettel
submitted_at: 2013-09-24T12:09:25-07:00
has-comments: False
---

![](https://digitalhumanities.stanford.edu/sites/g/files/sbiybj8071/f/styles/large/public/Screen%20Shot%202013-09-24%20at%202.51.32%20PM.png?itok=Eg11Evn0)A little over a week ago, the Stanford University Library [announced the launch of a new collection/tool](http://library.stanford.edu/news/2013/09/introducing-opening-night) that was created in collaboration between ***h***Text Services and the Music Library: [Opening Night! Opera and Oratorio Premieres](http://operadata.stanford.edu/). It is a [Blacklight](http://projectblacklight.org/) gem web application (Ruby on Rails application powered by a SOLR index) of the metadata for 38,000 different operas and oratorios when they were first performed between 1589 and 2001. And while I could go on ad nauseum about how amazing [Blacklight](http://projectblacklight.org/) is as a discovery tool for digital humanities metadata and objects, and that it's not just for the creation of library catalogs like [Searchworks](http://searchworks.stanford.edu/), I will save that spiel for another day. This two part blog post series titled "Shakespeare Goes to the Opera" focuses on three things: sharing a methodology for unlocking metadata from query results in an application like Opening Night! via web scraping; sharing how to use Google Fusion tables to create interesting visualizations and analyses; and demonstrating Opening Night! has metadata that is of interest even to those of us without formal training in Music, or more specifically the history of operatic performances. 


![](/sites/g/files/sbiybj8071/f/Screen%20Shot%202013-09-24%20at%202.51.32%20PM.png)


The first thing I would like to touch on is that the web scraper discussed in this blog post is not the only one. There are many options for web scraping (and many of them are described in detail [here](http://stackoverflow.com/questions/2861/options-for-html-scraping)). Since I am writing this post with library folks in mind who may or may not have a programming background, I have decided to demonstrate web scraping using a Google Chrome add-on that not only has an easy-to-use UI, but it has a function to export the results as a spreadsheet to your Google Drive account--making it that much easier to share data for collaboration. If you are interested in learning how to do web scraping directly, via a programming language, I can direct you to two pretty good tutorials:


1. If Ruby is your thing, you can check out Stanford DH'er [Jason Heppler's blog post on using Nokogiri for scraping](http://jasonheppler.org/2012/10/12/better-web-scraping-with-nokogiri.html), or
2. There is as an extremely thorough tutorial on Beautiful Soup, a Python based web scraping suit, [at Python for Beginners](http://www.pythonforbeginners.com/python-on-the-web/web-scraping-with-beautifulsoup/).

Now, if you haven't already done so, go ahead and download Google Chrome ([click here to download it for your operating system](https://www.google.com/intl/en/chrome/browser/)) and the Google Chrome Scraper from the Google Store ([click here](https://chrome.google.com/webstore/detail/scraper/mbigbapnjcgaffohmbkdlecaccepngjd?hl=en) and follow the directions for getting it installed). Once you have this add-on installed, we can begin the ***really***easy task of unleashing data from Opening Night!


Transforming Opening Night! from an obsolete, stand-alone database into a dynamic web application was the first project tasked to me when I joined the Stanford University Libraries team  back in February. I will admit that up until right before launching this application I honestly thought the only thing of interest to me (as a PhD in English who specialized in DH and Corpus Linguistics) in this project was the technology, coding, and methodology for wrangling the data, and not the data itself. However, I soon learned that there are aspects of this dataset that are of interest to those of us who are not Music scholars. In particular, literary types will find it interesting that there is a facet on the right-hand side of the application labeled Librettist/Literary Sources. And when you expand this facet, there is a friendly face waiting for English Literature scholars: Mr. William Shakespeare.


After faceting on William Shakespeare, we will notice many familiar titles (Romeo and Juliet, Amleto (Hamlet), Antonio e Cleopatra, etc.), and these titles span multiple countries over 1300 years. Wouldn't it be interesting to take these results and plot them on a google map to see how they Shakespeare's proliferation spread over time? Since there isn't an export function in Opening Night! to do such a task, we turn to web scraping to help us unlock this data and prepare it for our visualizations and analysis.


Before we commence with scraping, let's make this task that much easier on yourself by modifying the search results settings in Opening Night! so that you have fewer pages to scrape. On the right side of your results screen, you will see a drop-down menu that says 10 per Page. Change that to 100 per Page.


[![Screen Shot 2013-09-24 at 2.51.32 PM](http://www.linguabrarian.com/wp-content/uploads/2013/10/Screen-Shot-2013-09-24-at-2.51.32-PM-1024x545.png)](http://www.linguabrarian.com/wp-content/uploads/2013/10/Screen-Shot-2013-09-24-at-2.51.32-PM.png)


What we will want to do first is to right-click anywhere on the first page of our query results and select "Scrape similar...." What this will do is launch the Google Chrome Scraper.


[![Screen Shot 2013-09-24 at 2.55.54 PM](http://www.linguabrarian.com/wp-content/uploads/2013/10/Screen-Shot-2013-09-24-at-2.55.54-PM-1024x709.png)](http://www.linguabrarian.com/wp-content/uploads/2013/10/Screen-Shot-2013-09-24-at-2.55.54-PM.png)


 


Once you have clicked "Scrape similar...", you should see the Scraper interface.


[![Screen Shot 2013-09-24 at 2.57.38 PM](http://www.linguabrarian.com/wp-content/uploads/2013/10/Screen-Shot-2013-09-24-at-2.57.38-PM-300x145.png)](http://www.linguabrarian.com/wp-content/uploads/2013/10/Screen-Shot-2013-09-24-at-2.57.38-PM.png)


 


The first thing you will want to do is make sure that you have selected XPath. We will not be doing any of our scraping with jQuery today. All of the web scraping in this tutorial will be done using XPath expressions. However, you have that option if you ever want to harvest data from a website using this tool in the future.


[![Screen Shot 2013-09-24 at 2.57.38 PM](http://www.linguabrarian.com/wp-content/uploads/2013/10/Screen-Shot-2013-09-24-at-2.57.38-PM1-300x159.png)](http://www.linguabrarian.com/wp-content/uploads/2013/10/Screen-Shot-2013-09-24-at-2.57.38-PM1.png)


 


Once you have confirmed that the Selector is set to XPath, you should copy/paste the following reference into the XPath Reference box:


**//div[3]/div[2]/div[3]/div**


What this expression does is tell the scraper exactly where to go on the query results page. I won't go into every single aspect of this declaration, but what I will say is that it points directly to each and every one of our Opening Night! results.


Now, we need to identify each piece of information that we want to harvest from the query results page. For the purposes of our study, we obviously wanted the title of each opera/oratorio. Since I have already pointed the scraper to the div container that holds the metadata for each Opening Night! entry, it is really easy for me to extract the individual pieces of information for each book as an array (which the Google Chrome Scraper does automagically and will be really important when we go to export the data).  For our study, we wanted to harvest the title, composer, librettist/literary source (for individuals in addition to Shakespeare), genre, year, and the country of the premiere (basically all of the information provided in the short view).


And here are those specific XPath expressions in a format that you can copy/paste into your Scraper:


1. **Title:  ./dl/dd[@class="blacklight-title]**
2. **Composer:  ./dl/dd[@class="blacklight-composer]**
3. **Librettist/Literary Source:  ./dl/dd[@class="blacklight-librettist]**
4. **Genre:  ./dl/dd[@class="blacklight-genre]**
5. **Year:****./dl/dd[@class="blacklight-year]**
6. **Country:  ./dl/dd[@class="blacklight-country]**
7. **URL:  ..//h5/a/@href**

The first thing I would like to point out about these XPath expressions for those of you not already familiar with XPath is that they all begin with a period [.]. The Title, Author, Year, Description, and Link XPath expressions are all what we call predicates. And what the period does is tell the scraper that the information we put in the XPath Reference Expression box at the top is the current element to which we would like to append the predicates. Basically, the period [.] saves us more typing. On the other hand, I want to point out that the XPath expression for URL has two periods [..]. This has a slightly different function: the double period points to the parent of the reference expression being that which the predicate should be appended to. Finally, you will notice that the link for URL is relative to the webpage. So if you are going to use the URL for any sort of reference, you will need to do a find/replace to append "<http://operadata.stanford.edu>".


Once you have copied/pasted all of the XPath expressions into the Scraper for the data you would like to harvest from the query page, go ahead and click the **Scrape** button to view your data harvest in the preview window.


[![Screen Shot 2013-09-24 at 3.13.04 PM](http://www.linguabrarian.com/wp-content/uploads/2013/10/Screen-Shot-2013-09-24-at-3.13.04-PM-1024x355.png)](http://www.linguabrarian.com/wp-content/uploads/2013/10/Screen-Shot-2013-09-24-at-3.13.04-PM.png)


 


After verifying that you are harvesting the data you actually want, make sure to save this series of expressions as a preset for you to use later. THis way, you don't have to come back and re-copy/paste everything back into the Scraper. You can do this by clicking the **Presets** button, assigning a name to this setting, and then hitting **Save.**


Finally, go ahead and click the **Export to Google Docs...**button on the bottom-right side of the Scraper window to see your query data transformed into a beautiful spreadsheet in Google Drive. From here, you can begin processing your data: confirming if each book actually contains an acknowledgement for your library, or any other transformation of the data that you desire. You can interact with a spreadsheet created from the result of this scraping [here](https://docs.google.com/spreadsheet/ccc?key=0Av5EVcQFto7MdC1oNERaMDRleWtnM3duZUN4LXo3YWc&usp=sharing).


By using the Google Chrome Scraper with its built-in function of exporting to Google Docs, we have the ability to work with others on this dataset in a collaborative manner, as well as transform our results into dynamic visualizations and maps using Google Fusion Tables and Google Maps or manipulate your data with Google Refine. This topic will be discussed further in Part 2 of "Shakespeare Goes to the Opera."


 


**Update September 25, 2013: Here is the web scraping information for those of you wanting to harvest data from the long records:**


**XPath Reference Path:****//div**


1. **Title:  ./dl/dd[@class="blacklight-title"]**
2. **Composer:  ./dl/dd[@class="blacklight-composer"]**
3. **Librettist/Literary Source:  ./dl/dd[@class="blacklight-librettist"]**
4. **Genre:  ./dl/dd[@class="blacklight-genre"]**
5. **Opera Subgenre:  ./dl/dd[@class="blacklight-subgenre"]**
6. **Oratorio Subject:  ./dl/dd[@class="blacklight-subject"]**
7. **Oratorio Feast Date:  ./dl/dd[@class="blacklight-feastdate"]**
8. **Premiere Date:  ./dl/dd[@class="blacklight-date"]**
9. **Theater:  ./dl/dd[@class="blacklight-theater"]**
10. **City:  ./dl/dd[@class="blacklight-city"]**
11. **State/Region:  ./dl/dd[@class="blacklight-region"]**
12. **Country:  ./dl/dd[@class="blacklight-country"]**
 