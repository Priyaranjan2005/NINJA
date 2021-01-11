var leftWall, rightWall;
var ninja,ninjaImage;
var ground,groundImage,invisibleGround;
var tower,towerImage;

function preload(){
  ninja_groundImage=loadImage("ninja_on_ground.png");
  groundImage=loadImage("ground1.png");
  towerImage=loadImage("tower.png");
  ninja_jumpingImage=loadImage("ninja_jumping.png");
}

function setup() {
  createCanvas(innerWidth,innerHeight);

  tower=createSprite(innerWidth/2,innerHeight/2,400,400);
  tower.addImage("tower_I",towerImage);

  leftWall=createSprite(550, innerHeight/2, 50, innerHeight);

  rightWall=createSprite(1050, innerHeight/2, 50, innerHeight);

  // ground=createSprite(800, innerHeight-30, 500,60);
  // ground.addImage("ground",groundImage);
  // ground.scale=0.2;

  invisibleGround=createSprite(800,innerHeight+10,300,40)
  invisibleGround.debug = true;

  ninja=createSprite(800,innerHeight-30,40,40);
  ninja.addImage("ninja_I",ninja_groundImage);
  ninja.scale=0.3;
  ninja.setCollider("rectangle",0,0,ninja.width,240);
  ninja.debug=true;
  
}

function draw() {
  background("lightblue"); 
  
  if(keyDown("space")){
    ninja.addImage(ninja_jumpingImage);
    ninja.velocityY=-15;
  }

  ninja.velocityY=ninja.velocityY+0.5;
  ninja.collide(invisibleGround);
  
  drawSprites();
}