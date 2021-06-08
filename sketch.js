var ball;

function setup() {
  createCanvas(800,400);
  ball=createSprite(400, 200, 10, 10);
  ball.shapeColor="blue"
  wall1=createSprite(100, 100, 100, 10);
  wall1.shapeColor="blue"
  wall2=createSprite(100, 300, 100, 10);
  wall2.shapeColor="blue"
}

function draw() {
  background("red");  
  if(keyDown("UP_ARROW")){
    ball.y=ball.y-5;
  }
  if(keyDown("LEFT_ARROW")){
    ball.x=ball.x-5;
  }
  if(keyDown("RIGHT_ARROW")){
    ball.x=ball.x+5;
  }
  if(keyDown("DOWN_ARROW")){
    ball.y=ball.y+5;
  }
  if(ball.isTouching(wall1)){
    ball.destroy();
  }
  if(ball.isTouching(wall2)){
    ball.destroy();
  }
  drawSprites();
}