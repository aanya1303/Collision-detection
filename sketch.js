var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(100,100,40,60);
  fixedRect=createSprite(400,200,40,40);
}

function draw() {
  background(255,255,255); 

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;


  if(movingRect.x - fixedRect.x < (movingRect.width+fixedRect.width)/2 &&
  	fixedRect.x - movingRect.x < (movingRect.width+fixedRect.width)/2 &&
  	movingRect.y - fixedRect.y < (movingRect.height + fixedRect.height)/2 &&
  	fixedRect.y - movingRect.y < (movingRect.height + fixedRect.height)/2
  	){
  	movingRect.shapeColor="red";
  	fixedRect.shapeColor="red";
  }
  else{
  	movingRect.shapeColor="green";
  	fixedRect.shapeColor="green";	
  }

  drawSprites();
}