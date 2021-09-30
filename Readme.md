## Crawler

This will be a dungeon crawler style javascript web game made with Phaser. It will run in the browser and eventually be embedded in the website.

It will be sort of like the Arcade classic, gauntlet. Top down deal, where maybe you have to click to fire. Once we get something basic running, maybe we can add multiplayer, random map generation, etc.

If you would like to help on this project, it needs:

- Levels 
    - Uses [tiled](https://www.mapeditor.org/) for level editing

- Images/Sprites
    - bad guys
    - items
    - players
    - walls
    - floors
    - plants

I use paint.net for sprite creation. Currently tiles are 128x128 but we can support other sizes. Any .png of 128x128 is useful

- Sounds
    - music 
    - sound effects

- Code
    - items
    - bad guys
    - health

- Ideas
    - bad guy attack patterns
    - weapons / spells
    - dialogue

## Dependencies

#### Main dependency:

[Node/NPM](https://nodejs.org/en/download/) - for serving locally

#### NPM Installed Dependencies: 

_You probably won't have to worry about these once you have node/npm_

[Phaser](https://phaser.io/) - The game engine **Lots of documentation and examples at the link**

[Parcel](https://www.npmjs.com/package/parcel) - for serving a website in test and packaging javascript

## How to Run it

1. Install Node js and NPM

1. Clone this repo `git clone http://github.com/..../club-crawler.git`

1. Open this root directory in the command prompt `cd c:/myfiles/whereIclonedtherepo/club-crawler`

1. Execute `npm install` to install all dependencies

1. Execute `npm start` to start the web server

1. In a browser such as Firefox, navigate to http://localhost:1234/