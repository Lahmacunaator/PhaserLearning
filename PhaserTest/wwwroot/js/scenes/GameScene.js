class GameScene extends Phaser.Scene {
    constructor() {
        super("Game");
    }

    create() {
        var goldPickupAudio = this.sound.add("goldSound", { loop: false, volume: 1 });
        const button = this.add.image(100, 100, "button1");
        button.setOrigin(0.5, 0.5);

        this.add.sprite(300, 100, "button1");

        this.coins = new Chest(this, 300, 300, "items", 0); //index of the sprite-sheet element

        this.wall = this.physics.add.image(500, 100, "button1");
        this.wall.setImmovable();

        this.player = new Player(this, 32, 32, "characters", 0);

        this.physics.add.collider(this.player, this.wall);
        this.physics.add.overlap(this.player, this.coins, function (player, coins) {
            goldPickupAudio.play();
            coins.destroy();
        });

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        this.player.update(this.cursors);
    }
}