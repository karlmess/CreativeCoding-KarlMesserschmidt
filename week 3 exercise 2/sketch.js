/**
* Kevin's notes: I really like this sketch.  It may be simple, but there is a lot of creativity
you can bring to this and build on what you've created here (perhaps a perfect midterm project).
For inspiration, I recommend checking out Casey Reas's Yes/No 2: http://reas.com/yesno_s2/
*/
function setup() {
  createCanvas(500,500)
}

function draw() {
  //this is technically correct but something to keep in mind when writing larger sketches::
  //code inside the draw loop will execute each frame.  Some operations are more "expensive" for the computer
  //and when executed repeatedly will slow down your sketch.  Try moving expressions like this into your setup function
  //and then adding a new function "windowResized" to recalculate your variables when necessary.
  //see example below...
  var n = floor((width/10)/2);
  for(var i=0; i<=width; i+=(width/70)){
    for(var j=0; j<=height; j+=(height/70)){
      quad(i+n,j, i,j+n, i+n,j+2*n, i+2*n,j+n);
    }
  }
}

//window resize function, called every time the window is resized.
//Assumes you have a dynamic canvas size like: createCanvas(windowWidth, windowHeight);
/*

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
  n = floor(width/5);
  ...
}

*/
