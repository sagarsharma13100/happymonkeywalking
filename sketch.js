
var monkey , monkey_running;
var banana ,bananaImage, obsticle, obsticleImage;
var FoodGroup, obsticlesGroup;
var st=0;
var ground;
var score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obsticleImage = loadImage("obstacle.png");
}



function setup() {
  createCanvas(400,400);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running );
  monkey.scale=0.1;

  ground=createSprite(400,350,900,10);
  ground.velocityX =-4;
  ground.x = ground.width/2;
  console.log(ground.x)
  
  obsticlesGroup = createGroup();
  FoodGroup = createGroup();
  
   monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  monkey.debug = true
}


function draw() {
  background("lightGreen");
  
  stroke("white");
  textSize(20);
  fill("white");
  
  stroke("black");
  textSize(20);
  fill("black");
  st=Math.ceil(frameCount/frameRate())
  text("Survival Time:- "+st,100,50)
 // st = st + Math.round(frameCount/300

  
  
    ground.velocityX = -4;
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    if(keyDown("space")&& monkey.y >=280) {
        monkey.velocityY = -13;
    }
    
    monkey.velocityY = monkey.velocityY + 0.8
  
  
    so();
    bananas();
    if(obsticlesGroup.isTouching(monkey)){
         ground.velocityX = 0;
      monkey.velocityY=0;
      obsticlesGroup.setLifetimeEach(-1);
      FoodGroup.setLifetimeEach(-1);
     obsticlesGroup.setVelocityXEach(0);
     FoodGroup.setVelocityXEach(0);
      
   }
  
   if(FoodGroup.isTouching(monkey)){
     score=score+2;
     FoodGroup.destroyEach();
   }
     
  
  
    
    monkey.collide(ground);
  
  
  
  drawSprites();
 
  stroke("black");
  textSize(20);
  fill("black");
  text("energy:- "+score,300,50)
}
function so(){
 if (frameCount % 300===0){
  obsticle=createSprite(400,330,10,40);
   obsticle.addImage("moving",obsticleImage)
  obsticle.velocityX=-6;
   obsticle.scale=0.09;
   obsticle.lifetime=70;
   obsticlesGroup.add(obsticle);
   
 }
}
function bananas(){
  if (frameCount%90===0){ 
    banana=createSprite(440,160,20,20);
    banana.addImage("moving",bananaImage);
    banana.velocityX=-4;
    banana.scale=0.09;
    banana.lifetime=100;
    banana.y=Math.round(random(150,230));
    
    FoodGroup.add(banana); 
   
  }
}





