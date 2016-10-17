var lineSpacing = 5;
var theta1=0.0;
var theta2=0.0;
var rotationSpeed=0.01;

function setup() {
  createCanvas(500,500);
  ellipseMode(CENTER);
}

function draw() {
  
  background(0);
  stroke(255,255,255);
  noFill();
  
  var diagonal=sqrt((width*width)+(height*height));
  
  //Circle background
  translate(width/2, height/2);
  for(var i=1;i<diagonal;i+=lineSpacing){
    ellipse(0,0,i,i);
  }
  
  //Clockwise rotating lines
  rotate(theta1);
  translate(-diagonal/2, -diagonal/2);
  beginShape();
    for(var j=0;j<diagonal;j+=lineSpacing){
      line(0,j, diagonal,j);
    }
  endShape();
  theta1 += rotationSpeed;
  
  //Counter-clockwise rotating lines
  translate(diagonal/2, diagonal/2)
  rotate(theta2);
  translate(-diagonal/2, -diagonal/2);  
  beginShape();
    for(var k=0;k<diagonal;k+=lineSpacing){
      line(k,0, k,diagonal);
    }
  endShape();
  theta2 -= 2*rotationSpeed;
  

}