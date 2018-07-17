var Letter = require("./letter.js");
var guesses = 10;


function Word(word) {
  this.word = word.toUpperCase();
  this.isWordComplete = false;
  this.letterArr = [];
  this.letterStateArr = [];
  this.wordSplitter = function() {
    //need to take the new word and split the letters up
    var splitWord = word.split("");
    console.log(splitWord);

    //loops through the letters in the word and inserts a " ", "-", or "_" where it is in the word.
    for (var i = 0; i < splitWord.length; i++) {
      this.letterArr[i] = new Letter(splitWord[i]);
      if (splitWord[i] === " ") {
        this.letterStateArr.push(" ");
      }
      else if(splitWord[i] === "-"){
        this.letterStateArr.push("-");
      } 
      else {
        this.letterStateArr.push("_");
      }
    }
    // console.log(this.letterArr);
    console.log(this.letterStateArr.join(" "));
  };

  //checks to see if letter in word is correct. 
  this.guessLetter = function(character) {

    var isCorrectLetter = false;
    
    // console.log("letter guessing:", character);
    for (var i = 0; i < this.letterArr.length; i++) {
      // console.log("LetterState: ", i, this.letterStateArr[i]);
      // console.log(this.letterArr[i].letter);

      if ("_" === this.letterStateArr[i]) {
          
          this.letterArr[i].guessed(character);
          var letterState = this.letterArr[i].letterGuessedCorrectly();

          if (letterState != "_"){
            isCorrectLetter = true;
          }

          // console.log("guessed: ", letterState);
          // console.log(this.letterArr[i]);
          this.letterStateArr[i] = letterState;
          // console.log("LetterState: ", i, this.letterStateArr[i]);   
      }
    }

    if(this.letterStateArr.indexOf("_") === -1){
      this.isWordComplete = true
      console.log("Completed word:", this.isWordComplete);
    } 
    console.log("\n", this.letterStateArr.join(" "), "\n");
    // console.log("Correct Letter:", isCorrectLetter);
    return isCorrectLetter;
  };
}


// var word1 = new Word('cat');

// word1.wordSplitter();
// word1.guessLetter('c');
// word1.guessLetter('a');
// word1.guessLetter('t');

module.exports = Word;
