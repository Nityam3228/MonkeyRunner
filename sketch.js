
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x= ground.width/2;
  console.log(ground.x)
  
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
  
}


function draw() {
  background (220);
  
  ground.x= ground.width/2;
  
  if(keyDown("space")&& monkey.y >= 300){
    
    monkey.velocityY=-15;
    
  }
  
  if(monkey.isTouching(obstacleGroup)){
     
     ground.velocityX=0;
     bananaGroup.setVelocityXEach(0);
     obstacleGroup.setVelocityXEach(0);
     
     }

  
  monkey.velocityY=monkey.velocityY + 0.8
  monkey.collide(ground);
  
  Banana();
  Obstacle();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+ score,500,50);    
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ survivalTime,100,50);
  
  drawSprites();
}

function Banana(){
  
   if(frameCount % 80 === 0){
 banana =createSprite(350,100,10,10);
    banana .y = Math.round(random(120,200));
     
     banana.addImage(bananaImage);
     banana.scale=0.1;
     
     banana.velocityX=-4;
     banana.lifetime =100;
     
     bananaGroup.add(banana)

   }
}


function Obstacle(){
  
  if(frameCount% 300 === 0){
    obstacle=createSprite(350,326,10,10);
    obstacle.velocityX=-4;
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.1;
    obstacle.lifetime=100;
    
    obstacleGroup.add(obstacle)
}

}













