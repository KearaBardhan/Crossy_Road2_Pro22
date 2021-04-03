var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school,road,bottomgrass1;
function preload()
{
 
}

function setup() {
  createCanvas(1366,2700);
  
  carGroup1 = new Group();
  logGroup1 = new Group();
  
 
 for (var i=0;i<6;i++){
     bottomgrass1= createSprite(683,height-50-(i*400), width,grassHeight);
   if (i%2===0){
      road=createSprite(683,height-150-(i*400)-grassHeight, width,300)
      road.shapeColor="black";
   }  
   bottomgrass1.shapeColor="green";
 } 
for (var i=0; i<40;i++){
  cars=new Car (2);
carGroup1.add(cars.drive);
}
for (var i=0; i<40;i++){
  logs=new Log (-2);
logGroup1.add(logs.spt);
}
for (i=1;i<logGroup1.lenght;i++){
  if (logGroup1[i].x<0)
{
  logGroup1[i].x=width;
}
for (i=1;i<carGroup1.lenght;i++){
  if (carGroup1[i].x<0)
{
  carGroup1[i].x=width;
}
}
}
 
  player=new Player(width/2,height-25);
 }
 translate (0,-player.play.y+height-150)

function draw() {
  background("skyblue");
 
 

  drawSprites();
}

function keyPressed(){
  if (keyCode==UP_ARROW){
    player.move(0,-1);
  }
  elseif(keyCode==DOWN_ARROW)
    player.move(0,1);
  
  elseif(keyCode==RIGHT_ARROW)
    player.move(-1,0);
  elseif(keyCode==RIGHT_ARROW)
    player.move(1,0);
  
}

