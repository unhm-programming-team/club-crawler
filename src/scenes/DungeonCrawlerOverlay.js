import Phaser from "phaser";

const dataManager = require('../objects/data');



/**
 * @classdesc
 * The overlay showing health, score, etc.
 * Updates using {@link ClubCrawler.Objects.dataManager dataManager}
 * 
 * @memberof ClubCrawler.Scenes
 * @extends Phaser.Scene
 * @see {@link https://newdocs.phaser.io/docs/3.55.2/Phaser.Scene Phaser.Scene}
*/
class DungeonCrawlerOverlay extends Phaser.Scene 
{

    /**
     * @inheritdoc
     */
    preload() {

    }
    create() {
        this.add.text(10, 20, "Club Crawler", {
            color: "rgba(100,100,200,0.8)",
            fontSize: 25
        });
        this.pointCount = this.add.text(10,750,"Points  " + dataManager.score, {
            color:`white`,
            shadow: {
                offsetX: 1,
                offsetY: 1,
                color: 'red',
                blur: 1
            },
            fontFamily: 'Consolas, Courier',
            stroke: 'rgb(100,0,0)',
            strokeThickness: 2,
            fontSize: 18
        });

        dataManager.emitter.on('scoreChange', this.pointsChange, this)
        
    }

    pointsChange(){
        this.pointCount.setText("Points  " + dataManager.score);
        this.pointCount.updateText();
    }

    
    update(time, delta) {

    }

}

module.exports = DungeonCrawlerOverlay;