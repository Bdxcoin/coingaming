// your saviour : http://docs.phaser.io

var main = {
	preload: function() {
		// lol you lost
	},

	create: function() { 
		this.gametext = game.add.text(400, 300, 'The Game', { fontSize: '72px', fill: '#fff' });
		this.circle = 0;
	},

	update: function() {
		this.gametext.cameraOffset.x = 400 + Math.cos(this.circle) * 100;
		this.gametext.cameraOffset.y = 300 + Math.sin(this.circle) * 100;
		this.circle += 0.1;
	},
};

// Initialize Phaser, and start our 'main' state 
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'thegame');
game.state.add('main', main);
game.state.start('main');

