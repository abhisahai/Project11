var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
// var bomb,bombImg;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  
  createCanvas(315,windowHeight);
  
// Moving background
path=createSprite(159,height/4);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);

// bomb = createSprite(randomNumber(0,width));
// bombImg = loadImage('bomb.png');
// bomb.loadAnimation(bombImg)

  

leftBoundary=createSprite(0,height/2,0,height);

// leftBoundary.invisible = false;
// leftBoundary.visible = true;
// leftBoundary.invisible = true;
 leftBoundary.visible = false;


rightBoundary=createSprite(width,height/2,0,height);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 8;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  //if(bomb.isTouchingEdges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background

  /*if(path.y > 400 ){
    path.y = height/2;
  }*/

  /*if(path.y > 400 ){
   
  path.y = height/2;
  }*/

  /*if(path.y > 400 ){
path.y = height/2;}*/

if(path.y > 500){path.y = height/2.6+30;}
  
  drawSprites();
}
