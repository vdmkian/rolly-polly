class Start extends Phaser.Scene {
    constructor() {
        super('Start')
    }
    create() {
        this.add.text(game.canvas.width / 2, game.canvas.height / 2, "Click anywhere to begin.",
            {
                font:"40px Arial",
                align: "center",
                color: "#FFFFFF",
            }).setOrigin(0.5, 0.5);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(500, 0xFF,0xFF,0xFF);
            this.time.delayedCall(500, () => this.scene.start('Intro'));
        });
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super("Intro")
    }
    preload(){
        this.load.path = './assets/';
        this.load.image = ('snail','snail.png');
        this.load.image = ('fairy','fairy.gif');
        
        
    }
    
    create() {
        this.snail = this.add.image(game.canvas.width * 0.2, game.canvas.height * 0.8, "snail");
        this.snail.setScale(0.5);

        this.tweens.add({
            targets: this.snail,
            x: game.canvas.width * 0.8,
            duration: 10000
        });

        this.title = this.add.text(game.canvas.width / 2, game.canvas.height / 2, "ROLLY POLLY",
        {
            font:"60px Arial",
            align: "center",
            color: "#FFFFFF",
        }).setOrigin(0.5, 0.5);

        this.fairy = this.add.image(game.canvas.width/1.5 , game.canvas.height/1.5  , "fairy");
        this.fairy.setScale(0.5);
        /*
        this.tweens.add({
            targets: this.fairy
            y: from ,
            yoyo: 1, 
        });*/

        // sample yoyo, repeated tween
        /*
        this.tweens.add({
            targets: this.container,
            x: '+=' + this.game.config.width * 0.01,
            repeat: 2,
            yoyo: true,
            ease: 'Sine.inOut',
            duration: 75
        });*/


        this.title.setInteractive()
        .on('pointerdown', () => {
            this.cameras.main.fade(500, 0xFF,0xFF,0xFF);
            this.time.delayedCall(500, () => this.scene.start('Victory'));
        });
    }
}

class Victory extends Phaser.Scene{
    constructor(){
        super("Victory")
    }
    preload(){
        this.load.path = './assets/';
        this.load.image = ('rolly','rolly.png');
        this.load.image = ('coin','coin.png');
    }
    create(){
        this.coin = this.add.image(960,540,'coin');
        this.rolly = this.add.image(0,540,'rolly');
        this.tweens.add({
            targets: this.rolly,
            x: 960,
            duration: 2000,
            repeat: 0,
            ease: 'cubic.in'
        });
        
        this.input.once('pointerdown', function (event)
        {
            this.scene.start('Intro');
        },this);

    }
}