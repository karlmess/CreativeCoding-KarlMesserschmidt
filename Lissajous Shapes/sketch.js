var lambdaA = 180.0;
var lambdaB = 200.0;
var pointCount = 0;
var angle = 0.0;
var amplitude = 300;
var i = 0;

function setup(){
  createCanvas(800,800);
}

function draw(){
  var xRadius = 20*cos(radians(frameCount))*sin(radians(i*PI));
  var yRadius = 20*sin(radians(frameCount));
  if(pointCount > 2000){
    noLoop();
  }
  noStroke()
  translate(width/2, height/2);
  colorMode(HSB);
  
  angle = i / lambdaA * TWO_PI;
  var y = sin(angle)* amplitude;
  angle = i / lambdaB * TWO_PI;
  var x = sin(angle)* amplitude;
  i+=2;
  fill(i%360,160,200);
  ellipse(x,y,xRadius,yRadius); 
  pointCount++;
}

function mousePressed(){
  background(255);
  i=0;
  pointCount=0;
  loop();
}
