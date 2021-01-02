var  gun, sb; 
function preload () { 
  gunimg = loadImage("g.png") 
  b1 = loadImage("1b.jpg") 
  b2 = loadImage("2b.jpg") 
  b3 = loadImage("3b.jpg") 
  b4 = loadImage("4b.jpg")
  b5 = loadImage("5b.jpg") 
  b6 = loadImage("6b.jpg")
}
function setup() {
  createCanvas(1000,1000);
 gun =  createSprite(500,500, 100, 100); 
 gun.addImage(gunimg);  
 gun.scale=0.5;
}
function draw() { 
  background(21,24,23);  
  gun.y=mouseY;
  gun.x=mouseX; 
 board();
  drawSprites();
} 

function board (){ 
if(World.frameCount%200===0){ 
  var bb = createSprite(Math.round(random(50,800)),Math.round(random(50,800)),100,100) 
  bb.velocityY = Math.round(random(-1,5)) 
  bb.velocityX = Math.round(random(-1,5))
}
}