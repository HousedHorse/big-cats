const FISH_SPRITES = ['fish1'];

// some helper functions

// main
window.onload = function() {

// we may begin loading game assets once this function call resolves
FBInstant.initializeAsync()
  .then(function() {
    // test
    console.log("hello game world!");
  });

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

    // start the game
    game.start();
  });

}
