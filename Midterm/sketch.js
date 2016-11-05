//  Use arrow keys to move around the canvas
//  Use spacebar to talk, Shift to blink
//  Eyes follow mouse
//  Guy.headSize controls the overall size of the character.
//  There are certainly ways to make this code more efficient if I started it from scratch.

function Guy(xPos, yPos) {
  this.headSize = 100;
  this.faceColor = 30;
  this.hatColor1 = 210;
  this.hatColor2 = 0;
  this.coatColor = 230;
  this.eyeDiameter = this.headSize*0.3;
  this.xPos = xPos;
  this.yPos = yPos;
  this.movementSpeed = 2;
}

Guy.prototype = {
  constructor : Guy,
  head : function(){
    colorMode(HSB);
    //--Pompom
    fill(this.hatColor2,250,100);
    ellipse(this.xPos,this.yPos-(this.headSize/2), this.eyeDiameter,this.eyeDiameter);
   //--Overall Head
    fill(this.faceColor, 50, 100);
    ellipse(this.xPos, this.yPos, this.headSize,this.headSize);
    //--ADD BEANIE
    //--Stripe on beanie
    fill(this.hatColor2,300,100);
    arc(this.xPos,this.yPos, this.headSize,this.headSize, -5*PI/6,-PI/6, CHORD);
    //--Rest of beanie
    fill(this.hatColor1,200,100);
    arc(this.xPos,this.yPos, this.headSize,this.headSize, -4*PI/5,-PI/5, CHORD);
  },
  
  iris : function(xPos,yPos){
    // Sets maximum amount of travel to within the circumference of the eye
    var maxTravel=this.eyeDiameter/2-5;
    // constrain movement to within + or - maxTravel
    var deltaX = constrain(map(mouseX, 0,width, -maxTravel,maxTravel), -maxTravel,maxTravel);
    var deltaY = constrain(map(mouseY, 0,height, -maxTravel,maxTravel), -maxTravel,maxTravel);
    // Add change in position
    var x = xPos+deltaX;
    var y = yPos+deltaY;
    strokeWeight(this.eyeDiameter/3);
    point(x,y);
    strokeWeight(1);
  },
  
  eyes : function(){
    if(keyIsDown(SHIFT)){
      // Blink eyes
      line(this.xPos-this.eyeDiameter,this.yPos, this.xPos+this.eyeDiameter,this.yPos);
    }
    else{
      colorMode(RGB);
      fill(255);
      // Eyeball centers
      var leftEyeX = this.xPos-(this.eyeDiameter/2);
      var leftEyeY = this.yPos;
      var rightEyeX = this.xPos+(this.eyeDiameter/2);
      var rightEyeY = this.yPos;
      //--Left Eyeball
      ellipse(leftEyeX,leftEyeY, this.eyeDiameter,this.eyeDiameter);
      //--Right Eyeball
      ellipse(rightEyeX,rightEyeY, this.eyeDiameter,this.eyeDiameter);
      this.iris(leftEyeX,leftEyeY);
      this.iris(rightEyeX,rightEyeY);
    }
  },
  
  torso : function(){
    // Generates the torso
    beginShape();
      colorMode(HSB);
      fill(this.coatColor,50,40);
      // --- Shoulders
      arc(
        this.xPos, this.yPos+1.2*this.headSize/2,
        1.1*this.headSize, 1.2*this.headSize/2,
        PI, 0
      );
      // --- Body
      vertex(this.xPos-(0.8*this.headSize/2), this.yPos+1.2*this.headSize/2); // Upper left
      vertex(this.xPos-(0.8*this.headSize/2), this.yPos+(0.8*this.headSize)); // Lower left
      vertex(this.xPos+(0.8*this.headSize/2), this.yPos+(0.8*this.headSize)); // Lower right
      vertex(this.xPos+(0.8*this.headSize/2), this.yPos+1.2*this.headSize/2); // Upper right
    endShape();  
  },
  
  arms : function(){
    colorMode(HSB);
    beginShape(); // --- LEFT ARM
      vertex(this.xPos-(0.8*this.headSize/2), this.yPos+1.2*this.headSize/2); // Upper right
      vertex(this.xPos-(0.8*this.headSize/2), this.yPos+this.headSize*0.7); // Lower right
      vertex(this.xPos-(1.1*this.headSize)/2, this.yPos+this.headSize*0.7); // Lower left
      vertex(this.xPos-(1.1*this.headSize)/2, this.yPos+1.2*this.headSize/2); // Upper left
    endShape();

    beginShape(); // --- RIGHT ARM
      vertex(this.xPos+(0.8*this.headSize/2), this.yPos+1.2*this.headSize/2); // Upper left
      vertex(this.xPos+(0.8*this.headSize/2), this.yPos+this.headSize*0.7); // Lower left
      vertex(this.xPos+(1.1*this.headSize)/2, this.yPos+this.headSize*0.7); // Lower right
      vertex(this.xPos+(1.1*this.headSize)/2, this.yPos+1.2*this.headSize/2); // Upper right
    endShape();
     
    beginShape(); // --- MITTENS
      fill(this.hatColor2,300,100);
      // --- Left hand
      ellipse(this.xPos-this.headSize/2,this.yPos+this.headSize*0.7, this.eyeDiameter*0.6,this.eyeDiameter*0.75);
      // --- Right hand
      ellipse(this.xPos+this.headSize/2,this.yPos+this.headSize*0.7, this.eyeDiameter*0.6,this.eyeDiameter*0.75);
    endShape();
    
    beginShape(); // --- THUMBS
      fill(this.hatColor2,300,100);
      // --- Left hand
      ellipse(this.xPos-(this.headSize/2)*0.87,this.yPos+this.headSize*0.65, this.eyeDiameter*0.3,this.eyeDiameter*0.25);
      // --- Right hand
      ellipse(this.xPos+(this.headSize/2)*0.87,this.yPos+this.headSize*0.65, this.eyeDiameter*0.3,this.eyeDiameter*0.25);
    endShape();
  },
  
  legs : function(){
    colorMode(HSB);
    var displace=0;
    // Makes the feet move when the character is in motion.
    if(this.move()){
      displace = walk()*5;
    }
    else{
      displace=0;
    }
    fill(120,40,40);
    // --- Pants
    beginShape();
      vertex(this.xPos-(0.8*this.headSize/2), this.yPos+(0.8*this.headSize));  // Upper left
      vertex(this.xPos+(0.8*this.headSize/2), this.yPos+(0.8*this.headSize));  // Upper right
      vertex(this.xPos+(0.8*this.headSize/2), this.yPos+(0.9*this.headSize));  // Lower right
      vertex(this.xPos-(0.8*this.headSize/2), this.yPos+(0.9*this.headSize));  // Lower left
    endShape(CLOSE);
    fill(0);
    // --- Feet
    beginShape();
      vertex(this.xPos-(0.85*this.headSize/2), this.yPos+0.85*this.headSize+displace);  // Upper left
      vertex(this.xPos+(0.85*this.headSize/2), this.yPos+0.85*this.headSize-displace);  // Upper right
      vertex(this.xPos+(0.9*this.headSize/2), this.yPos+0.95*this.headSize-displace);  // Lower right
      vertex(this.xPos-(0.9*this.headSize/2), this.yPos+0.95*this.headSize+displace);  // Lower left
    endShape(CLOSE);
  },
  
  move : function(){
    // Moves the character around when arrow keys are pressed.
    // Speed can be changed by changing the guy.movementSpeed variable.
    if(keyIsDown(LEFT_ARROW)){
      characterX-=this.movementSpeed;
      return true;
    }
    else if(keyIsDown(RIGHT_ARROW)){
      characterX+=this.movementSpeed;
      return true;
    }
    else if(keyIsDown(UP_ARROW)){
      characterY-=this.movementSpeed;
      return true;
    }
    else if(keyIsDown(DOWN_ARROW)){
      characterY+=this.movementSpeed;
      return true;
    }
    else
      return false;
  },
  
  mouth : function(){
    //  Press spacebar to open mouth
    if(keyIsDown(32)){
      fill(0);
      ellipse(this.xPos,this.yPos+(0.3*this.headSize), (0.15*this.headSize),(0.1*this.headSize));
    }
    else{
      line(this.xPos-(0.1*this.headSize),this.yPos+(0.3*this.headSize), this.xPos+(0.1*this.headSize),this.yPos+(0.3*this.headSize));
    }
  }
}

var guy;
var characterX=500/2;
var characterY=500/2;
var i=1, j=1; // Controller for walk() function

function setup() {
  createCanvas(500,500);
  background(255);
}

function draw() {
  background(255);
  walk(); // Oscillates between 1 and -1, used in Guy.legs()
  guy = new Guy(characterX,characterY)
  guy.torso();
  guy.arms();
  guy.legs();
  guy.head();
  guy.eyes();
  guy.mouth();
  guy.move();
}

function walk(){
  if(i<frameRate()/2){
    i++
  }
  else{
    i=-frameRate()/2;
  }
  if(i<0)
    return -1;
  else if(i>0)
    return 1;
}
