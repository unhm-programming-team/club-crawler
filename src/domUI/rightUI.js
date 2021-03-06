const InventoryUI = require('./inventoryUI.js');
const HealthBarUI = require('./healthBar');
const WeaponUI = require('./activeWeapon');
const ScoreUI = require('./score.js');

const DEFAULT_STYLES = {
    id:"club-crawler-right-ui",
    style: {
        width: "250px"
    }
}

/**
 * @classdesc Creates instances and DOM elements for the right side UI.
 * @memberof ClubCrawler.DOMUserInterface
 */
class RightUI {
    /**
     * @param {HTMLElement} element - The right UI container element.
     */
    constructor(element) {
        /** @member {HTMLElement} - The containing html element. */
        this.element = element;
        Object.assign(this.element, DEFAULT_STYLES);
        Object.assign(this.element.style, DEFAULT_STYLES.style);        

        const inventoryElement = document.createElement('div');
        /** @member {ClubCrawler.DOMUserInterface.InventoryUI} - Shows player inventory information.*/
        this.inventoryUI = new InventoryUI(inventoryElement);

        const weaponElement = document.createElement('div');
        /** @member {ClubCrawler.DOMUserInterface.WeaponUI} - Shows player weapon information. */
        this.weaponUI = new WeaponUI(weaponElement);

        const healthBarElement = document.createElement('div');
        /** @member {ClubCrawler.DOMUserInterface.HealthBar} - Shows player health. */
        this.healthBarUI = new HealthBarUI(healthBarElement);

        const scoreElement = document.createElement('div');
        /** @member {ClubCrawler.DOMUserInterface.ScoreUI} - Shows score.*/
        this.scoreUI = new ScoreUI(scoreElement);
        
        this.element.appendChild(inventoryElement);
        this.element.appendChild(weaponElement);
        this.element.appendChild(healthBarElement);
        this.element.appendChild(scoreElement);
        /** @member {ClubCrawler.UserInterface.DOMUIManager} - The UImanager. */
        this.uiManager = null;
    }

    /**
     * Loads the manager
     * @param {ClubCrawler.UserInterface.DOMUIManager} - The manager.
     */
    loadManager(uiManager) {
        this.uiManager = uiManager;
        this.inventoryUI.loadManager(uiManager);
        this.weaponUI.loadManager(uiManager);
    }
}

module.exports = RightUI;