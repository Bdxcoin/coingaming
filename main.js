// your saviour : http://docs.phaser.io

var main = {
	preload: function() {
		// lol you lost
	},

	create: function() { 
		this.gametext = game.add.text(400, 300, 'The Game', { fontSize: '72px', fill: '#fff' });
	},

	update: function() {
		
	},
};

// Initialize Phaser, and start our 'main' state 
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'thegame');
game.state.add('main', main);
game.state.start('main');

