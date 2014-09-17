// your saviour : http://docs.phaser.io

var main = {
	preload: function() { 
    game.load.image('game', 'assets/game.jpg');
	},

	create: function() { 
		this.circle = 0;
		this.gamesprite = game.add.sprite(400, 300, 'game');
		this.gamesprite.anchor.setTo(0.5, 0.5);
	},

	update: function() {
		this.gamesprite.x = 400 + Math.cos(this.circle) * 100;
		this.gamesprite.y = 300 + Math.sin(this.circle) * 100;
		this.circle += 0.05;
	},
};

// Initialize Phaser, and start our 'main' state 
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'thegame');
game.state.add('main', main);
game.state.start('main');

