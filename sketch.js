// Initialize global array variables
var lines = [];  // Holds the full text
var lexicon = [];  // Holds the lexicon to pull words from
var scriptWords = [];  // Individual words from lines[]
var partsOfSpeech = [];  // Keeps track of the parts of speech, indexes along with scriptWords[]
var output = [];  // Holds the formatted output

// Pre-load text
function preload(){
  lines=loadStrings('script.txt');
}

function setup() {
  // Set up canvas
  createCanvas(windowWidth,windowHeight);
  background(50);
  fill(240);
  textSize(20);
  noStroke();
  // Load lexicon from RiTa
  lexicon = new RiLexicon();
  // Tokenize full text into individual words
  scriptWords = RiTa.tokenize(lines[0]);
  // Get parts of speech from full text
  partsOfSpeech = RiTa.getPosTags(lines[0]);
  // Re-compile orginal text for output
  output = RiTa.untokenize(scriptWords);
  // Print original text
  text(output, 0,0,width,height);
}

// Mad-lib section, performed on mouseclick
function mousePressed(){
  // Re-draw background
  background(50);
  // Create a copy of scriptWords[] to work from
  var madlib = scriptWords.slice();
  // For each word:
  for(var i=0;i<madlib.length;i++){
    // If the word is a noun or adverb:
    if(partsOfSpeech[i]==='nn'
      || partsOfSpeech[i]==='nns'
      || partsOfSpeech[i]==='nnp'
      || partsOfSpeech[i]==='nnps'
      || partsOfSpeech[i]==='jj'
      || partsOfSpeech[i]==='jjr'
      || partsOfSpeech[i]==='jjs'){
      // If yes, reassign a random word from the lexicon that matches that part of speech
      madlib[i]=lexicon.randomWord(partsOfSpeech[i]);
      // If the original word was capitalized, capitalize the new word
      if(scriptWords[i][0]===scriptWords[i].toUpperCase()[0]){
        madlib[i]=madlib[i].toUpperCase()[0]+madlib[i].slice(1);
      }
      
    }
  }
  // Compile the new madlib arrangement into the output
  output = RiTa.untokenize(madlib);
  // Print to canvas
  text(output, 0,0,width,height);  
}