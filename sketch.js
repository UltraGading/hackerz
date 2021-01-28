var alarm, blueAgent, blueExitPoint, dataFile
var lock, redAgent, redExitPoint, transactionLink, virus, alarmGroup
var dataFileGroup, redExitPointGroup, blueExitPointGroup, lockGroup
var virusGroup, transactionLinkGroup
var alarmImg, blueAgentImg
var blueExitpointImg, dataFileImg1, dataFileImg2, dataFileImg3, lockImg, redAgentImg
var redExitPointImg, transactionLinkImg, virusImg
var database, form, player, game, millisecond, playerCount
var gameState = 0
var health = 100;
var score = 0;
var playerCount, agents, allPlayers;

function preload(){
alarmImg = loadImage('images/Alarm.png')
blueAgentImg = loadImage('images/BlueAgent.png')
blueExitpointImg = loadImage('images/BlueExitPoint.png')
dataFileImg1 = loadImage('images/DataFile1.png')
dataFileImg2 = loadImage('images/DataFile2.png')
dataFileImg3 = loadImage('images/DataFile3.png')
lockImg = loadImage('images/Lock.png')
redAgentImg = loadImage('images/RedAgent.png')
redExitPointImg = loadImage('images/RedExitPoint.png')
transactionLinkImg = loadImage('images/TransactionLink.png')
virusImg = loadImage('images/Virus.png')
}

function setup() {
createCanvas(1366,768);
database = firebase.database()
game = new Game()
alarmGroup = new Group()
blueExitPointGroup = new Group()
dataFileGroup = new Group()
lockGroup = new Group()
redExitPointGroup = new Group()
transactionLinkGroup = new Group()
virusGroup = new Group()
game.getState()
game.start()
}

function draw() {
background(202,131,142);
millisecond = round(millis());
if(playerCount === 2){
game.update(1);
form.hide()
}
if(gameState === 1){
clear();
game.play();
}
}
/*if(gameState == 2){
game.end();
}*/
