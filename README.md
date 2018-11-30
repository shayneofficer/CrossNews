# CrossNews

## About
Primarily a crossword app, which can display almost all of the puzzles published by the New York Times since Jan 1st 1977 by accessing the [open source archive](https://github.com/doshea/nyt_crosswords) maintained by @doshea. The information associated with each puzzle is stored as a JSON object and can be queryed via the pseudo-API at the following URL:

 https://raw.githubusercontent.com/doshea/nyt_crosswords/master/#{year}/#{month}/#{day}.json
 
 Our app also:
- Prints a NYT headline for a given date using the [NYT API](https://developer.nytimes.com/)
- Displays weather info using the [Dark Sky API](https://darksky.net/dev)
- Adds the current date horoscopes from an [astrology API](https://www.horoscopes-and-astrology.com/api)

Our app allows user to retrieve data from multiple databases for given dates. Imagine having the crossword, weather, and article headlines from your birthday or any date you can think of within range. The crosword is interactive, and allows users to challenge themselves with a NYT crossword from almost any date ranging back to 1977! The app also allows users to search for articles from any date ranging back to September 18, 1851. Additionally, the user can view horoscopes for each astrological sign for the present day (updated each day). Wonder what the weather was like on 12/25/1995 in Chicago? Wonder no more!

Our App:

CrossNews Homepage

Crossword Page

Weather Page

Horoscope Page

Articles Page

Future Potential Features:
- The use of GIPHY in correlation with hints for crossword
- Sudoku
- Have up to date news from multiple sites (via newsAPI)
- Search for city weather information (using Google Maps API)
- Horoscope date range
- Individual letter input for crossword puzzle, and the ability to select a hint by clicking on a corresponding square
- Highlight corresponding squares while a hint modal is open
- Generate custom crosswords
- Fill in crossword letters one-by-one (maybe with animation)

Project manager: [@vvincent157](https://github.com/vvincent157)

HTML & CSS Design: [@Btagra](https://github.com/Btagra) and [@kat-zhang](https://github.com/kat-zhang)

API and other JavaScript: [@rbrodefrank](https://github.com/rbrodefrank) and [@shayneofficer](https://github.com/shayneofficer)

