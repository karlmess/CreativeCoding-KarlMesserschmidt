function setup() {
  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER);
}

function draw() {
  colorMode(HSB);
  background(0);
  xCenter = width/2;
  yCenter = height/2;
  var radius = 1-(frameCount % xCenter)/xCenter;
  translate((xCenter*radius*cos(radians(frameCount))+xCenter), 
            (yCenter*radius*sin(radians(frameCount))+yCenter));
  scale(radius);
  rotate(radians(-2*frameCount));
  fill(frameCount % 360,160,220);
  noStroke;
  rect(0,0,100,160);
}