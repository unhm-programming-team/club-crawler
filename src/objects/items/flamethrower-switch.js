

import Phaser from "phaser";

const dataManager = require('../data');
const FlameThrower = require('../weapons/flamethrower');

/**
 * @static
 * @final
 * @memberof ClubCrawler.Objects.Items.FlameThrowerSwitch
 */
const DEFAULT_FLAMETHROWER_PICKUP_STATS = {
    spriteKey: "flamethrower",
    name: "flamethrowerPickup",
    duration: 0, //not implemented
    spriteStartFrame: "flamethrower-still", //not implemented
    spriteTouchFrame: "flamethrower-activated", //not implemented
    audioSpriteKey: "flamethrower-pickup-sound" //not implemented
}

/** 
 * @classdesc 
 * A class for a flamethrower pickup
 * 
 * @memberof ClubCrawler.Objects.Items
 * @extends Phaser.GameObjects.Image
*/
class FlameThrowerSwitch extends Phaser.GameObjects.Image {

    /**
     * Description
     * @param {ClubCrawler.Types.GameItemConfig} tiledConfig - The game item config as generated by Tiled and the Parser
     */
    constructor(tiledConfig) {
        let finalConfig = {};
        Object.assign(finalConfig, DEFAULT_FLAMETHROWER_PICKUP_STATS);
        Object.assign(finalConfig, tiledConfig);

        super(finalConfig.scene, finalConfig.x, finalConfig.y, finalConfig.spriteKey);

        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.setOrigin(0,0);
        this.setDepth(0);
        this.scene.physics.add.overlap(this.scene.player, this, this.onPlayerTouch, null, this);
    }

    onPlayerTouch() {
        var player = this.scene.player;
    
        if(dataManager.debug.items.overlap) {
            dataManager.log(`player touched flamethrower switch!`);
        }
        if(player.weapon.name != "flamethrower") {
            player.weapon = new FlameThrower({
                scene:player.scene,
                wielder:player,
                target:player.reticle
            })
        }
    }

}

module.exports = FlameThrowerSwitch;
      
//     /**
//      * @param {Object} config - GameItemConfig
//      */
//          constructor(config) {

//             super(config.scene, config.x, config.y, 'coin');
    
    
//             this.scene.add.existing(this);
//             this.scene.physics.add.existing(this);
//             this.setOrigin(0.5, 0.5);
    
//             if(config.player) {
//                 this.scene.physics.add.overlap(config.player, this, this.overlapWithPlayer);
//             } else if(config.scene) {
//                 this.scene.physics.add.overlap(config.scene.player, this, this.overlapWithPlayer);
//             }
    
//             this.scene.physics.add.collider(this, this.scene.mapManager.walls);
    
    
//             this.spinrate = config.spinrate ? config.spinrate : 4000;
//             /**
//              * Whether the coin has already been triggered
//              * @default false
//              * @type {boolean}
//              */
//             this.spinning = false;
//             /**
//              * The value of the coin
//              * @default 1
//              * @type {number}
//              */
//             this.coinValue = config.value ? config.value : config.tiledData ? config.tiledData.value : 1;
//             this.body.setMass(config.mass ? config.mass : 0.05);
//             this.body.setDrag(10,10);
//             this.sfx = this.scene.sound.addAudioSprite('gamecoin');
    
    
//         }
//         /**
//          * Callback function applied when player touches the coin. Increases the score and begins spinning the coin.
//          * 
//          * @param {ClubCrawler.Objects.Player} player - The player
//          * @param {ClubCrawler.Objects.GameCoin} coin - The coin 
//          */
//         overlapWithPlayer(player, coin) {
//             if(!coin.spinning) {
//                 coin.sfx.play('ding');
//                 dataManager.changeScore(coin.coinValue);
//                 coin.spinning = true;
//                 coin.body.setAngularVelocity(coin.spinrate);
//                 coin.body.setVelocityX(Math.random() * 100 - 50);
//                 coin.body.setVelocityY(Math.random() * 100 - 50);
//                 coin.scene.time.delayedCall(500,coin.fadeCoin, [], coin);
            
//             }
//         }

// }