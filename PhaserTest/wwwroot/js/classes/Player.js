class Player extends Phaser.Physics.Arcade.Image {
    constructor(scene, x, y, key, frame) {
        super(scene, x, y, key, frame);
        this.scene = scene;
        this.velocity = 160;

        // Enable Physics
        this.scene.physics.world.enable(this);
        // Set Immovable just in case
        this.setImmovable(false);

        this.setScale(2);
        this.body.setCollideWorldBounds(true);
        // Add the player to existing scene
        this.scene.add.existing(this);
    }

    update(cursors) {
        this.body.setVelocity(0);

        if (cursors.left.isDown) {
            console.log("left");
            this.body.setVelocityX(-this.velocity);
        } else if (cursors.right.isDown) {
            console.log("right");
            this.body.setVelocityX(this.velocity);
        }

        if (cursors.up.isDown) {
            console.log("up");
            this.body.setVelocityY(-this.velocity);
        } else if (cursors.down.isDown) {
            console.log("down");
            this.body.setVelocityY(this.velocity);
        }
    }
}