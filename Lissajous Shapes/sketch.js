/**
** Kevin's comments:  I like this!  some creative suggestions.  This is a great opportunity to think about the relationship between
form, time, and color.  Right now you have these beautiful ellipses oscillating and translating according to 2 lambdas.  What
if you combined the existing code here with an aditional oscillation for your fill color.  Perhaps the color for your digital 
painting can unfold over time. Below I have a small example of what this might look like.  Play around with this and see if you can expand on it.
Also of potential inspiration is Jackson Pollock's drip paintings: https://www.moma.org/artists/4675?locale=en
**/
var lambdaA = 180.0;
var lambdaB = 200.0;
var colorLambda = 720.0;
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
  //instead of using i here, try a simple algorithm like this:
  //colorAngle = i / colorLambda * TWO_PI;
  //var colorTo = color(abs(sin(colorAngle)*360), 100,100);
  //var fillCol = lerpColor(colorTo, color(300,45,100), map(second(), 0,59,0,1));
  //fill(fillCol);
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
