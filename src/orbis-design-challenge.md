---
layout: templates/article
title: "ORBIS Design Challenge"
submitted_by: Elijah Meeks
submitted_at: 2013-09-03T09:23:00-07:00
---

ORBIS Design Challenge
----------------------

Since its launch in May 2012, [ORBIS](http://orbis.stanford.edu/#mapping) has always been very popular. This is in spite of breaking some fundamental web design rules, such as placing the key interactive element on a non-descript tab rather than the opening page. But the capacity to calculate travel times and cost for oxcarts and armies in the Roman world is still a "killer feature" and traffic to ORBIS remains steady. As has been noted [here](/orbis-v2) and on the [ORBIS\_Stanford Twitter account](https://twitter.com/ORBIS_Stanford), we're building a new version of ORBIS that has improved functionality and some new data. You can find the [public prototype of ORBIS v2 here](http://orbis.stanford.edu/v2/).


This new version adds or improves upon several features that were implemented in the initial ORBIS and [ORBIS|via](http://orbis.stanford.edu/via/) implementations. Cartograms can now be run from any place, and sites are clickable with information (not much right now but more soon), and there are several more involved features that are in their early stages. But the biggest design shift is that the ORBIS route-finding map, cartogram, and ORBIS|via are all now integrated into a single application.


If we examine the analytics to look at how people used the site, we find that half of the visitors to orbis.stanford.edu never opened up the map. Of those, only a third opened up the cartogram, while only 1.5% of all visitors ever saw ORBIS|via. The statistics are even worse on closer examination, because while the route-finding interface is intuitive due to its Google Maps-like nature, the cartogram and ORBIS|via saw steep dropoffs in actual use of their core functionality even after people opened them up. So much functionality was invisible to readers, and that functionality even when available needed to be better described. Exposing this functionality and encouraging the use of it in understanding Roman socio-political geography is the primary design challenge facing ORBIS. To do this, we need to better understand how distorting geography, clustering, site ego networks, and route finding functionality relate to the Roman world and each other. By understanding the theoretical relationships between these functions, we can build a user experience that foregrounds the important perspectives each can give.


My favorite example for demonstrating the contingent nature of space in the Roman world is the route from Rome to London, which changes dramatically based on time of year and priority of travel. A comprehensive redesign of ORBIS should take a reader's request to route a path from Rome to London as a moment not only to complexify their concept of that particular path by offering permutations on that path but demonstrate the effect of those permutations on the concept of space and distance. The most primitive way to do this is to simply prompt the reader with "Do you want to see how this path may be different in a different time of year or with a different priority or vehicle?" or "Would you like to see a cartogram from London?" or "Would you like to see the regions in the Roman world that are closer to London and Rome according to these settings?" I plan to introduce some of this as context-sensitive help but good design would be more seamless and integrated than that.


I'm not well-versed in interactive design and I'm a firm believer in general open source principles, which is why ORBIS v2 is being developed publicly. Anyone who wants to sketch up a possible interface, information architecture, user flow, or other design artifact for ORBIS (whether in Balsamiq or by hand or whatever) is welcome to do so, with the very real possibility that it or elements of it will end up in the final site.





