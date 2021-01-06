var  gun, sb; 
var bulletgroup; 
var bulletboardgroup;  
var bombgroup;
var score = 0;  
var bo;
function preload () { 
  gunimg = loadImage("g.png") 
  b1 = loadImage("1b.jpg") 
  b2 = loadImage("2b.jpg") 
  b3 = loadImage("3b.jpg") 
  b4 = loadImage("4b.jpg")
  b5 = loadImage("5b.jpg") 
  b6 = loadImage("6b.jpg") 
  gbb = loadImage("gb.png") 
  bo = loadImage("b.jpg")
}
function setup() {
  createCanvas(900,600);
 gun =  createSprite(500,500, 100, 100); 
 gun.addImage(gunimg);  
 gun.scale=0.5; 
 bulletgroup = createGroup(); 
 bulletboardgroup = createGroup(); 
 bombgroup = createGroup();
}
function draw() { 
  background(21,24,23);  
  gun.y=mouseY;
  gun.x=mouseX; 
 board(); 
 bullet(); 
 bomb(); 
 if (bulletgroup.isTouching(bulletboardgroup)){ 
   bulletboardgroup.destroyEach(); 
   score = score+1 
 }  
 if(bulletgroup.isTouching(bombgroup)){ 
   bombgroup.destroyEach(); 
   score = score-1
 }
 text("score:"+score,10,20)
  drawSprites();
} 

function board (){ 
if(World.frameCount%200===0){ 
  var bb = createSprite(Math.round(random(30,450)),Math.round(random(30,450)),100,100) 
  bb.velocityY = Math.round(random(-1,5)) 
  bb.velocityX = Math.round(random(-1,5)) 
  var rand = Math.round(random(1,6)) 

  switch(rand){ 
    case 1: bb.addImage(b1) 
    break;
    case 2: bb.addImage(b2)
    break; 
    case 3: bb.addImage(b3) 
    break; 
    case 4: bb.addImage(b4) 
    break; 
    case 5: bb.addImage(b5) 
    break; 
    case 6: bb.addImage(b6)
    break; 
  }  
  bulletboardgroup.add(bb)
}
} 

function bullet (){ 
  if (keyDown("space")) {   
    var bullets = createSprite(100,100,100,100) 
    bullets.velocityX = 3;  
    bullets.x = gun.x; 
    bullets.y = gun.y; 
    bullets.addImage(gbb); 
    bullets.scale = 0.1;  
    bulletgroup.add(bullets)
  } 
}
  function bomb() { 
    if (World.frameCount%210===0){ 
      var bombs= createSprite (Math.round(random(50,450)),Math.round(random(50,450)),100,100) 
      bombs.velocityX = Math.round(random(-4,5)) 
     bombs.velocityY = Math.round(random(-4,5)) 
     bombs.addImage(bo); 
     bombs.scale = 0.1; 
     bombgroup.add(bombs);


      
    }
  }

