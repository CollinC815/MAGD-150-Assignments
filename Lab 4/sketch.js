let button;
var state = true;
var rx,ry
var x = 10;
var y = 100;
var xupdate = 2;
var yupdate = 1;
function setup() {
  createCanvas(600, 500);
  r = random(255);
  g = random(255);
  b = random(255);
  background(255);
  button = createButton('TV Color');
  button.position(495, 60);
  button.mousePressed(changeColor);
  d=50;
}

function draw(){
  background(0)
  //tv frame
  fill(50);
  rect(30,30,540,440);
  
  //screen colors
  if (state){
  fill(r,g,b);
  rect(50,50,440,400);
    
  } else {
  //off
  fill(0);
  rect(50,50,440,400);
  }   
  
  
  //rectangle
  fill(255);
  ellipse(529,95,20,20)
  fill(0);
  text('off',522,99)
  
  rect(x, y, 50, 50);
    x += xupdate;
	y += yupdate;

    if (x > width || x <= 0) {
      xupdate *= -1;
    }
	
	if (y > height || y <= 0) {
		yupdate *= -1;
  }
}

function changeColor(){
	r = random(255);
	g = random(255);
	b = random(255);
}

function mousePressed() {
  if (dist(mouseX, mouseY, 529, 85) < d/2) {
    state = !state;
  }
}