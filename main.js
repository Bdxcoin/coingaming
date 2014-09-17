// your saviour : http://docs.phaser.io

var main = {
	preload: function() {
		// lol you lost
	},

	create: function() { 
		this.circle = 0;
		this.bmd = game.add.bitmapData(game.width, game.height);
		this.bmd.fill(0, 0, 0, 1);
		bmd.addToWorld();

	    this.text = game.make.text(400, 300, "The Game", { font: "bold 32px Arial", fill: "#fff" });
	    this.text.anchor.set(0.5);
	},

	update: function() {
		this.bmd.fill(0, 0, 0, 0.05);

		//	Un-comment to see the rotation in action
		// text.rotation += 0.05;

	    this.bmd.draw(this.text, 400 + Math.cos(this.circle)*100, 300 + Math.sin(this.circle)*100, null, null, 'destination-out');
		this.circle += 0.1;
	},
};

// Initialize Phaser, and start our 'main' state 
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'thegame');
game.state.add('main', main);
game.state.start('main');

