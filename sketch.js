var balloon balloonImg;

function preload(){
  balloonImg = loadImage("HOT-AIR-BALLOON");
}

function setup() {
  createCanvas(800,400);
  balloon = createSprite(400, 200, 50, 50);
}

function draw() {
  background("BLUE");
  if(keyDown("LEFT_ARROW")){
    balloon.x = balloon.x -10; 
  }
  else if(keyDown("RIGHT_ARROW")){
    balloon.x = balloon.x +10;
  }
  else if(keyDown("UP_ARROW")){
    balloon.y = balloon.y -10;
  }
  else if(keyDown("DOWN_ARROW")){
    balloon.y = balloon.y +10;
  }
  drawSprites();
}