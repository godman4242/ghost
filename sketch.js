var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
  doorsGroup = new Group();
climbersGroup - new Group();
invisibleBlockGroup = new Group
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 4;
  ghost = createSprite(200,200,50,50)
  ghost.scale = 0.3
  ghost.addImage("ghost",ghostImg)
}

function draw() {
  background(200);
  if(gameState === "play"){

    
  



    
  if(tower.y > 400){
      tower.y = 300
    
    }
    if(keyDown("left_arrow")){
      ghost.x = ghost.x  - 3
   
   
   
    }


    if(keyDown("right_arrow")){
      ghost.x = ghost.x  + 3
   
   
   
    }



    if(keyDown("space")){
      ghost.velocityY = -6
   
   
   
    }




ghost.velocityY = ghost.velocityY + 1.3
//if(climbersGroup.isTouching(ghost)){ ghost.velocityY = 0; }
if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600){
   ghost.destroy();
    gameState = "end" }


    spawndoors()
    drawSprites()
}
    if (gameState === "end"){
text("gameover",230,250)




    }
    
}

function spawndoors(){
if(frameCount % 250=== 0)
{
door = createSprite(200,-50)
door.addImage(doorImg)
climber = createSprite(200.10)
climber.addImage(climberImg)
door.x = Math.round(random(120,400))

door.velocityY = 5
climber.x = door.x
climber.velocityY = 5
ghost.depth = door.depth;
 ghost.depth +=1;


door.lifetime = 800
climber.lifetime = 800
doorsGroup.add(door)
climbersGroup.add(climber)


}


}