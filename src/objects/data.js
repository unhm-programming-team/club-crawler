import Phaser from "phaser";

const emitter = new Phaser.Events.EventEmitter()


/**
 * @memberof ClubCrawler.Objects
 * 
 * @property {number} score - The game score. Displayed on the overlay.
 * @property {number} health - The player health. Todo: Display on the overlay.
 * @property {Phaser.Events.EventEmitter} emitter - The global {@link https://newdocs.phaser.io/docs/3.52.0/Phaser.Events.EventEmitter Phaser.Events.EventEmitter} instance for cross scene and global communication.
 */
const dataManager = {
    score: 0,
    health: 0,
    emitter: emitter,
    /**
     * Changes the score and emits the 'scoreChange' event.
     * @param {number} change - The amount to change the score by.
     * @returns {number} - The data manager score
     */
    changeScore: function(change) {
        dataManager.score += 1;
        emitter.emit('scoreChange');
        return dataManager.score;
    }
    
} ;

module.exports = dataManager;