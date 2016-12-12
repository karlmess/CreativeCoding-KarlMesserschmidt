// ------------------------------------- //
// ------------ AUDIO MIXER ------------ //
// ------------------------------------- //
// -----Hit play to start the loop------ //
// --------Faders adjust volume--------- //
// --------Checkboxes are mutes--------- //
// ------------------------------------- //

var track=[];  // Array of audio tracks
var trackVolume=[];  // Array of volume controllers, mapped to audio tracks
var amplitude=[];  // Measures amplitude of individual tracks
var mute=[];  // Mute buttons
//var peakDetect=[];
var start;  // Start button
var topButton;  // Button to go to top of the song
var go = true;  // Toggles between play and pause states
var numTracks=8;

//-----  Pre-load tracks
function preload(){
  soundFormats('wav');
  track[0]=loadSound('/sounds/kick.wav');
  track[1]=loadSound('/sounds/snare.wav');
  track[2]=loadSound('/sounds/hat.wav');
  track[3]=loadSound('/sounds/bass.wav');
  track[4]=loadSound('/sounds/chords.wav');
  track[5]=loadSound('/sounds/guitar.wav');
  track[6]=loadSound('/sounds/arpeggios.wav');
  track[7]=loadSound('/sounds/rhythm.wav');
}

//-----  Start and stop tracks when PLAY/PAUSE is pressed
function playPause(){
  if(go){
    for(var i=0;i<numTracks;i++){
      track[i].loop();
    }
    go=false;
  }
  else{
    for(i=0;i<numTracks;i++){
      track[i].pause();
    }
    go=true;
  }
}
//-----  Go back to the top of the loop
function goToTop(){
  go=false;
  for(var i=0;i<numTracks;i++){
    track[i].jump(0); 
    track[i].stop(0);
  }
}

//-----  Use spacebar to start and stop
function keyPressed(){
  if(keyCode===32){
    playPause();
  }
}

//-----  Create fader bank
function makeFaders(){
  rectMode(CENTER);
  colorMode(HSB);
  noStroke();
  var trackNo;
  for(var i=0;i<numTracks;i++){
    //-----  Fader backgrounds
    fill(120,100,i*5+40);
    rect((width/2),109+(i*20), 200,20, 5);
    //-----  Label with track numbers
    fill(255);
    trackNo=i+1;
    text(str(trackNo), (width/2)-75,115+(i*20));
    //-----  Create volume faders
    trackVolume[i]=createSlider(0,1,1,0.0001);
    //-----  Position volume faders
    trackVolume[i].position(width/2-50,100+(i*20));
  }
}



function setup() {
  createCanvas(windowWidth,windowHeight);
  background(50);
  //-----  Create TOP button
  topButton = createButton('TOP');
  topButton.position(width/2+40,20);
  topButton.mousePressed(goToTop);
  
  //-----  Create play button
  start = createButton('PLAY/PAUSE');
  start.position(width/2-50,20);
  start.mousePressed(playPause);
  
  makeFaders();
  makeMutes();
  
  //-----  Create amplitude trackers
  for(var i=0;i<numTracks;i++){
    amplitude[i]=new p5.Amplitude();
    amplitude[i].setInput(track[i]);
    amplitude[i].toggleNormalize[true];
    //peakDetect[i]=new p5.PeakDetect;
  }
}

//-----  Create mute buttons
function makeMutes(){

  for(i=0;i<numTracks;i++){
    mute[i]=createCheckbox('',true);
    mute[i].position(width/2+80,100+(i*20));
  }
}

function draw() {
  //-----  Set volume
  for(var i=0;i<numTracks;i++){
    if(mute[i].checked()){
      track[i].setVolume(trackVolume[i].value());
    }
    else{
      track[i].setVolume(0);
    }
  }
  meters();
  
}

//-----  Meter section
function meters(){

  var level = [];
  var peak = [];
  var xBase=width/2-200
  //-----  Tray
  rectMode(CENTER);
  fill(15);
  rect(width/2,height*0.6,500,120,20);
  //-----  Circles
  for(i=0;i<numTracks;i++){
   level[i]=amplitude[i].getLevel();
   colorMode(HSB)
   fill(level[i]*360,200,200);
   //ellipse(xBase+(i*55),height*0.6,level[i]*100,level[i]*100);
   rectMode(CORNERS);
   rect(xBase+(i*53),height*0.65-level[i]*150,  xBase+(i*53)+30,height*0.65);
  }
}