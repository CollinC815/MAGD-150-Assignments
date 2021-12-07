function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
//moon
fill('#8E5E3E')
arc(78, 150, 30, 30, 0, PI + QUARTER_PI, OPEN);
  
//planet one
fill('purple');
ellipse(100,100,100,100);
  
//large planet
colorMode(HSB);
fill(270,90,71);
stroke(255);
bezier(400, 0, 200, 50, 200, 350, 400, 400);
  
  
//asteroid
colorMode(RGB);
fill('gray')
quad(100, 250, 140, 234, 160, 256, 165, 315);
line(170, 210, 220, 150);
line(190, 240, 250, 160);
line(200, 260, 250, 190);
}

