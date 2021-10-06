const Weapons = require('./weapon');
const Weapon = Weapons.Weapon;
const Projectile = Weapons.Projectile;

/**
 * @memberof ClubCrawler.Objects.Weapons
 * 
 * @classdesc A FlameThrower
 */
const FLAMETHROWER_DEFAULT_STATS = {
    name: "flamethrower",
    duration: 800,
    projectileVelocity: 700,
    spin: 0,
    mass: 0,
    damage: 1, // doesnt need a lot cause overlaps trigger a bunch
    fireRate: 75, //lower is faster
    spriteKey: "flamestream",
    audioSpriteKey: "flame-sound",
    audioFireKey: "fire",
    audioBounceKey: "hit",
    audioHitKey: "hit",
    bounce: 0,
    hitEnemies: false,
    overlapEnemies: true,
    hitWalls: true,
    hitDestructibles: false,
    overlapDestructibles: true,
    hitPlayer: false,
    overlapPlayer: true,
    destroyOnWallTouch: false,
    initialFlameScale: 0.5, // not working for some reason - have to apply directly
    finalFlameScale: 1,
}

class FlameThrower extends Weapon {
    constructor(config) {
        const finalConfig = {};
        Object.assign(finalConfig, FLAMETHROWER_DEFAULT_STATS);
        Object.assign(finalConfig, config);
        super(finalConfig);
    }
    /**
     * Fires a flame class instead of regular projectile, called repeatedly if mouse pressed
     * @override
     * @param {number} time - update time, used to set lastTimeFired
     */
    fire(time) {
        if(time > this.lastTimeFired + this.fireRate) {
            let newFlameStream = new Flame(this);
            this.lastTimeFired = time;
        }

    }
}

class Flame extends Projectile {

    constructor(config) {
        super(config);
        this.initialFlameScale = FLAMETHROWER_DEFAULT_STATS.initialFlameScale;
        this.finalFlameScale = FLAMETHROWER_DEFAULT_STATS.finalFlameScale;
        this.setScale(this.initialFlameScale, this.initialFlameScale)
    }

    dealDamage() {

    }

    fireAt(target) {
        let hypoteneuse = Phaser.Math.Distance.Between(this.x, this.y, target.x, target.y);

        let adjacent = target.x - this.x;
        let opposite = target.y - this.y;
        let sine = opposite/hypoteneuse;
        let cosine = adjacent/hypoteneuse;

        let speedX = this.projectileVelocity * cosine;
        let speedY = this.projectileVelocity * sine; 

        let offsetX = this.x + ( (this.width/2+40) * cosine);
        let offsetY = this.y + ( (this.height/2+40) * sine);

        this.setX(offsetX);
        this.setY(offsetY);



        this.body.setVelocityX(speedX);
        this.body.setVelocityY(speedY);

        if(speedX > 0) {
            this.setRotation(Math.asin(sine));
        }
        else {
            this.setRotation(-Math.asin(sine));
            this.setFlipX(true);
        }

        //this.setAngle(Phaser.Math.RAD_TO_DEG * Math.asin(sine));
        

        // if(speedX < 0) {
        //     this.setFlipX(true);
        // }
        // else {
        //     this.setAngle(Phaser.Math.RAD_TO_DEG * Math.acos(cosine));
        //     this.setFlipX(true);
        // }
        if(this.shotFX) {
            this.shotFX.play(this.audioFireKey);

        }
        this.growInSize();
    }
    growInSize() {
        const flame = this;
        //console.log(this.initialFlameScale, this.finalFlameScale);
        var tween = this.scene.tweens.addCounter({
            from: 0.7,
            to: 2.2,
            targets:this,
            duration: flame.duration/2,
            ease: 'Quadratic',
            onUpdate: function() {
                val = tween.getValue();
                if(flame) {
                    flame.setScale(val*0.7,val);
                    flame.setAlpha(1-tween.progress+0.5);
                }
            }
        })

    }
}

module.exports = FlameThrower;