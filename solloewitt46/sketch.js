  // Create two fixed arrays of random numbers
  // Supports up to 1000 lines
  var xRand = [], yRand = [];
  for (var i=0; i<1000; i++) {
    xRand.push(Math.random());
    yRand.push(Math.random());
  }

function setup() {
  createCanvas(1000,500);
  background(0,0,0);
  stroke(0,255,0);

}

function draw() {
  var bubbleSize = 0, numLines = 55, spacing = width/numLines;
  
  // Generate coordinates of the bubbles by 
  var x = [], y = [];
  for (var i=0; i<numLines; i++) {
    x[i] = Math.round(xRand[i]*(spacing/2));
    y[i] = Math.round(yRand[i]*height);
  }

  // Draw lines
  for (i=0;i<numLines;i++){
    bubbleSize = x[i];
    line(i*spacing,0, i*spacing,y[i]-bubbleSize);
    line(i*spacing,y[i]-bubbleSize, i*spacing+x[i],y[i]);
    line(i*spacing+x[i],y[i], i*spacing,y[i]+bubbleSize);
    line(i*spacing,y[i]+bubbleSize, i*spacing,height);
  }
}