var fixedRect, movingRect;
var myRect1,myRect2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
myRect1=createSprite(200,400,50,50);
myRect1.velocityX=+5;

myRect2=createSprite(800,400,50,50);
myRect2.velocityX=-5;
}

function draw() {
  background(0,0,0);  

 bounce(movingRect,fixedRect);
 bounce(myRect1,myRect2);
 drawSprites();
}





