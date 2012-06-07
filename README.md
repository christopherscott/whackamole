Chris H's Whack-A-Mole v0.1
===========================

JavaScript/HTML game written as a challenge by my friend Rob Allen at work.

I wrote this in about a day, including making the graphics. I chose not to use jQuery or another library (even though that would've made things easier) as a secondary challenge to see how small i could make the standalone script. The hardest part was figuring out how to create the overall game controller. I kept wanting to build a traditional game loop, but eventually found it easier to use a mode or step-based system. Also I learned a lot about the different JavaScript timer functions and their pros/cons. Looking back at it, I probably could've cleaned it up a bit more, and organized the comments better. Had a great time making it though :)

All code and resources (including source imagery) is provided free of charge under the MIT open-source license.

Play online: [http://whackamole.christopher-scott.com/](http://whackamole.christopher-scott.com/)

TODO:
-----

- Fix bug where last mole covers the score (at the end).
- Add more levels...maybe different backgrounds.
- Test in multiple browsers
- Add open source license (MIT?)