var backgroundImage, shilohImage, basketImage, bunImage, cheeseImage, lettuceImage, tomatoImage
var bg, shiloh, basket, bun, cheese, lettuce, tomato
function preload(){
  backgroundImage = loadImage("images/background.jpeg")
  shilohImage = loadImage("images/Shiloh.png")
  basketImage = loadImage("images/basket.png")
  bunImage = loadImage("images/bun.png")
  cheeseImage = loadImage("images/cheese.png")
  lettuceImage = loadImage("images/Lettuce.png")
  tomatoImage = loadImage("images/tomato.png")
}


function setup() {
  createCanvas(displayWidth, displayHeight);
  shiloh = createSprite(displayWidth/2, displayHeight-170);
  shiloh.addImage(shilohImage)
  shiloh.scale = 0.7

}

function draw() {
  background(backgroundImage); 



  spawnIngredients();
  spawnBlocks();
  drawSprites();
}

function spawnBlocks(){
  if(frameCount % 150===0){
    var blocks = createSprite(300,0, 70,50);
    blocks.x = Math.round(random(displayWidth-1200, displayWidth-100));
    blocks.velocityY = 5;
    var rand = Math.round(random(1,4));
    switch(rand){
      case 1: blocks.shapeColor = "green";
      break;
      case 2: blocks.shapeColor = "red";
      break;
      case 3: blocks.shapeColor = "yellow";
      break;
      case 4: blocks.shapeColor = "#b5651d";
      break;

    }
  }
}


function spawnIngredients(){
  if(frameCount % 70===0){
    var ingredients = createSprite(300,0);
    ingredients.x = Math.round(random(displayWidth-1200, displayWidth-100));
    ingredients.velocityY = 5;
    var rand = Math.round(random(1,4));
    switch(rand){
      case 1: ingredients.addImage(lettuceImage);
      break;
      case 2: ingredients.addImage(tomatoImage);
      break;
      case 3: ingredients.addImage(cheeseImage);
      break;
      case 4: ingredients.addImage(bunImage);
      break;

    }
    ingredients.scale=0.5
  }
}