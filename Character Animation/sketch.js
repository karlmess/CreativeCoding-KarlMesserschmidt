var characterX=500/2;
var characterY=500/2;
var eyeDiameter = 30;

function setup() {
  createCanvas(500,500);
  background(255);
}

function iris(xPos,yPos){
  var maxTravel=eyeDiameter/2-5;
  var deltaX = constrain(map(mouseX, 0,width, -maxTravel,maxTravel), -maxTravel,maxTravel);
  var deltaY = constrain(map(mouseY, 0,height, -maxTravel,maxTravel), -maxTravel,maxTravel);
  
  var x = xPos+deltaX;
  var y = yPos+deltaY;
  strokeWeight(10);
  point(x,y);
  strokeWeight(1);
}

function eyes(xPos,yPos){
  var leftEyeX = xPos-15;
  var leftEyeY = yPos;
  var rightEyeX = xPos+15;
  var rightEyeY = yPos;
  
  colorMode(RGB);
  fill(255);
  //--Left Eyeball
  ellipse(leftEyeX,leftEyeY, eyeDiameter,eyeDiameter);
  //--Right Eyeball
  ellipse(rightEyeX,rightEyeY, eyeDiameter,eyeDiameter);
  iris(leftEyeX,leftEyeY);
  iris(rightEyeX,rightEyeY);
}



function head(xPos,yPos){
  var size=100;
  colorMode(HSB);
  //--Pompom
  fill(0,250,100);
  ellipse(xPos,yPos-(size/2), 30,30);
  //--Overall Head
  fill(30, 50, 100);
  ellipse(xPos, yPos, size,size);
  //--ADD BEANIE
  //--Stripe on beanie
  fill(0,300,100);
  arc(xPos,yPos, 100,100, -5*PI/6,-PI/6, CHORD);
  //--Rest of beanie
  fill(210,200,100);
  arc(xPos,yPos, 100,100, -4*PI/5,-PI/5, CHORD);
  //--Mouth
  line(xPos-10,yPos+30, xPos+10,yPos+30);
}

function keyPressed(){
  if(keyCode===LEFT_ARROW)
    characterX-=10;
  else if(keyCode===RIGHT_ARROW)
    characterX+=10;
  else if(keyCode===UP_ARROW)
    characterY-=10;
  else if(keyCode===DOWN_ARROW)
    characterY+=10;
}

function draw() {
  background(255);
  head(characterX,characterY);
  eyes(characterX,characterY);
}