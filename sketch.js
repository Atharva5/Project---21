var car, wall;



var  weight;

weight = random(400,1500);


function setup() {
  createCanvas(800,400);

  bullet = createSprite(50,200,30,30);
  bullet.velocityX = random(10,20);

  wall = createSprite(750,200,20,300);
  
  
}

function draw() {
  background(0);
  
  bullet.shapeColor = "white";

  wall.shapeColor = "brown";

 
 
 
  if(bullet.isTouching(wall)){
    bullet.velocityX = 0;
    
    var deformation = 0.5 *weight *velocityX *velocityX/22509;
   if(deformation > 180)
   {
     bullet.shapeColor = color(255,0,0);
   }
   if(deformation < 180 && deformation > 100)
   {
     bullet.shapeColor = color(230,230,0);
   }
   if(deformation < 100)
   {
     Bullet.shapeColor = color(0,255,0);
   }
}


  drawSprites();
}
