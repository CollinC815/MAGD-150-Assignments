var r=0;
var g=0;
var b= 0;
var w = 30;
var h = 30;

function setup() {
  createCanvas(500, 500);
  frameRate(30);
  //background
  background(74, 38, 219);
}

function draw() {
  
  
  
  //can
  fill(255);
  rect(100,0,300,500);
  
  
  //walls
  let leftWall = 120
  let rightWall = 380
  let xc = constrain(mouseX, leftWall, rightWall);
  let xy = constrain(pmouseX, leftWall, rightWall);
  
  
  //draw walls
  noStroke();
  line(leftWall, 0, leftWall, height);
  line(rightWall, 0, rightWall, height);

  //bubbles
  fill(r,g,b);
  ellipse(xc, mouseY,35.5, 35.5);
  print("(" + xc + ", " + mouseY + ")");
  print(pmouseX + ' -> ' + mouseX);
  
  
  //colored bubbles
  r = (r + 1) % 256;
  g = (g + 5) % 256;
  b = (b + 2) % 256;
  
  //number of bubbles
  fill(10,250,0);
  text(frameCount, width / 2, height / 2);
}
function mousePressed(){
  
  let minX = 33
  let minY = 160
  text(min(frameCount), minX, minY);
  loop();
}

function mouseReleased() {
  
  print(frameCount)
  let maxX = 33;
  let maxY = 80;
  text(max(frameCount), maxX, maxY);
  noLoop();
}



