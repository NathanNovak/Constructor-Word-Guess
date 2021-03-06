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
    // console.log(splitWord);

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
    console.log(this.letterStateArr.join(" "), "\n");
  };

  //checks to see if letter in word is correct. 
  this.guessLetter = function(character) {

    var isCorrectLetter = false;
    
    for (var i = 0; i < this.letterArr.length; i++) {

      if ("_" === this.letterStateArr[i]) {
          
          this.letterArr[i].guessed(character);
          var letterState = this.letterArr[i].letterGuessedCorrectly();

          if (letterState != "_"){
            isCorrectLetter = true;
          }

          this.letterStateArr[i] = letterState;
      }
    }

    if(this.letterStateArr.indexOf("_") === -1){
      this.isWordComplete = true;
    } 
    console.log("\n", this.letterStateArr.join(" "), "\n");
    return isCorrectLetter;
  };
}

module.exports = Word;
