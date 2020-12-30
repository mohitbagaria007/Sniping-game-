var  gun, sb; 
function preload () { 
  gunimg = loadImage("g.png")
}
function setup() {
  createCanvas(1000,1000);
 gun =  createSprite(500,500, 100, 100); 
 gun.addImage(gunimg);  
 gun.scale=0.5;
}
function draw() { 
  background(21,24,23);  
  //gun.y=mouseY;
 // gun.x=mouseX;
  drawSprites();
}