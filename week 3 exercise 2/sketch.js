function setup() {
  createCanvas(500,500)
}

function draw() {
  var n = floor((width/10)/2);
  for(var i=0; i<=width; i+=(width/70)){
    for(var j=0; j<=height; j+=(height/70)){
      quad(i+n,j, i,j+n, i+n,j+2*n, i+2*n,j+n);
    }
  }
}