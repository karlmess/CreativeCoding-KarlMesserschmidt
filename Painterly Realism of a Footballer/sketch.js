function setup() {
  createCanvas(400,600);
  background(220,220,220);
  
  // Draw big purple quadrilateral at the top of the painting ---------------
  var quadHeight = height*0.25;
  var quadWidth = width*0.5;
  
  fill(50,0,50);
  quad(quadWidth*0.9,0, quadWidth*0.5,quadHeight*0.87, quadWidth*1.1,quadHeight, quadWidth*1.5,quadHeight*0.15);
  
  // Draw green circle at the bottom ----------------------------------------
  var circleRadius = floor(width/15);
  
  fill(0,75,0);
  strokeWeight(0);
  ellipse(width*0.55,height*0.85,circleRadius,circleRadius);
  
  // Draw red line ----------------------------------------------------------
  var length = width*0.2;
  var rise = height*0.01;
  var run = floor(sqrt(length*length - rise*rise));
  
  stroke(150,0,0);
  strokeWeight(10);
  line(width*0.5, height*0.8, width*0.5+run, height*0.8+rise);

  // Draw yellow quad -------------------------------------------------------
  
  fill(200,150,0);
  strokeWeight(0);
  quad(width*0.48,height*0.52, width*0.485,height*0.7, width*0.6,height*0.705, width*0.67,height*0.525);
  
  // Draw blue line ---------------------------------------------------------
  length = width*0.7;
  rise = height*0.035;
  run = floor(sqrt(length*length - rise*rise));
  
  stroke(0,0,150);
  strokeWeight(13);
  line(width*0.15, height*0.64, width*0.15+run, height*0.65+rise);

  // Draw red rectangle -----------------------------------------------------
  fill(150,0,0);
  strokeWeight(0);
  quad(width*0.39,height*0.77, width*0.4,height*0.8, width*0.55,height*0.78, width*0.54,height*0.75);
  
  // Draw black rectangle ---------------------------------------------------
  fill(0,0,0);
  strokeWeight(0);
  quad(width*0.27,height*0.77, width*0.3,height*0.8, width*0.43,height*0.75, width*0.40,height*0.72);
  
  // Draw small black square ------------------------------------------------
  var rectSize = width*0.16;
  
  fill(0,0,0);
  rect(width*0.2,height*0.6, rectSize, rectSize);
  

}

function draw() {
  
}