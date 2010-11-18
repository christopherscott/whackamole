Chris H's Whack-A-Mole v0.1
===========================

Javascript/HTML game written as a challenge by Rob at work.

I wrote this in about a day, including making the graphics. I chose not to use jQuery or another library (eventhough that wouldve made things easier) as a secondary challenge to see how small i could make the standalone script. The hardest part was figuring out how to create the overall game controller. I kept wanting to build a traditional game loop, but eventually found it easier to use a mode or step-based system. Also I learned a lot about the different Javascript timer functions and their pros/cons.

Looking back at it, I probably could've cleaned it up a bit more, and organized the comments better. Had a great time making it though :)

Play online: [http://christopher-scott.com/whackamole/](http://christopher-scott.com/whackamole/)

TODO:
-----

- Fix bug where last mole covers the score (at the end).
- Add more levels...maybe different backrounds.
- Test in multiple browsers
- Add open source license (MIT?)