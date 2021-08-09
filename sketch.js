var garden, rabbit;
var gardenImg, rabbitImg;
var leafImg, appleImg;


function preload() {
  var select_sprites = Math.round(random(1, 2));
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leafImg = loadImage("orangeLeaf.png");
  appleImg = loadImage("apple.png");

}

function setup() {

  createCanvas(400, 400);

  // Moving background
  garden = createSprite(200, 200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180, 340, 30, 30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);



}
function createApples() {
  apple = createSprite(random(50, 150), 40, 10, 10);
  apple.addImage(appleImg);
  apple.x = Math.round(random(100, 300));
  apple.scale = 0.05;
  apple.velocityY = 15;
}


function createLeaves() {
  leaf = createSprite(random(50, 150), 40, 10, 10);
  leaf.addImage(leafImg);
  leaf.x = Math.round(random(100, 300));
  leaf.scale = 0.05;
  leaf.velocityY = 15;

}


function draw() {
  background(0);

  edges = createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;
  var select_sprites = Math.round(random(1, 2));

  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createApples();
    }
    else {
      createLeaves();
    }
  }
   

  drawSprites();
}


