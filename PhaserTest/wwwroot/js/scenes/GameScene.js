class GameScene extends Phaser.Scene {
    constructor() {
        super("Game");
    }

    create() {
        var goldPickupAudio = this.sound.add("goldSound", { loop: false, volume: 1 });
        var button = this.add.image(100, 100, "button1");
        button.setOrigin(0.5, 0.5);

        this.add.sprite(300, 100, "button1");

        this.coins = this.physics.add.sprite(300, 300, "items", 3); //index of the sprite-sheet element

        this.wall = this.physics.add.image(500, 100, "button1");
        this.wall.setImmovable();

        this.player = this.physics.add.image(32, 32, "characters", 0);
        this.player.setScale(2);
        this.player.body.setCollideWorldBounds(true);

        this.physics.add.collider(this.player, this.wall);
        this.physics.add.overlap(this.player, this.coins, function (player, coins) {
            goldPickupAudio.play();
            coins.destroy();
        });

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        this.player.setVelocity(0);

        if (this.cursors.left.isDown) {
            console.log("left");
            this.player.setVelocityX(-160);
        } else if (this.cursors.right.isDown) {
            console.log("right");
            this.player.setVelocityX(160);
        }

        if (this.cursors.up.isDown) {
            console.log("up");
            this.player.setVelocityY(-160);
        } else if (this.cursors.down.isDown) {
            console.log("down");
            this.player.setVelocityY(160);
        }
    }
}