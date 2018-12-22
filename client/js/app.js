// https://www.facebook.com/embed/instantgames/1918442504907856/player?game_url=https%3A%2F%2Flocalhost%3A8080
// http-server --ssl -c-1 -p 8080 -a 127.0.0.1

const CAT_SPRITES = ['cat1'];
const MISC        = ['slot'];
var preloaded = {};

// some helper functions

// main
window.onload = function() {

var game = new Game();
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

// we may begin loading game assets once this function call resolves
FBInstant.initializeAsync()
  .then(function() {
    // set total assets to load
    var total = CAT_SPRITES.length;
    var prog  = 0;

    // --- START LOADING ---

    console.log("begin loading")

    // load cat sprites
    CAT_SPRITES.forEach(function(name, index) {
      var img = new Image();
      img.src = './img/cat_sprites/' + name + '.png';
      preloaded[name] = img;
      prog++;
      FBInstant.setLoadingProgress(Math.ceil(prog / total) * 100);
    });

    // load misc image assets
    MISC.forEach(function(name, index) {
      var img = new Image();
      img.src = './img/' + name + '.png';
      preloaded[name] = img;
      prog++;
      FBInstant.setLoadingProgress(Math.ceil(prog / total) * 100);
    });

    // --- FINISHED LOADING ---

    console.log("done loading")

    // start the game
    FBInstant.startGameAsync()
      .then(function() {
        // game meta-data
        var contextId = FBInstant.context.getID();
        var contextType = FBInstant.context.getType();

        // player meta-data
        var playerName = FBInstant.player.getName();
        var playerPic = FBInstant.player.getPhoto();
        var playerId = FBInstant.player.getID();

        game.start();
      });
  });

};

function Game() {
  this.start = function() {
    console.log("about to draw!");
    console.log(canvas);
    console.log(ctx);
    console.log("hello!");
    ctx.setFill("#FF0000");
    ctx.fillRect(5,5,5,5);
    ctx.drawImage(preloaded['slot'], 5, 5);
  }
}

function Slot(_x, _y) {
  var x = _x || 0;
  var y = _y || 0;

  this.x() = function() { return x; }
  this.y() = function() { return y; }
  this.setX(_x) = function() { x = _x; return this; }
  this.setY(_y) = function() { y = _y; return this; }

  this.draw = function() {
    ctx.drawImage(preloaded['slot'], 5, 5);
  }
}
