var canvas, backgroundImage;

var gameState = 0;
var contestantCount;

var database;

var quiz,question,contestant;

function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}

function draw(){
  if(contestantCount===4){
    game.update(1);
  }
  if(gameState===1){
    clear();
    game.play();
  }
}
