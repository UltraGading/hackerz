class Game {
constructor(){
}

getState(){
var gameStateRef= database.ref('gameState');
gameStateRef.on("value",function(data){
gameState = data.val();
})
}

update(state){
database.ref('/').update({
gameState: state
});
}

async start(){
if(gameState === 0){
player = new Player();
var playerCountRef = await database.ref('playerCount').once("value");
if(playerCountRef.exists()){
playerCount = playerCountRef.val();
player.getCount();
}
form = new Form()
form.display();
}

redAgent = createSprite(100,568,1,1)
redAgent.addImage(redAgentImg)
redAgent.scale = 0.7
blueAgent = createSprite(300,568,1,1)
blueAgent.addImage(blueAgentImg)
agents = [redAgent, blueAgent]
}
play(){
background('#20B2AA')
fill('#4B0082')
text('Survival time: \n' + millisecond/1000, 241, 40);
text('Health: '+health,798,40)
text('Score: '+score,863,40)
/*
this.alarms()
this.blueExitPoints()
this.dataFiles()
this.locks()
this.redExitPoints()
this.transactionLinks()
this.viruses()
*/
redAgent.setCollider("rectangle",-10,5,95,135)
redAgent.debug = true
blueAgent.setCollider("rectangle",-10,5,70,100)
blueAgent.debug = true
drawSprites();

if(alarmGroup.isTouching(player)){
alarmGroup.destroyEach()
health+=100
}
if(blueExitPointGroup.isTouching(player)){
blueExitPointGroup.destroyEach()
game.update(2)
}
if(dataFileGroup.isTouching(player)){
dataFileGroup.destroyEach()
score+=1;
}
if(lockGroup.isTouching(player)){
lockGroup.destroyEach()
health+=100
}
if(redExitPointGroup.isTouching(player)){
redExitPointGroup.destroyEach()
game.update(2)
}
if(transactionLinkGroup.isTouching(player)){
transactionLinkGroup.destroyEach()
health+=100
}
if(virusGroup.isTouching(player)){
virusGroup.destroyEach()
health-=100
if(allPlayers !== undefined){
var index = 0;
var x = 175 ;
var y;
for(var plr in allPlayers){
index = index + 1 ;
x = x + 200;
y = displayHeight - allPlayers[plr].distance;
agents[index-1].x = x;
agents[index-1].y = y;
}
}
if(keyDown('W')){
player.y -= 10;
}
if(keyDown('A')){
player.x -= 10;
}
if(keyDown('S')){
player.y += 10;
}
if(keyDown('D')){
player.x += 10;
}
}
}
alarms(){
if(frameCount % 140 == 0){
alarm = createSprite(550,0,1,1)
alarm.addImage(alarmImg)
alarm.x = random(100,1300)
alarm.velocityY = 10;
alarm.setLifetime = 70;
alarmGroup.add(alarm)
alarm.setCollider("rectangle",-30,-30,alarm.width/5-15,alarm.height/6+15);
alarm.debug = true
}
}

blueExitPoints(){
if(frameCount % 200 == 0){
blueExitPoint = createSprite(550,0,1,1)
blueExitPoint.addImage(blueExitpointImg)
blueExitPoint.x = random(100,1300)
blueExitPoint.velocityY = 10;
blueExitPoint.setLifetime = 70;
blueExitPointGroup.add(blueExitPoint)
blueExitPoint.setCollider("rectangle",-30,0,60,90)
blueExitPoint.debug = true
}
}
dataFiles(){
if(frameCount % 80 == 0){
dataFile = createSprite(550,0,1,1)
var rand = Math.round(random(1,3))
switch(rand){
case 1: dataFile.addImage(dataFileImg1)
break;
case 2: dataFile.addImage(dataFileImg2)
break;
case 3: dataFile.addImage(dataFileImg3)
break;
default: break;
}
dataFile.x = Math.round(random(100,1300))
dataFile.velocityY = 1;
dataFile.setLifetime = 70;
dataFileGroup.add(dataFile)
dataFile.setCollider("rectangle",0,0,100,100)
}
}
locks(){
if(frameCount % 140 == 0){
lock = createSprite(550,0,1,1)
lock.addImage(lockImg)
lock.scale = 0.7
lock.x = random(100,1300)
lock.velocityY = 1;
lock.setLifetime = 70;
lockGroup.add(lock)
lock.setCollider("rectangle",-30,-25,163,160);
lock.debug = true
}
}
redExitPoints(){
if(frameCount % 200 == 0){
redExitPoint = createSprite(550,0,1,1)
redExitPoint.addImage(redExitPointImg)
redExitPoint.scale = 0.9
redExitPoint.x = random(100,1300)
redExitPoint.velocityY = 10;
redExitPoint.setLifetime = 70;
redExitPointGroup.add(redExitPoint)
redExitPoint.setCollider("rectangle",-60,0,80,120)
redExitPoint.debug = true
}
}
transactionLinks(){
if(frameCount % 140 == 0){
transactionLink = createSprite(550,0,1,1)
transactionLink.addImage(transactionLinkImg)
transactionLink.scale = 0.5
transactionLink.x = random(100,1300)
transactionLink.velocityY = 1;
transactionLink.setLifetime = 70;
transactionLinkGroup.add(transactionLink)
transactionLink.setCollider("rectangle",-15,5,110,51)
transactionLink.debug = true;
}
}
viruses(){
if(frameCount % 200 == 0){
virus = createSprite(550,0,1,1)
virus.addImage(virusImg)
virus.x = random(100,1300)
virus.velocityY = 10;
virus.setLifetime = 70;
virusGroup.add(virus)
virus.setCollider("rectangle",-30,-10,80,100)
virus.debug = true;
}
}
}