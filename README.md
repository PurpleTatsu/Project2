# English at Home

![Coming into project 2 like](https://media.giphy.com/media/13871fiv9kBfkQ/giphy.gif)

## Description
"English at Home" is a drill-based English learning website featuring flashcards and activities. The activities are aimed at Japanese parents to use at home with their children.

It is a redesign of [Hoppy English, English at Home.](https://hoppyenglish.com/https-hoppyenglish-com-%e3%81%8a%e3%81%86%e3%81%a1%e3%81%a7%e3%81%a1%e3%82%87%e3%81%93%e3%81%a3%e3%81%a8english%e3%81%ae%e4%bd%bf%e3%81%84%e6%96%b9-frame-nonceb46a2e6b3b/)

## Wireframes
![Landing page](https://github.com/PurpleTatsu/Project2/blob/master/src/wireframes/wireframe2.png?raw=true)
![Drills](https://github.com/PurpleTatsu/Project2/blob/master/src/wireframes/wireframe1.png?raw=true)

### MVP/PostMVP
 #### MVP
* Use VoiceRSS API
* Render landing page and two activity pages
* Render  as flashcards on page
* Have VoiceRSS pull flashcard vocabulary and read upon user click of card
 #### PostMVP
* Add additional activities
* Cut down delay time of flashcard 'click' to audio return
* Additional CSS styling: card flip animations, character info modals
* Incorporate Hoppy Japanese: drills for Japanese learners
* Include flashcard pdf download link

## API
[VoiceRSS](http://api.voicerss.org) - text to speech

## Helper Functions
API Helper - calls the API and generates a URL to pass onto a flashcard

## Notes
I was really inspired by the design featured https://www.mouchtaris.com/interior-design since my project is image heavy. However I realized that the original design worked because it was also very text light, and I have signficantly more. Thus, I have to rethink my design so the font doesn't become too small.

For my playAudio function, I referenced the code at here [Stack Overflow.](https://stackoverflow.com/questions/47893690/how-to-play-an-audio-file-from-an-external-url-using-javascript)

## Issues and Resolutions
* Pronunciation issues with API; solution: changed spelling of id
* Forgot "return" on App.js
