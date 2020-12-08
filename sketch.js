
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(50,370);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(200,400,800,10);
  
  obstaclesGroup = new Group();

  FoodGroup = new Group();
  
   score = 0;
}


function draw() {
  background(250);
  
 
  score = (Math.round(getFrameRate()/61)+score);
  
  text("Survival time:"+score,180,30);
  
  monkey.collide(ground);
  
  ground.velocityX = -5;
  
  if(ground.x<=0){
    ground.x = 200;
  }
  
  
  if(keyDown("space")&&monkey.y>=300){
    monkey.velocityY = -10;
  }
  
 
   monkey.velocityY = monkey.velocityY + 0.8

 
  spawnO();
  spawnB();
  drawSprites();
}

function spawnO () {
  if(frameCount%300===0){
    obstacle = createSprite(400,380,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.lifetime = 150;
    obstacle.scale = 0.1;
    obstacle.velocityX=-5;
    obstaclesGroup.add(obstacle);
  } 
}

function spawnB () {
  if(frameCount%80===0){
    banana = createSprite(400,20,20,20);
    banana.y = random(300,250);
    banana.addImage(bananaImage);
    banana.lifetime = 150;
    banana.scale = 0.1;
    banana.velocityX=-5;
    FoodGroup.add(banana);
  } 
}





