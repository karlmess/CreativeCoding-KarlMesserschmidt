function setup() {
  createCanvas(1000,600);
}

function draw() {
  var boxWidth = floor(width/4);
  var padding = 10;
  var lineSpacing = 5;
  
  //draw guides
  //stroke(255,0,0)
  //for (var j=1;j<4;j++){
  //  line(boxWidth*j,0, boxWidth*j,height);
  //}
  //stroke(0,0,0);
  //end guide section
  
  //-----Box 1 - Vertical lines
  for(var i=padding; i <= boxWidth-padding; i+=lineSpacing){
    line(i,padding, i, height-padding);
  }
  //-----Box 2 - Horizontal lines
  for(i=padding; i < height-padding; i+=lineSpacing){
    line(boxWidth+padding,i, 2*boxWidth-padding,i);
  }
  //-----Box 3 - 45 degrees, negative slope
  var slantSpace = floor(sqrt(2*lineSpacing*lineSpacing));
  for(i=padding;i<=height-boxWidth+padding;i+=slantSpace){
    line(2*boxWidth+padding,i, 3*boxWidth-padding,i+boxWidth-2*padding);
  }
  //Fills in corners
  for(i=slantSpace;i<=boxWidth-2*padding;i+=slantSpace){
    line(2*boxWidth+padding+i,padding, 3*boxWidth-padding,boxWidth-padding-i);
    line(2*boxWidth+padding,height-boxWidth+padding+i, 3*boxWidth-padding-i, height-padding);
  }
  //-----Box 4 - 45 degrees, positive slope
  for(i=padding;i<=height-boxWidth+padding;i+=slantSpace){
    line(4*boxWidth-padding,i, 3*boxWidth+padding,i+boxWidth-2*padding);
  }
  //Fills in corners
  for(i=slantSpace;i<=boxWidth-2*padding;i+=slantSpace){
    line(3*boxWidth+padding,boxWidth-padding-i, 4*boxWidth-padding-i,padding);
    line(3*boxWidth+padding+i,height-padding, 4*boxWidth-padding,height-boxWidth+i+padding);
  }
}