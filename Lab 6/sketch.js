//This is the postition of the ball and size.
var posX = 227;
var posY = 0;
var ballDiameter = 25;


var velocityY=0.0;
var gravity = 1; 

//This is how high the ball jumps.
var onGround = false;
var jumpSize = -20;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#add8e6');
  
  bounce();
  print (velocityY + " is " + onGround);
  
  //stairs and flag
  strokeWeight(4);
  stroke(55);
  
  fill(255);
  
  rect(150,348,50,50);
  rect(150,248,50,50);
  rect(150,298,50,50);
 
  rect(200,348,50,50);
  rect(200,198,50,50);
  rect(200,248,50,50);
  rect(200,298,50,50);
  
  rect(305,373,25,25);
  
  strokeWeight(2);
  rect(315,72,5,300)
  
  strokeWeight(4);
  rect(50,348,50,50);
  //flag
  rect(316,72,75,50)
  
  //This is a rectangle being translated to another spot.
  rect(100,298,50,50);
  translate(0,50);
  rect(100,298,50,50);
  
  
}
//This is the function of the ball/character bouncing
function bounce(){
  
  velocityY = gravity + velocityY;
  
  posY= velocityY + posY;
  
  if (posY +(ballDiameter/2) >= (height/2)){
    posY= (height/2)- (ballDiameter/2);
    onGround = true;
  } else {
    onGround = false;
  }
 
for (let x=1; x<2; x++){
  noFill();
  ellipse(posX, posY, ballDiameter+(x*5), ballDiameter + (x*5));
}
}

function mousePressed(){
  if (onGround){
    jump();
  }
}

function jump(){
  velocityY = jumpSize;
}